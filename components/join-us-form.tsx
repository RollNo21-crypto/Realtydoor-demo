'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { z } from 'zod';

const joinUsSchema = z.object({
    fullName: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    company: z.string().optional(),
    role: z.enum(['agent', 'broker', 'developer', 'investor', 'other']),
    experience: z.string().min(1, 'Please select your experience level'),
    location: z.string().min(2, 'Location is required'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

type JoinUsInput = z.infer<typeof joinUsSchema>;

export function JoinUsForm() {
    const [isLoading, setIsLoading] = React.useState(false);

    const form = useForm<JoinUsInput>({
        resolver: zodResolver(joinUsSchema),
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            company: '',
            role: 'agent',
            experience: '',
            location: '',
            message: '',
        },
    });

    const onSubmit = async (data: JoinUsInput) => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/join-us', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to submit application');
            }

            alert('Application submitted successfully! We will contact you shortly.');
            form.reset();
        } catch (error) {
            alert('Failed to submit application. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                        id="fullName"
                        {...form.register('fullName')}
                        placeholder="John Doe"
                        disabled={isLoading}
                    />
                    {form.formState.errors.fullName && (
                        <p className="text-sm text-destructive">{form.formState.errors.fullName.message}</p>
                    )}
                </div>

                {/* Email */}
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

                {/* Phone */}
                <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
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

                {/* Company */}
                <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                        id="company"
                        {...form.register('company')}
                        placeholder="Your Company Name"
                        disabled={isLoading}
                    />
                </div>

                {/* Role */}
                <div className="space-y-2">
                    <Label htmlFor="role">I am a *</Label>
                    <Select
                        onValueChange={(value) => form.setValue('role', value as any)}
                        defaultValue={form.getValues('role')}
                        disabled={isLoading}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="agent">Real Estate Agent</SelectItem>
                            <SelectItem value="broker">Broker</SelectItem>
                            <SelectItem value="developer">Developer/Builder</SelectItem>
                            <SelectItem value="investor">Investor</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                    {form.formState.errors.role && (
                        <p className="text-sm text-destructive">{form.formState.errors.role.message}</p>
                    )}
                </div>

                {/* Experience */}
                <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Select
                        onValueChange={(value) => form.setValue('experience', value)}
                        disabled={isLoading}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="0-2">0-2 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                    </Select>
                    {form.formState.errors.experience && (
                        <p className="text-sm text-destructive">{form.formState.errors.experience.message}</p>
                    )}
                </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
                <Label htmlFor="location">Location/City *</Label>
                <Input
                    id="location"
                    {...form.register('location')}
                    placeholder="New York, NY"
                    disabled={isLoading}
                />
                {form.formState.errors.location && (
                    <p className="text-sm text-destructive">{form.formState.errors.location.message}</p>
                )}
            </div>

            {/* Message */}
            <div className="space-y-2">
                <Label htmlFor="message">Tell us about yourself *</Label>
                <Textarea
                    id="message"
                    {...form.register('message')}
                    placeholder="Tell us about your experience, why you want to join, and what you can bring to our platform..."
                    rows={5}
                    disabled={isLoading}
                />
                {form.formState.errors.message && (
                    <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                )}
            </div>

            <Button type="submit" className="w-full" disabled={isLoading} size="lg">
                {isLoading ? (
                    'Submitting...'
                ) : (
                    <>
                        <Send className="mr-2 h-4 w-4" />
                        Submit Application
                    </>
                )}
            </Button>
        </form>
    );
}
