'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Bed, Bath, Maximize, TrendingDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatPrice, formatNumber } from '@/lib/utils';

interface HotDeal {
    id: string;
    title: string;
    location: string;
    originalPrice: number;
    discountedPrice: number;
    discount: number;
    image: string;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    endsAt: Date;
}

const hotDeals: HotDeal[] = [
    {
        id: '1',
        title: 'Luxury Penthouse Downtown',
        location: 'Manhattan, NY',
        originalPrice: 5500000,
        discountedPrice: 4950000,
        discount: 10,
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
        bedrooms: 4,
        bathrooms: 3,
        sqft: 3500,
        endsAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
    },
    {
        id: '2',
        title: 'Modern Villa with Pool',
        location: 'Beverly Hills, CA',
        originalPrice: 8000000,
        discountedPrice: 7200000,
        discount: 10,
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
        bedrooms: 5,
        bathrooms: 4,
        sqft: 5200,
        endsAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
    },
    {
        id: '3',
        title: 'Waterfront Apartment',
        location: 'Miami Beach, FL',
        originalPrice: 2800000,
        discountedPrice: 2520000,
        discount: 10,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
        bedrooms: 3,
        bathrooms: 2,
        sqft: 2100,
        endsAt: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day from now
    },
    {
        id: '4',
        title: 'Sky Garden Residence',
        location: 'Singapore',
        originalPrice: 6200000,
        discountedPrice: 5580000,
        discount: 10,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
        bedrooms: 4,
        bathrooms: 3,
        sqft: 4200,
        endsAt: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000), // 4 days from now
    },
    {
        id: '5',
        title: 'Coastal Estate',
        location: 'Malibu, CA',
        originalPrice: 9500000,
        discountedPrice: 8550000,
        discount: 10,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
        bedrooms: 6,
        bathrooms: 5,
        sqft: 6800,
        endsAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
    },
];

function CountdownTimer({ endsAt }: { endsAt: Date }) {
    const [timeLeft, setTimeLeft] = React.useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    React.useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = endsAt.getTime() - now;

            if (distance < 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [endsAt]);

    return (
        <div className="flex gap-2">
            <div className="flex flex-col items-center rounded-lg bg-background/90 px-2 md:px-3 py-1.5 min-w-[40px] md:min-w-[50px]">
                <span className="font-display text-base md:text-xl font-bold text-primary">{timeLeft.days}</span>
                <span className="text-[10px] md:text-xs text-muted-foreground">Days</span>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-background/90 px-2 md:px-3 py-1.5 min-w-[40px] md:min-w-[50px]">
                <span className="font-display text-base md:text-xl font-bold text-primary">{timeLeft.hours}</span>
                <span className="text-[10px] md:text-xs text-muted-foreground">Hrs</span>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-background/90 px-2 md:px-3 py-1.5 min-w-[40px] md:min-w-[50px]">
                <span className="font-display text-base md:text-xl font-bold text-primary">{timeLeft.minutes}</span>
                <span className="text-[10px] md:text-xs text-muted-foreground">Min</span>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-background/90 px-2 md:px-3 py-1.5 min-w-[40px] md:min-w-[50px]">
                <span className="font-display text-base md:text-xl font-bold text-primary">{timeLeft.seconds}</span>
                <span className="text-[10px] md:text-xs text-muted-foreground">Sec</span>
            </div>
        </div>
    );
}

