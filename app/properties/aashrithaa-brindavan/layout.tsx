import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'Aashrithaa Brindavan | Plots Near Art of Living, Bengaluru | RealtyDoor',
    description: 'Buy verified residential plots in Aashrithaa Brindavan, Kanakapura Road, South Bengaluru. 236 plots on 14 acres near Art of Living International Center. Clear title, fully developed.',
    keywords: ['Aashrithaa Brindavan plots', 'plots near Art of Living Bengaluru', 'Kanakapura Road plots', 'residential plots South Bengaluru', 'buy plots Bengaluru', 'RealtyDoor plots'],
    alternates: { canonical: 'https://realtydoor.in/properties/aashrithaa-brindavan' },
    openGraph: {
        title: 'Aashrithaa Brindavan | Plots Near Art of Living, Bengaluru',
        description: '236 residential plots on 14 acres near Art of Living, Kanakapura Road. Clear title, gated community, fully developed infrastructure.',
        url: 'https://realtydoor.in/properties/aashrithaa-brindavan',
        type: 'website',
        images: [{ url: 'https://realtydoor.com/wp-content/uploads/2024/05/aashrithaa-brindhavan1-1.jpg', width: 1200, height: 630, alt: 'Aashrithaa Brindavan Plots Bengaluru' }],
    },
    twitter: { card: 'summary_large_image', title: 'Aashrithaa Brindavan | Plots Near Art of Living', description: '236 gated plots on 14 acres, Kanakapura Road, South Bengaluru. Clear title.' },
};

const listingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Accommodation',
    name: 'Aashrithaa Brindavan',
    description: 'Premium residential plot development with 236 plots on 14 acres near Art of Living International Center, Kanakapura Road, South Bengaluru.',
    address: { '@type': 'PostalAddress', streetAddress: 'Kanakapura Road', addressLocality: 'Bengaluru', addressRegion: 'Karnataka', addressCountry: 'IN' },
    url: 'https://realtydoor.in/properties/aashrithaa-brindavan',
    amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Gated Community', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'CC Roads', value: true },
        { '@type': 'LocationFeatureSpecification', name: '24/7 Security', value: true },
        { '@type': 'LocationFeatureSpecification', name: '24/7 Water Supply', value: true },
    ],
};

export default function AashrithaaLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Script id="aashrithaa-brindavan-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingJsonLd) }} />
            {children}
        </>
    );
}
