'use client';

import Link from 'next/link';
import Image from 'next/image';
import { mockProperties } from '@/lib/mock-data';

interface PropertyCategory {
    id: string;
    name: string;
    image: string;
    count: number;
    description: string;
    href: string;
    accentColor: string;
}

// Dynamically build categories from mock data — only show categories that have properties
const allCategories: PropertyCategory[] = [
    {
        id: 'residential',
        name: 'Residential Plots',
        image: 'https://realtydoor.com/wp-content/uploads/2025/12/banner-3-scaled.webp',
        count: mockProperties.filter(p => p.propertyType === 'RESIDENTIAL_PLOT').length,
        description: 'Gated communities · RERA Approved · Bank Loan Available',
        href: '/properties?type=RESIDENTIAL_PLOT',
        accentColor: 'from-green-600/30 to-green-700/10',
    },
    {
        id: 'hoskote',
        name: 'Hoskote, Bangalore',
        image: 'https://realtydoor.com/wp-content/uploads/2025/09/banner-1-1-scaled.png',
        count: mockProperties.filter(p => p.city.toLowerCase().includes('hoskote')).length,
        description: 'Vrunda City · Neo Serene · Fast-growing corridor',
        href: '/properties?location=hoskote',
        accentColor: 'from-blue-600/30 to-blue-700/10',
    },
    {
        id: 'bangalore',
        name: 'Bangalore',
        image: 'https://realtydoor.com/wp-content/uploads/2024/05/aashrithaa-brindhavan1-1.jpg',
        count: mockProperties.filter(p => p.state === 'Karnataka').length,
        description: 'Kanakapura Road · Jigani · Hoskote',
        href: '/properties?location=bangalore',
        accentColor: 'from-amber-600/30 to-amber-700/10',
    },
    {
        id: 'andhra',
        name: 'Andhra Pradesh',
        image: 'https://realtydoor.com/wp-content/uploads/2024/05/j-town-1.webp',
        count: mockProperties.filter(p => p.state === 'Andhra Pradesh').length,
        description: 'NewtownJ · Punganur · Twin-lake township',
        href: '/properties?location=andhra',
        accentColor: 'from-purple-600/30 to-purple-700/10',
    },
];

// Only render categories that have at least 1 property
const categories = allCategories.filter(c => c.count > 0);

export function PropertyCategories() {
    return (
        <section className="bg-muted py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <h2 className="font-display text-4xl md:text-5xl mb-6">
                        Browse by Category
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Explore plots by type or location — all listings are RERA approved with clear title
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category) => (
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

                                    {/* Property Count Badge */}
                                    <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                                        <span className="text-sm font-semibold text-white">{category.count} {category.count === 1 ? 'Property' : 'Properties'}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="font-display text-xl mb-2 group-hover:text-primary transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        {category.description}
                                    </p>

                                    {/* Explore Link */}
                                    <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        Explore
                                        <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
