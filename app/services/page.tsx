import Link from 'next/link';
import { Metadata } from 'next';
import Script from 'next/script';
import { FloatingNav } from '@/components/floating-nav';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Shield, TrendingUp, Users, Award, CheckCircle, Target } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Real Estate Services | Property Verification, Advisory & Management | RealtyDoor',
    description: 'Explore RealtyDoor\'s full suite of real estate services — property verification, investment advisory, legal assistance, home loan support, resale services, and end-to-end property management in Bengaluru.',
    keywords: ['real estate services Bengaluru', 'property verification India', 'real estate advisory', 'home loan assistance', 'legal property services', 'property management Bengaluru', 'RealtyDoor services'],
    alternates: { canonical: 'https://realtydoor.in/services' },
    openGraph: {
        title: 'Real Estate Services | RealtyDoor',
        description: 'RERA-compliant property verification, investment advisory, legal assistance, and complete end-to-end real estate support.',
        url: 'https://realtydoor.in/services',
        type: 'website',
        images: [{ url: 'https://realtydoor.in/og-image.jpg', width: 1200, height: 630, alt: 'RealtyDoor Services' }],
    },
    twitter: { card: 'summary_large_image', title: 'Real Estate Services | RealtyDoor', description: 'Full-spectrum real estate services: verification, advisory, legal, loans, and management.' },
};

const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'RealtyDoor Real Estate Services',
    url: 'https://realtydoor.in/services',
    description: 'Comprehensive real estate services in Bengaluru including property verification, investment advisory, legal assistance, home loan support, resale, and property management.',
    mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Property Verification', url: 'https://realtydoor.in/services/property-verification' },
            { '@type': 'ListItem', position: 2, name: 'Investment Advisory', url: 'https://realtydoor.in/services/investment-advisory' },
            { '@type': 'ListItem', position: 3, name: 'End-to-End Support', url: 'https://realtydoor.in/services' },
            { '@type': 'ListItem', position: 4, name: 'Premium Listings', url: 'https://realtydoor.in/properties' },
        ],
    },
};

export default function ServicesPage() {
    const services = [
        {
            icon: Shield,
            title: 'Property Verification',
            description: 'Complete legal and technical verification of all properties with RERA compliance checks.',
            features: ['Title Verification', 'Legal Documentation', 'RERA Compliance', 'Site Inspection']
        },
        {
            icon: TrendingUp,
            title: 'Investment Advisory',
            description: 'Expert guidance on property investments with market analysis and ROI projections.',
            features: ['Market Analysis', 'ROI Projections', 'Portfolio Management', 'Risk Assessment']
        },
        {
            icon: Users,
            title: 'End-to-End Support',
            description: 'Comprehensive assistance from property search to final handover and beyond.',
            features: ['Property Search', 'Site Visits', 'Negotiation', 'Documentation Support']
        },
        {
            icon: Award,
            title: 'Premium Listings',
            description: 'Exclusive access to verified premium properties from top builders across India.',
            features: ['RealtyDoor Properties', 'Exclusive Deals', 'Pre-Launch Access', 'VIP Treatment']
        }
    ];

    return (
        <>
            <Script id="services-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
            <FloatingNav />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20">
                <div className="absolute inset-0 bg-grid-white/[0.02]" />
                <div className="relative mx-auto max-w-7xl px-6">
                    <div className="text-center">
                        <h1 className="font-display text-5xl md:text-7xl text-white mb-6">
                            Expert <span className="italic font-normal gradient-text">Consultancy</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Comprehensive end-to-end real estate solutions designed to protect your interests and optimize your property portfolio.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-background">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="glass-card p-8 hover-lift">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center mb-6 animate-pulse-glow">
                                <Shield className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="font-display text-3xl mb-4">Property Verification</h3>
                            <p className="text-muted-foreground mb-6">Eliminate legal risks with our 40-point verification checklist. We ensure clear titles and absolute RERA compliance before you sign.</p>
                            <ul className="space-y-3">
                                {['Title Verification', 'Legal Due Diligence', 'RERA Audit', 'Technical Site Inspection'].map((f, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                        <span className="text-sm font-medium">{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/services/legal" className="mt-8 inline-block text-primary font-bold hover:underline transition-all">Deep Dive into Legal &rarr;</Link>
                        </div>

                        <div className="glass-card p-8 hover-lift">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center mb-6 animate-pulse-glow">
                                <TrendingUp className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="font-display text-3xl mb-4">Investment Advisory</h3>
                            <p className="text-muted-foreground mb-6">Maximize your wealth with data-driven property selection. We analyze appreciation corridors and ROI potential for high-yield returns.</p>
                            <ul className="space-y-3">
                                {['Market Appreciation Analysis', 'ROI Projections', 'Portfolio Diversification', 'Risk Management'].map((f, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                        <span className="text-sm font-medium">{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/services/valuation" className="mt-8 inline-block text-primary font-bold hover:underline transition-all">Explore Valuation Services &rarr;</Link>
                        </div>

                        <div className="glass-card p-8 hover-lift">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center mb-6 animate-pulse-glow">
                                <Users className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="font-display text-3xl mb-4">End-to-End Support</h3>
                            <p className="text-muted-foreground mb-6">Zero-stress property acquisition. From the first site visit to the final handover at the registrar office, we are by your side.</p>
                            <ul className="space-y-3">
                                {['Guided Site Tours', 'Price Negotiation', 'Bank Loan Coordination', 'Registration Assistance'].map((f, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                        <span className="text-sm font-medium">{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/services/loan-assistance" className="mt-8 inline-block text-primary font-bold hover:underline transition-all">Get Financial Support &rarr;</Link>
                        </div>

                        <div className="glass-card p-8 hover-lift">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center mb-6 animate-pulse-glow">
                                <Award className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="font-display text-3xl mb-4">Execution Excellence</h3>
                            <p className="text-muted-foreground mb-6">Expert plot development and land management. We protect and enhance your land assets with precision.</p>
                            <ul className="space-y-3">
                                {['Strategic Plot Development', 'Boundary Fencing & Security', 'Land Leveling & Maintenance', 'Layout Planning Support'].map((f, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                        <span className="text-sm font-medium">{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/services/construction" className="mt-8 inline-block text-primary font-bold hover:underline transition-all">View Construction Details &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-primary/10 to-orange-500/10 relative overflow-hidden">
                <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
                    <Target className="h-16 w-16 mx-auto mb-6 text-primary" />
                    <h2 className="font-display text-4xl md:text-6xl mb-6">
                        Optimize Your <span className="italic font-normal gradient-text">Residential Plot</span> Journey
                    </h2>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Don't leave your plot investments to chance. Connect with our expert consultants for a data-backed strategy today.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-12 py-8 text-lg font-bold shadow-[0_0_20px_rgba(255,87,34,0.3)] hover:shadow-[0_0_30px_rgba(255,87,34,0.5)] transition-all">
                            Request Expert Consultation
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
}
