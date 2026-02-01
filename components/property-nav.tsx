'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function PropertyNav() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 py-6">
            <div className="mx-auto max-w-7xl px-6">
                {/* Modern Pill-Shaped Container */}
                <div className="relative rounded-full bg-black/90 backdrop-blur-xl shadow-2xl border border-orange-500/30">
                    <div className="flex h-16 items-center justify-between px-6">
                        {/* Logo */}
                        <Link href="/" className="flex items-center z-10">
                            <Image
                                src="https://realtydoor.com/wp-content/uploads/2024/05/logo-light.svg"
                                alt="Realtydoor"
                                width={140}
                                height={32}
                                className="h-7 w-auto"
                            />
                        </Link>

                        {/* Desktop Navigation - Property Sections */}
                        <div className="hidden md:flex items-center gap-2">
                            <a
                                href="#overview"
                                className="px-5 py-2 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 hover:scale-105 rounded-full hover:bg-white/10"
                            >
                                Overview
                            </a>
                            <a
                                href="#features"
                                className="px-5 py-2 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 hover:scale-105 rounded-full hover:bg-white/10"
                            >
                                Features
                            </a>
                            <a
                                href="#gallery"
                                className="px-5 py-2 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 hover:scale-105 rounded-full hover:bg-white/10"
                            >
                                Gallery
                            </a>
                            <a
                                href="#amenities"
                                className="px-5 py-2 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 hover:scale-105 rounded-full hover:bg-white/10"
                            >
                                Amenities
                            </a>
                        </div>

                        {/* CTA Button */}
                        <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-orange-500/50 border-0">
                            Schedule Tour
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
