import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Premium Residential Plots | Buy Verified Plots in Bengaluru & Andhra Pradesh | RealtyDoor',
    description: 'Browse RealtyDoor\'s curated collection of RERA-verified residential plots across Bengaluru and Andhra Pradesh. Gated communities, clear titles, and fully developed infrastructure.',
    keywords: ['residential plots Bengaluru', 'buy plots Bengaluru', 'gated plots Bengaluru', 'RERA verified plots India', 'plots for sale Andhra Pradesh', 'RealtyDoor properties', 'plotted development Bengaluru'],
    alternates: { canonical: 'https://realtydoor.in/properties' },
    openGraph: {
        title: 'Premium Plots | RealtyDoor Properties',
        description: 'Explore verified residential plots in Bengaluru & Andhra Pradesh. Gated communities, clear title, ready for registration.',
        url: 'https://realtydoor.in/properties',
        type: 'website',
        images: [{ url: 'https://realtydoor.in/og-image.jpg', width: 1200, height: 630, alt: 'RealtyDoor Premium Plots' }],
    },
    twitter: { card: 'summary_large_image', title: 'Premium Plots | RealtyDoor', description: 'Verified residential plots in Bengaluru & AP. Clear title, gated communities.' },
};

export default function PropertiesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
