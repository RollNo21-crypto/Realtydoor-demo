import { Metadata } from 'next';
import Script from 'next/script';
import { FloatingNav } from '@/components/floating-nav';
import { Footer } from '@/components/footer';
import { Mail, Phone, MapPin, Clock, Send, Sparkles, MessageCircle, Headphones } from 'lucide-react';
import Image from 'next/image';
import { GeneralContactForm } from '@/components/general-contact-form';

export const metadata: Metadata = {
    title: 'Contact RealtyDoor | Real Estate Experts in Bengaluru',
    description: 'Contact RealtyDoor for buying, selling, or renting properties in Bengaluru. Available 24/7 via WhatsApp, phone, or email. Expert real estate guidance at your fingertips.',
    keywords: ['contact RealtyDoor', 'real estate agent contact Bengaluru', 'property inquiry', 'RealtyDoor phone number', 'property help Bengaluru'],
    alternates: { canonical: 'https://realtydoor.in/contact' },
    openGraph: {
        title: 'Contact RealtyDoor | Bengaluru Real Estate Experts',
        description: 'Reach RealtyDoor 24/7 for all your property needs. WhatsApp, phone, or email — we\'re always available.',
        url: 'https://realtydoor.in/contact',
        type: 'website',
        images: [{ url: 'https://realtydoor.in/og-image.jpg', width: 1200, height: 630, alt: 'Contact RealtyDoor' }],
    },
    twitter: { card: 'summary_large_image', title: 'Contact RealtyDoor', description: 'Get in touch with our real estate experts anytime.' },
};

const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact RealtyDoor',
    url: 'https://realtydoor.in/contact',
    mainEntity: {
        '@type': 'Organization',
        name: 'RealtyDoor',
        telephone: '+91-91369-54648',
        email: 'info@realtydoor.in',
        address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressRegion: 'Karnataka', addressCountry: 'IN' },
        openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:00', closes: '20:00' },
    },
};

export default function ContactPage() {
    return (
        <>
            <Script id="contact-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
            <FloatingNav />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920"
                        alt="Contact Us"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
                                <Sparkles className="h-4 w-4 text-primary" />
                                <span className="text-sm font-semibold text-white">Your Expert Real Estate Concierge</span>
                            </div>

                            <h1 className="font-display text-5xl md:text-7xl text-white leading-tight">
                                Start Your
                                <span className="block gradient-text italic">Journey</span>
                            </h1>

                            <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                                Whether you're acquiring land, building a legacy, or diversifying your portfolio, our specialized consultants are ready to provide the clarity you deserve.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a href="#contact-form">
                                    <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(255,87,34,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-2">
                                        <MessageCircle className="h-5 w-5" />
                                        Request Callback
                                    </button>
                                </a>
                                <a href="tel:+919136954648">
                                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                                        <Phone className="h-5 w-5" />
                                        Priority Line
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* Contact Info Bento Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-8 backdrop-blur-sm">
                                <Clock className="h-8 w-8 text-primary mb-4" />
                                <div className="text-2xl font-display text-white mb-2">Omnichannel Support</div>
                                <div className="text-white/80 font-medium">Standard response time: &lt; 2 Hours</div>
                            </div>
                            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <Phone className="h-6 w-6 text-primary mb-3" />
                                <div className="text-sm text-white/70 mb-1">Direct Consultant</div>
                                <div className="text-white font-semibold">+91 91369 54648</div>
                            </div>
                            <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <Mail className="h-6 w-6 text-primary mb-3" />
                                <div className="text-sm text-white/70 mb-1">Inquiries</div>
                                <div className="text-white font-semibold text-sm">sales@realtydoor.com</div>
                            </div>
                            <div className="col-span-2 rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover-lift">
                                <MapPin className="h-6 w-6 text-primary mb-3" />
                                <div className="text-sm text-white/70 mb-1">Regional Headquarters</div>
                                <div className="text-white font-semibold">Bengaluru • Mumbai • Chittoor</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact-form" className="bg-background py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <div>
                            <div className="mb-8">
                                <h2 className="font-display text-4xl mb-4">Send Us a Message</h2>
                                <p className="text-muted-foreground text-lg">
                                    Fill out the form and our team will get back to you within 24 hours.
                                </p>
                            </div>
                            <GeneralContactForm />
                        </div>

                        {/* Additional Info */}
                        <div className="space-y-6">
                            <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-8">
                                <Headphones className="h-12 w-12 text-primary mb-4" />
                                <h3 className="font-display text-2xl mb-3">Quick Response</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our dedicated support team typically responds to all inquiries within 2-4 hours during business hours.
                                </p>
                            </div>

                            <div className="rounded-3xl bg-muted p-8">
                                <h3 className="font-display text-xl mb-4">Office Hours</h3>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-muted-foreground">Monday - Friday</span>
                                        <span className="font-semibold">9:00 AM - 8:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-muted-foreground">Saturday</span>
                                        <span className="font-semibold">10:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-muted-foreground">Sunday</span>
                                        <span className="font-semibold">Closed</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl bg-muted p-8">
                                <h3 className="font-display text-xl mb-4">Visit Our Office</h3>
                                <div className="space-y-3 text-muted-foreground">
                                    <p className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                        <span>123 Real Estate Tower, Bandra West, Mumbai, Maharashtra 400050</span>
                                    </p>
                                    <p className="text-sm">
                                        Walk-ins are welcome during office hours. We recommend scheduling an appointment for personalized consultation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <Footer />
        </>
    );
}
