'use client';

import * as React from 'react';
import { Calculator, IndianRupee, Percent, Calendar, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import {
    calculateEMI,
    calculateTotalInterest,
    calculateTotalAmount,
    formatIndianLakh,
} from '@/lib/loan-utils';

// Indian banks offering home/plot loans
const LENDERS = [
    { name: 'SBI', rate: 8.50 },
    { name: 'HDFC', rate: 8.75 },
    { name: 'ICICI', rate: 8.75 },
    { name: 'Axis Bank', rate: 8.75 },
    { name: 'LIC HFL', rate: 8.65 },
    { name: 'PNB Housing', rate: 8.50 },
];

function formatRupee(amount: number): string {
    return `₹${amount.toLocaleString('en-IN')}`;
}

export function LoanCalculator() {
    const [propertyPrice, setPropertyPrice] = React.useState(2500000); // ₹25 L default
    const [downPayment, setDownPayment] = React.useState(20);          // 20% (RBI minimum)
    const [interestRate, setInterestRate] = React.useState(8.75);      // Typical bank rate
    const [tenure, setTenure] = React.useState(15);                    // 15 yr common for plots
    const [selectedLender, setSelectedLender] = React.useState<string | null>(null);

    const loanAmount = propertyPrice - (propertyPrice * downPayment) / 100;
    const emi = calculateEMI(loanAmount, interestRate, tenure);
    const totalInterest = calculateTotalInterest(loanAmount, emi, tenure);
    const totalAmount = calculateTotalAmount(loanAmount, emi, tenure);
    const principalPct = Math.round((loanAmount / totalAmount) * 100);
    const interestPct = 100 - principalPct;

    const handleLenderClick = (rate: number, name: string) => {
        setInterestRate(rate);
        setSelectedLender(name);
    };

    return (
        <Card className="glass-card border-0 shadow-xl">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-display text-2xl">
                    <Calculator className="h-6 w-6 text-primary" />
                    EMI Calculator
                </CardTitle>
                <p className="text-sm text-muted-foreground">Estimate your plot loan EMI in seconds</p>
            </CardHeader>
            <CardContent className="space-y-7">

                {/* Property Price */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <Label className="flex items-center gap-2">
                            <IndianRupee className="h-4 w-4 text-primary" />
                            Property / Plot Price
                        </Label>
                        <span className="text-sm font-bold text-primary">
                            {formatIndianLakh(propertyPrice)}
                        </span>
                    </div>
                    <Slider
                        value={[propertyPrice]}
                        onValueChange={(v) => setPropertyPrice(v[0])}
                        min={500000}        // ₹5 L
                        max={10000000}      // ₹1 Cr
                        step={100000}       // ₹1 L steps
                        className="py-4"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>₹5 L</span><span>₹1 Cr</span>
                    </div>
                </div>

                {/* Down Payment */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <Label className="flex items-center gap-2 text-sm">
                            Down Payment
                            <span className="text-xs text-muted-foreground">(min 20% per RBI)</span>
                        </Label>
                        <span className="text-sm font-bold text-primary">
                            {downPayment}% &nbsp;·&nbsp; {formatIndianLakh((propertyPrice * downPayment) / 100)}
                        </span>
                    </div>
                    <Slider
                        value={[downPayment]}
                        onValueChange={(v) => setDownPayment(v[0])}
                        min={20}
                        max={60}
                        step={5}
                        className="py-4"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>20%</span><span>60%</span>
                    </div>
                </div>

                {/* Lender Quick-select */}
                <div className="space-y-2">
                    <Label className="text-sm flex items-center gap-2">
                        <Info className="h-4 w-4 text-primary" />
                        Quick-fill Bank Rate
                    </Label>
                    <div className="flex flex-wrap gap-2">
                        {LENDERS.map((l) => (
                            <button
                                key={l.name}
                                onClick={() => handleLenderClick(l.rate, l.name)}
                                className={`px-3 py-1.5 rounded-full border text-xs font-semibold transition-all ${selectedLender === l.name
                                        ? 'bg-primary text-white border-primary'
                                        : 'border-border hover:border-primary/50 hover:text-primary'
                                    }`}
                            >
                                {l.name} · {l.rate}%
                            </button>
                        ))}
                    </div>
                </div>

                {/* Interest Rate */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <Label className="flex items-center gap-2">
                            <Percent className="h-4 w-4 text-primary" />
                            Interest Rate
                        </Label>
                        <span className="text-sm font-bold text-primary">{interestRate}% p.a.</span>
                    </div>
                    <Slider
                        value={[interestRate]}
                        onValueChange={(v) => { setInterestRate(v[0]); setSelectedLender(null); }}
                        min={7}
                        max={15}
                        step={0.25}
                        className="py-4"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>7%</span><span>15%</span>
                    </div>
                </div>

                {/* Loan Tenure */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <Label className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            Loan Tenure
                        </Label>
                        <span className="text-sm font-bold text-primary">{tenure} years</span>
                    </div>
                    <Slider
                        value={[tenure]}
                        onValueChange={(v) => setTenure(v[0])}
                        min={5}
                        max={20}  // Plot loans typically max 20 yrs in India
                        step={1}
                        className="py-4"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>5 yrs</span><span>20 yrs</span>
                    </div>
                </div>

                {/* Results */}
                <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-orange-500/5 border border-primary/10 p-5 space-y-0">

                    {/* EMI Highlight */}
                    <div className="text-center pb-4 mb-4 border-b border-border">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Monthly EMI</p>
                        <p className="font-display text-4xl font-bold text-primary">
                            {formatRupee(emi)}
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Loan Amount</span>
                            <span className="font-semibold">{formatIndianLakh(loanAmount)}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">Total Interest</span>
                            <span className="font-semibold text-orange-500">{formatIndianLakh(totalInterest)}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm border-t border-border pt-3">
                            <span className="text-muted-foreground">Total Payable</span>
                            <span className="font-bold">{formatIndianLakh(totalAmount)}</span>
                        </div>
                    </div>

                    {/* Principal vs Interest bar */}
                    <div className="pt-4 mt-2">
                        <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                            <span>Principal {principalPct}%</span>
                            <span>Interest {interestPct}%</span>
                        </div>
                        <div className="h-2 rounded-full overflow-hidden flex bg-muted">
                            <div
                                className="bg-primary h-full transition-all duration-500"
                                style={{ width: `${principalPct}%` }}
                            />
                            <div
                                className="bg-orange-400 h-full transition-all duration-500"
                                style={{ width: `${interestPct}%` }}
                            />
                        </div>
                    </div>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                    * Indicative EMI only. Final rate subject to bank approval & credit score.
                </p>
            </CardContent>
        </Card>
    );
}
