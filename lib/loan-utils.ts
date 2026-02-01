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
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
}

/**
 * Format number with commas
 */
export function formatNumberWithCommas(num: number): string {
    return new Intl.NumberFormat('en-US').format(num);
}
