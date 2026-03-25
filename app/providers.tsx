'use client';

import posthog from 'posthog-js';
import { PostHogProvider, usePostHog } from 'posthog-js/react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

// Initialize PostHog carefully so it only runs on the client-side
if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        person_profiles: 'always', // Create user profiles for anonymous users as well
        capture_pageview: false, // Disable automatic pageview capture, as we capture manually
        capture_pageleave: true, // Capture when a user leaves a page
        autocapture: true, // Capture all clicks, inputs, and form submissions automatically
        session_recording: {
            maskAllInputs: false,
            maskTextSelector: "*[type='password']", // Mask passwords to protect privacy
        },
        loaded: (posthog: any) => {
            if (process.env.NODE_ENV === 'development')
                posthog.debug(); // Helps debug events in dev mode
        }
    });
}

function PostHogPageView() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const posthog = usePostHog();

    useEffect(() => {
        // Track pageviews correctly in Next.js App Router
        if (pathname && posthog) {
            let url = window.origin + pathname;
            if (searchParams && searchParams.toString()) {
                url = url + `?${searchParams.toString()}`;
            }
            posthog.capture('$pageview', {
                $current_url: url,
            });
        }
    }, [pathname, searchParams, posthog]);

    return null;
}

export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
    // If the key is not defined, just render the app normally without analytics (prevents crashes)
    if (!process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN) {
        return <>{children}</>;
    }

    return (
        <PostHogProvider client={posthog}>
            <Suspense fallback={null}>
                <PostHogPageView />
            </Suspense>
            {children}
        </PostHogProvider>
    );
}
