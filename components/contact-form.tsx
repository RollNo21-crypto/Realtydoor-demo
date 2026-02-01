'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { inquirySchema, type InquiryInput } from '@/lib/validations/property';

interface ContactFormProps {
    propertyId: string;
    propertyTitle: string;
}

export function ContactForm({ propertyId, propertyTitle }: ContactFormProps) {
    const [isLoading, setIsLoading] = React.useState(false);

    const form = useForm<InquiryInput>({
        resolver: zodResolver(inquirySchema),
        defaultValues: {
            propertyId,
            name: '',
            email: '',
            phone: '',
            message: `I'm interested in ${propertyTitle}. Please contact me with more information.`,
        },
    });

    const onSubmit = async (data: InquiryInput) => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/inquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to submit inquiry');
            }

            toast.success('Inquiry sent successfully!', {
                description: 'An agent will contact you shortly.',
            });

            form.reset();
        } catch (error) {
            toast.error('Failed to send inquiry', {
                description: 'Please try again later.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                    id="name"
                    {...form.register('name')}
                    placeholder="John Doe"
                    disabled={isLoading}
                />
                {form.formState.errors.name && (
                    <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                    id="email"
                    type="email"
                    {...form.register('email')}
                    placeholder="john@example.com"
                    disabled={isLoading}
                />
                {form.formState.errors.email && (
                    <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                    id="phone"
                    type="tel"
                    {...form.register('phone')}
                    placeholder="+1 (555) 000-0000"
                    disabled={isLoading}
                />
                {form.formState.errors.phone && (
                    <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                    id="message"
                    {...form.register('message')}
                    placeholder="Tell us about your requirements..."
                    rows={5}
                    disabled={isLoading}
                />
                {form.formState.errors.message && (
                    <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                )}
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                    'Sending...'
                ) : (
                    <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Inquiry
                    </>
                )}
            </Button>
        </form>
    );
}
