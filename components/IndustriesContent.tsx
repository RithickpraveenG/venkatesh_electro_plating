'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Car, Cpu, Wrench, Factory } from 'lucide-react';

const industries = [
    {
        name: "Automotive",
        icon: Car,
        description: "High-volume plating for fasteners, brackets, and engine components requiring superior corrosion resistance and consistent torque-tension relationships.",
        applications: ["Brake Systems", "Chassis Components", "Engine Fasteners", "Safety Restraints"]
    },
    {
        name: "Electrical & Electronics",
        icon: Cpu,
        description: "Precision plating ensuring conductivity and corrosion protection for sensitive electronic enclosures and connectors without zinc whiskers.",
        applications: ["Server Racks", "Switchgear", "Grounding Components", "Connectors"]
    },
    {
        name: "Heavy Machinery",
        icon: Factory,
        description: "Robust surface treatments for earth-moving and agricultural equipment designed to withstand harsh outdoor environments and extreme wear.",
        applications: ["Excavator Pins", "Hydraulic Fittings", "Structural Bolts", "Track Segments"]
    },
    {
        name: "Industrial Fasteners",
        icon: Wrench,
        description: "Bulk barrel plating services for screws, bolts, and nuts with precise thickness control to ensure thread fit and hydrogen embrittlement relief.",
        applications: ["Structural Bolts", "Machine Screws", "Washers", "Anchor Bolts"]
    }
];

export default function IndustriesContent() {
    return (
        <>
            <Section className="bg-[var(--color-background)]">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl font-bold text-[var(--color-deep-blue)] mb-6 uppercase tracking-wider"
                    >
                        Industries <span className="text-[var(--color-olive-green)]">Served</span>
                    </motion.h1>
                    <p className="text-xl text-gray-600">
                        Expert solutions tailored for the specific demands of diverse industrial sectors.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:border-[var(--color-olive-green)] transition-all duration-300">
                                <CardContent className="p-8 flex flex-col md:flex-row gap-6">
                                    <div className="shrink-0">
                                        <div className="w-16 h-16 rounded-full bg-[var(--color-zinc-silver)]/50 flex items-center justify-center">
                                            <industry.icon className="h-8 w-8 text-[var(--color-deep-blue)]" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-[var(--color-deep-blue)] mb-3">{industry.name}</h3>
                                        <p className="text-[var(--color-steel-grey)] mb-6 leading-relaxed">
                                            {industry.description}
                                        </p>
                                        <div>
                                            <h4 className="font-semibold text-sm text-[var(--color-olive-green)] uppercase tracking-wide mb-2">Key Applications</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {industry.applications.map((app, i) => (
                                                    <span key={i} className="px-3 py-1 bg-white border border-gray-200 text-gray-600 text-sm rounded-md shadow-sm">
                                                        {app}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </>
    );
}
