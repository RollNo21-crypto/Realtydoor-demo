import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'NewtownJ | 60-Acre Smart Township in Punganur, Andhra Pradesh | RealtyDoor',
    description: 'Invest in NewtownJ — a PKM-UDA approved smart township with 750 plots on 60 acres in Punganur. Twin lakes, 30+ amenities, 3-star theater, clubhouse, and excellent connectivity.',
    keywords: ['NewtownJ Punganur', 'plots Punganur Andhra Pradesh', 'smart township plots', 'PKM-UDA approved plots', 'buy plots Andhra Pradesh', 'NewtownJ RealtyDoor'],
    alternates: { canonical: 'https://realtydoor.in/properties/newtownj' },
    openGraph: {
        title: 'NewtownJ | Smart Township in Punganur, Andhra Pradesh',
        description: '750 plots on 60 acres. PKM-UDA approved. Twin lakes, clubhouse, 3-star theater, and 30+ amenities in Punganur, Andhra Pradesh.',
        url: 'https://realtydoor.in/properties/newtownj',
        type: 'website',
        images: [{ url: 'https://realtydoor.com/wp-content/uploads/2024/05/j-town-1.webp', width: 1200, height: 630, alt: 'NewtownJ Township Punganur' }],
    },
    twitter: { card: 'summary_large_image', title: 'NewtownJ | Smart Township Plots in Punganur', description: '750 plots · 60 acres · PKM-UDA approved · Twin lakes & 30+ amenities.' },
};

const listingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Accommodation',
    name: 'NewtownJ',
    description: 'PKM-UDA approved modern township with 750 plots on 60 acres in Punganur, Andhra Pradesh. Features twin lakes, 3-star theater, clubhouse, and 30+ smart amenities.',
    address: { '@type': 'PostalAddress', addressLocality: 'Punganur', addressRegion: 'Andhra Pradesh', addressCountry: 'IN' },
    url: 'https://realtydoor.in/properties/newtownj',
    amenityFeature: [
        { '@type': 'LocationFeatureSpecification', name: 'Twin Lakes', value: true },
        { '@type': 'LocationFeatureSpecification', name: '3-Star Theater', value: true },
        { '@type': 'LocationFeatureSpecification', name: 'Clubhouse', value: true },
        { '@type': 'LocationFeatureSpecification', name: '24×7 CCTV Security', value: true },
    ],
};

export default function NewtownJLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Script id="newtownj-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listingJsonLd) }} />
            {children}
        </>
    );
}
