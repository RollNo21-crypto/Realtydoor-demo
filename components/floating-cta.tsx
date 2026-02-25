'use client';

import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

interface FloatingCTAProps {
    serviceName: string;
    ctaText?: string;
}

export function FloatingCTA({ serviceName, ctaText = "Get Started" }: FloatingCTAProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        city: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Split name into first and last name
            const nameParts = formData.name.trim().split(' ');
            const firstName = nameParts[0] || '';
            const lastName = nameParts.slice(1).join(' ') || '';

            // Prepare Buildesk API payload (ApiKey is added server-side)
            const buildeskPayload = {
                UserId: null,
                UID: null,
                FirstName: firstName,
                LastName: lastName,
                DialCode: 91,
                Platform: "website",
                SubSource: `Floating CTA - ${serviceName}`,
                Mobile: formData.mobile,
                SecondaryNumber: "",
                CreatedDate: new Date().toLocaleDateString('en-GB'),
                Email: formData.email,
                Remark: `${serviceName} - ${formData.message || 'Inquiry via floating CTA button'}`,
                HasVisitScheduled: false,
                VisitDate: null,
                ProjectUID: null,
                ProjectName: "RealtyDoor",
                CampaignUID: "",
                Campaign: serviceName,
                CampaignChannel: "Floating CTA",
                CampaignChannelUID: "",
                City: formData.city || "",
                MinBudget: null,
                MaxBudget: null,
                EmploymentType: "",
                Income: null,
                Designation: "",
                UtmCampaign: "",
                UtmMedium: "",
                UtmSource: "",
                UtmTerm: "",
                GCLId: "",
                FbId: "",
                UtmContent: ""
            };

            // Send to our secure proxy API
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(buildeskPayload)
            });

            const result = await response.json();

            // Always proceed to WhatsApp to ensure user contact
            setIsSuccess(true);

            // Build WhatsApp message
            const whatsappMessage = encodeURIComponent(
                `Hi! I'm interested in ${serviceName}.\n\nName: ${formData.name}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\nCity: ${formData.city}\nMessage: ${formData.message}`
            );

            // Redirect to WhatsApp after 2 seconds
            setTimeout(() => {
                window.open(`https://wa.me/919136954648?text=${whatsappMessage}`, '_blank');
                setIsModalOpen(false);
                setIsSuccess(false);
                setFormData({ name: '', mobile: '', email: '', city: '', message: '' });
            }, 2000);

            if (!result.Success) {
                console.warn('CRM Submission Warning (Proxy):', result.Message);
            }
        } catch (error) {
            console.error('Floating CTA error:', error);
            // Revert on error if necessary or proceed
            setIsSuccess(true);
            setTimeout(() => {
                window.open(`https://wa.me/919136954648?text=${encodeURIComponent(`Interest in ${serviceName}`)}`, '_blank');
                setIsModalOpen(false);
                setIsSuccess(false);
            }, 2000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Floating CTA Button - Positioned to the left of WhatsApp chat */}
            <div className="fixed bottom-6 md:bottom-8 right-24 md:right-28 z-50">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-gradient-to-r from-[#E64A19] to-[#D84315] hover:from-[#BF360C] hover:to-[#E64A19] text-white px-6 py-4 md:p-4 md:hover:px-6 rounded-full shadow-2xl hover:shadow-[#E64A19]/50 transition-all duration-300 hover:scale-105 active:scale-95 group relative flex items-center gap-2 overflow-hidden"
                    aria-label={ctaText}
                >
                    <Sparkles className="h-6 w-6 md:group-hover:rotate-12 transition-transform flex-shrink-0" />

                    {/* Text Label - Always visible on mobile, expands on hover on desktop */}
                    <span className="md:max-w-0 md:group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300 font-semibold text-sm">
                        {ctaText}
                    </span>
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-200"
                        onClick={() => setIsModalOpen(false)}
                    />

                    {/* Modal Content - Matching WhatsApp Style */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
                            {/* Header - Orange Gradient matching site theme */}
                            <div className="bg-gradient-to-r from-[#E64A19] to-[#D84315] p-6 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                        <Sparkles className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg">{serviceName}</h3>
                                        <p className="text-white/90 text-xs">Get started in minutes</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Form Body */}
                            {!isSuccess ? (
                                <form onSubmit={handleSubmit} className="p-6 bg-gray-50 space-y-4 overflow-y-auto max-h-[calc(90vh-120px)]">
                                    <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm mb-4">
                                        <p className="text-gray-700 text-sm">
                                            Fill in your details and we'll get back to you shortly with personalized assistance.
                                        </p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#E64A19]/50 focus:border-[#E64A19] transition-all"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Mobile Number *</label>
                                        <input
                                            type="tel"
                                            required
                                            pattern="[0-9]{10}"
                                            value={formData.mobile}
                                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5722]/50 focus:border-[#FF5722] transition-all"
                                            placeholder="10-digit mobile number"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5722]/50 focus:border-[#FF5722] transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                                        <input
                                            type="text"
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5722]/50 focus:border-[#FF5722] transition-all"
                                            placeholder="Your city"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows={3}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#FF5722]/50 focus:border-[#FF5722] transition-all resize-none"
                                            placeholder="Tell us about your requirements..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-[#E64A19] to-[#D84315] hover:from-[#BF360C] hover:to-[#E64A19] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                                    </button>

                                    <p className="text-xs text-gray-500 text-center">
                                        We'll respond within 24 hours
                                    </p>
                                </form>
                            ) : (
                                <div className="p-8 bg-gray-50 text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h4 className="font-semibold text-xl text-gray-900 mb-2">Thank You!</h4>
                                    <p className="text-gray-600 mb-4">Redirecting to WhatsApp...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
