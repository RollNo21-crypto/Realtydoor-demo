'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/properties', label: 'Properties' },
        { href: '/about', label: 'Inside Realtydoor' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="glass-nav fixed top-0 z-50 w-full border-b border-border">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="transition-opacity hover:opacity-80"
                    >
                        <Image
                            src="/logo.png"
                            alt="Realtydoor"
                            width={200}
                            height={45}
                            priority
                            className="h-10 w-auto md:h-12"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-primary ${pathname === link.href ? 'text-primary' : 'text-foreground/70'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden items-center gap-4 md:flex">
                        <Button variant="ghost" size="icon">
                            <Search className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link href="/login">
                                <User className="mr-2 h-4 w-4" />
                                Login
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link href="/register">Get Started</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="border-t border-border py-4 md:hidden">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors hover:text-primary ${pathname === link.href ? 'text-primary' : 'text-foreground/70'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="mt-4 flex flex-col gap-2">
                                <Button variant="outline" asChild className="w-full">
                                    <Link href="/login">Login</Link>
                                </Button>
                                <Button asChild className="w-full">
                                    <Link href="/register">Get Started</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
