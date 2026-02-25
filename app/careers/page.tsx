import { Metadata } from 'next';
import Script from 'next/script';
import { FloatingNav } from '@/components/floating-nav';
import { Footer } from '@/components/footer';
import { Briefcase, TrendingUp, Heart, Users, Award, Sparkles, MapPin, Clock, DollarSign, Mail } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Careers at RealtyDoor | Real Estate Jobs in India',
    description: 'Join RealtyDoor, India\'s fastest-growing real estate platform. Open positions in sales, operations, technology, legal, and marketing. Apply now and grow with us.',
    keywords: ['real estate jobs India', 'careers RealtyDoor', 'property jobs Bengaluru', 'real estate sales jobs', 'real estate company jobs India'],
    alternates: { canonical: 'https://realtydoor.in/careers' },
    openGraph: {
        title: 'Careers at RealtyDoor | Real Estate Jobs in India',
        description: 'Competitive pay, 95% employee satisfaction, 200+ team members. Join India\'s fastest-growing real estate platform.',
        url: 'https://realtydoor.in/careers',
        type: 'website',
        images: [{ url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200', width: 1200, height: 630, alt: 'Careers at RealtyDoor' }],
    },
    twitter: { card: 'summary_large_image', title: 'Careers at RealtyDoor', description: 'Join India\'s fastest-growing real estate platform.' },
};

const careersJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Open Positions at RealtyDoor',
    itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'JobPosting', title: 'Senior Real Estate Consultant', description: 'Join our Sales team as a Senior Real Estate Consultant in Mumbai.', datePosted: '2026-02-01', employmentType: 'FULL_TIME', hiringOrganization: { '@type': 'Organization', name: 'RealtyDoor', sameAs: 'https://realtydoor.in' }, jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressCountry: 'IN' } } } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'JobPosting', title: 'Full Stack Developer', description: 'Remote Full Stack Developer opportunity at RealtyDoor.', datePosted: '2026-02-01', employmentType: 'FULL_TIME', hiringOrganization: { '@type': 'Organization', name: 'RealtyDoor', sameAs: 'https://realtydoor.in' }, jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Remote', addressCountry: 'IN' } } } },
    ],
};

