import { Metadata } from 'next';
import Script from 'next/script';
import { FloatingNav } from '@/components/floating-nav';
import { Footer } from '@/components/footer';
import { Search, Sparkles, HelpCircle, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { FAQAccordion } from '@/components/faq-accordion';

export const metadata: Metadata = {
    title: 'Real Estate FAQs | Buying, Selling & Loans | RealtyDoor',
    description: 'Get answers to the most common real estate questions in India. Buying, selling, home loans, legal services, and property management explained by RealtyDoor experts.',
    keywords: ['real estate FAQ India', 'property buying questions', 'home loan FAQ', 'property registration questions', 'RERA FAQ', 'sell property FAQ'],
    alternates: { canonical: 'https://realtydoor.in/faqs' },
    openGraph: {
        title: 'Real Estate FAQs | RealtyDoor',
        description: 'All your property questions answered. Buying, selling, loans, legal and management — covered by experts.',
        url: 'https://realtydoor.in/faqs',
        type: 'website',
        images: [{ url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200', width: 1200, height: 630, alt: 'RealtyDoor FAQs' }],
    },
    twitter: { card: 'summary_large_image', title: 'Real Estate FAQs | RealtyDoor', description: 'Expert answers to all your property questions.' },
};

const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        { '@type': 'Question', name: 'How do I search for properties on RealtyDoor?', acceptedAnswer: { '@type': 'Answer', text: 'You can search for properties using our advanced search filters on the homepage. Filter by location, price range, property type, bedrooms, and amenities to find your perfect home.' } },
        { '@type': 'Question', name: 'Are all properties on RealtyDoor verified?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, every property listed on RealtyDoor undergoes thorough verification. We check ownership documents, legal clearances, and physical inspection before listing.' } },
        { '@type': 'Question', name: 'What is the minimum down payment required for a home loan?', acceptedAnswer: { '@type': 'Answer', text: 'Banks typically require 10–20% down payment. This varies based on property value, credit score, and the lending institution.' } },
        { '@type': 'Question', name: 'How long does it take to sell a property on RealtyDoor?', acceptedAnswer: { '@type': 'Answer', text: 'Properties listed on RealtyDoor sell within 30–90 days on average. With expert marketing, many sell within 30 days at the right price.' } },
        { '@type': 'Question', name: 'What legal services does RealtyDoor provide?', acceptedAnswer: { '@type': 'Answer', text: 'We provide title verification, document drafting, registration assistance, legal due diligence, and dispute resolution services.' } },
        { '@type': 'Question', name: 'What documents do I need to buy a property in India?', acceptedAnswer: { '@type': 'Answer', text: 'You will need PAN card, Aadhaar card, address proof, income proof, bank statements, and passport-size photographs. RealtyDoor guides you through the full process.' } },
    ],
};

