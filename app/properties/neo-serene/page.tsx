'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FloatingNav } from '@/components/floating-nav';
import { PropertySectionTabs } from '@/components/property-section-tabs';
import { Button } from '@/components/ui/button';
import {
    MapPin, Phone, CheckCircle2, ArrowLeft, Home, Shield, Trees,
    Plane, Building2, Route, Hospital, GraduationCap, ShoppingBag,
    LayoutGrid, Leaf, Landmark, Droplets, Lock, Star, FileText,
    PlayCircle,
} from 'lucide-react';
import { StatsTickerBanner } from '@/components/stats-ticker-banner';
import { PropertyCTA } from '@/components/property-cta';
import { BannerPlaceholder } from '@/components/promo-banner';

const heroImage = 'https://realtydoor.com/wp-content/uploads/2025/09/banner-1-1-scaled.png';
const secondImage = 'https://realtydoor.com/wp-content/uploads/2025/09/banner-1-2-scaled.png';
const masterPlanImage = 'https://realtydoor.com/wp-content/uploads/2025/09/Untitled-design-71.png';

const infraFeatures = ['Black Top Roads (30 Ft & 40 Ft)', 'Underground Drainage with STP', '24/7 Water Supply', 'Overhead Water Tank', 'Underground Electrification', 'Compound Wall'];
const securityFeatures = ['Entrance Gate', '24/7 Security', 'CCTV Surveillance'];
const leisureFeatures = ['Club House', 'Jogging Track & Footpaths', "Children's Play Area", 'Yoga and Meditation Area', 'Park with Landscape Garden', 'Avenue Plantation'];

