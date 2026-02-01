import { Metadata } from 'next';
import { FloatingNav } from '@/components/floating-nav';
import { Footer } from '@/components/footer';
import { ServiceCTAForm } from '@/components/service-cta-form';
import { FloatingCTA } from '@/components/floating-cta';
import { TrendingUp, BarChart3, FileSearch, Target, Calculator, Award, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Valuation Services | RealtyDoor - Property Appraisal Experts',
    description: 'Professional property valuation services. Accurate market analysis, investment advisory, and comprehensive property appraisal reports.',
};

export default function ValuationPage() {
    return (
        <>
            <FloatingNav />

            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=1920"
                        alt="Valuation Services"
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
                                <span className="text-sm font-semibold text-white">Certified Valuers</span>
                            </div>

                            <h1 className="font-display text-5xl md:text-7xl text-white leading-tight">
                                Know Your Property's
                                <span className="block gradient-text italic">True Worth</span>
                            </h1>

                            <p className="text-xl text-slate-300 leading-relaxed">
                                Professional property appraisal and market analysis for informed investment decisions. Accurate valuations you can trust.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a href="#cta-form">
                                    <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(255,87,34,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-2">
                                        Get Property Valuation
                                        <ArrowRight className="h-5 w-5" />
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-8 backdrop-blur-sm">
                                <div className="text-5xl font-display gradient-text mb-2">5000+</div>
                                <div className="text-white/80">Properties Valued</div>
                            </div>
                            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <div className="text-3xl font-display text-white mb-2">98%</div>
                                <div className="text-sm text-white/70">Accuracy Rate</div>
                            </div>
                            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <div className="text-3xl font-display text-white mb-2">48 Hrs</div>
                                <div className="text-sm text-white/70">Report Delivery</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-background py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="font-display text-4xl md:text-5xl mb-6">
                            Professional Valuation Services
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Accurate assessments backed by market expertise and data
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-12 hover-lift group">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 mb-6 group-hover:scale-110 transition-transform">
                                <BarChart3 className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="font-display text-3xl mb-4">Market Analysis</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                In-depth analysis of current market trends, comparable sales, and area-specific pricing dynamics to determine accurate property value.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>Comparable property analysis</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>Market trend evaluation</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>Location-based pricing insights</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl bg-muted p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Calculator className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Accurate Valuation</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Precise property valuation using industry-standard methodologies.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-muted p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <FileSearch className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Detailed Reports</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Comprehensive reports with supporting documentation and evidence.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-muted p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Target className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Investment Advisory</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Expert guidance on investment potential and ROI projections.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-muted p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Award className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Certified Valuers</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Experienced and certified property valuers with market knowledge.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-muted py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="font-display text-4xl md:text-5xl mb-6">
                            Valuation Process
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Systematic approach to deliver accurate and reliable property valuations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { number: "01", title: "Initial Inquiry", description: "Share property details and schedule inspection" },
                            { number: "02", title: "Property Inspection", description: "Thorough on-site assessment of condition and features" },
                            { number: "03", title: "Market Research", description: "Research comparable properties and current market trends" },
                            { number: "04", title: "Valuation Analysis", description: "Apply professional methods considering all factors" },
                            { number: "05", title: "Report Preparation", description: "Prepare detailed report with methodology and evidence" },
                            { number: "06", title: "Consultation & Delivery", description: "Present findings and provide investment recommendations" }
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
                    serviceName="Valuation Services"
                    title="Get Property Valuation"
                    description="Request a professional property appraisal from our certified valuers"
                />
            </div>

            <FloatingCTA serviceName="Valuation Services" ctaText="Get Property Valued" />
            <Footer />
        </>
    );
}
