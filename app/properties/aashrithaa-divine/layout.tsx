import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Aashrithaa Divine | Plots in Jigani, Bengaluru | RealtyDoor',
    description: 'Buy residential plots in Aashrithaa Divine, Jigani, Bengaluru. 236 plots on 14 acres, ready for registration. Clear title, 30-min to airport, gated community with premium amenities.',
    keywords: ['Aashrithaa Divine Jigani', 'plots Jigani Bengaluru', 'residential plots South Bengaluru', 'gated community Bengaluru', 'buy plots Jigani', 'RealtyDoor Aashrithaa Divine'],
    alternates: { canonical: 'https://realtydoor.in/properties/aashrithaa-divine' },
    openGraph: {
        title: 'Aashrithaa Divine | Plots in Jigani, Bengaluru',
        description: '236 plots on 14 acres in Jigani. Clear title, ready for registration, 30 mins to International Airport.',
        url: 'https://realtydoor.in/properties/aashrithaa-divine',
        type: 'website',
        images: [{ url: 'https://realtydoor.com/wp-content/uploads/2024/05/devine-1.webp', width: 1200, height: 630, alt: 'Aashrithaa Divine Jigani Bengaluru' }],
    },
    twitter: { card: 'summary_large_image', title: 'Aashrithaa Divine | Plots in Jigani, Bengaluru', description: '236 plots · 14 acres · Ready for registration · Clear title.' },
};

const listingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Accommodation',
    name: 'Aashrithaa Divine',
    description: 'Premium gated residential plot development with 236 plots on 14 acres in Jigani, Bengaluru. Clear title, fully developed, ready for registration.',
    address: { '@type': 'PostalAddress', streetAddress: 'Jigani Main Road', addressLocality: 'Jigani, Bengaluru', addressRegion: 'Karnataka', addressCountry: 'IN' },
    url: 'https://realtydoor.in/properties/aashrithaa-divine',
    amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Gated Community', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Compound Wall', value: true },
        { '@type': 'LocationFeatureSpecification', name: '24/7 Security', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Jogging Track', value: true },
    ],
};

export default function AashrithaaDevineLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Script id="aashrithaa-divine-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingJsonLd) }} />
            {children}
        </>
    );
}
