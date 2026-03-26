'use client';

import React, { useState, useEffect } from 'react';
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
    Maximize, X, ChevronLeft, ChevronRight,
} from 'lucide-react';
import { StatsTickerBanner } from '@/components/stats-ticker-banner';
import { PropertyCTA } from '@/components/property-cta';
import { BannerPlaceholder } from '@/components/promo-banner';

const masterPlanImage = '/newtownj/map.avif';
const brochureUrl = '/newtownj/brochure.pdf';
const VIDEO_ID = '_T1dY6liEcw';

const galleryImages = [
    '/newtownj/image-1.jpeg',
    '/newtownj/image-2.jpeg',
    '/newtownj/image-3.jpeg',
    '/newtownj/image-4.jpeg',
    '/newtownj/image-5.jpeg',
    '/newtownj/image-6.jpeg',
    '/newtownj/image-7.jpeg',
    '/newtownj/image-8.jpeg',
    '/newtownj/image-9.jpeg',
    '/newtownj/image-10.jpeg',
    '/newtownj/image-11.jpeg',
    '/newtownj/image-12.jpeg',
    '/newtownj/image-13.jpeg',
    '/newtownj/image-14.jpeg',
    '/newtownj/image-15.jpeg',
    '/newtownj/image-16.jpeg',
    '/newtownj/image-17.jpeg',
];

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

// Hero uses the best-quality (largest) images: 1–4
const heroImages = [
    '/newtownj/image-1.jpeg',
    '/newtownj/image-2.jpeg',
    '/newtownj/image-3.jpeg',
    '/newtownj/image-4.jpeg',
];

