'use client';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FloatingNav } from '@/components/floating-nav';
import { PropertySectionTabs } from '@/components/property-section-tabs';
import { MapPin, Sparkles, Phone, Mail, ArrowLeft } from 'lucide-react';

export default function EarthVillaPage() {
    return (
        <div className="min-h-screen bg-background">
            <FloatingNav />
            <PropertySectionTabs />

            {/* Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <Image
                    alt="The Earth Villa luxury property"
                    fill
                    className="object-cover scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5v9g9Px_urmsin8rYzU7FchvqEyYj_43TjweXm6gcC2mVXfYvyA7UYeR3Qm2CWRyiO7-eMCiVHIw9NAhyxT2J66pD_SoDEPbTl0qc9EbYUdQoGgx2K9RoqnFzylSuED7UIJ2OvlIlq3SpMTRVA6MnexX5XpETC-Ta4wiT08hDzX3YRXepEu-90Mx4SvwVJIm56DcrYtk7ocGMsLLFwVlWz0K4u6IbO8W4RVEoBDvBezye7i3ISA2VYYZ-6WWt6VlvF9jfEEUAVpmL"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
                <div className="relative max-w-7xl mx-auto px-8 md:px-12 w-full text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white leading-[1.1] mb-6">
                            The Earth Villa <span className="italic font-normal text-orange-300">Collection</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
                            A magnificent 4-bedroom villa where spacious living meets sophisticated design in Bangalore's prime location.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <div className="flex items-center text-white bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20">
                                <MapPin className="mr-2 h-5 w-5 text-orange-300" />
                                <span className="text-sm md:text-base font-medium">Whitefield, Bangalore</span>
                            </div>
                            <div className="flex items-center text-white bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20">
                                <Sparkles className="mr-2 h-5 w-5 text-orange-300" />
                                <span className="text-sm md:text-base font-medium">4 BHK • 5,500 sq.ft</span>
                            </div>
                            <div className="flex items-center text-white bg-orange-500/90 backdrop-blur-xl px-6 py-3 rounded-full border border-orange-400/50">
                                <span className="text-sm md:text-base font-bold">₹6.10 Crores</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-24 bg-white" id="features">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="bg-muted/50 rounded-[3.5rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center space-x-2 text-primary font-bold uppercase tracking-widest text-xs mb-6">
                                <span className="w-8 h-[1px] bg-primary"></span>
                                <span>Villa Excellence</span>
                            </div>
                            <h2 className="text-5xl font-display mb-8 leading-tight text-foreground">
                                Spacious Living <br /><span className="text-primary italic">Perfected.</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                                Spread across 5,500 sq.ft, The Earth Villa offers unparalleled space with advanced climate control, private gardens, and premium imported finishes throughout.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="flex flex-col">
                                    <span className="text-4xl font-display text-primary mb-1">5,500</span>
                                    <span className="text-sm font-bold uppercase text-muted-foreground">Sq.ft Area</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-display text-primary mb-1">4 BHK</span>
                                    <span className="text-sm font-bold uppercase text-muted-foreground">Luxury Layout</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-border relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full"></div>
                                <div className="relative z-10">
                                    <div className="flex justify-between items-center mb-8">
                                        <h3 className="text-2xl font-display font-bold">Villa Score</h3>
                                        <span className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold">OUTSTANDING</span>
                                    </div>
                                    <div className="space-y-8">
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-bold text-muted-foreground uppercase">Space & Layout</span>
                                                <span className="text-sm font-bold text-primary uppercase">99/100</span>
                                            </div>
                                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                                <div className="h-full bg-primary rounded-full" style={{ width: '99%' }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-bold text-muted-foreground uppercase">Privacy</span>
                                                <span className="text-sm font-bold text-primary uppercase">97/100</span>
                                            </div>
                                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                                <div className="h-full bg-orange-400 rounded-full" style={{ width: '97%' }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-bold text-muted-foreground uppercase">Luxury Features</span>
                                                <span className="text-sm font-bold text-primary uppercase">98/100</span>
                                            </div>
                                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                                <div className="h-full bg-orange-300 rounded-full" style={{ width: '98%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-10 text-xs text-muted-foreground leading-relaxed font-medium uppercase tracking-wider">
                                        Rated by Realtydoor Quality Standards, 2024.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview */}
            <section className="py-24 max-w-7xl mx-auto px-8" id="overview">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-5xl font-display mb-10 leading-tight">
                            Villa Living, <br /><span className="text-primary italic">Reimagined.</span>
                        </h2>
                        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                The Earth Villa combines traditional villa charm with modern technology. Featuring geothermal cooling, smart irrigation, and sustainable materials throughout.
                            </p>
                            <div className="p-8 bg-primary/10 border-l-[6px] border-primary rounded-r-[2rem]">
                                <div className="flex items-center mb-4">
                                    <Sparkles className="h-5 w-5 text-primary mr-3" />
                                    <span className="text-sm font-bold uppercase tracking-widest text-primary">Exclusive Features</span>
                                </div>
                                <p className="text-foreground italic font-medium leading-relaxed">
                                    Private swimming pool, landscaped gardens, home theater, wine cellar, and dedicated staff quarters. Geothermal cooling ensures year-round comfort.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-border hover:border-primary transition-colors">
                                <p className="text-5xl font-display text-primary mb-2">4</p>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Bedrooms</p>
                            </div>
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-border hover:border-primary transition-colors">
                                <p className="text-5xl font-display text-primary mb-2">Pool</p>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Private</p>
                            </div>
                        </div>
                        <div className="space-y-6 pt-12">
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-border hover:border-primary transition-colors">
                                <p className="text-5xl font-display text-primary mb-2">3</p>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Car Garage</p>
                            </div>
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-border hover:border-primary transition-colors">
                                <p className="text-5xl font-display text-primary mb-2">Garden</p>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Landscaped</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-24 bg-white" id="gallery">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <h2 className="text-4xl font-display mb-4">Luxury Spaces</h2>
                            <p className="text-muted-foreground text-lg">Experience villa living at its finest.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-[800px]">
                        <div className="md:col-span-7 rounded-[3rem] overflow-hidden group relative">
                            <Image
                                alt="Villa exterior"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5v9g9Px_urmsin8rYzU7FchvqEyYj_43TjweXm6gcC2mVXfYvyA7UYeR3Qm2CWRyiO7-eMCiVHIw9NAhyxT2J66pD_SoDEPbTl0qc9EbYUdQoGgx2K9RoqnFzylSuED7UIJ2OvlIlq3SpMTRVA6MnexX5XpETC-Ta4wiT08hDzX3YRXepEu-90Mx4SvwVJIm56DcrYtk7ocGMsLLFwVlWz0K4u6IbO8W4RVEoBDvBezye7i3ISA2VYYZ-6WWt6VlvF9jfEEUAVpmL"
                            />
                        </div>
                        <div className="md:col-span-5 grid grid-rows-2 gap-8">
                            <div className="rounded-[2.5rem] overflow-hidden group relative">
                                <Image
                                    alt="Living area"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX_n0fCfpfsGL9PQdyON7ye_FjzOBFrhzXZzktcqxutATvIKq7Bmn6Vu4zfRm190mWqF7jQ0Fun4fYsnkOB62h3DDLH3jEYEptz71rzGIDZeL1YL6N9h-3Ek5ZKG64BnAQIKTalE5eaWxmsQZHHvMogtrxG_WAO1RA5crPVrhGg398xDnz-4_fbkSM9IjYfQD4vGwuql6WFfMJMAnyl9dZJNydkbRUAVHii4I4f-aDiWCShbQ4QQ7IoWw2QM2WDAQk-k0v9-nYa8S5"
                                />
                            </div>
                            <div className="rounded-[2.5rem] overflow-hidden group relative">
                                <Image
                                    alt="Master bedroom"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbRWkFCrVAD92b0cu66nmeGGTLHWfT6nNDq17ZaP4DKyitR8wzyq7DBP4A7_8qAb4q-4FOITBoS1m3M_iUtqmSuTazVDq3srcDArexvREzWIenMYEh1JRa4EU0zRIIi6Ic0lBICv29ya8uJXepdi-osfSVbil1R3mVFPEdSeDKBHbzjHMVIh_07OcG0OS1t28f4FwSTKZx4G7Na499Yas0GY71SrPw1t9gpec7irwboD2arGHgvLBJ3lsAXd9Xa9N-4FGZXf7teuDk"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-32 bg-muted/50" id="pricing">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-display mb-6">Investment Details</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                            Exceptional value for a premium villa in Bangalore's most desirable neighborhood.
                        </p>
                    </div>
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-[3rem] overflow-hidden border-2 border-primary shadow-2xl p-10">
                            <div className="mb-4">
                                <span className="bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">Selling Fast</span>
                            </div>
                            <h3 className="text-3xl font-display font-bold mb-3">The Earth Villa</h3>
                            <p className="text-muted-foreground text-sm font-bold uppercase tracking-wider mb-8">
                                4 Bedrooms | 5,500 sq.ft | Geothermal Cooling
                            </p>
                            <div className="flex items-end justify-between mb-10 pb-10 border-b border-border">
                                <div>
                                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-1">Starting Price</p>
                                    <p className="text-5xl font-display font-bold text-primary">₹6.10 Cr</p>
                                </div>
                            </div>
                            <div className="space-y-4 mb-10">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Base Price</span>
                                    <span className="font-semibold">₹5.50 Cr</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Pool & Landscaping</span>
                                    <span className="font-semibold">₹35 L</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Premium Upgrades</span>
                                    <span className="font-semibold">₹25 L</span>
                                </div>
                            </div>
                            <Button className="w-full py-6 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg text-sm tracking-widest uppercase">
                                Schedule Private Tour
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Amenities */}
            <section className="py-32 bg-white" id="amenities">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid lg:grid-cols-3 gap-24">
                        <div className="lg:col-span-1">
                            <h2 className="text-5xl font-display mb-8 leading-[1.2]">
                                Premium <br /><span className="text-primary italic">Features</span>
                            </h2>
                            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                                Every detail crafted for luxury living and ultimate comfort.
                            </p>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-12">
                            <div className="space-y-5">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold font-display">Private Pool</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">Temperature-controlled infinity pool.</p>
                            </div>
                            <div className="space-y-5">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold font-display">Home Theater</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">Dolby Atmos sound system.</p>
                            </div>
                            <div className="space-y-5">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold font-display">Wine Cellar</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">Climate-controlled storage.</p>
                            </div>
                            <div className="space-y-5">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold font-display">Smart Home</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">Full automation system.</p>
                            </div>
                            <div className="space-y-5">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold font-display">Solar Power</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">Complete energy backup.</p>
                            </div>
                            <div className="space-y-5">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold font-display">Security</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">24/7 surveillance & guards.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-24 bg-muted/50">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="bg-gradient-to-br from-primary via-orange-600 to-orange-700 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-display mb-6">Experience Villa Living</h2>
                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                                Schedule a private tour of The Earth Villa and discover spacious luxury.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-base font-semibold">
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call Now
                                </Button>
                                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 px-8 py-6 text-base font-semibold">
                                    <Mail className="mr-2 h-5 w-5" />
                                    Email Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Home */}
            <div className="py-12 text-center">
                <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-semibold">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
