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

            {/* ═══════════════════════
                HERO — minimal, leads into video
            ═══════════════════════ */}
            <section className="pt-24 pb-0 px-6 md:px-12 bg-white" id="overview">
                <div className="max-w-5xl mx-auto text-center mb-10">
                    <div className="flex items-center justify-center gap-3 mb-5">
                        <MapPin className="h-4 w-4 text-[#FF5722]" />
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-black/40">Near Hoskote · Bengaluru</span>
                    </div>
                    <h1 className="font-display text-black leading-[0.95] mb-5" style={{ fontSize: 'clamp(3rem,8vw,6rem)' }}>
                        Neo Serene
                    </h1>
                    <p className="text-[#FF7043] font-display italic font-light mb-6" style={{ fontSize: 'clamp(1.4rem,3vw,2rem)' }}>
                        Hoskote&apos;s most tranquil plotted development
                    </p>

                    {/* Inline stat chips */}
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
                        {[
                            { v: '11 Acres', label: 'Total Land' },
                            { v: '154 Plots', label: 'Total Units' },
                            { v: '1200–1500 Sq.Ft.', label: 'Plot Sizes' },
                            { v: '20 min', label: 'To Airport' },
                        ].map(({ v, label }) => (
                            <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-black/[0.02]">
                                <span className="text-sm font-bold text-black">{v}</span>
                                <span className="text-xs text-black/35">{label}</span>
                            </div>
                        ))}
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF5722] text-white text-xs font-black uppercase tracking-widest">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />Ready for Registration
                        </span>
                    </div>
                </div>

                {/* ═══ VIDEO — main focal point ═══ */}
                <div className="max-w-5xl mx-auto">
                    <div
                        className="relative w-full rounded-3xl overflow-hidden border border-black/8 cursor-pointer group"
                        style={{ aspectRatio: '16/9', boxShadow: '0 32px 80px rgba(0,0,0,0.15)' }}
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
                                <img
                                    src="https://img.youtube.com/vi/DLnk_1_HuAc/maxresdefault.jpg"
                                    alt="Neo Serene Video Tour"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                                {/* Play button */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center border-2 border-white/70 bg-white/10 backdrop-blur-sm group-hover:bg-[#FF5722] group-hover:border-[#FF5722] transition-all duration-300"
                                        style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
                                        <PlayCircle className="h-10 w-10 md:h-12 md:w-12 text-white" />
                                    </div>
                                    <span className="text-white font-semibold text-sm uppercase tracking-widest">
                                        Watch Property Tour
                                    </span>
                                </div>
                                {/* Corner badge */}
                                <div className="absolute bottom-5 left-5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white border border-white/30 bg-black/30 backdrop-blur-sm">
                                    Neo Serene · Official Video
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* CTA row below video */}
                <div className="max-w-5xl mx-auto mt-8 flex flex-wrap items-center justify-center gap-4 pb-14">
                    <a href="tel:+919845012345">
                        <Button className="rounded-full px-9 py-5 font-semibold text-white"
                            style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)', boxShadow: '0 8px 30px rgba(255,87,34,0.35)' }}>
                            <Phone className="mr-2 h-4 w-4" />Call Now to Book
                        </Button>
                    </a>
                    <a href="https://realtydoor.com/wp-content/uploads/2025/09/Serene-Brochure_compressed.pdf"
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#FF5722]/30 text-[#FF5722] text-sm font-semibold hover:bg-[#FF5722]/6 transition-colors">
                        <FileText className="h-4 w-4" />Download Brochure
                    </a>
                </div>
            </section>

            {/* ═══════════════════════
                ABOUT — left image · right text
            ═══════════════════════ */}
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
                                    <div className="text-2xl font-light text-white">154</div>
                                    <div className="text-[9px] font-black uppercase tracking-widest text-white/60">Total Plots</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-light text-white">11</div>
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
                                    Neo Serene spans 11 acres with 154 meticulously planned plots ranging from 1,200 to 1,500 sq. ft.
                                    Wide 30 ft and 40 ft black-top roads weave through the community, ensuring excellent accessibility
                                    and a tranquil living experience.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 text-[#FF5722]">Plot Size Range</h4>
                                {[{ range: '1,200 sq. ft.', label: 'Starter', pct: 50 }, { range: '1,350 sq. ft.', label: 'Standard', pct: 75 }, { range: '1,500 sq. ft.', label: 'Premium Corner', pct: 100 }].map(item => (
                                    <div key={item.range} className="mb-4">
                                        <div className="flex justify-between text-xs mb-1.5">
                                            <span className="text-black font-medium">{item.range}</span>
                                            <span className="text-black/40">{item.label}</span>
                                        </div>
                                        <div className="h-1.5 rounded-full bg-black/8">
                                            <div className="h-full rounded-full bg-[#FF5722]" style={{ width: `${item.pct}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="rounded-2xl p-6 border border-[#FF5722]/15 bg-[#FF5722]/[0.04]">
                                <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 text-[#FF5722]">Layout Highlights</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {([
                                        { Icon: LayoutGrid, l: '154 Plots' }, { Icon: Route, l: '30 & 40 Ft Roads' },
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
                            <div className="rounded-3xl overflow-hidden border border-black/8"
                                style={{ height: 560, boxShadow: '0 16px 50px rgba(0,0,0,0.08)' }}>
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

            {/* ═══════════════════════
                CTA
            ═══════════════════════ */}
            <section className="py-24 px-6 bg-white border-t border-black/6">
                <div className="max-w-3xl mx-auto text-center border border-[#FF5722]/15 rounded-3xl py-20 px-8 relative overflow-hidden"
                    style={{ boxShadow: '0 8px 60px rgba(255,87,34,0.08)' }}>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-96 h-96 rounded-full opacity-[0.07]"
                            style={{ background: 'radial-gradient(circle,#FF5722 0%,transparent 70%)' }} />
                    </div>
                    <div className="relative">
                        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] mb-8 border border-[#FF5722]/35 bg-[#FF5722]/8 text-[#FF5722]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-pulse" />Limited Plots Available
                        </div>
                        <h2 className="font-display text-black mb-2" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', lineHeight: 1 }}>Secure Your Plot</h2>
                        <h2 className="font-display text-[#FF7043] italic font-light mb-8" style={{ fontSize: 'clamp(2.5rem,6vw,4.5rem)', lineHeight: 1.1 }}>in Neo Serene</h2>
                        <p className="text-black/40 font-light mb-10 max-w-md mx-auto">Fully developed. Clear title. Ready for immediate registration.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:+919845012345">
                                <Button className="rounded-full px-10 py-6 text-base font-semibold text-white w-full sm:w-auto"
                                    style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)', boxShadow: '0 8px 30px rgba(255,87,34,0.4)' }}>
                                    <Phone className="mr-2 h-5 w-5" />Call Now
                                </Button>
                            </a>
                            <a href="https://wa.me/919845012345" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="rounded-full px-10 py-6 text-base font-semibold border-[#FF5722]/35 text-[#FF5722] hover:bg-[#FF5722]/8 w-full sm:w-auto">
                                    WhatsApp Us
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-8 text-center bg-white border-t border-black/8">
                <Link href="/properties" className="inline-flex items-center font-semibold text-[#FF5722] hover:text-[#E64A19] transition-colors text-sm">
                    <ArrowLeft className="mr-2 h-4 w-4" />Back to All Plots
                </Link>
            </div>
        </div>
    );
}
