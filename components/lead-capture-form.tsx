'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { X, Send, Loader2, CheckCircle2, Bot } from 'lucide-react';
import type { LeadFormData } from '@/lib/buildesk-api';

interface LeadCaptureFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: (data: LeadFormData) => void;
    propertyId?: string;
    propertyName?: string;
    prefilledMessage?: string;
}

type ConversationStep = 'name' | 'mobile' | 'email' | 'city' | 'message' | 'submitting' | 'success';

interface Message {
    id: string;
    type: 'bot' | 'user';
    text: string;
    timestamp: Date;
}

export function LeadCaptureForm({
    isOpen,
    onClose,
    onSuccess,
    propertyId,
    propertyName,
    prefilledMessage,
}: LeadCaptureFormProps) {
    const [formData, setFormData] = useState<LeadFormData>({
        firstName: '',
        mobile: '',
        email: '',
        city: '',
        message: prefilledMessage || '',
        propertyId,
        propertyName,
    });

    const [currentStep, setCurrentStep] = useState<ConversationStep>('name');
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [error, setError] = useState('');
    const [hasInitialized, setHasInitialized] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Reset state when modal closes
    useEffect(() => {
        if (!isOpen) {
            setMessages([]);
            setCurrentStep('name');
            setInputValue('');
            setError('');
            setIsTyping(false);
            setHasInitialized(false);
            setFormData({
                firstName: '',
                mobile: '',
                email: '',
                city: '',
                message: prefilledMessage || '',
                propertyId,
                propertyName,
            });
        }
    }, [isOpen, prefilledMessage, propertyId, propertyName]);

    const addBotMessage = useCallback((text: string) => {
        setIsTyping(true);
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: Date.now().toString(),
                type: 'bot',
                text,
                timestamp: new Date(),
            }]);
            setIsTyping(false);
        }, 500);
    }, []);

    const addUserMessage = useCallback((text: string) => {
        setMessages(prev => [...prev, {
            id: Date.now().toString(),
            type: 'user',
            text,
            timestamp: new Date(),
        }]);
    }, []);

    useEffect(() => {
        if (isOpen && !hasInitialized) {
            setHasInitialized(true);
            // Initial greeting
            setTimeout(() => {
                addBotMessage(
                    propertyName
                        ? `Hi! 👋 I see you're interested in ${propertyName}. I'm here to help you connect with our team via WhatsApp.`
                        : "Hi! 👋 I'm here to help you connect with our team via WhatsApp."
                );
            }, 300);

            setTimeout(() => {
                addBotMessage("Let's start with your name. What should I call you?");
                setCurrentStep('name');
            }, 1200);
        }
    }, [isOpen, hasInitialized, propertyName, addBotMessage]);

    const validateInput = (step: ConversationStep, value: string): boolean => {
        switch (step) {
            case 'name':
                return value.trim().length >= 2;
            case 'mobile':
                return /^[0-9]{10}$/.test(value.trim());
            case 'email':
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
            default:
                return true;
        }
    };

    const getErrorMessage = (step: ConversationStep): string => {
        switch (step) {
            case 'name':
                return "Please enter a valid name (at least 2 characters).";
            case 'mobile':
                return "Please enter a valid 10-digit mobile number.";
            case 'email':
                return "Please enter a valid email address.";
            default:
                return "Invalid input.";
        }
    };

    const submitToAPI = useCallback(async (data: LeadFormData) => {
        try {
            // Split name into first and last name
            const nameParts = data.firstName.trim().split(' ');
            const firstName = nameParts[0] || '';
            const lastName = nameParts.slice(1).join(' ') || '';

            // Prepare Buildesk API payload for General Query (WhatsApp)
            const buildeskPayload = {
                ApiKey: "ee6411f7-4da2-4172-b657-372a1151c93f",
                UserId: null,
                UID: null,
                FirstName: firstName,
                LastName: lastName,
                DialCode: 91,
                Platform: "website",
                SubSource: "General Query - WhatsApp", // Label WhatsApp as General Query
                Mobile: data.mobile,
                SecondaryNumber: "",
                CreatedDate: new Date().toLocaleDateString('en-GB'),
                Email: data.email,
                Remark: `General Query - ${data.message || 'WhatsApp inquiry'}`,
                HasVisitScheduled: false,
                VisitDate: null,
                ProjectUID: null,
                ProjectName: data.propertyName || "RealtyDoor",
                CampaignUID: "",
                Campaign: "General Query",
                CampaignChannel: "WhatsApp Chat",
                CampaignChannelUID: "",
                City: data.city || "",
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

            const response = await fetch('https://buildeskapi.azurewebsites.net/api/buildeskapi/campaignlead/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(buildeskPayload),
            });

            const result = await response.json();

            if (result.Success) {
                setTimeout(() => {
                    setCurrentStep('success');
                    addBotMessage("All set! Redirecting you to WhatsApp now... ✅");
                    setTimeout(() => {
                        onSuccess(data);
                    }, 2000);
                }, 1000);
            } else {
                setError(result.Message || 'Failed to submit. Please try again.');
                setCurrentStep('message');
            }
        } catch (err) {
            setError('Network error. Please try again.');
            setCurrentStep('message');
        }
    }, [addBotMessage, onSuccess]);

    const handleSubmitInput = useCallback(async (overrideValue?: string) => {
        const value = (overrideValue !== undefined ? overrideValue : inputValue).trim();

        if (!value && currentStep !== 'city' && currentStep !== 'message') return;

        // Validate required fields
        if ((currentStep === 'name' || currentStep === 'mobile' || currentStep === 'email') && !validateInput(currentStep, value)) {
            setError(getErrorMessage(currentStep));
            return;
        }

        setError('');
        addUserMessage(value || (currentStep === 'city' ? 'Skip' : 'No message'));
        setInputValue('');

        // Update form data
        const updatedData = { ...formData };
        switch (currentStep) {
            case 'name':
                updatedData.firstName = value;
                break;
            case 'mobile':
                updatedData.mobile = value;
                break;
            case 'email':
                updatedData.email = value;
                break;
            case 'city':
                updatedData.city = value;
                break;
            case 'message':
                updatedData.message = value || prefilledMessage || '';
                break;
        }
        setFormData(updatedData);

        // Move to next step
        setTimeout(() => {
            switch (currentStep) {
                case 'name':
                    addBotMessage(`Nice to meet you, ${value}! 😊`);
                    setTimeout(() => {
                        addBotMessage("What's your mobile number? (10 digits without +91)");
                        setCurrentStep('mobile');
                    }, 800);
                    break;
                case 'mobile':
                    addBotMessage("Great! Now, what's your email address?");
                    setCurrentStep('email');
                    break;
                case 'email':
                    addBotMessage("Which city are you looking in? (Optional - you can skip)");
                    setCurrentStep('city');
                    break;
                case 'city':
                    addBotMessage("Any specific requirements or questions? (Optional)");
                    setCurrentStep('message');
                    break;
                case 'message':
                    addBotMessage("Perfect! Let me connect you to WhatsApp... 🚀");
                    setCurrentStep('submitting');
                    submitToAPI(updatedData);
                    break;
            }
        }, 600);
    }, [inputValue, currentStep, formData, prefilledMessage, addUserMessage, addBotMessage, submitToAPI]);

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmitInput();
        }
    };

    if (!isOpen) return null;

    const cities = ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad'];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="relative w-full max-w-lg h-[600px] bg-white rounded-3xl shadow-2xl animate-in slide-in-from-bottom-5 duration-300 flex flex-col">
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-4 rounded-t-3xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <Bot className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-white">RealtyBot</h2>
                            <p className="text-white/80 text-xs">Online</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
                        disabled={currentStep === 'submitting'}
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}
                        >
                            <div
                                className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${message.type === 'bot'
                                    ? 'bg-white text-gray-800 shadow-sm'
                                    : 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                                    }`}
                            >
                                <p className="text-sm leading-relaxed">{message.text}</p>
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-300">
                            <div className="bg-white rounded-2xl px-4 py-3 shadow-sm">
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                {currentStep !== 'submitting' && currentStep !== 'success' && (
                    <div className="p-4 bg-white border-t border-gray-200 rounded-b-3xl">
                        {error && (
                            <div className="mb-3 text-xs text-red-600 bg-red-50 px-3 py-2 rounded-lg">
                                {error}
                            </div>
                        )}

                        {currentStep === 'city' && (
                            <div className="mb-3 flex flex-wrap gap-2">
                                {cities.map((city) => (
                                    <button
                                        key={city}
                                        type="button"
                                        onClick={() => handleSubmitInput(city)}
                                        className="px-3 py-1.5 text-xs bg-orange-50 hover:bg-orange-100 text-orange-600 rounded-full transition-colors"
                                    >
                                        {city}
                                    </button>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => handleSubmitInput('')}
                                    className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-colors"
                                >
                                    Skip
                                </button>
                            </div>
                        )}

                        <div className="flex gap-2">
                            <input
                                ref={inputRef}
                                type={currentStep === 'email' ? 'email' : currentStep === 'mobile' ? 'tel' : 'text'}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder={
                                    currentStep === 'name' ? 'Type your name...' :
                                        currentStep === 'mobile' ? 'Enter mobile number...' :
                                            currentStep === 'email' ? 'Enter email address...' :
                                                currentStep === 'city' ? 'Type city or select above...' :
                                                    'Type your message...'
                                }
                                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all text-sm"
                                disabled={isTyping}
                                autoFocus
                            />
                            <button
                                onClick={() => handleSubmitInput()}
                                disabled={isTyping || (!inputValue.trim() && currentStep !== 'city' && currentStep !== 'message')}
                                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white p-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
                            >
                                <Send className="h-5 w-5" />
                            </button>
                        </div>

                        {(currentStep === 'city' || currentStep === 'message') && (
                            <p className="text-xs text-gray-500 mt-2 text-center">
                                This field is optional - you can skip it
                            </p>
                        )}
                    </div>
                )}

                {currentStep === 'success' && (
                    <div className="p-6 bg-white border-t border-gray-200 rounded-b-3xl flex items-center justify-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <span className="text-sm text-gray-600">Connecting to WhatsApp...</span>
                        <Loader2 className="h-4 w-4 animate-spin text-orange-500" />
                    </div>
                )}
            </div>
        </div>
    );
}
