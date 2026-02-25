import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Join RealtyDoor | Partner with Us & Grow Your Real Estate Business',
    description: 'Join the RealtyDoor network as a property agent or developer partner. Access high-intent buyers, premium listings, and earn top commissions. Apply now to partner with Bengaluru\'s leading real estate platform.',
    keywords: ['join RealtyDoor', 'real estate agent partner India', 'property agent Bengaluru', 'sell with RealtyDoor', 'real estate partnership', 'property broker Bengaluru'],
    alternates: { canonical: 'https://realtydoor.in/join-us' },
    openGraph: {
        title: 'Join RealtyDoor | Partner & Grow Your Real Estate Business',
        description: 'Partner with RealtyDoor. Access high-intent buyers, earn top commissions, and grow your real estate business.',
        url: 'https://realtydoor.in/join-us',
        type: 'website',
        images: [{ url: 'https://realtydoor.in/og-image.jpg', width: 1200, height: 630, alt: 'Join RealtyDoor' }],
    },
    twitter: { card: 'summary_large_image', title: 'Join RealtyDoor | Partner with Us', description: 'Partner with RealtyDoor — access premium buyers and earn top commissions.' },
};

export default function JoinUsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
