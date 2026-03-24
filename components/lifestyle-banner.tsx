/**
 * ServiceShowcase
 * ----------------
 * A responsive 3-tier service banner that adapts its layout by device:
 *   - Mobile:  Single stacked tall cards in a snap-scroll container (swipe to browse)
 *   - Tablet:  2×3 grid of medium cards
 *   - Desktop: Auto-scrolling ticker of wide-format service cards
 *
 * All cards link to real /services/* routes in the app.
 */

'use client';

import Link from 'next/link';
import { ArrowUpRight, Landmark, Scale, TrendingUp, Wrench, Building2, FileCheck, ChevronRight } from 'lucide-react';
import React from 'react';

interface Service {
    id: string;
    eyebrow: string;
    headline: string;
    body: string;
    cta: string;
    href: string;
    icon: React.ReactNode;
    accentFrom: string;
    accentTo: string;
    badge?: string;
}

const services: Service[] = [
    {
        id: 'loan',
        eyebrow: 'PLOT FINANCING SUPPORT',
        headline: 'Home Loan Guidance for Plot Buyers',
        body: 'Lender options, EMI planning, eligibility checks, and documentation support for Bengaluru plot purchases.',
        cta: 'Check Loan Options',
        href: '/services/loan-assistance',
        icon: <Landmark className="h-6 w-6" />,
        accentFrom: 'from-[#1A2744]',
        accentTo: 'to-[#243356]',
        badge: 'Most Requested',
    },
    {
        id: 'legal',
        eyebrow: 'LEGAL VERIFICATION',
        headline: 'Legal & Documentation Support',
        body: 'Title document review, RERA compliance checks, encumbrance certificates, and registration guidance.',
        cta: 'Speak to an Expert',
        href: '/services/legal',
        icon: <Scale className="h-6 w-6" />,
        accentFrom: 'from-[#1A2744]',
        accentTo: 'to-[#1e3060]',
    },
    {
        id: 'resale',
        eyebrow: 'PORTFOLIO ADVISORY',
        headline: 'Resale & Exit Strategy Support',
        body: 'Data-driven appreciation insights and professional assistance when you decide to exit or re-sell your plot.',
        cta: 'Explore Resale',
        href: '/services/resale',
        icon: <TrendingUp className="h-6 w-6" />,
        accentFrom: 'from-[#1A2744]',
        accentTo: 'to-[#243356]',
    },
    {
        id: 'valuation',
        eyebrow: 'MARKET INSIGHTS',
        headline: 'Plot Valuation & Market Analysis',
        body: 'Get an accurate fair-market assessment of your plot or shortlisted property before you buy or sell.',
        cta: 'Get Valuation',
        href: '/services/valuation',
        icon: <FileCheck className="h-6 w-6" />,
        accentFrom: 'from-[#1A2744]',
        accentTo: 'to-[#1e3060]',
        badge: 'New',
    },
    {
        id: 'construction',
        eyebrow: 'DESIGN ADVISORY',
        headline: 'Construction & Vastu Planning',
        body: 'Vastu consultations, architect referrals, and construction planning support for your future home build.',
        cta: 'Start Planning',
        href: '/services/construction',
        icon: <Wrench className="h-6 w-6" />,
        accentFrom: 'from-[#1A2744]',
        accentTo: 'to-[#243356]',
    },
    {
        id: 'management',
        eyebrow: 'COMPLIANCE SERVICES',
        headline: 'Property Management & Compliance',
        body: 'Khata transfers, property tax assistance, and title maintenance for a legally healthy land asset.',
        cta: 'Get Legal Help',
        href: '/services/property-management',
        icon: <Building2 className="h-6 w-6" />,
        accentFrom: 'from-[#1A2744]',
        accentTo: 'to-[#1e3060]',
    },
];

/* ── Single Card component (reused across all breakpoints) ── */
interface CardProps {
    service: Service;
    size?: 'sm' | 'md' | 'lg';
}

