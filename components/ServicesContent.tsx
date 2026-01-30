'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Section } from '@/components/ui/Section';
import { Check, Info } from 'lucide-react';

const services = [
    {
        title: "Hexavalent zinc yellow passivation",
        color: "bg-yellow-500",
        description: "Traditional high-corrosion resistant finish providing a distinct iridescent yellow appearance.",
        specs: [
            "Salt Spray Life: 96+ Hours (White Rust)",
            "Appearance: Iridescent Yellow",
            "Thickness: 8-12 microns",
            "Base Material: Steel, Iron"
        ],
        applications: "Automotive brackets, construction hardware, general industrial fasteners."
    },
    {
        title: "Hexavalent zinc blue Passivation",
        color: "bg-blue-500",
        description: "Bright blue/clear finish offering good corrosion resistance and excellent aesthetic appeal.",
        specs: [
            "Salt Spray Life: 24-48 Hours (White Rust)",
            "Appearance: Bright Blue / Clear",
            "Thickness: 5-8 microns",
            "Base Material: Steel, Brass"
        ],
        applications: "Electronics chassis, decorative screws, indoor appliances."
    },
    {
        title: "Trivalent zinc yellow passivation",
        color: "bg-yellow-400",
        description: "Eco-friendly RoHS compliant alternative to hexavalent yellow with comparable performance.",
        specs: [
            "Salt Spray Life: 120+ Hours (White Rust)",
            "Appearance: Iridescent Yellow",
            "Compliance: RoHS, REACH",
            "Thickness: 8-15 microns"
        ],
        applications: "Export quality automotive parts, compliant machinery components."
    },
    {
        title: "Trivalent zinc blue passivation",
        color: "bg-blue-400",
        description: "High-performance RoHS compliant blue passivation for modern environmental standards.",
        specs: [
            "Salt Spray Life: 72+ Hours (White Rust)",
            "Appearance: Bright Blue",
            "Compliance: RoHS, REACH",
            "Thickness: 5-10 microns"
        ],
        applications: "Consumer electronics, furniture hardware, export goods."
    },
    {
        title: "Olive green passivation",
        color: "bg-[var(--color-olive-green)]",
        description: "Maximum protection finish utilized extensively in military and rugged industrial applications.",
        specs: [
            "Salt Spray Life: 150+ Hours (White Rust)",
            "Appearance: Dark Olive Green",
            "Feature: Self-healing characteristics",
            "Thickness: 10-15 microns"
        ],
        applications: "Defense equipment, heavy earthmovers, outdoor structures."
    },
    {
        title: "Zinc black passivation",
        color: "bg-zinc-800",
        description: "Premium black finish offering both aesthetic appeal and significant corrosion resistance.",
        specs: [
            "Salt Spray Life: 96+ Hours (White Rust)",
            "Appearance: Uniform Black",
            "Feature: UV Stable",
            "Thickness: 8-12 microns"
        ],
        applications: "Automotive interiors, architectural fittings, tactical gear."
    }
];

export default function ServicesContent() {
    return (
        <>
            <Section className="bg-[var(--color-zinc-silver)]/30">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold text-[var(--color-deep-blue)] mb-6 uppercase tracking-wider"
                    >
                        Surface Treatment <span className="text-[var(--color-olive-green)]">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[var(--color-steel-grey)]"
                    >
                        We offer a comprehensive range of zinc electroplating and passivation services tailored to meet international standards and specific customer requirements.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="group h-full perspective-1000">
                                <Card className="h-full relative overflow-hidden transition-all duration-300 hover:shadow-2xl border-t-4 border-t-[var(--color-deep-blue)]">
                                    <div className={`absolute top-0 right-0 w-24 h-24 -mr-12 -mt-12 rounded-full opacity-20 transition-transform group-hover:scale-150 ${service.color}`} />

                                    <CardHeader>
                                        <CardTitle className="pr-8">{service.title}</CardTitle>
                                    </CardHeader>

                                    <CardContent className="space-y-6">
                                        <p className="text-gray-600">{service.description}</p>

                                        <div className="bg-[var(--color-background)] p-4 rounded-md">
                                            <h4 className="font-semibold text-sm text-[var(--color-deep-blue)] mb-3 flex items-center gap-2">
                                                <Info className="h-4 w-4" /> Technical Specifications
                                            </h4>
                                            <ul className="space-y-2">
                                                {service.specs.map((spec, i) => (
                                                    <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-olive-green)] mt-1.5 shrink-0" />
                                                        {spec}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-sm text-[var(--color-deep-blue)] mb-2">Ideal Applications:</h4>
                                            <p className="text-sm text-gray-500 italic">{service.applications}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </>
    );
}
