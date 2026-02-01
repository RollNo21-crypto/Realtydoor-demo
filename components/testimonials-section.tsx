'use client';

import * as React from 'react';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    image: string;
    rating: number;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Sarah Johnson',
        role: 'CEO',
        company: 'Tech Innovations Inc.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
        rating: 5,
        quote: 'The team at CURATED made finding our dream office space effortless. Their attention to detail and market knowledge is unparalleled.',
    },
    {
        id: '2',
        name: 'Michael Chen',
        role: 'Real Estate Investor',
        company: 'Chen Holdings',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        rating: 5,
        quote: 'I\'ve worked with many real estate platforms, but CURATED stands out for their verified listings and transparent process. Highly recommended!',
    },
    {
        id: '3',
        name: 'Emily Rodriguez',
        role: 'Homeowner',
        company: 'Private Client',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
        rating: 5,
        quote: 'From the first viewing to closing, the experience was seamless. The property exceeded our expectations, and the team was incredibly supportive.',
    },
    {
        id: '4',
        name: 'David Thompson',
        role: 'Business Owner',
        company: 'Thompson Enterprises',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
        rating: 5,
        quote: 'Outstanding service! They helped us find the perfect commercial space for our expanding business. The entire process was professional and efficient.',
    },
];

export function TestimonialsSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    );

    return (
        <section className="bg-muted py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <h2 className="font-display text-4xl md:text-5xl mb-6">
                        What Our Clients Say
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Trusted by thousands of satisfied clients worldwide
                    </p>
                </div>

                <Carousel
                    plugins={[plugin.current]}
                    className="mx-auto max-w-5xl"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {testimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id}>
                                <Card className="border-0 shadow-lg">
                                    <CardContent className="p-12">
                                        <div className="flex flex-col items-center text-center">
                                            {/* Quote Icon */}
                                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                                <Quote className="h-8 w-8 text-primary" />
                                            </div>

                                            {/* Rating */}
                                            <div className="mb-6 flex gap-1">
                                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="h-5 w-5 fill-gold text-gold"
                                                    />
                                                ))}
                                            </div>

                                            {/* Quote */}
                                            <blockquote className="mb-8 text-xl leading-relaxed text-foreground md:text-2xl">
                                                "{testimonial.quote}"
                                            </blockquote>

                                            {/* Author */}
                                            <div className="flex flex-col items-center">
                                                <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full ring-4 ring-primary/20">
                                                    <Image
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="font-display text-xl font-bold">
                                                        {testimonial.name}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {testimonial.role}, {testimonial.company}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0 -translate-x-12" />
                    <CarouselNext className="right-0 translate-x-12" />
                </Carousel>
            </div>
        </section>
    );
}
