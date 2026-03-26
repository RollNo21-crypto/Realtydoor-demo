import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Vrunda City | Residential Plots in Hoskote, Bengaluru | RealtyDoor',
    description: 'Buy plots in Vrunda City, Hoskote — Bengaluru\'s fastest-growing suburb. 292 residential plots on 17.1 acres, just 20 mins from the International Airport. Fully developed & ready for registration.',
    keywords: ['Vrunda City Hoskote', 'plots Hoskote Bengaluru', 'residential plots near airport Bengaluru', 'buy plots East Bengaluru', 'Hoskote real estate', 'Vrunda City RealtyDoor'],
    alternates: { canonical: 'https://realtydoor.in/properties/vrunda-city' },
    openGraph: {
        title: 'Vrunda City | Plots in Hoskote, Bengaluru',
        description: '292 gated plots on 17.1 acres in Hoskote, Bengaluru. 20 mins from International Airport. Fully developed and ready for registration.',
        url: 'https://realtydoor.in/properties/vrunda-city',
        type: 'website',
        images: [{ url: 'https://realtydoor.com/wp-content/uploads/2025/12/banner-3-scaled.webp', width: 1200, height: 630, alt: 'Vrunda City Hoskote Bengaluru' }],
    },
    twitter: { card: 'summary_large_image', title: 'Vrunda City | Plots in Hoskote, Bengaluru', description: '292 plots · 17.1 acres · 20 mins airport · Fully developed.' },
};

const listingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Accommodation',
    name: 'Vrunda City',
    description: 'Premium gated residential plot development with 292 plots on 17.1 acres in Hoskote, Bengaluru. Just 20 minutes from the International Airport.',
    address: { '@type': 'PostalAddress', streetAddress: 'Hoskote–Bagalur Road', addressLocality: 'Hoskote, Bengaluru', addressRegion: 'Karnataka', addressCountry: 'IN' },
    url: 'https://realtydoor.in/properties/vrunda-city',
    amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Gated Community', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Clubhouse', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Jogging Track', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'CCTV Surveillance', value: true },
    ],
};

export default function VrundaCityLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Script id="vrunda-city-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingJsonLd) }} />
            {children}
        </>
    );
}