export default function FAQsPage() {
    const faqCategories = [
        {
            category: "Buying Properties",
            faqs: [
                {
                    question: "How do I search for properties on RealtyDoor?",
                    answer: "You can search for properties using our advanced search filters on the homepage. Filter by location, price range, property type, bedrooms, and amenities to find your perfect home."
                },
                {
                    question: "Are all properties verified?",
                    answer: "Yes, every property listed on RealtyDoor undergoes a thorough verification process. We check ownership documents, legal clearances, and physical inspection before listing."
                },
                {
                    question: "Can I schedule a property visit?",
                    answer: "Absolutely! You can schedule property visits directly through our platform or contact our relationship managers who will arrange convenient viewing times for you."
                },
                {
                    question: "What documents do I need to buy a property?",
                    answer: "You'll need: PAN card, Aadhaar card, address proof, income proof (salary slips/ITR), bank statements, and passport-size photographs. Our team will guide you through the complete documentation process."
                }
            ]
        },
        {
            category: "Selling Properties",
            faqs: [
                {
                    question: "How do I list my property on RealtyDoor?",
                    answer: "Click on 'Sell Your Property' and fill out the property details form. Our team will verify the information and list your property within 24-48 hours."
                },
                {
                    question: "Is there a listing fee?",
                    answer: "No, listing your property on RealtyDoor is completely free. We only charge a small commission when your property is successfully sold."
                },
                {
                    question: "How long does it take to sell a property?",
                    answer: "The time varies based on location, pricing, and market conditions. On average, properties listed on RealtyDoor sell within 30-90 days."
                },
                {
                    question: "Can I modify my listing after posting?",
                    answer: "Yes, you can update your property details, photos, and pricing anytime through your dashboard or by contacting our support team."
                }
            ]
        },
        {
            category: "Loan Assistance",
            faqs: [
                {
                    question: "What types of loans do you assist with?",
                    answer: "We assist with home loans, loan against property, balance transfer, top-up loans, and construction loans from 20+ partner banks."
                },
                {
                    question: "What is the minimum down payment required?",
                    answer: "Typically, banks require 10-20% down payment. However, this varies based on the property value, your credit score, and the lending institution."
                },
                {
                    question: "How long does loan approval take?",
                    answer: "With our fast-track processing, pre-approved loans can be sanctioned within 7-10 days. Final disbursement takes 15-30 days depending on documentation."
                },
                {
                    question: "Can I get a loan with a low credit score?",
                    answer: "Yes, we work with multiple lenders who offer loans to applicants with varying credit scores. However, interest rates may be higher for lower credit scores."
                }
            ]
        },
        {
            category: "Legal Services",
            faqs: [
                {
                    question: "What legal services do you provide?",
                    answer: "We provide title verification, document drafting, registration assistance, legal due diligence, and dispute resolution services."
                },
                {
                    question: "How long does title verification take?",
                    answer: "Title verification typically takes 7-15 days depending on the complexity of the property's ownership history and documentation."
                },
                {
                    question: "Is legal assistance included in the service fee?",
                    answer: "Basic legal consultation is included. Detailed services like title verification and registration assistance are charged separately based on the scope of work."
                },
                {
                    question: "What happens if legal issues are found?",
                    answer: "Our legal team will provide a detailed report and recommend solutions. We can help resolve issues or advise you to reconsider the purchase if risks are significant."
                }
            ]
        },
        {
            category: "Property Management",
            faqs: [
                {
                    question: "What does property management include?",
                    answer: "Our services include tenant screening, rent collection, maintenance coordination, legal compliance, and regular property inspections."
                },
                {
                    question: "What are the management fees?",
                    answer: "We charge 5-10% of the monthly rent depending on the services required. Contact us for a customized quote based on your property."
                },
                {
                    question: "How do you screen tenants?",
                    answer: "We conduct background verification, employment checks, credit history review, and reference checks to ensure reliable tenants."
                },
                {
                    question: "Can I manage multiple properties?",
                    answer: "Yes, we offer portfolio management services for multiple properties with discounted rates for bulk management."
                }
            ]
        }
    ];

    return (
        <>
            <FloatingNav />

            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920"
                        alt="FAQs"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
                </div>

                <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-8">
                        <Sparkles className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-white">Help Center</span>
                    </div>

                    <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-6">
                        Frequently Asked
                        <span className="block gradient-text italic">Questions</span>
                    </h1>

                    <p className="text-xl text-slate-300 leading-relaxed mb-8">
                        Find answers to common questions about our services
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search for answers..."
                                className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Categories */}
            <section className="bg-background py-24">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="space-y-12">
                        {faqCategories.map((category, index) => (
                            <div key={index}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                        <HelpCircle className="h-6 w-6 text-primary" />
                                    </div>
                                    <h2 className="font-display text-3xl">{category.category}</h2>
                                </div>
                                <FAQAccordion faqs={category.faqs} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Still Have Questions CTA */}
            <section className="bg-muted py-24">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-12">
                        <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
                        <h2 className="font-display text-4xl mb-4">Still Have Questions?</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Our team is here to help. Get in touch and we'll answer all your queries.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="/contact">
                                <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(255,87,34,0.5)] transition-all duration-300 hover:scale-105">
                                    Contact Us
                                </button>
                            </a>
                            <a href="https://wa.me/919136954648">
                                <button className="px-8 py-4 bg-white dark:bg-background text-foreground font-semibold rounded-full border border-border hover:bg-muted transition-all duration-300">
                                    WhatsApp Support
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
