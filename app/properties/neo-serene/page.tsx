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
    LayoutGrid, Leaf, Landmark, Droplets, Lock, Star, FileText,
    Maximize, X, ChevronLeft, ChevronRight,
} from 'lucide-react';
import { StatsTickerBanner } from '@/components/stats-ticker-banner';
import { PropertyCTA } from '@/components/property-cta';
import { BannerPlaceholder } from '@/components/promo-banner';

const brochureUrl = '/aashrithaa-serene/brochure.pdf';

const galleryImages = Array.from({ length: 16 }, (_, i) => `/aashrithaa-serene/image-${i + 1}.jpeg`);
const heroImages = galleryImages.slice(0, 4);

const infraFeatures = ['Black Top Roads (30 Ft & 40 Ft)', 'Underground Drainage with STP', '24/7 Water Supply', 'Overhead Water Tank', 'Underground Electrification', 'Compound Wall'];
const securityFeatures = ['Entrance Gate', '24/7 Security', 'CCTV Surveillance'];
const leisureFeatures = ['Club House', 'Jogging Track & Footpaths', "Children's Play Area", 'Yoga and Meditation Area', 'Park with Landscape Garden', 'Avenue Plantation'];

export default function NeoSerenePage() {
    const [openAmenity, setOpenAmenity] = useState<string | null>('infra');
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

    const amenityGroups = [
        { key: 'infra', Icon: Home, label: 'Infrastructure', items: infraFeatures },
        { key: 'security', Icon: Shield, label: 'Security', items: securityFeatures },
        { key: 'leisure', Icon: Trees, label: 'Leisure', items: leisureFeatures },
    ];

    return (
        <div className="min-h-screen bg-white">
            <FloatingNav />
            <PropertySectionTabs />

            {/* HERO */}
            <section className="relative w-full flex flex-col justify-end pb-8 pt-32 px-4 md:px-8 overflow-hidden" id="overview" style={{ minHeight: '90vh' }}>
                <div className="absolute inset-0 bg-black">
                    {heroImages.map((src, i) => (
                        <Image key={i} src={src} alt={`Serene ${i + 1}`} fill priority={i === 0}
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
                                        <MapPin className="h-3 w-3 text-[#FF5722]" /> Hoskote · Bengaluru
                                    </div>
                                </div>
                                <h1 className="font-display text-white leading-[0.95] mb-6" style={{ fontSize: 'clamp(3.5rem,7vw,6.5rem)' }}>
                                    Aashrithaa<br /><span className="text-[#FF7043] italic font-light">Serene</span>
                                </h1>
                                <p className="text-white/55 font-light leading-relaxed max-w-md text-sm md:text-base">
                                    Hoskote&apos;s most tranquil development — 10 acres, 172 exclusive plots, offering a pure escape while keeping you perfectly connected.
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
                                    {[{ v: '10 Acres', u: 'Total Land' }, { v: '172 Plots', u: 'Exclusive Units' }, { v: '1200–2400', u: 'Sq.Ft Range' }, { v: 'Hoskote', u: 'Location' }].map(({ v, u }) => (
                                        <div key={u} className="px-4 py-3 border-r border-b border-white/10">
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

            <StatsTickerBanner />

            {/* ABOUT */}
            <section className="py-20 px-6 md:px-12 bg-white border-t border-black/6" id="features">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer group" onClick={() => openLb(7)}>
                        <Image src={galleryImages[7]} alt="Aashrithaa Serene" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-5 left-5 right-5 rounded-2xl p-5" style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)', boxShadow: '0 8px 24px rgba(255,87,34,0.5)' }}>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div><div className="text-2xl font-light text-white">172</div><div className="text-[9px] font-black uppercase tracking-widest text-white/60">Total Plots</div></div>
                                <div><div className="text-2xl font-light text-white">10</div><div className="text-[9px] font-black uppercase tracking-widest text-white/60">Acres</div></div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-5 text-[#FF5722]"><span className="w-8 h-px bg-[#FF5722]" />About the Project</span>
                        <h2 className="font-display text-4xl md:text-5xl text-black leading-tight mb-6">Tranquil Living,<br /><span className="italic font-light text-[#FF7043]">Bright Future</span></h2>
                        <p className="text-black/55 font-light leading-relaxed mb-6">Serene is designed to deliver on all of the important bits — convenience, comfort, space, and wellbeing. It promises an effortlessly connected lifestyle through the wealth of amenities and established infrastructure.</p>
                        <p className="text-black/40 font-light leading-relaxed text-sm mb-8">Fully developed plots, ready for registration. Come capitalize on Hoskote&apos;s immense potential and secure a stake in its bright future.</p>
                        <div className="flex flex-wrap gap-2">
                            {['Affordable Luxury', 'Clear Title', 'Tranquil Living', 'Practical Layout', 'Strategic Location', 'Fully Developed'].map(f => (
                                <span key={f} className="px-3 py-1.5 rounded-full text-xs font-semibold border border-[#FF5722]/25 text-[#FF5722] bg-[#FF5722]/[0.06]">{f}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* MASTER PLAN */}
            <section className="py-20 px-6 md:px-12 bg-white border-t border-black/6" id="gallery">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FF5722] mb-3"><span className="w-8 h-px bg-[#FF5722]" />Site Layout</span>
                        <h2 className="font-display text-5xl text-black">Master <span className="italic font-light text-[#FF7043]">Plan</span></h2>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-10 items-start">
                        <div className="w-full lg:w-[55%]">
                            <div className="relative w-full rounded-3xl bg-white border border-black/8 overflow-hidden drop-shadow-xl cursor-pointer group" onClick={() => openLb(0)}>
                                <Image src="/aashrithaa-serene/map.avif" alt="Aashrithaa Serene Master Plan" width={1200} height={1200}
                                    className="w-full h-auto object-contain object-top group-hover:scale-[1.02] transition-transform duration-700" />
                                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-widest text-white" style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>Master Plan</div>
                                <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                                    <Maximize className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                {[5, 6].map(idx => (
                                    <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-sm" onClick={() => openLb(idx)}>
                                        <Image src={galleryImages[idx]} alt={`Serene ${idx + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
                                            <Maximize className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-[45%] lg:sticky lg:top-28 space-y-6">
                            <div>
                                <h3 className="font-display text-3xl text-black mb-3">Thoughtfully Planned</h3>
                                <p className="text-black/55 font-light leading-relaxed text-sm">Aashrithaa Serene spans 10 acres with 172 meticulously planned plots ranging from 1,200 to 2,400 sq. ft., with wide 30 ft and 40 ft black-top roads.</p>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 text-[#FF5722]">Pricing & Dimensions</h4>
                                {[{ range: '1,200 sq. ft.', price: '₹54,00,000', label: '@ ₹4,500/sq.ft' }, { range: '1,500 sq. ft.', price: '₹67,50,000', label: '@ ₹4,500/sq.ft' }, { range: '2,400 sq. ft.', price: '₹1,08,00,000', label: '@ ₹4,500/sq.ft' }].map(item => (
                                    <div key={item.range} className="mb-4 flex justify-between text-xs border-b border-black/6 pb-2">
                                        <span className="text-black font-medium">{item.range} <span className="text-black/40 ml-1">{item.label}</span></span>
                                        <span className="text-[#FF5722] font-bold">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="rounded-2xl p-6 border border-[#FF5722]/15 bg-[#FF5722]/[0.04]">
                                <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 text-[#FF5722]">Layout Highlights</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {([{ Icon: LayoutGrid, l: '172 Plots' }, { Icon: Route, l: '30 & 40 Ft Roads' }, { Icon: Leaf, l: 'Green Zones' }, { Icon: Landmark, l: 'Clubhouse' }, { Icon: Droplets, l: 'Underground Drainage' }, { Icon: Lock, l: 'Compound Wall' }] as { Icon: React.ElementType; l: string }[]).map(({ Icon, l }) => (
                                        <div key={l} className="flex items-center gap-2 text-black/65"><Icon className="h-4 w-4 text-[#FF5722] flex-shrink-0" /><span className="text-sm">{l}</span></div>
                                    ))}
                                </div>
                            </div>
                            <a href={brochureUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-[#FF5722]/25 bg-[#FF5722]/[0.04] hover:bg-[#FF5722]/10 transition-colors w-full">
                                <FileText className="h-5 w-5 text-[#FF5722] flex-shrink-0" />
                                <div><div className="text-black text-sm font-semibold">Download Brochure</div><div className="text-black/40 text-xs">Aashrithaa Serene — Full PDF</div></div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* GALLERY */}
            <section className="py-20 px-6 md:px-12 bg-[#FAFAFA] border-t border-black/5" id="photo-gallery">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 text-center flex flex-col items-center">
                        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FF5722] mb-3"><span className="w-8 h-px bg-[#FF5722]" />Life at Serene</span>
                        <h2 className="font-display text-5xl text-black">Property <span className="italic font-light text-[#FF7043]">Gallery</span></h2>
                        <p className="text-black/40 text-sm font-light max-w-md mt-4 leading-relaxed">10 acres of serene, curated green living — where every plot is thoughtfully planned for comfort and aspiration.</p>
                    </div>
                    <div className="columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-4 space-y-4">
                        {galleryImages.map((src, idx) => (
                            <div key={idx} className="relative overflow-hidden rounded-2xl break-inside-avoid group shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5 bg-white cursor-pointer" onClick={() => openLb(idx)}>
                                <Image src={src} alt={`Serene ${idx + 1}`} width={600} height={800} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 pointer-events-none">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="text-white font-bold text-sm">Site View {idx + 1}</div>
                                        <div className="text-white/80 text-xs mt-1">Aashrithaa Serene · Hoskote</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AMENITIES */}
            <section className="py-20 px-6 md:px-12 bg-white border-t border-black/6" id="amenities">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-5 text-[#FF5722]"><span className="w-8 h-px bg-[#FF5722]" />Facilities & Amenities</span>
                        <h2 className="font-display text-4xl md:text-5xl text-black mb-10">Everything <span className="italic font-light text-[#FF7043]">Included</span></h2>
                        <div className="space-y-3">
                            {amenityGroups.map(({ key, Icon, label, items }) => (
                                <div key={key} className="rounded-2xl border overflow-hidden" style={{ borderColor: openAmenity === key ? 'rgba(255,87,34,0.35)' : 'rgba(0,0,0,0.08)' }}>
                                    <button className="w-full flex items-center justify-between p-5 text-left transition-colors" style={{ background: openAmenity === key ? 'rgba(255,87,34,0.06)' : 'rgba(0,0,0,0.01)' }} onClick={() => setOpenAmenity(openAmenity === key ? null : key)}>
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: openAmenity === key ? 'linear-gradient(135deg,#FF5722,#E64A19)' : 'rgba(0,0,0,0.05)' }}>
                                                <Icon className={`h-4 w-4 ${openAmenity === key ? 'text-white' : 'text-black/40'}`} />
                                            </div>
                                            <span className={`font-semibold text-sm ${openAmenity === key ? 'text-black' : 'text-black/50'}`}>{label}</span>
                                        </div>
                                        <span className={`text-sm font-black ${openAmenity === key ? 'text-[#FF5722]' : 'text-black/20'}`}>{openAmenity === key ? '–' : '+'}</span>
                                    </button>
                                    {openAmenity === key && (
                                        <div className="px-5 pb-5 pt-1"><ul className="space-y-3">{items.map(f => (
                                            <li key={f} className="flex items-start gap-3 text-black/55"><CheckCircle2 className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#FF5722]" /><span className="text-sm">{f}</span></li>
                                        ))}</ul></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4 mt-0 md:mt-20">
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer group" onClick={() => openLb(10)}>
                            <Image src={galleryImages[10]} alt="Serene Amenities" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4"><div className="text-white font-display text-xl">Thoughtfully Designed</div><div className="text-white/65 text-xs mt-0.5">10 acres · 172 plots · Ready for registration</div></div>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {[{ Icon: Star, label: 'Clear Title' }, { Icon: Leaf, label: 'Green Zones' }, { Icon: Lock, label: 'Gated' }].map(({ Icon, label }) => (
                                <div key={label} className="rounded-2xl p-4 flex flex-col items-center gap-2 border border-black/8 bg-black/[0.02] text-center"><Icon className="h-5 w-5 text-[#FF5722]" /><span className="text-xs text-black/50 font-medium">{label}</span></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* LOCATION */}
            <section className="py-20 px-6 md:px-12 bg-white border-t border-black/6" id="location">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12">
                        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#FF5722] mb-3"><span className="w-8 h-px bg-[#FF5722]" />Connectivity</span>
                        <h2 className="font-display text-5xl text-black">Perfectly <span className="italic font-light text-[#FF7043]">Located</span></h2>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        <div className="w-full lg:w-[55%]">
                            <a href="https://maps.app.goo.gl/W5Z7hvbVQnpmMjeC9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF5722]/10 text-[#FF5722] font-bold hover:bg-[#FF5722]/20 transition-colors mb-6 border border-[#FF5722]/25">
                                <Route className="h-4 w-4" /> Open in Google Maps
                            </a>
                            <div className="rounded-3xl overflow-hidden border border-black/8" style={{ height: 490, boxShadow: '0 16px 50px rgba(0,0,0,0.08)' }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.662906338247!2d77.83560417484411!3d13.120528587208671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17336f43a7ed%3A0x21783a63d1cc78ac!2sNeo%20Serene!5e0!3m2!1sen!2sin!4v1772035760946!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Aashrithaa Serene Map" />
                            </div>
                        </div>
                        <div className="w-full lg:w-[45%] lg:sticky lg:top-28">
                            <div className="rounded-3xl border border-black/8 overflow-hidden divide-y divide-black/6">
                                <div className="px-6 py-5 bg-[#FF5722]/[0.04]"><div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#FF5722]" /><span className="text-xs font-black uppercase tracking-widest text-black/50">Near Hoskote, Bengaluru</span></div></div>
                                {([{ Icon: Plane, label: 'International Airport', time: '20 mins' }, { Icon: Building2, label: 'Bangalore City Centre', time: '35 mins' }, { Icon: Route, label: 'NH-75 (Old Madras Road)', time: '5 mins' }, { Icon: Hospital, label: 'Nearest Hospital', time: '10 mins' }, { Icon: GraduationCap, label: 'Schools & Colleges', time: '10 mins' }, { Icon: ShoppingBag, label: 'Shopping & Markets', time: '5 mins' }] as { Icon: React.ElementType; label: string; time: string }[]).map(({ Icon, label, time }) => (
                                    <div key={label} className="flex items-center justify-between px-6 py-4">
                                        <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-xl bg-[#FF5722]/8 flex items-center justify-center flex-shrink-0"><Icon className="h-3.5 w-3.5 text-[#FF5722]" /></div><span className="text-black/60 text-sm">{label}</span></div>
                                        <span className="text-sm font-bold text-[#FF5722] flex-shrink-0 ml-4">{time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-8 bg-background"><BannerPlaceholder tag="Strategic Investment" headline="Secure Your Financial Future" subtext="Discover high-growth corridor investments handpicked by our expert analysts to maximize your returns." ctaLabel="Speak to an Analyst" ctaHref="/contact" theme="dark" /></div>
            <PropertyCTA propertyName="Aashrithaa Serene" image={galleryImages[0]} variant="overlay" brochureUrl={brochureUrl} />
            <div className="py-8 text-center bg-white border-t border-black/8"><Link href="/properties" className="inline-flex items-center font-semibold text-[#FF5722] hover:text-[#E64A19] transition-colors text-sm"><ArrowLeft className="mr-2 h-4 w-4" />Back to All Plots</Link></div>

            {/* LIGHTBOX */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center" onClick={() => setLightboxOpen(false)}>
                    <button onClick={() => setLightboxOpen(false)} className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white border border-white/20 transition-colors z-10"><X className="h-5 w-5" /></button>
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
