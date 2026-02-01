'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import Image from 'next/image';
import { LeadCaptureForm } from './lead-capture-form';
import type { LeadFormData } from '@/lib/buildesk-api';
import { whatsappConfig } from '@/lib/whatsapp-config';

interface WhatsAppChatProps {
    phoneNumber: string; // Format: 919876543210 (country code + number without +)
    message?: string;
    agentName?: string;
    agentImage?: string;
    position?: 'left' | 'right';
}

export function WhatsAppChat({
    phoneNumber,
    message = 'Hello! I am interested in your properties.',
    agentName = 'RealtyDoor Team',
    agentImage = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    position = 'right',
}: WhatsAppChatProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [showLeadForm, setShowLeadForm] = useState(false);

    useEffect(() => {
        // Show widget after 2 seconds
        const timer = setTimeout(() => setIsVisible(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleChatButtonClick = () => {
        // Check if lead capture is enabled
        if (whatsappConfig.enableLeadCapture && whatsappConfig.buildesk.enabled) {
            setShowLeadForm(true);
            setIsOpen(false);
        } else {
            // Direct to WhatsApp
            handleWhatsAppClick();
        }
    };

    const handleLeadFormSuccess = (leadData: LeadFormData) => {
        // Build comprehensive WhatsApp message with all collected data
        let whatsappMessage = `Hi! I'm ${leadData.firstName}.\n\n`;

        // Add contact information
        whatsappMessage += `📱 Mobile: ${leadData.mobile}\n`;
        whatsappMessage += `📧 Email: ${leadData.email}\n`;

        // Add location if provided
        if (leadData.city) {
            whatsappMessage += `📍 Location: ${leadData.city}\n`;
        }

        // Add property interest if available
        if (leadData.propertyName) {
            whatsappMessage += `\n🏠 Interested in: ${leadData.propertyName}\n`;
        }

        // Add custom message if provided
        if (leadData.message) {
            whatsappMessage += `\n💬 Message:\n${leadData.message}`;
        } else {
            whatsappMessage += `\n💬 I'm interested in your properties. Can you help me?`;
        }

        // Open WhatsApp with comprehensive message
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');

        // Close form
        setShowLeadForm(false);
    };

    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    if (!isVisible) return null;

    const positionClasses = position === 'right'
        ? 'right-6 md:right-8'
        : 'left-6 md:left-8';

    return (
        <div className={`fixed bottom-6 md:bottom-8 ${positionClasses} z-[9999]`}>
            {/* Chat Popup */}
            {isOpen && (
                <div className="mb-4 w-80 md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <Image
                                    src={agentImage}
                                    alt={agentName}
                                    width={48}
                                    height={48}
                                    className="rounded-full border-2 border-white"
                                />
                                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                            </div>
                            <div>
                                <h3 className="text-white font-semibold">{agentName}</h3>
                                <p className="text-white/90 text-xs">Online</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div className="p-6 bg-gray-50">
                        <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm">
                            <p className="text-gray-700 text-sm mb-3">
                                👋 Hi there! Welcome to RealtyDoor.
                            </p>
                            <p className="text-gray-700 text-sm mb-3">
                                Looking for your dream property? We're here to help!
                            </p>
                            <p className="text-gray-600 text-xs">
                                Click below to chat with us on WhatsApp
                            </p>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                            Typically replies within minutes
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="p-4 bg-white border-t">
                        <button
                            onClick={handleChatButtonClick}
                            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                        >
                            <MessageCircle className="h-5 w-5" />
                            Start Chat on WhatsApp
                        </button>
                    </div>
                </div>
            )}

            {/* Lead Capture Form */}
            <LeadCaptureForm
                isOpen={showLeadForm}
                onClose={() => setShowLeadForm(false)}
                onSuccess={handleLeadFormSuccess}
                prefilledMessage={message}
            />

            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 active:scale-95 group relative"
                aria-label="WhatsApp Chat"
            >
                {isOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <>
                        <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
                        {/* Notification Badge */}
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                            1
                        </span>
                    </>
                )}
            </button>

            {/* Tooltip */}
            {!isOpen && (
                <div className="absolute bottom-full mb-2 right-0 bg-gray-900 text-white text-sm py-2 px-4 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Chat with us!
                    <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                </div>
            )}
        </div>
    );
}
