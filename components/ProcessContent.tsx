'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import Image from 'next/image';
import {
    Package,
    ClipboardCheck,
    Warehouse,
    Brush,
    Droplets,
    FlaskConical,
    Layers,
    Beaker,
    ShieldCheck,
    Thermometer,
    Wind,
    Microscope,
    Truck,
    CheckCircle
} from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Goods Inwards",
        icon: Package,
        description: "Receipt of raw materials and components, ensuring all documentation is in order for tracking.",
        details: ["Log Entry", "Tagging"]
    },
    {
        id: 2,
        title: "Incoming Inspection",
        icon: ClipboardCheck,
        description: "Initial quality check to verify the condition of incoming parts before processing begins.",
        details: ["Visual Check", "Quantity Verification"]
    },
    {
        id: 3,
        title: "Storage",
        icon: Warehouse,
        description: "Secure storage of components in designated areas to prevent damage or contamination prior to plating.",
        details: ["Inventory Management", "Safe Storage"]
    },
    {
        id: 4,
        title: "Saw Dust Cleaning",
        icon: Brush,
        description: "Removal of oil, dust, and loose particles using sawdust cleaning methods for initial surface prep.",
        details: ["Dust Removal", "Surface Cleaning"]
    },
    {
        id: 5,
        title: "Soak Cleaning",
        icon: Droplets,
        description: "Immersion in cleaning agents to loosen and remove stubborn oils and grime from the metal surface.",
        details: ["Degreasing", "Oil Removal"]
    },
    {
        id: 6,
        title: "Water Rinsing (2 Stage)",
        icon: Droplets,
        description: "Thorough two-stage water rinsing to ensure no cleaning agents remain on the parts.",
        details: ["Stage 1 Rinse", "Stage 2 Rinse"]
    },
    {
        id: 7,
        title: "HCL Acid Pickling",
        icon: FlaskConical,
        description: "First stage of acid pickling to remove rust and scale, preparing the surface for activation.",
        details: ["Rust Removal", "Scale Removal"]
    },
    {
        id: 8,
        title: "HCL Acid Pickling",
        icon: FlaskConical,
        description: "Second stage of acid pickling to ensure a completely clean and reactive metal surface.",
        details: ["Deep Cleaning", "Surface Activation"]
    },
    {
        id: 9,
        title: "Acid Zinc Plating (Vat / Barrel)",
        icon: Layers,
        description: "Zinc layer deposited via electrolytic process using either Rack/Vat (for larger/delicate parts) or Barrel (for smaller/bulk parts).",
        details: ["Vat Plating", "Barrel Plating", "Uniform Coating"]
    },
    {
        id: 10,
        title: "Water Rinsing (2 Stages)",
        icon: Droplets,
        description: "Post-plating rinse to remove excess plating solution and stop the plating reaction.",
        details: ["Chemical Removal", "Clean Surface"]
    },
    {
        id: 11,
        title: "Nitric Dip",
        icon: Beaker,
        description: "Brightening dip in mild nitric acid to activate the zinc surface for passivation.",
        details: ["Brightening", "Activation"]
    },
    {
        id: 12,
        title: "Water Rinsing",
        icon: Droplets,
        description: "Rinsing to remove nitric acid residues before the passivation step.",
        details: ["Neutralization", "Rinse"]
    },
    {
        id: 13,
        title: "Water Rinsing",
        icon: Droplets,
        description: "Additional rinsing to ensure absolute chemical purity on the surface.",
        details: ["Final Prep", "Purity Check"]
    },
    {
        id: 14,
        title: "All Passivation",
        icon: ShieldCheck,
        description: "Comprehensive passivation process covering all required finishes and specifications.",
        details: ["Trivalent Blue", "Trivalent Yellow", "Hexavalent Blue", "Hexavalent Yellow"],
        images: [
            { src: "/images/passivation/trivalent_blue.png", alt: "Trivalent Blue" },
            { src: "/images/passivation/trivalent_yellow.png", alt: "Trivalent Yellow" },
            { src: "/images/passivation/hexavalent_blue.png", alt: "Hexavalent Blue" },
            { src: "/images/passivation/hexavalent_yellow.png", alt: "Hexavalent Yellow" }
        ]
    },
    {
        id: 15,
        title: "Hot Water Rinsing",
        icon: Thermometer,
        description: "Rinsing with hot water to aid in drying and sealing the passivation layer.",
        details: ["Sealing", "Quick Dry Preparation"]
    },
    {
        id: 16,
        title: "Drying",
        icon: Wind,
        description: "Thorough drying of parts using centrifugal dryers or hot air to prevent water spots and staining.",
        details: ["Centrifugal Dry", "Hot Air"]
    },
    {
        id: 17,
        title: "Final Inspection",
        icon: Microscope,
        description: "Comprehensive quality check including visual inspection and thickness testing.",
        details: ["Quality Control", "Thickness Check"]
    },
    {
        id: 18,
        title: "Storage of Finished Goods",
        icon: Warehouse,
        description: "Proper storage of finished and inspected goods in a controlled environment.",
        details: ["Packed Sealing", "Inventory Update"]
    },
    {
        id: 19,
        title: "Pre despatch Inspection",
        icon: CheckCircle,
        description: "Final verification before shipment to ensure all customer requirements are met.",
        details: ["Order verification", "Packaging Check"]
    },
    {
        id: 20,
        title: "Despatch",
        icon: Truck,
        description: "Logistics and dispatch of the finished high-quality plated components to the customer.",
        details: ["Logistics", "Delivery"]
    }
];

