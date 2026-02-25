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
    LayoutGrid, Leaf, Landmark, Droplets, Lock, FileText, ArrowRight,
} from 'lucide-react';

const img1 = 'https://realtydoor.com/wp-content/uploads/2024/05/aashrithaa-brindhavan1-1.jpg';
const img2 = 'https://realtydoor.com/wp-content/uploads/2024/05/aashrithaa-brindhavan-2.jpg';
const img3 = 'https://realtydoor.com/wp-content/uploads/2024/05/aashrithaa-brindhavan-3.jpg';
const masterPlanImage = 'https://realtydoor.com/wp-content/uploads/2025/09/Untitled-design-71.png';
const brochureUrl = 'https://realtydoor.com/wp-content/uploads/2024/05/aashrithaa-brindhavan-brochure.pdf';

const infraFeatures = ['CC Roads', 'STP Tank', '24/7 Water Supply', 'Overhead Water Tank', 'Storm Water Drains', 'Sewerage Lines', 'Underground Electrical & Water Lines'];
const securityFeatures = ['Entrance Gate', '24/7 Security', 'CCTV Surveillance'];
const leisureFeatures = ['Parks', 'Jogging Track', "Children's Play Area"];
const keyHighlights = [
    { Icon: LayoutGrid, label: '236 Plots' }, { Icon: Leaf, label: '14 Acres' },
    { Icon: Route, label: 'Wide CC Roads' }, { Icon: Landmark, label: 'Near Art of Living' },
    { Icon: Droplets, label: 'Underground Utilities' }, { Icon: Lock, label: 'Gated Community' },
];

const allFeatures = ['Affordable Luxury', 'Clear Title', 'Tranquil Living', 'Practical Layout', 'Strategic Location', 'Fully Developed Infrastructure'];

