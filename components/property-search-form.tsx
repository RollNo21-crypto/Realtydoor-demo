'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Home, IndianRupee, Maximize, Search } from 'lucide-react';

export function PropertySearchForm() {
    const router = useRouter();
    const [location, setLocation] = useState('');
    const [plotType, setPlotType] = useState('');
    const [budget, setBudget] = useState('');
    const [plotSize, setPlotSize] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        const params = new URLSearchParams();
        if (location) params.set('location', location);
        if (plotType) params.set('type', plotType);
        if (budget) params.set('budget', budget);
        if (plotSize) params.set('size', plotSize);

        router.push(`/properties?${params.toString()}`);
    };

    return (
        <div className="w-full max-w-5xl mx-auto px-4">
            <form onSubmit={handleSearch} className="relative overflow-hidden">
                {/* Glassmorphism Container */}
                <div className="relative rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-8">
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-3xl pointer-events-none" />

                    {/* Search Fields Grid */}
                    <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

                        {/* Location Field */}
                        <div className="relative">
                            <label className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                                <MapPin className="h-4 w-4" />
                                Location
                            </label>
                            <select
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-md border border-white/60 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500/60 focus:bg-white/70 transition-all appearance-none cursor-pointer shadow-sm"
                            >
                                <option value="">All Locations</option>
                                <option value="Hoskote">Hoskote, Bangalore</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Kanakapura">Kanakapura Road</option>
                                <option value="Jigani">Jigani, Bangalore</option>
                                <option value="Punganur">Punganur, Andhra Pradesh</option>
                            </select>
                        </div>

                        {/* Plot Type Field */}
                        <div className="relative">
                            <label className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                                <Home className="h-4 w-4" />
                                Plot Type
                            </label>
                            <select
                                value={plotType}
                                onChange={(e) => setPlotType(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-md border border-white/60 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500/60 focus:bg-white/70 transition-all appearance-none cursor-pointer shadow-sm"
                            >
                                <option value="">All Types</option>
                                <option value="RESIDENTIAL_PLOT">Residential Plot</option>
                            </select>
                        </div>

                        {/* Budget Field */}
                        <div className="relative">
                            <label className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                                <IndianRupee className="h-4 w-4" />
                                Budget
                            </label>
                            <select
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-md border border-white/60 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500/60 focus:bg-white/70 transition-all appearance-none cursor-pointer shadow-sm"
                            >
                                <option value="">Any Budget</option>
                                <option value="under20l">Under ₹20 Lakhs</option>
                                <option value="20l-30l">₹20L – ₹30L</option>
                                <option value="30l-40l">₹30L – ₹40L</option>
                                <option value="above40l">Above ₹40 Lakhs</option>
                            </select>
                        </div>

                        {/* Plot Size Field */}
                        <div className="relative">
                            <label className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
                                <Maximize className="h-4 w-4" />
                                Plot Size
                            </label>
                            <select
                                value={plotSize}
                                onChange={(e) => setPlotSize(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-md border border-white/60 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500/60 focus:border-orange-500/60 focus:bg-white/70 transition-all appearance-none cursor-pointer shadow-sm"
                            >
                                <option value="">Any Size</option>
                                <option value="small">Up to 150 sq.yds</option>
                                <option value="medium">150–200 sq.yds</option>
                                <option value="large">200+ sq.yds</option>
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
                            Search Plots
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
