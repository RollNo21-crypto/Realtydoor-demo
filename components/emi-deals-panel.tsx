'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Calculator, IndianRupee, Percent, Info,
    MapPin, Maximize, Ruler, TrendingUp,
    ChevronLeft, ChevronRight, Minus, Plus,
} from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
    calculateEMI,
    calculateTotalInterest,
    calculateTotalAmount,
    formatIndianLakh,
} from '@/lib/loan-utils';
import { mockProperties, formatIndianPrice } from '@/lib/mock-data';

/* ─── DATA ──────────────────────────── */
const LENDERS = [
    { name: 'SBI', rate: 8.50 },
    { name: 'HDFC', rate: 8.75 },
    { name: 'ICICI', rate: 8.75 },
    { name: 'LIC', rate: 8.65 },
    { name: 'PNB', rate: 8.50 },
];

const hotDeals = mockProperties.slice(0, 8).map((p) => ({
    id: p.id,
    title: p.title,
    location: `${p.city}, ${p.state}`,
    price: p.price,
    image: p.images[0]?.url ?? 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    sqYards: (p as any).sqYards ?? Math.round(p.sqft / 9),
    dimensions: (p as any).dimensions ?? `${p.sqft} sq.ft`,
    plotType: (p as any).plotType ?? p.propertyType.replace(/_/g, ' '),
    featured: p.featured,
}));

function fmt(n: number) { return `₹${n.toLocaleString('en-IN')}`; }

