'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FloatingNav } from '@/components/floating-nav';
import { PropertySectionTabs } from '@/components/property-section-tabs';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Maximize, Trees } from 'lucide-react';

export default function MountainEstatePage() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <FloatingNav />
            <PropertySectionTabs />

            {/* Parallax Hero */}
            <section className="relative h-screen overflow-hidden" id="overview">
                {/* Parallax Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920)',
                        transform: `translateY(${scrollY * 0.5}px)`,
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70"></div>

                {/* Content at Bottom */}
                <div className="relative h-full flex items-end pb-24 px-8">
                    <div className="max-w-7xl mx-auto w-full">
                        <div className="max-w-4xl">
                            <div className="mb-6">
                                <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-[0.3em] rounded-full border border-white/20">
                                    Mountain Retreat
                                </span>
                            </div>
                            <h1 className="font-display text-7xl md:text-9xl text-white leading-[0.9] mb-8">
                                Mountain<br />Estate
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 mb-8">
                                <div className="flex items-center text-white/90 text-xl">
                                    <MapPin className="mr-2 h-6 w-6" />
                                    <span>Aspen, Colorado</span>
                                </div>
                                <div className="h-8 w-px bg-white/30"></div>
                                <div className="text-4xl font-light text-white">$24.5M</div>
                            </div>
                            <p className="text-2xl text-white/90 font-light max-w-3xl leading-relaxed">
                                A private mountain sanctuary offering unparalleled luxury amidst breathtaking alpine scenery.
                                Your own piece of paradise at 9,000 feet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky Sidebar with Stats */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid lg:grid-cols-3 gap-16">
                        {/* Sticky Sidebar */}
                        <div className="lg:sticky lg:top-32 lg:self-start">
                            <div className="bg-[#f8f8f8] p-8 rounded-2xl">
                                <h3 className="font-display text-3xl mb-8">Property Details</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <Bed className="h-6 w-6 text-[#d4af37]" />
                                        <div>
                                            <div className="text-2xl font-light">7</div>
                                            <div className="text-sm text-gray-600">Bedrooms</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Bath className="h-6 w-6 text-[#d4af37]" />
                                        <div>
                                            <div className="text-2xl font-light">9</div>
                                            <div className="text-sm text-gray-600">Bathrooms</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Maximize className="h-6 w-6 text-[#d4af37]" />
                                        <div>
                                            <div className="text-2xl font-light">12,500</div>
                                            <div className="text-sm text-gray-600">Sq. Ft.</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Trees className="h-6 w-6 text-[#d4af37]" />
                                        <div>
                                            <div className="text-2xl font-light">35</div>
                                            <div className="text-sm text-gray-600">Acres</div>
                                        </div>
                                    </div>
                                </div>
                                <Button className="w-full mt-8 bg-[#d4af37] hover:bg-[#c4a137] text-black py-6 rounded-full">
                                    Request Info
                                </Button>
                            </div>
                        </div>

                        {/* Scrolling Content */}
                        <div className="lg:col-span-2 space-y-16">
                            <div>
                                <h2 className="font-display text-5xl mb-6">Alpine Majesty</h2>
                                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                                    Perched at 9,000 feet elevation, this extraordinary estate offers 360-degree views of the
                                    Rocky Mountains. A rare opportunity to own one of Aspen's most prestigious properties.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Designed by renowned architect Peter Bohlin, the residence seamlessly integrates with its
                                    natural surroundings while providing every modern luxury imaginable.
                                </p>
                            </div>

                            <div className="relative aspect-video rounded-2xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=1920"
                                    alt="Mountain view"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div>
                                <h2 className="font-display text-5xl mb-6">Architectural Excellence</h2>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Floor-to-ceiling windows frame the spectacular mountain vistas. Natural materials including
                                    reclaimed wood, stone, and steel create a warm, sophisticated atmosphere that honors the
                                    mountain environment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="py-32 bg-black" id="features">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-5xl md:text-6xl text-white mb-6">Estate Tour</h2>
                        <p className="text-xl text-white/80 max-w-2xl mx-auto">
                            Experience the grandeur of this mountain masterpiece
                        </p>
                    </div>
                    <div className="relative aspect-video rounded-2xl overflow-hidden">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src="https://cdn.coverr.co/videos/coverr-mountain-landscape-4514/1080p.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>

            {/* Parallax Image Section */}
            <section className="relative h-screen overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920)',
                        transform: `translateY(${scrollY * 0.3}px)`,
                    }}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-8">
                        <h2 className="font-display text-6xl md:text-7xl mb-6">
                            Your Private Sanctuary
                        </h2>
                        <p className="text-2xl font-light">
                            35 acres of pristine mountain wilderness, exclusively yours
                        </p>
                    </div>
                </div>
            </section>

            {/* Features with Images */}
            <section className="py-32 bg-white" id="gallery">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid md:grid-cols-2 gap-16 mb-16">
                        {[
                            {
                                title: 'Ski-In/Ski-Out Access',
                                desc: 'Direct access to Aspen Mountain slopes from your back door',
                                img: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=1200'
                            },
                            {
                                title: 'Indoor-Outdoor Living',
                                desc: 'Expansive terraces and outdoor entertaining areas',
                                img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200'
                            },
                            {
                                title: 'Spa & Wellness',
                                desc: 'Private spa, sauna, steam room, and fitness center',
                                img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200'
                            },
                            {
                                title: 'Wine Cellar',
                                desc: 'Temperature-controlled cellar for 2,000+ bottles',
                                img: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200'
                            },
                        ].map((feature, idx) => (
                            <div key={idx} className="group">
                                <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-2xl">
                                    <Image
                                        src={feature.img}
                                        alt={feature.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <h3 className="text-2xl font-medium mb-3">{feature.title}</h3>
                                <p className="text-lg text-gray-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Gallery */}
            <section className="py-32 bg-[#f8f8f8]" id="amenities">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-5xl md:text-6xl mb-6">Amenities</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: '🎿', title: 'Ski Room', desc: 'Heated boot warmers and storage' },
                            { icon: '🏊', title: 'Heated Pool', desc: 'Year-round outdoor pool and hot tub' },
                            { icon: '🎬', title: 'Theater', desc: '20-seat private screening room' },
                            { icon: '🍷', title: 'Tasting Room', desc: 'Private wine tasting lounge' },
                            { icon: '🚁', title: 'Helipad', desc: 'Private helicopter landing pad' },
                            { icon: '🚗', title: 'Garage', desc: 'Heated 8-car garage' },
                        ].map((amenity, idx) => (
                            <div key={idx} className="text-center bg-white p-8 rounded-2xl">
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
                    <h2 className="font-display text-5xl md:text-6xl mb-8">
                        Discover Mountain Luxury
                    </h2>
                    <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
                        Schedule a private helicopter tour of this extraordinary mountain estate.
                    </p>
                    <Button className="bg-[#d4af37] hover:bg-[#c4a137] text-black px-10 py-6 text-lg rounded-full">
                        Arrange a Visit
                    </Button>
                </div>
            </section>
        </div>
    );
}
