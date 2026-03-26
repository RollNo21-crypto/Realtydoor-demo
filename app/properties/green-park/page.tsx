'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FloatingNav } from '@/components/floating-nav';
import { PropertySectionTabs } from '@/components/property-section-tabs';
import { Button } from '@/components/ui/button';
import {
    MapPin, Phone, CheckCircle2, ArrowLeft, Home, Shield, Trees,
    Plane, Building2, Route, Hospital, GraduationCap, ShoppingBag,
    LayoutGrid, Leaf, Landmark, Droplets, Lock, FileText,
    Maximize, X, ChevronLeft, ChevronRight,
} from 'lucide-react';
import { StatsTickerBanner } from '@/components/stats-ticker-banner';
import { PropertyCTA } from '@/components/property-cta';
import { BannerPlaceholder } from '@/components/promo-banner';

const brochureUrl = '/green-park/brochure.pdf';
const mapImage = '/green-park/image-20.jpeg'; // map.jpeg was copied as image-20

// All 24 images including map; gallery excludes the map (image-20)
const galleryImages = Array.from({ length: 24 }, (_, i) => `/green-park/image-${i + 1}.jpeg`).filter((_, i) => i !== 19);
const heroImages = galleryImages.slice(0, 4);

const plotStats = [
    { value: '18', unit: 'Acres', label: 'DTCP Approved' },
    { value: '272', unit: 'Plots', label: 'Total Units' },
    { value: '1000–2400', unit: 'Sq. Ft.', label: 'Plot Sizes' },
    { value: 'Fast', unit: 'Developing', label: 'Connectivity' },
];

const infraFeatures = ['Black Top Roads (30 Ft & 40 Ft)', 'Underground Drainage with STP', '24/7 Water Supply', 'Overhead Water Tank with Adequate Capacity', 'Underground Electrification', 'Compound Wall'];
const securityFeatures = ['Entrance Gate', '24/7 Security', 'CCTV Surveillance'];
const leisureFeatures = ['Club House', 'Jogging Track & Footpaths', "Children's Play Area", 'Yoga and Meditation Area', 'Park with Landscape Garden', 'Avenue Plantation'];

