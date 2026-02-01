import { Metadata } from 'next';
import { FloatingNav } from '@/components/floating-nav';
import { Footer } from '@/components/footer';
import { ServiceCTAForm } from '@/components/service-cta-form';
import { FloatingCTA } from '@/components/floating-cta';
import { Scale, FileText, ShieldCheck, Search, Stamp, Users, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Legal Services | RealtyDoor - Property Legal Assistance',
    description: 'Expert legal services for property transactions. Title verification, documentation, registration, and complete legal compliance support.',
};

export default function LegalServicesPage() {
    return (
        <>
            <FloatingNav />

            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920"
                        alt="Legal Services"
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
                                <span className="text-sm font-semibold text-white">Expert Legal Support</span>
                            </div>

                            <h1 className="font-display text-5xl md:text-7xl text-white leading-tight">
                                Secure Your
                                <span className="block gradient-text italic">Property Investment</span>
                            </h1>

                            <p className="text-xl text-slate-300 leading-relaxed">
                                Expert legal services for secure and compliant property transactions. Title verification, documentation, and complete legal support.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a href="#cta-form">
                                    <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(255,87,34,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-2">
                                        Get Legal Assistance
                                        <ArrowRight className="h-5 w-5" />
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-8 backdrop-blur-sm">
                                <div className="text-5xl font-display gradient-text mb-2">100%</div>
                                <div className="text-white/80">Legal Compliance</div>
                            </div>
                            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <div className="text-3xl font-display text-white mb-2">2000+</div>
                                <div className="text-sm text-white/70">Cases Handled</div>
                            </div>
                            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <div className="text-3xl font-display text-white mb-2">15+</div>
                                <div className="text-sm text-white/70">Expert Lawyers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-background py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="font-display text-4xl md:text-5xl mb-6">
                            Comprehensive Legal Support
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Protect your property investment with expert legal services
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-12 hover-lift group">
                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/20 mb-6 group-hover:scale-110 transition-transform">
                                <ShieldCheck className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="font-display text-3xl mb-4">Title Verification</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                Comprehensive title search and verification to ensure clear ownership and no legal disputes or encumbrances.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>Complete ownership history check</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>Encumbrance certificate verification</span>
                                </li>
                                <li className="flex items-center gap-3 text-muted-foreground">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span>Legal dispute identification</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl bg-muted p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <FileText className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Document Preparation</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Expert drafting of sale deeds, agreements, and all legal documents.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-muted p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Search className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Due Diligence</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Thorough legal checks and property history verification.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-muted p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Stamp className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Registration Support</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Complete assistance with property registration and stamp duty.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-muted p-8 hover-lift group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                <Scale className="h-7 w-7 text-primary" />
                            </div>
                            <h3 className="font-display text-xl mb-3">Legal Compliance</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Ensure compliance with RERA, local laws, and regulations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-muted py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="font-display text-4xl md:text-5xl mb-6">
                            Our Legal Process
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Systematic approach to ensure complete legal compliance and security
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { number: "01", title: "Initial Consultation", description: "Discuss your transaction and legal requirements with our experts" },
                            { number: "02", title: "Document Collection", description: "Gather all relevant property documents and ownership records" },
                            { number: "03", title: "Title Verification", description: "Comprehensive title search and encumbrance certificate verification" },
                            { number: "04", title: "Legal Due Diligence", description: "Verify approvals, permissions, and compliance with regulations" },
                            { number: "05", title: "Agreement Drafting", description: "Prepare legally sound agreements with all necessary clauses" },
                            { number: "06", title: "Registration & Handover", description: "Assist with registration and ensure smooth legal transfer" }
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
                    serviceName="Legal Services"
                    title="Get Legal Assistance"
                    description="Consult with our property law experts for secure transactions"
                />
            </div>

            <FloatingCTA serviceName="Legal Services" ctaText="Get Legal Help" />
            <Footer />
        </>
    );
}
