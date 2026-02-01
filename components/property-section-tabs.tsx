'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export function PropertySectionTabs() {
    const [activeSection, setActiveSection] = useState('overview');
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show FAB after scrolling past hero (approximately 80vh)
            setIsVisible(window.scrollY > window.innerHeight * 0.8);

            // Update active section based on scroll position
            const sections = ['overview', 'features', 'gallery', 'amenities'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Close menu after clicking
            setIsExpanded(false);
        }
    };

    const sections = [
        { id: 'overview', label: 'Overview' },
        { id: 'features', label: 'Features' },
        { id: 'gallery', label: 'Gallery' },
        { id: 'amenities', label: 'Amenities' },
    ];

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-24 md:right-28 z-50">
            {/* Expanded Menu */}
            <div
                className={cn(
                    'absolute bottom-0 right-0 mb-20 transition-all duration-300 origin-bottom-right',
                    isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                )}
            >
                <div className="bg-black/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-orange-500/30 p-3 min-w-[200px]">
                    <div className="flex flex-col gap-2">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={cn(
                                    'px-4 py-3 rounded-2xl transition-all duration-200 text-left',
                                    activeSection === section.id
                                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                                        : 'text-white/70 hover:text-white hover:bg-white/10'
                                )}
                            >
                                <span className="text-sm font-medium">{section.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAB Button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                    'relative rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-2xl transition-all duration-300 hover:shadow-orange-500/50 hover:scale-110 border border-orange-400/50',
                    isExpanded ? 'w-14 h-14' : 'w-14 h-14'
                )}
            >
                <div className="flex items-center justify-center">
                    {isExpanded ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </div>

                {/* Active indicator dot */}
                {!isExpanded && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-orange-500 animate-pulse" />
                )}
            </button>
        </div>
    );
}
