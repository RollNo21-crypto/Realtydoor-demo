import { Metadata } from 'next';
import { FloatingNav } from '@/components/floating-nav';
import { Footer } from '@/components/footer';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Real Estate Blog & Market Insights | RealtyDoor',
    description: 'Stay updated with Bengaluru real estate market trends, investment tips, RERA guides, and property buying advice from RealtyDoor experts.',
    keywords: ['real estate blog India', 'property market insights', 'Bengaluru real estate news', 'home buying tips', 'RERA guide', 'property investment advice'],
    alternates: { canonical: 'https://realtydoor.in/blog' },
    openGraph: {
        title: 'Real Estate Blog & Market Insights | RealtyDoor',
        description: 'Expert insights, market trends, and valuable tips for your real estate journey in India.',
        url: 'https://realtydoor.in/blog',
        type: 'website',
        images: [{ url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200', width: 1200, height: 630, alt: 'RealtyDoor Real Estate Blog' }],
    },
    twitter: { card: 'summary_large_image', title: 'Real Estate Blog | RealtyDoor', description: 'Market insights and property tips from India\'s top real estate experts.' },
};

export default function BlogPage() {
    const posts = [
        {
            id: 1,
            title: 'Top 10 Luxury Residential Projects in Mumbai 2024',
            excerpt: 'Discover the most sought-after luxury residential developments that are redefining premium living in Mumbai.',
            author: 'Priya Sharma',
            date: '2024-01-15',
            category: 'Market Insights',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
            readTime: '5 min read'
        },
        {
            id: 2,
            title: 'Understanding RERA: A Complete Guide for Homebuyers',
            excerpt: 'Everything you need to know about RERA regulations and how they protect your interests as a property buyer.',
            author: 'Rajesh Kumar',
            date: '2024-01-10',
            category: 'Legal',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
            readTime: '8 min read'
        },
        {
            id: 3,
            title: 'Investment Opportunities in Commercial Real Estate',
            excerpt: 'Explore the growing potential of commercial real estate investments and key factors to consider.',
            author: 'Amit Patel',
            date: '2024-01-05',
            category: 'Investment',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
            readTime: '6 min read'
        },
        {
            id: 4,
            title: 'Sustainable Living: Green Homes in India',
            excerpt: 'How eco-friendly construction and sustainable features are shaping the future of residential real estate.',
            author: 'Sneha Reddy',
            date: '2023-12-28',
            category: 'Trends',
            image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800',
            readTime: '7 min read'
        },
        {
            id: 5,
            title: 'Smart Home Technology: The Future of Living',
            excerpt: 'Discover how smart home innovations are transforming modern residential properties.',
            author: 'Vikram Singh',
            date: '2023-12-20',
            category: 'Technology',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
            readTime: '4 min read'
        }
    ];

    return (
        <>
            <FloatingNav />


            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920"
                        alt="Blog Background"
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/90" />
                </div>

                <div className="absolute inset-0 bg-grid-white/[0.02]" />
                <div className="gradient-overlay absolute inset-0 opacity-30" />
                <div className="relative mx-auto max-w-7xl px-6">
                    <div className="text-center">
                        <h1 className="font-display text-5xl md:text-7xl text-white mb-6">
                            Blog & <span className="italic font-normal gradient-text">Insights</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                            Expert insights, market trends, and valuable tips for your real estate journey
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Posts Bento Grid */}
            <section className="py-16 md:py-24 bg-background">
                <div className="mx-auto max-w-7xl px-6">
                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Featured Post - Spans 2 columns on desktop */}
                        <article className="md:col-span-2 lg:col-span-2 md:row-span-2 group">
                            <Link href={`/blog/${posts[0].id}`}>
                                <div className="relative h-full min-h-[400px] md:min-h-[600px] rounded-2xl overflow-hidden bg-background shadow-lg hover-lift border-2 border-transparent hover:border-orange-500/20 transition-all duration-300">
                                    {/* Image Section - Full Card */}
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={posts[0].image}
                                            alt={posts[0].title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="px-3 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs md:text-sm font-bold rounded-full shadow-lg">
                                                {posts[0].category}
                                            </span>
                                        </div>

                                        {/* Content Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                                            <h2 className="font-display text-2xl md:text-4xl font-bold mb-3 group-hover:text-orange-300 transition-colors">
                                                {posts[0].title}
                                            </h2>
                                            <p className="text-sm md:text-base text-slate-200 mb-4 line-clamp-2">
                                                {posts[0].excerpt}
                                            </p>
                                            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-slate-300">
                                                <div className="flex items-center gap-2">
                                                    <User className="h-4 w-4" />
                                                    {posts[0].author}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="h-4 w-4" />
                                                    {new Date(posts[0].date).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    })}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-4 w-4" />
                                                    {posts[0].readTime}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </article>

                        {/* Regular Posts */}
                        {posts.slice(1).map((post) => (
                            <article key={post.id} className="group">
                                <Link href={`/blog/${post.id}`}>
                                    <div className="relative h-full rounded-2xl overflow-hidden bg-background shadow-sm hover-lift border-2 border-transparent hover:border-orange-500/20 transition-all duration-300">
                                        {/* Image Section */}
                                        <div className="relative h-48 md:h-56 overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                            {/* Category Badge */}
                                            <div className="absolute top-3 left-3 z-10">
                                                <span className="px-2.5 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold rounded-full shadow-lg">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-5 md:p-6">
                                            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                                                <div className="flex items-center gap-1.5">
                                                    <User className="h-3.5 w-3.5" />
                                                    {post.author}
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <Calendar className="h-3.5 w-3.5" />
                                                    {new Date(post.date).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric'
                                                    })}
                                                </div>
                                            </div>

                                            <h3 className="font-display text-lg md:text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>

                                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                                                    <Clock className="h-3.5 w-3.5" />
                                                    {post.readTime}
                                                </span>
                                                <div className="inline-flex items-center gap-2 text-orange-500 font-medium text-sm group-hover:gap-3 transition-all">
                                                    Read More
                                                    <ArrowRight className="h-4 w-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
