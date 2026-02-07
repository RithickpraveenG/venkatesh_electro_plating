import type { Metadata } from 'next';
import ProcessContent from '@/components/ProcessContent';

export const metadata: Metadata = {
    title: "Process Workflow | Industrial Plating",
    description: "Our quality assurance process: Preparation, Electroplating, Passivation, and rigorous Quality Inspection.",
    keywords: ["Industrial Plating", "Process Workflow", "Electroplating", "Passivation", "Quality Inspection"],

};

export default function ProcessPage() {
    return <ProcessContent />;
}
