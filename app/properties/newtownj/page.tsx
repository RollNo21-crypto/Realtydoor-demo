'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FloatingNav } from '@/components/floating-nav';
import { PropertySectionTabs } from '@/components/property-section-tabs';
import { Button } from '@/components/ui/button';
import {
    MapPin, Phone, CheckCircle2, ArrowLeft, FileText,
    Plane, Building2, Route, Hospital, GraduationCap, ShoppingBag,
    Trees, ShieldCheck, PlayCircle, Landmark, Waves,
    Clapperboard, Baby, Dumbbell, Car,
} from 'lucide-react';

const img1 = 'https://realtydoor.com/wp-content/uploads/2024/05/j-town-1.webp';
const img2 = 'https://realtydoor.com/wp-content/uploads/2024/05/j-town-2.webp';
const img3 = 'https://realtydoor.com/wp-content/uploads/2024/05/j-town-3.webp';
const masterPlanImage = 'https://realtydoor.com/wp-content/uploads/2024/05/master-plan.jpg';
const brochureUrl = 'https://realtydoor.com/wp-content/uploads/2024/05/newtownJ_brochure-1.pdf';
const VIDEO_ID = '_T1dY6liEcw';

const amenities = [
    { Icon: Landmark, label: 'Clubhouse Extravaganza' },
    { Icon: Clapperboard, label: '3-Star Theater' },
    { Icon: Waves, label: 'Twin Lakes' },
    { Icon: Trees, label: 'Landscaped Parks' },
    { Icon: Baby, label: "Children's Play Area" },
    { Icon: Dumbbell, label: 'Jogging Track' },
    { Icon: ShieldCheck, label: '24×7 CCTV Security' },
    { Icon: Car, label: 'Entrance Gate' },
    { Icon: GraduationCap, label: 'Senior Citizen Club' },
];

const infraItems = ['Clubhouse Extravaganza', 'Cinematic Brilliance', 'Parks with Purpose', "Children's Play Area", 'Entrance Gate', 'CCTV Surveillance', '24×7 Security', 'Jogging Track', 'Clubhouse for Senior Citizen', '3-Star Theater'];
const securityItems = ['Round the Clock Security', 'Compound Wall'];
const leisureItems = ['Parks with Landscaped Gardens', "Children's Playground", 'Jogging Tracks and Footpaths', 'Avenue Plantation'];
const features = ['Affordable Luxury', 'Clear Title', 'Tranquil Living', 'Practical Layout', 'Strategic Location', 'Fully Developed Infrastructure', 'Serene Living', 'Superb Connectivity', 'Best Investment Opportunity'];

