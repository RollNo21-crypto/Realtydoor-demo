import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
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
        default: 'CURATED | Premium Real Estate',
        template: '%s | CURATED Real Estate',
    },
    description:
        'A curated marketplace connecting high-intent buyers with the world\'s most reputable premium builders. Discover luxury properties that match your lifestyle.',
    keywords: [
        'real estate',
        'luxury homes',
        'premium properties',
        'property listings',
        'buy home',
        'real estate marketplace',
    ],
    authors: [{ name: 'CURATED Real Estate' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://your-domain.com',
        siteName: 'CURATED Real Estate',
        title: 'CURATED | Premium Real Estate Marketplace',
        description:
            'Discover hand-vetted premium properties from verified builders worldwide.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'CURATED Real Estate',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'CURATED | Premium Real Estate',
        description:
            'Discover hand-vetted premium properties from verified builders worldwide.',
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
                <Toaster position="top-right" richColors />
                <WhatsAppWidget />
            </body>
        </html>
    );
}
