import { PrismaClient, PropertyType, PropertyStatus, UserRole } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding database...');

    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 10);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@realestate.com' },
        update: {},
        create: {
            email: 'admin@realestate.com',
            name: 'Admin User',
            password: adminPassword,
            role: UserRole.ADMIN,
            phone: '+1-555-0100',
            bio: 'Platform administrator',
        },
    });

    // Create agent user
    const agentPassword = await bcrypt.hash('agent123', 10);
    const agent = await prisma.user.upsert({
        where: { email: 'agent@realestate.com' },
        update: {},
        create: {
            email: 'agent@realestate.com',
            name: 'Sarah Johnson',
            password: agentPassword,
            role: UserRole.AGENT,
            phone: '+1-555-0101',
            bio: 'Luxury real estate specialist with 10+ years of experience in premium properties.',
        },
    });

    // Create sample properties
    const properties = [
        {
            title: 'The Obsidian Villa',
            description:
                'A contemporary masterpiece featuring floor-to-ceiling windows, infinity pool, and breathtaking ocean views. This architectural gem combines minimalist design with luxurious amenities.',
            price: 8400000,
            address: '123 Ocean Drive',
            city: 'Monaco',
            state: 'Monaco',
            zipCode: '98000',
            country: 'Monaco',
            latitude: 43.7384,
            longitude: 7.4246,
            propertyType: PropertyType.VILLA,
            status: PropertyStatus.AVAILABLE,
            bedrooms: 5,
            bathrooms: 5.5,
            sqft: 6500,
            lotSize: 12000,
            yearBuilt: 2022,
            features: [
                'Ocean View',
                'Infinity Pool',
                'Smart Home',
                'Wine Cellar',
                'Home Theater',
            ],
            amenities: [
                'Gym',
                'Spa',
                'Private Beach Access',
                'Concierge Service',
                '24/7 Security',
            ],
            featured: true,
            userId: agent.id,
        },
        {
            title: 'Skyline Loft 102',
            description:
                'Ultra-modern penthouse in the heart of Manhattan with panoramic Central Park views. Features Italian marble, custom cabinetry, and state-of-the-art smart home technology.',
            price: 12200000,
            address: '432 Park Avenue',
            city: 'New York',
            state: 'NY',
            zipCode: '10022',
            country: 'USA',
            latitude: 40.7614,
            longitude: -73.9776,
            propertyType: PropertyType.APARTMENT,
            status: PropertyStatus.AVAILABLE,
            bedrooms: 4,
            bathrooms: 4.5,
            sqft: 4200,
            yearBuilt: 2023,
            features: [
                'Central Park Views',
                'Private Elevator',
                'Smart Home',
                'Italian Marble',
                'Chef Kitchen',
            ],
            amenities: ['Doorman', 'Fitness Center', 'Rooftop Lounge', 'Valet', 'Pet Spa'],
            featured: true,
            userId: agent.id,
        },
        {
            title: 'Azura Estate',
            description:
                'Magnificent waterfront estate in Santorini with traditional Cycladic architecture. Private infinity pool overlooking the Aegean Sea, perfect for luxury living.',
            price: 22000000,
            address: '45 Caldera View',
            city: 'Santorini',
            state: 'Cyclades',
            zipCode: '84700',
            country: 'Greece',
            latitude: 36.3932,
            longitude: 25.4615,
            propertyType: PropertyType.VILLA,
            status: PropertyStatus.AVAILABLE,
            bedrooms: 6,
            bathrooms: 7.0,
            sqft: 7800,
            lotSize: 15000,
            yearBuilt: 2021,
            features: [
                'Waterfront',
                'Infinity Pool',
                'Private Dock',
                'Wine Cave',
                'Outdoor Kitchen',
            ],
            amenities: [
                'Private Beach',
                'Helipad',
                'Staff Quarters',
                'Tennis Court',
                'Spa',
            ],
            featured: true,
            userId: agent.id,
        },
        {
            title: 'Mountain Peak Chalet',
            description:
                'Stunning alpine retreat with ski-in/ski-out access. Features exposed timber beams, stone fireplaces, and panoramic mountain views.',
            price: 5900000,
            address: '789 Alpine Way',
            city: 'Aspen',
            state: 'CO',
            zipCode: '81611',
            country: 'USA',
            latitude: 39.1911,
            longitude: -106.8175,
            propertyType: PropertyType.HOUSE,
            status: PropertyStatus.AVAILABLE,
            bedrooms: 5,
            bathrooms: 5.5,
            sqft: 5200,
            lotSize: 8000,
            yearBuilt: 2020,
            features: [
                'Ski-In/Ski-Out',
                'Mountain Views',
                'Fireplace',
                'Hot Tub',
                'Game Room',
            ],
            amenities: ['Heated Driveway', 'Mudroom', 'Boot Warmers', 'Wine Storage', 'Sauna'],
            featured: false,
            userId: agent.id,
        },
    ];

    for (const propertyData of properties) {
        const property = await prisma.property.create({
            data: {
                ...propertyData,
                images: {
                    create: [
                        {
                            url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200',
                            alt: `${propertyData.title} - Exterior`,
                            order: 0,
                        },
                        {
                            url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
                            alt: `${propertyData.title} - Living Room`,
                            order: 1,
                        },
                        {
                            url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
                            alt: `${propertyData.title} - Kitchen`,
                            order: 2,
                        },
                        {
                            url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200',
                            alt: `${propertyData.title} - Bedroom`,
                            order: 3,
                        },
                    ],
                },
            },
        });

        console.log(`✅ Created property: ${property.title}`);
    }

    console.log('✨ Seeding completed successfully!');
}

main()
    .catch((e) => {
        console.error('❌ Seeding failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
