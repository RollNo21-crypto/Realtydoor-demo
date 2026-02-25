'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Maximize, Ruler, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockProperties, formatIndianPrice } from '@/lib/mock-data';

// Use all 8 live plot listings from mock-data
const hotDeals = mockProperties.slice(0, 8).map((p) => ({
    id: p.id,
    title: p.title,
    location: `${p.city}, ${p.state}`,
    price: p.price,
    image: p.images[0]?.url ?? 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    sqYards: (p as any).sqYards ?? Math.round(p.sqft / 9),
    dimensions: (p as any).dimensions ?? `${p.sqft} sq.ft`,
    plotType: (p as any).plotType ?? p.propertyType.replace(/_/g, ' '),
    featured: p.featured,
}));

export function HotDeals() {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextDeal = () => setCurrentIndex((prev) => (prev + 1) % hotDeals.length);
    const prevDeal = () => setCurrentIndex((prev) => (prev - 1 + hotDeals.length) % hotDeals.length);

    const currentDeal = hotDeals[currentIndex];

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-1">Featured Plots</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">RealtyDoor listings · RERA approved</p>
                </div>
                <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-primary" />
            </div>

            {/* Single Plot Display */}
            <div className="relative">
                <Link href={`/properties/${currentDeal.id}`}>
                    <Card className="group overflow-hidden hover-lift">
                        {/* Image */}
                        <div className="relative aspect-[16/9] overflow-hidden">
                            <Image
                                src={currentDeal.image}
                                alt={currentDeal.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                            {/* Plot type badge */}
                            <Badge className="absolute left-3 md:left-4 top-3 md:top-4 bg-primary text-white border-0 shadow-lg text-xs md:text-sm px-2.5 md:px-3 py-1">
                                {currentDeal.plotType}
                            </Badge>

                            {currentDeal.featured && (
                                <Badge className="absolute right-3 md:right-4 top-3 md:top-4 bg-[#d4af37] text-black border-0 shadow-lg text-xs md:text-sm px-2.5 md:px-3 py-1">
                                    Featured
                                </Badge>
                            )}

                            {/* Location overlay */}
                            <div className="absolute bottom-3 left-3 right-3 flex items-center text-white text-xs md:text-sm">
                                <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-1 flex-shrink-0" />
                                <span className="truncate">{currentDeal.location}</span>
                            </div>
                        </div>

                        {/* Content */}
                        <CardContent className="p-4 md:p-6">
                            <h4 className="font-display text-xl md:text-2xl font-bold mb-1 transition-colors group-hover:text-primary line-clamp-2">
                                {currentDeal.title}
                            </h4>

                            {/* Plot Stats */}
                            <div className="mb-4 flex flex-wrap items-center gap-4 text-xs md:text-sm text-muted-foreground border-t border-b border-border py-3 mt-3">
                                <div className="flex items-center gap-1.5">
                                    <Maximize className="h-4 w-4 text-primary/70" />
                                    <span>{currentDeal.sqYards} sq.yds</span>
                                </div>
                                <div className="h-4 w-px bg-border" />
                                <div className="flex items-center gap-1.5">
                                    <Ruler className="h-4 w-4 text-primary/70" />
                                    <span>{currentDeal.dimensions}</span>
                                </div>
                            </div>

                            {/* Price & CTA */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 md:gap-4">
                                <div>
                                    <p className="text-xs md:text-sm text-muted-foreground mb-0.5">Starting From</p>
                                    <p className="font-display text-2xl md:text-3xl font-bold text-primary">
                                        {formatIndianPrice(currentDeal.price)}
                                    </p>
                                </div>
                                <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto px-6 py-4 text-sm md:text-base">
                                    View Plot Details
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </Link>

                {/* Navigation — Desktop */}
                <div className="hidden md:flex items-center justify-center gap-4 mt-5">
                    <Button variant="outline" size="lg" onClick={prevDeal} className="flex items-center gap-2 hover:bg-primary hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                        Previous
                    </Button>

                    <div className="flex items-center gap-2">
                        {hotDeals.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'}`}
                                aria-label={`Go to plot ${index + 1}`}
                            />
                        ))}
                    </div>

                    <Button variant="outline" size="lg" onClick={nextDeal} className="flex items-center gap-2 hover:bg-primary hover:text-white transition-colors">
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                    </Button>
                </div>

                {/* Navigation — Mobile dots */}
                <div className="md:hidden flex items-center justify-center gap-2 mt-4">
                    {hotDeals.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'}`}
                            aria-label={`Go to plot ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* "Explore All" banner below carousel */}
            <Link href="/properties" className="block mt-2">
                <div className="rounded-2xl border border-border bg-muted/60 hover:bg-muted transition-colors px-6 py-4 flex items-center justify-between group">
                    <span className="text-sm md:text-base font-semibold text-foreground">
                        Explore All {hotDeals.length} Plot Listings →
                    </span>
                    <span className="text-xs text-muted-foreground">RERA Approved · Bank Loan Available</span>
                </div>
            </Link>
        </div>
    );
}
