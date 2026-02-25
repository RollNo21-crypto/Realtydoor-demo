'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Bed, Bath, Maximize } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { formatPrice, formatNumber } from '@/lib/utils';

interface PropertyImage {
    id: string;
    url: string;
    alt: string | null;
}

interface PropertyCardProps {
    id: string;
    title: string;
    price: number | string;
    address: string;
    city: string;
    state: string;
    bedrooms: number;
    bathrooms: number | string;
    sqft: number;
    propertyType: string;
    status: string;
    images: PropertyImage[];
    featured?: boolean;
    isFavorite?: boolean;
    onToggleFavorite?: (propertyId: string) => void;
}

export function PropertyCard({
    id,
    title,
    price,
    address,
    city,
    state,
    bedrooms,
    bathrooms,
    sqft,
    propertyType,
    status,
    images,
    featured = false,
    isFavorite = false,
    onToggleFavorite,
}: PropertyCardProps) {
    const [imageError, setImageError] = React.useState(false);
    const [imageLoaded, setImageLoaded] = React.useState(false);

    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (onToggleFavorite) {
            onToggleFavorite(id);
        }
    };

    // Fallback placeholder for failed or missing images
    const PlaceholderImage = () => (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
            <div className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/50 dark:bg-black/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                    </svg>
                </div>
                <p className="text-sm font-medium text-slate-400">{title}</p>
            </div>
        </div>
    );

    return (
        <Link href={`/properties/${id}`}>
            <Card className="group overflow-hidden border border-border/50 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10" />

                    {images && images.length > 0 && !imageError ? (
                        <Carousel className="w-full h-full">
                            <CarouselContent className="h-full">
                                {images.slice(0, 5).map((image) => (
                                    <CarouselItem key={image.id} className="h-full">
                                        <div className="relative aspect-[16/10] w-full">
                                            <Image
                                                src={image.url}
                                                alt={image.alt || title}
                                                fill
                                                className={`object-cover transition-all duration-700 group-hover:scale-105 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                onError={() => setImageError(true)}
                                                onLoad={() => setImageLoaded(true)}
                                                priority={featured}
                                            />
                                            {!imageLoaded && (
                                                <div className="absolute inset-0 animate-pulse bg-slate-200 dark:bg-slate-800" />
                                            )}
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            {images.length > 1 && (
                                <>
                                    <CarouselPrevious className="left-3 h-8 w-8 opacity-0 transition-all duration-300 group-hover:opacity-100 hover:scale-110 z-20 bg-white/95 hover:bg-white border-0 shadow-lg" />
                                    <CarouselNext className="right-3 h-8 w-8 opacity-0 transition-all duration-300 group-hover:opacity-100 hover:scale-110 z-20 bg-white/95 hover:bg-white border-0 shadow-lg" />
                                </>
                            )}
                        </Carousel>
                    ) : (
                        <PlaceholderImage />
                    )}

                    {/* Badges */}
                    <div className="absolute left-3 top-3 flex gap-2 z-20">
                        {featured && (
                            <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 shadow-lg font-semibold px-3 py-1">
                                Featured
                            </Badge>
                        )}
                        {status === 'AVAILABLE' && (
                            <Badge variant="secondary" className="bg-white/95 text-slate-700 backdrop-blur-sm border-0 font-medium px-3 py-1">
                                Available
                            </Badge>
                        )}
                        {status === 'PENDING' && (
                            <Badge variant="secondary" className="bg-yellow-500/95 text-white backdrop-blur-sm border-0 font-medium px-3 py-1">
                                Pending
                            </Badge>
                        )}
                    </div>

                    {/* Favorite Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-3 top-3 h-9 w-9 rounded-full bg-white/95 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-110 z-20 shadow-md"
                        onClick={handleFavoriteClick}
                    >
                        <Heart
                            className={`h-4 w-4 transition-all ${isFavorite ? 'fill-red-500 text-red-500 scale-110' : 'text-slate-700'}`}
                        />
                    </Button>
                </div>

                <CardContent className="p-5">
                    <div className="mb-3">
                        <h3 className="font-display text-lg font-bold leading-snug mb-1.5 transition-colors group-hover:text-primary line-clamp-2">
                            {title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">
                            {city}, {state}
                        </p>
                    </div>

                    <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground border-t border-b border-border/50 py-3">
                        <div className="flex items-center gap-1.5">
                            <Bed className="h-4 w-4 text-primary/70" />
                            <span className="font-medium">{bedrooms}</span>
                        </div>
                        <div className="h-4 w-px bg-border" />
                        <div className="flex items-center gap-1.5">
                            <Bath className="h-4 w-4 text-primary/70" />
                            <span className="font-medium">{bathrooms}</span>
                        </div>
                        <div className="h-4 w-px bg-border" />
                        <div className="flex items-center gap-1.5">
                            <Maximize className="h-4 w-4 text-primary/70" />
                            <span className="font-medium">{formatNumber(sqft)}</span>
                        </div>
                    </div>

                    <div className="flex items-end justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Price</p>
                            <p className="font-display text-2xl font-bold text-primary">
                                {formatPrice(Number(price))}
                            </p>
                        </div>
                        <Badge variant="outline" className="capitalize font-medium border-primary/30 text-primary px-3 py-1">
                            {propertyType.toLowerCase()}
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
