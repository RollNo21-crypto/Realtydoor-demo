// WATI (WhatsApp Team Inbox) Configuration
// Choose between basic WhatsApp widget or advanced WATI integration

export type WhatsAppMode = 'basic' | 'wati';

export const whatsappConfig = {
    // ===== MODE SELECTION =====
    // 'basic' - Simple WhatsApp link (no WATI account needed)
    // 'wati' - Advanced WATI integration (requires WATI account)
    mode: 'basic' as WhatsAppMode,

    // ===== LEAD CAPTURE SETTINGS =====
    enableLeadCapture: true, // Set to false to skip lead form and go directly to WhatsApp

    // ===== BUILDESK CRM INTEGRATION =====
    buildesk: {
        enabled: true,
        // API credentials (stored in .env.local for security)
        // BUILDESK_API_KEY=ee6411f7-4da2-4172-b657-372a1151c93f
        projectName: 'RealtyDoor',
        platform: 'website',
        subSource: 'WhatsApp Widget',
    },

    // ===== BASIC MODE SETTINGS =====
    basic: {
        // WhatsApp phone number (format: country code + number without + or spaces)
        // Example: For India +91 98765 43210, use: 919876543210
        phoneNumber: '919876543210',

        // Default message when user clicks to chat
        defaultMessage: "Hello! I'm interested in your properties. Can you help me?",

        // Agent/Team information
        agentName: 'RealtyDoor Team',
        agentImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',

        // Widget position on screen
        position: 'right' as 'left' | 'right',

        // Delay before showing widget (in milliseconds)
        showDelay: 2000,
    },

    // ===== WATI MODE SETTINGS =====
    wati: {
        // Your WATI account number (get from WATI dashboard)
        accountNumber: '',

        // WATI widget customization
        buttonName: 'Chat with Us',
        welcomeMessage: 'Hello! Welcome to RealtyDoor. How can we help you today?',
        brandImageUrl: '', // Optional: Your brand logo URL

        // Widget appearance
        buttonColor: '#10b981', // Green color
        position: 'right' as 'left' | 'right',

        // WATI Script URL (you'll get this from WATI dashboard)
        // Format: https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?[your-params]
        scriptUrl: '',
    },
};

// Property-specific WhatsApp messages
export const getPropertyMessage = (propertyTitle: string, propertyId: string) => {
    return `Hi! I'm interested in "${propertyTitle}". Can you provide more details? (Property ID: ${propertyId})`;
};

// Contact page WhatsApp message
export const contactMessage = "Hello! I'd like to get in touch with your team regarding your properties.";

// General inquiry message
export const generalInquiryMessage = "Hello! I have some questions about your real estate services.";

// WATI-specific: Lead qualification messages
export const watiMessages = {
    buyerInquiry: "I'm looking to buy a property",
    sellerInquiry: "I want to sell my property",
    rentalInquiry: "I'm interested in rental properties",
    investmentInquiry: "I'm looking for investment opportunities",
};
