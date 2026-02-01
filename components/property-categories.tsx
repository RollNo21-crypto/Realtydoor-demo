'use client';

import Link from 'next/link';
import Image from 'next/image';

interface PropertyCategory {
    id: string;
    name: string;
    image: string;
    count: number;
    description: string;
    href: string;
    accentColor: string; // For UI elements matching the image
}

const categories: PropertyCategory[] = [
    {
        id: 'residential',
        name: 'Residential',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        count: 245,
        description: 'Apartments, Villas & Houses',
        href: '/properties?type=residential',
        accentColor: 'from-blue-500/20 to-blue-600/5', // Modern home blue tones
    },
    {
        id: 'commercial',
        name: 'Commercial',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
        count: 89,
        description: 'Offices & Retail Spaces',
        href: '/properties?type=commercial',
        accentColor: 'from-slate-500/20 to-slate-600/5', // Corporate gray/blue
    },
    {
        id: 'plot',
        name: 'Plots & Land',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
        count: 156,
        description: 'Residential & Commercial Plots',
        href: '/properties?type=plot',
        accentColor: 'from-green-500/20 to-green-600/5', // Nature green
    },
    {
        id: 'villa',
        name: 'Luxury Villas',
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
        count: 67,
        description: 'Premium Standalone Villas',
        href: '/properties?type=villa',
        accentColor: 'from-amber-500/20 to-amber-600/5', // Luxury gold/amber
    },
    {
        id: 'apartment',
        name: 'Apartments',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
        count: 312,
        description: '1, 2, 3 & 4 BHK Apartments',
        href: '/properties?type=apartment',
        accentColor: 'from-purple-500/20 to-purple-600/5', // Modern purple
    },
    {
        id: 'warehouse',
        name: 'Industrial',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
        count: 43,
        description: 'Warehouses & Factories',
        href: '/properties?type=industrial',
        accentColor: 'from-orange-500/20 to-orange-600/5', // Industrial orange
    },
];

export function PropertyCategories() {
    return (
        <section className="bg-muted py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <h2 className="font-display text-4xl md:text-5xl mb-6">
                        Browse by Category
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Find your perfect property from our diverse range of categories
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category) => {
                        return (
                            <Link key={category.id} href={category.href}>
                                <div className="group rounded-3xl bg-background border border-border overflow-hidden hover-lift cursor-pointer h-full">
                                    {/* Image Container */}
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-t ${category.accentColor} opacity-60 group-hover:opacity-40 transition-opacity`} />

                                        {/* Property Count Badge - Floating on Image */}
                                        <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                                            <span className="text-sm font-semibold text-white">{category.count} Properties</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        {/* Category Name */}
                                        <h3 className="font-display text-2xl mb-2 group-hover:text-primary transition-colors">
                                            {category.name}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-sm text-muted-foreground mb-4">
                                            {category.description}
                                        </p>

                                        {/* Explore Link - Shows on Hover */}
                                        <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                            Explore Category
                                            <svg
                                                className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
