import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { inquirySchema } from '@/lib/validations/property';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = inquirySchema.parse(body);

        const session = await auth();

        // Create inquiry locally
        const inquiry = await prisma.inquiry.create({
            data: {
                name: validatedData.name,
                email: validatedData.email,
                phone: validatedData.phone,
                message: validatedData.message,
                propertyId: validatedData.propertyId,
                userId: session?.user?.id,
            },
            include: {
                property: {
                    select: { title: true }
                }
            }
        });

        // Forward to Buildesk CRM
        try {
            const BUILDESK_ENDPOINT = 'https://buildeskapi.azurewebsites.net/api/buildeskapi/campaignlead/create';
            const API_KEY = process.env.BUILDESK_API_KEY || '';

            if (API_KEY) {
                const nameParts = validatedData.name.trim().split(' ');
                const firstName = nameParts[0] || '';
                const lastName = nameParts.slice(1).join(' ') || '';

                const buildeskPayload = {
                    ApiKey: API_KEY,
                    UserId: null,
                    UID: null,
                    FirstName: firstName,
                    LastName: lastName,
                    DialCode: 91,
                    Platform: "website",
                    SubSource: "Property Inquiry Form",
                    Mobile: validatedData.phone || "",
                    SecondaryNumber: "",
                    CreatedDate: new Date().toLocaleDateString('en-GB'),
                    Email: validatedData.email,
                    Remark: `Inquiry for ${inquiry.property.title}: ${validatedData.message}`,
                    HasVisitScheduled: false,
                    VisitDate: null,
                    ProjectUID: validatedData.propertyId,
                    ProjectName: inquiry.property.title,
                    CampaignUID: "",
                    Campaign: "Property Inquiry",
                    CampaignChannel: "Property Page",
                    CampaignChannelUID: "",
                    City: "",
                    MinBudget: null,
                    MaxBudget: null,
                    EmploymentType: "",
                    Income: null,
                    Designation: "",
                    UtmCampaign: "",
                    UtmMedium: "",
                    UtmSource: "",
                    UtmTerm: "",
                    GCLId: "",
                    FbId: "",
                    UtmContent: ""
                };

                await fetch(BUILDESK_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'ApiKey': API_KEY,
                    },
                    body: JSON.stringify(buildeskPayload),
                });
            }
        } catch (crmError) {
            console.error('Failed to forward inquiry to Buildesk:', crmError);
            // We don't fail the main request if CRM forwarding fails
        }

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
