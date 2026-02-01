import { z } from 'zod';

export const propertySchema = z.object({
    title: z.string().min(5, 'Title must be at least 5 characters').max(100),
    description: z.string().min(20, 'Description must be at least 20 characters'),
    price: z.number().positive('Price must be positive'),
    address: z.string().min(5),
    city: z.string().min(2),
    state: z.string().min(2),
    zipCode: z.string().min(3),
    country: z.string().default('USA'),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
    propertyType: z.enum(['HOUSE', 'APARTMENT', 'CONDO', 'TOWNHOUSE', 'VILLA', 'LAND', 'COMMERCIAL']),
    bedrooms: z.number().int().min(0),
    bathrooms: z.number().min(0),
    sqft: z.number().int().positive(),
    lotSize: z.number().int().positive().optional(),
    yearBuilt: z.number().int().min(1800).max(new Date().getFullYear() + 2).optional(),
    features: z.array(z.string()).default([]),
    amenities: z.array(z.string()).default([]),
    virtualTourUrl: z.string().url().optional().or(z.literal('')),
});

export const propertyFilterSchema = z.object({
    city: z.string().optional(),
    state: z.string().optional(),
    propertyType: z.enum(['HOUSE', 'APARTMENT', 'CONDO', 'TOWNHOUSE', 'VILLA', 'LAND', 'COMMERCIAL']).optional(),
    minPrice: z.number().optional(),
    maxPrice: z.number().optional(),
    minBedrooms: z.number().int().optional(),
    maxBedrooms: z.number().int().optional(),
    minBathrooms: z.number().optional(),
    maxBathrooms: z.number().optional(),
    minSqft: z.number().int().optional(),
    maxSqft: z.number().int().optional(),
    featured: z.boolean().optional(),
    sortBy: z.enum(['price', 'createdAt', 'views']).default('createdAt'),
    sortOrder: z.enum(['asc', 'desc']).default('desc'),
    page: z.number().int().min(1).default(1),
    limit: z.number().int().min(1).max(100).default(12),
});

export const inquirySchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
    propertyId: z.string(),
});

export const registerSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    role: z.enum(['USER', 'AGENT']).default('USER'),
    phone: z.string().optional(),
});

export const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
});

export type PropertyInput = z.infer<typeof propertySchema>;
export type PropertyFilter = z.infer<typeof propertyFilterSchema>;
export type InquiryInput = z.infer<typeof inquirySchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
