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
import { HomeFaqSection } from '@/components/home-faq-section';
import { getFeaturedProperties } from '@/lib/mock-data';
import { ArrowRight, Shield, Eye, Sparkles, Award, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { StatsTickerBanner } from '@/components/stats-ticker-banner';
import { BannerPlaceholder } from '@/components/promo-banner';
import { LifestyleBanner } from '@/components/lifestyle-banner';

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

                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-12 flex flex-col justify-center h-full min-h-screen">
                    {/* Hero Content - Centered */}
                    <div className="mx-auto max-w-4xl text-center mb-8 animate-float">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-white animate-slide-up stagger-1">
                            Verified Residential Plots in Bengaluru’s <br className="hidden md:block" /> <span className="gradient-text italic">High-Growth Corridors</span>
                        </h1>
                        <p className="mt-6 text-sm md:text-base text-white/80 max-w-2xl mx-auto animate-slide-up stagger-2 leading-relaxed font-light">
                            Explore premium residential plots in Hoskote, Bagalur, Kanakapura Road, and other fast-growing Bengaluru locations with verified developers, legal support, and home-loan assistance.
                        </p>
                    </div>

                    {/* Property Search Form */}
                    <div className="mb-8">
                        <PropertySearchForm />
                    </div>

                    {/* Stats */}
                    <div className="border-t border-white/10 pt-6">
                        <div className="w-full">
                            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 items-center justify-center max-w-4xl mx-auto divide-x divide-white/10">
                                <div className="text-center animate-slide-up stagger-1 px-2">
                                    <div className="font-display text-2xl sm:text-3xl md:text-5xl text-white gradient-text mb-1 relative md:inline-block">100%</div>
                                    <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-slate-300">
                                        Verified Developer Listings
                                    </div>
                                </div>
                                <div className="text-center animate-slide-up stagger-2 px-2">
                                    <div className="font-display text-2xl sm:text-3xl md:text-5xl text-white gradient-text mb-1 relative md:inline-block">RERA</div>
                                    <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-slate-300">
                                        Registered Projects
                                    </div>
                                </div>
                                <div className="text-center animate-slide-up stagger-3 px-2">
                                    <div className="font-display text-2xl sm:text-3xl md:text-5xl text-white gradient-text mb-1 relative md:inline-block">Clear-Title</div>
                                    <div className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-slate-300">
                                        & Documentation Support
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Ticker */}
            <StatsTickerBanner />

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
                    <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <div className="max-w-3xl">
                            <span className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4">
                                <Sparkles className="h-3.5 w-3.5" /> FEATURED OPPORTUNITIES
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl leading-[1.15] mb-6">
                                Verified Residential Plots in Bengaluru’s <span className="italic font-normal gradient-text">Most Promising</span> Corridors
                            </h2>
                            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl font-light">
                                Discover handpicked plotted developments in Hoskote, Bagalur, Kanakapura Road, and other strategic locations selected for connectivity, builder credibility, and long-term potential.
                            </p>
                        </div>
                        <Link href="/properties" className="flex-shrink-0">
                            <Button variant="outline" className="rounded-full px-8 py-6 group hover:bg-primary hover:text-white transition-all duration-300 w-full md:w-auto">
                                View All Plot Listings
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

            {/* Promo Banner */}
            <BannerPlaceholder
                tag="BUYER SUPPORT"
                headline="Get Expert Help with Plot Financing and Purchase Planning"
                subtext="Estimate your budget, compare EMI options, understand registration costs, and get guidance on plot financing before you buy."
                ctaLabel="Plan Your Budget"
                ctaHref="/contact"
                theme="dark"
            />

            {/* Property Categories */}
            <PropertyCategories />

            {/* Lifestyle / Why Us Banner */}
            <LifestyleBanner />

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

            {/* Homepage FAQs */}
            <HomeFaqSection />

            {/* CTA */}
            <section className="bg-background py-24 relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="relative flex flex-col items-center gap-16 overflow-hidden rounded-[3rem] bg-zinc-950 p-12 text-center md:flex-row md:p-24 md:text-left border border-white/10 group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="flex-1 relative z-10">
                            <h2 className="font-display text-5xl text-white md:text-7xl mb-8 leading-tight">
                                Start Your Search for{' '}
                                <span className="gradient-text italic">Verified Residential Plots</span>
                                <br />in Bengaluru
                            </h2>
                            <p className="mb-12 text-xl text-slate-400 max-w-lg leading-relaxed">
                                Connect with RealtyDoor to explore premium plotted developments, compare top growth locations, and buy with greater clarity and confidence.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Button size="lg" className="bg-gold hover:bg-gold/90 hover-glow transition-all duration-300">
                                    Explore Plots
                                </Button>
                                <Button size="lg" variant="outline" className="border-white/20 text-black
                                hover:bg-white/10  hover-scale">
                                    Download Buyer Guide
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
