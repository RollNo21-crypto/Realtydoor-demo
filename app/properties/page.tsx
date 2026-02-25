'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FloatingNav } from '@/components/floating-nav';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
    MapPin, Maximize, Home, Building2, TreePine, Building, Hotel,
    Sparkles, X, SlidersHorizontal, Search, Check, Ruler, Tag
} from 'lucide-react';
import { mockProperties, formatIndianPrice } from '@/lib/mock-data';

interface FilterState {
    location: string;
    propertyTypes: string[];
    priceMin: number;
    priceMax: number;
    amenities: string[];
    sortBy: string;
    searchQuery: string;
}

export default function PropertiesPage() {
    const [filteredProperties, setFilteredProperties] = useState(mockProperties);
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [filters, setFilters] = useState<FilterState>({
        location: '',
        propertyTypes: [],
        priceMin: 0,
        priceMax: 200000000,
        amenities: [],
        sortBy: 'newest',
        searchQuery: '',
    });

    const propertyTypes = [
        { value: 'RESIDENTIAL_PLOT', label: 'Residential Plot', icon: Home },
        { value: 'VILLA_PLOT', label: 'Villa Plot', icon: Hotel },
        { value: 'COMMERCIAL_PLOT', label: 'Commercial Plot', icon: Building2 },
    ];

    const amenitiesList = [
        'Clubhouse', 'Swimming Pool', 'Fully Equipped Gym', 'Badminton Courts',
        '24/7 Security', 'Walking & Jogging Track', 'Children\'s Play Area',
        'Landscaped Gardens', 'CCTV Surveillance', 'Street Lighting',
        'Overhead Water Tank', 'Underground Drainage (UGD)', 'Rain Water Harvesting',
        '24-Hour Power Backup', 'Compound Wall',
    ];

    useEffect(() => {
        let filtered = [...mockProperties];

        if (filters.searchQuery) {
            filtered = filtered.filter(p =>
                p.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
                p.city.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
                p.address.toLowerCase().includes(filters.searchQuery.toLowerCase())
            );
        }

        if (filters.location) {
            filtered = filtered.filter(p =>
                p.city.toLowerCase().includes(filters.location.toLowerCase()) ||
                p.state.toLowerCase().includes(filters.location.toLowerCase())
            );
        }

        if (filters.propertyTypes.length > 0) {
            filtered = filtered.filter(p => filters.propertyTypes.includes(p.propertyType));
        }

        filtered = filtered.filter(p =>
            p.price >= filters.priceMin && p.price <= filters.priceMax
        );

        if (filters.amenities.length > 0) {
            filtered = filtered.filter(p =>
                filters.amenities.every(amenity => p.amenities.includes(amenity))
            );
        }

        switch (filters.sortBy) {
            case 'price-asc':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'area-asc':
                filtered.sort((a, b) => a.sqft - b.sqft);
                break;
            case 'area-desc':
                filtered.sort((a, b) => b.sqft - a.sqft);
                break;
            case 'newest':
            default:
                filtered.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        }

        setFilteredProperties(filtered);
    }, [filters]);

    const togglePropertyType = (type: string) => {
        setFilters(prev => ({
            ...prev,
            propertyTypes: prev.propertyTypes.includes(type)
                ? prev.propertyTypes.filter(t => t !== type)
                : [...prev.propertyTypes, type]
        }));
    };

    const toggleAmenity = (amenity: string) => {
        setFilters(prev => ({
            ...prev,
            amenities: prev.amenities.includes(amenity)
                ? prev.amenities.filter(a => a !== amenity)
                : [...prev.amenities, amenity]
        }));
    };

    const clearFilters = () => {
        setFilters({
            location: '',
            propertyTypes: [],
            priceMin: 0,
            priceMax: 200000000,
            amenities: [],
            sortBy: 'newest',
            searchQuery: '',
        });
    };

    const activeFilterCount =
        (filters.location ? 1 : 0) +
        filters.propertyTypes.length +
        filters.amenities.length +
        (filters.priceMin > 0 || filters.priceMax < 200000000 ? 1 : 0);

    const FilterSidebar = () => (
        <div className="space-y-6">
            {/* Search */}
            <div>
                <label className="text-sm font-semibold uppercase tracking-wider mb-3 block">Search</label>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search plots, city, area..."
                        value={filters.searchQuery}
                        onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                </div>
            </div>

            {/* Location */}
            <div>
                <label className="text-sm font-semibold uppercase tracking-wider mb-3 block">Location</label>
                <input
                    type="text"
                    placeholder="City or State"
                    value={filters.location}
                    onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
            </div>

            {/* Plot Type */}
            <div>
                <label className="text-sm font-semibold uppercase tracking-wider mb-3 block">Plot Type</label>
                <div className="space-y-2">
                    {propertyTypes.map((type) => (
                        <button
                            key={type.value}
                            onClick={() => togglePropertyType(type.value)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${filters.propertyTypes.includes(type.value)
                                ? 'border-primary bg-primary/10'
                                : 'border-border bg-background hover:border-primary/50'
                                }`}
                        >
                            <type.icon className="h-5 w-5 text-primary" />
                            <span className="flex-1 text-left text-sm">{type.label}</span>
                            {filters.propertyTypes.includes(type.value) && (
                                <Check className="h-4 w-4 text-primary" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div>
                <label className="text-sm font-semibold uppercase tracking-wider mb-3 block">Budget</label>
                <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-xs text-muted-foreground mb-1 block">Min (₹)</label>
                            <input
                                type="number"
                                value={filters.priceMin}
                                onChange={(e) => setFilters(prev => ({ ...prev, priceMin: Number(e.target.value) }))}
                                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>
                        <div>
                            <label className="text-xs text-muted-foreground mb-1 block">Max (₹)</label>
                            <input
                                type="number"
                                value={filters.priceMax}
                                onChange={(e) => setFilters(prev => ({ ...prev, priceMax: Number(e.target.value) }))}
                                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {[
                            { label: '< 30L', min: 0, max: 3000000 },
                            { label: '30–60L', min: 3000000, max: 6000000 },
                            { label: '60L–1Cr', min: 6000000, max: 10000000 },
                            { label: '1Cr+', min: 10000000, max: 200000000 },
                        ].map((range) => (
                            <button
                                key={range.label}
                                onClick={() => setFilters(prev => ({ ...prev, priceMin: range.min, priceMax: range.max }))}
                                className="px-3 py-1.5 rounded-full border border-border bg-background hover:border-primary hover:bg-primary/10 text-xs transition-all"
                            >
                                {range.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Amenities */}
            <div>
                <label className="text-sm font-semibold uppercase tracking-wider mb-3 block">Amenities</label>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                    {amenitiesList.map((amenity) => (
                        <button
                            key={amenity}
                            onClick={() => toggleAmenity(amenity)}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg border transition-all text-sm ${filters.amenities.includes(amenity)
                                ? 'border-primary bg-primary/10'
                                : 'border-border bg-background hover:border-primary/50'
                                }`}
                        >
                            <div className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${filters.amenities.includes(amenity) ? 'bg-primary border-primary' : 'border-border'
                                }`}>
                                {filters.amenities.includes(amenity) && <Check className="h-3 w-3 text-white" />}
                            </div>
                            <span className="flex-1 text-left">{amenity}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Clear Filters */}
            {activeFilterCount > 0 && (
                <Button
                    onClick={clearFilters}
                    variant="outline"
                    className="w-full"
                >
                    Clear All Filters ({activeFilterCount})
                </Button>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-background">
            <FloatingNav />

            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[60vh] min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
                    alt="Premium Plots & Land"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

                <div className="relative z-10 text-center text-white max-w-4xl px-4 md:px-8">
                    <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-4 md:mb-6">
                        <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-primary" />
                        <span className="text-xs md:text-sm font-semibold">RERA Approved · Clear Title</span>
                    </div>
                    <h1 className="font-display text-4xl md:text-6xl lg:text-8xl mb-4 md:mb-6 leading-tight">
                        Premium Plots & Land
                    </h1>
                    <p className="text-base md:text-xl lg:text-2xl font-light mb-6 md:mb-8 text-slate-300">
                        Handpicked plotted developments across Bangalore, Hyderabad & Andhra Pradesh
                    </p>
                    <div className="flex items-center justify-center gap-3 md:gap-4 text-xs md:text-sm uppercase tracking-wider">
                        <span className="text-primary font-semibold">{filteredProperties.length} Plots</span>
                        <span className="text-primary">•</span>
                        <span className="text-slate-300">South India</span>
                        <span className="text-primary">•</span>
                        <span className="text-slate-300">Bank Loan Available</span>
                    </div>
                </div>
            </section>

            {/* Category Pills */}
            <section className="py-6 md:py-12 bg-muted/50 border-y border-border">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                        <div>
                            <h2 className="font-display text-xl md:text-2xl lg:text-3xl mb-1">Browse by Plot Type</h2>
                            <p className="text-xs md:text-sm text-muted-foreground">Filter by category to find your perfect plot</p>
                        </div>
                        {filters.propertyTypes.length > 0 && (
                            <button
                                onClick={() => setFilters(prev => ({ ...prev, propertyTypes: [] }))}
                                className="text-xs md:text-sm text-primary hover:underline"
                            >
                                Clear all
                            </button>
                        )}
                    </div>

                    <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                        <div className="flex md:flex-wrap gap-2 md:gap-3 min-w-max md:min-w-0">
                            {[
                                { icon: Home, label: 'Residential Plots', type: 'RESIDENTIAL_PLOT', color: 'from-blue-500 to-blue-600' },
                                { icon: Hotel, label: 'Villa Plots', type: 'VILLA_PLOT', color: 'from-purple-500 to-purple-600' },
                                { icon: Building2, label: 'Commercial Plots', type: 'COMMERCIAL_PLOT', color: 'from-amber-500 to-amber-600' },
                                { icon: TreePine, label: 'Township', type: 'TOWNSHIP', color: 'from-green-500 to-green-600' },
                                { icon: Building, label: 'Gated Community', type: 'GATED', color: 'from-pink-500 to-pink-600' },
                            ].map((category, idx) => {
                                const isActive = filters.propertyTypes.includes(category.type);
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => togglePropertyType(category.type)}
                                        className={`group relative flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2.5 md:py-3 rounded-full border transition-all hover:scale-105 ${isActive
                                            ? 'bg-gradient-to-r from-orange-600 to-orange-700 border-transparent text-white shadow-lg'
                                            : 'bg-background border-border hover:border-primary/50'
                                            }`}
                                    >
                                        <div className={`flex items-center justify-center transition-all ${isActive ? '' : 'group-hover:scale-110'}`}>
                                            <category.icon className={`h-4 w-4 md:h-5 md:w-5 ${isActive ? 'text-white' : 'text-primary'}`} />
                                        </div>
                                        <span className={`font-semibold text-xs md:text-sm whitespace-nowrap ${isActive ? 'text-white' : 'text-foreground group-hover:text-primary'}`}>
                                            {category.label}
                                        </span>
                                        {isActive && <Check className="hidden md:block h-4 w-4 text-white" />}
                                        {isActive && (
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-600 to-orange-700 blur-xl opacity-50 -z-10"></div>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    <p className="md:hidden text-xs text-muted-foreground text-center mt-3 opacity-60">← Scroll to see more →</p>
                </div>
            </section>

            {/* Main Content - Filters + Results */}
            <section className="py-12 md:py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="lg:grid lg:grid-cols-[320px_1fr] lg:gap-8">
                        {/* Desktop Sidebar */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-24 bg-muted rounded-3xl p-6 border border-border">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="font-display text-2xl">Filters</h2>
                                    {activeFilterCount > 0 && (
                                        <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                                            {activeFilterCount}
                                        </span>
                                    )}
                                </div>
                                <FilterSidebar />
                            </div>
                        </aside>

                        {/* Results */}
                        <div>
                            {/* Results Header */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-display mb-1">
                                        {filteredProperties.length} Plot{filteredProperties.length !== 1 ? 's' : ''} Found
                                    </h2>
                                    <p className="text-sm text-muted-foreground">
                                        {activeFilterCount > 0 ? `${activeFilterCount} filter${activeFilterCount > 1 ? 's' : ''} applied` : 'Showing all plots'}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 w-full sm:w-auto">
                                    {/* Mobile Filter Button */}
                                    <Button
                                        onClick={() => setShowMobileFilters(true)}
                                        className="lg:hidden flex-1 sm:flex-none gap-2"
                                        variant="outline"
                                    >
                                        <SlidersHorizontal className="h-4 w-4" />
                                        Filters
                                        {activeFilterCount > 0 && (
                                            <span className="px-2 py-0.5 rounded-full bg-primary text-white text-xs">
                                                {activeFilterCount}
                                            </span>
                                        )}
                                    </Button>

                                    {/* Sort */}
                                    <select
                                        value={filters.sortBy}
                                        onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
                                        className="px-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm flex-1 sm:flex-none"
                                    >
                                        <option value="newest">Newest First</option>
                                        <option value="price-asc">Price: Low to High</option>
                                        <option value="price-desc">Price: High to Low</option>
                                        <option value="area-asc">Area: Small to Large</option>
                                        <option value="area-desc">Area: Large to Small</option>
                                    </select>
                                </div>
                            </div>

                            {/* Active Filter Tags */}
                            {activeFilterCount > 0 && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {filters.propertyTypes.map(type => (
                                        <button
                                            key={type}
                                            onClick={() => togglePropertyType(type)}
                                            className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm flex items-center gap-2 hover:bg-primary/20 transition-colors"
                                        >
                                            {type.replace('_', ' ').toLowerCase()}
                                            <X className="h-3 w-3" />
                                        </button>
                                    ))}
                                    {filters.amenities.map(a => (
                                        <button
                                            key={a}
                                            onClick={() => toggleAmenity(a)}
                                            className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm flex items-center gap-2 hover:bg-primary/20 transition-colors"
                                        >
                                            {a}
                                            <X className="h-3 w-3" />
                                        </button>
                                    ))}
                                    {(filters.priceMin > 0 || filters.priceMax < 200000000) && (
                                        <button
                                            onClick={() => setFilters(prev => ({ ...prev, priceMin: 0, priceMax: 200000000 }))}
                                            className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm flex items-center gap-2 hover:bg-primary/20 transition-colors"
                                        >
                                            {formatIndianPrice(filters.priceMin)} – {formatIndianPrice(filters.priceMax)}
                                            <X className="h-3 w-3" />
                                        </button>
                                    )}
                                </div>
                            )}

                            {/* Plot Grid */}
                            {filteredProperties.length === 0 ? (
                                <div className="text-center py-24">
                                    <p className="text-2xl mb-4">No plots found</p>
                                    <p className="text-muted-foreground mb-8">Try adjusting your filters</p>
                                    <Button onClick={clearFilters} className="bg-gradient-to-r from-primary to-primary/90">
                                        Clear All Filters
                                    </Button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {filteredProperties.map((property) => (
                                        <Link
                                            key={property.id}
                                            href={`/properties/${property.id}`}
                                            className="group cursor-pointer"
                                        >
                                            <div className="rounded-3xl bg-muted border border-border overflow-hidden hover-lift h-full">
                                                {/* Image */}
                                                <div className="relative aspect-[4/3] overflow-hidden">
                                                    <Image
                                                        src={property.images[0]?.url || 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80'}
                                                        alt={property.title}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                                    {/* Badges */}
                                                    <div className="absolute top-3 left-3 flex gap-2">
                                                        {property.featured && (
                                                            <div className="px-3 py-1.5 rounded-full bg-gradient-to-r from-primary to-primary/90 text-white text-xs font-semibold">
                                                                Featured
                                                            </div>
                                                        )}
                                                        <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium capitalize">
                                                            {(property.plotType || property.propertyType.replace(/_/g, ' '))}
                                                        </div>
                                                    </div>

                                                    {/* Views */}
                                                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs">
                                                        👁 {property.views}
                                                    </div>
                                                </div>

                                                {/* Card Body */}
                                                <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                                                    <div className="flex items-center text-xs md:text-sm text-muted-foreground">
                                                        <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-2 text-primary flex-shrink-0" />
                                                        <span className="truncate">{property.address}</span>
                                                    </div>

                                                    <h3 className="font-display text-lg md:text-xl group-hover:text-primary transition-colors line-clamp-2">
                                                        {property.title}
                                                    </h3>

                                                    {/* Plot Stats */}
                                                    <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground border-t border-b border-border py-2 md:py-3">
                                                        <div className="flex items-center gap-1.5">
                                                            <Maximize className="h-3 w-3 md:h-4 md:w-4 text-primary/70 flex-shrink-0" />
                                                            <span>{property.sqYards ?? Math.round(property.sqft / 9)} sq.yds</span>
                                                        </div>
                                                        <div className="h-3 md:h-4 w-px bg-border" />
                                                        <div className="flex items-center gap-1.5">
                                                            <Ruler className="h-3 w-3 md:h-4 md:w-4 text-primary/70 flex-shrink-0" />
                                                            <span>{(property as any).dimensions ?? `${property.sqft} sq.ft`}</span>
                                                        </div>
                                                        <div className="h-3 md:h-4 w-px bg-border" />
                                                        <div className="flex items-center gap-1.5">
                                                            <Tag className="h-3 w-3 md:h-4 md:w-4 text-primary/70 flex-shrink-0" />
                                                            <span className="truncate">{property.city}</span>
                                                        </div>
                                                    </div>

                                                    {/* Top amenities preview */}
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {property.amenities.slice(0, 3).map((a) => (
                                                            <span key={a} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                                                                {a}
                                                            </span>
                                                        ))}
                                                        {property.amenities.length > 3 && (
                                                            <span className="text-xs px-2 py-0.5 rounded-full bg-muted border border-border text-muted-foreground">
                                                                +{property.amenities.length - 3} more
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Price row */}
                                                    <div className="flex items-end justify-between">
                                                        <div>
                                                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Starting From</p>
                                                            <p className="font-display text-xl md:text-2xl font-bold text-primary">
                                                                {formatIndianPrice(property.price)}
                                                            </p>
                                                        </div>
                                                        <div className="text-xs text-muted-foreground text-right">
                                                            <div className="font-medium text-foreground">
                                                                ₹{Math.round(property.price / property.sqft).toLocaleString('en-IN')}/sq.ft
                                                            </div>
                                                            <div>onwards</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Filter Modal */}
            {showMobileFilters && (
                <>
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
                        onClick={() => setShowMobileFilters(false)}
                    />
                    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden animate-in slide-in-from-bottom duration-300">
                        <div className="bg-background rounded-t-3xl max-h-[85vh] overflow-hidden flex flex-col">
                            <div className="flex items-center justify-between p-6 border-b border-border">
                                <h2 className="font-display text-2xl">Filters</h2>
                                <button onClick={() => setShowMobileFilters(false)}>
                                    <X className="h-6 w-6" />
                                </button>
                            </div>
                            <div className="overflow-y-auto p-6 flex-1">
                                <FilterSidebar />
                            </div>
                            <div className="p-6 border-t border-border bg-muted">
                                <Button
                                    onClick={() => setShowMobileFilters(false)}
                                    className="w-full bg-gradient-to-r from-primary to-primary/90"
                                >
                                    Show {filteredProperties.length} Plot{filteredProperties.length !== 1 ? 's' : ''}
                                </Button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* CTA Section */}
            <section className="py-20 md:py-32 bg-muted">
                <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-8">
                        Find Your Perfect Plot
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
                        Our expert advisors are ready to help you discover the ideal plot at the best price — with zero brokerage.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact">
                            <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 md:px-10 py-4 md:py-6 text-base md:text-lg rounded-full hover:scale-105 transition-transform">
                                Talk to an Advisor
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="px-8 md:px-10 py-4 md:py-6 text-base md:text-lg rounded-full hover:scale-105 transition-transform">
                                Schedule Site Visit
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
