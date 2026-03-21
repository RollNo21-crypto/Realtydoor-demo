/**
 * LifestyleBanner — compact placeholder twin-card strip
 * -------------------------------------------------------
 * Two side-by-side placeholder ad slots.
 * The graphic designer supplies the actual creative later.
 * Until then, grey placeholder rectangles with an image icon are shown.
 */

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import React from 'react';

interface CardConfig {
    tag?: string;
    headline: string;
    subtext?: string;
    ctaLabel?: string;
    ctaHref?: string;
    /** Actual image / illustration element from designer */
    imageSlot?: React.ReactNode;
    dark?: boolean;
}

interface LifestyleBannerProps {
    cards?: [CardConfig, CardConfig];
    className?: string;
}

const defaultCards: [CardConfig, CardConfig] = [
    {
        tag: 'Home Loans',
        headline: 'Get the Best Home Loan Rates',
        subtext: 'Quick approvals through leading banks.',
        ctaLabel: 'Get Home Loan',
        ctaHref: '/contact',
        dark: true,
    },
    {
        tag: 'Legal Support',
        headline: 'Expert Legal & Documentation Help',
        subtext: 'Keep your purchase secure and transparent.',
        ctaLabel: 'Get in Touch',
        ctaHref: '/contact',
        dark: true,
    },
];

function PlaceholderCard({ card }: { card: CardConfig }) {
    const bg = card.dark ? 'bg-[#1A2744]' : 'bg-white border border-zinc-200';
    const headline = card.dark ? 'text-white' : 'text-zinc-900';
    const sub = card.dark ? 'text-white/55' : 'text-zinc-500';
    const tag = card.dark ? 'bg-white/10 text-white/60' : 'bg-zinc-100 text-zinc-500';
    const btn = card.dark ? 'bg-white text-[#1A2744]' : 'bg-[#1A2744] text-white';
    const imgBg = card.dark ? 'bg-white/8' : 'bg-zinc-100 border border-dashed border-zinc-300';

    return (
        <div className={`flex-1 flex flex-col sm:flex-row items-stretch rounded-2xl overflow-hidden ${bg}`}
            style={{ minHeight: 150 }}>
            {/* Content */}
            <div className="flex-1 flex flex-col justify-center px-7 py-6 gap-2">
                <span className={`self-start text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full ${tag}`}>
                    {card.tag ?? 'Sponsored'}
                </span>
                <p className={`font-bold text-base md:text-lg leading-snug ${headline}`}>
                    {card.headline}
                </p>
                {card.subtext && (
                    <p className={`text-sm leading-relaxed max-w-[220px] ${sub}`}>
                        {card.subtext}
                    </p>
                )}
                <div className="mt-3">
                    <Link href={card.ctaHref ?? '/contact'}>
                        <button className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${btn} hover:opacity-90`}>
                            {card.ctaLabel ?? 'Learn More'}
                            <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                    </Link>
                </div>
            </div>

            {/* Image slot */}
            <div className={`relative flex-shrink-0 w-full sm:w-[220px] ${imgBg}`} style={{ minHeight: 150 }}>
                {card.imageSlot ?? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-25">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-current">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />
                        </svg>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-current">Image Slot</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export function LifestyleBanner({ cards = defaultCards, className = '' }: LifestyleBannerProps) {
    return (
        <section className={`py-4 px-4 md:px-8 bg-[#F3F4F6] ${className}`}>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4">
                {cards.map((card, i) => (
                    <PlaceholderCard key={i} card={card} />
                ))}
            </div>
        </section>
    );
}
