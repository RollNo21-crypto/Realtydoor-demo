'use client';

import * as React from 'react';
import { Calculator, DollarSign, Percent, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import {
    calculateEMI,
    calculateTotalInterest,
    calculateTotalAmount,
    formatCurrency,
} from '@/lib/loan-utils';

export function LoanCalculator() {
    const [propertyPrice, setPropertyPrice] = React.useState(1000000);
    const [downPayment, setDownPayment] = React.useState(20);
    const [interestRate, setInterestRate] = React.useState(7.5);
    const [tenure, setTenure] = React.useState(20);

    const loanAmount = propertyPrice - (propertyPrice * downPayment) / 100;
    const emi = calculateEMI(loanAmount, interestRate, tenure);
    const totalInterest = calculateTotalInterest(loanAmount, emi, tenure);
    const totalAmount = calculateTotalAmount(loanAmount, emi, tenure);

    return (
        <Card className="glass-card border-0 shadow-xl">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-display text-2xl">
                    <Calculator className="h-6 w-6 text-primary" />
                    Loan Calculator
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                {/* Property Price */}
                <div className="space-y-3">
                    <Label htmlFor="property-price" className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-primary" />
                        Property Price
                    </Label>
                    <Input
                        id="property-price"
                        type="number"
                        value={propertyPrice}
                        onChange={(e) => setPropertyPrice(Number(e.target.value))}
                        className="text-lg font-semibold"
                    />
                </div>

                {/* Down Payment */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <Label className="flex items-center gap-2">
                            Down Payment
                        </Label>
                        <span className="text-sm font-semibold text-primary">
                            {downPayment}% ({formatCurrency((propertyPrice * downPayment) / 100)})
                        </span>
                    </div>
                    <Slider
                        value={[downPayment]}
                        onValueChange={(value) => setDownPayment(value[0])}
                        min={10}
                        max={50}
                        step={5}
                        className="py-4"
                    />
                </div>

                {/* Interest Rate */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <Label className="flex items-center gap-2">
                            <Percent className="h-4 w-4 text-primary" />
                            Interest Rate
                        </Label>
                        <span className="text-sm font-semibold text-primary">
                            {interestRate}% p.a.
                        </span>
                    </div>
                    <Slider
                        value={[interestRate]}
                        onValueChange={(value) => setInterestRate(value[0])}
                        min={5}
                        max={15}
                        step={0.5}
                        className="py-4"
                    />
                </div>

                {/* Loan Tenure */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <Label className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            Loan Tenure
                        </Label>
                        <span className="text-sm font-semibold text-primary">
                            {tenure} years
                        </span>
                    </div>
                    <Slider
                        value={[tenure]}
                        onValueChange={(value) => setTenure(value[0])}
                        min={5}
                        max={30}
                        step={5}
                        className="py-4"
                    />
                </div>

                {/* Results */}
                <div className="space-y-4 rounded-xl bg-gradient-to-br from-primary/10 to-orange-light/10 p-6">
                    <div className="flex items-center justify-between border-b border-border pb-3">
                        <span className="text-sm text-muted-foreground">Loan Amount</span>
                        <span className="font-semibold">{formatCurrency(loanAmount)}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-border pb-3">
                        <span className="text-sm text-muted-foreground">Monthly EMI</span>
                        <span className="font-display text-2xl font-bold text-primary">
                            {formatCurrency(emi)}
                        </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-border pb-3">
                        <span className="text-sm text-muted-foreground">Total Interest</span>
                        <span className="font-semibold text-orange-600">
                            {formatCurrency(totalInterest)}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Total Amount</span>
                        <span className="font-semibold">{formatCurrency(totalAmount)}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
