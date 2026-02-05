'use client';

import Image from 'next/image';
import { FloatingNav } from '@/components/floating-nav';
import { PropertySectionTabs } from '@/components/property-section-tabs';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Maximize, Phone, Mail } from 'lucide-react';

export default function SkylinePenthousePage() {
    return (
        <div className="min-h-screen bg-white">
            <FloatingNav />
            <PropertySectionTabs />

            {/* Video Hero Section */}
            <section className="relative h-screen overflow-hidden" id="overview">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="https://cdn.coverr.co/videos/coverr-aerial-view-of-new-york-city-4512/1080p.mp4" type="video/mp4" />
                </video>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

                {/* Content */}
                <div className="relative h-full flex items-center justify-center text-center px-8">
                    <div className="max-w-5xl">
                        <div className="mb-6">
                            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-[0.3em] rounded-full border border-white/20">
                                Exclusive Listing
                            </span>
                        </div>
                        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-[0.95] mb-8">
                            Skyline<br />
                            <span className="italic font-light">Penthouse</span>
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
                            <div className="flex items-center text-white/90 text-lg md:text-xl">
                                <MapPin className="mr-2 h-5 w-5" />
                                <span>Downtown Manhattan, NYC</span>
                            </div>
                            <div className="h-6 w-px bg-white/30"></div>
                            <div className="text-3xl md:text-4xl font-light text-white">
                                $12.5M
                            </div>
                        </div>
                        <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
                            A masterpiece of contemporary design suspended above the city.
                            Experience unparalleled luxury with 360-degree skyline views.
                        </p>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
                        <div className="w-1 h-2 bg-white/50 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Property Highlights */}
            <section className="py-24 bg-black text-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <Bed className="h-10 w-10 text-[#d4af37]" />
                            </div>
                            <div className="text-4xl font-light mb-2">4</div>
                            <div className="text-sm uppercase tracking-wider text-white/60">Bedrooms</div>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <Bath className="h-10 w-10 text-[#d4af37]" />
                            </div>
                            <div className="text-4xl font-light mb-2">5</div>
                            <div className="text-sm uppercase tracking-wider text-white/60">Bathrooms</div>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <Maximize className="h-10 w-10 text-[#d4af37]" />
                            </div>
                            <div className="text-4xl font-light mb-2">6,800</div>
                            <div className="text-sm uppercase tracking-wider text-white/60">Sq. Ft.</div>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="h-10 w-10 text-[#d4af37] flex items-center justify-center text-2xl">🏢</div>
                            </div>
                            <div className="text-4xl font-light mb-2">45th</div>
                            <div className="text-sm uppercase tracking-wider text-white/60">Floor</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="py-32 bg-white" id="gallery">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-5xl md:text-6xl mb-6">Gallery</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Explore every detail of this extraordinary residence
                        </p>
                    </div>

                    {/* 3-Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
                            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
                            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
                            'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
                            'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
                            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
                        ].map((img, idx) => (
                            <div
                                key={idx}
                                className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
                            >
                                <Image
                                    src={img}
                                    alt={`Gallery image ${idx + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-32 bg-[#f8f8f8]" id="features">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-20">
                        <h2 className="font-display text-5xl md:text-6xl mb-6">Distinguished Features</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-2xl font-light mb-6 border-b border-gray-300 pb-4">Interior</h3>
                            <ul className="space-y-4 text-lg text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-[#d4af37] mr-3">•</span>
                                    <span>Floor-to-ceiling windows with panoramic city views</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#d4af37] mr-3">•</span>
                                    <span>Italian marble flooring throughout</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#d4af37] mr-3">•</span>
                                    <span>Custom Boffi kitchen with Gaggenau appliances</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#d4af37] mr-3">•</span>
                                    <span>Smart home automation system</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#d4af37] mr-3">•</span>
                                    <span>Private elevator access</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-light mb-6 border-b border-gray-300 pb-4">Amenities</h3>
                            <ul className="space-y-4 text-lg text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-[#d4af37] mr-3">•</span>
                                    <span>Private rooftop terrace with outdoor kitchen</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#d4af37] mr-3">•</span>
                                    <span>Concierge service 24/7</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#d4af37] mr-3">•</span>
                                    <span>Private fitness center and spa</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#d4af37] mr-3">•</span>
                                    <span>Wine cellar and tasting room</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#d4af37] mr-3">•</span>
                                    <span>Secured parking for 3 vehicles</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Amenities Visual Section */}
            <section className="py-32 bg-white" id="amenities">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-[4/3]">
                            <Image
                                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200"
                                alt="Luxury amenities"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </div>
                        <div>
                            <h2 className="font-display text-5xl mb-8">Unparalleled Lifestyle</h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                Every detail has been meticulously crafted to provide an extraordinary living experience.
                                From the moment you step into your private elevator, you'll understand what it means to live at the pinnacle of luxury.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                This residence offers more than just a home—it's a sanctuary above the city,
                                where sophistication meets comfort in perfect harmony.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-32 bg-black text-white">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <h2 className="font-display text-5xl md:text-6xl mb-8">Schedule a Private Viewing</h2>
                    <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                        Experience this extraordinary penthouse in person. Contact our luxury property specialists today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-[#d4af37] hover:bg-[#c4a137] text-black px-8 py-6 text-lg rounded-full">
                            <Phone className="mr-2 h-5 w-5" />
                            Call Now
                        </Button>
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full">
                            <Mail className="mr-2 h-5 w-5" />
                            Email Inquiry
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
