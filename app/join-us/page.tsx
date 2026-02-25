'use client';

import { FloatingNav } from '@/components/floating-nav';
import { JoinUsForm } from '@/components/join-us-form';
import { Building2, Users, TrendingUp, Award, CheckCircle2 } from 'lucide-react';

export default function JoinUsPage() {
    return (
        <div className="min-h-screen bg-white">
            <FloatingNav />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-primary/10">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-display text-5xl md:text-7xl mb-6">
                            Join Our Network
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Partner with RealtyDoor to connect with high-intent buyers and grow your real estate business.
                            Join a community of premium agents, brokers, and developers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl mb-4">Why Join RealtyDoor?</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Access exclusive opportunities and grow your business with our premium platform
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Users,
                                title: 'High-Intent Buyers',
                                description: 'Connect with serious buyers actively looking for premium properties',
                            },
                            {
                                icon: Building2,
                                title: 'Premium Listings',
                                description: 'Showcase your properties to a RealtyDoor audience of qualified clients',
                            },
                            {
                                icon: TrendingUp,
                                title: 'Grow Your Business',
                                description: 'Access tools and resources to scale your real estate operations',
                            },
                            {
                                icon: Award,
                                title: 'Trusted Network',
                                description: 'Join a vetted community of top-performing real estate professionals',
                            },
                        ].map((benefit, idx) => (
                            <div key={idx} className="text-center p-6 rounded-2xl border border-border hover:border-primary/50 transition-colors">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                                    <benefit.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-muted-foreground">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who Can Join Section */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl md:text-5xl mb-4">Who Can Join?</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            We welcome experienced professionals across the real estate industry
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            'Licensed Real Estate Agents',
                            'Real Estate Brokers',
                            'Property Developers & Builders',
                            'Real Estate Investors',
                            'Property Management Companies',
                            'Real Estate Consultants',
                        ].map((role, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-border">
                                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                                <span className="text-lg">{role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-4xl md:text-5xl mb-4">Apply Now</h2>
                        <p className="text-xl text-muted-foreground">
                            Fill out the form below and our team will review your application
                        </p>
                    </div>

                    <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border border-border">
                        <JoinUsForm />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-black text-white">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <h2 className="font-display text-4xl md:text-5xl mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-white/80 mb-8">
                        Join RealtyDoor today and take your real estate business to the next level.
                        Our team will review your application and get back to you within 48 hours.
                    </p>
                    <p className="text-white/60">
                        Questions? Email us at{' '}
                        <a href="mailto:partners@RealtyDoor.com" className="text-primary hover:underline">
                            partners@RealtyDoor.com
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
}
