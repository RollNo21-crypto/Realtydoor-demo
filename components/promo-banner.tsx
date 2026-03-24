/**
 * BannerPlaceholder
 * ------------------
 * A compact, horizontal ad-slot placeholder — designed so the graphic designer
 * can drop in the final creative (image, illustration, copy) later.
 *
 * Layout mirrors real estate portals (99acres / PropTiger style):
 *   [ LEFT: headline + subtext + CTA ]  |  [ RIGHT: image / illustration slot ]
 *
 * Props let the developer wire up the text & href now;
 * `imageSlot` accepts an <img> / <Image> / illustration element when ready.
 * Until then, a grey placeholder rectangle is rendered.
 */

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import React from 'react';

export interface BannerPlaceholderProps {
    /** Small label above the headline — e.g. "Limited Offer" */
    tag?: string;
    /** Bold main headline */
    headline: string;
    /** One-line supporting text */
    subtext?: string;
    /** CTA button label */
    ctaLabel?: string;
    /** CTA destination */
    ctaHref?: string;
    /**
     * Image / illustration element supplied by the designer.
     * When undefined, a grey placeholder rectangle is shown instead.
     */
    imageSlot?: React.ReactNode;
    /**
     * Overall colour theme of the card.
     * 'dark'  → navy/dark blue  (default — matches reference screenshots)
     * 'brand' → RealtyDoor orange
     * 'light' → white card on light background
     */
    theme?: 'dark' | 'brand' | 'light';
    /** Extra class on the outermost <section> wrapper */
    className?: string;
}

const themes = {
    dark: {
        section: 'bg-[#F3F4F6]',
        card: 'bg-[#1A2744]',
        tag: 'bg-white/10 text-white/70',
        headline: 'text-white',
        subtext: 'text-white/55',
        btn: 'bg-white text-[#1A2744] hover:bg-white/90',
        placeholder: 'bg-white/10',
    },
    brand: {
        section: 'bg-[#F3F4F6]',
        card: 'bg-gradient-to-r from-[#FF5722] to-[#E64A19]',
        tag: 'bg-white/15 text-white/80',
        headline: 'text-white',
        subtext: 'text-white/60',
        btn: 'bg-white text-[#FF5722] hover:bg-white/90',
        placeholder: 'bg-white/15',
    },
    light: {
        section: 'bg-[#F3F4F6]',
        card: 'bg-white border border-zinc-200',
        tag: 'bg-[#1A2744]/8 text-[#1A2744]/60',
        headline: 'text-zinc-900',
        subtext: 'text-zinc-500',
        btn: 'bg-[#1A2744] text-white hover:bg-[#1A2744]/90',
        placeholder: 'bg-zinc-100 border border-dashed border-zinc-300',
    },
};

export function BannerPlaceholder({
    tag = 'Sponsored',
    headline,
    subtext,
    ctaLabel = 'Learn More',
    ctaHref = '/contact',
    imageSlot,
    theme = 'dark',
    className = '',
}: BannerPlaceholderProps) {
    const t = themes[theme];

    return (
        <section className={`${t.section} py-4 px-4 md:px-8 ${className}`}>
            <div className={`${t.card} rounded-2xl overflow-hidden flex flex-col sm:flex-row items-stretch max-w-7xl mx-auto`}
                style={{ minHeight: 160 }}>

                {/* ── LEFT: text content ── */}
                <div className="flex-1 flex flex-col justify-center px-7 py-6 gap-2">
                    {/* Tag */}
                    <span className={`self-start text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full ${t.tag}`}>
                        {tag}
                    </span>

                    {/* Headline */}
                    <p className={`font-bold text-lg md:text-xl leading-snug ${t.headline}`}>
                        {headline}
                    </p>

                    {/* Subtext */}
                    {subtext && (
                        <p className={`text-sm leading-relaxed max-w-xs ${t.subtext}`}>
                            {subtext}
                        </p>
                    )}

                    {/* CTA */}
                    <div className="mt-3">
                        <Link href={ctaHref}>
                            <button
                                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${t.btn}`}
                            >
                                {ctaLabel}
                                <ArrowRight className="h-3.5 w-3.5" />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* ── RIGHT: image / placeholder slot ── */}
                <div className={`relative flex-shrink-0 w-full sm:w-[320px] md:w-[380px] ${!imageSlot ? t.placeholder : ''}`}
                    style={{ minHeight: imageSlot ? undefined : 160 }}>
                    {imageSlot ?? (
                        /* Placeholder box — graphic designer swaps this */
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-30">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-current">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                            </svg>
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-current text-center px-4 leading-relaxed">Use visual for financing, buyer planning, or consultation support</span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