function ServiceCard({ service, size = 'md' }: CardProps) {
    const heights: Record<string, string> = { sm: 'h-[220px]', md: 'h-[280px]', lg: 'h-[340px]' };
    const iconSizes: Record<string, string> = { sm: 'h-10 w-10', md: 'h-12 w-12', lg: 'h-14 w-14' };

    return (
        <Link href={service.href} className="group block flex-shrink-0">
            <div className={`relative ${heights[size]} w-full rounded-[2rem] overflow-hidden bg-gradient-to-br ${service.accentFrom} ${service.accentTo} cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}>
                {/* Subtle noise texture overlay */}
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")` }} />

                {/* Top row */}
                <div className="relative z-10 flex items-start justify-between p-6">
                    <div className={`${iconSizes[size]} rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white backdrop-blur-sm`}>
                        {service.icon}
                    </div>
                    <div className="flex items-center gap-2">
                        {service.badge && (
                            <span className="text-[10px] font-bold uppercase tracking-widest bg-orange-500/90 text-white px-3 py-1 rounded-full">
                                {service.badge}
                            </span>
                        )}
                        <div className="h-8 w-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-orange-500">
                            <ArrowUpRight className="h-4 w-4 text-white" />
                        </div>
                    </div>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-2">
                        {service.eyebrow}
                    </p>
                    <h3 className={`font-display font-bold text-white leading-tight mb-2 group-hover:text-orange-300 transition-colors ${size === 'lg' ? 'text-2xl' : 'text-lg'}`}>
                        {service.headline}
                    </h3>
                    {size !== 'sm' && (
                        <p className="text-sm text-white/55 leading-relaxed line-clamp-2 mb-4">
                            {service.body}
                        </p>
                    )}
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-white/70 group-hover:text-orange-300 transition-colors">
                        {service.cta}
                        <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </div>
        </Link>
    );
}

export function LifestyleBanner({ className = '' }: { className?: string }) {
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = React.useState(false);

    // Desktop: infinite marquee with JS RAF for smooth performance
    React.useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;
        let animId: number;
        let pos = 0;

        function tick() {
            if (!isPaused && el) {
                pos += 0.5;
                // Reset when halfway (since we duplicated cards)
                if (pos >= el.scrollWidth / 2) pos = 0;
                el.scrollLeft = pos;
            }
            animId = requestAnimationFrame(tick);
        }
        animId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(animId);
    }, [isPaused]);

    return (
        <section className={`py-12 bg-[#F0F1F5] overflow-hidden ${className}`}>
            {/* Section header */}
            <div className="mx-auto max-w-7xl px-6 mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
                <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-orange-500 mb-2">Our Services</p>
                    <h2 className="font-display text-2xl md:text-3xl text-slate-900">
                        Everything You Need to Buy, Own, and Grow Your Plot
                    </h2>
                </div>
                <Link href="/services" className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-orange-500 transition-colors group/all">
                    View All Services <ArrowUpRight className="h-4 w-4 transition-transform group-hover/all:translate-x-0.5 group-hover/all:-translate-y-0.5" />
                </Link>
            </div>

            {/* ── MOBILE: Horizontal snap-scroll, tall cards ── */}
            <div className="md:hidden px-6">
                <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2">
                    {services.map((s) => (
                        <div key={s.id} className="snap-center flex-shrink-0 w-[85vw]">
                            <ServiceCard service={s} size="lg" />
                        </div>
                    ))}
                </div>
                {/* Scroll hint dots */}
                <div className="flex justify-center gap-1.5 mt-4">
                    {services.map((s) => (
                        <div key={s.id} className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    ))}
                </div>
            </div>

            {/* ── TABLET: 2×3 grid of medium cards ── */}
            <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 px-6 mx-auto max-w-3xl">
                {services.map((s) => (
                    <ServiceCard key={s.id} service={s} size="md" />
                ))}
            </div>

            {/* ── DESKTOP: Infinite marquee ── */}
            <div
                className="hidden lg:block"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div
                    ref={scrollRef}
                    className="flex gap-5 overflow-hidden px-8"
                    style={{ scrollBehavior: 'auto' }}
                >
                    {/* Duplicate for seamless loop */}
                    {[...services, ...services].map((s, i) => (
                        <div key={i} className="flex-shrink-0 w-[360px]">
                            <ServiceCard service={s} size="md" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
