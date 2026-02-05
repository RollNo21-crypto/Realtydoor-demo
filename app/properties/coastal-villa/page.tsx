'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FloatingNav } from '@/components/floating-nav';
import { PropertySectionTabs } from '@/components/property-section-tabs';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Maximize, ChevronLeft, ChevronRight, Play } from 'lucide-react';

const heroImages = [
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920',
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920',
];

export default function CoastalVillaPage() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

    return (
        <div className="min-h-screen bg-white">
            <FloatingNav />
            <PropertySectionTabs />

            {/* Carousel Hero */}
            <section className="relative h-screen overflow-hidden" id="overview">
                {/* Image Carousel */}
                {heroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={img}
                            alt={`Coastal Villa ${idx + 1}`}
                            fill
                            className="object-cover"
                            priority={idx === 0}
                        />
                    </div>
                ))}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                    {heroImages.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-2 rounded-full transition-all ${idx === currentSlide ? 'w-12 bg-white' : 'w-2 bg-white/50'
                                }`}
                        />
                    ))}
                </div>

                {/* Content */}
                <div className="relative h-full flex items-end pb-24 px-8">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="max-w-3xl">
                            <div className="mb-4">
                                <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-[0.3em] rounded-full border border-white/20">
                                    Oceanfront Estate
                                </span>
                            </div>
                            <h1 className="font-display text-6xl md:text-8xl text-white leading-[1.1] mb-6">
                                Coastal Villa
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 mb-6">
                                <div className="flex items-center text-white/90 text-lg">
                                    <MapPin className="mr-2 h-5 w-5" />
                                    <span>Malibu, California</span>
                                </div>
                                <div className="h-6 w-px bg-white/30"></div>
                                <div className="text-3xl font-light text-white">$18.9M</div>
                            </div>
                            <p className="text-xl text-white/80 font-light leading-relaxed">
                                A breathtaking oceanfront sanctuary where modern architecture meets coastal elegance.
                                Direct beach access and panoramic Pacific views.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Property Stats */}
            <section className="py-20 bg-[#f8f8f8]">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <Bed className="h-8 w-8 mx-auto mb-3 text-[#d4af37]" />
                            <div className="text-3xl font-light mb-1">6</div>
                            <div className="text-sm uppercase tracking-wider text-gray-500">Bedrooms</div>
                        </div>
                        <div className="text-center">
                            <Bath className="h-8 w-8 mx-auto mb-3 text-[#d4af37]" />
                            <div className="text-3xl font-light mb-1">7</div>
                            <div className="text-sm uppercase tracking-wider text-gray-500">Bathrooms</div>
                        </div>
                        <div className="text-center">
                            <Maximize className="h-8 w-8 mx-auto mb-3 text-[#d4af37]" />
                            <div className="text-3xl font-light mb-1">9,200</div>
                            <div className="text-sm uppercase tracking-wider text-gray-500">Sq. Ft.</div>
                        </div>
                        <div className="text-center">
                            <div className="h-8 w-8 mx-auto mb-3 text-[#d4af37] flex items-center justify-center text-xl">🏖️</div>
                            <div className="text-3xl font-light mb-1">150</div>
                            <div className="text-sm uppercase tracking-wider text-gray-500">Ft. Beach</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Tour Section */}
            <section className="py-32 bg-white" id="features">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-5xl md:text-6xl mb-6">Property Tour</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Take a cinematic journey through this extraordinary coastal estate
                        </p>
                    </div>

                    {/* Main Video */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 group cursor-pointer">
                        <Image
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920"
                            alt="Video thumbnail"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play className="h-8 w-8 text-black ml-1" fill="black" />
                            </div>
                        </div>
                    </div>

                    {/* Video Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { title: 'Aerial View', thumb: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800' },
                            { title: 'Interior Walkthrough', thumb: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800' },
                        ].map((video, idx) => (
                            <div key={idx} className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer">
                                <Image
                                    src={video.thumb}
                                    alt={video.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play className="h-6 w-6 text-black ml-1" fill="black" />
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 text-white font-medium text-lg">
                                    {video.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Split Content Section */}
            <section className="py-32 bg-[#f8f8f8]" id="gallery">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                        <div className="order-2 md:order-1">
                            <h2 className="font-display text-5xl mb-6">Architectural Excellence</h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                Designed by renowned architect Richard Meier, this masterpiece seamlessly blends
                                contemporary design with the natural beauty of the California coastline.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Floor-to-ceiling glass walls dissolve the boundaries between indoor and outdoor living,
                                while clean lines and premium materials create an atmosphere of refined sophistication.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 relative aspect-[4/3]">
                            <Image
                                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200"
                                alt="Architecture"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-[4/3]">
                            <Image
                                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200"
                                alt="Lifestyle"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </div>
                        <div>
                            <h2 className="font-display text-5xl mb-6">Coastal Living Redefined</h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                Wake up to the sound of waves and endless ocean views. This villa offers an unparalleled
                                lifestyle where every day feels like a vacation.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Private beach access, infinity pool, outdoor entertainment areas, and meticulously
                                landscaped gardens create your own private paradise.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Amenities */}
            <section className="py-32 bg-white" id="amenities">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-5xl md:text-6xl mb-6">Premium Amenities</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { icon: '🏊', title: 'Infinity Pool', desc: 'Oceanfront infinity pool with spa' },
                            { icon: '🎾', title: 'Tennis Court', desc: 'Professional-grade tennis court' },
                            { icon: '🍷', title: 'Wine Cellar', desc: 'Climate-controlled for 500+ bottles' },
                            { icon: '🎬', title: 'Home Theater', desc: 'State-of-the-art screening room' },
                            { icon: '💪', title: 'Fitness Center', desc: 'Fully equipped private gym' },
                            { icon: '🚗', title: 'Garage', desc: 'Secure parking for 6 vehicles' },
                        ].map((amenity, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-5xl mb-4">{amenity.icon}</div>
                                <h3 className="text-xl font-medium mb-2">{amenity.title}</h3>
                                <p className="text-gray-600">{amenity.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-32 bg-black text-white">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <h2 className="font-display text-5xl md:text-6xl mb-8">Experience Coastal Luxury</h2>
                    <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                        Schedule a private tour of this exceptional oceanfront estate.
                    </p>
                    <Button className="bg-[#d4af37] hover:bg-[#c4a137] text-black px-10 py-6 text-lg rounded-full">
                        Request a Viewing
                    </Button>
                </div>
            </section>
        </div>
    );
}
