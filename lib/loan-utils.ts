/**
 * Calculate monthly EMI (Equated Monthly Installment)
 * @param principal - Loan amount
 * @param annualRate - Annual interest rate (in percentage)
 * @param tenureYears - Loan tenure in years
 * @returns Monthly EMI amount
 */
export function calculateEMI(
    principal: number,
    annualRate: number,
    tenureYears: number
): number {
    if (principal <= 0 || annualRate <= 0 || tenureYears <= 0) {
        return 0;
    }

    const monthlyRate = annualRate / 12 / 100;
    const tenureMonths = tenureYears * 12;

    const emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
        (Math.pow(1 + monthlyRate, tenureMonths) - 1);

    return Math.round(emi);
}

/**
 * Calculate total interest payable
 */
export function calculateTotalInterest(
    principal: number,
    emi: number,
    tenureYears: number
): number {
    const totalPayment = emi * tenureYears * 12;
    return Math.round(totalPayment - principal);
}

/**
 * Calculate total amount payable
 */
export function calculateTotalAmount(
    principal: number,
    emi: number,
    tenureYears: number
): number {
    return Math.round(emi * tenureYears * 12);
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

/**
 * Format amount in Indian Lakhs / Crores for compact display
 * e.g. 1850000 → "₹18.5 L", 10000000 → "₹1 Cr"
 */
export function formatIndianLakh(amount: number): string {
    if (amount >= 10000000) {
        return `₹${(amount / 10000000).toFixed(2).replace(/\.00$/, '')} Cr`;
    }
    if (amount >= 100000) {
        return `₹${(amount / 100000).toFixed(2).replace(/\.00$/, '')} L`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
}

/**
 * Format number with Indian commas (e.g. 1,00,000)
 */
export function formatNumberWithCommas(num: number): string {
    return new Intl.NumberFormat('en-IN').format(num);
}
