/**
 * BannerPlaceholder
 * ------------------
 * A compact, horizontal banner component designed for CTAs across the site.
 * Supports primary and optional secondary action buttons.
 */

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';

export interface BannerPlaceholderProps {
    /** Optional small label above the headline */
    tag?: string;
    /** Main headline. Supports raw strings or ReactNodes (e.g. for gradient text styling) */
    headline: React.ReactNode;
    /** Optional supporting subtext */
    subtext?: string;
    /** Primary CTA button label */
    ctaLabel?: string;
    /** Primary CTA destination */
    ctaHref?: string;
    /** Optional Secondary CTA button label */
    secondaryCtaLabel?: string;
    /** Optional Secondary CTA destination */
    secondaryCtaHref?: string;
    /**
     * Overall colour theme of the banner.
     * 'dark'   → Default dark theme with orange accents
     * 'brand'  → Solid orange gradient theme
     * 'light'  → White card theme
     */
    theme?: 'dark' | 'brand' | 'light';
    /** Extra class on the outermost section wrapper */
    className?: string;
    /** Legacy prop to ignore so old imports don't break */
    imageSlot?: React.ReactNode;
}

export function BannerPlaceholder({
    tag,
    headline,
    subtext,
    ctaLabel = 'Learn More',
    ctaHref = '/contact',
    secondaryCtaLabel,
    secondaryCtaHref,
    theme = 'dark',
    className = '',
    imageSlot, // Ignored in the new minimalist design
}: BannerPlaceholderProps) {
    const isBrand = theme === 'brand';
    const isLight = theme === 'light';

    const backgroundClass = isBrand
        ? "bg-[#FF5722] border-white/20"
        : isLight
            ? "bg-white border-zinc-200"
            : "bg-zinc-950 border-white/10";

    const radialGradient = isBrand
        ? "from-white/20 via-transparent to-transparent"
        : isLight
            ? "from-[#FF5722]/5 via-transparent to-transparent"
            : "from-[#FF5722]/10 via-transparent to-transparent";

    const textClass = isLight ? "text-zinc-900" : "text-white";
    const subtextClass = isLight ? "text-slate-500" : isBrand ? "text-white/90" : "text-slate-400";

    const primaryButtonClass = isBrand
        ? "bg-white text-[#FF5722] hover:bg-white/90"
        : "bg-[#FF5722] hover:bg-[#E64A19] text-white";

    const secondaryButtonClass = isBrand
        ? "text-white/80 hover:bg-white/10 hover:text-white"
        : isLight
            ? "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            : "text-white/50 hover:bg-white/5 hover:text-white/70";

    return (
        <section className={`bg-background py-10 relative overflow-hidden ${className}`}>
            <div className="mx-auto max-w-7xl px-6">
                <div className={`relative overflow-hidden rounded-2xl px-8 py-10 md:px-14 md:py-12 border ${backgroundClass}`}>
                    <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] ${radialGradient} pointer-events-none`} />
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="max-w-xl">
                            {tag && (
                                <span className={`inline-block font-bold uppercase tracking-widest text-xs mb-3 ${isBrand ? 'text-white/90' : 'text-[#FF5722]'}`}>
                                    {tag}
                                </span>
                            )}
                            <h2 className={`font-display text-xl md:text-3xl leading-tight mb-2 ${textClass}`}>
                                {headline}
                            </h2>
                            {subtext && (
                                <p className={`text-sm leading-relaxed ${subtextClass}`}>
                                    {subtext}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 mt-4 md:mt-0">
                            {ctaLabel && ctaHref && (
                                <Link href={ctaHref}>
                                    <Button className={`${primaryButtonClass} rounded-full px-7 h-10 font-semibold w-full sm:w-auto transition-all`}>
                                        {ctaLabel}
                                    </Button>
                                </Link>
                            )}
                            {secondaryCtaLabel && secondaryCtaHref && (
                                <Link href={secondaryCtaHref}>
                                    <Button variant="ghost" className={`${secondaryButtonClass} rounded-full px-6 h-10 font-semibold w-full sm:w-auto transition-all`}>
                                        {secondaryCtaLabel}
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

