// Mock plot listings data for Reznicocare
export const mockProperties = [
    {
        id: 'vrunda-city',
        title: 'Vrunda City',
        description: 'A premium gated plotted development by ASR Developers spread across 17 acres in Hoskote. Planned residential plots with 60-feet wide internal roads, grand entrance, and modern amenities.',
        price: 4200000, // 42 Lakhs starting for 1200 sqft
        pricePerSqft: 3500,
        address: 'Hoskote',
        city: 'Hoskote',
        state: 'Karnataka',
        zipCode: '562114',
        country: 'India',
        latitude: 13.1127,
        longitude: 77.8097,
        propertyType: 'RESIDENTIAL_PLOT',
        plotType: 'Residential Plot',
        status: 'AVAILABLE',
        bedrooms: 0,
        bathrooms: 0,
        sqft: 1200,
        sizeRange: '1200 - 2400',
        sqYards: 133,
        dimensions: '30×40',
        lotSize: 1200,
        yearBuilt: null,
        totalAcres: 17,
        totalPlots: 292,
        approvals: 'BMRDA Approved',
        googleMapsLink: 'https://maps.app.goo.gl/qQVqsxwkXt13Zfkf6',
        pricingBreakdown: [
            { size: 1200, price: 4200000 },
            { size: 1500, price: 5250000 },
            { size: 2400, price: 8400000 }
        ],
        features: ['Clear Title', 'Gated Community', 'Bank Loan Available', '60-ft Wide Roads', 'STP'],
        amenities: ['Clubhouse', 'Swimming Pool', 'Gym', 'Badminton Court', 'Parks'],
        featured: true,
        views: 487,
        createdAt: new Date('2024-02-10'),
        updatedAt: new Date(),
        userId: 'agent1',
        images: [
            { id: 'vc1', url: 'https://realtydoor.com/wp-content/uploads/2025/12/banner-3-scaled.webp', alt: 'Vrunda City Entrance', order: 0 },
            { id: 'vc2', url: 'https://realtydoor.com/wp-content/uploads/2025/12/banner-1-scaled.webp', alt: 'Vrunda City Info', order: 1 },
            { id: 'vc3', url: 'https://realtydoor.com/wp-content/uploads/2025/12/banner-1-1-copy-scaled.webp', alt: 'Vrunda City Roads', order: 2 },
            { id: 'vc4', url: 'https://realtydoor.com/wp-content/uploads/2025/12/master-plan-scaled.webp', alt: 'Vrunda City Master Plan', order: 3 }
        ]
    },
    {
        id: 'neo-serene',
        title: 'Neo Serene',
        description: 'Serene is designed to deliver on all of the important bits – convenience, comfort, space, and wellbeing. Secure a stake in Hoskote\'s bright future. Fully developed plots.',
        price: 5400000,
        pricePerSqft: 4500,
        address: 'Hoskote',
        city: 'Hoskote',
        state: 'Karnataka',
        zipCode: '562114',
        country: 'India',
        latitude: 13.1205,
        longitude: 77.8356,
        statusTag1: 'BMRDA Approved',
        priceLabel: 'Starting Price',
        priceSuffix: ' onwards',
        propertyType: 'RESIDENTIAL_PLOT',
        plotType: 'Residential Plot',
        status: 'AVAILABLE',
        bedrooms: 0,
        bathrooms: 0,
        sqft: 1200,
        sizeRange: '1200 - 2400',
        sqYards: 133,
        dimensions: '30×40',
        lotSize: 1200,
        yearBuilt: null,
        totalAcres: 10,
        totalPlots: 172,
        approvals: 'BMRDA Approved',
        googleMapsLink: 'https://maps.app.goo.gl/W5Z7hvbVQnpmMjeC9',
        pricingBreakdown: [
            { size: 1200, price: 5400000 },
            { size: 1500, price: 6750000 },
            { size: 2400, price: 10800000 }
        ],
        features: ['Clear Title', 'Affordable Luxury', 'Fully Developed Infrastructure'],
        amenities: ['Clubhouse', 'Jogging Track', 'Kids Play Area', 'Yoga Zone', 'CCTV'],
        featured: true,
        views: 312,
        createdAt: new Date('2024-02-12'),
        updatedAt: new Date(),
        userId: 'agent1',
        images: [
            { id: 'ns1', url: 'https://realtydoor.com/wp-content/uploads/2025/09/banner-1-1-scaled.png', alt: 'Neo Serene Entrance', order: 0 },
            { id: 'ns2', url: 'https://realtydoor.com/wp-content/uploads/2025/09/banner-1-2-scaled.png', alt: 'Neo Serene Layout', order: 1 },
            { id: 'ns3', url: 'https://realtydoor.com/wp-content/uploads/2025/09/Untitled-design-71.png', alt: 'Neo Serene Master Plan', order: 2 }
        ]
    },
    {
        id: 'green-park',
        title: 'Green Park',
        description: 'Green Park brings affordable and beautifully planned plotted development in Chinatmani with complete DTCP approvals. 18 acres of serene space to build your legacy.',
        price: 1950000,
        pricePerSqft: 1950,
        address: 'Chinatmani',
        city: 'Chinatmani',
        state: 'Karnataka',
        zipCode: '563125',
        country: 'India',
        latitude: 13.4000,
        longitude: 78.0500,
        statusTag1: 'DTCP Approved',
        priceLabel: 'Starting Price',
        priceSuffix: ' onwards',
        propertyType: 'RESIDENTIAL_PLOT',
        plotType: 'Residential Plot',
        status: 'AVAILABLE',
        bedrooms: 0,
        bathrooms: 0,
        sqft: 1000,
        sizeRange: '1000 - 2400',
        sqYards: 111,
        dimensions: '30×33.3',
        lotSize: 1000,
        yearBuilt: null,
        totalAcres: 18,
        totalPlots: 272,
        approvals: 'DTCP Approved',
        googleMapsLink: 'https://maps.app.goo.gl/q7dc8hetG8t2mUAz6',
        pricingBreakdown: [
            { size: 1000, price: 1950000 },
            { size: 1200, price: 2340000 },
            { size: 1500, price: 2925000 },
            { size: 2400, price: 4680000 }
        ],
        features: ['Clear Title', 'DTCP Limits', 'Rapid Appreciation Zone'],
        amenities: ['Parks', 'Gated Securtiy', 'Water Connections', 'Blacktop Roads'],
        featured: true,
        views: 205,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 'agent1',
        images: [
            { id: 'gp1', url: 'https://realtydoor.com/wp-content/uploads/2025/12/banner-1-scaled.webp', alt: 'Green Park Entrance', order: 0 }
        ]
    },
    {
        id: 'aashrithaa-brindavan',
        title: 'Aashrithaa Brindavan',
        description: 'Live your dream lifestyle in a lush sanctuary situated next to Art of Living International Center, off Kanakapura Road – South Bengaluru\'s Best Address.',
        price: 6600000,
        pricePerSqft: 5500,
        address: 'Kaggalipura',
        city: 'Kanakapura Road',
        state: 'Karnataka',
        zipCode: '562106',
        country: 'India',
        latitude: 12.7966,
        longitude: 77.5151,
        statusTag1: 'BMRDA Approved',
        priceLabel: 'Starting Price',
        priceSuffix: ' onwards',
        propertyType: 'RESIDENTIAL_PLOT',
        plotType: 'Residential Plot',
        status: 'AVAILABLE',
        bedrooms: 0,
        bathrooms: 0,
        sqft: 1200,
        sizeRange: '1200 - 2400',
        sqYards: 133,
        dimensions: '30×40',
        lotSize: 1200,
        yearBuilt: null,
        totalAcres: 13,
        totalPlots: 218,
        approvals: 'BMRDA Approved',
        googleMapsLink: 'https://maps.app.goo.gl/UYFRS95xBA88XUJ79',
        pricingBreakdown: [
            { size: 1200, price: 6600000 },
            { size: 1500, price: 8250000 },
            { size: 2400, price: 13200000 }
        ],
        features: ['Premium Living', 'Tranquil Environment', 'Fully Developed'],
        amenities: ['Parks', 'Jogging Track', 'Kids Play Area', 'Security', 'STP'],
        featured: true,
        views: 402,
        createdAt: new Date('2024-05-01'),
        updatedAt: new Date(),
        userId: 'agent1',
        images: [
            { id: 'ab1', url: '/aashrithaa-brindavan/image-1.jpeg', alt: 'Brindavan View', order: 0 },
            { id: 'ab2', url: '/aashrithaa-brindavan/image-2.jpeg', alt: 'Brindavan Community', order: 1 },
            { id: 'ab3', url: '/aashrithaa-brindavan/image-3.jpeg', alt: 'Brindavan Parks', order: 2 },
            { id: 'ab4', url: '/aashrithaa-brindavan/image-4.jpeg', alt: 'Brindavan Layout', order: 3 },
            { id: 'ab5', url: '/aashrithaa-brindavan/image-5.jpeg', alt: 'Brindavan Plot Details', order: 4 }
        ]
    },
    {
        id: 'aashrithaa-divine',
        title: 'Aashrithaa Divine',
        description: 'Nestled in the heart of Jigani Anekal road, these exclusive plots by Aashrithaa Properties are set to redefine your perfect living space. Offering RERA certified plots ready for development.',
        price: 4500000,
        pricePerSqft: 4500,
        address: 'Jigani Anekal road',
        city: 'Bengaluru',
        state: 'Karnataka',
        zipCode: '560105',
        country: 'India',
        latitude: 12.7541,
        longitude: 77.6459,
        statusTag1: 'BMRDA & RERA Approved',
        priceLabel: 'Starting Price',
        priceSuffix: ' onwards',
        propertyType: 'RESIDENTIAL_PLOT',
        plotType: 'Residential Plot',
        status: 'AVAILABLE',
        bedrooms: 0,
        bathrooms: 0,
        sqft: 1000,
        sizeRange: '1000 - 2400',
        sqYards: 111,
        dimensions: '30×33.3',
        lotSize: 1000,
        yearBuilt: null,
        totalAcres: 15,
        totalPlots: 231,
        approvals: 'BMRDA & RERA Approved',
        reraNo: 'PRM/KA/RERA/1251/308/PR/130723/006060 & 006497',
        googleMapsLink: 'https://maps.app.goo.gl/yp49w3hTi4vzaPYs5',
        pricingBreakdown: [
            { size: 1000, price: 4500000 },
            { size: 1200, price: 5400000 },
            { size: 1500, price: 6750000 },
            { size: 2400, price: 10800000 }
        ],
        features: ['BMRDA Approved', 'RERA Registered', 'Strategic Location'],
        amenities: ['Gardens', 'Playground', 'Jogging Tracks', 'Underground Drainage'],
        featured: true,
        views: 318,
        createdAt: new Date('2024-05-01'),
        updatedAt: new Date(),
        userId: 'agent1',
        images: [
            { id: 'ad1', url: 'https://realtydoor.com/wp-content/uploads/2024/05/devine-1.webp', alt: 'Divine Entrance', order: 0 },
            { id: 'ad2', url: 'https://realtydoor.com/wp-content/uploads/2024/05/devine-2.webp', alt: 'Divine Wide Roads', order: 1 },
            { id: 'ad3', url: 'https://realtydoor.com/wp-content/uploads/2024/05/devine-3.webp', alt: 'Divine Greenery', order: 2 }
        ]
    },
    {
        id: 'newtownj',
        title: 'NewtownJ',
        description: 'Experience luxury living with over 30 top-tier amenities in a 61-acre modern era township at Punganur. The property boasts twin lakes providing serene lakeside hangouts amidst lush greenery.',
        price: 2600000,
        pricePerSqft: 2600,
        address: 'Punganur',
        city: 'Punganur',
        state: 'Andhra Pradesh',
        zipCode: '517247',
        country: 'India',
        latitude: 13.3688,
        longitude: 78.5662,
        statusTag1: 'DTCP & RERA Approved',
        priceLabel: 'Starting Price',
        priceSuffix: ' onwards',
        propertyType: 'RESIDENTIAL_PLOT',
        plotType: 'Residential Plot',
        status: 'AVAILABLE',
        bedrooms: 0,
        bathrooms: 0,
        sqft: 1000,
        sizeRange: '1000 - 2400',
        sqYards: 111,
        dimensions: '30×33.3',
        lotSize: 1000,
        yearBuilt: null,
        totalAcres: 61,
        totalPlots: 747,
        approvals: 'DTCP & RERA Approved',
        reraNo: 'P10370174734',
        googleMapsLink: 'https://maps.app.goo.gl/Q6kkmdaSLtsj4j4n7',
        pricingBreakdown: [
            { size: 1000, price: 2600000 },
            { size: 1200, price: 3120000 },
            { size: 1500, price: 3900000 },
            { size: 2400, price: 6240000 }
        ],
        features: ['DTCP & RERA Approved', 'Twin Lakes', 'Massive Township'],
        amenities: ['Clubhouse', 'Kids Play Area', 'Jogging Track', 'Swimming Pool', 'Yoga Zone'],
        featured: true,
        views: 412,
        createdAt: new Date('2024-05-01'),
        updatedAt: new Date(),
        userId: 'agent1',
        images: [
            { id: 'ntj1', url: 'https://realtydoor.com/wp-content/uploads/2024/05/j-town-1.webp', alt: 'NewtownJ Main', order: 0 },
            { id: 'ntj2', url: 'https://realtydoor.com/wp-content/uploads/2024/05/j-town-2.webp', alt: 'NewtownJ Lakes', order: 1 },
            { id: 'ntj3', url: 'https://realtydoor.com/wp-content/uploads/2024/05/j-town-3.webp', alt: 'NewtownJ Greens', order: 2 }
        ]
    }
];

// ── Helpers ──────────────────────────────────────────────────────────────────

export function getFeaturedProperties() {
    return mockProperties.filter((p) => p.featured).slice(0, 6);
}

export function getProperties(page: number = 1, limit: number = 20) {
    const start = (page - 1) * limit;
    const end = start + limit;
    return {
        properties: mockProperties.slice(start, end),
        total: mockProperties.length,
        page,
        totalPages: Math.ceil(mockProperties.length / limit),
    };
}

export function getPropertyById(id: string) {
    return mockProperties.find((p) => p.id === id) || null;
}

// Format price in Indian style: ₹ X Lakhs / ₹ X Cr
export function formatIndianPrice(price: number): string {
    if (price >= 10000000) {
        return `₹${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
        return `₹${(price / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${price.toLocaleString('en-IN')}`;
}
