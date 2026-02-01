import { Metadata } from 'next';
import { FloatingNav } from '@/components/floating-nav';
import { Footer } from '@/components/footer';
import { ServiceCTAForm } from '@/components/service-cta-form';
import { FloatingCTA } from '@/components/floating-cta';
import { Hammer, Ruler, Paintbrush, CheckCircle2, Clock, Award, ArrowRight, Sparkles, HardHat } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Construction Services | RealtyDoor - Build Your Dream Home',
    description: 'End-to-end construction services. Custom home building, renovations, and project management with quality assurance and timely delivery.',
};

export default function ConstructionPage() {
    return (
        <>
            <FloatingNav />

            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920"
                        alt="Construction Services"
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
                                <span className="text-sm font-semibold text-white">Premium Construction</span>
                            </div>

                            <h1 className="font-display text-5xl md:text-7xl text-white leading-tight">
                                Build Your
                                <span className="block gradient-text italic">Dream Home</span>
                            </h1>

                            <p className="text-xl text-slate-300 leading-relaxed">
                                End-to-end construction services with quality craftsmanship, timely delivery, and complete project management.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a href="#cta-form">
                                    <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(255,87,34,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-2">
                                        Start Your Project
                                        <ArrowRight className="h-5 w-5" />
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-8 backdrop-blur-sm">
                                <div className="text-5xl font-display gradient-text mb-2">200+</div>
                                <div className="text-white/80">Projects Completed</div>
                            </div>
                            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <div className="text-3xl font-display text-white mb-2">95%</div>
                                <div className="text-sm text-white/70">On-Time Delivery</div>
                            </div>
                            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <div className="text-3xl font-display text-white mb-2">5 Yrs</div>
                                <div className="text-sm text-white/70">Warranty</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-background py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="font-display text-4xl md:text-5xl mb-6">
                            Why Choose Our Construction Services
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Quality, transparency, and excellence in every project
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-12 hover-lift group">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 mb-6 group-hover:scale-110 transition-transform">
                                <Ruler className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="font-display text-3xl mb-4">Custom Design</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                Personalized architectural design and planning tailored to your vision, lifestyle, and budget with 3D visualization.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>3D architectural visualization</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>Vastu-compliant designs</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>Government approval assistance</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl bg-muted p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Award className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Quality Materials</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Premium quality materials from trusted suppliers and manufacturers.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-muted p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <CheckCircle2 className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Quality Assurance</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Rigorous quality checks at every stage of construction.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-muted p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Clock className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Timely Delivery</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Committed timelines with regular updates and milestone tracking.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-muted p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Paintbrush className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Interior Design</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Complete interior design and finishing services included.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-muted py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="font-display text-4xl md:text-5xl mb-6">
                            Construction Process
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            From planning to handover, we manage every detail
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { number: "01", title: "Consultation & Planning", description: "Initial meeting, site visit, and feasibility assessment" },
                            { number: "02", title: "Design & Approval", description: "Architectural design, 3D visualization, and government approvals" },
                            { number: "03", title: "Budget & Timeline", description: "Detailed cost estimation and milestone-based payment schedule" },
                            { number: "04", title: "Foundation & Structure", description: "Site preparation, foundation work, and structural construction" },
                            { number: "05", title: "Finishing & Interiors", description: "Electrical, plumbing, flooring, painting, and interior finishing" },
                            { number: "06", title: "Handover & Warranty", description: "Final inspection, snag list completion, and comprehensive warranty" }
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
                    serviceName="Construction Services"
                    title="Start Your Construction Project"
                    description="Get a free consultation and detailed project estimate"
                />
            </div>

            <FloatingCTA serviceName="Construction Services" ctaText="Start Building" />
            <Footer />
        </>
    );
}
