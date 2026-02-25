import { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FloatingNav } from '@/components/floating-nav';
import { Footer } from '@/components/footer';
import { PropertyCard } from '@/components/property-card';
import { PropertySearchForm } from '@/components/property-search-form';
import { PropertyCategories } from '@/components/property-categories';
import { TestimonialsBenefitsBento } from '@/components/testimonials-benefits-bento';
import { EmiDealsPanel } from '@/components/emi-deals-panel';
import { getFeaturedProperties } from '@/lib/mock-data';
import { ArrowRight, Shield, Eye, Sparkles, Award, Users, TrendingUp, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'RealtyDoor | Premium Residential Plots in Bengaluru | RERA Verified',
    description: 'Discover RERA-verified premium residential plots in Bengaluru. RealtyDoor offers expert consultancy, title verification, and end-to-end support for plot investments.',
    keywords: ['premium residential plots Bengaluru', 'buy plots Bengaluru', 'plots for sale Bengaluru', 'residential land investment', 'RERA verified plots', 'real estate investment Bengaluru', 'RealtyDoor'],
    alternates: { canonical: 'https://realtydoor.in' },
    openGraph: {
        title: 'RealtyDoor | Premium Residential Plots in Bengaluru',
        description: 'Discover RERA-verified premium residential plots in Bengaluru. Expert advisory, legal support, and 5000+ happy families.',
        url: 'https://realtydoor.in',
        type: 'website',
        siteName: 'RealtyDoor',
        images: [{ url: 'https://realtydoor.in/og-image.jpg', width: 1200, height: 630, alt: 'RealtyDoor - Premium Residential Plots' }],
    },
    twitter: { card: 'summary_large_image', title: 'RealtyDoor | Premium Residential Plots in Bengaluru', description: 'Invest in RERA-verified residential plots in Bengaluru.' },
};

const homeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            '@id': 'https://realtydoor.in/#organization',
            name: 'RealtyDoor',
            url: 'https://realtydoor.in',
            logo: 'https://realtydoor.in/logo.png',
            contactPoint: { '@type': 'ContactPoint', telephone: '+91-91369-54648', contactType: 'customer service', areaServed: 'IN' },
            sameAs: ['https://www.facebook.com/realtydoor', 'https://www.instagram.com/realtydoor'],
        },
        {
            '@type': 'WebSite',
            '@id': 'https://realtydoor.in/#website',
            name: 'RealtyDoor',
            url: 'https://realtydoor.in',
            potentialAction: { '@type': 'SearchAction', target: 'https://realtydoor.in/properties?q={search_term_string}', 'query-input': 'required name=search_term_string' },
        },
        {
            '@type': 'RealEstateAgent',
            '@id': 'https://realtydoor.in/#agent',
            name: 'RealtyDoor',
            description: 'Bengaluru\'s premium consultancy for RERA-verified residential plots in key growth corridors like Hoskote, Bagalur, and Sarjapur Road.',
            url: 'https://realtydoor.in',
            image: 'https://realtydoor.in/logo.png',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bengaluru',
                addressRegion: 'Karnataka',
                addressCountry: 'IN'
            },
            areaServed: [
                { '@type': 'City', name: 'Bengaluru' },
                { '@type': 'City', name: 'Hoskote' },
                { '@type': 'City', name: 'Bagalur' }
            ],
            aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '2400' },
        },
        {
            '@type': 'Service',
            name: 'Residential Plot Consultancy',
            serviceType: 'Real Estate Advisory',
            provider: { '@id': 'https://realtydoor.in/#organization' },
            description: 'Expert guidance on purchasing RERA-verified residential plots, including legal due diligence and title verification.'
        }
    ],
};

