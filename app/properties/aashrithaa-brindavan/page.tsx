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
import { StatsTickerBanner } from '@/components/stats-ticker-banner';
import { PropertyCTA } from '@/components/property-cta';
import { BannerPlaceholder } from '@/components/promo-banner';

const img1 = '/aashrithaa-brindavan/image-1.jpeg';
const img2 = '/aashrithaa-brindavan/image-2.jpeg';
const img3 = '/aashrithaa-brindavan/image-3.jpeg';
const masterPlanImage = '/aashrithaa-brindavan/map.jpeg';
const brochureUrl = '/aashrithaa-brindavan/brochure.pdf';

const infraFeatures = ['CC Roads', 'STP Tank', '24/7 Water Supply', 'Overhead Water Tank', 'Storm Water Drains', 'Sewerage Lines', 'Underground Electrical & Water Lines'];
const securityFeatures = ['Entrance Gate', '24/7 Security', 'CCTV Surveillance'];
const leisureFeatures = ['Parks', 'Jogging Track', "Children's Play Area"];
const keyHighlights = [
    { Icon: LayoutGrid, label: '218 Plots' }, { Icon: Leaf, label: '13 Acres' },
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
            {/* ══════════════════════════════════════════════════
                HERO — VisionOS Style Glassmorphism Console
            ══════════════════════════════════════════════════ */}
            <section className="relative w-full min-h-[90vh] flex flex-col justify-end pb-8 pt-32 px-4 md:px-8" id="overview">
                {/* Full-width hero image */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <Image src={img1} alt="Aashrithaa Brindavan" fill className="object-cover" priority />
                    {/* Deep gradient for massive contrast */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
                </div>

                {/* Floating Glass Console */}
                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <div className="bg-black/20 backdrop-blur-2xl rounded-[2rem] border border-white/15 p-8 md:p-12 shadow-2xl overflow-hidden relative group">

                        {/* Shimmer effect */}
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer" />

                        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-12">

                            {/* Left Side: Title & Description */}
                            <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-[#FF5722] text-white">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                        Pre-Launch Offer
                                    </span>
                                    <div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-widest text-white/70 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                                        <MapPin className="h-3 w-3 text-[#FF5722]" /> Kanakapura Road · Bengaluru
                                    </div>
                                </div>
                                <h1 className="font-display text-white leading-[0.95] mb-6" style={{ fontSize: 'clamp(3.5rem,7vw,6.5rem)' }}>
                                    Aashrithaa<br />
                                    <span className="text-[#FF7043] italic font-light">Brindavan</span>
                                </h1>
                                <p className="text-white/60 font-light text-xl leading-relaxed max-w-xl">
                                    A lush sanctuary next to Art of Living International Center. Enjoy <span className="text-white font-medium">uncompromised serenity</span> in an idyllic, fully developed haven.
                                </p>
                            </div>

                            {/* Right Side: Glass Stats & CTA */}
                            <div className="flex flex-col gap-6 w-full md:w-auto flex-shrink-0">
                                {/* Stats Grid inside Glass */}
                                <div className="grid grid-cols-2 gap-3 h-full">
                                    {[{ v: '13', u: 'Acres Total' }, { v: '218', u: 'Premium Plots' }, { v: '1200+', u: 'Sq.Ft. Sizes' }, { v: '30 min', u: 'To Airport' }].map(({ v, u }) => (
                                        <div key={u} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-center text-center hover:bg-white/10 transition-colors">
                                            <div className="text-2xl md:text-3xl font-light text-white mb-1">{v}</div>
                                            <div className="text-[9px] font-black uppercase tracking-widest text-white/50">{u}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                                    <a href="tel:+919845012345" className="w-full">
                                        <Button className="w-full rounded-2xl px-8 py-7 font-semibold text-white shadow-xl shadow-[#FF5722]/20 hover:shadow-[#FF5722]/40 transition-all text-base border border-[#FF5722]/50"
                                            style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>
                                            <Phone className="mr-2 h-5 w-5" />Schedule Visit
                                        </Button>
                                    </a>
                                    <a href={brochureUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                                        <Button variant="outline" className="w-full rounded-2xl px-8 py-7 font-semibold border-white/20 bg-white/5 hover:bg-white/10 text-white text-base backdrop-blur-md">
                                            <FileText className="mr-2 h-5 w-5 opacity-70" />Brochure
                                        </Button>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Ticker */}
            <StatsTickerBanner />

            {/* ═══════════════════════════════════
                THE EXPERIENCE — immersive feature set
            ═══════════════════════════════════ */}
            <section className="py-24 px-4 md:px-8 bg-[#FAFAFA]" id="features">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">

                        {/* Text & Icon Grid (Spans 5 cols) */}
                        <div className="lg:col-span-5 flex flex-col justify-center">
                            <span className="text-[#FF5722] font-black uppercase tracking-[0.3em] text-[10px] mb-4">The Brindavan Experience</span>
                            <div className="text-6xl md:text-7xl font-display text-[#FF5722]/15 leading-none mb-2 -ml-2">&ldquo;</div>
                            <h2 className="text-3xl md:text-4xl font-display text-black leading-tight mb-8 relative z-10 -mt-8">
                                Where life is all about celebrating cherished family moments amidst <span className="italic font-light text-[#FF7043]">nature&apos;s splendour.</span>
                            </h2>
                            <p className="text-black/50 font-light leading-relaxed mb-10 text-lg">
                                Over 13 acres of meticulously planned landscapes, offering wide CC roads, underground utilities, and premium lifestyle amenities—all fully developed and ready for your dream home.
                            </p>

                            {/* Premium Icon Grid */}
                            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                                {keyHighlights.slice(0, 4).map(({ Icon, label }) => (
                                    <div key={label} className="flex items-start gap-3 group">
                                        <div className="w-10 h-10 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center text-[#FF5722] group-hover:bg-[#FF5722] group-hover:text-white transition-colors flex-shrink-0">
                                            <Icon className="h-4 w-4" />
                                        </div>
                                        <div className="flex-1 pt-0.5">
                                            <div className="text-sm font-bold text-black leading-tight">{label}</div>
                                            <div className="text-[9px] text-black/40 uppercase tracking-widest mt-1">Premium Feature</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image Mosaic (Spans 7 cols) */}
                        <div className="lg:col-span-7 relative w-full aspect-square lg:aspect-auto lg:h-[600px]">
                            {/* Decorative background blob */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#FF5722]/5 to-transparent rounded-full blur-3xl z-0" />

                            <div className="grid grid-cols-12 grid-rows-12 gap-3 md:gap-4 absolute inset-0 z-10">
                                {/* Main Image */}
                                <div className="col-span-8 row-span-12 relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 group">
                                    <Image src={img2} alt="Brindavan View 1" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                {/* Secondary top right */}
                                <div className="col-span-4 row-span-7 relative rounded-[2rem] overflow-hidden shadow-lg group translate-y-6 md:translate-y-8">
                                    <Image src={img3} alt="Brindavan View 2" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                {/* Stat block bottom right */}
                                <div className="col-span-4 row-span-5 relative rounded-[2rem] overflow-hidden shadow-lg translate-y-6 md:translate-y-8"
                                    style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-3 md:p-6 text-center">
                                        <span className="text-3xl md:text-5xl font-light text-white mb-2">100<span className="text-xl md:text-2xl">%</span></span>
                                        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white/70">Clear Title</span>
                                    </div>
                                    {/* Shimmer */}
                                    <div className="absolute top-0 -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/20 animate-shimmer" />
                                </div>
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
                                    Spread across 13 lush acres near the Art of Living International Center, Aashrithaa Brindavan
                                    offers 218 thoughtfully planned plots ranging from 1,200 to 2,400 sq. ft. The layout is designed to
                                    maximize green open spaces while ensuring wide internal roads and complete infrastructure.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 text-[#FF5722]">Pricing & Dimensions</h4>
                                {[
                                    { range: '1,200 sq. ft.', price: '₹66,00,000', label: '@ ₹5,500/sq.ft' },
                                    { range: '1,500 sq. ft.', price: '₹82,50,000', label: '@ ₹5,500/sq.ft' },
                                    { range: '2,400 sq. ft.', price: '₹1,32,00,000', label: '@ ₹5,500/sq.ft' }
                                ].map(item => (
                                    <div key={item.range} className="mb-4">
                                        <div className="flex justify-between text-xs mb-1.5 border-b border-black/6 pb-2">
                                            <span className="text-black font-medium">{item.range} <span className="text-black/40 ml-1">{item.label}</span></span>
                                            <span className="text-[#FF5722] font-bold">{item.price}</span>
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
                        <div className="md:col-span-2">
                            <a href="https://maps.app.goo.gl/UYFRS95xBA88XUJ79" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF5722]/10 text-[#FF5722] font-bold hover:bg-[#FF5722]/20 transition-colors mb-6 border border-[#FF5722]/25">
                                <Route className="h-4 w-4" /> Open in Google Maps
                            </a>
                            <div className="rounded-3xl overflow-hidden border border-black/8"
                                style={{ height: 430, boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.7212956304256!2d77.51508937483818!3d12.796594187502942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae41002f1c1a77%3A0xa9d238c4837a6403!2sAashrita%20Brindavan!5e0!3m2!1sen!2sin!4v1772036752115!5m2!1sen!2sin"
                                    width="100%" height="100%" style={{ border: 0 }}
                                    allowFullScreen loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Aashrithaa Brindavan Location"
                                />
                            </div>
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

            <PropertyCTA propertyName="Aashrithaa Brindavan" image={img1} variant="glass" brochureUrl={brochureUrl} />

            <div className="py-8 text-center bg-white border-t border-black/8">
                <Link href="/properties" className="inline-flex items-center font-semibold text-[#FF5722] hover:text-[#E64A19] transition-colors text-sm">
                    <ArrowLeft className="mr-2 h-4 w-4" />Back to All Plots
                </Link>
            </div>
        </div>
    );
}
