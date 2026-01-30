import type { Metadata } from 'next';
import ContactContent from '@/components/ContactContent';

export const metadata: Metadata = {
    title: "Contact Us | Industrial Plating",
    description: "Get a custom quotation for your surface finishing needs. Contact our technical team today.",
};

export default function ContactPage() {
    return <ContactContent />;
}
