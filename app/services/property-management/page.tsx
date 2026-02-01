import { Metadata } from 'next';
import { FloatingNav } from '@/components/floating-nav';
import { Footer } from '@/components/footer';
import { ServiceCTAForm } from '@/components/service-cta-form';
import { FloatingCTA } from '@/components/floating-cta';
import { Building2, Users, Wrench, DollarSign, ClipboardCheck, Shield, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Property Management | RealtyDoor - Professional Property Care',
    description: 'Comprehensive property management services. Tenant management, maintenance, rent collection, and more. Let us handle your property while you relax.',
};

export default function PropertyManagementPage() {
    return (
        <>
            <FloatingNav />

            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920"
                        alt="Property Management"
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
                                <span className="text-sm font-semibold text-white">Full-Service Management</span>
                            </div>

                            <h1 className="font-display text-5xl md:text-7xl text-white leading-tight">
                                Hassle-Free
                                <span className="block gradient-text italic">Property Management</span>
                            </h1>

                            <p className="text-xl text-slate-300 leading-relaxed">
                                Professional management for your rental properties. We handle tenants, maintenance, and everything in between.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a href="#cta-form">
                                    <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(255,87,34,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-2">
                                        Get Free Consultation
                                        <ArrowRight className="h-5 w-5" />
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-8 backdrop-blur-sm">
                                <div className="text-5xl font-display gradient-text mb-2">1000+</div>
                                <div className="text-white/80">Properties Managed</div>
                            </div>
                            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <div className="text-3xl font-display text-white mb-2">99%</div>
                                <div className="text-sm text-white/70">Rent Collection</div>
                            </div>
                            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <div className="text-3xl font-display text-white mb-2">24/7</div>
                                <div className="text-sm text-white/70">Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-background py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="font-display text-4xl md:text-5xl mb-6">
                            Comprehensive Management Services
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Everything you need to maximize your rental property's potential
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-12 hover-lift group">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 mb-6 group-hover:scale-110 transition-transform">
                                <Users className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="font-display text-3xl mb-4">Tenant Management</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                Complete tenant screening, onboarding, and relationship management to ensure reliable occupancy and minimize vacancies.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>Rigorous background checks</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>Employment and reference verification</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>Lease agreement preparation</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl bg-muted p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <DollarSign className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Rent Collection</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Timely rent collection with transparent accounting and monthly statements.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-muted p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Wrench className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Maintenance & Repairs</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                24/7 support with vetted contractors and quality assurance for all repairs.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-muted p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <ClipboardCheck className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Regular Inspections</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Periodic property inspections to ensure proper maintenance.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-muted p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Shield className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Legal Compliance</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Ensure all agreements comply with local regulations and laws.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-muted py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="font-display text-4xl md:text-5xl mb-6">
                            How It Works
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Our proven process ensures your property is well-managed and profitable
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { number: "01", title: "Property Assessment", description: "Thorough evaluation and optimal rental pricing based on market analysis" },
                            { number: "02", title: "Marketing & Screening", description: "Professional listing and rigorous tenant screening process" },
                            { number: "03", title: "Lease Agreement", description: "Comprehensive lease agreements and legal documentation" },
                            { number: "04", title: "Rent Collection", description: "Automated collection with monthly financial statements" },
                            { number: "05", title: "Maintenance Coordination", description: "Handle all requests with trusted contractors" },
                            { number: "06", title: "Regular Reporting", description: "Detailed monthly reports on property condition and financials" }
                        ].map((step, index) => (
                            <div key={index} className="rounded-3xl bg-background p-8 border border-border hover-lift group">
                                <div className="text-6xl font-display gradient-text mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                    {step.number}
                                </div>
                                <h3 className="font-display text-xl mb-3">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div id="cta-form">
                <ServiceCTAForm
                    serviceName="Property Management"
                    title="Let Us Manage Your Property"
                    description="Get a free consultation and learn how we can maximize your rental income"
                />
            </div>

            <FloatingCTA serviceName="Property Management" ctaText="Manage My Property" />
            <Footer />
        </>
    );
}
