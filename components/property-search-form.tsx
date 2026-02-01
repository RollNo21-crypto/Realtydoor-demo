'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Home, DollarSign, Bed, Search } from 'lucide-react';

export function PropertySearchForm() {
    const router = useRouter();
    const [location, setLocation] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [budget, setBudget] = useState('');
    const [bedrooms, setBedrooms] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        // Build query params
        const params = new URLSearchParams();
        if (location) params.set('location', location);
        if (propertyType) params.set('type', propertyType);
        if (budget) params.set('budget', budget);
        if (bedrooms) params.set('bedrooms', bedrooms);

        // Navigate to properties page with filters
        router.push(`/properties?${params.toString()}`);
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-4">
            <form onSubmit={handleSearch} className="relative overflow-hidden">
                {/* Glassmorphism Container */}
                <div className="relative rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-8">
                    {/* Subtle gradient overlay for extra depth */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-3xl pointer-events-none" />

                    {/* Search Fields Grid */}
                    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        {/* Location Field */}
                        <div className="relative">
                            <label className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                                <MapPin className="h-4 w-4" />
                                Location
                            </label>
                            <input
                                type="text"
                                placeholder="Bangalore, Mumbai, Delhi..."
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-md border border-white/60 text-gray-900 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500/60 focus:bg-white/70 transition-all shadow-sm"
                            />
                        </div>

                        {/* Property Type Field */}
                        <div className="relative">
                            <label className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                                <Home className="h-4 w-4" />
                                Property Type
                            </label>
                            <select
                                value={propertyType}
                                onChange={(e) => setPropertyType(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-md border border-white/60 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500/60 focus:bg-white/70 transition-all appearance-none cursor-pointer shadow-sm"
                            >
                                <option value="">All Types</option>
                                <option value="APARTMENT">Apartment</option>
                                <option value="VILLA">Villa</option>
                                <option value="HOUSE">Independent House</option>
                                <option value="plot">Residential Plot</option>
                                <option value="commercial">Commercial</option>
                                <option value="penthouse">Penthouse</option>
                            </select>
                        </div>

                        {/* Budget Field - Indian Market */}
                        <div className="relative">
                            <label className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                                <DollarSign className="h-4 w-4" />
                                Budget
                            </label>
                            <select
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-md border border-white/60 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500/60 focus:bg-white/70 transition-all appearance-none cursor-pointer shadow-sm"
                            >
                                <option value="">Select Budget</option>
                                <option value="under30l">Under ₹30 Lakhs</option>
                                <option value="30l-50l">₹30L - ₹50L</option>
                                <option value="50l-75l">₹50L - ₹75L</option>
                                <option value="75l-1cr">₹75L - ₹1 Cr</option>
                                <option value="1cr-2cr">₹1 Cr - ₹2 Cr</option>
                                <option value="2cr-3cr">₹2 Cr - ₹3 Cr</option>
                                <option value="3cr-5cr">₹3 Cr - ₹5 Cr</option>
                                <option value="5cr-10cr">₹5 Cr - ₹10 Cr</option>
                                <option value="over10cr">Above ₹10 Cr</option>
                            </select>
                        </div>

                        {/* Bedrooms Field - BHK Format */}
                        <div className="relative">
                            <label className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                                <Bed className="h-4 w-4" />
                                BHK
                            </label>
                            <select
                                value={bedrooms}
                                onChange={(e) => setBedrooms(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-md border border-white/60 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500/60 focus:bg-white/70 transition-all appearance-none cursor-pointer shadow-sm"
                            >
                                <option value="">Any</option>
                                <option value="1">1 BHK</option>
                                <option value="2">2 BHK</option>
                                <option value="3">3 BHK</option>
                                <option value="4">4 BHK</option>
                                <option value="5">5+ BHK</option>
                            </select>
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="relative">
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <Search className="h-5 w-5" />
                            Search Properties
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