export default function NewtownJPage() {
    const [videoStarted, setVideoStarted] = useState(false);

    // Lightbox
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const allLightboxImages = [masterPlanImage, ...galleryImages];

    const openLightbox = (index: number) => { setLightboxIndex(index); setLightboxOpen(true); };
    const nextImage = (e: React.MouseEvent) => { e.stopPropagation(); setLightboxIndex((p) => (p + 1) % allLightboxImages.length); };
    const prevImage = (e: React.MouseEvent) => { e.stopPropagation(); setLightboxIndex((p) => (p - 1 + allLightboxImages.length) % allLightboxImages.length); };

    // Hero carousel
    const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => setCurrentHeroIndex((p) => (p + 1) % heroImages.length), 4500);
        return () => clearInterval(timer);
    }, []);

    // Keyboard nav for lightbox
    useEffect(() => {
        if (!lightboxOpen) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') setLightboxIndex((p) => (p + 1) % allLightboxImages.length);
            if (e.key === 'ArrowLeft') setLightboxIndex((p) => (p - 1 + allLightboxImages.length) % allLightboxImages.length);
            if (e.key === 'Escape') setLightboxOpen(false);
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [lightboxOpen, allLightboxImages.length]);

    return (
        <div className="min-h-screen bg-white">
            <FloatingNav />
            <PropertySectionTabs />

            {/* ═══════════════════════════════════
                HERO — full viewport cinematic crossfade
            ═══════════════════════════════════ */}
            <section className="relative w-full flex flex-col justify-end pb-8 pt-32 px-4 md:px-8 overflow-hidden" id="overview" style={{ minHeight: '90vh' }}>
                {/* Crossfading background carousel */}
                <div className="absolute inset-0 bg-black">
                    {heroImages.map((src, i) => (
                        <Image key={i} src={src} alt={`NewtownJ ${i + 1}`} fill
                            className={`object-cover transition-all duration-[2500ms] ease-in-out ${i === currentHeroIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}
                            priority={i === 0} />
                    ))}
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/90 pointer-events-none" />

                {/* Floating glass console */}
                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <div className="bg-black/20 backdrop-blur-2xl rounded-[2rem] border border-white/15 p-8 md:p-12 shadow-2xl overflow-hidden">

                        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-12">
                            {/* Left: Title */}
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-[#FF5722] text-white">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                        PKM-UDA Approved
                                    </span>
                                    <div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-widest text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                                        <MapPin className="h-3 w-3 text-[#FF5722]" /> Punganur · Andhra Pradesh
                                    </div>
                                </div>
                                <h1 className="font-display text-white leading-[0.95] mb-6" style={{ fontSize: 'clamp(3.5rem,7vw,6.5rem)' }}>
                                    Newtown<span className="text-[#FF7043] italic font-light">J</span>
                                </h1>
                                <p className="text-white/55 font-light leading-relaxed max-w-md text-sm md:text-base">
                                    A modern era township spread across 41 acres, offering 600 thoughtfully laid out plots with twin lakes, a 3-star theater, clubhouse, and 30+ smart amenities.
                                </p>
                            </div>

                            {/* Right: CTAs + Stats */}
                            <div className="flex flex-col gap-4 min-w-[260px]">
                                <div className="flex flex-col gap-3">
                                    <a href="tel:+919845012345">
                                        <Button className="w-full rounded-full px-8 py-5 font-semibold text-white justify-center"
                                            style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)', boxShadow: '0 8px 28px rgba(255,87,34,0.5)' }}>
                                            <Phone className="mr-2 h-4 w-4" />Call Now to Book
                                        </Button>
                                    </a>
                                    <a href={brochureUrl} target="_blank" rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/35 text-white text-sm font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
                                        <FileText className="h-4 w-4" />Download Brochure
                                    </a>
                                </div>

                                {/* Mini stats */}
                                <div className="grid grid-cols-2 gap-px rounded-2xl overflow-hidden border border-white/15 mt-2"
                                    style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)' }}>
                                    {[
                                        { v: '41 Acres', u: 'Total Land' },
                                        { v: '600 Plots', u: 'Total Units' },
                                        { v: '30+', u: 'Amenities' },
                                        { v: 'PKM-UDA', u: 'Approved' },
                                    ].map(({ v, u }) => (
                                        <div key={u} className="px-4 py-3 border-r border-b border-white/10 last:border-r-0">
                                            <div className="text-white font-semibold text-sm">{v}</div>
                                            <div className="text-white/45 text-[9px] font-black uppercase tracking-widest mt-0.5">{u}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Ticker */}
            <StatsTickerBanner />

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
                            Walk through NewtownJ&apos;s twin-lake landscape, clubhouse, and smart amenities.
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

                    {/* Feature pills */}
                    <div className="mt-6 flex flex-wrap gap-2 justify-center">
                        {features.map(f => (
                            <span key={f} className="px-4 py-2 rounded-full text-xs font-semibold border border-[#FF5722]/25 text-[#FF5722] bg-[#FF5722]/[0.05]">{f}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                MASTER PLAN
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
                        {/* LEFT — map + 2 supplementary images */}
                        <div className="w-full lg:w-[55%]">
                            <div className="relative w-full rounded-3xl bg-white border border-black/8 overflow-hidden drop-shadow-xl cursor-pointer group" onClick={() => openLightbox(0)}>
                                <Image src={masterPlanImage} alt="NewtownJ Master Plan" width={1200} height={1200}
                                    className="w-full h-auto object-contain object-top group-hover:scale-[1.02] transition-transform duration-700" />
                                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-widest text-white"
                                    style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>Master Plan</div>
                                <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center text-white border border-white/40 shadow-lg transition-opacity">
                                        <Maximize className="h-5 w-5" />
                                    </div>
                                </div>
                            </div>

                            {/* 2 supplementary images below map */}
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                {[5, 6].map((idx) => (
                                    <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-sm" onClick={() => openLightbox(idx + 1)}>
                                        <Image src={galleryImages[idx]} alt={`NewtownJ view ${idx}`} fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
                                            <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center text-white border border-white/40 shadow-lg transition-opacity">
                                                <Maximize className="h-4 w-4" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT — sticky details */}
                        <div className="w-full lg:w-[45%] lg:sticky lg:top-28 space-y-6">
                            <div>
                                <h3 className="font-display text-3xl text-black mb-3">41-Acre Smart Township</h3>
                                <p className="text-black/55 font-light leading-relaxed text-sm">
                                    NewtownJ is a modern era township spread across 41 acres in Punganur, offering 600 thoughtfully laid out plots with twin lakes, man-made plantations and 30+ smart amenities — a glimpse into the future of urbanization.
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
                                    { v: '41', u: 'Acres', d: 'Total Land' },
                                    { v: '600', u: 'Plots', d: 'Total Units' },
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

            {/* ═══════════════════════════════════
                GALLERY — masonry photo grid
            ═══════════════════════════════════ */}
            <section className="py-20 px-6 md:px-12 bg-[#FAFAFA] border-t border-black/5" id="photo-gallery">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 text-center flex flex-col items-center">
                        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FF5722] mb-3">
                            <span className="w-8 h-px bg-[#FF5722]" />Life at NewtownJ
                        </span>
                        <h2 className="font-display text-5xl text-black">Township <span className="italic font-light text-[#FF7043]">Gallery</span></h2>
                        <p className="text-black/40 text-sm font-light max-w-md mt-4 leading-relaxed">
                            41 acres of curated smart township living — twin lakes, landscaped parks, and a clubhouse that redefines community.
                        </p>
                    </div>

                    <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4">
                        {galleryImages.map((src, idx) => (
                            <div key={idx} className="relative overflow-hidden rounded-2xl break-inside-avoid group shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5 bg-white cursor-pointer" onClick={() => openLightbox(idx + 1)}>
                                <Image
                                    src={src}
                                    alt={`NewtownJ Snapshot ${idx + 1}`}
                                    width={600}
                                    height={800}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 pointer-events-none">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="text-white font-bold text-sm drop-shadow-md">Site View {idx + 1}</div>
                                        <div className="text-white/80 text-xs mt-1 drop-shadow-md">NewtownJ · Punganur</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                SMART AMENITIES
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
                LOCATION
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
                            <a href="https://maps.app.goo.gl/yourNewtownJLink" target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF5722]/10 text-[#FF5722] font-bold hover:bg-[#FF5722]/20 transition-colors mb-6 border border-[#FF5722]/25">
                                <Route className="h-4 w-4" /> Open in Google Maps
                            </a>
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

            <PropertyCTA propertyName="NewtownJ" image={galleryImages[0]} variant="overlay" brochureUrl={brochureUrl} />

            <div className="py-8 text-center bg-white border-t border-black/8">
                <Link href="/properties" className="inline-flex items-center font-semibold text-[#FF5722] hover:text-[#E64A19] transition-colors text-sm">
                    <ArrowLeft className="mr-2 h-4 w-4" />Back to All Plots
                </Link>
            </div>

            {/* ═══════════════════════════════════
                FULL-SCREEN LIGHTBOX
            ═══════════════════════════════════ */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center" onClick={() => setLightboxOpen(false)}>
                    <button onClick={() => setLightboxOpen(false)}
                        className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white border border-white/20 transition-colors z-10">
                        <X className="h-5 w-5" />
                    </button>
                    <button onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white border border-white/20 transition-colors z-10">
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <div className="relative max-w-5xl max-h-[85vh] w-full mx-12" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={allLightboxImages[lightboxIndex]}
                            alt={`Gallery image ${lightboxIndex + 1}`}
                            width={1400}
                            height={900}
                            className="w-full h-auto max-h-[85vh] object-contain rounded-2xl"
                        />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                            {lightboxIndex + 1} / {allLightboxImages.length}
                        </div>
                    </div>
                    <button onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white border border-white/20 transition-colors z-10">
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            )}
        </div>
    );
}
