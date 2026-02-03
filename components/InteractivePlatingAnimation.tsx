'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { X, ArrowRight, CheckCircle, Info } from 'lucide-react';
import { Button } from './ui/Button';
import Link from 'next/link';

// Types
type PlatingType = 'Hexavalent' | 'Trivalent';

interface PassivationData {
    id: string;
    name: string;
    shortName: string; // Displayed in the bottom panel
    color: string;
    platingType: PlatingType;
    resistance: string;
    standards: string[];
    applications: string;
    description: string;
}

const PLATING_DATA: PassivationData[] = [
    {
        id: 'hex-yellow',
        name: 'Hexavalent Zinc Yellow Passivation',
        shortName: 'Hexavalent Yellow',
        color: '#EAB308', // Yellow-500
        platingType: 'Hexavalent',
        resistance: '96+ Hours (Red Rust)',
        standards: ['High Corrosion Resistance'],
        applications: 'Automotive components, construction hardware',
        description: 'Traditional yellow chromate providing excellent corrosion protection and a self-healing film.',
    },
    {
        id: 'hex-blue',
        name: 'Hexavalent Zinc Blue Passivation',
        shortName: 'Hexavalent Blue',
        color: '#3B82F6', // Blue-500
        platingType: 'Hexavalent',
        resistance: '24-48 Hours (White Rust)',
        standards: ['Bright Finish'],
        applications: 'Fasteners, general hardware, electronics',
        description: 'Cost-effective blue-bright finish with good aesthetic appeal and moderate protection.',
    },
    {
        id: 'olive-green',
        name: 'Olive Green Passivation',
        shortName: 'Olive Green',
        color: '#556B2F', // Olive Green
        platingType: 'Hexavalent',
        resistance: '150+ Hours (Red Rust)',
        standards: ['Defense Standard', 'Heavy Duty'],
        applications: 'Military equipment, heavy machinery, outdoor fittings',
        description: 'Thick, dark green chromate offering superior salt spray resistance for harsh environments.',
    },
    {
        id: 'zinc-black',
        name: 'Zinc Black Passivation',
        shortName: 'Zinc Black',
        color: '#1F2937', // Gray-800
        platingType: 'Hexavalent', // Often offered as Tri or Hex, assuming common variety or simplified for generic
        resistance: '72+ Hours (White Rust)',
        standards: ['Decorative', 'Thermal Stability'],
        applications: 'Automotive interiors, furniture, architectural components',
        description: 'Deep black aesthetic finish offering reliable protection and consistent color depth.',
    },
    {
        id: 'tri-blue',
        name: 'Trivalent Zinc Blue Passivation',
        shortName: 'Trivalent Blue',
        color: '#60A5FA', // Blue-400
        platingType: 'Trivalent',
        resistance: '120+ Hours (White Rust)',
        standards: ['RoHS Compliant', 'Eco-Friendly'],
        applications: 'Export quality goods, modern automotive parts',
        description: 'Environmentally friendly high-performance blue finish meeting strict global regulations.',
    },
    {
        id: 'tri-yellow',
        name: 'Trivalent Zinc Yellow Passivation',
        shortName: 'Trivalent Yellow',
        color: '#FACC15', // Yellow-400
        platingType: 'Trivalent',
        resistance: '120+ Hours (White Rust)',
        standards: ['RoHS Compliant', 'High Performance'],
        applications: 'General engineering, switchgear, hydraulic fittings',
        description: 'Iridescent yellow finish offering RoHS compliance without compromising on corrosion resistance.',
    },
];

// Visual Components
const Bubble = ({ delay }: { delay: number }) => (
    <motion.div
        className="absolute bottom-0 w-2 h-2 bg-white/30 rounded-full"
        style={{ left: `${Math.random() * 100}%` }}
        animate={{
            y: -300,
            opacity: [0, 1, 0],
            x: [0, Math.sin(Math.random() * 10) * 20],
        }}
        transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: delay,
            ease: "linear"
        }}
    />
);

const BoltIcon = ({ color }: { color: string }) => (
    <svg width="40" height="60" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
        {/* Bolt Body */}
        <path d="M10 15H30V50C30 52.7614 27.7614 55 25 55H15C12.2386 55 10 52.7614 10 50V15Z" fill={color} stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
        {/* Thread Detail */}
        <path d="M10 20H30M10 26H30M10 32H30M10 38H30M10 44H30" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
        {/* Hex Head */}
        <path d="M5 5H35V15H5V5Z" fill={color} stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
        {/* Head Shine */}
        <path d="M7 7H33V9H7V7Z" fill="white" fillOpacity="0.4" />
    </svg>
);

