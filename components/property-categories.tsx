'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, CheckCircle2 } from 'lucide-react';

interface PropertyCategory {
    id: string;
    name: string;
    tagline: string;
    image: string;
    count: number;
    customCountLabel: string;
    description: string;
    href: string;
    highlights: string[];
}

const categories: PropertyCategory[] = [
    {
        id: 'hoskote',
        name: 'Plots in Hoskote',
        tagline: 'East Bengaluru\'s Fastest-Growing Zone',
        image: 'https://realtydoor.com/wp-content/uploads/2025/12/banner-3-scaled.webp',
        count: 5,
        customCountLabel: '5 Verified Listings',
        description: 'A high-growth corridor with excellent connectivity to ITPL, Whitefield, and the upcoming peripheral ring road.',
        href: '/properties?location=hoskote',
        highlights: ['RERA Approved', 'Gated Community', 'Bank Loan Ready'],
    },
    {
        id: 'bagalur',
        name: 'Plots near Bagalur',
        tagline: 'North Bengaluru\'s New Investment Hub',
        image: 'https://realtydoor.com/wp-content/uploads/2025/09/banner-1-1-scaled.png',
        count: 2,
        customCountLabel: '2 Verified Listings',
        description: 'Fast-developing zone near KIADB and aerospace township with massive appreciation potential.',
        href: '/properties?location=bagalur',
        highlights: ['Clear Title', 'Under Development', 'High ROI Potential'],
    },
    {
        id: 'kanakapura',
        name: 'Kanakapura Road',
        tagline: 'South Bengaluru\'s Preferred Green Belt',
        image: 'https://realtydoor.com/wp-content/uploads/2024/05/aashrithaa-brindhavan1-1.jpg',
        count: 4,
        customCountLabel: '4 Verified Listings',
        description: 'Serene residential layouts near Art of Living, Anjanapura, and the proposed Namma Metro extension.',
        href: '/properties?location=kanakapura',
        highlights: ['Near Metro Corridor', 'Lush Surroundings', 'Premium Layouts'],
    },
    {
        id: 'investment',
        name: 'Investment-Focused Plots',
        tagline: 'Curated for Yield, Not Just Location',
        image: 'https://realtydoor.com/wp-content/uploads/2024/05/j-town-1.webp',
        count: 1,
        customCountLabel: '1 Featured Opportunity',
        description: 'Strategically selected projects in emerging corridors with strong builder credentials and exit flexibility.',
        href: '/properties?filter=investment',
        highlights: ['Appreciation-Focused', 'Exit Flexibility', 'Vetted Developers'],
    },
];

export function PropertyCategories() {
    const [hero, ...rest] = categories;

    return (
        <section className="bg-muted py-24 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4">
                            <MapPin className="h-3.5 w-3.5" />
                            Browse by Location
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl leading-tight">
                            Curated Plot Collections for Every{' '}
                            <span className="italic font-normal gradient-text">Investment Goal</span>
                        </h2>
                    </div>
                    <p className="text-muted-foreground text-base leading-relaxed md:max-w-sm">
                        Verified plotted developments across Bengaluru, filtered by area, connectivity, and buyer intent.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">

                    {/* Hero Card — Large */}
                    <Link href={hero.href} className="md:col-span-7 group block">
                        <div className="relative h-[440px] md:h-[540px] rounded-[2rem] overflow-hidden cursor-pointer">
                            <Image
                                src={hero.image}
                                alt={hero.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            {/* Deep gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                            {/* Top badge */}
                            <div className="absolute top-6 left-6 flex items-center gap-2">
                                <span className="text-[10px] font-bold uppercase tracking-widest bg-white/15 text-white backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                                    {hero.customCountLabel}
                                </span>
                            </div>

                            {/* Arrow icon */}
                            <div className="absolute top-6 right-6 h-10 w-10 rounded-full bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-primary">
                                <ArrowUpRight className="h-5 w-5 text-white" />
                            </div>

                            {/* Bottom content */}
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{hero.tagline}</p>
                                <h3 className="font-display text-3xl md:text-4xl text-white mb-3 group-hover:text-orange-300 transition-colors duration-300">
                                    {hero.name}
                                </h3>
                                <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-sm">
                                    {hero.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {hero.highlights.map((h) => (
                                        <span key={h} className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white/90 bg-white/10 backdrop-blur-sm border border-white/15 px-3 py-1.5 rounded-full">
                                            <CheckCircle2 className="h-3 w-3 text-primary" />
                                            {h}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Right Column — 3 Stacked Cards */}
                    <div className="md:col-span-5 flex flex-col gap-4 md:gap-5">
                        {rest.map((category, i) => (
                            <Link key={category.id} href={category.href} className="group flex-1 block">
                                <div className="relative h-[165px] rounded-[1.75rem] overflow-hidden cursor-pointer">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

                                    {/* Number indicator */}
                                    <div className="absolute top-4 left-5 text-white/25 font-display text-5xl font-black leading-none select-none">
                                        {String(i + 2).padStart(2, '0')}
                                    </div>

                                    {/* Arrow */}
                                    <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-primary">
                                        <ArrowUpRight className="h-4 w-4 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary/90 mb-0.5">{category.tagline}</p>
                                        <div className="flex items-end justify-between">
                                            <h3 className="font-display text-lg text-white group-hover:text-orange-300 transition-colors duration-300">
                                                {category.name}
                                            </h3>
                                            <span className="text-[10px] font-semibold text-white/60 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10 flex-shrink-0 ml-3">
                                                {category.customCountLabel}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


