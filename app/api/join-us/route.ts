import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        // Validate required fields
        const { fullName, email, phone, role, experience, location, message } = data;

        if (!fullName || !email || !phone || !role || !experience || !location || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Forward to Buildesk CRM
        try {
            const BUILDESK_ENDPOINT = 'https://buildeskapi.azurewebsites.net/api/buildeskapi/campaignlead/create';
            const API_KEY = process.env.BUILDESK_API_KEY || '';

            if (API_KEY) {
                const nameParts = fullName.trim().split(' ');
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
                    SubSource: "Join Us Form",
                    Mobile: phone,
                    SecondaryNumber: "",
                    CreatedDate: new Date().toLocaleDateString('en-GB'),
                    Email: email,
                    Remark: `Join Us Application - Role: ${role}, Experience: ${experience}, Location: ${location}. Message: ${message}`,
                    HasVisitScheduled: false,
                    VisitDate: null,
                    ProjectUID: null,
                    ProjectName: "RealtyDoor Onboarding",
                    CampaignUID: "",
                    Campaign: "Onboarding",
                    CampaignChannel: "Join Us Page",
                    CampaignChannelUID: "",
                    City: location,
                    MinBudget: null,
                    MaxBudget: null,
                    EmploymentType: role,
                    Income: null,
                    Designation: role,
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
            console.error('Failed to forward join-us application to Buildesk:', crmError);
        }

        // Simulate successful submission
        return NextResponse.json(
            {
                success: true,
                message: 'Application submitted successfully',
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing join-us application:', error);
        return NextResponse.json(
            { error: 'Failed to process application' },
            { status: 500 }
        );
    }
}
