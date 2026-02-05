'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Send, X } from 'lucide-react';
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

interface JoinUsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function JoinUsModal({ isOpen, onClose }: JoinUsModalProps) {
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
            onClose();
        } catch (error) {
            alert('Failed to submit application. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto animate-in zoom-in-95 duration-300">
                    {/* Header */}
                    <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 flex items-center justify-between z-10">
                        <div>
                            <h2 className="text-2xl font-bold">Join Our Network</h2>
                            <p className="text-white/90 text-sm mt-1">Partner with us to grow your business</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors"
                            aria-label="Close"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Form Content - Scrollable */}
                    <div className="overflow-y-auto max-h-[calc(90vh-80px)] px-6 py-6">
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
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
                                        placeholder="Your Company"
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
                                            <SelectValue placeholder="Select experience" />
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
                                    placeholder="Tell us about your experience and why you want to join..."
                                    rows={4}
                                    disabled={isLoading}
                                />
                                {form.formState.errors.message && (
                                    <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="flex gap-3 pt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={onClose}
                                    disabled={isLoading}
                                    className="flex-1"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                                >
                                    {isLoading ? (
                                        'Submitting...'
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" />
                                            Submit Application
                                        </>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
