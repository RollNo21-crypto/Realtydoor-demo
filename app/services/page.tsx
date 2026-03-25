import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import Script from 'next/script';
import { FloatingNav } from '@/components/floating-nav';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Shield, TrendingUp, Users, Award, CheckCircle, Target, ArrowRight } from 'lucide-react';
import { StatsTickerBanner } from '@/components/stats-ticker-banner';
import { BannerPlaceholder } from '@/components/promo-banner';
import { ServiceCTAForm } from '@/components/service-cta-form';


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
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Script id="services-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
            <FloatingNav />

            {/* Hero Section - Matching Homepage/Inner Services Design */}
            <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20">
                <Image
                    src="https://realtydoor.com/wp-content/uploads/2025/12/banner-3-scaled.webp"
                    alt="RealtyDoor Services"
                    fill
                    className="absolute inset-0 object-cover"
                    priority
                />

                <div className="hero-gradient absolute inset-0" />
                <div className="gradient-overlay absolute inset-0" />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 flex flex-col items-center justify-center text-center">

                    <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-lg leading-tight animate-slide-up stagger-2">
                        Expert <span className="italic font-normal gradient-text">Consultancy</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl drop-shadow mb-10 leading-relaxed font-light animate-slide-up stagger-3">
                        Comprehensive end-to-end real estate solutions designed to protect your interests and optimize your property portfolio.
                    </p>


                </div>
            </section>

            {/* Stats Ticker */}
            <div className="relative z-30 -mt-10">
                <StatsTickerBanner />
            </div>

            {/* Services Grid - Modern Bento Box Style */}
            <section id="services-grid" className="py-24 bg-background relative">
                <div className="pointer-events-none absolute top-40 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />

                <div className="mx-auto max-w-7xl px-6 relative z-10">
                    <div className="mb-16 text-center">
                        <span className="inline-block text-primary font-bold uppercase tracking-widest text-sm mb-4">Core Offerings</span>
                        <h2 className="font-display text-4xl md:text-6xl mb-6">
                            Tailored <span className="italic font-normal gradient-text">Real Estate</span> Solutions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We provide a complete ecosystem of services to secure your investments and maximize your returns.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Service 1 */}
                        <div className="group flex flex-col justify-between rounded-3xl bg-white border border-border p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                            <div>
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                                    <Shield className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="font-display text-3xl mb-4 text-foreground">Property Verification</h3>
                                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">Eliminate legal risks with our 40-point verification checklist. We ensure clear titles and absolute RERA compliance before you sign.</p>
                                <div className="space-y-3 mb-10">
                                    {['Title Verification', 'Legal Due Diligence', 'RERA Audit', 'Technical Site Inspection'].map((f, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 group-hover:bg-primary/5 group-hover:border-primary/10 transition-colors">
                                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                            <span className="text-sm font-medium text-slate-700">{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Link href="/services/legal" className="mt-auto inline-flex items-center text-primary font-bold hover:gap-3 gap-2 transition-all">Deep Dive into Legal <ArrowRight className="h-5 w-5" /></Link>
                        </div>

                        {/* Service 2 */}
                        <div className="group flex flex-col justify-between rounded-3xl bg-white border border-border p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                            <div>
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                                    <TrendingUp className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="font-display text-3xl mb-4 text-foreground">Investment Advisory</h3>
                                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">Maximize your wealth with data-driven property selection. We analyze appreciation corridors and ROI potential for high-yield returns.</p>
                                <div className="space-y-3 mb-10">
                                    {['Market Appreciation Analysis', 'ROI Projections', 'Portfolio Diversification', 'Risk Management'].map((f, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 group-hover:bg-primary/5 group-hover:border-primary/10 transition-colors">
                                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                            <span className="text-sm font-medium text-slate-700">{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Link href="/services/valuation" className="mt-auto inline-flex items-center text-primary font-bold hover:gap-3 gap-2 transition-all">Explore Valuation Services <ArrowRight className="h-5 w-5" /></Link>
                        </div>

                        {/* Service 3 */}
                        <div className="group flex flex-col justify-between rounded-3xl bg-white border border-border p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                            <div>
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                                    <Users className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="font-display text-3xl mb-4 text-foreground">End-to-End Support</h3>
                                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">Zero-stress property acquisition. From the first site visit to the final handover at the registrar office, we are by your side.</p>
                                <div className="space-y-3 mb-10">
                                    {['Guided Site Tours', 'Price Negotiation', 'Bank Loan Coordination', 'Registration Assistance'].map((f, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 group-hover:bg-primary/5 group-hover:border-primary/10 transition-colors">
                                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                            <span className="text-sm font-medium text-slate-700">{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Link href="/services/loan-assistance" className="mt-auto inline-flex items-center text-primary font-bold hover:gap-3 gap-2 transition-all">Get Financial Support <ArrowRight className="h-5 w-5" /></Link>
                        </div>

                        {/* Service 4 */}
                        <div className="group flex flex-col justify-between rounded-3xl bg-white border border-border p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                            <div>
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                                    <Award className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="font-display text-3xl mb-4 text-foreground">Execution Excellence</h3>
                                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">Expert plot development and land management. We protect and enhance your land assets with precision and transparency.</p>
                                <div className="space-y-3 mb-10">
                                    {['Strategic Plot Development', 'Boundary Fencing & Security', 'Land Leveling & Maintenance', 'Layout Planning Support'].map((f, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 group-hover:bg-primary/5 group-hover:border-primary/10 transition-colors">
                                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                            <span className="text-sm font-medium text-slate-700">{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Link href="/services/construction" className="mt-auto inline-flex items-center text-primary font-bold hover:gap-3 gap-2 transition-all">View Construction Details <ArrowRight className="h-5 w-5" /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promo Banner - Match Dark Theme */}
            <div className="py-12 bg-background">
                <BannerPlaceholder
                    tag="Expert Advisory"
                    headline="Free Consultation for New Buyers"
                    subtext="Book a free 30-minute session with our senior advisors. Get a personalised investment roadmap with zero obligation."
                    ctaLabel="Book Free Session"
                    ctaHref="/contact"
                    theme="dark"
                />
            </div>

            {/* Replaced old CTA container with consistent ServiceCTAForm */}
            <div className="bg-background" id="cta-form">
                <ServiceCTAForm
                    serviceName="Real Estate Services"
                    title="Optimize Your Plot Journey"
                    description="Don't leave your plot investments to chance. Connect with our experts today."
                />
            </div>

            <Footer />
        </div>
    );
}
