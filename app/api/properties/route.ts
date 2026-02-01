import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { propertyFilterSchema } from '@/lib/validations/property';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const params = Object.fromEntries(searchParams.entries());

        // Validate and parse query parameters
        const validatedParams = propertyFilterSchema.parse({
            city: params.city,
            state: params.state,
            propertyType: params.propertyType,
            minPrice: params.minPrice ? parseFloat(params.minPrice) : undefined,
            maxPrice: params.maxPrice ? parseFloat(params.maxPrice) : undefined,
            minBedrooms: params.minBedrooms ? parseInt(params.minBedrooms) : undefined,
            maxBedrooms: params.maxBedrooms ? parseInt(params.maxBedrooms) : undefined,
            minBathrooms: params.minBathrooms ? parseFloat(params.minBathrooms) : undefined,
            maxBathrooms: params.maxBathrooms ? parseFloat(params.maxBathrooms) : undefined,
            minSqft: params.minSqft ? parseInt(params.minSqft) : undefined,
            maxSqft: params.maxSqft ? parseInt(params.maxSqft) : undefined,
            featured: params.featured === 'true' ? true : undefined,
            sortBy: params.sortBy as any,
            sortOrder: params.sortOrder as any,
            page: params.page ? parseInt(params.page) : undefined,
            limit: params.limit ? parseInt(params.limit) : undefined,
        });

        const { page, limit, sortBy, sortOrder, ...filters } = validatedParams;
        const skip = (page - 1) * limit;

        // Build where clause
        const where: any = { status: 'AVAILABLE' };

        if (filters.city) {
            where.city = { contains: filters.city, mode: 'insensitive' };
        }
        if (filters.state) {
            where.state = { contains: filters.state, mode: 'insensitive' };
        }
        if (filters.propertyType) {
            where.propertyType = filters.propertyType;
        }
        if (filters.minPrice || filters.maxPrice) {
            where.price = {};
            if (filters.minPrice) where.price.gte = filters.minPrice;
            if (filters.maxPrice) where.price.lte = filters.maxPrice;
        }
        if (filters.minBedrooms || filters.maxBedrooms) {
            where.bedrooms = {};
            if (filters.minBedrooms) where.bedrooms.gte = filters.minBedrooms;
            if (filters.maxBedrooms) where.bedrooms.lte = filters.maxBedrooms;
        }
        if (filters.minBathrooms || filters.maxBathrooms) {
            where.bathrooms = {};
            if (filters.minBathrooms) where.bathrooms.gte = filters.minBathrooms;
            if (filters.maxBathrooms) where.bathrooms.lte = filters.maxBathrooms;
        }
        if (filters.minSqft || filters.maxSqft) {
            where.sqft = {};
            if (filters.minSqft) where.sqft.gte = filters.minSqft;
            if (filters.maxSqft) where.sqft.lte = filters.maxSqft;
        }
        if (filters.featured !== undefined) {
            where.featured = filters.featured;
        }

        // Build order by
        const orderBy: any = {};
        orderBy[sortBy] = sortOrder;

        // Fetch properties and total count
        const [properties, total] = await Promise.all([
            prisma.property.findMany({
                where,
                include: {
                    images: {
                        orderBy: { order: 'asc' },
                        take: 5,
                    },
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                        },
                    },
                },
                orderBy,
                skip,
                take: limit,
            }),
            prisma.property.count({ where }),
        ]);

        return NextResponse.json({
            properties,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        });
    } catch (error) {
        console.error('Error fetching properties:', error);
        return NextResponse.json(
            { error: 'Failed to fetch properties' },
            { status: 500 }
        );
    }
}
