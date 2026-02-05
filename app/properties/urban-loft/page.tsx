'use client';

import Image from 'next/image';
import { FloatingNav } from '@/components/floating-nav';
import { PropertySectionTabs } from '@/components/property-section-tabs';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Maximize } from 'lucide-react';

export default function UrbanLoftPage() {
    return (
        <div className="min-h-screen bg-white">
            <FloatingNav />
            <PropertySectionTabs />

            {/* Split-Screen Hero */}
            <section className="relative h-screen flex flex-col md:flex-row" id="overview">
                {/* Left: Video */}
                <div className="w-full md:w-1/2 relative overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="https://cdn.coverr.co/videos/coverr-modern-apartment-interior-3705/1080p.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-1/2 relative">
                    <Image
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920"
                        alt="Urban Loft"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* Centered Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center px-8">
                    <div className="bg-white/95 backdrop-blur-md p-12 md:p-16 rounded-3xl max-w-2xl text-center shadow-2xl">
                        <div className="mb-6">
                            <span className="inline-block px-5 py-2 bg-black text-white text-xs font-bold uppercase tracking-[0.3em] rounded-full">
                                Industrial Chic
                            </span>
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl mb-6 leading-tight">
                            Urban Loft
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
                            <div className="flex items-center text-gray-700">
                                <MapPin className="mr-2 h-5 w-5" />
                                <span className="text-lg">SoHo, New York</span>
                            </div>
                            <div className="h-6 w-px bg-gray-300"></div>
                            <div className="text-3xl font-light">$8.2M</div>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            A stunning conversion of historic industrial space into a contemporary masterpiece.
                            Soaring ceilings and original architectural details.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Stats Bar */}
            <section className="py-12 bg-black text-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="flex flex-wrap justify-around gap-8">
                        <div className="flex items-center gap-3">
                            <Bed className="h-6 w-6 text-[#d4af37]" />
                            <div>
                                <div className="text-2xl font-light">3</div>
                                <div className="text-xs uppercase tracking-wider text-white/60">Bedrooms</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Bath className="h-6 w-6 text-[#d4af37]" />
                            <div>
                                <div className="text-2xl font-light">3.5</div>
                                <div className="text-xs uppercase tracking-wider text-white/60">Bathrooms</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Maximize className="h-6 w-6 text-[#d4af37]" />
                            <div>
                                <div className="text-2xl font-light">4,200</div>
                                <div className="text-xs uppercase tracking-wider text-white/60">Sq. Ft.</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="h-6 w-6 text-[#d4af37] flex items-center justify-center text-lg">🏗️</div>
                            <div>
                                <div className="text-2xl font-light">1890</div>
                                <div className="text-xs uppercase tracking-wider text-white/60">Built</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alternating Image/Video Sections */}
            <section className="py-32 bg-white" id="features">
                {/* Section 1: Image Left, Text Right */}
                <div className="max-w-7xl mx-auto px-8 mb-32">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-[3/4]">
                            <Image
                                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200"
                                alt="Living Space"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </div>
                        <div>
                            <h2 className="font-display text-5xl mb-6">Industrial Heritage</h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                Originally a textile factory built in 1890, this loft has been meticulously transformed
                                while preserving its industrial character.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Exposed brick walls, original timber beams, and cast-iron columns create an authentic
                                backdrop for contemporary living.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2: Text Left, Video Right */}
                <div className="max-w-7xl mx-auto px-8 mb-32">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="font-display text-5xl mb-6">Modern Luxury</h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                State-of-the-art systems and finishes complement the historic architecture.
                                Smart home technology throughout.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Chef's kitchen with Miele appliances, spa-like bathrooms with radiant heated floors,
                                and custom millwork throughout.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 relative aspect-video rounded-2xl overflow-hidden">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="https://cdn.coverr.co/videos/coverr-luxury-kitchen-4513/1080p.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>

                {/* Section 3: Image Left, Text Right */}
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-[3/4]">
                            <Image
                                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200"
                                alt="Master Suite"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </div>
                        <div>
                            <h2 className="font-display text-5xl mb-6">Soaring Spaces</h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                14-foot ceilings and oversized windows flood the space with natural light.
                                The open floor plan creates a sense of boundless freedom.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Perfect for entertaining or quiet contemplation, this loft adapts to your lifestyle
                                with effortless grace.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-32 bg-[#f8f8f8]" id="gallery">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-5xl md:text-6xl mb-6">Distinctive Features</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Original Details',
                                desc: 'Exposed brick, timber beams, cast-iron columns',
                                img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'
                            },
                            {
                                title: 'Chef\'s Kitchen',
                                desc: 'Miele appliances, marble countertops, wine storage',
                                img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'
                            },
                            {
                                title: 'Master Suite',
                                desc: 'Walk-in closet, spa bathroom, private terrace',
                                img: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800'
                            },
                            {
                                title: 'Smart Home',
                                desc: 'Integrated automation, climate control, security',
                                img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800'
                            },
                            {
                                title: 'Private Terrace',
                                desc: '800 sq ft outdoor space with city views',
                                img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800'
                            },
                            {
                                title: 'Parking',
                                desc: 'Deeded parking for 2 vehicles',
                                img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800'
                            },
                        ].map((feature, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-xl">
                                    <Image
                                        src={feature.img}
                                        alt={feature.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Amenities */}
            <section className="py-32 bg-white" id="amenities">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="font-display text-5xl mb-8">Building Amenities</h2>
                            <ul className="space-y-4 text-lg text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-[#d4af37] mr-3 mt-1">•</span>
                                    <span>24-hour doorman and concierge service</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#d4af37] mr-3 mt-1">•</span>
                                    <span>Rooftop terrace with panoramic city views</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#d4af37] mr-3 mt-1">•</span>
                                    <span>State-of-the-art fitness center</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#d4af37] mr-3 mt-1">•</span>
                                    <span>Residents' lounge and meeting rooms</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-[#d4af37] mr-3 mt-1">•</span>
                                    <span>Bike storage and package room</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200"
                                alt="Building amenities"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-32 bg-black text-white">
                <div className="max-w-4xl mx-auto px-8 text-center">
                    <h2 className="font-display text-5xl md:text-6xl mb-8">
                        Experience Urban Living
                    </h2>
                    <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                        Discover the perfect blend of historic character and modern luxury.
                    </p>
                    <Button className="bg-[#d4af37] hover:bg-[#c4a137] text-black px-10 py-6 text-lg rounded-full">
                        Schedule a Tour
                    </Button>
                </div>
            </section>
        </div>
    );
}
