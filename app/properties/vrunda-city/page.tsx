'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FloatingNav } from '@/components/floating-nav';
import { PropertySectionTabs } from '@/components/property-section-tabs';
import { Button } from '@/components/ui/button';
import {
    MapPin,
    ChevronLeft,
    ChevronRight,
    Phone,
    CheckCircle2,
    ArrowLeft,
    Clock,
    Home,
    Shield,
    Trees,
    Plane,
    Building2,
    Route,
    Hospital,
    GraduationCap,
    ShoppingBag,
    LayoutGrid,
    Leaf,
    Landmark,
    Droplets,
    Lock,
} from 'lucide-react';

// Brand palette: #FF5722 (orange), #FF7043 (orange-light), #E64A19 (orange-dark), #000 (black), #fff (white)

const heroImages = [
    'https://realtydoor.com/wp-content/uploads/2025/12/banner-3-scaled.webp',
    'https://realtydoor.com/wp-content/uploads/2025/12/banner-1-scaled.webp',
    'https://realtydoor.com/wp-content/uploads/2025/12/banner-1-1-copy-scaled.webp',
];

const plotStats = [
    { value: '17.1', unit: 'Acres', label: 'Total Area' },
    { value: '292', unit: 'Plots', label: 'Total Units' },
    { value: '1200–2800', unit: 'Sq. Ft.', label: 'Plot Sizes' },
    { value: '20 min', unit: 'Airport', label: 'Connectivity' },
];

const infraFeatures = [
    'Black Top Roads (30 Ft & 40 Ft)',
    'Underground Drainage with STP',
    '24/7 Water Supply',
    'Overhead Water Tank with Adequate Capacity',
    'Underground Electrification',
    'Compound Wall',
];
const securityFeatures = [
    'Entrance Gate',
    '24/7 Security',
    'CCTV Surveillance',
];
const leisureFeatures = [
    'Club House',
    'Jogging Track & Footpaths',
    "Children's Play Area",
    'Yoga and Meditation Area',
    'Park with Landscape Garden',
    'Avenue Plantation',
];