export default function InteractivePlatingAnimation() {
    const [items] = useState(PLATING_DATA);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    // Auto-cycle logic
    useEffect(() => {
        if (isPaused || showDetails) return;

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, 3000); // 3 seconds per item

        return () => clearInterval(timer);
    }, [items.length, isPaused, showDetails]);

    const currentItem = items[currentIndex];

    const handleInteraction = useCallback(() => {
        setIsPaused(true);
        setShowDetails(true);
    }, []);

    const handleResume = useCallback(() => {
        setShowDetails(false);
        setIsPaused(false);
        // Determine next index or keep current immediately? 
        // Usually better to resume from next after a short delay or stay on current for a moment.
        // We'll just let the interval pick up.
    }, []);

    return (
        <div className="relative w-full max-w-[360px] mx-auto h-[450px] font-sans">

            {/* --- Main Animation Container (Tank) --- */}
            <div
                className="relative w-full h-full bg-gradient-to-b from-blue-900 to-blue-800 rounded-xl overflow-hidden shadow-2xl border-4 border-gray-700 cursor-pointer group"
                onClick={handleInteraction}
            >
                {/* Bubbles Background */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                        <Bubble key={i} delay={i * 0.5} />
                    ))}
                </div>

                {/* Tank Liquid Surface */}
                <motion.div
                    className="absolute top-[10%] left-0 right-0 h-2 bg-blue-300/30 blur-md"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                {/* --- Content Area --- */}
                <div className="relative h-full flex flex-col items-center justify-center p-6 gap-6 z-10">

                    {/* Upper Panel: Rising Bolt */}
                    <div className="relative w-full h-40 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 flex items-center justify-center overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentItem.id}
                                initial={{ y: 50, opacity: 0, rotate: -10 }}
                                animate={{ y: 0, opacity: 1, rotate: 0 }}
                                exit={{ y: -50, opacity: 0, rotate: 10 }}
                                transition={{ duration: 0.5, ease: "backOut" }}
                                className="scale-150"
                            >
                                <BoltIcon color={currentItem.color} />
                            </motion.div>
                        </AnimatePresence>

                        {/* Instruction Overlay (Visible on Hover) */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white font-medium flex items-center gap-2"><Info size={16} /> Click for Details</span>
                        </div>
                    </div>

                    {/* Bottom Panel: Text */}
                    <div className="relative w-full h-24 bg-white rounded-lg shadow-lg flex items-center justify-center text-center px-4 overflow-hidden border-l-4 transition-colors duration-500" style={{ borderLeftColor: currentItem.color }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentItem.id}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -20, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h3 className="text-lg font-bold text-gray-800 leading-tight">
                                    {currentItem.shortName}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider font-semibold">
                                    {currentItem.platingType}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>


                {/* Progress Indicators */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
                    {items.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            className="w-1.5 h-1.5 rounded-full bg-white/40"
                            animate={{
                                scale: idx === currentIndex ? 1.5 : 1,
                                backgroundColor: idx === currentIndex ? "#FFF" : "rgba(255,255,255,0.4)"
                            }}
                        />
                    ))}
                </div>
            </div>


            {/* --- Details Drawer (Slide Up) --- */}
            <AnimatePresence>
                {showDetails && (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="absolute inset-x-0 bottom-0 h-full bg-white z-50 rounded-t-xl shadow-[-10px_-10px_30px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-4 flex items-start justify-between bg-gray-50 border-b border-gray-100">
                            <div>
                                <span
                                    className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-1 text-white"
                                    style={{ backgroundColor: currentItem.color }}
                                >
                                    {currentItem.platingType}
                                </span>
                                <h2 className="text-xl font-bold text-gray-900 leading-tight">{currentItem.name}</h2>
                            </div>
                            <button
                                onClick={handleResume}
                                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                            >
                                <X className="h-6 w-6 text-gray-500" />
                            </button>
                        </div>

                        {/* Content Scrollable */}
                        <div className="flex-1 overflow-y-auto p-5 space-y-5">

                            {/* Visual + Desc */}
                            <div className="flex gap-4 items-start">
                                <div className="shrink-0 p-2 bg-gray-100 rounded-lg">
                                    <BoltIcon color={currentItem.color} />
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {currentItem.description}
                                </p>
                            </div>

                            {/* Specs Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    <p className="text-[10px] uppercase text-blue-600 font-bold mb-1">Corrosion Resistance</p>
                                    <p className="text-sm font-semibold text-gray-800">{currentItem.resistance}</p>
                                </div>
                                <div className="bg-gray-50 p-3 rounded-lg">
                                    <p className="text-[10px] uppercase text-gray-500 font-bold mb-1">Application</p>
                                    <p className="text-sm font-semibold text-gray-800 line-clamp-2">{currentItem.applications}</p>
                                </div>
                            </div>

                            {/* Standards */}
                            <div>
                                <p className="text-xs font-semibold text-gray-700 mb-2">Standards & Compliance</p>
                                <div className="flex flex-wrap gap-2">
                                    {currentItem.standards.map(std => (
                                        <span key={std} className="text-[10px] bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center gap-1 font-medium">
                                            <CheckCircle size={10} /> {std}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="p-4 border-t border-gray-100 bg-white">
                            <Link href="/contact" onClick={(e) => e.stopPropagation()}>
                                <Button className="w-full flex items-center justify-center gap-2" size="lg">
                                    Request Quote <ArrowRight size={16} />
                                </Button>
                            </Link>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
}
