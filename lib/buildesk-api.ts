// Buildesk CRM API Client
// API Documentation: https://buildeskapi.azurewebsites.net

export interface BuildeskLeadData {
    UserId?: string | null;
    UID?: string | null;
    FirstName: string;
    LastName: string;
    DialCode: number;
    Platform: string;
    SubSource: string;
    Mobile: string;
    SecondaryNumber?: string;
    CreatedDate: string; // Format: DD/MM/YYYY
    Email: string;
    Remark?: string;
    HasVisitScheduled?: boolean;
    VisitDate?: string | null;
    ProjectUID?: string | null;
    ProjectName?: string;
    CampaignUID?: string;
    Campaign?: string;
    CampaignChannel?: string;
    CampaignChannelUID?: string;
    City?: string;
    MinBudget?: number;
    MaxBudget?: number;
    EmploymentType?: string;
    Income?: number;
    Designation?: string;
    UtmCampaign?: string;
    UtmMedium?: string;
    UtmSource?: string;
    UtmTerm?: string;
    GCLId?: string;
    FbId?: string;
    UtmContent?: string;
}

export interface BuildeskApiResponse {
    Success: boolean;
    Message: string;
    Description: string | null;
    Data: any | null;
    Count: number;
}

export interface LeadFormData {
    firstName: string;
    mobile: string;
    email: string;
    city?: string;
    message?: string;
    propertyId?: string;
    propertyName?: string;
}

// Budget ranges mapping (in INR)
export const budgetRanges: { [key: string]: { min: number; max: number } } = {
    'under30l': { min: 0, max: 3000000 },
    '30l-50l': { min: 3000000, max: 5000000 },
    '50l-75l': { min: 5000000, max: 7500000 },
    '75l-1cr': { min: 7500000, max: 10000000 },
    '1cr-2cr': { min: 10000000, max: 20000000 },
    '2cr-3cr': { min: 20000000, max: 30000000 },
    '3cr-5cr': { min: 30000000, max: 50000000 },
    '5cr-10cr': { min: 50000000, max: 100000000 },
    'over10cr': { min: 100000000, max: 500000000 },
};

/**
 * Convert form data to Buildesk API format
 */
export function convertToBuildesk(
    formData: LeadFormData,
    apiKey: string = process.env.NEXT_PUBLIC_BUILDESK_API_KEY || '',
    projectName: string = 'RealtyDoor'
): BuildeskLeadData {
    const now = new Date();
    const createdDate = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;

    // Build remark with property context
    let remark = formData.message || 'WhatsApp inquiry';
    if (formData.propertyName) {
        remark = `Interested in ${formData.propertyName}. ${remark}`;
    }

    return {
        UserId: null,
        UID: null,
        FirstName: formData.firstName,
        LastName: '',
        DialCode: 91, // India
        Platform: 'website',
        SubSource: 'WhatsApp Widget',
        Mobile: formData.mobile,
        SecondaryNumber: '',
        CreatedDate: createdDate,
        Email: formData.email,
        Remark: remark,
        HasVisitScheduled: false,
        VisitDate: null,
        ProjectUID: formData.propertyId || null,
        ProjectName: projectName,
        CampaignUID: '',
        Campaign: '',
        CampaignChannel: '',
        CampaignChannelUID: '',
        City: formData.city || '',
        MinBudget: undefined,
        MaxBudget: undefined,
        EmploymentType: '',
        Income: undefined,
        Designation: '',
        UtmCampaign: '',
        UtmMedium: '',
        UtmSource: '',
        UtmTerm: '',
        GCLId: '',
        FbId: '',
        UtmContent: '',
    };
}

/**
 * Submit lead to Buildesk CRM API
 * IMPORTANT: ApiKey must be in BOTH the HTTP header AND the request body.
 * Confirmed via live API testing - body-only returns "Please pass ApiKey".
 */
export async function submitLeadToBuildesk(
    leadData: BuildeskLeadData,
    apiKey: string,
    apiEndpoint: string = 'https://buildeskapi.azurewebsites.net/api/buildeskapi/campaignlead/create'
): Promise<BuildeskApiResponse> {
    try {
        // ApiKey must be in BOTH the header AND the body
        const payload = { ApiKey: apiKey, ...leadData };

        const response = await fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ApiKey': apiKey,  // required in header too
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: BuildeskApiResponse = await response.json();
        return data;
    } catch (error) {
        console.error('Buildesk API Error:', error);
        throw error;
    }
}
