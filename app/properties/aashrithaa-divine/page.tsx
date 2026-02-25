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
    Footprints, Trees, ShieldCheck, PlayCircle, Landmark,
} from 'lucide-react';

const img1 = 'https://realtydoor.com/wp-content/uploads/2024/05/devine-1.webp';
const img2 = 'https://realtydoor.com/wp-content/uploads/2024/05/devine-2.webp';
const img3 = 'https://realtydoor.com/wp-content/uploads/2024/05/devine-3.webp';
const masterPlanImage = 'https://realtydoor.com/wp-content/uploads/2024/05/masterplan.webp';
const brochureUrl = 'https://realtydoor.com/wp-content/uploads/2024/05/aashrithaa-divine-brochure.pdf';
const videoId = 'yag8beq3qZU';

const infraItems = ['Impressive Entrance Arch', 'Asphalted Black Top Roads with Plantation', 'Underground Drainage with Treatment Plant', 'Box Type Storm Water Drain with Harvesting', 'Underground Power Supply Cables', 'Overhead Tank with Adequate Capacity', 'Street Lights'];
const securityItems = ['Round the Clock Security', 'Compound Wall'];
const leisureItems = ['Parks with Landscaped Gardens', "Children's Playground", 'Jogging Tracks and Footpaths', 'Avenue Plantation'];
const features = ['Fully Developed Infrastructure', 'Serene Living', 'Superb Connectivity', 'Ready to Build', 'Ready for Registration', 'Best Investment Opportunity'];

