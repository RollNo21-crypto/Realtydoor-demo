'use client';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

import Image from 'next/image';
import { FloatingNav } from '@/components/floating-nav';
import { PropertySectionTabs } from '@/components/property-section-tabs';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Maximize, Waves } from 'lucide-react';

export default function BeachfrontMansionPage() {
    return (
        <div className="min-h-screen bg-black">
            <FloatingNav />
            <PropertySectionTabs />

            {/* Full-Screen Video Hero */}
            <section className="relative h-screen overflow-hidden" id="overview">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="https://cdn.coverr.co/videos/coverr-ocean-waves-on-the-beach-4515/1080p.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="relative h-full flex items-center justify-center text-center px-8">
                    <div className="max-w-6xl">
                        <h1 className="font-display text-8xl md:text-[12rem] text-white leading-[0.85] mb-12">
                            Beachfront<br />
                            <span className="italic font-light">Mansion</span>
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
                            <div className="flex items-center text-white text-2xl">
                                <MapPin className="mr-3 h-7 w-7" />
                                <span>Miami Beach, Florida</span>
                            </div>
                            <div className="h-8 w-px bg-white/40"></div>
                            <div className="text-5xl font-light text-white">$32M</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Minimal Text Section */}
            <section className="py-32 bg-white">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <p className="text-3xl md:text-4xl font-light text-gray-800 leading-relaxed">
                        An architectural masterpiece on 200 feet of pristine white sand beach.
                        <span className="block mt-6 text-gray-600">
                            Where the ocean becomes your backyard.
                        </span>
                    </p>
                </div>
            </section>

            {/* Full-Screen Video 2: Lifestyle */}
            <section className="relative h-screen overflow-hidden" id="features">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="https://cdn.coverr.co/videos/coverr-luxury-pool-overlooking-the-ocean-4516/1080p.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <div className="relative h-full flex items-end pb-24 px-8">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-white">
                            <div>
                                <Bed className="h-10 w-10 mb-4 text-[#d4af37]" />
                                <div className="text-5xl font-light mb-2">8</div>
                                <div className="text-sm uppercase tracking-wider text-white/70">Bedrooms</div>
                            </div>
                            <div>
                                <Bath className="h-10 w-10 mb-4 text-[#d4af37]" />
                                <div className="text-5xl font-light mb-2">10</div>
                                <div className="text-sm uppercase tracking-wider text-white/70">Bathrooms</div>
                            </div>
                            <div>
                                <Maximize className="h-10 w-10 mb-4 text-[#d4af37]" />
                                <div className="text-5xl font-light mb-2">15,000</div>
                                <div className="text-sm uppercase tracking-wider text-white/70">Sq. Ft.</div>
                            </div>
                            <div>
                                <Waves className="h-10 w-10 mb-4 text-[#d4af37]" />
                                <div className="text-5xl font-light mb-2">200</div>
                                <div className="text-sm uppercase tracking-wider text-white/70">Ft. Beach</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Text Break */}
            <section className="py-32 bg-black text-white">
                <div className="max-w-5xl mx-auto px-8">
                    <h2 className="font-display text-6xl md:text-7xl mb-12">
                        Uncompromising Luxury
                    </h2>
                    <p className="text-2xl font-light leading-relaxed text-white/80">
                        Every detail has been meticulously crafted by the world's finest artisans.
                        From the Italian marble floors to the custom Boffi kitchen, this residence
                        represents the pinnacle of oceanfront living.
                    </p>
                </div>
            </section>

            {/* Full-Screen Video 3: Aerial */}
            <section className="relative h-screen overflow-hidden" id="gallery">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="https://cdn.coverr.co/videos/coverr-aerial-view-of-beach-mansion-4517/1080p.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/20"></div>

                <div className="relative h-full flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-8">
                        <h2 className="font-display text-7xl md:text-8xl mb-6">
                            Your Private Paradise
                        </h2>
                    </div>
                </div>
            </section>

            {/* Minimal Image Gallery */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920',
                            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920',
                            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920',
                            'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920',
                        ].map((img, idx) => (
                            <div key={idx} className="relative aspect-[3/2] overflow-hidden group">
                                <Image
                                    src={img}
                                    alt={`Gallery ${idx + 1}`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features - Minimal Design */}
            <section className="py-32 bg-black text-white" id="amenities">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="grid md:grid-cols-2 gap-20">
                        <div>
                            <h3 className="font-display text-4xl mb-8">Residence</h3>
                            <ul className="space-y-6 text-xl font-light">
                                <li className="border-b border-white/20 pb-4">Master suite with ocean terrace</li>
                                <li className="border-b border-white/20 pb-4">Gourmet chef's kitchen</li>
                                <li className="border-b border-white/20 pb-4">Wine cellar for 3,000 bottles</li>
                                <li className="border-b border-white/20 pb-4">Home theater and game room</li>
                                <li className="border-b border-white/20 pb-4">Private elevator</li>
                                <li className="border-b border-white/20 pb-4">Smart home automation</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-display text-4xl mb-8">Outdoor</h3>
                            <ul className="space-y-6 text-xl font-light">
                                <li className="border-b border-white/20 pb-4">Infinity pool overlooking ocean</li>
                                <li className="border-b border-white/20 pb-4">Private beach with cabana</li>
                                <li className="border-b border-white/20 pb-4">Outdoor kitchen and bar</li>
                                <li className="border-b border-white/20 pb-4">Tennis court</li>
                                <li className="border-b border-white/20 pb-4">Boat dock for 100ft yacht</li>
                                <li className="border-b border-white/20 pb-4">Helipad</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA - Cinematic */}
            <section className="relative h-screen overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="https://cdn.coverr.co/videos/coverr-sunset-over-ocean-4518/1080p.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative h-full flex items-center justify-center text-center px-8">
                    <div className="max-w-4xl">
                        <h2 className="font-display text-6xl md:text-7xl text-white mb-12">
                            Live the Dream
                        </h2>
                        <p className="text-2xl text-white/90 mb-12 font-light">
                            Schedule an exclusive showing of this extraordinary beachfront estate
                        </p>
                        <Button className="bg-[#d4af37] hover:bg-[#c4a137] text-black px-12 py-8 text-xl rounded-full">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