export function HotDeals() {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const nextDeal = () => {
        setCurrentIndex((prev) => (prev + 1) % hotDeals.length);
    };

    const prevDeal = () => {
        setCurrentIndex((prev) => (prev - 1 + hotDeals.length) % hotDeals.length);
    };

    const currentDeal = hotDeals[currentIndex];

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold mb-1">Hot Deals</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">Limited time offers - Act fast!</p>
                </div>
                <TrendingDown className="h-6 w-6 md:h-8 md:w-8 text-primary animate-pulse-glow" />
            </div>

            {/* Single Property Display */}
            <div className="relative">
                <Link href={`/properties/${currentDeal.id}`}>
                    <Card className="group overflow-hidden hover-lift">
                        {/* Image Section - Full Width */}
                        <div className="relative aspect-[16/9] overflow-hidden">
                            <Image
                                src={currentDeal.image}
                                alt={currentDeal.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                            {/* Discount Badge */}
                            <Badge className="absolute left-3 md:left-4 top-3 md:top-4 bg-gradient-to-r from-red-600 to-orange-600 text-white border-0 shadow-lg text-xs md:text-base px-2.5 md:px-3 py-1 md:py-1.5">
                                {currentDeal.discount}% OFF
                            </Badge>

                            {/* Countdown Timer */}
                            <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 right-2 md:right-3">
                                <div className="mb-1 md:mb-1.5 flex items-center gap-1.5 md:gap-2 text-white">
                                    <Clock className="h-3.5 w-3.5 md:h-4 md:w-4" />
                                    <span className="text-xs md:text-sm font-medium">Ends in:</span>
                                </div>
                                <CountdownTimer endsAt={currentDeal.endsAt} />
                            </div>
                        </div>

                        {/* Content Section - Below Image */}
                        <CardContent className="p-4 md:p-6">
                            <h4 className="font-display text-xl md:text-3xl font-bold mb-1 md:mb-1.5 transition-colors group-hover:text-primary line-clamp-2">
                                {currentDeal.title}
                            </h4>
                            <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">{currentDeal.location}</p>

                            {/* Property Stats */}
                            <div className="mb-4 md:mb-5 flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-base text-muted-foreground">
                                <div className="flex items-center gap-1.5 md:gap-2">
                                    <Bed className="h-4 w-4 md:h-5 md:w-5" />
                                    <span>{currentDeal.bedrooms} Beds</span>
                                </div>
                                <div className="flex items-center gap-1.5 md:gap-2">
                                    <Bath className="h-4 w-4 md:h-5 md:w-5" />
                                    <span>{currentDeal.bathrooms} Baths</span>
                                </div>
                                <div className="flex items-center gap-1.5 md:gap-2">
                                    <Maximize className="h-4 w-4 md:h-5 md:w-5" />
                                    <span>{formatNumber(currentDeal.sqft)} sqft</span>
                                </div>
                            </div>

                            {/* Price Section */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 md:gap-4">
                                <div>
                                    <p className="text-xs md:text-sm text-muted-foreground line-through mb-0.5">
                                        {formatPrice(currentDeal.originalPrice)}
                                    </p>
                                    <p className="font-display text-2xl md:text-4xl font-bold text-primary">
                                        {formatPrice(currentDeal.discountedPrice)}
                                    </p>
                                </div>
                                <Button className="bg-primary hover:bg-primary/90 w-full sm:w-auto px-6 md:px-8 py-4 md:py-5 text-sm md:text-base">
                                    View Deal Details
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </Link>

                {/* Navigation Buttons - Desktop Only */}
                <div className="hidden md:flex items-center justify-center gap-4 mt-5">
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={prevDeal}
                        className="flex items-center gap-2 hover:bg-primary hover:text-white transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        Previous
                    </Button>

                    {/* Dots Indicator */}
                    <div className="flex items-center gap-2">
                        {hotDeals.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'w-8 bg-primary'
                                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                                    }`}
                                aria-label={`Go to deal ${index + 1}`}
                            />
                        ))}
                    </div>

                    <Button
                        variant="outline"
                        size="lg"
                        onClick={nextDeal}
                        className="flex items-center gap-2 hover:bg-primary hover:text-white transition-colors"
                    >
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </Button>
                </div>

                {/* Mobile Swipe Indicator */}
                <div className="md:hidden flex items-center justify-center gap-2 mt-4">
                    {hotDeals.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'w-8 bg-primary'
                                : 'w-2 bg-muted-foreground/30'
                                }`}
                            aria-label={`Go to deal ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