export default function AashrithaaPage() {
    const [videoStarted, setVideoStarted] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            <FloatingNav />
            <PropertySectionTabs />

            {/* ═══════════════════════════════════════
                HERO — full viewport cinematic cover
            ═══════════════════════════════════════ */}
            <section className="relative w-full overflow-hidden" id="overview" style={{ height: '100vh', minHeight: 600 }}>
                {/* FULL-SCREEN background image */}
                <Image src={img1} alt="Aashrithaa Divine" fill className="object-cover" priority />

                {/* Dark gradient: heavier at bottom for text legibility */}
                <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.08) 35%, rgba(0,0,0,0.55) 75%, rgba(0,0,0,0.82) 100%)' }} />

                {/* TOP ROW — badge left, location right */}
                <div className="absolute top-8 left-8 right-8 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest bg-[#FF5722] text-white shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        Ready for Registration
                    </span>
                    <div className="hidden md:flex items-center gap-2 text-white/70 backdrop-blur-sm bg-black/20 rounded-full px-4 py-2 border border-white/15">
                        <MapPin className="h-3.5 w-3.5 text-[#FF5722]" />
                        <span className="text-xs font-semibold uppercase tracking-widest">Jigani · Bengaluru</span>
                    </div>
                </div>

                {/* BOTTOM LEFT — headline + description + CTAs */}
                <div className="absolute bottom-0 left-0 right-0 px-8 md:px-14 pb-8">
                    {/* Tagline */}
                    <p className="text-white/55 italic font-display mb-3"
                        style={{ fontSize: 'clamp(1rem,2vw,1.3rem)' }}>
                        &ldquo;Where happiness begins&rdquo;
                    </p>

                    {/* Main title */}
                    <h1 className="font-display text-white leading-[0.88] mb-6"
                        style={{ fontSize: 'clamp(3.5rem,9vw,7.5rem)' }}>
                        Aashrithaa{' '}
                        <span className="text-[#FF7043] italic font-light">Divine</span>
                    </h1>

                    {/* CTA row */}
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <a href="tel:+919845012345">
                            <Button className="rounded-full px-8 py-5 font-semibold text-white"
                                style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)', boxShadow: '0 8px 28px rgba(255,87,34,0.5)' }}>
                                <Phone className="mr-2 h-4 w-4" />Call Now to Book
                            </Button>
                        </a>
                        <a href={brochureUrl} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/35 text-white text-sm font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
                            <FileText className="h-4 w-4" />Download Brochure
                        </a>
                    </div>

                    {/* Horizontal stats bar — pinned at bottom */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/15"
                        style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)' }}>
                        {[
                            { v: '14 Acres', u: 'Total Land' },
                            { v: '236 Plots', u: 'Total Units' },
                            { v: '916–2155 Sq.Ft.', u: 'Plot Sizes' },
                            { v: '30 min', u: 'To Airport' },
                        ].map(({ v, u }) => (
                            <div key={u} className="px-6 py-4 border-r border-white/10 last:border-r-0">
                                <div className="text-white font-semibold text-base">{v}</div>
                                <div className="text-white/45 text-[10px] font-black uppercase tracking-widest mt-0.5">{u}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                VIDEO TOUR — prominent center-stage section
            ═══════════════════════════════════════ */}
            <section className="py-16 px-6 md:px-12 bg-white border-t border-black/6" id="features">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                        <div>
                            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FF5722] mb-3">
                                <span className="w-8 h-px bg-[#FF5722]" />Virtual Tour
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl text-black">
                                See it <span className="italic font-light text-[#FF7043]">for yourself</span>
                            </h2>
                        </div>
                        <p className="text-black/40 text-sm font-light max-w-xs">
                            Watch our complete property walkthrough and explore every corner of Aashrithaa Divine.
                        </p>
                    </div>

                    {/* Video */}
                    <div
                        className="relative w-full rounded-3xl overflow-hidden border border-black/8 cursor-pointer group"
                        style={{ aspectRatio: '16/9', boxShadow: '0 24px 70px rgba(0,0,0,0.12)' }}
                        onClick={() => setVideoStarted(true)}>
                        {videoStarted ? (
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                                title="Aashrithaa Divine Tour"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            />
                        ) : (
                            <>
                                <img
                                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                    alt="Aashrithaa Divine Video Tour"
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center border-2 border-white/60 bg-white/10 backdrop-blur-sm group-hover:bg-[#FF5722] group-hover:border-[#FF5722] transition-all duration-300"
                                        style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
                                        <PlayCircle className="h-10 w-10 md:h-12 md:w-12 text-white" />
                                    </div>
                                    <div className="text-center">
                                        <div className="text-white font-semibold text-base uppercase tracking-widest">Watch Property Tour</div>
                                        <div className="text-white/55 text-xs mt-1">Aashrithaa Divine · Jigani, Bengaluru</div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Feature pills below video */}
                    <div className="mt-6 flex flex-wrap gap-2 justify-center">
                        {features.map(f => (
                            <span key={f} className="px-4 py-2 rounded-full text-xs font-semibold border border-[#FF5722]/25 text-[#FF5722] bg-[#FF5722]/[0.05]">{f}</span>
                        ))}
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
                                <Image src={masterPlanImage} alt="Aashrithaa Divine Master Plan" fill className="object-contain object-top" />
                                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-widest text-white"
                                    style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>Master Plan</div>
                            </div>
                        </div>

                        {/* RIGHT — sticky details */}
                        <div className="w-full lg:w-[45%] lg:sticky lg:top-28 space-y-6">
                            <div>
                                <h3 className="font-display text-3xl text-black mb-3">Designed for Life</h3>
                                <p className="text-black/55 font-light leading-relaxed text-sm">
                                    Spread across 14 lush acres in the heart of Jigani, Aashrithaa Divine offers 236 thoughtfully laid out plots.
                                    From the moment you move in, you and your family will enjoy plenty of room to move and breathe.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 text-[#FF5722]">Plot Size Range</h4>
                                {[
                                    { range: '916 sq. ft.', label: 'Entry Plots', pct: 43 },
                                    { range: '1,200 sq. ft.', label: 'Standard Plots', pct: 56 },
                                    { range: '1,500 sq. ft.', label: 'Spacious Lots', pct: 70 },
                                    { range: '2,155 sq. ft.', label: 'Premium Corner', pct: 100 },
                                ].map(item => (
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

                            {/* Key stats */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { v: '14', u: 'Acres', d: 'Total Land' },
                                    { v: '236', u: 'Plots', d: 'Total Units' },
                                    { v: '30', u: 'Ft Roads', d: 'Internal Width' },
                                    { v: '30 min', u: 'Airport', d: 'Connectivity' },
                                ].map(({ v, u, d }) => (
                                    <div key={d} className="rounded-2xl p-4 border border-black/8 bg-black/[0.02] text-center">
                                        <div className="text-xl font-light text-black">{v}</div>
                                        <div className="text-[9px] font-black uppercase tracking-widest text-[#FF5722] mt-0.5">{u}</div>
                                        <div className="text-[9px] text-black/30 mt-0.5">{d}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-start gap-3 text-black/40 text-sm leading-relaxed rounded-2xl p-4 border border-black/6 bg-black/[0.02]">
                                <MapPin className="h-4 w-4 text-[#FF5722] flex-shrink-0 mt-0.5" />
                                <p>Located in <span className="text-black font-medium">Jigani, Bengaluru</span> — poised for exciting transformation with superb connectivity to the city&apos;s key zones.</p>
                            </div>

                            <a href={brochureUrl} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-[#FF5722]/25 bg-[#FF5722]/[0.04] hover:bg-[#FF5722]/10 transition-colors w-full">
                                <FileText className="h-5 w-5 text-[#FF5722] flex-shrink-0" />
                                <div>
                                    <div className="text-black text-sm font-semibold">Download Brochure</div>
                                    <div className="text-black/40 text-xs">Aashrithaa Divine — Full PDF</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                AMENITIES — 3-column icon grid (distinct from accordion & tabs)
            ═══════════════════════════════════════ */}
            <section className="py-20 px-6 md:px-12 bg-white border-t border-black/6" id="amenities">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-14 items-center mb-14">
                        <div>
                            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FF5722] mb-3">
                                <span className="w-8 h-px bg-[#FF5722]" />Facilities & Amenities
                            </span>
                            <h2 className="font-display text-4xl md:text-5xl text-black">
                                Built to <span className="italic font-light text-[#FF7043]">Impress</span>
                            </h2>
                        </div>
                        {/* Right: image strip */}
                        <div className="grid grid-cols-3 gap-3 h-36">
                            {[img1, img2, img3].map((src, i) => (
                                <div key={i} className={`relative rounded-2xl overflow-hidden ${i === 1 ? 'row-span-1' : ''}`}>
                                    <Image src={src} alt={`View ${i + 1}`} fill className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 3 columns: Infra / Security / Leisure */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Infrastructure */}
                        <div className="rounded-3xl p-7 border border-black/8 bg-black/[0.01]">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                                    style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>
                                    <Landmark className="h-5 w-5 text-white" />
                                </div>
                                <h3 className="font-display text-lg text-black">Infrastructure</h3>
                            </div>
                            <ul className="space-y-3">
                                {infraItems.map(f => (
                                    <li key={f} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-4 w-4 text-[#FF5722] flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-black/55 leading-snug">{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Security */}
                        <div className="rounded-3xl p-7 border border-[#FF5722]/18"
                            style={{ background: 'linear-gradient(160deg,rgba(255,87,34,0.04),rgba(255,112,67,0.02))' }}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                                    style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>
                                    <ShieldCheck className="h-5 w-5 text-white" />
                                </div>
                                <h3 className="font-display text-lg text-black">Security</h3>
                            </div>
                            <ul className="space-y-3 mb-8">
                                {securityItems.map(f => (
                                    <li key={f} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-4 w-4 text-[#FF5722] flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-black/55 leading-snug">{f}</span>
                                    </li>
                                ))}
                            </ul>
                            {/* Big orange stat */}
                            <div className="mt-auto pt-6 border-t border-[#FF5722]/15 text-center">
                                <div className="text-4xl font-light text-[#FF5722]">24/7</div>
                                <div className="text-xs font-black uppercase tracking-widest text-black/30 mt-1">Round the Clock</div>
                            </div>
                        </div>

                        {/* Leisure */}
                        <div className="rounded-3xl p-7 border border-black/8 bg-black/[0.01]">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                                    style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>
                                    <Trees className="h-5 w-5 text-white" />
                                </div>
                                <h3 className="font-display text-lg text-black">Leisure</h3>
                            </div>
                            <ul className="space-y-3">
                                {leisureItems.map(f => (
                                    <li key={f} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-4 w-4 text-[#FF5722] flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-black/55 leading-snug">{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 flex gap-2 flex-wrap">
                                {[Footprints, Trees].map((Icon, i) => (
                                    <div key={i} className="w-9 h-9 rounded-xl bg-[#FF5722]/8 flex items-center justify-center">
                                        <Icon className="h-4 w-4 text-[#FF5722]" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                LOCATION — left info list · right map
                (opposite of Neo Serene for distinction)
            ═══════════════════════════════════════ */}
            <section className="py-20 px-6 md:px-12 bg-white border-t border-black/6" id="location">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12">
                        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FF5722] mb-3">
                            <span className="w-8 h-px bg-[#FF5722]" />Location
                        </span>
                        <h2 className="font-display text-5xl text-black">
                            Superb <span className="italic font-light text-[#FF7043]">Connectivity</span>
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* LEFT — proximity list */}
                        <div className="w-full lg:w-[40%] lg:sticky lg:top-28">
                            <div className="rounded-3xl border border-black/8 overflow-hidden divide-y divide-black/6 mb-5">
                                <div className="px-6 py-5 bg-[#FF5722]/[0.04]">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4 text-[#FF5722]" />
                                        <span className="text-xs font-black uppercase tracking-widest text-black/50">Jigani, Bengaluru – 560105</span>
                                    </div>
                                </div>
                                {([
                                    { Icon: Plane, label: 'International Airport', time: '30 mins' },
                                    { Icon: Building2, label: 'Bangalore City', time: '25 mins' },
                                    { Icon: Route, label: 'Jigani Main Road', time: '2 mins' },
                                    { Icon: Hospital, label: 'Nearest Hospital', time: '10 mins' },
                                    { Icon: GraduationCap, label: 'Schools & Colleges', time: '10 mins' },
                                    { Icon: ShoppingBag, label: 'Shopping Areas', time: '8 mins' },
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

                        {/* RIGHT — tall map */}
                        <div className="w-full lg:w-[60%]">
                            <div className="rounded-3xl overflow-hidden border border-black/8"
                                style={{ height: 560, boxShadow: '0 16px 50px rgba(0,0,0,0.08)' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.3748763735193!2d77.64590517483745!3d12.754149587541555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae696c1973f28b%3A0x6ceb2d292549446a!2sAashrithaa%20Divine!5e0!3m2!1sen!2sin!4v1772038195241!5m2!1sen!2sin"
                                    width="100%" height="100%" style={{ border: 0 }}
                                    allowFullScreen loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Aashrithaa Divine Map"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                CTA — orange full-bleed banner with background image
            ═══════════════════════════════════════ */}
            <section className="py-20 px-6 md:px-12 bg-white border-t border-black/6">
                <div className="max-w-6xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden min-h-[320px] flex items-center"
                        style={{ background: 'linear-gradient(135deg,#FF5722 0%,#E64A19 50%,#BF360C 100%)', boxShadow: '0 24px 70px rgba(255,87,34,0.3)' }}>
                        {/* Background watermark */}
                        <div className="absolute inset-0 opacity-5 flex items-center justify-center">
                            <span className="font-display text-white select-none" style={{ fontSize: '25vw', lineHeight: 1 }}>A</span>
                        </div>
                        <div className="relative z-10 px-10 md:px-16 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8 w-full">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] mb-6 border border-white/30 bg-white/10 text-white self-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />Limited Availability
                                </div>
                                <h2 className="font-display text-white leading-[0.95]" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
                                    Your Happiness<br />
                                    <span className="italic font-light text-white/70">begins here.</span>
                                </h2>
                                <p className="text-white/60 font-light mt-4 max-w-md text-sm leading-relaxed">
                                    Fully developed plots in Jigani&nbsp;·&nbsp;Clear title&nbsp;·&nbsp;Ready for immediate registration.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                                <a href="tel:+919845012345">
                                    <Button className="rounded-full px-9 py-6 font-semibold bg-white text-[#FF5722] hover:bg-white/90 w-full sm:w-auto"
                                        style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.2)' }}>
                                        <Phone className="mr-2 h-4 w-4" />Call Now
                                    </Button>
                                </a>
                                <a href="https://wa.me/919845012345" target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline"
                                        className="rounded-full px-9 py-6 font-semibold border-white/40 text-white hover:bg-white/10 w-full sm:w-auto">
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