export default function NewtownJPage() {
    const [videoStarted, setVideoStarted] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            <FloatingNav />
            <PropertySectionTabs />

            {/* ═══════════════════════════════════════════════════════════
                HERO — panoramic image + elevated floating card
            ═══════════════════════════════════════════════════════════ */}
            <section id="overview" className="bg-white">
                {/* ── Panoramic cinematic image ── */}
                <div className="relative w-full overflow-hidden" style={{ height: '65vh', minHeight: 360, maxHeight: 700 }}>
                    <Image src={img1} alt="NewtownJ Panorama" fill className="object-cover" priority />
                    {/* Gradient: lighter at top (for nav), heavier at bottom (for card bleed) */}
                    <div className="absolute inset-0"
                        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0) 40%, rgba(255,255,255,0.12) 80%, rgba(255,255,255,0.55) 100%)' }} />

                    {/* Top badges */}
                    <div className="absolute top-8 left-6 right-6 pt-14 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/65 backdrop-blur-sm bg-black/15 px-4 py-2 rounded-full border border-white/15">
                            <MapPin className="h-3 w-3 text-[#FF7043]" />
                            <span>Punganur · Andhra Pradesh</span>
                        </div>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest bg-[#FF5722] text-white shadow-lg">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            PKM-UDA Approved
                        </span>
                    </div>

                    {/* Two small secondary images pinned bottom-right — peeking behind the card */}
                    <div className="hidden lg:flex absolute bottom-0 right-6 gap-2 items-end pb-4 z-10">
                        <div className="relative w-28 h-20 rounded-t-2xl overflow-hidden border-2 border-white/40 shadow-lg">
                            <Image src={img2} alt="View 2" fill className="object-cover" />
                        </div>
                        <div className="relative w-28 h-28 rounded-t-2xl overflow-hidden border-2 border-white/40 shadow-lg">
                            <Image src={img3} alt="View 3" fill className="object-cover" />
                        </div>
                    </div>
                </div>

                {/* ── Elevated floating card ── */}
                <div className="relative z-20 mx-4 md:mx-8 lg:mx-14 -mt-16 bg-white rounded-[2rem] border border-black/8"
                    style={{ boxShadow: '0 -4px 0 0 #FF5722, 0 32px 80px rgba(0,0,0,0.14)' }}>
                    {/* Orange top-accent bar is achieved via boxShadow above */}

                    <div className="px-8 md:px-14 pt-10 pb-0">
                        {/* Title row */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                            <div className="flex-1">
                                <h1 className="font-display text-black leading-[0.85] mb-3"
                                    style={{ fontSize: 'clamp(3.2rem,8vw,6.5rem)' }}>
                                    NewtownJ
                                </h1>
                                <p className="font-display italic text-[#FF7043]"
                                    style={{ fontSize: 'clamp(1rem,2.5vw,1.5rem)' }}>
                                    A Modern Era Township
                                </p>
                            </div>

                            {/* Right — description + CTAs */}
                            <div className="md:max-w-sm flex flex-col gap-5 md:pt-2">
                                <p className="text-black/45 font-light text-sm leading-relaxed">
                                    Experience luxury living with over 30 top-tier amenities — twin lakes, landscaped parks, clubhouse, 3-star theater and superb connectivity in Punganur.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <a href="tel:+919845012345">
                                        <Button className="rounded-full px-7 py-5 font-semibold text-white"
                                            style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)', boxShadow: '0 8px 24px rgba(255,87,34,0.35)' }}>
                                            <Phone className="mr-2 h-4 w-4" />Call Now
                                        </Button>
                                    </a>
                                    <a href={brochureUrl} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#FF5722]/30 text-[#FF5722] text-sm font-semibold hover:bg-[#FF5722]/6 transition-colors">
                                        <FileText className="h-4 w-4" />Brochure
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stat bar — bottom of card, flush to edge */}
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/8 border-t border-black/8 rounded-b-[2rem] overflow-hidden">
                        {[
                            { v: '60 Acres', u: 'Total Land' },
                            { v: '750 Plots', u: 'Total Units' },
                            { v: '30×50 & 40×50', u: 'Plot Sizes' },
                            { v: 'PKM-UDA', u: 'Approval' },
                        ].map(({ v, u }) => (
                            <div key={u} className="px-6 py-5">
                                <div className="text-black font-semibold text-base">{v}</div>
                                <div className="text-[#FF5722] text-[10px] font-black uppercase tracking-widest mt-0.5">{u}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                VIDEO TOUR
            ═══════════════════════════════════════ */}
            <section className="py-20 px-6 md:px-12 bg-white border-t border-black/6" id="features">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                        <div>
                            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FF5722] mb-3">
                                <span className="w-8 h-px bg-[#FF5722]" />Virtual Tour
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl text-black">
                                See the <span className="italic font-light text-[#FF7043]">township</span>
                            </h2>
                        </div>
                        <p className="text-black/40 text-sm font-light max-w-xs">
                            Walk through NewtownJ's twin-lake landscape, clubhouse, and smart amenities.
                        </p>
                    </div>

                    <div
                        className="relative w-full rounded-3xl overflow-hidden border border-black/8 cursor-pointer group"
                        style={{ aspectRatio: '16/9', boxShadow: '0 24px 70px rgba(0,0,0,0.12)' }}
                        onClick={() => setVideoStarted(true)}>
                        {videoStarted ? (
                            <iframe
                                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                                title="NewtownJ Tour"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen className="absolute inset-0 w-full h-full"
                            />
                        ) : (
                            <>
                                <img
                                    src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                                    alt="NewtownJ Video Tour"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center border-2 border-white/60 bg-white/10 backdrop-blur-sm group-hover:bg-[#FF5722] group-hover:border-[#FF5722] transition-all duration-300">
                                        <PlayCircle className="h-10 w-10 md:h-12 md:w-12 text-white" />
                                    </div>
                                    <div className="text-center">
                                        <div className="text-white font-semibold text-base uppercase tracking-widest">Watch Property Tour</div>
                                        <div className="text-white/55 text-xs mt-1">NewtownJ · Punganur, Andhra Pradesh</div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                MASTER PLAN — left tall vertical · right sticky info
            ═══════════════════════════════════════ */}
            <section className="py-20 px-6 md:px-12 bg-white border-t border-black/6" id="gallery">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FF5722] mb-3">
                            <span className="w-8 h-px bg-[#FF5722]" />Site Layout
                        </span>
                        <h2 className="font-display text-5xl text-black">Master <span className="italic font-light text-[#FF7043]">Plan</span></h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10 items-start">
                        {/* LEFT — tall vertical plan */}
                        <div className="w-full lg:w-[55%]">
                            <div className="relative w-full min-h-[700px] lg:min-h-[950px] rounded-3xl overflow-hidden border border-black/8 bg-white">
                                <Image
                                    src={masterPlanImage}
                                    alt="NewtownJ Master Plan"
                                    fill
                                    className="object-contain object-top"
                                />
                                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-widest text-white"
                                    style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>
                                    Master Plan
                                </div>
                            </div>
                        </div>

                        {/* RIGHT — sticky details */}
                        <div className="w-full lg:w-[45%] lg:sticky lg:top-28 space-y-6">
                            <div>
                                <h3 className="font-display text-3xl text-black mb-3">60-Acre Smart Township</h3>
                                <p className="text-black/55 font-light leading-relaxed text-sm">
                                    NewtownJ is a modern era township spread across 60 acres in Punganur,
                                    offering 750 thoughtfully laid out plots with twin lakes, man-made
                                    plantations and 30+ smart amenities — a glimpse into the future of
                                    urbanization in this locality.
                                </p>
                            </div>

                            {/* Plot dimensions */}
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 text-[#FF5722]">Plot Configurations</h4>
                                {[
                                    { range: '30×50 ft', label: 'Standard Plot', area: '1,500 sq.ft', pct: 55 },
                                    { range: '40×50 ft', label: 'Spacious Plot', area: '2,000 sq.ft', pct: 75 },
                                ].map(item => (
                                    <div key={item.range} className="mb-5">
                                        <div className="flex justify-between text-xs mb-1.5">
                                            <span className="text-black font-semibold">{item.range} — {item.area}</span>
                                            <span className="text-black/40">{item.label}</span>
                                        </div>
                                        <div className="h-1.5 rounded-full bg-black/8">
                                            <div className="h-full rounded-full bg-[#FF5722]" style={{ width: `${item.pct}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Key stats */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { v: '60', u: 'Acres', d: 'Total Land' },
                                    { v: '750', u: 'Plots', d: 'Total Units' },
                                    { v: '30+', u: 'Amenities', d: 'Smart Features' },
                                    { v: 'PKM-UDA', u: 'Approved', d: 'Legal Clearance' },
                                ].map(({ v, u, d }) => (
                                    <div key={d} className="rounded-2xl p-4 border border-black/8 bg-black/[0.02] text-center">
                                        <div className="text-xl font-light text-black">{v}</div>
                                        <div className="text-[9px] font-black uppercase tracking-widest text-[#FF5722] mt-0.5">{u}</div>
                                        <div className="text-[9px] text-black/30 mt-0.5">{d}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Feature tags */}
                            <div className="flex flex-wrap gap-2">
                                {features.map(f => (
                                    <span key={f} className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[#FF5722]/25 text-[#FF5722] bg-[#FF5722]/[0.04]">{f}</span>
                                ))}
                            </div>

                            <a href={brochureUrl} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-[#FF5722]/25 bg-[#FF5722]/[0.04] hover:bg-[#FF5722]/10 transition-colors w-full">
                                <FileText className="h-5 w-5 text-[#FF5722] flex-shrink-0" />
                                <div>
                                    <div className="text-black text-sm font-semibold">Download Brochure</div>
                                    <div className="text-black/40 text-xs">NewtownJ — Full PDF</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                SMART AMENITIES — numbered icon grid
            ═══════════════════════════════════════ */}
            <section className="py-20 px-6 md:px-12 bg-white border-t border-black/6" id="amenities">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                        <div>
                            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FF5722] mb-3">
                                <span className="w-8 h-px bg-[#FF5722]" />30+ Smart Amenities
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl text-black">
                                Built for <span className="italic font-light text-[#FF7043]">life</span>
                            </h2>
                        </div>
                        <p className="text-black/40 font-light text-sm max-w-xs leading-relaxed">
                            Every amenity is meticulously designed to cater to every aspect of your lifestyle.
                        </p>
                    </div>

                    {/* Numbered amenity grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                        {amenities.map(({ Icon, label }, i) => (
                            <div key={label}
                                className="group flex items-center gap-4 p-5 rounded-2xl border border-black/8 bg-black/[0.01] hover:border-[#FF5722]/30 hover:bg-[#FF5722]/[0.03] transition-all duration-200">
                                <div className="relative flex-shrink-0">
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                                        style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>
                                        <Icon className="h-5 w-5 text-white" />
                                    </div>
                                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white border border-black/10 text-[9px] font-black text-black/40 flex items-center justify-center">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <span className="text-sm font-medium text-black/70 group-hover:text-black transition-colors leading-tight">{label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Facility breakdown */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: 'Infrastructure', Icon: Landmark, items: infraItems },
                            { title: 'Security', Icon: ShieldCheck, items: securityItems },
                            { title: 'Leisure', Icon: Trees, items: leisureItems },
                        ].map(({ title, Icon, items }) => (
                            <div key={title} className="rounded-2xl p-6 border border-black/8">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                                        style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>
                                        <Icon className="h-4 w-4 text-white" />
                                    </div>
                                    <h4 className="font-display text-base text-black">{title}</h4>
                                </div>
                                <ul className="space-y-2.5">
                                    {items.map(f => (
                                        <li key={f} className="flex items-start gap-2.5">
                                            <CheckCircle2 className="h-3.5 w-3.5 text-[#FF5722] flex-shrink-0 mt-0.5" />
                                            <span className="text-xs text-black/50 leading-snug">{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                LOCATION — map left · info right
            ═══════════════════════════════════════ */}
            <section className="py-20 px-6 md:px-12 bg-white border-t border-black/6" id="location">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12">
                        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FF5722] mb-3">
                            <span className="w-8 h-px bg-[#FF5722]" />Location
                        </span>
                        <h2 className="font-display text-5xl text-black">
                            Strategic <span className="italic font-light text-[#FF7043]">Position</span>
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* LEFT — tall map */}
                        <div className="w-full lg:w-[60%]">
                            <div className="rounded-3xl overflow-hidden border border-black/8"
                                style={{ height: 560, boxShadow: '0 16px 50px rgba(0,0,0,0.08)' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.9235790793414!2d78.59626297484844!3d13.355027886996714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb27f5b4c9d6d01%3A0xe6a4631e103fcb0e!2sNewtownJ!5e0!3m2!1sen!2sin!4v1772039168286!5m2!1sen!2sin"
                                    width="100%" height="100%" style={{ border: 0 }}
                                    allowFullScreen loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="NewtownJ Map"
                                />
                            </div>
                        </div>

                        {/* RIGHT — proximity list */}
                        <div className="w-full lg:w-[40%] lg:sticky lg:top-28">
                            <div className="rounded-3xl border border-black/8 overflow-hidden divide-y divide-black/6 mb-5">
                                <div className="px-6 py-5 bg-[#FF5722]/[0.04]">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-[#FF5722]" />
                                        <span className="text-xs font-black uppercase tracking-widest text-black/50">Punganur · Andhra Pradesh</span>
                                    </div>
                                </div>
                                {([
                                    { Icon: Plane, label: 'Tirupati Airport', time: '45 mins' },
                                    { Icon: Building2, label: 'Punganur Town', time: '5 mins' },
                                    { Icon: Route, label: 'NH-40 Highway', time: '10 mins' },
                                    { Icon: Hospital, label: 'Nearest Hospital', time: '10 mins' },
                                    { Icon: GraduationCap, label: 'Schools & Colleges', time: '5 mins' },
                                    { Icon: ShoppingBag, label: 'Shopping Areas', time: '5 mins' },
                                ] as { Icon: React.ElementType; label: string; time: string }[]).map(({ Icon, label, time }) => (
                                    <div key={label} className="flex items-center justify-between px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-xl bg-[#FF5722]/8 flex items-center justify-center flex-shrink-0">
                                                <Icon className="h-3.5 w-3.5 text-[#FF5722]" />
                                            </div>
                                            <span className="text-black/60 text-sm">{label}</span>
                                        </div>
                                        <span className="text-sm font-bold text-[#FF5722] flex-shrink-0 ml-3">{time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                CTA — split: image left, orange panel right
            ═══════════════════════════════════════ */}
            <section className="py-20 px-6 md:px-12 bg-white border-t border-black/6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden"
                        style={{ boxShadow: '0 24px 70px rgba(0,0,0,0.1)' }}>
                        {/* Left — property image */}
                        <div className="relative min-h-[280px]">
                            <Image src={img1} alt="NewtownJ" fill className="object-cover" />
                            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(0,0,0,0.3),rgba(0,0,0,0.1))' }} />
                            <div className="absolute bottom-6 left-6">
                                <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">Punganur · Andhra Pradesh</span>
                                <div className="text-white font-display text-3xl mt-1">NewtownJ</div>
                            </div>
                        </div>
                        {/* Right — orange CTA */}
                        <div className="flex flex-col justify-center px-10 py-12"
                            style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>
                            <span className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/30 text-white mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                Limited Plots Available
                            </span>
                            <h2 className="font-display text-white leading-[0.95] mb-4"
                                style={{ fontSize: 'clamp(2rem,4.5vw,3rem)' }}>
                                Your Future<br />
                                <span className="italic font-light text-white/70">Starts Here.</span>
                            </h2>
                            <p className="text-white/60 font-light text-sm leading-relaxed mb-8">
                                60-acre smart township · 750 plots · Clear title · PKM-UDA approved · Ready for registration.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a href="tel:+919845012345">
                                    <Button className="rounded-full px-8 py-5 font-semibold bg-white text-[#FF5722] hover:bg-white/90 w-full sm:w-auto"
                                        style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}>
                                        <Phone className="mr-2 h-4 w-4" />Call Now
                                    </Button>
                                </a>
                                <a href="https://wa.me/919845012345" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline"
                                        className="rounded-full px-8 py-5 font-semibold border-white/40 text-white hover:bg-white/10 w-full sm:w-auto">
                                        WhatsApp Us
                                    </Button>
                                </a>
                            </div>
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
