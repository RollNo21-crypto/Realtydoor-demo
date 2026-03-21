/**
 * PropertyPageBanner — single compact placeholder for property detail pages
 * --------------------------------------------------------------------------
 * Same ad-slot design as BannerPlaceholder but tuned for individual property pages.
 * Graphic designer replaces the imageSlot and copy later.
 */

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import React from 'react';

interface PropertyPageBannerProps {
    propertyName?: string;
    location?: string;
    variant?: 'enquiry' | 'explore';
    imageSlot?: React.ReactNode;
}

export function PropertyPageBanner({
    propertyName = 'This Property',
    location = 'Bengaluru',
    variant = 'enquiry',
    imageSlot,
}: PropertyPageBannerProps) {
    const isEnquiry = variant === 'enquiry';

    return (
        <section className="py-4 px-4 md:px-8 bg-[#F3F4F6]">
            <div
                className={`rounded-2xl overflow-hidden flex flex-col sm:flex-row items-stretch max-w-7xl mx-auto ${isEnquiry ? 'bg-[#1A2744]' : 'bg-white border border-zinc-200'}`}
                style={{ minHeight: 150 }}
            >
                {/* Content */}
                <div className="flex-1 flex flex-col justify-center px-7 py-6 gap-2">
                    <span className={`self-start text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full ${isEnquiry ? 'bg-white/10 text-white/60' : 'bg-zinc-100 text-zinc-500'}`}>
                        {isEnquiry ? 'Enquire Now' : 'Explore More'}
                    </span>

                    <p className={`font-bold text-base md:text-xl leading-snug ${isEnquiry ? 'text-white' : 'text-zinc-900'}`}>
                        {isEnquiry
                            ? `Interested in ${propertyName}?`
                            : `Discover More Plots in ${location}`
                        }
                    </p>

                    <p className={`text-sm max-w-xs leading-relaxed ${isEnquiry ? 'text-white/55' : 'text-zinc-500'}`}>
                        {isEnquiry
                            ? 'Our advisors are available now — zero brokerage, clear title.'
                            : 'RERA-verified plots across Bengaluru & Andhra Pradesh.'
                        }
                    </p>

                    <div className="mt-3">
                        <Link href={isEnquiry ? '/contact' : '/properties'}>
                            <button className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90 ${isEnquiry ? 'bg-white text-[#1A2744]' : 'bg-[#1A2744] text-white'}`}>
                                {isEnquiry ? 'Call / WhatsApp Now' : 'View All Plots'}
                                <ArrowRight className="h-3.5 w-3.5" />
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Image slot */}
                <div
                    className={`relative flex-shrink-0 w-full sm:w-[320px] md:w-[380px] ${isEnquiry ? 'bg-white/8' : 'bg-zinc-100 border border-dashed border-zinc-300'}`}
                    style={{ minHeight: 150 }}
                >
                    {imageSlot ?? (
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
        </section>
    );
}
