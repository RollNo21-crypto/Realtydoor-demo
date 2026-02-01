'use client';

import Script from 'next/script';
import { whatsappConfig } from '@/lib/whatsapp-config';
import { WhatsAppChat } from './whatsapp-chat';

/**
 * Unified WhatsApp Widget Component
 * Supports both basic WhatsApp links and WATI (WhatsApp Team Inbox) integration
 * 
 * Mode is controlled via lib/whatsapp-config.ts
 */
export function WhatsAppWidget() {
    const mode = whatsappConfig.mode;

    // WATI Mode: Load WATI's official widget script
    if (mode === 'wati') {
        const { scriptUrl, accountNumber, buttonName, welcomeMessage, brandImageUrl, buttonColor, position } = whatsappConfig.wati;

        // Validate WATI configuration
        if (!scriptUrl || !accountNumber) {
            console.warn('WATI mode is enabled but scriptUrl or accountNumber is missing. Please configure in lib/whatsapp-config.ts');
            return null;
        }

        return (
            <>
                {/* WATI Widget Script */}
                <Script
                    id="wati-widget-script"
                    src={scriptUrl}
                    strategy="afterInteractive"
                    onLoad={() => {
                        console.log('WATI widget loaded successfully');
                    }}
                    onError={(e) => {
                        console.error('Failed to load WATI widget:', e);
                    }}
                />

                {/* WATI Configuration Script */}
                <Script
                    id="wati-config"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.watiConfig = {
                                number: "${accountNumber}",
                                buttonName: "${buttonName}",
                                welcomeMessage: "${welcomeMessage}",
                                brandImage: "${brandImageUrl}",
                                buttonColor: "${buttonColor}",
                                position: "${position}",
                                enabled: true
                            };
                        `,
                    }}
                />
            </>
        );
    }

    // Basic Mode: Use custom WhatsApp chat component
    return (
        <WhatsAppChat
            phoneNumber={whatsappConfig.basic.phoneNumber}
            message={whatsappConfig.basic.defaultMessage}
            agentName={whatsappConfig.basic.agentName}
            agentImage={whatsappConfig.basic.agentImage}
            position={whatsappConfig.basic.position}
        />
    );
}
