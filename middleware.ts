import { auth } from '@/lib/auth';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Paths that require authentication
const protectedPaths = ['/dashboard', '/admin', '/properties/create'];

// Paths that require admin role
const adminPaths = ['/admin'];

export default async function middleware(request: NextRequest) {
    const session = await auth();
    const { pathname } = request.nextUrl;

    // Check if path is protected
    const isProtectedPath = protectedPaths.some((path) => pathname.startsWith(path));
    const isAdminPath = adminPaths.some((path) => pathname.startsWith(path));

    // Redirect to login if accessing protected path without session
    if (isProtectedPath && !session) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('callbackUrl', pathname);
        return NextResponse.redirect(loginUrl);
    }

    // Redirect to home if accessing admin path without admin role
    if (isAdminPath && session?.user?.role !== 'ADMIN') {
        return NextResponse.redirect(new URL('/', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
