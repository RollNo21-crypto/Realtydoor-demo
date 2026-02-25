'use client';

import * as React from 'react';
import { Calculator, Percent, Info, Minus, Plus } from 'lucide-react';
import { Label } from '@/components/ui/label';
import {
    calculateEMI,
    calculateTotalInterest,
    calculateTotalAmount,
    formatIndianLakh,
} from '@/lib/loan-utils';

const LENDERS = [
    { name: 'SBI', rate: 8.50 },
    { name: 'HDFC', rate: 8.75 },
    { name: 'ICICI', rate: 8.75 },
    { name: 'Axis Bank', rate: 8.75 },
    { name: 'LIC HFL', rate: 8.65 },
    { name: 'PNB Housing', rate: 8.50 },
];

function fmt(n: number) { return `₹${n.toLocaleString('en-IN')}`; }

/* ── Mobile stepper slider ── */
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
                    <div className="absolute left-0 top-0 h-full rounded-full bg-primary transition-all"
                        style={{ width: `${pct}%` }} />
                    <input type="range" min={min} max={max} step={step} value={value}
                        onChange={(e) => onChange(Number(e.target.value))}
                        className="absolute inset-0 w-full opacity-0 cursor-pointer h-full" />
                    <div className="absolute top-1/2 -translate-y-1/2 h-5 w-5 rounded-full bg-white border-2 border-primary shadow pointer-events-none transition-all"
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

/* ── Desktop thin slider ── */
function ThinSlider({ value, onChange, min, max, step }: {
    value: number; onChange: (v: number) => void;
    min: number; max: number; step: number;
}) {
    const pct = ((value - min) / (max - min)) * 100;
    return (
        <div className="relative h-2 rounded-full bg-orange-100">
            <div className="absolute left-0 top-0 h-full rounded-full bg-primary transition-all"
                style={{ width: `${pct}%` }} />
            <input type="range" min={min} max={max} step={step} value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="absolute inset-0 w-full opacity-0 cursor-pointer h-full" />
            <div className="absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white border-2 border-primary shadow pointer-events-none"
                style={{ left: `calc(${pct}% - 8px)` }} />
        </div>
    );
}

/* ══════════════════════════════════════════════════════ */
export function LoanCalculator() {
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

    const C = 301.6; // 2π × 48

    const sliders = [
        { label: 'Property Value', value: propertyPrice, set: setPropertyPrice, min: 500000, max: 10000000, step: 100000, f: (v: number) => formatIndianLakh(v) },
        { label: 'Down Payment', value: downPayment, set: setDownPayment, min: 20, max: 60, step: 5, f: (v: number) => `${v}%` },
        { label: 'Loan Tenure', value: tenure, set: setTenure, min: 5, max: 20, step: 1, f: (v: number) => `${v} Years` },
        {
            label: 'Interest Rate', value: interestRate,
            set: (v: number) => { setInterestRate(v); setSelectedLender(null); },
            min: 7, max: 15, step: 0.25, f: (v: number) => `${v}%`,
        },
    ];

    return (
        <div className="w-full overflow-hidden rounded-3xl lg:rounded-[2.5rem] shadow-2xl shadow-primary/20 bg-white border border-primary/15">

            {/* ══════════ MOBILE  (< lg) ══════════ */}
            <div className="lg:hidden p-6 space-y-8">
                <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-primary/10 border border-primary/20">
                        <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-display text-2xl font-bold text-black">EMI Calculator</h3>
                        <p className="text-[11px] text-black/40 font-medium">Estimate your monthly payment</p>
                    </div>
                </div>

                {/* Sliders */}
                <div className="space-y-7">
                    {sliders.map(({ label, value, set, min, max, step, f }) => (
                        <div key={label} className="space-y-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">{label}</p>
                            <StepSlider value={value} onChange={set} min={min} max={max} step={step} format={f} />
                        </div>
                    ))}

                    {/* Lender chips */}
                    <div className="space-y-2">
                        <p className="text-[9px] text-black/30 font-bold uppercase tracking-widest flex items-center gap-1">
                            <Info className="h-3 w-3 text-primary" /> Compare lender rates
                        </p>
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
                </div>

                {/* Result card */}
                <div className="rounded-3xl border border-primary/20 overflow-hidden">
                    <div className="bg-primary px-6 py-4 flex items-center justify-between">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">Monthly EMI</p>
                        <span className="text-[10px] text-white/60 font-bold">/ {tenure * 12} months</span>
                    </div>
                    <div className="bg-white px-6 py-5 space-y-4">
                        <p className="font-display text-4xl font-black text-black">
                            {fmt(emi)}<span className="text-lg font-medium text-black/40">/mo</span>
                        </p>
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
                        <div className="space-y-1.5">
                            <div className="h-2 rounded-full overflow-hidden flex bg-orange-100">
                                <div className="bg-primary h-full rounded-l-full transition-all duration-700"
                                    style={{ width: `${principalPct}%` }} />
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

            {/* ══════════ DESKTOP  (lg+) — split layout ══════════ */}
            <div className="hidden lg:grid lg:grid-cols-2 min-h-[520px]">

                {/* LEFT: white — sliders */}
                <div className="flex flex-col px-10 py-10 space-y-8 border-r border-black/8 bg-white">
                    <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-2xl bg-primary/10 border border-primary/20">
                            <Calculator className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-display text-2xl font-bold text-black">Finance It</h3>
                            <p className="text-[11px] text-black/40 font-medium">Estimate your monthly EMI</p>
                        </div>
                    </div>

                    <div className="space-y-7 flex-1">
                        {sliders.map(({ label, value, set, min, max, step, f }) => (
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
                </div>

                {/* RIGHT: orange — results */}
                <div className="relative flex flex-col px-10 py-10 bg-primary overflow-hidden">
                    <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-[80px]" />
                    <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-black/10 blur-[60px]" />

                    <div className="relative flex flex-col h-full gap-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">Loan Summary</p>

                        {/* Donut */}
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

                        {/* Stats on white card */}
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

                        {/* Standard offer strip */}
                        <div className="rounded-2xl bg-white/15 border border-white/20 px-6 py-5">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-white/60 mb-1">Standard Offer</p>
                            <p className="font-display text-4xl font-black text-white">
                                {fmt(emi)}<span className="text-base font-medium text-white/60">/Month</span>
                            </p>
                            <p className="text-xs text-white/50 mt-1">{tenure * 12} instalments · {interestRate}% p.a.</p>
                        </div>

                        <p className="text-[9px] text-white/30 flex items-center gap-1.5">
                            <Info className="h-3 w-3" /> Indicative. Final rates subject to lender approval.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
