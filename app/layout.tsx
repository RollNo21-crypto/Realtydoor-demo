import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
// import { Toaster } from 'sonner';
import { WhatsAppWidget } from '@/components/whatsapp-widget';

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'RealtyDoor | Premium Residential Plots in Bengaluru',
        template: '%s | RealtyDoor Residential Plots',
    },
    description:
        'RealtyDoor connects you with Bengaluru\'s finest RERA-verified residential plots. Expert consultancy for secure land investment in India\'s most prestigious growth corridors.',
    keywords: [
        'residential plots Bengaluru',
        'premium plots Bangalore',
        'buy land Bengaluru',
        'RERA verified plots',
        'real estate investment Bengaluru',
        'plotted development Bengaluru',
        'RealtyDoor',
    ],
    authors: [{ name: 'RealtyDoor Real Estate' }],
    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: 'https://realtydoor.in',
        siteName: 'RealtyDoor Residential Plots',
        title: 'RealtyDoor | Premium Residential Plots in Bengaluru',
        description:
            'Secure your legacy with RERA-verified premium residential plots in Bengaluru\'s top growth corridors.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'RealtyDoor - Premium Residential Plots',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'RealtyDoor | Premium Residential Plots',
        description:
            'Discover hand-vetted premium residential plots in Bengaluru.',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${playfair.variable} ${inter.variable} antialiased`}>
                {children}
                {/* <Toaster position="top-right" richColors /> */}
                <WhatsAppWidget />
            </body>
        </html>
    );
}