export default function ProcessContent() {
    return (
        <>
            <Section className="bg-[var(--color-deep-blue)] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[var(--color-deep-blue)]/95 to-[var(--color-deep-blue)] z-0" />
                <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        OUR <span className="text-[var(--color-olive-green)]">PROCESS</span> FLOW
                    </motion.h1>
                    <p className="text-xl text-gray-300">
                        A comprehensive 20-step process ensuring the highest quality zinc plating standards.
                    </p>
                </div>
            </Section>

            <Section className="bg-[var(--color-deep-blue)] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[var(--color-deep-blue)]/95 to-[var(--color-deep-blue)] z-0" />
                <div className="absolute inset-0 z-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="relative">
                        {/* Timeline Line - adjusted for length */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[var(--color-zinc-silver)]/20 -ml-0.5 md:transform md:-translate-x-1/2" />

                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                className={`relative flex items-center mb-12 last:mb-0 md:justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Icon Circle */}
                                <div className="absolute left-4 md:left-1/2 w-12 h-12 rounded-full bg-[var(--color-olive-green)] border-4 border-[var(--color-deep-blue)] shadow-[0_0_15px_rgba(163,180,11,0.5)] flex items-center justify-center z-10 -ml-6 md:transform md:-translate-x-1/2">
                                    <step.icon className="h-6 w-6 text-white" />
                                </div>

                                {/* Content */}
                                <div className={`relative ml-16 md:ml-0 md:w-[45%] p-5 bg-white rounded-lg shadow-xl border-t-2 border-[var(--color-olive-green)] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <span
                                        className={`text-[var(--color-deep-blue)] font-bold text-4xl opacity-5 absolute top-4 pointer-events-none right-6 ${index % 2 === 0 ? 'md:right-auto md:left-6' : ''}`}
                                    >
                                        {step.id}
                                    </span>
                                    <h3 className={`text-xl font-bold text-[var(--color-deep-blue)] mb-2 pr-16 ${index % 2 === 0 ? 'md:pr-0 md:pl-16' : ''}`}>
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Passivation Images Gallery */}
                                    {step.images && (
                                        <div className={`grid grid-cols-2 gap-2 mb-4 ${index % 2 === 0 ? 'justify-items-end' : 'justify-items-start'}`}>
                                            {step.images.map((img, i) => (
                                                <div key={i} className="flex flex-col items-center">
                                                    <div className="relative w-24 h-24 bg-gray-50 rounded-lg overflow-hidden border border-gray-200 p-2">
                                                        <Image
                                                            src={img.src}
                                                            alt={img.alt}
                                                            fill
                                                            className="object-contain p-1"
                                                            sizes="(max-width: 768px) 100vw, 33vw"
                                                        />
                                                    </div>
                                                    <span className="text-[10px] text-gray-500 mt-1 text-center font-medium">{img.alt}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                        {step.details.map((detail, i) => (
                                            <span key={i} className="px-2 py-1 bg-gray-100 text-[var(--color-deep-blue)] text-[10px] font-semibold rounded-full uppercase tracking-wide">
                                                {detail}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Empty Space for Grid */}
                                <div className="hidden md:block md:w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    );
}