export default async function HomePage() {
    // Use mock data instead of database
    const featuredProperties = getFeaturedProperties();

    return (
        <>
            <FloatingNav />
            <Script id="home-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />

            {/* Hero Section with Video Background */}
            <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
                {/* Hero Background Image */}
                <Image
                    src="https://realtydoor.com/wp-content/uploads/2025/12/banner-3-scaled.webp"
                    alt="Premium Residential Plots"
                    fill
                    className="absolute inset-0 object-cover"
                    priority
                />

                <div className="hero-gradient absolute inset-0" />
                <div className="gradient-overlay absolute inset-0" />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32">
                    {/* Hero Content - Centered */}
                    <div className="mx-auto max-w-5xl text-center mb-16 animate-float">
                        <span className="mb-8 inline-block rounded-full border border-white/30 bg-white/20 px-6 py-2 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm animate-slide-up">
                            Trusted by 10,000+ Families • RERA Verified
                        </span>
                        <h1 className="font-display text-6xl leading-[1.1] text-white md:text-8xl animate-slide-up stagger-1">
                            Own the <span className="italic font-normal gradient-text font-serif">Earth</span>
                            <br />
                            Beneath Your Legacy
                        </h1>
                        <p className="mt-8 text-xl text-white/80 max-w-2xl mx-auto animate-slide-up stagger-2">
                            The definitive collection of Bengaluru’s most strategic RERA-verified residential plots. Secure your family's future on India's most prestigious corridors.
                        </p>
                    </div>

                    {/* Property Search Form */}
                    <div className="mb-16">
                        <PropertySearchForm />
                    </div>

                    {/* Stats */}
                    <div className="border-t border-white/10 pt-12">
                        <div className="overflow-x-auto scrollbar-hide -mx-6 px-6">
                            <div className="flex gap-8 md:gap-12 min-w-max md:min-w-0 md:grid md:grid-cols-3 animate-scroll-mobile md:animate-none">
                                <div className="text-center animate-slide-up stagger-1 snap-center flex-shrink-0 w-[280px] md:w-auto">
                                    <div className="font-display text-5xl text-white md:text-6xl gradient-text mb-3">100%</div>
                                    <div className="text-sm uppercase tracking-widest text-slate-300">
                                        Verified Builders
                                    </div>
                                </div>
                                <div className="text-center animate-slide-up stagger-2 snap-center flex-shrink-0 w-[280px] md:w-auto">
                                    <div className="font-display text-5xl text-white md:text-6xl gradient-text mb-3">RERA</div>
                                    <div className="text-sm uppercase tracking-widest text-slate-300">
                                        Approved
                                    </div>
                                </div>
                                <div className="text-center animate-slide-up stagger-3 snap-center flex-shrink-0 w-[280px] md:w-auto">
                                    <div className="font-display text-5xl text-white md:text-6xl gradient-text mb-3">Top 1%</div>
                                    <div className="text-sm uppercase tracking-widest text-slate-300">
                                        Properties Only
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}

            {/* <section className="border-b border-border bg-background py-16">
                <div className="mx-auto max-w-7xl px-6">
                    <p className="mb-10 text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Trusted by Premier Developers Worldwide
                    </p>
                    <div className="overflow-hidden">
                        <div className="flex animate-scroll-left">
                          
                            <div className="flex items-center gap-12 md:gap-24 flex-shrink-0">
                                <div className="font-display text-xl font-bold italic opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 hover-scale whitespace-nowrap">L'ARCHITECTE</div>
                                <div className="font-display text-xl font-bold opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 hover-scale whitespace-nowrap">ESTATE&CO</div>
                                <div className="font-display text-xl font-bold uppercase tracking-tighter opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 hover-scale whitespace-nowrap">Vanguard</div>
                                <div className="font-display text-xl font-semibold opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 hover-scale whitespace-nowrap">MODERNIST</div>
                                <div className="font-display text-xl font-light opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 hover-scale whitespace-nowrap">ELEVATE</div>
                            </div>
                           
                            <div className="flex items-center gap-12 md:gap-24 flex-shrink-0 ml-12 md:ml-24">
                                <div className="font-display text-xl font-bold italic opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 hover-scale whitespace-nowrap">L'ARCHITECTE</div>
                                <div className="font-display text-xl font-bold opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 hover-scale whitespace-nowrap">ESTATE&CO</div>
                                <div className="font-display text-xl font-bold uppercase tracking-tighter opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 hover-scale whitespace-nowrap">Vanguard</div>
                                <div className="font-display text-xl font-semibold opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 hover-scale whitespace-nowrap">MODERNIST</div>
                                <div className="font-display text-xl font-light opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 hover-scale whitespace-nowrap">ELEVATE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Featured Projects */}
            <section className="bg-background py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />

                <div className="relative mx-auto max-w-7xl px-6">
                    <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <span className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-4">
                                <Sparkles className="h-4 w-4" /> Selected Masterpieces
                            </span>
                            <h2 className="font-display text-4xl md:text-6xl max-w-2xl">
                                Featured <span className="italic font-normal gradient-text">Investment</span> Opportunities
                            </h2>
                        </div>
                        <Link href="/properties">
                            <Button variant="outline" className="rounded-full px-8 py-6 group hover:bg-primary hover:text-white transition-all duration-300">
                                View Full Portfolio
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {featuredProperties.map((property) => (
                            <PropertyCard
                                key={property.id}
                                id={property.id}
                                title={property.title}
                                price={Number(property.price)}
                                address={property.address}
                                city={property.city}
                                state={property.state}
                                bedrooms={property.bedrooms}
                                bathrooms={Number(property.bathrooms)}
                                sqft={property.sqft}
                                propertyType={property.propertyType}
                                status={property.status}
                                images={property.images}
                                featured={property.featured}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Property Categories */}
            <PropertyCategories />

            {/* Testimonials & Benefits Bento Grid */}
            <TestimonialsBenefitsBento />


            {/* Investment Tools & Exclusive Deals */}
            <section className="bg-background py-24 relative overflow-hidden">
                <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-primary/8 blur-[100px]" />
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12 text-center">
                        <span className="inline-block text-primary font-bold uppercase tracking-widest text-sm mb-4">Strategic Tools</span>
                        <h2 className="font-display text-4xl md:text-6xl mb-4">
                            Plan & <span className="italic font-normal gradient-text">Invest</span>
                        </h2>
                        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
                            Calculate your EMI or browse featured plots — all in one place.
                        </p>
                    </div>
                    <EmiDealsPanel />
                </div>
            </section>

            {/* CTA */}
            <section className="bg-background py-24 relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="relative flex flex-col items-center gap-16 overflow-hidden rounded-[3rem] bg-zinc-950 p-12 text-center md:flex-row md:p-24 md:text-left border border-white/10 group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="flex-1 relative z-10">
                            <h2 className="font-display text-5xl text-white md:text-7xl mb-8 leading-tight">
                                Prepare for Your
                                <br />
                                Next <span className="gradient-text italic">Masterpiece</span>
                            </h2>
                            <p className="mb-12 text-xl text-slate-400 max-w-lg leading-relaxed">
                                Join our exclusive network of premium builders and discerning buyers today.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Button size="lg" className="bg-gold hover:bg-gold/90 hover-glow transition-all duration-300">
                                    Get Started
                                </Button>
                                <Button size="lg" variant="outline" className="border-white/20 text-black
                                hover:bg-white/10  hover-scale">
                                    Download Brochure
                                </Button>
                            </div>
                        </div>
                        <div className="hidden flex-1 md:block relative z-10">
                            <Image
                                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600"
                                alt="Luxury home"
                                width={500}
                                height={600}
                                className="rounded-lg shadow-2xl hover-scale transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
