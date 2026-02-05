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

        // Here you would typically:
        // 1. Save to database
        // 2. Send email notification to admin
        // 3. Send confirmation email to applicant

        // For now, just log the data
        console.log('Join Us Application Received:', {
            fullName,
            email,
            phone,
            company: data.company || 'N/A',
            role,
            experience,
            location,
            message,
            submittedAt: new Date().toISOString(),
        });

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
