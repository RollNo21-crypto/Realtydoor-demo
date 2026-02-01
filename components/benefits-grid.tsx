'use client';

interface Benefit {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface BenefitsGridProps {
    benefits: Benefit[];
    title?: string;
    description?: string;
}

export function BenefitsGrid({ benefits, title = "Why Choose Us", description }: BenefitsGridProps) {
    return (
        <section className="bg-muted py-24">
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

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="rounded-2xl bg-background p-8 shadow-sm hover-lift group"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                                <div className="text-primary">
                                    {benefit.icon}
                                </div>
                            </div>
                            <h3 className="font-display text-xl mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
