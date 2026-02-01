import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getPropertyById } from '@/lib/mock-data';
import { formatPrice, formatNumber } from '@/lib/utils';
import { Bed, Bath, Maximize, MapPin, Calendar, Home } from 'lucide-react';

interface PageProps {
    params: {
        id: string;
    };
}

export async function generateMetadata({ params }: PageProps) {
    const property = getPropertyById(params.id);

    if (!property) {
        return { title: 'Property Not Found' };
    }

    return {
        title: `${property.title} | CURATED Real Estate`,
        description: property.description.substring(0, 160),
    };
}

export default async function PropertyDetailPage({ params }: PageProps) {
    // Use mock data instead of database
    const property = getPropertyById(params.id);

    if (!property) {
        notFound();
    }

    return (
        <>
            <Navigation />

            <main className="min-h-screen pt-20">
                {/* Image Gallery */}
                <section className="bg-background">
                    <div className="mx-auto max-w-7xl px-6 py-8">
                        <div className="grid gap-4 md:grid-cols-4">
                            {property.images[0] && (
                                <div className="relative aspect-[4/3] overflow-hidden rounded-lg md:col-span-2 md:row-span-2 md:aspect-auto md:h-[600px]">
                                    <Image
                                        src={property.images[0].url}
                                        alt={property.images[0].alt || property.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            )}
                            {property.images.slice(1, 5).map((image, index) => (
                                <div
                                    key={image.id}
                                    className="relative aspect-[4/3] overflow-hidden rounded-lg"
                                >
                                    <Image
                                        src={image.url}
                                        alt={image.alt || `${property.title} - ${index + 2}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Property Details */}
                <section className="bg-background py-12">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="grid gap-12 lg:grid-cols-3">
                            {/* Main Content */}
                            <div className="lg:col-span-2">
                                <div className="mb-6 flex items-start justify-between">
                                    <div>
                                        <h1 className="font-display text-3xl md:text-4xl mb-2">{property.title}</h1>
                                        <p className="flex items-center text-muted-foreground">
                                            <MapPin className="mr-2 h-4 w-4" />
                                            {property.address}, {property.city}, {property.state} {property.zipCode}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-muted-foreground">Price</p>
                                        <p className="font-display text-3xl font-bold text-primary">
                                            {formatPrice(Number(property.price))}
                                        </p>
                                    </div>
                                </div>

                                <div className="mb-8 flex flex-wrap gap-2">
                                    <Badge variant="outline" className="capitalize">
                                        {property.propertyType.toLowerCase()}
                                    </Badge>
                                    <Badge variant="secondary">{property.status}</Badge>
                                    {property.featured && <Badge className="bg-gold">Featured</Badge>}
                                </div>

                                {/* Key Features */}
                                <Card className="mb-8">
                                    <CardContent className="grid grid-cols-2 gap-6 p-6 md:grid-cols-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                                <Bed className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">Bedrooms</p>
                                                <p className="font-semibold">{property.bedrooms}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                                <Bath className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">Bathrooms</p>
                                                <p className="font-semibold">{Number(property.bathrooms)}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                                <Maximize className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">Square Feet</p>
                                                <p className="font-semibold">{formatNumber(property.sqft)}</p>
                                            </div>
                                        </div>
                                        {property.yearBuilt && (
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                                    <Calendar className="h-5 w-5 text-primary" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-muted-foreground">Year Built</p>
                                                    <p className="font-semibold">{property.yearBuilt}</p>
                                                </div>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>

                                {/* Description */}
                                <div className="mb-8">
                                    <h2 className="font-display text-2xl mb-4">Description</h2>
                                    <p className="leading-relaxed text-muted-foreground">{property.description}</p>
                                </div>

                                {/* Features */}
                                {property.features.length > 0 && (
                                    <div className="mb-8">
                                        <h2 className="font-display text-2xl mb-4">Features</h2>
                                        <div className="grid grid-cols-2 gap-3">
                                            {property.features.map((feature) => (
                                                <div key={feature} className="flex items-center gap-2">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                    <span className="text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Amenities */}
                                {property.amenities.length > 0 && (
                                    <div className="mb-8">
                                        <h2 className="font-display text-2xl mb-4">Amenities</h2>
                                        <div className="grid grid-cols-2 gap-3">
                                            {property.amenities.map((amenity) => (
                                                <div key={amenity} className="flex items-center gap-2">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                                                    <span className="text-sm">{amenity}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <Card className="sticky top-24">
                                    <CardContent className="p-6">
                                        {/* Agent Info */}
                                        {property.user && (
                                            <div className="mb-6 border-b border-border pb-6">
                                                <h3 className="font-display text-lg mb-4">Listed by</h3>
                                                <div className="flex items-center gap-3">
                                                    {property.user.image ? (
                                                        <Image
                                                            src={property.user.image}
                                                            alt={property.user.name || 'Agent'}
                                                            width={48}
                                                            height={48}
                                                            className="rounded-full"
                                                        />
                                                    ) : (
                                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                                            <Home className="h-6 w-6 text-primary" />
                                                        </div>
                                                    )}
                                                    <div>
                                                        <p className="font-semibold">{property.user.name}</p>
                                                        <p className="text-sm text-muted-foreground">Real Estate Agent</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Contact Form */}
                                        <div>
                                            <h3 className="font-display text-lg mb-4">Request Information</h3>
                                            <ContactForm propertyId={property.id} propertyTitle={property.title} />
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
