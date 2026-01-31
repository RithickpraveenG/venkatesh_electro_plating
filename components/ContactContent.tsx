'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Input, TextArea } from '@/components/ui/Input';
import { Card, CardContent } from '@/components/ui/Card';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const schema = z.object({
    company: z.string().min(2, 'Company name is required'),
    name: z.string().min(2, 'Contact person name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Valid phone number is required'),
    service: z.string().min(1, 'Please select a service'),
    message: z.string().min(10, 'Please provide more details about your requirement'),
});

type FormData = z.infer<typeof schema>;

const services = [
    "Select a Service...",
    "Hexavalent zinc yellow passivation",
    "Hexavalent zinc blue Passivation",
    "Trivalent zinc yellow passivation",
    "Trivalent zinc blue passivation",
    "Olive green passivation",
    "Zinc black passivation",
    "Other / General Enquiry"
];

export default function ContactContent() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setSubmitStatus('idle');
        try {
            const response = await fetch('/api/enquire', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                const debugInfo = result.debug ? `\n(Sent as: ${result.debug.user})` : '';
                throw new Error((result.details || result.error || 'Failed to submit') + debugInfo);
            }

            setSubmitStatus('success');
            reset();
        } catch (error: any) {
            console.error(error);
            setSubmitStatus('error');
            alert(`Error: ${error.message}`); // Temporary alert to show the specific error
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Section className="bg-[var(--color-background)]">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold text-[var(--color-deep-blue)] mb-6 uppercase tracking-wider"
                    >
                        Get a <span className="text-[var(--color-olive-green)]">Quotation</span>
                    </motion.h1>
                    <p className="text-xl text-gray-600">
                        Reach out to our technical team for custom plating solutions and pricing.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="bg-[var(--color-deep-blue)] text-white border-none">
                            <CardContent className="p-8 space-y-8 text-gray-300">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                                    <p className="leading-relaxed mb-8">
                                        Visit our facility to see our automated lines in action or send us your samples for a free trial plating.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="h-6 w-6 text-[var(--color-olive-green)] shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-semibold text-white">Factory Address</h4>
                                            <p>SF. NO 99/2A, SREE MARUTHI INDUSTRIAL ESTATE,<br />SCHOOL STREET, Chinnavedampatti,<br />Coimbatore, Tamil Nadu 641049</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Phone className="h-6 w-6 text-[var(--color-olive-green)] shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-white">Phone</h4>
                                            <p>+91 98422 96662</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Mail className="h-6 w-6 text-[var(--color-olive-green)] shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-white">Email</h4>
                                            <p>venkateshelectroplating@gmail.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-gray-700">
                                    <h4 className="font-semibold text-white mb-2">Business Hours</h4>
                                    <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Enquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="bg-white p-8 rounded-lg shadow-lg border border-[var(--color-zinc-silver)]">
                            <h3 className="text-2xl font-bold text-[var(--color-deep-blue)] mb-6">Send an Enquiry</h3>

                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-center gap-3 text-green-800">
                                    <CheckCircle className="h-5 w-5" />
                                    <p>Thank you! Your enquiry has been sent successfully. We will contact you shortly.</p>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-3 text-red-800">
                                    <AlertCircle className="h-5 w-5" />
                                    <p>Something went wrong. Please try again or contact us directly.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <Input
                                        label="Company Name"
                                        placeholder="e.g. Acme Industries"
                                        {...register('company')}
                                        error={errors.company?.message}
                                    />
                                    <Input
                                        label="Contact Person"
                                        placeholder="Your Name"
                                        {...register('name')}
                                        {...register('name')}
                                        error={errors.name?.message}
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <Input
                                        label="Email Address"
                                        type="email"
                                        placeholder="name@company.com"
                                        {...register('email')}
                                        error={errors.email?.message}
                                    />
                                    <Input
                                        label="Phone Number"
                                        placeholder="+91..."
                                        {...register('phone')}
                                        error={errors.phone?.message}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-[var(--color-steel-grey)] mb-1">
                                        Service Required
                                    </label>
                                    <select
                                        {...register('service')}
                                        className="w-full px-4 py-2 border border-[var(--color-zinc-silver)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-olive-green)] bg-white text-[var(--color-deep-blue)]"
                                    >
                                        {services.map((s, i) => (
                                            <option key={i} value={i === 0 ? "" : s} disabled={i === 0}>{s}</option>
                                        ))}
                                    </select>
                                    {errors.service && <p className="mt-1 text-xs text-red-500">{errors.service.message}</p>}
                                </div>

                                <TextArea
                                    label="Message / Requirements"
                                    placeholder="Tell us about your component, material, quantity, and specific plating requirements..."
                                    rows={5}
                                    {...register('message')}
                                    error={errors.message?.message}
                                />

                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                                        </span>
                                    ) : (
                                        "Submit Enquiry"
                                    )}
                                </Button>

                                <p className="text-xs text-center text-gray-500 mt-4">
                                    “All surface treatments are carried out as per customer specifications and applicable industry standards.”
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </>
    );
}
