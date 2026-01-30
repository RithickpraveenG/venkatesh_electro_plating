'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Beaker, Droplets, Microscope, Sparkles } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Surface Preparation & Cleaning",
        icon: Sparkles,
        description: "The metal substrate is thoroughly cleaned using ultrasonic cleaning and acid pickling to remove oil, grease, rust, and scale. This ensures perfect adhesion of the plating layer.",
        details: ["Degreasing", "Acid Pickling", "Ultrasonic Cleaning"]
    },
    {
        id: 2,
        title: "Electroplating",
        icon: Droplets,
        description: "The component is submerged in an electrolyte bath where a zinc layer is deposited via electrolytic process. Current density and time are precisely controlled for uniform thickness.",
        details: ["Rack / Barrel Plating", "Current Control", "Bath Maintenance"]
    },
    {
        id: 3,
        title: "Passivation",
        icon: Beaker,
        description: "A conversion coating (chromate) is applied over the zinc layer to enhance corrosion resistance and provide the desired color (Yellow, Blue, Black, Olive).",
        details: ["Chromate Conversion", "Color Finish", "Sealing (Optional)"]
    },
    {
        id: 4,
        title: "Quality Inspection",
        icon: Microscope,
        description: "Finished parts undergo rigorous testing including adhesion tests and thickness measurement using X-Ray Fluorescence (XRF) technology.",
        details: ["XRF Thickness Check", "Adhesion Test", "Visual Inspection"]
    }
];

export default function ProcessContent() {
    return (
        <>
            <Section className="bg-[var(--color-deep-blue)] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297461136-82lw9b72b8c6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        OUR <span className="text-[var(--color-olive-green)]">PROCESS</span> workflow
                    </motion.h1>
                    <p className="text-xl text-gray-300">
                        A meticulous 4-stage process ensuring the highest quality finish and durability.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[var(--color-zinc-silver)] -ml-0.5 md:transform md:-translate-x-1/2" />

                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                className={`relative flex items-center mb-16 last:mb-0 md:justify-between ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                            >
                                {/* Icon Circle */}
                                <div className="absolute left-4 md:left-1/2 w-12 h-12 rounded-full bg-[var(--color-olive-green)] border-4 border-white shadow-lg flex items-center justify-center z-10 -ml-6 md:transform md:-translate-x-1/2">
                                    <step.icon className="h-6 w-6 text-white" />
                                </div>

                                {/* Content */}
                                <div className={`ml-16 md:ml-0 md:w-[45%] p-6 bg-white rounded-lg shadow-md border border-gray-100 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <span className="text-[var(--color-olive-green)] font-bold text-5xl opacity-10 absolute top-4 right-6 pointer-events-none">{step.id}</span>
                                    <h3 className="text-2xl font-bold text-[var(--color-deep-blue)] mb-3">{step.title}</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">
                                        {step.description}
                                    </p>
                                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                        {step.details.map((detail, i) => (
                                            <span key={i} className="px-3 py-1 bg-[var(--color-zinc-silver)] text-[var(--color-deep-blue)] text-xs font-semibold rounded-full uppercase tracking-wide">
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
