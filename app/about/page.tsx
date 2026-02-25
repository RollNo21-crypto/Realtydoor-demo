import { Metadata } from 'next';
import Script from 'next/script';
import { FloatingNav } from '@/components/floating-nav';
import { Footer } from '@/components/footer';
import { Target, Users, Award, TrendingUp, Shield, Heart, Building2, CheckCircle2, Sparkles, Calendar, MapPin, Trophy } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'About RealtyDoor | Trusted Real Estate Experts in Bengaluru Since 2015',
    description: 'RealtyDoor is Bengaluru\'s trusted real estate platform. 9+ years of excellence, 5000+ properties sold, 10,000+ happy clients. Learn about our mission, team, and values.',
    keywords: ['about RealtyDoor', 'real estate company Bengaluru', 'trusted property agents India', 'real estate experts', 'RealtyDoor team'],
    alternates: { canonical: 'https://realtydoor.in/about' },
    openGraph: {
        title: 'About RealtyDoor | Trusted Real Estate Experts Since 2015',
        description: '9+ years of excellence, 5000+ properties sold, 10,000+ happy clients. India\'s most trusted real estate platform.',
        url: 'https://realtydoor.in/about',
        type: 'website',
        images: [{ url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200', width: 1200, height: 630, alt: 'About RealtyDoor' }],
    },
    twitter: { card: 'summary_large_image', title: 'About RealtyDoor', description: 'India\'s most trusted real estate platform since 2015.' },
};

const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About RealtyDoor',
    url: 'https://realtydoor.in/about',
    description: 'RealtyDoor is a premium real estate platform with 9+ years of excellence, connecting buyers with verified properties in Bengaluru and across India.',
    mainEntity: {
        '@type': 'Organization',
        name: 'RealtyDoor',
        foundingDate: '2015',
        numberOfEmployees: { '@type': 'QuantitativeValue', value: 200 },
        url: 'https://realtydoor.in',
    },
};

export default function AboutPage() {
    return (
        <>
            <Script id="about-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }} />
            <FloatingNav />

            {/* Hero Section - Full Screen with Bento Stats */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920"
                        alt="About RealtyDoor"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
                                <Sparkles className="h-4 w-4 text-primary" />
                                <span className="text-sm font-semibold text-white">The Gold Standard Since 2015</span>
                            </div>

                            <h1 className="font-display text-5xl md:text-7xl text-white leading-tight">
                                Securing Legacies,
                                <span className="block gradient-text italic">Verified Excellence</span>
                            </h1>

                            <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                                RealtyDoor is Bengaluru's premier RERA-plot consultancy, specializing in BMRDA/BBMP-approved residential developments. We bridge the gap between discerning investors and gold-standard land opportunities.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a href="#our-story">
                                    <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(255,87,34,0.5)] transition-all duration-300 hover:scale-105">
                                        Discover Our Heritage
                                    </button>
                                </a>
                                <a href="#team">
                                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                                        Meet the Architects of Success
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* Stats Bento Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-8 backdrop-blur-sm">
                                <div className="text-5xl font-display gradient-text mb-2">9+ Years</div>
                                <div className="text-white/80 font-medium">Unmatched Real Estate Authority</div>
                            </div>
                            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <div className="text-3xl font-display text-white mb-2">5000+</div>
                                <div className="text-sm text-white/70">Premium Closures</div>
                            </div>
                            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <div className="text-3xl font-display text-white mb-2">10K+</div>
                                <div className="text-sm text-white/70">Discerning Families</div>
                            </div>
                            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <div className="text-3xl font-display text-white mb-2">15+</div>
                                <div className="text-sm text-white/70">Strategic Hubs</div>
                            </div>
                            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <div className="text-3xl font-display text-white mb-2">99%</div>
                                <div className="text-sm text-white/70">Retention Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section id="our-story" className="bg-background py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-12 hover-lift">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 mb-6">
                                <Target className="h-8 w-8 text-primary" />
                            </div>
                            <h2 className="font-display text-3xl mb-4">Our Mission</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed italic">
                                "To democratize access to premium residential plots by eliminating ambiguity, ensuring every Khata transfer and legal due diligence process is backed by absolute certainty."
                            </p>
                        </div>

                        <div className="rounded-3xl bg-muted p-12 hover-lift">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                                <TrendingUp className="h-8 w-8 text-primary" />
                            </div>
                            <h2 className="font-display text-3xl mb-4">Our Vision</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed italic">
                                "To become the definitive authority for land investment in South India, leveraging 360-degree verification protocols to build tomorrow's heritage today."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Bento Grid */}
            <section className="bg-muted py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="font-display text-4xl md:text-5xl mb-6">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-12 hover-lift group">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 mb-6 group-hover:scale-110 transition-transform">
                                <Shield className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="font-display text-3xl mb-4">Trust & Transparency</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                We believe in complete transparency in all our dealings. Every property is verified, every price is fair, and every commitment is honored.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>100% verified properties</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>No hidden charges</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>Clear documentation</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl bg-background p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Award className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Excellence</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Committed to delivering exceptional service and quality in every interaction.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-background p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Heart className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Customer First</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Your satisfaction is our top priority. We go above and beyond for every client.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-background p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Sparkles className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Innovation</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Leveraging cutting-edge technology for seamless real estate experiences.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-background p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Trophy className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Integrity</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Ethical practices and honest dealings form the foundation of our business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="bg-background py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="font-display text-4xl md:text-5xl mb-6">
                            Meet Our Leadership
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Experienced professionals dedicated to your success
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: 'Rajesh Kumar', role: 'Founder & CEO', experience: '15+ Years' },
                            { name: 'Priya Sharma', role: 'Head of Operations', experience: '12+ Years' },
                            { name: 'Amit Patel', role: 'Chief Technology Officer', experience: '10+ Years' },
                            { name: 'Sneha Reddy', role: 'Head of Customer Success', experience: '8+ Years' }
                        ].map((member, index) => (
                            <div key={index} className="rounded-3xl bg-muted p-8 hover-lift group text-center">
                                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Users className="h-16 w-16 text-primary" />
                                </div>
                                <h3 className="font-display text-xl mb-2">{member.name}</h3>
                                <p className="text-sm text-primary font-semibold mb-1">{member.role}</p>
                                <p className="text-xs text-muted-foreground">{member.experience}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-muted py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="font-display text-4xl md:text-5xl mb-6">
                            Why Choose RealtyDoor
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            What sets us apart in the real estate industry
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="rounded-3xl bg-background p-8 hover-lift">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                                <Building2 className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Premium Properties</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                RealtyDoor selection of verified luxury properties across prime locations.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-background p-8 hover-lift">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                                <Shield className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Secure Transactions</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                End-to-end legal support and secure payment processing for peace of mind.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-background p-8 hover-lift">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                                <Users className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Expert Guidance</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Dedicated relationship managers to guide you through every step.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
