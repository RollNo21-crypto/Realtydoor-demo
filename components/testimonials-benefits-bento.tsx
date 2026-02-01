'use client';

import * as React from 'react';
import Image from 'next/image';
import { Star, Quote, Award, Shield, Users, TrendingUp } from 'lucide-react';

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
        quote: 'I\'ve worked with many real estate platforms, but CURATED stands out for their verified listings and transparent process.',
    },
];

export function TestimonialsBenefitsBento() {
    const [activeTestimonial, setActiveTestimonial] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-muted py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="font-display text-4xl md:text-5xl mb-6">
                        Why Choose CURATED
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Trusted by thousands of satisfied clients worldwide with unparalleled service and verified quality
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {/* Large Testimonial Card - Spans 2 columns on desktop */}
                    <div className="md:col-span-2 lg:col-span-2 md:row-span-2 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-8 md:p-10 text-white shadow-lg hover-lift group relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative z-10">
                            {/* Quote Icon */}
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                <Quote className="h-8 w-8 text-white" />
                            </div>

                            {/* Rating */}
                            <div className="mb-6 flex gap-1">
                                {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className="h-5 w-5 fill-white text-white"
                                    />
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="mb-8 text-xl md:text-2xl leading-relaxed font-light">
                                "{testimonials[activeTestimonial].quote}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="relative h-16 w-16 overflow-hidden rounded-full ring-4 ring-white/30">
                                    <Image
                                        src={testimonials[activeTestimonial].image}
                                        alt={testimonials[activeTestimonial].name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-display text-lg font-bold">
                                        {testimonials[activeTestimonial].name}
                                    </p>
                                    <p className="text-sm text-white/80">
                                        {testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}
                                    </p>
                                </div>
                            </div>

                            {/* Testimonial Indicators */}
                            <div className="mt-8 flex gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTestimonial(index)}
                                        className={`h-2 rounded-full transition-all duration-300 ${index === activeTestimonial
                                            ? 'w-8 bg-white'
                                            : 'w-2 bg-white/40 hover:bg-white/60'
                                            }`}
                                        aria-label={`View testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Premium Quality */}
                    <div className="rounded-2xl bg-background p-8 shadow-sm hover-lift group border-2 border-transparent hover:border-orange-500/20 transition-all duration-300">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/10 to-orange-600/5 transition-all duration-300 group-hover:from-orange-500/20 group-hover:to-orange-600/10">
                            <Award className="h-7 w-7 text-orange-500 animate-pulse-glow" />
                        </div>
                        <h3 className="font-display text-xl mb-3 group-hover:text-orange-500 transition-colors">
                            Premium Quality
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Only top 1% of properties that meet our rigorous standards for architecture, location, and craftsmanship.
                        </p>
                    </div>

                    {/* Verified Listings */}
                    <div className="rounded-2xl bg-background p-8 shadow-sm hover-lift group border-2 border-transparent hover:border-orange-500/20 transition-all duration-300">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/10 to-orange-600/5 transition-all duration-300 group-hover:from-orange-500/20 group-hover:to-orange-600/10">
                            <Shield className="h-7 w-7 text-orange-500 animate-pulse-glow" />
                        </div>
                        <h3 className="font-display text-xl mb-3 group-hover:text-orange-500 transition-colors">
                            Verified Listings
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Every property undergoes thorough verification including legal checks, builder credentials, and quality audits.
                        </p>
                    </div>

                    {/* Expert Guidance */}
                    <div className="rounded-2xl bg-background p-8 shadow-sm hover-lift group border-2 border-transparent hover:border-orange-500/20 transition-all duration-300">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/10 to-orange-600/5 transition-all duration-300 group-hover:from-orange-500/20 group-hover:to-orange-600/10">
                            <Users className="h-7 w-7 text-orange-500 animate-pulse-glow" />
                        </div>
                        <h3 className="font-display text-xl mb-3 group-hover:text-orange-500 transition-colors">
                            Expert Guidance
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Dedicated advisors with deep market knowledge guide you through every step of your property journey.
                        </p>
                    </div>

                    {/* Smart Investment */}
                    <div className="rounded-2xl bg-background p-8 shadow-sm hover-lift group border-2 border-transparent hover:border-orange-500/20 transition-all duration-300">
                        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/10 to-orange-600/5 transition-all duration-300 group-hover:from-orange-500/20 group-hover:to-orange-600/10">
                            <TrendingUp className="h-7 w-7 text-orange-500 animate-pulse-glow" />
                        </div>
                        <h3 className="font-display text-xl mb-3 group-hover:text-orange-500 transition-colors">
                            Smart Investment
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Access market insights, ROI analytics, and appreciation forecasts to make informed investment decisions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
