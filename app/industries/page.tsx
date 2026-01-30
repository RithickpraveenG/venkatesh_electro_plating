import type { Metadata } from 'next';
import IndustriesContent from '@/components/IndustriesContent';

export const metadata: Metadata = {
    title: "Industries Served | Industrial Plating",
    description: "Specialized plating solutions for Automotive, Electronics, Heavy Machinery, and Industrial Fasteners.",
};

export default function IndustriesPage() {
    return <IndustriesContent />;
}
