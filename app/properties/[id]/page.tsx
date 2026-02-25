import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FloatingNav } from '@/components/floating-nav';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getPropertyById, formatIndianPrice } from '@/lib/mock-data';
import {
    Maximize, MapPin, Home, Ruler, CheckCircle2, Star,
    Phone, MessageCircle, ExternalLink, ArrowLeft, Eye
} from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const property = getPropertyById(id);
    if (!property) return { title: 'Plot Not Found' };
    return {
        title: `${property.title} | Realtydoor`,
        description: property.description.substring(0, 160),
    };
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const property = getPropertyById(id);
    if (!property) notFound();

    const pricePerSqFt = Math.round(property.price / property.sqft).toLocaleString('en-IN');

    return (
        <>
            <FloatingNav />

            <main className="min-h-screen pt-20 bg-background">

                {/* Breadcrumb */}
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/properties" className="hover:text-primary transition-colors">Plots & Land</Link>
                        <span>/</span>
                        <span className="text-foreground font-medium truncate">{property.title}</span>
                    </div>
                </div>

                {/* Image Gallery */}
                <section className="bg-background pb-8">
                    <div className="mx-auto max-w-7xl px-4 md:px-6">
                        <div className="grid gap-3 md:grid-cols-4 md:grid-rows-2">
                            {/* Main large image */}
                            {property.images[0] && (
                                <div className="relative aspect-[4/3] md:aspect-auto md:h-[480px] overflow-hidden rounded-2xl md:col-span-2 md:row-span-2">
                                    <Image
                                        src={property.images[0].url}
                                        alt={property.images[0].alt || property.title}
                                        fill
                                        className="object-cover"
                                        priority
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80';
                                        }}
                                    />
                                    {property.featured && (
                                        <div className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-primary/90 text-white text-xs font-semibold">
                                            <Star className="h-3 w-3" /> Featured
                                        </div>
                                    )}
                                </div>
                            )}
                            {/* Side images */}
                            {property.images.slice(1, 5).map((image, index) => (
                                <div
                                    key={image.id}
                                    className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                                >
                                    <Image
                                        src={image.url}
                                        alt={image.alt || `${property.title} - view ${index + 2}`}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=70';
                                        }}
                                    />
                                    {image.caption && (
                                        <div className="absolute bottom-0 inset-x-0 bg-black/50 backdrop-blur-sm text-white text-xs p-2 truncate">
                                            {image.caption}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Detail Content */}
                <section className="bg-background py-8 md:py-12">
                    <div className="mx-auto max-w-7xl px-4 md:px-6">
                        <div className="grid gap-10 lg:grid-cols-3">

                            {/* ── Main Column ── */}
                            <div className="lg:col-span-2 space-y-10">

                                {/* Title & Price */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <Badge variant="outline" className="capitalize text-xs">
                                                {property.plotType || property.propertyType.replace(/_/g, ' ').toLowerCase()}
                                            </Badge>
                                            <Badge variant="secondary" className="text-xs">{property.status}</Badge>
                                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                                <Eye className="h-3 w-3" /> {property.views} views
                                            </span>
                                        </div>
                                        <h1 className="font-display text-3xl md:text-4xl mb-2">{property.title}</h1>
                                        <p className="flex items-start gap-2 text-muted-foreground text-sm">
                                            <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                                            {property.address}, {property.city}, {property.state} – {property.zipCode}
                                        </p>
                                    </div>
                                    <div className="md:text-right bg-primary/5 border border-primary/20 rounded-2xl px-5 py-4 flex-shrink-0">
                                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Starting From</p>
                                        <p className="font-display text-3xl md:text-4xl font-bold text-primary">
                                            {formatIndianPrice(property.price)}
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-1">₹{pricePerSqFt} / sq.ft onwards</p>
                                    </div>
                                </div>

                                {/* Key Specs */}
                                <Card>
                                    <CardContent className="grid grid-cols-2 gap-6 p-6 md:grid-cols-3">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                                                <Maximize className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted-foreground">Plot Area</p>
                                                <p className="font-semibold">{property.sqYards ?? Math.round(property.sqft / 9)} sq.yds</p>
                                                <p className="text-xs text-muted-foreground">{property.sqft.toLocaleString('en-IN')} sq.ft</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                                                <Ruler className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted-foreground">Dimensions</p>
                                                <p className="font-semibold">{(property as any).dimensions ?? '—'} ft</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                                                <MapPin className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted-foreground">Location</p>
                                                <p className="font-semibold">{property.city}</p>
                                                <p className="text-xs text-muted-foreground">{property.state}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Description */}
                                <div>
                                    <h2 className="font-display text-2xl mb-4">About This Plot</h2>
                                    <p className="leading-relaxed text-muted-foreground">{property.description}</p>
                                </div>

                                {/* Features */}
                                {property.features.length > 0 && (
                                    <div>
                                        <h2 className="font-display text-2xl mb-4">Key Features</h2>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {property.features.map((feature) => (
                                                <div key={feature} className="flex items-center gap-3 p-3 rounded-xl bg-muted border border-border">
                                                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                                                    <span className="text-sm font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Amenities */}
                                {property.amenities.length > 0 && (
                                    <div>
                                        <h2 className="font-display text-2xl mb-4">Amenities</h2>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                            {property.amenities.map((amenity) => (
                                                <div key={amenity} className="flex items-center gap-2 p-2.5 rounded-xl bg-muted border border-border">
                                                    <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                                    <span className="text-sm">{amenity}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Back link */}
                                <div className="pt-4">
                                    <Link href="/properties">
                                        <Button variant="outline" className="gap-2">
                                            <ArrowLeft className="h-4 w-4" />
                                            Back to All Plots
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* ── Sidebar ── */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-24 space-y-4">
                                    {/* Quick Actions */}
                                    <Card>
                                        <CardContent className="p-6 space-y-4">
                                            <h3 className="font-display text-xl">Interested in This Plot?</h3>
                                            <div className="space-y-3">
                                                <a href="tel:+919845012345" className="w-full">
                                                    <Button className="w-full gap-2 bg-gradient-to-r from-primary to-primary/90">
                                                        <Phone className="h-4 w-4" />
                                                        Call Now
                                                    </Button>
                                                </a>
                                                <a
                                                    href={`https://wa.me/919845012345?text=Hi, I'm interested in ${property.title} (${formatIndianPrice(property.price)})`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full block"
                                                >
                                                    <Button variant="outline" className="w-full gap-2 border-green-500 text-green-600 hover:bg-green-50">
                                                        <MessageCircle className="h-4 w-4" />
                                                        WhatsApp Us
                                                    </Button>
                                                </a>
                                                {property.virtualTourUrl && (
                                                    <a href={property.virtualTourUrl} target="_blank" rel="noopener noreferrer" className="w-full block">
                                                        <Button variant="outline" className="w-full gap-2">
                                                            <ExternalLink className="h-4 w-4" />
                                                            View on Realtydoor
                                                        </Button>
                                                    </a>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Agent / Listed By */}
                                    {property.user && (
                                        <Card>
                                            <CardContent className="p-6">
                                                <h3 className="font-display text-lg mb-4">Listed By</h3>
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                                                        <Home className="h-6 w-6 text-primary" />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold">{property.user.name}</p>
                                                        <p className="text-sm text-muted-foreground">Property Advisor</p>
                                                        {property.user.phone && (
                                                            <p className="text-xs text-primary">{property.user.phone}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )}

                                    {/* Enquiry Form */}
                                    <Card>
                                        <CardContent className="p-6">
                                            <h3 className="font-display text-lg mb-4">Request Information</h3>
                                            <ContactForm propertyId={property.id} propertyTitle={property.title} />
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
