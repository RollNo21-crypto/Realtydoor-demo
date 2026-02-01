import { Metadata } from 'next';
import { FloatingNav } from '@/components/floating-nav';
import { Footer } from '@/components/footer';
import { ServiceCTAForm } from '@/components/service-cta-form';
import { LoanCalculator } from '@/components/loan-calculator';
import { FloatingCTA } from '@/components/floating-cta';
import { Wallet, TrendingDown, Shield, Clock, FileCheck, Headphones, CheckCircle2, ArrowRight, Sparkles, Calculator } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Loan Assistance | RealtyDoor - Home Loan Made Easy',
    description: 'Get the best home loan rates with our expert assistance. Compare offers, calculate EMI, and get end-to-end support for your home loan application.',
};

export default function LoanAssistancePage() {
    return (
        <>
            <FloatingNav />

            {/* Hero Section - Bento Style */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920"
                        alt="Loan Assistance"
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
                                <span className="text-sm font-semibold text-white">Expert Loan Guidance</span>
                            </div>

                            <h1 className="font-display text-5xl md:text-7xl text-white leading-tight">
                                Get the
                                <span className="block gradient-text italic">Best Loan Rates</span>
                            </h1>

                            <p className="text-xl text-slate-300 leading-relaxed">
                                Compare offers from 20+ banks, get pre-approved loans, and enjoy hassle-free documentation with our expert loan assistance.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a href="#emi-calculator">
                                    <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(255,87,34,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-2">
                                        <Calculator className="h-5 w-5" />
                                        Calculate EMI
                                    </button>
                                </a>
                                <a href="#cta-form">
                                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                                        Get Started
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-8 backdrop-blur-sm">
                                <div className="text-5xl font-display gradient-text mb-2">6.5%</div>
                                <div className="text-white/80">Starting Interest Rate</div>
                            </div>
                            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <div className="text-3xl font-display text-white mb-2">20+</div>
                                <div className="text-sm text-white/70">Partner Banks</div>
                            </div>
                            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <div className="text-3xl font-display text-white mb-2">7 Days</div>
                                <div className="text-sm text-white/70">Quick Approval</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* EMI Calculator Section */}
            <section id="emi-calculator" className="bg-background py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-12 text-center">
                        <h2 className="font-display text-4xl md:text-5xl mb-6">
                            Calculate Your EMI
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Use our interactive calculator to estimate your monthly payments
                        </p>
                    </div>
                    <LoanCalculator />
                </div>
            </section>

            {/* Benefits Bento Grid */}
            <section className="bg-muted py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="font-display text-4xl md:text-5xl mb-6">
                            Why Choose Our Loan Assistance
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We make home loans simple, transparent, and affordable
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-12 hover-lift group">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 mb-6 group-hover:scale-110 transition-transform">
                                <TrendingDown className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="font-display text-3xl mb-4">Best Interest Rates</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                We partner with 20+ leading banks and financial institutions to bring you the most competitive interest rates in the market. Our loan experts negotiate on your behalf to secure the best possible terms.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>Compare rates from multiple lenders</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>Negotiate better terms and conditions</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>No hidden charges or fees</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl bg-background p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Clock className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Quick Approval</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Fast-track processing with pre-approved offers and minimal documentation.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-background p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Shield className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Transparent Process</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Complete clarity on rates, processing fees, and terms with no hidden costs.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-background p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <FileCheck className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Documentation Support</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Expert guidance on paperwork and document preparation for approval.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-background p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Headphones className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Dedicated Support</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Personal loan advisor to guide you through every step of the process.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-background py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="font-display text-4xl md:text-5xl mb-6">
                            How It Works
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Our streamlined process gets you approved faster
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                number: "01",
                                title: "Initial Consultation",
                                description: "Discuss requirements, budget, and financial situation with our experts"
                            },
                            {
                                number: "02",
                                title: "Loan Comparison",
                                description: "Compare offers from multiple banks based on rates and terms"
                            },
                            {
                                number: "03",
                                title: "Document Preparation",
                                description: "Help prepare and organize all required documents"
                            },
                            {
                                number: "04",
                                title: "Application Submission",
                                description: "Submit application and follow up for smooth processing"
                            },
                            {
                                number: "05",
                                title: "Property Valuation",
                                description: "Coordinate property valuation and legal verification"
                            },
                            {
                                number: "06",
                                title: "Loan Disbursement",
                                description: "Assist with final documentation and timely disbursement"
                            }
                        ].map((step, index) => (
                            <div key={index} className="rounded-3xl bg-muted p-8 border border-border hover-lift group">
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

            <div id="cta-form">
                <ServiceCTAForm
                    serviceName="Loan Assistance"
                    title="Get Expert Loan Advice"
                    description="Connect with our loan specialists for personalized guidance and best rates"
                />
            </div>

            <FloatingCTA serviceName="Loan Assistance" ctaText="Get Loan Advice" />
            <Footer />
        </>
    );
}