export default function AashrithaaPage() {
    const [activeTab, setActiveTab] = useState<'infra' | 'security' | 'leisure'>('infra');

    const tabs = [
        { key: 'infra' as const, Icon: Home, label: 'Infrastructure', items: infraFeatures },
        { key: 'security' as const, Icon: Shield, label: 'Security', items: securityFeatures },
        { key: 'leisure' as const, Icon: Trees, label: 'Leisure', items: leisureFeatures },
    ];

    const activeItems = tabs.find(t => t.key === activeTab)?.items ?? [];

    return (
        <div className="min-h-screen bg-white">
            <FloatingNav />
            <PropertySectionTabs />

            {/* ═══════════════════════════════════
                HERO — full-width cinematic image stack 
            ═══════════════════════════════════ */}
            <section className="relative" id="overview">
                {/* Full-width hero image */}
                <div className="relative w-full h-[70vh] md:h-[85vh]">
                    <Image src={img1} alt="Aashrithaa Brindavan" fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white" />

                    {/* Top-left badge */}
                    <div className="absolute top-8 left-8 flex items-center gap-3">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] bg-[#FF5722] text-white shadow-lg">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            Fully Developed
                        </span>
                    </div>
                </div>

                {/* Floating info card — overlaps image bottom / sits on white */}
                <div className="max-w-5xl mx-auto px-6 -mt-24 relative z-10 pb-8">
                    <div className="bg-white rounded-3xl shadow-2xl shadow-black/10 p-8 md:p-12 border border-black/6">
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <MapPin className="h-4 w-4 text-[#FF5722]" />
                                    <span className="text-xs font-black uppercase tracking-widest text-black/40">Kanakapura Road · Near Art of Living · South Bengaluru</span>
                                </div>
                                <h1 className="font-display text-black leading-[0.95]" style={{ fontSize: 'clamp(2.8rem,6vw,5rem)' }}>
                                    Aashrithaa<br />
                                    <span className="text-[#FF7043] italic font-light">Brindavan</span>
                                </h1>
                                <p className="mt-4 text-black/55 font-light max-w-lg leading-relaxed">
                                    A lush sanctuary next to Art of Living International Center. Discover more than well-crafted
                                    plots — be embraced by nature&apos;s serene beauty in an idyllic haven.
                                </p>
                            </div>

                            {/* Stats pill column */}
                            <div className="flex flex-row md:flex-col gap-4 md:gap-3 flex-shrink-0">
                                {[{ v: '14', u: 'Acres' }, { v: '236', u: 'Plots' }, { v: '916–2155', u: 'Sq. Ft.' }, { v: '30 min', u: 'Airport' }].map(({ v, u }) => (
                                    <div key={u} className="text-center px-5 py-3 rounded-2xl bg-[#FF5722]/[0.06] border border-[#FF5722]/15">
                                        <div className="text-xl md:text-2xl font-light text-black">{v}</div>
                                        <div className="text-[9px] font-black uppercase tracking-widest text-[#FF5722] mt-0.5">{u}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA row */}
                        <div className="mt-8 pt-8 border-t border-black/6 flex flex-wrap items-center gap-4">
                            <a href="tel:+919845012345">
                                <Button className="rounded-full px-8 py-5 font-semibold text-white"
                                    style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)', boxShadow: '0 8px 30px rgba(255,87,34,0.35)' }}>
                                    <Phone className="mr-2 h-4 w-4" />Schedule a Visit
                                </Button>
                            </a>
                            <a href={brochureUrl} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-semibold text-[#FF5722] hover:text-[#E64A19] transition-colors">
                                <FileText className="h-4 w-4" />Download Brochure<ArrowRight className="h-3.5 w-3.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════
                FEATURE TAGS ROW
            ═══════════════════════════════════ */}
            <section className="py-10 px-6 bg-white" id="features">
                <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-3">
                    {allFeatures.map(f => (
                        <span key={f} className="px-5 py-2.5 rounded-full font-semibold text-sm border border-[#FF5722]/25 text-[#FF5722] bg-[#FF5722]/[0.05]">{f}</span>
                    ))}
                </div>
            </section>

            {/* ═══════════════════════════════════
                ABOUT — large pull quote + image mosaic
            ═══════════════════════════════════ */}
            <section className="py-20 px-6 md:px-12 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Image mosaic left */}
                        <div className="grid grid-cols-2 grid-rows-2 gap-3 aspect-square">
                            <div className="relative rounded-2xl overflow-hidden row-span-2">
                                <Image src={img2} alt="Brindavan View 1" fill className="object-cover" />
                            </div>
                            <div className="relative rounded-2xl overflow-hidden">
                                <Image src={img3} alt="Brindavan View 2" fill className="object-cover" />
                            </div>
                            <div className="relative rounded-2xl overflow-hidden"
                                style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                                    <span className="text-3xl font-extralight text-white">236</span>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-white/60 mt-1">Planned Plots</span>
                                </div>
                            </div>
                        </div>

                        {/* Pull quote right */}
                        <div>
                            <div className="text-7xl font-display text-[#FF5722]/15 leading-none mb-4">&ldquo;</div>
                            <p className="text-2xl md:text-3xl font-display text-black leading-snug mb-6 -mt-8">
                                Where life is all about celebrating cherished family moments amidst nature&apos;s splendour.
                            </p>
                            <p className="text-black/50 font-light leading-relaxed mb-8">
                                At Aashrithaa Brindavan, you&apos;ll discover more than just well-crafted residential plots.
                                Here, you&apos;ll be embraced by nature&apos;s serene beauty in an idyllic haven that&apos;s designed
                                to keep you connected to all that you love in life.
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {[{ v: '14', u: 'Acres', d: 'Total Land' }, { v: '916–2155', u: 'Sq. Ft.', d: 'Plot Range' }].map(({ v, u, d }) => (
                                    <div key={d} className="p-5 rounded-2xl border border-black/8 bg-black/[0.02]">
                                        <div className="text-3xl font-light text-black">{v}</div>
                                        <div className="text-[10px] font-black uppercase tracking-widest text-[#FF5722] mt-0.5">{u}</div>
                                        <div className="text-xs text-black/40 mt-0.5">{d}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════
                MASTER PLAN — left vertical image + right sticky panel
            ═══════════════════════════════════ */}
            <section className="py-20 px-6 md:px-12 bg-white" id="gallery">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FF5722] mb-3">
                            <span className="w-8 h-px bg-[#FF5722]" />Site Layout
                        </span>
                        <h2 className="font-display text-5xl text-black">Master <span className="italic font-light text-[#FF7043]">Plan</span></h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-10 items-start">
                        {/* LEFT — tall master plan */}
                        <div className="w-full lg:w-[55%]">
                            <div className="relative w-full min-h-[700px] lg:min-h-[950px] rounded-3xl overflow-hidden border border-black/8 bg-white">
                                <Image src={masterPlanImage} alt="Aashrithaa Brindavan Master Plan" fill className="object-contain object-top" />
                                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-widest text-white"
                                    style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>Master Plan</div>
                            </div>
                        </div>

                        {/* RIGHT — sticky info panel */}
                        <div className="w-full lg:w-[45%] lg:sticky lg:top-28 space-y-6">
                            <div>
                                <h3 className="font-display text-3xl text-black mb-3">A Nature-First Layout</h3>
                                <p className="text-black/55 font-light leading-relaxed text-sm">
                                    Spread across 14 lush acres near the Art of Living International Center, Aashrithaa Brindavan
                                    offers 236 thoughtfully planned plots ranging from 916 to 2,155 sq. ft. The layout is designed to
                                    maximize green open spaces while ensuring wide internal roads and complete infrastructure.
                                </p>
                            </div>

                            {/* Plot size bars */}
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
                                            <div className="h-full rounded-full bg-[#FF5722] transition-all" style={{ width: `${item.pct}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Highlights grid */}
                            <div className="rounded-2xl p-6 border border-[#FF5722]/15 bg-[#FF5722]/[0.04]">
                                <h4 className="text-[10px] font-black uppercase tracking-widest mb-5 text-[#FF5722]">Layout Highlights</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {keyHighlights.map(({ Icon, label }) => (
                                        <div key={label} className="flex items-center gap-2 text-black/65">
                                            <Icon className="h-4 w-4 text-[#FF5722] flex-shrink-0" />
                                            <span className="text-sm">{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-start gap-3 text-black/45 text-sm leading-relaxed">
                                <MapPin className="h-4 w-4 text-[#FF5722] flex-shrink-0 mt-0.5" />
                                <p>Located off <span className="text-black font-medium">Kanakapura Road</span>, adjacent to the <span className="text-black font-medium">Art of Living International Center</span> — South Bengaluru&apos;s most serene address.</p>
                            </div>

                            <a href={brochureUrl} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-[#FF5722]/25 bg-[#FF5722]/[0.04] hover:bg-[#FF5722]/10 transition-colors w-full">
                                <FileText className="h-5 w-5 text-[#FF5722] flex-shrink-0" />
                                <div>
                                    <div className="text-black text-sm font-semibold">Download Brochure</div>
                                    <div className="text-black/40 text-xs">Aashrithaa Brindavan — Full PDF</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════
                AMENITIES — tabbed cards
            ═══════════════════════════════════ */}
            <section className="py-20 px-6 md:px-12 bg-white" id="amenities">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FF5722] mb-3">
                                <span className="w-8 h-px bg-[#FF5722]" />Facilities
                            </span>
                            <h2 className="font-display text-5xl text-black">What&apos;s <span className="italic font-light text-[#FF7043]">Included</span></h2>
                        </div>
                        {/* Tab switcher */}
                        <div className="flex gap-2">
                            {tabs.map(({ key, label }) => (
                                <button key={key} onClick={() => setActiveTab(key)}
                                    className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
                                    style={{
                                        background: activeTab === key ? 'linear-gradient(135deg,#FF5722,#E64A19)' : 'rgba(0,0,0,0.04)',
                                        color: activeTab === key ? '#fff' : 'rgba(0,0,0,0.4)',
                                        boxShadow: activeTab === key ? '0 4px 16px rgba(255,87,34,0.3)' : 'none',
                                    }}>
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Active items grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {activeItems.map((f, i) => (
                            <div key={f}
                                className="flex items-start gap-4 p-5 rounded-2xl border border-black/6 bg-black/[0.01] hover:border-[#FF5722]/25 hover:bg-[#FF5722]/[0.03] transition-all">
                                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>
                                    <CheckCircle2 className="h-4 w-4 text-white" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-[#FF5722] mb-1">{String(i + 1).padStart(2, '0')}</div>
                                    <div className="text-sm text-black/65 font-medium">{f}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════
                LOCATION — full-width map + overlay
            ═══════════════════════════════════ */}
            <section className="py-20 px-6 md:px-12 bg-white" id="location">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                        <div>
                            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FF5722] mb-3">
                                <span className="w-8 h-px bg-[#FF5722]" />Location
                            </span>
                            <h2 className="font-display text-5xl text-black">South Bengaluru&apos;s <span className="italic font-light text-[#FF7043]">Best Address</span></h2>
                        </div>
                    </div>

                    {/* Map full-width with side list below on mobile, beside on desktop */}
                    <div className="grid md:grid-cols-3 gap-6 items-start">
                        {/* Map — 2 cols */}
                        <div className="md:col-span-2 rounded-3xl overflow-hidden border border-black/8"
                            style={{ height: 500, boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.7212956304256!2d77.51508937483818!3d12.796594187502942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae41002f1c1a77%3A0xa9d238c4837a6403!2sAashrita%20Brindavan!5e0!3m2!1sen!2sin!4v1772036752115!5m2!1sen!2sin"
                                width="100%" height="100%" style={{ border: 0 }}
                                allowFullScreen loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Aashrithaa Brindavan Location"
                            />
                        </div>

                        {/* Proximity list — 1 col */}
                        <div className="rounded-3xl border border-black/8 overflow-hidden divide-y divide-black/6">
                            <div className="px-6 py-4 bg-[#FF5722]/[0.04]">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-[#FF5722]" />
                                    <span className="text-xs font-black uppercase tracking-widest text-black/50">Connectivity</span>
                                </div>
                            </div>
                            {([
                                { Icon: Plane, label: 'International Airport', time: '30 mins' },
                                { Icon: Building2, label: 'Bangalore City', time: '40 mins' },
                                { Icon: Route, label: 'Kanakapura Road', time: '2 mins' },
                                { Icon: Landmark, label: 'Art of Living Center', time: 'Adjacent' },
                                { Icon: Hospital, label: 'Nearest Hospital', time: '15 mins' },
                                { Icon: GraduationCap, label: 'Schools & Colleges', time: '10 mins' },
                                { Icon: ShoppingBag, label: 'Shopping Areas', time: '10 mins' },
                            ] as { Icon: React.ElementType; label: string; time: string }[]).map(({ Icon, label, time }) => (
                                <div key={label} className="flex items-center justify-between px-6 py-3.5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-7 h-7 rounded-lg bg-[#FF5722]/8 flex items-center justify-center flex-shrink-0">
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
            </section>

            {/* ═══════════════════════════════════
                CTA — image + text side by side
            ═══════════════════════════════════ */}
            <section className="py-20 px-6 md:px-12 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="rounded-3xl overflow-hidden grid md:grid-cols-2"
                        style={{ boxShadow: '0 24px 80px rgba(255,87,34,0.15)' }}>
                        {/* Left image */}
                        <div className="relative min-h-[280px] md:min-h-0">
                            <Image src={img1} alt="Aashrithaa Brindavan" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#FF5722]/30" />
                        </div>
                        {/* Right content */}
                        <div className="p-10 md:p-14 flex flex-col justify-center"
                            style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>
                            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] mb-8 border border-white/25 bg-white/10 text-white self-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />Limited Plots
                            </div>
                            <h2 className="font-display text-white mb-2" style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1 }}>
                                Your Dream Awaits
                            </h2>
                            <h2 className="font-display text-white/60 italic font-light mb-6" style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1.1 }}>
                                in Brindavan
                            </h2>
                            <p className="text-white/70 font-light mb-8 text-sm leading-relaxed">
                                Fully developed. Clear title. Ready for registration. Book your plot today and be part of an extraordinary community.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a href="tel:+919845012345">
                                    <Button className="rounded-full px-8 py-5 font-semibold bg-white text-[#FF5722] hover:bg-white/90 w-full sm:w-auto"
                                        style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}>
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