export default function VrundaCityPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(
            () => setCurrentSlide((p) => (p + 1) % heroImages.length),
            5000
        );
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrentSlide((p) => (p + 1) % heroImages.length);
    const prev = () => setCurrentSlide((p) => (p - 1 + heroImages.length) % heroImages.length);

    return (
        <div className="min-h-screen bg-white">
            <FloatingNav />
            <PropertySectionTabs />

            {/* ═══════════════════════════════
                HERO — full-screen carousel
            ═══════════════════════════════ */}
            <section className="relative h-screen overflow-hidden" id="overview">
                {heroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Image src={img} alt={`Vrunda City ${idx + 1}`} fill className="object-cover" priority={idx === 0} />
                    </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

                {/* Nav arrows */}
                <button onClick={prev} aria-label="Previous"
                    className="absolute left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-[#FF5722]/50 bg-[#FF5722]/15 text-[#FF5722] flex items-center justify-center hover:bg-[#FF5722]/30 transition-all">
                    <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={next} aria-label="Next"
                    className="absolute right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-[#FF5722]/50 bg-[#FF5722]/15 text-[#FF5722] flex items-center justify-center hover:bg-[#FF5722]/30 transition-all">
                    <ChevronRight className="h-5 w-5" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                    {heroImages.map((_, i) => (
                        <button key={i} onClick={() => setCurrentSlide(i)}
                            className={`h-1.5 rounded-full transition-all ${i === currentSlide ? 'w-9 bg-[#FF5722]' : 'w-1.5 bg-white/40'}`} />
                    ))}
                </div>

                {/* Hero text */}
                <div className="relative h-full flex items-end pb-20 px-8">
                    <div className="max-w-7xl mx-auto w-full">
                        <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] rounded-full mb-5 border border-[#FF5722]/50 bg-[#FF5722]/15 text-[#FF5722]">
                            Ready for Registration · Fully Developed
                        </span>
                        <h1 className="font-display text-6xl md:text-8xl text-white leading-[1.05] mb-5">
                            Vrunda City<br />
                            <span className="italic font-light text-[#FF7043]">Hoskote, Bengaluru</span>
                        </h1>
                        <div className="flex flex-wrap items-center gap-6 text-white/70">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-[#FF5722]" />
                                <span>Hoskote–Bagalur Road, Bengaluru</span>
                            </div>
                            <span className="w-px h-4 bg-white/25" />
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-[#FF5722]" />
                                <span>20 mins to International Airport</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════
                STATS BAR
            ═══════════════════════════════ */}
            <section className="py-10 px-6 md:px-12 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div
                        className="rounded-2xl grid grid-cols-2 md:grid-cols-4"
                        style={{
                            background: 'linear-gradient(135deg, #FF5722 0%, #FF7043 50%, #E64A19 100%)',
                            boxShadow: '0 24px 60px rgba(255,87,34,0.35)',
                        }}
                    >
                        {plotStats.map((s, i) => (
                            <div key={s.label}
                                className="flex flex-col items-center justify-center py-8 px-4 text-center"
                                style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : undefined }}>
                                <span className="text-3xl md:text-4xl font-extralight text-white tracking-tight">{s.value}</span>
                                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/60 mt-1">{s.unit}</span>
                                <span className="text-xs text-white/45 mt-0.5">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════
                ABOUT
            ═══════════════════════════════ */}
            <section className="py-28 bg-white" id="features">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6 text-[#FF5722]">
                                <span className="w-8 h-px bg-[#FF5722]" />
                                About Vrunda City
                            </span>
                            <h2 className="font-display text-5xl md:text-6xl text-black leading-tight mb-8">
                                Capitalize on<br />
                                <span className="italic font-light text-[#FF7043]">Hoskote&apos;s</span> Future
                            </h2>
                            <p className="text-lg font-light leading-relaxed mb-6 text-black/60">
                                Vrunda City is designed to deliver on all of the important bits — convenience,
                                comfort, space, and wellbeing. It promises an effortlessly connected lifestyle
                                through the wealth of amenities and established infrastructure.
                            </p>
                            <p className="text-base font-light leading-relaxed text-black/40">
                                Come, capitalize on Hoskote&apos;s immense potential and
                                secure a stake in its bright future. Fully developed plots, ready for registration.
                            </p>
                        </div>

                        {/* image + floating stats */}
                        <div className="relative pb-8">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                                <Image
                                    src="https://realtydoor.com/wp-content/uploads/2025/12/banner-1-scaled.webp"
                                    alt="Vrunda City Community" fill className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            </div>
                            {/* floating card */}
                            <div className="absolute -bottom-4 -left-6 rounded-2xl p-6"
                                style={{
                                    background: 'linear-gradient(135deg, #FF5722, #E64A19)',
                                    boxShadow: '0 16px 40px rgba(255,87,34,0.45)',
                                }}>
                                <div className="grid grid-cols-2 gap-6 text-center">
                                    <div>
                                        <div className="text-3xl font-light text-white">292</div>
                                        <div className="text-[10px] font-black uppercase tracking-wider text-white/60 mt-0.5">Total Plots</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-light text-white">17.1</div>
                                        <div className="text-[10px] font-black uppercase tracking-wider text-white/60 mt-0.5">Acres</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════
                MASTER PLAN — dark section
            ═══════════════════════════════ */}
            <section className="py-24 bg-black" id="gallery">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest mb-4 text-[#FF5722]">
                            <span className="w-8 h-px bg-[#FF5722]" />Site Layout<span className="w-8 h-px bg-[#FF5722]" />
                        </span>
                        <h2 className="font-display text-5xl text-white">
                            Master <span className="italic font-light text-[#FF7043]">Plan</span>
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10 items-start">
                        {/* LEFT — master plan image */}
                        <div className="w-full lg:w-[55%]">
                            <div className="relative w-full min-h-[640px] lg:min-h-[900px] rounded-3xl overflow-hidden border border-[#FF5722]/20 bg-white">
                                <Image
                                    src="https://realtydoor.com/wp-content/uploads/2025/12/master-plan-scaled.webp"
                                    alt="Vrunda City Master Plan"
                                    fill className="object-contain object-top"
                                />
                                <div className="absolute top-4 left-4 rounded-xl px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
                                    style={{ background: 'linear-gradient(135deg, #FF5722, #E64A19)' }}>
                                    Master Plan
                                </div>
                            </div>
                        </div>

                        {/* RIGHT — info */}
                        <div className="w-full lg:w-[45%] lg:sticky lg:top-32 space-y-8">
                            <div>
                                <h3 className="font-display text-3xl text-white mb-3">Thoughtfully Planned Layout</h3>
                                <p className="text-white/55 font-light leading-relaxed">
                                    Vrunda City spans 17.1 acres with 292 meticulously planned plots
                                    ranging from 1,200 to 2,800 sq. ft. Wide 30 ft and 40 ft black-top
                                    roads weave through the community, ensuring excellent accessibility
                                    and a premium living experience.
                                </p>
                            </div>

                            {/* Plot size bars */}
                            <div>
                                <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-[#FF5722]">Plot Size Range</h4>
                                {[
                                    { range: '1,200 sq. ft.', label: 'Starter Lots', pct: 40 },
                                    { range: '1,500–2,000 sq. ft.', label: 'Standard Plots', pct: 70 },
                                    { range: '2,001–2,800 sq. ft.', label: 'Premium Corner', pct: 100 },
                                ].map((item) => (
                                    <div key={item.range} className="mb-4">
                                        <div className="flex justify-between text-sm mb-1.5">
                                            <span className="text-white font-medium">{item.range}</span>
                                            <span className="text-white/40">{item.label}</span>
                                        </div>
                                        <div className="h-1.5 rounded-full bg-white/10">
                                            <div className="h-full rounded-full bg-[#FF5722]" style={{ width: `${item.pct}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Highlights grid */}
                            <div className="rounded-2xl p-6 border border-[#FF5722]/20 bg-[#FF5722]/[0.06]">
                                <h4 className="text-xs font-black uppercase tracking-widest mb-5 text-[#FF5722]">Layout Highlights</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {([
                                        { Icon: LayoutGrid, l: '292 Plots' },
                                        { Icon: Route, l: '30 & 40 Ft Roads' },
                                        { Icon: Leaf, l: 'Green Zones' },
                                        { Icon: Landmark, l: 'Central Clubhouse' },
                                        { Icon: Droplets, l: 'Underground Drainage' },
                                        { Icon: Lock, l: 'Gated Perimeter' },
                                    ] as { Icon: React.ElementType; l: string }[]).map(({ Icon, l }) => (
                                        <div key={l} className="flex items-center gap-2 text-white/70">
                                            <Icon className="h-4 w-4 text-[#FF5722] flex-shrink-0" />
                                            <span className="text-sm">{l}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-3 text-sm text-white/40 leading-relaxed">
                                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#FF5722]" />
                                <p>
                                    Located in <span className="text-white font-medium">Hoskote, Bengaluru</span> — one of the fastest-growing
                                    corridors, just <span className="text-white font-medium">20 minutes to the International Airport</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════
                AMENITIES
            ═══════════════════════════════ */}
            <section className="py-28 bg-white" id="amenities">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest mb-4 text-[#FF5722]">
                            <span className="w-8 h-px bg-[#FF5722]" />Facilities &amp; Amenities<span className="w-8 h-px bg-[#FF5722]" />
                        </span>
                        <h2 className="font-display text-5xl text-black">
                            Everything You <span className="italic font-light text-[#FF7043]">Need</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Infrastructure */}
                        <div className="rounded-3xl p-8 border border-black/10 bg-black/[0.03]">
                            <div className="w-12 h-12 rounded-2xl bg-[#FF5722]/15 flex items-center justify-center mb-6">
                                <Home className="h-6 w-6 text-[#FF5722]" />
                            </div>
                            <h3 className="font-display text-2xl text-black mb-6">Infrastructure</h3>
                            <ul className="space-y-4">
                                {infraFeatures.map((f) => (
                                    <li key={f} className="flex items-start gap-3 text-black/55">
                                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#FF5722]" />
                                        <span className="text-sm leading-snug">{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Security — orange gradient fill */}
                        <div className="rounded-3xl p-8"
                            style={{ background: 'linear-gradient(145deg, #FF5722 0%, #E64A19 100%)' }}>
                            <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                                <Shield className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="font-display text-2xl text-white mb-6">Security</h3>
                            <ul className="space-y-4">
                                {securityFeatures.map((f) => (
                                    <li key={f} className="flex items-start gap-3 text-white/75">
                                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-white" />
                                        <span className="text-sm leading-snug font-medium">{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Leisure */}
                        <div className="rounded-3xl p-8 border border-black/10 bg-black/[0.03]">
                            <div className="w-12 h-12 rounded-2xl bg-[#FF5722]/15 flex items-center justify-center mb-6">
                                <Trees className="h-6 w-6 text-[#FF5722]" />
                            </div>
                            <h3 className="font-display text-2xl text-black mb-6">Leisure</h3>
                            <ul className="space-y-4">
                                {leisureFeatures.map((f) => (
                                    <li key={f} className="flex items-start gap-3 text-black/55">
                                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#FF5722]" />
                                        <span className="text-sm leading-snug">{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════
                GALLERY GRID — dark section
            ═══════════════════════════════ */}
            <section className="py-24 bg-black">
                <div className="max-w-7xl mx-auto px-8">
                    <h2 className="font-display text-4xl text-white mb-10">
                        Property <span className="italic font-light text-[#FF7043]">Gallery</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {heroImages.map((src, idx) => (
                            <div key={idx}
                                className={`relative overflow-hidden rounded-2xl group ${idx === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'}`}>
                                <Image src={src} alt={`Vrunda City View ${idx + 1}`} fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════
                LOCATION + GOOGLE MAPS
            ═══════════════════════════════ */}
            <section className="py-28 bg-white" id="location">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6 text-[#FF5722]">
                                <span className="w-8 h-px bg-[#FF5722]" />Location
                            </span>
                            <h2 className="font-display text-5xl text-black leading-tight mb-8">
                                Perfectly <span className="italic font-light text-[#FF7043]">Connected</span>
                            </h2>
                            <p className="text-black/55 text-lg font-light leading-relaxed mb-10">
                                Vrunda City is strategically located in Hoskote, one of Bengaluru&apos;s
                                fastest-growing suburbs with excellent road and rail connectivity.
                            </p>
                            <div className="space-y-0">
                                {([
                                    { Icon: Plane, label: 'International Airport', time: '20 mins' },
                                    { Icon: Building2, label: 'Bangalore City Centre', time: '35 mins' },
                                    { Icon: Route, label: 'NH-75 (Old Madras Road)', time: '5 mins' },
                                    { Icon: Hospital, label: 'Nearest Hospital', time: '10 mins' },
                                    { Icon: GraduationCap, label: 'Reputed Schools & Colleges', time: '10 mins' },
                                    { Icon: ShoppingBag, label: 'Shopping & Markets', time: '5 mins' },
                                ] as { Icon: React.ElementType; label: string; time: string }[]).map(({ Icon, label, time }) => (
                                    <div key={label}
                                        className="flex items-center justify-between py-4 border-b border-black/10">
                                        <div className="flex items-center gap-3">
                                            <Icon className="h-4 w-4 text-[#FF5722] flex-shrink-0" />
                                            <span className="text-black/65 text-sm">{label}</span>
                                        </div>
                                        <span className="text-sm font-bold text-[#FF5722]">{time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Google Maps */}
                        <div className="rounded-3xl overflow-hidden border border-[#FF5722]/20" style={{ height: 500, boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.1559305835276!2d77.85361257484463!3d13.152562487179695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae07f31b0d75b1%3A0x9508a20eac1eede9!2sVrunda%20City!5e0!3m2!1sen!2sin!4v1772018816134!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Vrunda City Location Map"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════
                CTA — full-bleed dark
            ═══════════════════════════════ */}
            <section className="relative overflow-hidden" style={{ minHeight: '75vh' }}>
                <Image
                    src="https://realtydoor.com/wp-content/uploads/2025/12/banner-3-scaled.webp"
                    alt="Vrunda City – Book Your Plot"
                    fill className="object-cover"
                />
                <div className="absolute inset-0 bg-black/65" />
                <div className="absolute inset-0"
                    style={{ background: 'linear-gradient(135deg, rgba(255,87,34,0.22) 0%, transparent 65%)' }} />
                <div className="absolute bottom-0 left-0 right-0 h-1"
                    style={{ background: 'linear-gradient(90deg, #FF5722, #FF7043, #E64A19)' }} />

                <div className="relative h-full flex items-center justify-center px-6 py-28">
                    <div className="max-w-2xl w-full mx-auto text-center">

                        {/* pulsing badge */}
                        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] mb-8 border border-[#FF5722]/50 bg-[#FF5722]/15 text-[#FF5722]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-pulse" />
                            Ready for Registration
                        </div>

                        <h2 className="font-display text-5xl md:text-6xl text-white mb-3">
                            Secure Your Plot
                        </h2>
                        <h2 className="font-display text-5xl md:text-6xl text-[#FF7043] italic font-light mb-8">
                            in Vrunda City
                        </h2>

                        <p className="text-white/60 text-lg font-light mb-10 max-w-lg mx-auto">
                            Limited plots available. Fully developed. Ready for immediate registration.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:+919845012345">
                                <Button className="rounded-full px-10 py-6 text-base font-semibold text-white w-full sm:w-auto"
                                    style={{ background: 'linear-gradient(135deg, #FF5722, #E64A19)', boxShadow: '0 8px 30px rgba(255,87,34,0.50)' }}>
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call Now
                                </Button>
                            </a>
                            <a href="https://wa.me/919845012345" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline"
                                    className="rounded-full px-10 py-6 text-base font-semibold border-[#FF5722]/50 text-[#FF7043] bg-[#FF5722]/10 hover:bg-[#FF5722]/20 w-full sm:w-auto">
                                    WhatsApp Us
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* back link */}
            <div className="py-10 text-center bg-white border-t border-black/10">
                <Link href="/properties"
                    className="inline-flex items-center font-semibold text-[#FF5722] hover:text-[#FF7043] transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to All Plots
                </Link>
            </div>
        </div>
    );
}
