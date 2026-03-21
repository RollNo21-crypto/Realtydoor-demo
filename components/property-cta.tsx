import Image, { StaticImageData } from 'next/image';
import { Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface PropertyCTAProps {
    propertyName: string;
    image: StaticImageData | string;
    variant: 'split' | 'glass' | 'overlay';
    brochureUrl?: string;
}

export function PropertyCTA({
    propertyName,
    image,
    variant,
    brochureUrl = "https://realtydoor.com/wp-content/uploads/2025/09/Serene-Brochure_compressed.pdf"
}: PropertyCTAProps) {
    if (variant === 'split') {
        return (
            <section className="py-24 px-4 md:px-8 bg-[#FAFAFA]">
                <div className="max-w-7xl mx-auto">
                    <div className="rounded-[3rem] overflow-hidden grid lg:grid-cols-2 shadow-2xl border border-black/5 bg-[#0A0A0A]">
                        {/* Image Left */}
                        <div className="relative min-h-[400px] lg:min-h-0 h-full w-full">
                            <Image src={image as any} alt={propertyName} fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                        </div>

                        {/* Content Right */}
                        <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center relative overflow-hidden bg-black z-10 w-full h-full">
                            {/* Accent Glow */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF5722]/15 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />

                            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] md:text-xs font-black uppercase tracking-widest mb-10 border border-[#FF5722]/30 bg-[#FF5722]/10 text-[#FF5722] self-start relative z-10 w-max shadow-[0_0_20px_rgba(255,87,34,0.1)]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-pulse" />Limited Availability
                            </div>

                            <h2 className="font-display text-white mb-3 relative z-10 leading-[0.95]" style={{ fontSize: 'clamp(3rem,6vw,4.5rem)' }}>
                                Your Dream<br />Awaits
                            </h2>
                            <h2 className="font-display text-white/50 italic font-light mb-8 relative z-10" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', lineHeight: 1.1 }}>
                                in {propertyName}
                            </h2>

                            <p className="text-white/60 font-light mb-12 text-base md:text-lg leading-relaxed max-w-md relative z-10">
                                Fully developed. Clear title. Ready for registration. Secure your premium plot today.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 relative z-10 mt-auto">
                                <a href="tel:+919845012345" className="w-full sm:w-auto">
                                    <Button className="rounded-2xl px-8 py-7 font-bold text-white w-full sm:w-auto shadow-2xl shadow-[#FF5722]/20 text-base transition-all hover:scale-[1.02] border border-[#FF5722]/50" style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>
                                        <Phone className="mr-2 h-5 w-5" />Call Now
                                    </Button>
                                </a>
                                <a href={brochureUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                    <Button className="bg-white/5 hover:bg-white/10 rounded-2xl px-8 py-7 font-bold border-2 border-white/10 text-white w-full sm:w-auto backdrop-blur-md text-base transition-all">
                                        <FileText className="mr-2 h-5 w-5 opacity-70" />Brochure
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (variant === 'glass') {
        return (
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden min-h-[500px] flex items-center justify-center p-6 md:p-12 border border-black/5 shadow-2xl">
                    <div className="absolute inset-0 z-0 bg-black">
                        <Image src={image as any} alt={propertyName} fill className="object-cover opacity-80" />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-8 md:p-14 w-full max-w-4xl relative z-10 text-center shadow-2xl flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] md:text-xs font-black uppercase tracking-widest mb-6 border border-white/20 bg-black/40 text-white">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-pulse" />Limited Plots
                        </div>
                        <h2 className="font-display text-white mb-2" style={{ fontSize: 'clamp(3rem,6vw,4.5rem)', lineHeight: 1 }}>
                            Your Dream Awaits
                        </h2>
                        <h2 className="font-display text-white/70 italic font-light mb-6" style={{ fontSize: 'clamp(2.5rem,5vw,3.5rem)', lineHeight: 1.1 }}>
                            in {propertyName}
                        </h2>
                        <p className="text-white/80 font-light mb-10 text-base md:text-lg leading-relaxed max-w-xl">
                            Experience uncompromised luxury and serenity. Secure your family&apos;s future with a premium plot that&apos;s ready for registration.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
                            <a href="tel:+919845012345" className="w-full sm:w-auto">
                                <Button className="rounded-full px-10 py-7 font-bold text-white shadow-xl shadow-[#FF5722]/30 text-base w-full sm:w-auto border border-[#FF5722]/50 hover:scale-[1.02] transition-transform"
                                    style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>
                                    <Phone className="mr-2 h-5 w-5" />Call to Book
                                </Button>
                            </a>
                            <a href={brochureUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button className="bg-transparent hover:bg-white/10 rounded-full px-10 py-7 font-semibold border-2 border-white/30 text-white text-base w-full sm:w-auto backdrop-blur-md transition-colors">
                                    <FileText className="mr-2 h-5 w-5 opacity-70" />Download Brochure
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (variant === 'overlay') {
        return (
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto relative rounded-[2.5rem] overflow-hidden min-h-[500px] flex items-end p-8 md:p-14 shadow-2xl border border-black/5 group">
                    <div className="absolute inset-0 z-0 bg-black">
                        <Image src={image as any} alt={propertyName} fill className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80" />
                        <div className="absolute inset-0"
                            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)' }} />
                    </div>
                    <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-8 pb-4">
                        <div className="max-w-xl">
                            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-6 bg-[#FF5722] text-white">
                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                Ready To Move
                            </div>
                            <h2 className="font-display text-white mb-2" style={{ fontSize: 'clamp(3rem,6vw,4.5rem)', lineHeight: 1 }}>
                                Own a Piece of<br />
                                <span className="text-[#FF5722] italic font-light">{propertyName}</span>
                            </h2>
                            <p className="text-white/60 font-light mt-6 text-base md:text-lg max-w-lg leading-relaxed">
                                Don&apos;t wait. Our limited inventory of fully-developed premium plots is selling fast. Clear titles and immediate registration available.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 w-full md:w-auto">
                            <a href="tel:+919845012345" className="w-full sm:w-auto">
                                <Button className="rounded-2xl px-10 py-7 font-semibold text-white w-full sm:w-auto shadow-xl shadow-[#FF5722]/30 text-base transition-transform hover:scale-105 border border-[#FF5722]/50"
                                    style={{ background: 'linear-gradient(135deg,#FF5722,#E64A19)' }}>
                                    <Phone className="mr-2 h-5 w-5" />Schedule Visit
                                </Button>
                            </a>
                            <a href="https://wa.me/919845012345" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button className="bg-transparent hover:bg-white/10 rounded-2xl px-10 py-7 font-semibold border-2 border-white/30 text-white w-full sm:w-auto backdrop-blur-md text-base transition-colors">
                                    WhatsApp Us
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return null;
}