export default function GreenParkPage() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [heroIdx, setHeroIdx] = useState(0);

    const openLb = (i: number) => { setLightboxIndex(i); setLightboxOpen(true); };
    const nextImg = (e: React.MouseEvent) => { e.stopPropagation(); setLightboxIndex((p) => (p + 1) % galleryImages.length); };
    const prevImg = (e: React.MouseEvent) => { e.stopPropagation(); setLightboxIndex((p) => (p - 1 + galleryImages.length) % galleryImages.length); };

    useEffect(() => {
        const t = setInterval(() => setHeroIdx((p) => (p + 1) % heroImages.length), 4500);
        return () => clearInterval(t);
    }, []);

    useEffect(() => {
        if (!lightboxOpen) return;
        const h = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') setLightboxIndex((p) => (p + 1) % galleryImages.length);
            if (e.key === 'ArrowLeft') setLightboxIndex((p) => (p - 1 + galleryImages.length) % galleryImages.length);
            if (e.key === 'Escape') setLightboxOpen(false);
        };
        window.addEventListener('keydown', h);
        return () => window.removeEventListener('keydown', h);
    }, [lightboxOpen]);

    return (
        <div className="min-h-screen bg-white">
            <FloatingNav />
            <PropertySectionTabs />

            {/* HERO */}
            <section className="relative w-full flex flex-col justify-end pb-8 pt-32 px-4 md:px-8 overflow-hidden" id="overview" style={{ minHeight: '90vh' }}>
                <div className="absolute inset-0 bg-black">
                    {heroImages.map((src, i) => (
                        <Image key={i} src={src} alt={`Green Park ${i + 1}`} fill priority={i === 0}
                            className={`object-cover transition-all duration-[2500ms] ${i === heroIdx ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`} />
                    ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/90 pointer-events-none" />
                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <div className="bg-black/20 backdrop-blur-2xl rounded-[2rem] border border-white/15 p-8 md:p-12 shadow-2xl">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                            <div className="flex-1">
                                <div className="flex flex-wrap gap-3 mb-6">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-[#FF5722] text-white">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />Ready for Registration
                                    </span>
                                    <div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-widest text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                                        <MapPin className="h-3 w-3 text-[#FF5722]" /> Chintamani Road
                                    </div>
                                </div>
                                <h1 className="font-display text-white leading-[0.95] mb-6" style={{ fontSize: 'clamp(3.5rem,7vw,6.5rem)' }}>
                                    Green Park<br /><span className="text-[#FF7043] italic font-light">Chintamani</span>
                                </h1>
                                <p className="text-white/55 font-light leading-relaxed max-w-md text-sm md:text-base">
                                    18 acres, 272 thoughtfully planned plots in one of the fastest-growing corridors. DTCP approved, fully developed, ready to register.
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 min-w-[260px]">
                                <a href="tel:+919845012345">
                                    <Button className="w-full rounded-full px-8 py-5 font-semibold text-white justify-center"
                                        style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)', boxShadow: '0 8px 28px rgba(255,87,34,0.5)' }}>
                                        <Phone className="mr-2 h-4 w-4" />Book a Site Visit
                                    </Button>
                                </a>
                                <a href={brochureUrl} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/35 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
                                    <FileText className="h-4 w-4" />Download Brochure
                                </a>
                                <div className="grid grid-cols-2 gap-px rounded-2xl overflow-hidden border border-white/15 bg-white/10">
                                    {plotStats.map(({ value, unit, label }) => (
                                        <div key={label} className="px-4 py-3 border-r border-b border-white/10">
                                            <div className="text-white font-semibold text-sm">{value} <span className="text-white/60 text-xs">{unit}</span></div>
                                            <div className="text-white/45 text-[9px] font-black uppercase tracking-widest mt-0.5">{label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* STATS BAR */}
            <section className="py-10 px-6 md:px-12 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="rounded-2xl grid grid-cols-2 md:grid-cols-4" style={{ background: 'linear-gradient(135deg,#FF5722,#FF7043,#E64A19)', boxShadow: '0 24px 60px rgba(255,87,34,0.35)' }}>
                        {plotStats.map((s, i) => (
                            <div key={s.label} className="flex flex-col items-center justify-center py-8 px-4 text-center" style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : undefined }}>
                                <span className="text-3xl md:text-4xl font-extralight text-white tracking-tight">{s.value}</span>
                                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/60 mt-1">{s.unit}</span>
                                <span className="text-xs text-white/45 mt-0.5">{s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <StatsTickerBanner />

            {/* ABOUT */}
            <section className="py-20 px-6 md:px-12 bg-white border-t border-black/6" id="features">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6 text-[#FF5722]"><span className="w-8 h-px bg-[#FF5722]" />About Green Park</span>
                        <h2 className="font-display text-5xl md:text-6xl text-black leading-tight mb-8">Capitalize on<br /><span className="italic font-light text-[#FF7043]">Chintamani&apos;s</span> Future</h2>
                        <p className="text-lg font-light leading-relaxed mb-6 text-black/60">Green Park is designed to deliver on all of the important bits — convenience, comfort, space, and wellbeing. It promises an effortlessly connected lifestyle through the wealth of amenities and established infrastructure.</p>
                        <p className="text-base font-light leading-relaxed text-black/40">Come, capitalize on immense potential and secure a stake in its bright future. Fully developed plots, ready for registration.</p>
                    </div>
                    <div className="relative pb-8">
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer group" onClick={() => openLb(8)}>
                            <Image src={galleryImages[8]} alt="Green Park Community" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                        <div className="absolute -bottom-4 -left-6 rounded-2xl p-6" style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)', boxShadow: '0 16px 40px rgba(255,87,34,0.45)' }}>
                            <div className="grid grid-cols-2 gap-6 text-center">
                                <div><div className="text-3xl font-light text-white">272</div><div className="text-[10px] font-black uppercase tracking-wider text-white/60 mt-0.5">Total Plots</div></div>
                                <div><div className="text-3xl font-light text-white">18</div><div className="text-[10px] font-black uppercase tracking-wider text-white/60 mt-0.5">Acres</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MASTER PLAN */}
            <section className="py-24 bg-black" id="gallery">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest mb-4 text-[#FF5722]"><span className="w-8 h-px bg-[#FF5722]" />Site Layout<span className="w-8 h-px bg-[#FF5722]" /></span>
                        <h2 className="font-display text-5xl text-white">Master <span className="italic font-light text-[#FF7043]">Plan</span></h2>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-10 items-start">
                        <div className="w-full lg:w-[55%]">
                            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-[#FF5722]/20 bg-white cursor-pointer group" onClick={() => openLb(0)}>
                                <Image src={mapImage} alt="Green Park Master Plan" fill className="object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                                <div className="absolute top-4 left-4 rounded-xl px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white" style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>Master Plan</div>
                                <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                                    <Maximize className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                {[5, 6].map(idx => (
                                    <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group" onClick={() => openLb(idx)}>
                                        <Image src={galleryImages[idx]} alt={`Green Park ${idx + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center pointer-events-none">
                                            <Maximize className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-[45%] lg:sticky lg:top-32 space-y-8">
                            <div>
                                <h3 className="font-display text-3xl text-white mb-3">Thoughtfully Planned Layout</h3>
                                <p className="text-white/55 font-light leading-relaxed">Green Park spans 18 acres with 272 meticulously planned plots ranging from 1,000 to 2,400 sq. ft. Wide 30 ft and 40 ft black-top roads weave through the community, ensuring excellent accessibility and a premium living experience.</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-black uppercase tracking-widest mb-4 text-[#FF5722]">Pricing & Dimensions</h4>
                                {[{ range: '1,000 sq. ft.', price: '₹19,50,000', label: '@ ₹1,950/sq.ft' }, { range: '1,200 sq. ft.', price: '₹23,40,000', label: '@ ₹1,950/sq.ft' }, { range: '1,500 sq. ft.', price: '₹29,25,000', label: '@ ₹1,950/sq.ft' }, { range: '2,400 sq. ft.', price: '₹46,80,000', label: '@ ₹1,950/sq.ft' }].map(item => (
                                    <div key={item.range} className="mb-4 flex justify-between text-sm border-b border-white/10 pb-2">
                                        <span className="text-white font-medium">{item.range} <span className="text-white/40 ml-2">{item.label}</span></span>
                                        <span className="text-[#FF5722] font-bold">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="rounded-2xl p-6 border border-[#FF5722]/20 bg-[#FF5722]/[0.06]">
                                <h4 className="text-xs font-black uppercase tracking-widest mb-5 text-[#FF5722]">Layout Highlights</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {([{ Icon: LayoutGrid, l: '272 Plots' }, { Icon: Route, l: '30 & 40 Ft Roads' }, { Icon: Leaf, l: 'Green Zones' }, { Icon: Landmark, l: 'Central Clubhouse' }, { Icon: Droplets, l: 'Underground Drainage' }, { Icon: Lock, l: 'Gated Perimeter' }] as { Icon: React.ElementType; l: string }[]).map(({ Icon, l }) => (
                                        <div key={l} className="flex items-center gap-2 text-white/70"><Icon className="h-4 w-4 text-[#FF5722] flex-shrink-0" /><span className="text-sm">{l}</span></div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-3 text-sm text-white/40 leading-relaxed"><MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#FF5722]" /><p>Located in <span className="text-white font-medium">Chintamani</span> — one of the fastest-growing corridors in the region.</p></div>
                            <a href={brochureUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-[#FF5722]/25 bg-[#FF5722]/[0.08] hover:bg-[#FF5722]/15 transition-colors w-full">
                                <FileText className="h-5 w-5 text-[#FF5722] flex-shrink-0" />
                                <div><div className="text-white text-sm font-semibold">Download Brochure</div><div className="text-white/40 text-xs">Green Park — Full PDF</div></div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* AMENITIES */}
            <section className="py-28 bg-white" id="amenities">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest mb-4 text-[#FF5722]"><span className="w-8 h-px bg-[#FF5722]" />Facilities & Amenities<span className="w-8 h-px bg-[#FF5722]" /></span>
                        <h2 className="font-display text-5xl text-black">Everything You <span className="italic font-light text-[#FF7043]">Need</span></h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="rounded-3xl p-8 border border-black/10 bg-black/[0.03]">
                            <div className="w-12 h-12 rounded-2xl bg-[#FF5722]/15 flex items-center justify-center mb-6"><Home className="h-6 w-6 text-[#FF5722]" /></div>
                            <h3 className="font-display text-2xl text-black mb-6">Infrastructure</h3>
                            <ul className="space-y-4">{infraFeatures.map(f => <li key={f} className="flex items-start gap-3 text-black/55"><CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#FF5722]" /><span className="text-sm leading-snug">{f}</span></li>)}</ul>
                        </div>
                        <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(145deg,#FF5722,#E64A19)' }}>
                            <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mb-6"><Shield className="h-6 w-6 text-white" /></div>
                            <h3 className="font-display text-2xl text-white mb-6">Security</h3>
                            <ul className="space-y-4">{securityFeatures.map(f => <li key={f} className="flex items-start gap-3 text-white/75"><CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-white" /><span className="text-sm leading-snug font-medium">{f}</span></li>)}</ul>
                        </div>
                        <div className="rounded-3xl p-8 border border-black/10 bg-black/[0.03]">
                            <div className="w-12 h-12 rounded-2xl bg-[#FF5722]/15 flex items-center justify-center mb-6"><Trees className="h-6 w-6 text-[#FF5722]" /></div>
                            <h3 className="font-display text-2xl text-black mb-6">Leisure</h3>
                            <ul className="space-y-4">{leisureFeatures.map(f => <li key={f} className="flex items-start gap-3 text-black/55"><CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#FF5722]" /><span className="text-sm leading-snug">{f}</span></li>)}</ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* GALLERY */}
            <section className="py-20 px-6 md:px-12 bg-[#FAFAFA] border-t border-black/5" id="photo-gallery">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 text-center flex flex-col items-center">
                        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FF5722] mb-3"><span className="w-8 h-px bg-[#FF5722]" />Life at Green Park</span>
                        <h2 className="font-display text-5xl text-black">Property <span className="italic font-light text-[#FF7043]">Gallery</span></h2>
                        <p className="text-black/40 text-sm font-light max-w-md mt-4 leading-relaxed">18 acres of curated green living — where every plot is a window into Chintamani&apos;s bright future.</p>
                    </div>
                    <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4">
                        {galleryImages.map((src, idx) => (
                            <div key={idx} className="relative overflow-hidden rounded-2xl break-inside-avoid group shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5 bg-white cursor-pointer" onClick={() => openLb(idx)}>
                                <Image src={src} alt={`Green Park ${idx + 1}`} width={600} height={800} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 pointer-events-none">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="text-white font-bold text-sm">Site View {idx + 1}</div>
                                        <div className="text-white/80 text-xs mt-1">Green Park · Chintamani</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LOCATION */}
            <section className="py-28 bg-white" id="location">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6 text-[#FF5722]"><span className="w-8 h-px bg-[#FF5722]" />Location</span>
                            <h2 className="font-display text-5xl text-black leading-tight mb-8">Perfectly <span className="italic font-light text-[#FF7043]">Connected</span></h2>
                            <p className="text-black/55 text-lg font-light leading-relaxed mb-10">Green Park is strategically located in Chintamani, offering excellent road connectivity and investment appreciation.</p>
                            <a href="https://maps.app.goo.gl/q7dc8hetG8t2mUAz6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF5722]/10 text-[#FF5722] font-bold hover:bg-[#FF5722]/20 transition-colors mb-10 border border-[#FF5722]/20">
                                <Route className="h-4 w-4" /> Open in Google Maps
                            </a>
                            <div className="space-y-0">
                                {([{ Icon: Plane, label: 'International Airport', time: '20 mins' }, { Icon: Building2, label: 'Bangalore City Centre', time: '35 mins' }, { Icon: Route, label: 'NH-75 (Old Madras Road)', time: '5 mins' }, { Icon: Hospital, label: 'Nearest Hospital', time: '10 mins' }, { Icon: GraduationCap, label: 'Reputed Schools & Colleges', time: '10 mins' }, { Icon: ShoppingBag, label: 'Shopping & Markets', time: '5 mins' }] as { Icon: React.ElementType; label: string; time: string }[]).map(({ Icon, label, time }) => (
                                    <div key={label} className="flex items-center justify-between py-4 border-b border-black/10">
                                        <div className="flex items-center gap-3"><Icon className="h-4 w-4 text-[#FF5722] flex-shrink-0" /><span className="text-black/65 text-sm">{label}</span></div>
                                        <span className="text-sm font-bold text-[#FF5722]">{time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-3xl overflow-hidden border border-[#FF5722]/20" style={{ height: 500, boxShadow: '0 20px 60px rgba(0,0,0,0.12)' }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15535.132808269554!2d78.04694435!3d13.4005556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI0JzAyLjAiTiA3OMKwMDInNDkuMCJF!5e0!3m2!1sen!2sin!4v1622549293!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Green Park Location Map" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-8 bg-background"><BannerPlaceholder tag="Strategic Investment" headline="Secure Your Financial Future" subtext="Discover high-growth corridor investments handpicked by our expert analysts to maximize your returns." ctaLabel="Speak to an Analyst" ctaHref="/contact" theme="dark" /></div>
            <PropertyCTA propertyName="Green Park" image={galleryImages[0]} variant="split" brochureUrl={brochureUrl} />
            <div className="py-10 text-center bg-white border-t border-black/10"><Link href="/properties" className="inline-flex items-center font-semibold text-[#FF5722] hover:text-[#FF7043] transition-colors"><ArrowLeft className="mr-2 h-4 w-4" />Back to All Plots</Link></div>

            {/* LIGHTBOX */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center" onClick={() => setLightboxOpen(false)}>
                    <button onClick={() => setLightboxOpen(false)} className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white border border-white/20 z-10"><X className="h-5 w-5" /></button>
                    <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white border border-white/20 z-10"><ChevronLeft className="h-6 w-6" /></button>
                    <div className="relative max-w-5xl max-h-[85vh] w-full mx-12" onClick={e => e.stopPropagation()}>
                        <Image src={galleryImages[lightboxIndex]} alt={`Gallery ${lightboxIndex + 1}`} width={1400} height={900} className="w-full h-auto max-h-[85vh] object-contain rounded-2xl" />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">{lightboxIndex + 1} / {galleryImages.length}</div>
                    </div>
                    <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white border border-white/20 z-10"><ChevronRight className="h-6 w-6" /></button>
                </div>
            )}
        </div>
    );
}
