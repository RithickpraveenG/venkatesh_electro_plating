import type { Metadata } from 'next';
import ServicesContent from '@/components/ServicesContent';

export const metadata: Metadata = {
    title: "Surface Treatment Services | Industrial Plating",
    description: "Comprehensive range of zinc electroplating and passivation services including Hexavalent, Trivalent, Olive Green, and Black Passivation.",
};

export default function ServicesPage() {
    return <ServicesContent />;
}
