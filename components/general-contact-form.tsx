'use client';

import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export function GeneralContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        try {
            // Split name into first and last name
            const nameParts = formData.name.trim().split(' ');
            const firstName = nameParts[0] || '';
            const lastName = nameParts.slice(1).join(' ') || '';

            // Prepare Buildesk API payload
            const buildeskPayload = {
                UserId: null,
                UID: null,
                FirstName: firstName,
                LastName: lastName,
                DialCode: 91,
                Platform: "website",
                SubSource: "Contact Page Form",
                Mobile: formData.phone,
                SecondaryNumber: "",
                CreatedDate: new Date().toLocaleDateString('en-GB'),
                Email: formData.email,
                Remark: `${formData.subject} - ${formData.message}`,
                HasVisitScheduled: false,
                VisitDate: null,
                ProjectUID: null,
                ProjectName: "RealtyDoor",
                CampaignUID: "",
                Campaign: "General Inquiry",
                CampaignChannel: "Contact Page",
                CampaignChannelUID: "",
                City: "",
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
            // POST to our own API route — server adds the ApiKey securely
            const response = await fetch('/api/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(buildeskPayload)
            });

            const result = await response.json();

            if (result.Success) {
                setIsSuccess(true);
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

                // Reset success message after 5 seconds
                setTimeout(() => {
                    setIsSuccess(false);
                }, 5000);
            } else {
                setError(result.Message || 'Failed to submit. Please try again.');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="rounded-3xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 p-12 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="font-display text-2xl mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="Your full name"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="your@email.com"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="10-digit mobile number"
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject *
                    </label>
                    <select
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Property Buying">Property Buying</option>
                        <option value="Property Selling">Property Selling</option>
                        <option value="Loan Assistance">Loan Assistance</option>
                        <option value="Legal Services">Legal Services</option>
                        <option value="Property Management">Property Management</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                </label>
                <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Tell us how we can help you..."
                />
            </div>

            {error && (
                <div className="rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 text-sm text-red-600 dark:text-red-400">
                    {error}
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#E64A19] to-[#D84315] hover:from-[#BF360C] hover:to-[#E64A19] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        <Send className="h-5 w-5" />
                        Send Message
                    </>
                )}
            </button>

            <p className="text-xs text-muted-foreground text-center">
                We'll respond within 24 hours during business days
            </p>
        </form>
    );
}