/* ─── Mobile stepper slider ─── */
function StepSlider({ value, onChange, min, max, step, format }: {
    value: number; onChange: (v: number) => void;
    min: number; max: number; step: number; format: (v: number) => string;
}) {
    const pct = ((value - min) / (max - min)) * 100;
    return (
        <div className="space-y-2">
            <span className="font-display text-2xl font-bold text-black">{format(value)}</span>
            <div className="flex items-center gap-3">
                <button onClick={() => onChange(Math.max(min, value - step))}
                    className="h-9 w-9 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors flex-shrink-0">
                    <Minus className="h-4 w-4" />
                </button>
                <div className="relative flex-1 h-2 rounded-full bg-orange-100">
                    <div className="absolute left-0 top-0 h-full rounded-full bg-primary transition-all duration-150" style={{ width: `${pct}%` }} />
                    <input type="range" min={min} max={max} step={step} value={value}
                        onChange={(e) => onChange(Number(e.target.value))}
                        className="absolute inset-0 w-full opacity-0 cursor-pointer h-full" />
                    <div className="absolute top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-white border-2 border-primary shadow pointer-events-none transition-all duration-150"
                        style={{ left: `calc(${pct}% - 10px)` }} />
                </div>
                <button onClick={() => onChange(Math.min(max, value + step))}
                    className="h-9 w-9 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors flex-shrink-0">
                    <Plus className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}

/* ─── Desktop thin slider ─── */
function ThinSlider({ value, onChange, min, max, step }: {
    value: number; onChange: (v: number) => void;
    min: number; max: number; step: number;
}) {
    const pct = ((value - min) / (max - min)) * 100;
    return (
        <div className="relative h-2 rounded-full bg-orange-100">
            <div className="absolute left-0 top-0 h-full rounded-full bg-primary transition-all duration-150" style={{ width: `${pct}%` }} />
            <input type="range" min={min} max={max} step={step} value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="absolute inset-0 w-full opacity-0 cursor-pointer h-full" />
            <div className="absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white border-2 border-primary shadow pointer-events-none"
                style={{ left: `calc(${pct}% - 8px)` }} />
        </div>
    );
}

/* ══════════════════════ MAIN EXPORT ══════════════════════════ */
export function EmiDealsPanel() {
    const [activeTab, setActiveTab] = React.useState<'emi' | 'deals'>('emi');

    const [propertyPrice, setPropertyPrice] = React.useState(2500000);
    const [downPayment, setDownPayment] = React.useState(20);
    const [interestRate, setInterestRate] = React.useState(8.75);
    const [tenure, setTenure] = React.useState(15);
    const [selectedLender, setSelectedLender] = React.useState<string | null>(null);

    const loanAmount = propertyPrice - (propertyPrice * downPayment) / 100;
    const emi = calculateEMI(loanAmount, interestRate, tenure);
    const totalInterest = calculateTotalInterest(loanAmount, emi, tenure);
    const totalAmount = calculateTotalAmount(loanAmount, emi, tenure);
    const principalPct = Math.round((loanAmount / totalAmount) * 100);
    const interestPct = 100 - principalPct;

    const [idx, setIdx] = React.useState(0);
    const next = () => setIdx((p) => (p + 1) % hotDeals.length);
    const prev = () => setIdx((p) => (p - 1 + hotDeals.length) % hotDeals.length);
    const deal = hotDeals[idx];

    const C = 301.6; // 2π × 48

    // ═══════════════════════════════════════
    //  MOBILE  (< lg)
    // ═══════════════════════════════════════
    const MobileView = (
        <div className="lg:hidden">
            {/* Tab bar */}
            <div className="flex border-b border-black/10">
                {(['emi', 'deals'] as const).map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)}
                        className={`flex-1 flex items-center justify-center gap-2 py-4 text-xs font-bold uppercase tracking-widest transition-colors ${activeTab === tab
                            ? 'text-primary border-b-2 border-primary'
                            : 'text-black/40 hover:text-black/70'
                            }`}>
                        {tab === 'emi' ? <Calculator className="h-3.5 w-3.5" /> : <TrendingUp className="h-3.5 w-3.5" />}
                        {tab === 'emi' ? 'EMI Calculator' : 'Hot Deals'}
                    </button>
                ))}
            </div>

            {/* ─ Mobile EMI ─ */}
            {activeTab === 'emi' && (
                <div className="p-6 space-y-8">
                    <h3 className="font-display text-2xl font-bold text-black">Finance It</h3>

                    <div className="space-y-7">
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">Property Value</p>
                            <StepSlider value={propertyPrice} onChange={setPropertyPrice} min={500000} max={10000000} step={100000} format={formatIndianLakh} />
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">Down Payment</p>
                            <StepSlider value={downPayment} onChange={setDownPayment} min={20} max={60} step={5} format={(v) => `${v}%`} />
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">Loan Tenure</p>
                            <StepSlider value={tenure} onChange={setTenure} min={5} max={20} step={1} format={(v) => `${v} Years`} />
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">Interest Rate</p>
                            <StepSlider value={interestRate} onChange={(v) => { setInterestRate(v); setSelectedLender(null); }} min={7} max={15} step={0.25} format={(v) => `${v}%`} />
                        </div>

                        {/* Lender chips */}
                        <div className="flex flex-wrap gap-2">
                            {LENDERS.map((l) => (
                                <button key={l.name}
                                    onClick={() => { setInterestRate(l.rate); setSelectedLender(l.name); }}
                                    className={`px-3 py-1.5 rounded-xl border text-[10px] font-bold transition-all ${selectedLender === l.name
                                        ? 'bg-primary text-white border-primary scale-105'
                                        : 'border-primary/30 text-black/60 hover:border-primary hover:text-primary'
                                        }`}>
                                    {l.name} · {l.rate}%
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Result card */}
                    <div className="rounded-3xl border border-primary/20 overflow-hidden">
                        <div className="bg-primary px-6 py-4 flex items-center justify-between">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">Monthly EMI</p>
                            <span className="text-[10px] text-white/60 font-bold">/ {tenure * 12} months</span>
                        </div>
                        <div className="bg-white px-6 py-5 space-y-4">
                            <p className="font-display text-4xl font-black text-black">{fmt(emi)}<span className="text-lg font-medium text-black/40">/mo</span></p>
                            <div className="space-y-2.5 text-sm border-t border-black/8 pt-4">
                                <div className="flex justify-between">
                                    <span className="text-black/50">Loan Amount</span>
                                    <span className="font-bold text-black">{formatIndianLakh(loanAmount)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-black/50">Total Interest</span>
                                    <span className="font-bold text-primary">{formatIndianLakh(totalInterest)}</span>
                                </div>
                                <div className="flex justify-between border-t border-black/8 pt-2">
                                    <span className="text-black/70 font-bold">Total Payable</span>
                                    <span className="font-bold text-primary">{formatIndianLakh(totalAmount)}</span>
                                </div>
                            </div>
                            {/* Bar */}
                            <div className="space-y-1.5">
                                <div className="h-2 rounded-full overflow-hidden flex bg-orange-100">
                                    <div className="bg-primary h-full rounded-l-full transition-all duration-700" style={{ width: `${principalPct}%` }} />
                                    <div className="bg-orange-200 h-full flex-1" />
                                </div>
                                <div className="flex justify-between text-[9px] font-bold tracking-widest uppercase text-black/40">
                                    <span>Principal {principalPct}%</span>
                                    <span>Interest {interestPct}%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-[10px] text-black/30 text-center flex items-center justify-center gap-1">
                        <Info className="h-3 w-3" /> Indicative only. Rates subject to lender approval.
                    </p>
                </div>
            )}

            {/* ─ Mobile Deals ─ */}
            {activeTab === 'deals' && (
                <div>
                    <div className="relative aspect-[16/10] overflow-hidden">
                        <Image src={deal.image} alt={deal.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        <Badge className="absolute left-4 top-4 bg-primary text-white border-0 text-[10px] font-bold px-3 py-1 rounded-xl">
                            {deal.plotType}
                        </Badge>
                        {deal.featured && (
                            <Badge className="absolute right-4 top-4 border-0 text-[10px] font-bold px-3 py-1 rounded-xl"
                                style={{ background: '#d4af37', color: '#000' }}>
                                ★ Featured
                            </Badge>
                        )}
                    </div>

                    <div className="p-6 space-y-5">
                        <div>
                            <p className="text-[9px] text-primary font-bold uppercase tracking-widest mb-1">{deal.location} · RERA Approved</p>
                            <Link href={`/properties/${deal.id}`}>
                                <h4 className="font-display text-2xl font-bold text-black leading-tight line-clamp-2 hover:text-primary transition-colors">
                                    {deal.title}
                                </h4>
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-2xl border border-primary/20 bg-orange-50 p-3">
                                <p className="text-[9px] text-black/40 uppercase font-bold tracking-wide mb-1 flex items-center gap-1">
                                    <Maximize className="h-3 w-3 text-primary" /> Area
                                </p>
                                <p className="font-display text-lg font-bold text-black">{deal.sqYards} <span className="text-xs text-black/40 font-normal">sq.yds</span></p>
                            </div>
                            <div className="rounded-2xl border border-primary/20 bg-orange-50 p-3">
                                <p className="text-[9px] text-black/40 uppercase font-bold tracking-wide mb-1 flex items-center gap-1">
                                    <Ruler className="h-3 w-3 text-primary" /> Size
                                </p>
                                <p className="font-display text-base font-bold text-black truncate">{deal.dimensions}</p>
                            </div>
                        </div>

                        {/* Nav */}
                        <div className="flex items-center justify-between">
                            <div className="flex gap-1.5">
                                {hotDeals.map((_, i) => (
                                    <button key={i} onClick={() => setIdx(i)}
                                        className={`rounded-full transition-all duration-300 ${i === idx ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-primary/20'}`} />
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <button onClick={prev} className="h-9 w-9 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary hover:bg-orange-50 transition-colors">
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button onClick={next} className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors">
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        <div className="rounded-2xl bg-primary overflow-hidden">
                            <div className="px-5 py-4 flex items-center justify-between">
                                <div>
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-white/70 mb-0.5">Starting From</p>
                                    <p className="font-display text-2xl font-black text-white">{formatIndianPrice(deal.price)}</p>
                                </div>
                                <Link href={`/properties/${deal.id}`}>
                                    <button className="bg-white text-primary font-bold text-xs uppercase tracking-widest px-4 py-2.5 rounded-xl hover:bg-orange-50 transition-colors">
                                        View Plot →
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <Link href="/properties"
                            className="flex items-center justify-between rounded-2xl border border-primary/20 bg-orange-50 px-5 py-3 hover:bg-orange-100 transition-colors group">
                            <span className="text-xs text-black/60 font-semibold">Explore All {hotDeals.length} Listings</span>
                            <ChevronRight className="h-4 w-4 text-primary/50 group-hover:text-primary transition-colors" />
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );

    // ═══════════════════════════════════════
    //  DESKTOP  (lg+)  —  true split layout
    // ═══════════════════════════════════════
    const DesktopView = (
        <div className="hidden lg:grid lg:grid-cols-2 min-h-[560px]">

            {/* ─── LEFT: white panel ─── */}
            <div className="flex flex-col px-10 py-10 space-y-8 border-r border-black/8 bg-white">

                {/* Tabs */}
                <div className="flex gap-2">
                    {(['emi', 'deals'] as const).map((tab) => (
                        <button key={tab} onClick={() => setActiveTab(tab)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === tab
                                ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                : 'bg-orange-50 text-black/40 hover:text-black/70 border border-primary/20'
                                }`}>
                            {tab === 'emi' ? <Calculator className="h-3.5 w-3.5" /> : <TrendingUp className="h-3.5 w-3.5" />}
                            {tab === 'emi' ? 'EMI Calculator' : 'Featured Plots'}
                        </button>
                    ))}
                </div>

                <h3 className="font-display text-3xl font-bold text-black">
                    {activeTab === 'emi' ? 'Finance It' : 'Explore Plots'}
                </h3>

                {/* EMI sliders */}
                {activeTab === 'emi' && (
                    <div className="space-y-7 flex-1">
                        {[
                            { label: 'Property Value', value: propertyPrice, set: setPropertyPrice, min: 500000, max: 10000000, step: 100000, f: (v: number) => formatIndianLakh(v) },
                            { label: 'Down Payment', value: downPayment, set: setDownPayment, min: 20, max: 60, step: 5, f: (v: number) => `${v}%` },
                            { label: 'Loan Tenure', value: tenure, set: setTenure, min: 5, max: 20, step: 1, f: (v: number) => `${v} yrs · ${v * 12} EMIs` },
                            { label: 'Interest Rate', value: interestRate, set: (v: number) => { setInterestRate(v); setSelectedLender(null); }, min: 7, max: 15, step: 0.25, f: (v: number) => `${v}%` },
                        ].map(({ label, value, set, min, max, step, f }) => (
                            <div key={label} className="space-y-3">
                                <div className="flex items-baseline justify-between">
                                    <Label className="text-[10px] font-bold uppercase tracking-widest text-black/40">{label}</Label>
                                    <span className="font-display text-xl font-bold text-black">{f(value)}</span>
                                </div>
                                <ThinSlider value={value} onChange={set} min={min} max={max} step={step} />
                            </div>
                        ))}

                        <div className="space-y-2 pt-1">
                            <p className="text-[9px] text-black/30 font-bold uppercase tracking-widest flex items-center gap-1">
                                <Info className="h-3 w-3 text-primary" /> Compare lender rates
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {LENDERS.map((l) => (
                                    <button key={l.name}
                                        onClick={() => { setInterestRate(l.rate); setSelectedLender(l.name); }}
                                        className={`px-3 py-1.5 rounded-xl border text-[10px] font-bold tracking-wide transition-all ${selectedLender === l.name
                                            ? 'bg-primary text-white border-primary shadow-md scale-105'
                                            : 'border-primary/30 text-black/50 hover:border-primary hover:text-primary'
                                            }`}>
                                        {l.name} · {l.rate}%
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Deals image left */}
                {activeTab === 'deals' && (
                    <div className="flex-1 flex flex-col gap-5">
                        <div className="relative rounded-2xl overflow-hidden flex-1 min-h-[260px] group">
                            <Image src={deal.image} alt={deal.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <Badge className="absolute left-3 top-3 bg-primary text-white border-0 text-[10px] font-bold px-2.5 py-1 rounded-xl">{deal.plotType}</Badge>
                            {deal.featured && (
                                <Badge className="absolute right-3 top-3 border-0 text-[9px] font-bold px-2.5 py-1 rounded-xl"
                                    style={{ background: '#d4af37', color: '#000' }}>★ Featured</Badge>
                            )}
                            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs">
                                <MapPin className="h-3.5 w-3.5 text-primary" />{deal.location}
                            </div>
                        </div>

                        {/* Renault-style progress line */}
                        <div className="flex items-center gap-4">
                            <span className="text-xs text-black/30 font-bold font-mono">{String(idx + 1).padStart(2, '0')}</span>
                            <div className="flex-1 h-px bg-black/10 relative overflow-hidden">
                                <div className="absolute left-0 top-0 h-full bg-primary transition-all duration-500"
                                    style={{ width: `${((idx + 1) / hotDeals.length) * 100}%` }} />
                            </div>
                            <span className="text-xs text-black/30 font-bold font-mono">{String(hotDeals.length).padStart(2, '0')}</span>
                            <div className="flex gap-2">
                                <button onClick={prev} className="h-8 w-8 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary hover:bg-orange-50 transition-all">
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button onClick={next} className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-all">
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* ─── RIGHT: orange panel ─── */}
            <div className="relative flex flex-col px-10 py-10 bg-primary overflow-hidden">
                <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-[80px]" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-black/10 blur-[60px]" />

                {/* EMI Results */}
                {activeTab === 'emi' && (
                    <div className="relative flex flex-col h-full gap-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Loan Summary</p>

                        {/* Donut + legend */}
                        <div className="flex items-center gap-6">
                            <div className="relative h-40 w-40 flex-shrink-0 drop-shadow-xl">
                                <svg viewBox="0 0 120 120" className="rotate-[-90deg] h-full w-full">
                                    <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="18" />
                                    <circle cx="60" cy="60" r="48" fill="none" stroke="white" strokeWidth="18"
                                        strokeDasharray={`${(principalPct / 100) * C} ${C}`} strokeLinecap="butt" />
                                    <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="18"
                                        strokeDasharray={`${(interestPct / 100) * C} ${C}`}
                                        strokeDashoffset={`${-(principalPct / 100) * C}`} strokeLinecap="butt" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                    <span className="text-[8px] text-white/60 font-bold uppercase tracking-widest">EMI</span>
                                    <span className="font-display text-base font-black text-white mt-0.5">{fmt(emi)}</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="h-2.5 w-2.5 rounded-full bg-white" />
                                    <span className="text-xs text-white font-bold">Principal {principalPct}%</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-2.5 w-2.5 rounded-full bg-white/35" />
                                    <span className="text-xs text-white/70 font-bold">Interest {interestPct}%</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats card */}
                        <div className="rounded-2xl bg-white overflow-hidden shadow-xl flex-1">
                            {[
                                { label: 'Loan Amount', value: formatIndianLakh(loanAmount), cls: 'text-black' },
                                { label: 'Total Interest', value: formatIndianLakh(totalInterest), cls: 'text-primary' },
                                { label: 'Total Payable', value: formatIndianLakh(totalAmount), cls: 'text-primary font-black' },
                            ].map(({ label, value, cls }) => (
                                <div key={label} className="flex items-center justify-between px-6 py-4 border-b border-black/8 last:border-0">
                                    <span className="text-xs text-black/50">{label}</span>
                                    <span className={`font-display text-base font-bold ${cls}`}>{value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Standard offer */}
                        <div className="rounded-2xl bg-white/15 border border-white/20 px-6 py-5">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">Standard Offer</p>
                            <p className="font-display text-4xl font-black text-white">{fmt(emi)}<span className="text-base font-medium text-white/60">/Month</span></p>
                            <p className="text-xs text-white/50 mt-1">{tenure * 12} instalments · {interestRate}% p.a.</p>
                        </div>

                        <p className="text-[9px] text-white/30 flex items-center gap-1.5">
                            <Info className="h-3 w-3" /> Indicative. Final rates subject to lender approval.
                        </p>
                    </div>
                )}

                {/* Deal Details */}
                {activeTab === 'deals' && (
                    <div className="relative flex flex-col h-full gap-5">
                        <div>
                            <p className="text-[9px] font-bold uppercase tracking-widest text-white/60 mb-1">RERA Approved · Bank Loan Available</p>
                            <Link href={`/properties/${deal.id}`}>
                                <h4 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight line-clamp-2 hover:text-white/80 transition-colors">
                                    {deal.title}
                                </h4>
                            </Link>
                            <div className="flex items-center gap-1.5 mt-2 text-white/70 text-sm">
                                <MapPin className="h-4 w-4 text-white/50" />{deal.location}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { icon: <Maximize className="h-4 w-4" />, label: 'Plot Area', val: `${deal.sqYards} sq.yds` },
                                { icon: <Ruler className="h-4 w-4" />, label: 'Dimensions', val: deal.dimensions },
                            ].map(({ icon, label, val }) => (
                                <div key={label} className="rounded-2xl bg-white/15 border border-white/20 px-4 py-3">
                                    <div className="flex items-center gap-2 mb-1 text-white/60">{icon}
                                        <span className="text-[9px] font-bold uppercase tracking-wider">{label}</span>
                                    </div>
                                    <p className="font-display text-lg font-bold text-white truncate">{val}</p>
                                </div>
                            ))}
                        </div>

                        {/* Spec list */}
                        <div className="rounded-2xl bg-white/15 border border-white/15 overflow-hidden flex-1">
                            {[
                                { label: 'Plot Type', value: deal.plotType },
                                { label: 'Location', value: deal.location },
                                { label: 'Plot Size', value: `${deal.sqYards} sq.yds` },
                                { label: 'Dimensions', value: deal.dimensions },
                            ].map(({ label, value }) => (
                                <div key={label} className="flex justify-between px-5 py-3 border-b border-white/10 last:border-0">
                                    <span className="text-white/60 text-sm">{label}</span>
                                    <span className="text-white font-bold text-sm">{value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="rounded-2xl bg-white/15 border border-white/20 px-6 py-5">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">Starting From</p>
                            <div className="flex items-end justify-between">
                                <p className="font-display text-3xl font-black text-white">{formatIndianPrice(deal.price)}</p>
                                <Link href={`/properties/${deal.id}`}>
                                    <button className="bg-white text-primary font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-xl hover:bg-orange-50 transition-colors">
                                        View Plot →
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <Link href="/properties"
                            className="flex items-center justify-between rounded-xl border border-white/20 bg-white/10 px-5 py-3 hover:bg-white/20 transition-colors group">
                            <span className="text-xs text-white/60 font-semibold">Explore All {hotDeals.length} Listings</span>
                            <ChevronRight className="h-4 w-4 text-white/40 group-hover:text-white transition-colors" />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="w-full overflow-hidden rounded-3xl lg:rounded-[2.5rem] shadow-2xl shadow-primary/20 bg-white border border-primary/15">
            {MobileView}
            {DesktopView}
        </div>
    );
}
