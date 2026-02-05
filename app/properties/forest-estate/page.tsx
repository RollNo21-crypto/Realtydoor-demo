'use client';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FloatingNav } from '@/components/floating-nav';
import { PropertySectionTabs } from '@/components/property-section-tabs';
import { MapPin, Sparkles, Phone, Mail, ArrowLeft, Crown } from 'lucide-react';

export default function ForestEstatePage() {
    return (
        <div className="min-h-screen bg-background">
            <FloatingNav />
            <PropertySectionTabs />

            {/* Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <Image
                    alt="Forest Estate ultra-luxury property"
                    fill
                    className="object-cover scale-105"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhyOyrwCFxk1zDnWOeClC2Dz-A9PvXp3GVR6wuLutmathqpncbKKstwcghFwD1_OdHq0Clf6pgt748hoV2FlQDE94g_TVH54Lbb0b1QwHDtD1H9655hjnuOVvv5EkivjSZ33qdzp7K8WV_LbhaT_WJcjxpduTLy154pK8ARXUQkC7kfSVPIHQPgi67AsPPb2IKJMzpy9JxWX2-w-ApGUdvvdLk5T-SYv9PMiw2yvlktCB-Q5znNIoT02BTRSpCN32SYoJD6WNbN28X"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
                <div className="relative max-w-7xl mx-auto px-8 md:px-12 w-full text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white leading-[1.1] mb-6">
                            Forest Estate <span className="italic font-normal text-orange-300">Masterpiece</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
                            The pinnacle of luxury living. A sprawling 5-bedroom estate with full solar array, private amenities, and unmatched sophistication across 7,800 sq.ft.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <div className="flex items-center text-white bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20">
                                <MapPin className="mr-2 h-5 w-5 text-orange-300" />
                                <span className="text-sm md:text-base font-medium">Koramangala, Bangalore</span>
                            </div>
                            <div className="flex items-center text-white bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20">
                                <Crown className="mr-2 h-5 w-5 text-orange-300" />
                                <span className="text-sm md:text-base font-medium">5 BHK • 7,800 sq.ft</span>
                            </div>
                            <div className="flex items-center text-white bg-orange-500/90 backdrop-blur-xl px-6 py-3 rounded-full border border-orange-400/50">
                                <span className="text-sm md:text-base font-bold">₹8.45 Crores</span>
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
                                <span>Estate Magnificence</span>
                            </div>
                            <h2 className="text-5xl font-display mb-8 leading-tight text-foreground">
                                Ultra-Luxury <br /><span className="text-primary italic">Defined.</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                                Forest Estate represents the absolute pinnacle of residential luxury. With 7,800 sq.ft of meticulously designed space, full solar array, and bespoke finishes throughout.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="flex flex-col">
                                    <span className="text-4xl font-display text-primary mb-1">7,800</span>
                                    <span className="text-sm font-bold uppercase text-muted-foreground">Sq.ft Estate</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-4xl font-display text-primary mb-1">5 BHK</span>
                                    <span className="text-sm font-bold uppercase text-muted-foreground">Grand Layout</span>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl border border-border relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full"></div>
                                <div className="relative z-10">
                                    <div className="flex justify-between items-center mb-8">
                                        <h3 className="text-2xl font-display font-bold">Estate Score</h3>
                                        <span className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold">LEGENDARY</span>
                                    </div>
                                    <div className="space-y-8">
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-bold text-muted-foreground uppercase">Exclusivity</span>
                                                <span className="text-sm font-bold text-primary uppercase">100/100</span>
                                            </div>
                                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                                <div className="h-full bg-primary rounded-full" style={{ width: '100%' }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-bold text-muted-foreground uppercase">Luxury Features</span>
                                                <span className="text-sm font-bold text-primary uppercase">99/100</span>
                                            </div>
                                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                                <div className="h-full bg-orange-400 rounded-full" style={{ width: '99%' }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-sm font-bold text-muted-foreground uppercase">Investment Value</span>
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
                            Estate Living, <br /><span className="text-primary italic">Unmatched.</span>
                        </h2>
                        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Forest Estate is a rare masterpiece combining architectural brilliance with sustainable luxury. Full solar array ensures energy independence while maintaining the highest standards of comfort.
                            </p>
                            <div className="p-8 bg-primary/10 border-l-[6px] border-primary rounded-r-[2rem]">
                                <div className="flex items-center mb-4">
                                    <Sparkles className="h-5 w-5 text-primary mr-3" />
                                    <span className="text-sm font-bold uppercase tracking-widest text-primary">Signature Features</span>
                                </div>
                                <p className="text-foreground italic font-medium leading-relaxed">
                                    Private elevator, rooftop terrace with jacuzzi, professional chef's kitchen, library, gym, sauna, and 4-car garage. Full solar array with battery backup ensures complete energy autonomy.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-border hover:border-primary transition-colors">
                                <p className="text-5xl font-display text-primary mb-2">5</p>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Bedrooms</p>
                            </div>
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-border hover:border-primary transition-colors">
                                <p className="text-5xl font-display text-primary mb-2">Solar</p>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Full Array</p>
                            </div>
                        </div>
                        <div className="space-y-6 pt-12">
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-border hover:border-primary transition-colors">
                                <p className="text-5xl font-display text-primary mb-2">4</p>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Car Garage</p>
                            </div>
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-border hover:border-primary transition-colors">
                                <p className="text-5xl font-display text-primary mb-2">Lift</p>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Private</p>
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
                            <h2 className="text-4xl font-display mb-4">Architectural Excellence</h2>
                            <p className="text-muted-foreground text-lg">Where art meets luxury living.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-[800px]">
                        <div className="md:col-span-7 rounded-[3rem] overflow-hidden group relative">
                            <Image
                                alt="Estate exterior"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhyOyrwCFxk1zDnWOeClC2Dz-A9PvXp3GVR6wuLutmathqpncbKKstwcghFwD1_OdHq0Clf6pgt748hoV2FlQDE94g_TVH54Lbb0b1QwHDtD1H9655hjnuOVvv5EkivjSZ33qdzp7K8WV_LbhaT_WJcjxpduTLy154pK8ARXUQkC7kfSVPIHQPgi67AsPPb2IKJMzpy9JxWX2-w-ApGUdvvdLk5T-SYv9PMiw2yvlktCB-Q5znNIoT02BTRSpCN32SYoJD6WNbN28X"
                            />
                        </div>
                        <div className="md:col-span-5 grid grid-rows-2 gap-8">
                            <div className="rounded-[2.5rem] overflow-hidden group relative">
                                <Image
                                    alt="Grand living room"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX_n0fCfpfsGL9PQdyON7ye_FjzOBFrhzXZzktcqxutATvIKq7Bmn6Vu4zfRm190mWqF7jQ0Fun4fYsnkOB62h3DDLH3jEYEptz71rzGIDZeL1YL6N9h-3Ek5ZKG64BnAQIKTalE5eaWxmsQZHHvMogtrxG_WAO1RA5crPVrhGg398xDnz-4_fbkSM9IjYfQD4vGwuql6WFfMJMAnyl9dZJNydkbRUAVHii4I4f-aDiWCShbQ4QQ7IoWw2QM2WDAQk-k0v9-nYa8S5"
                                />
                            </div>
                            <div className="rounded-[2.5rem] overflow-hidden group relative">
                                <Image
                                    alt="Luxury bedroom"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDcv5gdk-7IMm12LIpTeaBaw9Cm6qe9nzkD8bo7bo6jYbXuVi-XnoXZoGanp795biuA9HLGEZDgVwfWPRSbO5rWyvcM8XmuKTv6agyvDmKUUBJUoPseSO78Mae-tlvBQZ5vt7TIYdv8doT3ofW6sBcn2yS62Qw1qAwn1Ans9Q1lFox86eXE_eBUCbv7yiwajYLtudxnipOUNyVrp3h05ug6-wacY8YXsOflsCa4HYfnwZJ4-5zyC9NZCuLlsWaYPof5fLKJWTeANri"
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
                            An exceptional investment opportunity in Bangalore's most prestigious address.
                        </p>
                    </div>
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-[3rem] overflow-hidden border-2 border-primary shadow-2xl p-10">
                            <div className="mb-4">
                                <span className="bg-primary/50 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">Only 1 Left</span>
                            </div>
                            <h3 className="text-3xl font-display font-bold mb-3">Forest Estate</h3>
                            <p className="text-muted-foreground text-sm font-bold uppercase tracking-wider mb-8">
                                5 Bedrooms | 7,800 sq.ft | Full Solar Array
                            </p>
                            <div className="flex items-end justify-between mb-10 pb-10 border-b border-border">
                                <div>
                                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-1">Starting Price</p>
                                    <p className="text-5xl font-display font-bold text-primary">₹8.45 Cr</p>
                                </div>
                            </div>
                            <div className="space-y-4 mb-10">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Base Price</span>
                                    <span className="font-semibold">₹7.50 Cr</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Solar Array & Battery</span>
                                    <span className="font-semibold">₹45 L</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Premium Upgrades</span>
                                    <span className="font-semibold">₹50 L</span>
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
                                Exclusive <br /><span className="text-primary italic">Amenities</span>
                            </h2>
                            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                                Unparalleled luxury with every conceivable amenity for the discerning homeowner.
                            </p>
                        </div>
                        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-12">
                            <div className="space-y-5">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <Crown className="h-6 w-6 text-primary" />
                                </div>
                                <h4 className="text-xl font-bold font-display">Private Elevator</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">Exclusive access to all floors.</p>
                            </div>
                            <div className="space-y-5">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold font-display">Rooftop Terrace</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">With jacuzzi and city views.</p>
                            </div>
                            <div className="space-y-5">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold font-display">Library</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">Private reading room.</p>
                            </div>
                            <div className="space-y-5">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold font-display">Private Gym</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">Professional equipment.</p>
                            </div>
                            <div className="space-y-5">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold font-display">Sauna & Steam</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">Personal wellness suite.</p>
                            </div>
                            <div className="space-y-5">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold font-display">Chef's Kitchen</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">Professional-grade appliances.</p>
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
                            <h2 className="text-4xl md:text-5xl font-display mb-6">Own the Extraordinary</h2>
                            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                                Schedule a private tour of Forest Estate and experience ultra-luxury living.
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
