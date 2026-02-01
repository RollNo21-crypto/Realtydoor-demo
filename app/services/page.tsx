import { FloatingNav } from '@/components/floating-nav';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Shield, TrendingUp, Users, Award, CheckCircle, Target } from 'lucide-react';

export default function ServicesPage() {
    const services = [
        {
            icon: Shield,
            title: 'Property Verification',
            description: 'Complete legal and technical verification of all properties with RERA compliance checks.',
            features: ['Title Verification', 'Legal Documentation', 'RERA Compliance', 'Site Inspection']
        },
        {
            icon: TrendingUp,
            title: 'Investment Advisory',
            description: 'Expert guidance on property investments with market analysis and ROI projections.',
            features: ['Market Analysis', 'ROI Projections', 'Portfolio Management', 'Risk Assessment']
        },
        {
            icon: Users,
            title: 'End-to-End Support',
            description: 'Comprehensive assistance from property search to final handover and beyond.',
            features: ['Property Search', 'Site Visits', 'Negotiation', 'Documentation Support']
        },
        {
            icon: Award,
            title: 'Premium Listings',
            description: 'Exclusive access to verified premium properties from top builders across India.',
            features: ['Curated Properties', 'Exclusive Deals', 'Pre-Launch Access', 'VIP Treatment']
        }
    ];

    return (
        <>
            <FloatingNav />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20">
                <div className="absolute inset-0 bg-grid-white/[0.02]" />
                <div className="relative mx-auto max-w-7xl px-6">
                    <div className="text-center">
                        <h1 className="font-display text-5xl md:text-7xl text-white mb-6">
                            Our <span className="italic font-normal gradient-text">Services</span>
                        </h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Comprehensive real estate solutions tailored to your needs
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-background">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className="glass-card p-8 hover-lift">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center mb-6 animate-pulse-glow">
                                        <Icon className="h-8 w-8 text-white" />
                                    </div>

                                    <h3 className="font-display text-3xl mb-4">{service.title}</h3>
                                    <p className="text-muted-foreground mb-6">{service.description}</p>

                                    <ul className="space-y-3">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                                <span className="text-sm">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-orange-500/10">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <Target className="h-16 w-16 mx-auto mb-6 text-primary" />
                    <h2 className="font-display text-4xl md:text-5xl mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        Let our experts guide you through your real estate journey
                    </p>
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                        Schedule a Consultation
                    </Button>
                </div>
            </section>

            <Footer />
        </>
    );
}
