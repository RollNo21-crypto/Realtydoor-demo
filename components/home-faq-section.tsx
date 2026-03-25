'use client';

import { useState } from 'react';
import { HelpCircle, ArrowRight, ChevronDown, MessageCircle, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const homeFaqs = [
    {
        question: "What should I check before buying a residential plot in Bengaluru?",
        answer: "Check the project's legal documents, title clarity, registration details, approval status, builder credibility, and location suitability before making a purchase decision."
    },
    {
        question: "Are all plots on RealityDoor RERA registered?",
        answer: "Project registration status depends on the development and applicable regulations. Buyers should always verify project-specific details and supporting documentation before purchase."
    },
    {
        question: "Which areas are best for plot investment in Bengaluru?",
        answer: "Popular plotted-development corridors include Hoskote, Bagalur, Kanakapura Road, and other growth-led micro-markets based on budget, infrastructure, and buyer goals."
    },
    {
        question: "Can I get a home loan for a residential plot?",
        answer: "Yes, plot financing may be available through eligible lenders based on project profile, buyer eligibility, and required documentation."
    },
    {
        question: "How do I compare locations like Hoskote, Bagalur, and Kanakapura Road?",
        answer: "Compare them based on connectivity, growth outlook, pricing, future infrastructure, end-use potential, and investment horizon."
    },
    {
        question: "Does RealityDoor help with legal and documentation support?",
        answer: "Yes, RealityDoor supports buyers with guidance on approvals, documentation review, and key checkpoints to consider before finalizing a plot."
    }
];

export function HomeFaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative bg-muted py-16 md:py-24 overflow-hidden border-t border-border">
            {/* Background Accents */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-4xl px-6">
                {/* Header Area */}
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="font-display text-4xl md:text-5xl text-foreground leading-[1.2]">
                        Frequently Asked Questions About <span className="gradient-text italic">Buying Plots in Bengaluru</span>
                    </h2>
                </div>

                {/* FAQ Main Content Area (Single Column) */}
                <div className="space-y-4">
                    {homeFaqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`group rounded-xl border transition-all duration-500 ${openIndex === index
                                ? 'bg-background border-border shadow-md'
                                : 'bg-background/50 border-border hover:border-black/10'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 md:px-8 py-5 flex items-center justify-between text-left transition-all duration-300"
                            >
                                <span className={`font-display text-lg md:text-xl tracking-tight transition-colors duration-500 ${openIndex === index ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 ml-4 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-500 ${openIndex === index ? 'bg-primary border-primary rotate-180 shadow-[0_4px_10px_rgba(255,87,34,0.3)]' : 'bg-muted border-border group-hover:border-black/20'}`}>
                                    <ChevronDown className={`h-4 w-4 transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-muted-foreground'}`} />
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-6 md:px-8 pb-6 pt-1 text-muted-foreground text-base md:text-lg font-light leading-relaxed">
                                    <div className="h-px w-full bg-border mb-5" />
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final Scroll-to-Action */}
                <div className="mt-12 md:mt-16 pt-10 border-t border-border text-center">
                    <Link href="/faqs">
                        <Button variant="outline" className="rounded-full px-8 py-4 h-auto font-display text-base md:text-lg font-semibold border-border bg-background text-foreground flex items-center gap-2 mx-auto transition-transform hover:scale-105 active:scale-95">
                            Still have questions? View all FAQs <ArrowRight className="ml-2 h-5 w-5 text-primary" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
