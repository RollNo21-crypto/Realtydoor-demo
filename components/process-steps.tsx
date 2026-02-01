'use client';

import { CheckCircle2 } from 'lucide-react';

interface Step {
    number: number;
    title: string;
    description: string;
}

interface ProcessStepsProps {
    steps: Step[];
    title?: string;
    description?: string;
}

export function ProcessSteps({ steps, title = "Our Process", description }: ProcessStepsProps) {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <h2 className="font-display text-4xl md:text-5xl mb-6">
                        {title}
                    </h2>
                    {description && (
                        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                            {description}
                        </p>
                    )}
                </div>

                <div className="relative">
                    {/* Connection Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col md:flex-row gap-6 md:gap-8"
                            >
                                {/* Step Number */}
                                <div className="flex-shrink-0">
                                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg">
                                        <span className="font-display text-2xl font-bold">
                                            {step.number}
                                        </span>
                                        {index < steps.length - 1 && (
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 h-12 w-0.5 bg-primary/20 md:hidden" />
                                        )}
                                    </div>
                                </div>

                                {/* Step Content */}
                                <div className="flex-1 rounded-2xl bg-muted p-8 hover-lift">
                                    <div className="flex items-start gap-3 mb-3">
                                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                        <h3 className="font-display text-2xl">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed ml-9">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
