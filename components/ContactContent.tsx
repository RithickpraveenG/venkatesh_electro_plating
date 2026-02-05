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
            <Section className="bg-[var(--color-deep-blue)] relative min-h-screen">
                {/* Background Gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[var(--color-deep-blue)]/95 to-[var(--color-deep-blue)] z-0" />
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

                <div className="relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wider"
                        >
                            Get a <span className="text-[var(--color-olive-green)]">Quotation</span>
                        </motion.h1>
                        <p className="text-xl text-gray-300">
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
                            <Card className="bg-black/40 backdrop-blur-md text-white border border-white/10 shadow-xl">
                                <CardContent className="p-6 md:p-8 space-y-8 text-gray-300">
                                    <div className="text-center md:text-left">
                                        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                                        <p className="leading-relaxed mb-8">
                                            Reach out to us for any queries or to discuss your specific plating requirements.
                                        </p>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-center md:text-left">
                                            <MapPin className="h-6 w-6 text-[var(--color-olive-green)] shrink-0 md:mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-white mb-1">Factory Address</h4>
                                                <p>SF. NO 99/2A, SREE MARUTHI INDUSTRIAL ESTATE,<br />SCHOOL STREET, Chinnavedampatti,<br />Coimbatore, Tamil Nadu 641049</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-col md:flex-row items-center md:items-center gap-4 text-center md:text-left">
                                            <div className="flex gap-2 shrink-0">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    className="h-6 w-6 text-[#25D366]" // WhatsApp brand green
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-white mb-1">Phone / WhatsApp</h4>
                                                <a
                                                    href="https://wa.me/919842296662"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:text-[#25D366] transition-colors duration-200 cursor-pointer flex items-center gap-2 group"
                                                >
                                                    <span>+91 98422 96662</span>
                                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-[#25D366] text-[var(--color-deep-blue)] px-1.5 py-0.5 rounded font-bold">Chat</span>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex flex-col md:flex-row items-center md:items-center gap-4 text-center md:text-left">
                                            <Mail className="h-6 w-6 text-[var(--color-olive-green)] shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-white mb-1">Email</h4>
                                                <a href="mailto:venkateshelectroplating@gmail.com" className="hover:text-[var(--color-olive-green)] transition-colors duration-200">venkateshelectroplating@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-gray-600/50 text-center md:text-left">
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
                            <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl border border-white/20">
                                <h3 className="text-2xl font-bold text-[var(--color-deep-blue)] mb-6 text-center md:text-left">Send an Enquiry</h3>

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
                </div>
            </Section>
        </>
    );
}
