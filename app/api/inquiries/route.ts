import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { inquirySchema } from '@/lib/validations/property';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = inquirySchema.parse(body);

        const session = await auth();

        // Create inquiry
        const inquiry = await prisma.inquiry.create({
            data: {
                name: validatedData.name,
                email: validatedData.email,
                phone: validatedData.phone,
                message: validatedData.message,
                propertyId: validatedData.propertyId,
                userId: session?.user?.id,
            },
        });

        return NextResponse.json(
            { message: 'Inquiry submitted successfully', inquiry },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error creating inquiry:', error);
        return NextResponse.json(
            { error: 'Failed to submit inquiry' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const session = await auth();

        if (!session?.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Fetch user's inquiries
        const inquiries = await prisma.inquiry.findMany({
            where: {
                userId: session.user.id,
            },
            include: {
                property: {
                    select: {
                        id: true,
                        title: true,
                        images: {
                            take: 1,
                            orderBy: { order: 'asc' },
                        },
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });

        return NextResponse.json({ inquiries });
    } catch (error) {
        console.error('Error fetching inquiries:', error);
        return NextResponse.json(
            { error: 'Failed to fetch inquiries' },
            { status: 500 }
        );
    }
}