export default function CareersPage() {
    const benefits = [
        {
            icon: DollarSign,
            title: "Competitive Salary",
            description: "Industry-leading compensation packages with performance bonuses"
        },
        {
            icon: TrendingUp,
            title: "Growth Opportunities",
            description: "Clear career progression paths and skill development programs"
        },
        {
            icon: Heart,
            title: "Work-Life Balance",
            description: "Flexible working hours and remote work options"
        },
        {
            icon: Award,
            title: "Health Benefits",
            description: "Comprehensive health insurance for you and your family"
        },
        {
            icon: Users,
            title: "Great Culture",
            description: "Collaborative environment with passionate team members"
        },
        {
            icon: Sparkles,
            title: "Learning & Development",
            description: "Regular training sessions and certification programs"
        }
    ];

    const openPositions = [
        {
            title: "Senior Real Estate Consultant",
            department: "Sales",
            location: "Mumbai",
            type: "Full-time",
            experience: "3-5 years"
        },
        {
            title: "Property Manager",
            department: "Operations",
            location: "Bangalore",
            type: "Full-time",
            experience: "2-4 years"
        },
        {
            title: "Digital Marketing Manager",
            department: "Marketing",
            location: "Mumbai",
            type: "Full-time",
            experience: "4-6 years"
        },
        {
            title: "Full Stack Developer",
            department: "Technology",
            location: "Remote",
            type: "Full-time",
            experience: "3-5 years"
        },
        {
            title: "Legal Advisor",
            department: "Legal",
            location: "Delhi",
            type: "Full-time",
            experience: "5+ years"
        },
        {
            title: "Customer Success Manager",
            department: "Customer Support",
            location: "Pune",
            type: "Full-time",
            experience: "2-3 years"
        }
    ];

    return (
        <>
            <FloatingNav />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920"
                        alt="Careers"
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
                                <span className="text-sm font-semibold text-white">We're Hiring!</span>
                            </div>

                            <h1 className="font-display text-5xl md:text-7xl text-white leading-tight">
                                Join Our
                                <span className="block gradient-text italic">Amazing Team</span>
                            </h1>

                            <p className="text-xl text-slate-300 leading-relaxed">
                                Be part of India's fastest-growing real estate platform. Work with passionate professionals and make a real impact in the industry.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a href="#open-positions">
                                    <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(255,87,34,0.5)] transition-all duration-300 hover:scale-105">
                                        View Open Positions
                                    </button>
                                </a>
                                <a href="#benefits">
                                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                                        Our Benefits
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* Stats Bento Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-8 backdrop-blur-sm">
                                <div className="text-5xl font-display gradient-text mb-2">200+</div>
                                <div className="text-white/80">Team Members</div>
                            </div>
                            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <div className="text-3xl font-display text-white mb-2">15+</div>
                                <div className="text-sm text-white/70">Offices</div>
                            </div>
                            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <div className="text-3xl font-display text-white mb-2">4.8/5</div>
                                <div className="text-sm text-white/70">Employee Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="bg-background py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="font-display text-4xl md:text-5xl mb-6">
                            Why Work With Us
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We invest in our people and create an environment where you can thrive
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={index} className="rounded-3xl bg-muted p-8 hover-lift group">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-all">
                                        <Icon className="h-7 w-7 text-primary" />
                                    </div>
                                    <h3 className="font-display text-xl mb-3">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="open-positions" className="bg-muted py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 text-center">
                        <h2 className="font-display text-4xl md:text-5xl mb-6">
                            Open Positions
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Find your perfect role and start your journey with us
                        </p>
                    </div>

                    {/* Jobs Table */}
                    <div className="rounded-3xl bg-background border border-border overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-border bg-muted/50">
                                        <th className="px-6 py-4 text-left font-semibold">Position</th>
                                        <th className="px-6 py-4 text-left font-semibold">Department</th>
                                        <th className="px-6 py-4 text-left font-semibold">Location</th>
                                        <th className="px-6 py-4 text-left font-semibold">Type</th>
                                        <th className="px-6 py-4 text-left font-semibold">Experience</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {openPositions.map((position, index) => (
                                        <tr key={index} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                                            <td className="px-6 py-4 font-semibold">{position.title}</td>
                                            <td className="px-6 py-4 text-muted-foreground">{position.department}</td>
                                            <td className="px-6 py-4 text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-4 w-4" />
                                                    {position.location}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-muted-foreground">{position.type}</td>
                                            <td className="px-6 py-4 text-muted-foreground">{position.experience}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Application Instructions */}
                    <div className="mt-12 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-8 md:p-12 text-center">
                        <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="font-display text-2xl mb-4">Interested in Joining Us?</h3>
                        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                            To apply for any of the above positions, please send your resume and cover letter to:
                        </p>
                        <a
                            href="mailto:careers@realtydoor.com?subject=Job Application"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(255,87,34,0.5)] transition-all duration-300 hover:scale-105"
                        >
                            <Mail className="h-5 w-5" />
                            careers@realtydoor.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-6">
                            Please mention the position title in your email subject line
                        </p>
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section className="bg-background py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-display text-4xl md:text-5xl mb-6">
                                Our Culture
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                At RealtyDoor, we believe in creating an environment where innovation thrives, ideas are valued, and every team member has the opportunity to grow.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                We celebrate diversity, encourage collaboration, and maintain a healthy work-life balance. Join us and be part of a team that's transforming the real estate industry.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                                    <span className="font-semibold text-primary">Innovation First</span>
                                </div>
                                <div className="px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                                    <span className="font-semibold text-primary">Team Collaboration</span>
                                </div>
                                <div className="px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                                    <span className="font-semibold text-primary">Continuous Learning</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-3xl bg-muted p-6 hover-lift">
                                <div className="text-4xl font-display gradient-text mb-2">95%</div>
                                <div className="text-sm text-muted-foreground">Employee Satisfaction</div>
                            </div>
                            <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-6 hover-lift">
                                <div className="text-4xl font-display text-primary mb-2">50+</div>
                                <div className="text-sm text-muted-foreground">Training Programs</div>
                            </div>
                            <div className="col-span-2 rounded-3xl bg-muted p-6 hover-lift">
                                <div className="text-4xl font-display gradient-text mb-2">3.5 Years</div>
                                <div className="text-sm text-muted-foreground">Average Tenure</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
