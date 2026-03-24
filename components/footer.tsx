import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Linkedin, Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-background pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand & Social */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="mb-6 inline-block">
                            <Image
                                src="https://realtydoor.com/wp-content/uploads/2024/05/logo-dark.svg"
                                alt="Realtydoor"
                                width={180}
                                height={40}
                                className="h-9 w-auto"
                            />
                        </Link>
                        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                            RealtyDoor is a Bengaluru-based real estate discovery and advisory platform for premium residential plots, plotted developments, and verified property opportunities across high-growth corridors.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://www.facebook.com/realtydoorbengaluru/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-all hover:bg-primary hover:text-primary-foreground"
                            >
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/realtydoor-com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-all hover:bg-primary hover:text-primary-foreground"
                            >
                                <Linkedin className="h-4 w-4" />
                            </a>
                            <a
                                href="https://share.google/cpFUUuxeCWwNuwYhW"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-all hover:bg-primary hover:text-primary-foreground"
                                title="Google Reviews"
                            >
                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h5 className="mb-4 text-sm font-bold uppercase tracking-wider">Contact RealityDoor</h5>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-2">
                                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <div className="space-y-1">
                                    <a href="tel:+919876543210" className="block text-muted-foreground hover:text-primary transition-colors">
                                        +91 98765 43210
                                    </a>
                                    <a href="tel:+919876543211" className="block text-muted-foreground hover:text-primary transition-colors">
                                        +91 98765 43211
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <div className="space-y-1">
                                    <a href="mailto:info@realtydoor.com" className="block text-muted-foreground hover:text-primary transition-colors">
                                        info@realtydoor.com
                                    </a>
                                    <a href="mailto:support@realtydoor.com" className="block text-muted-foreground hover:text-primary transition-colors">
                                        support@realtydoor.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Office & Hours */}
                    <div>
                        <h5 className="mb-4 text-sm font-bold uppercase tracking-wider">Bengaluru Office</h5>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <p className="text-muted-foreground leading-relaxed">
                                    #785/10, 2nd Floor, 14th cross,<br />
                                    Krishna Rajendra Rd,<br />
                                    Jayanagar, Bengaluru 560082
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                                    <p className="text-muted-foreground">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h5 className="mb-4 text-sm font-bold uppercase tracking-wider">Explore</h5>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/properties?location=hoskote" className="text-muted-foreground hover:text-primary transition-colors">
                                    Plots in Hoskote
                                </Link>
                            </li>
                            <li>
                                <Link href="/properties?location=bagalur" className="text-muted-foreground hover:text-primary transition-colors">
                                    Plots near Bagalur
                                </Link>
                            </li>
                            <li>
                                <Link href="/properties?location=kanakapura" className="text-muted-foreground hover:text-primary transition-colors">
                                    Plots on Kanakapura Road
                                </Link>
                            </li>
                            <li>
                                <Link href="/properties" className="text-muted-foreground hover:text-primary transition-colors">
                                    RERA-Verified Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/faqs" className="text-muted-foreground hover:text-primary transition-colors">
                                    Plot Buyer Guide
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/legal" className="text-muted-foreground hover:text-primary transition-colors">
                                    Legal Checklist for Plot Purchase
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Map & RERA Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 pb-12 border-b border-border">
                    {/* Google Maps */}
                    <div>
                        <h5 className="mb-4 text-sm font-bold uppercase tracking-wider">Find Us</h5>
                        <div className="rounded-lg overflow-hidden border border-border">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31110.095826226992!2d77.573776!3d12.923014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae163ec586adff%3A0x4ea4061b3ef4b482!2sAashrithaa%20Properties%20Pvt%20Ltd!5e0!3m2!1sen!2sus!4v1769786915418!5m2!1sen!2sus"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* RERA Disclaimer */}
                    <div className="flex flex-col">
                        <h5 className="mb-4 text-sm font-bold uppercase tracking-wider">RERA & Legal Disclaimer</h5>
                        <div className="rounded-lg bg-muted/30 p-5 border border-border flex-1 flex flex-col justify-center">
                            <p className="text-xs leading-relaxed text-muted-foreground mb-3">
                                All listed properties are subject to applicable approvals, documentation review, and project-specific compliance requirements. Buyers are advised to independently verify project details, registration numbers, legal documents, and builder credentials before making any purchase decision. Project registration details, where applicable, should be reviewed on the relevant official RERA portal and through the developer’s documentation. The information presented on this website is for general informational purposes only and does not constitute legal or financial advice. Buyers should conduct independent due diligence before finalizing any transaction.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <p>© {currentYear} Realtydoor. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
