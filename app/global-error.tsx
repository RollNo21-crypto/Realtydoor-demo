'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, RefreshCw } from 'lucide-react';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <div className="min-h-screen flex items-center justify-center bg-background px-4">
                    <div className="text-center">
                        <h1 className="font-display text-9xl font-bold text-primary mb-4">500</h1>
                        <h2 className="text-3xl font-semibold mb-4">Something went wrong</h2>
                        <p className="text-muted-foreground mb-8 max-w-md">
                            {error.message || 'An unexpected error occurred'}
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Button onClick={reset} className="gap-2">
                                <RefreshCw className="h-4 w-4" />
                                Try Again
                            </Button>
                            <Link href="/">
                                <Button variant="outline" className="gap-2">
                                    <Home className="h-4 w-4" />
                                    Back to Home
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
