import { NextRequest, NextResponse } from 'next/server';

const BUILDESK_ENDPOINT = 'https://buildeskapi.azurewebsites.net/api/buildeskapi/campaignlead/create';
const API_KEY = process.env.BUILDESK_API_KEY || '';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Inject ApiKey server-side — never trust the client to send it
        const payload = {
            ...body,
            ApiKey: API_KEY,
        };

        const response = await fetch(BUILDESK_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ApiKey': API_KEY,   // required in both header AND body
            },
            body: JSON.stringify(payload),
        });

        const result = await response.json();
        return NextResponse.json(result);

    } catch (error) {
        console.error('Lead proxy error:', error);
        return NextResponse.json(
            { Success: false, Message: 'Failed to submit lead. Please try again.' },
            { status: 500 }
        );
    }
}
