import { Metadata } from 'next';
import { FloatingNav } from '@/components/floating-nav';
import { Footer } from '@/components/footer';
import { ServiceCTAForm } from '@/components/service-cta-form';
import { FloatingCTA } from '@/components/floating-cta';
import { Home, TrendingUp, Camera, Users, FileText, Handshake, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Resale Services | RealtyDoor - Sell Your Property Fast',
    description: 'Professional property resale services. Get the best price for your property with our expert marketing, valuation, and negotiation support.',
};

export default function ResaleServicesPage() {
    return (
        <>
            <FloatingNav />

            {/* Hero Section - Bento Style */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920"
                        alt="Resale Services"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
                </div>

                {/* Content */}
                <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text Content */}
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
                                <Sparkles className="h-4 w-4 text-primary" />
                                <span className="text-sm font-semibold text-white">Premium Resale Service</span>
                            </div>

                            <h1 className="font-display text-5xl md:text-7xl text-white leading-tight">
                                Sell Your Property at the
                                <span className="block gradient-text italic">Best Price</span>
                            </h1>

                            <p className="text-xl text-slate-300 leading-relaxed">
                                Expert marketing, professional photography, and skilled negotiation to maximize your property's value and ensure a quick sale.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a href="#cta-form">
                                    <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(255,87,34,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-2">
                                        Get Free Valuation
                                        <ArrowRight className="h-5 w-5" />
                                    </button>
                                </a>
                                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Right: Stats Bento Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-8 backdrop-blur-sm">
                                <div className="text-5xl font-display gradient-text mb-2">500+</div>
                                <div className="text-white/80">Properties Sold</div>
                            </div>
                            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <div className="text-3xl font-display text-white mb-2">98%</div>
                                <div className="text-sm text-white/70">Client Satisfaction</div>
                            </div>
                            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <div className="text-3xl font-display text-white mb-2">30 Days</div>
                                <div className="text-sm text-white/70">Avg. Sale Time</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Bento Grid */}
            <section className="bg-background py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="font-display text-4xl md:text-5xl mb-6">
                            Why Choose Our Resale Service
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Comprehensive support to ensure you get the best value for your property
                        </p>
                    </div>

                    {/* Bento Grid Layout */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Large Feature Card */}
                        <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-12 hover-lift group">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 mb-6 group-hover:scale-110 transition-transform">
                                <TrendingUp className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="font-display text-3xl mb-4">Maximum Value</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                Our expert valuers analyze market trends, comparable sales, and your property's unique features to determine the optimal listing price that attracts buyers while maximizing your returns.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>Comprehensive market analysis</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>Strategic pricing recommendations</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>Competitive positioning strategy</span>
                                </li>
                            </ul>
                        </div>

                        {/* Small Cards */}
                        <div className="rounded-3xl bg-muted p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Camera className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Professional Marketing</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                High-quality photography, virtual tours, and multi-channel marketing campaigns.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-muted p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Users className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Qualified Buyers</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Access to our extensive network of pre-verified and financially qualified buyers.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-muted p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <FileText className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Documentation Support</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Complete assistance with paperwork, legal verification, and registration.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-muted p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Handshake className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Expert Negotiation</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Skilled negotiators ensure you get the best deal with complete transparency.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section - Timeline Style */}
            <section className="bg-muted py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="font-display text-4xl md:text-5xl mb-6">
                            Our Proven Process
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Six simple steps to sell your property quickly and profitably
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                number: "01",
                                title: "Property Assessment",
                                description: "Thorough inspection and market analysis to determine optimal listing price"
                            },
                            {
                                number: "02",
                                title: "Professional Staging",
                                description: "Photography, virtual tours, and staging recommendations"
                            },
                            {
                                number: "03",
                                title: "Multi-Channel Marketing",
                                description: "Listed across all major portals and our exclusive buyer network"
                            },
                            {
                                number: "04",
                                title: "Buyer Screening",
                                description: "We handle inquiries, screen buyers, and coordinate viewings"
                            },
                            {
                                number: "05",
                                title: "Negotiation",
                                description: "Expert negotiation to secure the best price and terms"
                            },
                            {
                                number: "06",
                                title: "Documentation & Closure",
                                description: "Manage all paperwork and legal verification for smooth transaction"
                            }
                        ].map((step, index) => (
                            <div key={index} className="rounded-3xl bg-background p-8 border border-border hover-lift group">
                                <div className="text-6xl font-display gradient-text mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                    {step.number}
                                </div>
                                <h3 className="font-display text-xl mb-3">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div id="cta-form">
                <ServiceCTAForm
                    serviceName="Resale Services"
                    title="Ready to Sell Your Property?"
                    description="Get a free property valuation and consultation from our experts"
                />
            </div>

            {/* Floating CTA Button */}
            <FloatingCTA
                serviceName="Resale Services"
                ctaText="Sell Your Property"
            />

            <Footer />
        </>
    );
}
