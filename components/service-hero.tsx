'use client';

import Image from 'next/image';

interface ServiceHeroProps {
    title: string;
    description: string;
    backgroundImage: string;
    icon: React.ReactNode;
}

export function ServiceHero({ title, description, backgroundImage, icon }: ServiceHeroProps) {
    return (
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
                <div className="mb-6 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm border-2 border-primary/50">
                        <div className="text-primary">
                            {icon}
                        </div>
                    </div>
                </div>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white mb-6 animate-slide-up">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto animate-slide-up stagger-1">
                    {description}
                </p>
            </div>
        </section>
    );
}
