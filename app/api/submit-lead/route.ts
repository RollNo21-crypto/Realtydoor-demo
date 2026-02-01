import { NextRequest, NextResponse } from 'next/server';
import { convertToBuildesk, submitLeadToBuildesk, type LeadFormData } from '@/lib/buildesk-api';

// Buildesk API Configuration
const BUILDESK_API_KEY = process.env.BUILDESK_API_KEY || 'ee6411f7-4da2-4172-b657-372a1151c93f';
const BUILDESK_API_ENDPOINT = process.env.BUILDESK_API_ENDPOINT || 'https://buildeskapi.azurewebsites.net/api/buildeskapi/campaignlead/create';
const PROJECT_NAME = process.env.PROJECT_NAME || 'RealtyDoor';

export async function POST(request: NextRequest) {
    try {
        // Parse request body
        const formData: LeadFormData = await request.json();

        // Validate required fields
        if (!formData.firstName || !formData.mobile || !formData.email) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Please provide all required fields: Name, Mobile, and Email.',
                },
                { status: 400 }
            );
        }

        // Validate mobile number (10 digits for India)
        if (!/^\d{10}$/.test(formData.mobile)) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Please provide a valid 10-digit mobile number.',
                },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Please provide a valid email address.',
                },
                { status: 400 }
            );
        }

        // Convert to Buildesk format
        const buildeskData = convertToBuildesk(formData, BUILDESK_API_KEY, PROJECT_NAME);

        // Submit to Buildesk CRM
        const response = await submitLeadToBuildesk(buildeskData, BUILDESK_API_KEY, BUILDESK_API_ENDPOINT);

        // Check if submission was successful
        if (response.Success) {
            return NextResponse.json({
                success: true,
                message: response.Message || 'Lead submitted successfully!',
                data: {
                    firstName: formData.firstName,
                    mobile: formData.mobile,
                    propertyName: formData.propertyName,
                },
            });
        } else {
            // Buildesk API returned success: false
            return NextResponse.json(
                {
                    success: false,
                    message: response.Message || 'Failed to submit lead. Please try again.',
                },
                { status: 400 }
            );
        }
    } catch (error) {
        console.error('Lead submission error:', error);
        return NextResponse.json(
            {
                success: false,
                message: 'An error occurred while submitting your information. Please try again.',
                error: error instanceof Error ? error.message : 'Unknown error',
            },
            { status: 500 }
        );
    }
}
