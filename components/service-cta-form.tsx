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

            // Prepare Buildesk API payload (ApiKey is added server-side)
            const buildeskPayload = {
                UserId: null,
                UID: null,
                FirstName: firstName,
                LastName: lastName,
                DialCode: 91,
                Platform: "website",
                SubSource: `Service Page Form - ${serviceName}`,
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

            // Send to our secure proxy API
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(buildeskPayload)
            });

            const result = await response.json();

            // We proceed to WhatsApp regardless of CRM success to ensure user contact
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

            if (!result.Success) {
                console.warn('CRM Submission Warning (Proxy):', result.Message);
            }
        } catch (err) {
            console.error('Service form error:', err);
            // Still show success/open WhatsApp even if CRM fails
            setSuccess(true);
            const whatsappMessage = `Hi! I'm ${formData.firstName}. ...`; // Simplified for brevity in error path
            window.open(`https://wa.me/919136954648?text=${encodeURIComponent(`Service Inquiry: ${serviceName}`)}`, '_blank');
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
        <section className="bg-gradient-to-br from-primary/10 to-primary/5 py-24 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Content */}
                    <div className="space-y-10 lg:pr-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
                                <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></span>
                                <span className="text-sm font-semibold text-primary">Available for Consultation</span>
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                                {title}
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {description}
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-5 text-muted-foreground bg-white/50 p-4 rounded-xl border border-white">
                                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 90 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground text-lg mb-1">Swift Response</h4>
                                    <p className="text-sm">We typically reply within 2 hours</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 text-muted-foreground bg-white/50 p-4 rounded-xl border border-white">
                                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground text-lg mb-1">Secure & Confidential</h4>
                                    <p className="text-sm">Your information is entirely safe with us</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="rounded-3xl bg-white p-8 md:p-10 shadow-2xl border border-gray-100 lg:ml-auto w-full max-w-xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-gray-700">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white transition-all"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="mobile" className="block text-sm font-medium mb-2 text-gray-700">
                                        Mobile *
                                    </label>
                                    <input
                                        type="tel"
                                        id="mobile"
                                        required
                                        pattern="[0-9]{10}"
                                        value={formData.mobile}
                                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white transition-all"
                                        placeholder="10-digit mobile number"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="city" className="block text-sm font-medium mb-2 text-gray-700">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        value={formData.city}
                                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white transition-all"
                                        placeholder="Your city"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-white transition-all resize-none"
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
                                className="w-full bg-gradient-to-r from-[#E64A19] to-[#D84315] hover:from-[#D84315] hover:to-[#BF360C] text-white font-semibold py-4 px-6 rounded-xl text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(230,74,25,0.4)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 group mt-2"
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
            </div>
        </section>
    );
}