export default function NeoSerenePage() {
    const [videoStarted, setVideoStarted] = useState(false);
    const [openAmenity, setOpenAmenity] = useState<string | null>('infra');

    const amenityGroups = [
        { key: 'infra', Icon: Home, label: 'Infrastructure', items: infraFeatures },
        { key: 'security', Icon: Shield, label: 'Security', items: securityFeatures },
        { key: 'leisure', Icon: Trees, label: 'Leisure', items: leisureFeatures },
    ];

    return (
        <div className="min-h-screen bg-white">
            <FloatingNav />
            <PropertySectionTabs />

            {/* ══════════════════════════════════════════════════
                HERO — Custom Premium Bento Layout
            ══════════════════════════════════════════════════ */}
            <section className="relative pt-32 pb-16 px-4 md:px-8 overflow-hidden" id="overview">
                {/* Full-width background image with deep glass overlay */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <Image src={heroImage} alt="Neo Serene Background" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4">

                    {/* Main Title Box (Left, spans 7 cols) */}
                    <div className="lg:col-span-7 bg-white rounded-[2rem] p-8 md:p-14 flex flex-col justify-center border border-black/5 shadow-sm relative overflow-hidden group min-h-[500px]">
                        {/* subtle decorative blur */}
                        <div className="absolute top-0 right-0 -mt-32 -mr-32 w-96 h-96 bg-[#FF5722]/10 rounded-full blur-3xl group-hover:bg-[#FF5722]/20 transition-colors duration-1000" />

                        <div className="flex flex-wrap items-center gap-3 mb-8 relative z-10">
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-black/[0.03] border border-black/[0.05] text-black/60">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-pulse" />
                                Ready for Registration
                            </span>
                            <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-black/40 bg-black/[0.03] border border-black/[0.05] px-4 py-1.5 rounded-full">
                                <MapPin className="h-3 w-3 text-[#FF5722]" /> Hoskote · Bengaluru
                            </div>
                        </div>

                        <h1 className="font-display text-black leading-[0.95] mb-6 relative z-10" style={{ fontSize: 'clamp(3.5rem,7vw,6.5rem)' }}>
                            Neo Serene
                        </h1>
                        <p className="text-xl md:text-2xl text-black/50 font-light mb-12 leading-relaxed max-w-lg relative z-10">
                            Hoskote&apos;s most tranquil development, offering a <span className="text-[#FF5722] font-normal italic">pure escape</span> from the city while keeping you perfectly connected.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 relative z-10 mt-auto">
                            <a href="tel:+919845012345" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto rounded-full px-8 py-6 font-semibold shadow-xl shadow-[#FF5722]/20 hover:shadow-[#FF5722]/40 transition-all text-white text-base"
                                    style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>
                                    <Phone className="mr-2 h-5 w-5" />Book a Site Visit
                                </Button>
                            </a>
                            <a href="https://realtydoor.com/wp-content/uploads/2025/09/Serene-Brochure_compressed.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full sm:w-auto rounded-full px-8 py-6 font-semibold border-black/10 hover:bg-black/5 text-black text-base">
                                    <FileText className="mr-2 h-5 w-5 opacity-50" />Download Brochure
                                </Button>
                            </a>
                        </div>
                    </div>

                    {/* Right Side (Spans 5 cols) - Vertical Stack of Box 1 (Video) and Box 2 (Stats grid) */}
                    <div className="lg:col-span-5 flex flex-col gap-4">

                        {/* Video Box */}
                        <div
                            className="bg-black rounded-[2rem] overflow-hidden relative cursor-pointer group flex-1 min-h-[300px] lg:min-h-[340px] shadow-sm border border-black/5"
                            onClick={() => setVideoStarted(true)}
                        >
                            {videoStarted ? (
                                <iframe
                                    src="https://www.youtube.com/embed/DLnk_1_HuAc?autoplay=1&rel=0"
                                    title="Neo Serene Video Tour"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                />
                            ) : (
                                <>
                                    <Image src="https://img.youtube.com/vi/DLnk_1_HuAc/maxresdefault.jpg" alt="Video Placeholder" fill className="object-cover opacity-60 group-hover:opacity-75 transition-all duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center transform group-hover:scale-110 group-hover:bg-[#FF5722] transition-all duration-400 border border-white/30 shadow-2xl">
                                            <PlayCircle className="h-8 w-8 ml-1" />
                                        </div>
                                    </div>

                                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                                        <span className="text-sm font-semibold tracking-wide">Cinematic Tour</span>
                                        <span className="text-[10px] font-black uppercase tracking-widest bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20">1:24</span>
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Stats Bento */}
                        <div className="grid grid-cols-2 gap-4 h-auto lg:h-[144px]">
                            <div className="bg-[#1A2744] text-white rounded-[2rem] p-6 lg:p-8 flex flex-col justify-center relative overflow-hidden group shadow-sm">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-white/10 transition-colors" />
                                <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[#FF5722] to-[#E64A19] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                                <span className="text-4xl lg:text-5xl font-light mb-1 relative z-10">10<span className="text-[#FF5722]">.0</span></span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/50 relative z-10">Acres of Land</span>
                            </div>
                            <div className="bg-white border border-black/5 shadow-sm rounded-[2rem] p-6 lg:p-8 flex flex-col justify-center relative overflow-hidden group">
                                <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-black/20 to-black/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                                <span className="text-4xl lg:text-5xl font-light mb-1 text-black relative z-10">172</span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-black/40 relative z-10">Exclusive Plots</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Stats Ticker */}
            <StatsTickerBanner />

            {/* ABOUT */}
            <section className="py-20 px-6 md:px-12 bg-white border-t border-black/6" id="features">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                        <Image src={heroImage} alt="Neo Serene" fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        {/* Floating stat */}
                        <div className="absolute bottom-5 left-5 right-5 rounded-2xl p-5"
                            style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)', boxShadow: '0 8px 24px rgba(255,87,34,0.5)' }}>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div>
                                    <div className="text-2xl font-light text-white">172</div>
                                    <div className="text-[9px] font-black uppercase tracking-widest text-white/60">Total Plots</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-light text-white">10</div>
                                    <div className="text-[9px] font-black uppercase tracking-widest text-white/60">Acres</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-5 text-[#FF5722]">
                            <span className="w-8 h-px bg-[#FF5722]" />About the Project
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl text-black leading-tight mb-6">
                            Tranquil Living,<br />
                            <span className="italic font-light text-[#FF7043]">Bright Future</span>
                        </h2>
                        <p className="text-black/55 font-light leading-relaxed mb-6">
                            Serene is designed to deliver on all of the important bits — convenience, comfort, space, and wellbeing.
                            It promises an effortlessly connected lifestyle through the wealth of amenities and established infrastructure.
                        </p>
                        <p className="text-black/40 font-light leading-relaxed text-sm mb-8">
                            Fully developed plots, ready for registration. Come capitalize on Hoskote&apos;s immense potential and secure
                            a stake in its bright future.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['Affordable Luxury', 'Clear Title', 'Tranquil Living', 'Practical Layout', 'Strategic Location', 'Fully Developed'].map(f => (
                                <span key={f} className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[#FF5722]/25 text-[#FF5722] bg-[#FF5722]/[0.06]">{f}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════
                MASTER PLAN — left tall image · right sticky info
            ═══════════════════════ */}
            <section className="py-20 px-6 md:px-12 bg-white border-t border-black/6" id="gallery">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FF5722] mb-3">
                            <span className="w-8 h-px bg-[#FF5722]" />Site Layout
                        </span>
                        <h2 className="font-display text-5xl text-black">Master <span className="italic font-light text-[#FF7043]">Plan</span></h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10 items-start">
                        {/* LEFT — tall plan image */}
                        <div className="w-full lg:w-[55%]">
                            <div className="relative w-full min-h-[700px] lg:min-h-[950px] rounded-3xl overflow-hidden border border-black/8 bg-white">
                                <Image src={masterPlanImage} alt="Master Plan" fill className="object-contain object-top" />
                                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-widest text-white"
                                    style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>Master Plan</div>
                            </div>
                        </div>

                        {/* RIGHT — sticky info */}
                        <div className="w-full lg:w-[45%] lg:sticky lg:top-28 space-y-6">
                            <div>
                                <h3 className="font-display text-3xl text-black mb-3">Thoughtfully Planned</h3>
                                <p className="text-black/55 font-light leading-relaxed text-sm">
                                    Neo Serene spans 10 acres with 172 meticulously planned plots ranging from 1,200 to 2,400 sq. ft.
                                    Wide 30 ft and 40 ft black-top roads weave through the community, ensuring excellent accessibility
                                    and a tranquil living experience.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 text-[#FF5722]">Pricing & Dimensions</h4>
                                {[
                                    { range: '1,200 sq. ft.', price: '₹54,00,000', label: '@ ₹4,500/sq.ft' },
                                    { range: '1,500 sq. ft.', price: '₹67,50,000', label: '@ ₹4,500/sq.ft' },
                                    { range: '2,400 sq. ft.', price: '₹1,08,00,000', label: '@ ₹4,500/sq.ft' }
                                ].map(item => (
                                    <div key={item.range} className="mb-4">
                                        <div className="flex justify-between text-xs mb-1.5 border-b border-black/6 pb-2">
                                            <span className="text-black font-medium">{item.range} <span className="text-black/40 ml-1">{item.label}</span></span>
                                            <span className="text-[#FF5722] font-bold">{item.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="rounded-2xl p-6 border border-[#FF5722]/15 bg-[#FF5722]/[0.04]">
                                <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 text-[#FF5722]">Layout Highlights</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {([
                                        { Icon: LayoutGrid, l: '172 Plots' }, { Icon: Route, l: '30 & 40 Ft Roads' },
                                        { Icon: Leaf, l: 'Green Zones' }, { Icon: Landmark, l: 'Clubhouse' },
                                        { Icon: Droplets, l: 'Underground Drainage' }, { Icon: Lock, l: 'Compound Wall' },
                                    ] as { Icon: React.ElementType; l: string }[]).map(({ Icon, l }) => (
                                        <div key={l} className="flex items-center gap-2 text-black/65">
                                            <Icon className="h-4 w-4 text-[#FF5722] flex-shrink-0" />
                                            <span className="text-sm">{l}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <a href="https://realtydoor.com/wp-content/uploads/2025/09/Serene-Brochure_compressed.pdf"
                                target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-[#FF5722]/25 bg-[#FF5722]/[0.04] hover:bg-[#FF5722]/10 transition-colors w-full">
                                <FileText className="h-5 w-5 text-[#FF5722] flex-shrink-0" />
                                <div>
                                    <div className="text-black text-sm font-semibold">Download Brochure</div>
                                    <div className="text-black/40 text-xs">Neo Serene — Full PDF</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════
                AMENITIES — accordion + side image
            ═══════════════════════ */}
            <section className="py-20 px-6 md:px-12 bg-white border-t border-black/6" id="amenities">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-5 text-[#FF5722]">
                            <span className="w-8 h-px bg-[#FF5722]" />Facilities & Amenities
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl text-black mb-10">
                            Everything <span className="italic font-light text-[#FF7043]">Included</span>
                        </h2>
                        <div className="space-y-3">
                            {amenityGroups.map(({ key, Icon, label, items }) => (
                                <div key={key} className="rounded-2xl border overflow-hidden transition-all"
                                    style={{ borderColor: openAmenity === key ? 'rgba(255,87,34,0.35)' : 'rgba(0,0,0,0.08)' }}>
                                    <button className="w-full flex items-center justify-between p-5 text-left transition-colors"
                                        style={{ background: openAmenity === key ? 'rgba(255,87,34,0.06)' : 'rgba(0,0,0,0.01)' }}
                                        onClick={() => setOpenAmenity(openAmenity === key ? null : key)}>
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                                                style={{ background: openAmenity === key ? 'linear-gradient(135deg,#FF5722,#E64A19)' : 'rgba(0,0,0,0.05)' }}>
                                                <Icon className={`h-4 w-4 ${openAmenity === key ? 'text-white' : 'text-black/40'}`} />
                                            </div>
                                            <span className={`font-semibold text-sm ${openAmenity === key ? 'text-black' : 'text-black/50'}`}>{label}</span>
                                        </div>
                                        <span className={`text-sm font-black ${openAmenity === key ? 'text-[#FF5722]' : 'text-black/20'}`}>{openAmenity === key ? '–' : '+'}</span>
                                    </button>
                                    {openAmenity === key && (
                                        <div className="px-5 pb-5 pt-1">
                                            <ul className="space-y-3">
                                                {items.map(f => (
                                                    <li key={f} className="flex items-start gap-3 text-black/55">
                                                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#FF5722]" />
                                                        <span className="text-sm">{f}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4 mt-0 md:mt-20">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                            <Image src={secondImage} alt="Neo Serene View" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <div className="text-white font-display text-xl">Thoughtfully Designed</div>
                                <div className="text-white/65 text-xs mt-0.5">11 acres · 154 plots · Ready for registration</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {[{ Icon: Star, label: 'Clear Title' }, { Icon: Leaf, label: 'Green Zones' }, { Icon: Lock, label: 'Gated' }].map(({ Icon, label }) => (
                                <div key={label} className="rounded-2xl p-4 flex flex-col items-center gap-2 border border-black/8 bg-black/[0.02] text-center">
                                    <Icon className="h-5 w-5 text-[#FF5722]" />
                                    <span className="text-xs text-black/50 font-medium">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════
                LOCATION — LEFT map (tall/vertical) · RIGHT proximity list
            ═══════════════════════ */}
            <section className="py-20 px-6 md:px-12 bg-white border-t border-black/6" id="location">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12">
                        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FF5722] mb-3">
                            <span className="w-8 h-px bg-[#FF5722]" />Connectivity
                        </span>
                        <h2 className="font-display text-5xl text-black">Perfectly <span className="italic font-light text-[#FF7043]">Located</span></h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* LEFT — tall vertical map */}
                        <div className="w-full lg:w-[55%]">
                            <a href="https://maps.app.goo.gl/W5Z7hvbVQnpmMjeC9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF5722]/10 text-[#FF5722] font-bold hover:bg-[#FF5722]/20 transition-colors mb-6 border border-[#FF5722]/25">
                                <Route className="h-4 w-4" /> Open in Google Maps
                            </a>
                            <div className="rounded-3xl overflow-hidden border border-black/8"
                                style={{ height: 490, boxShadow: '0 16px 50px rgba(0,0,0,0.08)' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.662906338247!2d77.83560417484411!3d13.120528587208671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17336f43a7ed%3A0x21783a63d1cc78ac!2sNeo%20Serene!5e0!3m2!1sen!2sin!4v1772035760946!5m2!1sen!2sin"
                                    width="100%" height="100%" style={{ border: 0 }}
                                    allowFullScreen loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Neo Serene Map"
                                />
                            </div>
                        </div>

                        {/* RIGHT — full proximity list */}
                        <div className="w-full lg:w-[45%] lg:sticky lg:top-28">
                            <div className="rounded-3xl border border-black/8 overflow-hidden divide-y divide-black/6">
                                <div className="px-6 py-5 bg-[#FF5722]/[0.04]">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-[#FF5722]" />
                                        <span className="text-xs font-black uppercase tracking-widest text-black/50">Near Hoskote, Bengaluru</span>
                                    </div>
                                </div>
                                {([
                                    { Icon: Plane, label: 'International Airport', time: '20 mins' },
                                    { Icon: Building2, label: 'Bangalore City Centre', time: '35 mins' },
                                    { Icon: Route, label: 'NH-75 (Old Madras Road)', time: '5 mins' },
                                    { Icon: Hospital, label: 'Nearest Hospital', time: '10 mins' },
                                    { Icon: GraduationCap, label: 'Schools & Colleges', time: '10 mins' },
                                    { Icon: ShoppingBag, label: 'Shopping & Markets', time: '5 mins' },
                                ] as { Icon: React.ElementType; label: string; time: string }[]).map(({ Icon, label, time }) => (
                                    <div key={label} className="flex items-center justify-between px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-xl bg-[#FF5722]/8 flex items-center justify-center flex-shrink-0">
                                                <Icon className="h-3.5 w-3.5 text-[#FF5722]" />
                                            </div>
                                            <span className="text-black/60 text-sm">{label}</span>
                                        </div>
                                        <span className="text-sm font-bold text-[#FF5722] flex-shrink-0 ml-4">{time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* CTA */}
            {/* Promo Banner */}
            <div className="py-8 bg-background">
                <BannerPlaceholder
                    tag="Strategic Investment"
                    headline="Secure Your Financial Future"
                    subtext="Discover high-growth corridor investments handpicked by our expert analysts to maximize your returns."
                    ctaLabel="Speak to an Analyst"
                    ctaHref="/contact"
                    theme="dark"
                />
            </div>

            <PropertyCTA propertyName="Neo Serene" image={heroImage} variant="overlay" brochureUrl="https://realtydoor.com/wp-content/uploads/2025/09/Serene-Brochure_compressed.pdf" />

            <div className="py-8 text-center bg-white border-t border-black/8">
                <Link href="/properties" className="inline-flex items-center font-semibold text-[#FF5722] hover:text-[#E64A19] transition-colors text-sm">
                    <ArrowLeft className="mr-2 h-4 w-4" />Back to All Plots
                </Link>
            </div>
        </div>
    );
}
