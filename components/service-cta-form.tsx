'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import type { LeadFormData } from '@/lib/buildesk-api';

interface ServiceCTAFormProps {
    serviceName: string;
    title?: string;
    description?: string;
}

export function ServiceCTAForm({
    serviceName,
    title = "Get Started Today",
    description = "Fill out the form below and our team will get in touch with you shortly."
}: ServiceCTAFormProps) {
    const [formData, setFormData] = useState({
        firstName: '',
        mobile: '',
        email: '',
        city: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        try {
            // Split name into first and last name
            const nameParts = formData.firstName.trim().split(' ');
            const firstName = nameParts[0] || '';
            const lastName = nameParts.slice(1).join(' ') || '';

            // Prepare Buildesk API payload
            const buildeskPayload = {
                ApiKey: "ee6411f7-4da2-4172-b657-372a1151c93f",
                UserId: null,
                UID: null,
                FirstName: firstName,
                LastName: lastName,
                DialCode: 91,
                Platform: "website",
                SubSource: `Service Page Form - ${serviceName}`, // Track end-page form
                Mobile: formData.mobile,
                SecondaryNumber: "",
                CreatedDate: new Date().toLocaleDateString('en-GB'),
                Email: formData.email,
                Remark: `${serviceName} - ${formData.message || 'Inquiry via service page form'}`,
                HasVisitScheduled: false,
                VisitDate: null,
                ProjectUID: null,
                ProjectName: "RealtyDoor",
                CampaignUID: "",
                Campaign: serviceName,
                CampaignChannel: "Service Page Form",
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

            // Send to Buildesk API
            const response = await fetch('https://buildeskapi.azurewebsites.net/api/buildeskapi/campaignlead/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(buildeskPayload)
            });

            const result = await response.json();

            if (result.Success) {
                setSuccess(true);
                // Build WhatsApp message
                const whatsappMessage = `Hi! I'm ${formData.firstName}.

📱 Mobile: ${formData.mobile}
📧 Email: ${formData.email}
${formData.city ? `📍 Location: ${formData.city}\n` : ''}
🔧 Service: ${serviceName}

💬 Message:
${formData.message || 'I\'m interested in this service. Please contact me.'}`;

                const encodedMessage = encodeURIComponent(whatsappMessage);
                const whatsappUrl = `https://wa.me/919136954648?text=${encodedMessage}`;

                setTimeout(() => {
                    window.open(whatsappUrl, '_blank');
                }, 1000);
            } else {
                setError(result.Message || 'Failed to submit. Please try again.');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (success) {
        return (
            <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-24">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <div className="rounded-2xl bg-white p-12 shadow-lg">
                        <div className="mb-6 flex justify-center">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                                <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="font-display text-3xl mb-4">Thank You!</h3>
                        <p className="text-lg text-muted-foreground mb-6">
                            Your inquiry has been submitted successfully. Redirecting you to WhatsApp...
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-24">
            <div className="mx-auto max-w-3xl px-6">
                <div className="mb-12 text-center">
                    <h2 className="font-display text-4xl md:text-5xl mb-6">
                        {title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {description}
                    </p>
                </div>

                <div className="rounded-2xl bg-white p-8 md:p-12 shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    required
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="mobile" className="block text-sm font-medium mb-2">
                                    Mobile *
                                </label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    required
                                    pattern="[0-9]{10}"
                                    value={formData.mobile}
                                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                    placeholder="10-digit mobile number"
                                />
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="city" className="block text-sm font-medium mb-2">
                                    City
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                                    placeholder="Your city"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                                placeholder="Tell us about your requirements..."
                            />
                        </div>

                        {error && (
                            <div className="rounded-xl bg-red-50 border border-red-200 p-4 text-sm text-red-600">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-[#E64A19] to-[#D84315] hover:from-[#D84315] hover:to-[#BF360C] text-white font-semibold py-6 px-6 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(230,74,25,0.5)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 group"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="h-5 w-5 animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    Submit Inquiry
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
