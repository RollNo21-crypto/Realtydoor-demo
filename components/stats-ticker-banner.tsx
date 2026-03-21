/**
 * StatsTickerBanner — compact placeholder strip
 * -----------------------------------------------
 * A thin dark banner between page sections.
 * The graphic designer will replace the filler stats with real data/creative.
 */

export function StatsTickerBanner() {
    const items = [
        '10,000+ Happy Families',
        'RERA Verified Plots',
        'Zero Brokerage',
        'Clear Title Guarantee',
        'Bank Loan Ready',
        '15+ Years of Trust',
        '100% Legal Support',
    ];

    return (
        <div className="w-full bg-[#1A2744] overflow-hidden py-3 border-y border-white/5">
            <div className="flex items-center gap-0 whitespace-nowrap"
                style={{
                    animation: 'ticker-scroll 28s linear infinite',
                }}>
                {[...items, ...items].map((item, i) => (
                    <span key={i} className="inline-flex items-center gap-3 px-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
                        <span className="w-1 h-1 rounded-full bg-[#FF5722] flex-shrink-0" />
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
