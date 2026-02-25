import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Neo Serene | Tranquil Plots Near Hoskote, Bengaluru | RealtyDoor',
    description: 'Buy plots in Neo Serene — 154 thoughtfully planned plots on 11 acres near Hoskote, Bengaluru. 20 mins from the International Airport. Clear title, fully developed, ready for registration.',
    keywords: ['Neo Serene Hoskote', 'plots near Hoskote Bengaluru', 'residential plots East Bengaluru', 'buy plots near airport Bengaluru', 'Neo Serene RealtyDoor', 'tranquil plots Bengaluru'],
    alternates: { canonical: 'https://realtydoor.in/properties/neo-serene' },
    openGraph: {
        title: 'Neo Serene | Plots Near Hoskote, Bengaluru',
        description: '154 plots on 11 acres near Hoskote. 20 mins from airport. Fully developed, clear title, ready for registration.',
        url: 'https://realtydoor.in/properties/neo-serene',
        type: 'website',
        images: [{ url: 'https://realtydoor.com/wp-content/uploads/2025/09/banner-1-1-scaled.png', width: 1200, height: 630, alt: 'Neo Serene Plots Hoskote Bengaluru' }],
    },
    twitter: { card: 'summary_large_image', title: 'Neo Serene | Plots Near Hoskote, Bengaluru', description: '154 plots · 11 acres · 20 mins to airport · Ready for registration.' },
};

const listingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Accommodation',
    name: 'Neo Serene',
    description: 'Premium residential plotted development with 154 plots on 11 acres near Hoskote, Bengaluru. Features clubhouse, jogging track, and excellent connectivity.',
    address: { '@type': 'PostalAddress', addressLocality: 'Near Hoskote, Bengaluru', addressRegion: 'Karnataka', addressCountry: 'IN' },
    url: 'https://realtydoor.in/properties/neo-serene',
    amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Clubhouse', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Jogging Track', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'CCTV Surveillance', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Gated Community', value: true },
    ],
};

export default function NeoSereneLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Script id="neo-serene-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingJsonLd) }} />
            {children}
        </>
    );
}
