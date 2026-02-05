'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { JoinUsModal } from '@/components/join-us-modal';

export function FloatingNav() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = React.useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = React.useState(false);
    const [isJoinUsModalOpen, setIsJoinUsModalOpen] = React.useState(false);
    const dropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
    const servicesDropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDropdownEnter = () => {
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
        }
        setIsAboutDropdownOpen(true);
    };

    const handleDropdownLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setIsAboutDropdownOpen(false);
        }, 300); // 300ms delay before closing
    };

    const handleServicesDropdownEnter = () => {
        if (servicesDropdownTimeoutRef.current) {
            clearTimeout(servicesDropdownTimeoutRef.current);
        }
        setIsServicesDropdownOpen(true);
    };

    const handleServicesDropdownLeave = () => {
        servicesDropdownTimeoutRef.current = setTimeout(() => {
            setIsServicesDropdownOpen(false);
        }, 300);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'py-3'
                : 'py-6'
                }`}
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* Modern Pill-Shaped Container */}
                <div className={`relative rounded-full transition-all duration-500 ${isScrolled
                    ? 'bg-black/90 backdrop-blur-xl shadow-2xl border border-orange-500/30'
                    : 'bg-black/60 backdrop-blur-lg border border-orange-500/20'
                    }`}>
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

                        {/* Desktop Navigation */}
                        <div className="hidden items-center gap-2 lg:flex">
                            <Link
                                href="/"
                                className="px-5 py-2 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 hover:scale-105 rounded-full hover:bg-white/10"
                            >
                                Home
                            </Link>
                            <Link
                                href="/properties"
                                className="px-5 py-2 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 hover:scale-105 rounded-full hover:bg-white/10"
                            >
                                Projects
                            </Link>

                            {/* Services Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={handleServicesDropdownEnter}
                                onMouseLeave={handleServicesDropdownLeave}
                            >
                                <button className="px-5 py-2 flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 hover:scale-105 rounded-full hover:bg-white/10">
                                    Services
                                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isServicesDropdownOpen && (
                                    <div className="absolute top-full left-0 mt-3 w-56 bg-black/95 backdrop-blur-xl border border-orange-500/20 rounded-2xl shadow-2xl py-2 animate-scale-in">
                                        <Link
                                            href="/services/resale"
                                            className="block px-4 py-2.5 text-sm text-white/80 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-200 rounded-lg mx-2"
                                        >
                                            Resale Services
                                        </Link>
                                        <Link
                                            href="/services/loan-assistance"
                                            className="block px-4 py-2.5 text-sm text-white/80 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-200 rounded-lg mx-2"
                                        >
                                            Loan Assistance
                                        </Link>
                                        <Link
                                            href="/services/property-management"
                                            className="block px-4 py-2.5 text-sm text-white/80 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-200 rounded-lg mx-2"
                                        >
                                            Property Management
                                        </Link>
                                        <Link
                                            href="/services/legal"
                                            className="block px-4 py-2.5 text-sm text-white/80 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-200 rounded-lg mx-2"
                                        >
                                            Legal Services
                                        </Link>
                                        <Link
                                            href="/services/construction"
                                            className="block px-4 py-2.5 text-sm text-white/80 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-200 rounded-lg mx-2"
                                        >
                                            Construction
                                        </Link>
                                        <Link
                                            href="/services/valuation"
                                            className="block px-4 py-2.5 text-sm text-white/80 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-200 rounded-lg mx-2"
                                        >
                                            Valuation Services
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* About Us Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={handleDropdownEnter}
                                onMouseLeave={handleDropdownLeave}
                            >
                                <button className="px-5 py-2 flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 hover:scale-105 rounded-full hover:bg-white/10">
                                    Inside Realtydoor
                                    <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isAboutDropdownOpen && (
                                    <div className="absolute top-full left-0 mt-3 w-48 bg-black/95 backdrop-blur-xl border border-orange-500/20 rounded-2xl shadow-2xl py-2 animate-scale-in">
                                        <Link
                                            href="/about"
                                            className="block px-4 py-2.5 text-sm text-white/80 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-200 rounded-lg mx-2"
                                        >
                                            About Us
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="block px-4 py-2.5 text-sm text-white/80 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-200 rounded-lg mx-2"
                                        >
                                            Contact Us
                                        </Link>
                                        <Link
                                            href="/faqs"
                                            className="block px-4 py-2.5 text-sm text-white/80 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-200 rounded-lg mx-2"
                                        >
                                            FAQs
                                        </Link>
                                        <Link
                                            href="/careers"
                                            className="block px-4 py-2.5 text-sm text-white/80 hover:text-orange-500 hover:bg-orange-500/10 transition-all duration-200 rounded-lg mx-2"
                                        >
                                            Careers
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/blog"
                                className="px-5 py-2 text-sm font-medium text-white/90 hover:text-white transition-all duration-300 hover:scale-105 rounded-full hover:bg-white/10"
                            >
                                Blog
                            </Link>

                            {/* Vibrant CTA Button */}
                            <button onClick={() => setIsJoinUsModalOpen(true)} className="relative ml-2 px-6 py-2.5 text-sm font-semibold text-white rounded-full overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,87,34,0.6)]">
                                {/* Animated Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 transition-transform duration-300 group-hover:scale-110" />
                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                <span className="relative z-10">Join Us</span>
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-all duration-300"
                        >
                            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Fullscreen Slide-in from Right */}
            {isMobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-in fade-in duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />

                    {/* Slide-in Panel */}
                    <div className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-black/95 backdrop-blur-xl z-50 lg:hidden shadow-2xl animate-in slide-in-from-right duration-300">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-orange-500/20">
                            <Image
                                src="https://realtydoor.com/wp-content/uploads/2024/05/logo-light.svg"
                                alt="Realtydoor"
                                width={120}
                                height={28}
                                className="h-6 w-auto"
                            />
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-white hover:text-orange-500 hover:bg-orange-500/10 rounded-full transition-all duration-200"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Menu Content */}
                        <div className="px-6 py-6 flex flex-col gap-1 h-[calc(100vh-88px)] overflow-y-auto">
                            {/* Main Navigation Links */}
                            <Link
                                href="/"
                                className="px-5 py-3.5 text-base font-medium text-white hover:text-orange-500 hover:bg-orange-500/10 rounded-xl transition-all duration-200 flex items-center justify-between group"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span>Home</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>

                            <Link
                                href="/properties"
                                className="px-5 py-3.5 text-base font-medium text-white hover:text-orange-500 hover:bg-orange-500/10 rounded-xl transition-all duration-200 flex items-center justify-between group"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span>Projects</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>

                            {/* Services Collapsible Section */}
                            <button
                                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                                className="px-5 py-3.5 text-base font-medium text-white hover:text-orange-500 hover:bg-orange-500/10 rounded-xl transition-all duration-200 flex items-center justify-between w-full"
                            >
                                <span>Services</span>
                                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isServicesDropdownOpen && (
                                <div className="ml-4 pl-4 border-l-2 border-orange-500/40 space-y-1 animate-in slide-in-from-top duration-200">
                                    <Link
                                        href="/services/resale"
                                        className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:text-orange-500 hover:bg-orange-500/10 rounded-lg transition-all duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Resale Services
                                    </Link>
                                    <Link
                                        href="/services/loan-assistance"
                                        className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:text-orange-500 hover:bg-orange-500/10 rounded-lg transition-all duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Loan Assistance
                                    </Link>
                                    <Link
                                        href="/services/property-management"
                                        className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:text-orange-500 hover:bg-orange-500/10 rounded-lg transition-all duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Property Management
                                    </Link>
                                    <Link
                                        href="/services/legal"
                                        className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:text-orange-500 hover:bg-orange-500/10 rounded-lg transition-all duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Legal Services
                                    </Link>
                                    <Link
                                        href="/services/construction"
                                        className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:text-orange-500 hover:bg-orange-500/10 rounded-lg transition-all duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Construction
                                    </Link>
                                    <Link
                                        href="/services/valuation"
                                        className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:text-orange-500 hover:bg-orange-500/10 rounded-lg transition-all duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Valuation Services
                                    </Link>
                                </div>
                            )}

                            {/* Divider */}
                            <div className="h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent my-2" />

                            {/* About Us Collapsible Section */}
                            <button
                                onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                                className="px-5 py-3.5 text-base font-medium text-white hover:text-orange-500 hover:bg-orange-500/10 rounded-xl transition-all duration-200 flex items-center justify-between w-full"
                            >
                                <span>About Us</span>
                                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isAboutDropdownOpen && (
                                <div className="ml-4 pl-4 border-l-2 border-orange-500/40 space-y-1 animate-in slide-in-from-top duration-200">
                                    <Link
                                        href="/about"
                                        className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:text-orange-500 hover:bg-orange-500/10 rounded-lg transition-all duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:text-orange-500 hover:bg-orange-500/10 rounded-lg transition-all duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Contact Us
                                    </Link>
                                    <Link
                                        href="/faqs"
                                        className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:text-orange-500 hover:bg-orange-500/10 rounded-lg transition-all duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        FAQs
                                    </Link>
                                    <Link
                                        href="/careers"
                                        className="block px-4 py-2.5 text-sm font-medium text-white/80 hover:text-orange-500 hover:bg-orange-500/10 rounded-lg transition-all duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Careers
                                    </Link>
                                </div>
                            )}

                            {/* Divider */}
                            <div className="h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent my-2" />

                            <Link
                                href="/blog"
                                className="px-5 py-3.5 text-base font-medium text-white hover:text-orange-500 hover:bg-orange-500/10 rounded-xl transition-all duration-200 flex items-center justify-between group"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span>Blog</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>

                            {/* Spacer to push CTA to bottom */}
                            <div className="flex-1" />

                            {/* CTA Button */}
                            <button onClick={() => { setIsJoinUsModalOpen(true); setIsMobileMenuOpen(false); }} className="relative mt-4 px-6 py-4 text-base font-semibold text-white rounded-2xl overflow-hidden group shadow-lg shadow-orange-500/20 w-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-active:translate-x-full transition-transform duration-700" />
                                <span className="relative z-10">Join Us / Sell with Us</span>
                            </button>
                        </div>
                    </div>
                </>
            )}

            {/* Join Us Modal */}
            <JoinUsModal isOpen={isJoinUsModalOpen} onClose={() => setIsJoinUsModalOpen(false)} />
        </nav>
    );
}
