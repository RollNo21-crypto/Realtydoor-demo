import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FloatingNav } from '@/components/floating-nav';
import { Footer } from '@/components/footer';
import { PropertyCard } from '@/components/property-card';
import { PropertySearchForm } from '@/components/property-search-form';
import { PropertyCategories } from '@/components/property-categories';
import { TestimonialsBenefitsBento } from '@/components/testimonials-benefits-bento';
import { LoanCalculator } from '@/components/loan-calculator';
import { HotDeals } from '@/components/hot-deals';
import { getFeaturedProperties } from '@/lib/mock-data';
import { ArrowRight, Shield, Eye, Sparkles, Award, Users, TrendingUp, CheckCircle } from 'lucide-react';

export default async function HomePage() {
    // Use mock data instead of database
    const featuredProperties = getFeaturedProperties();

    return (
        <>
            <FloatingNav />

            {/* Hero Section with Video Background */}
            <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source src="/Luxury_Animated_Video_Loop.mp4" type="video/mp4" />
                </video>

                <div className="hero-gradient absolute inset-0" />
                <div className="gradient-overlay absolute inset-0" />

                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32">
                    {/* Hero Content - Centered */}
                    <div className="mx-auto max-w-4xl text-center mb-16 animate-float">
                        <span className="mb-8 inline-block rounded-full border border-white/30 bg-white/20 px-6 py-2 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm animate-slide-up">
                            Premium Properties • Verified Builders
                        </span>
                        <h1 className="font-display text-6xl leading-[1.1] text-white md:text-8xl animate-slide-up stagger-1">
                            Discover Your Next
                            <br />
                            <span className="italic font-normal">Luxury</span> Investment
                        </h1>
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
            <section className="bg-background py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 flex flex-col justify-between md:flex-row md:items-end">
                        <div className="max-w-2xl">
                            <h2 className="font-display text-4xl md:text-5xl mb-6">Featured Projects</h2>
                            <p className="text-lg text-muted-foreground">
                                Handpicked premium properties from our exclusive collection
                            </p>
                        </div>
                        <Button variant="link" asChild className="mt-8 md:mt-0">
                            <Link href="/properties" className="group">
                                View all properties
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
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
            <section className="bg-background py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="font-display text-4xl md:text-5xl mb-6">
                            Investment Tools & Exclusive Deals
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            Plan your investment with our loan calculator and discover limited-time offers
                        </p>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Loan Calculator */}
                        <div>
                            <LoanCalculator />
                        </div>

                        {/* Hot Deals */}
                        <div>
                            <HotDeals />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-background py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="relative flex flex-col items-center gap-16 overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-12 text-center md:flex-row md:p-24 md:text-left">
                        <div className="absolute inset-0 gradient-overlay opacity-50" />
                        <div className="flex-1 relative z-10">
                            <h2 className="font-display text-4xl text-white md:text-5xl mb-6">
                                Ready to find your
                                <br />
                                next masterpiece?
                            </h2>
                            <p className="mb-10 text-lg text-slate-400">
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
