'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Button } from './ui/Button';
import Link from 'next/link';
import Image from 'next/image';

// Data
const SERVICES = [
    {
        id: 'hex-yellow',
        title: "Hexavalent Zinc Yellow",
        color: "#EAB308",
        desc: "Traditional iridescent yellow finish with self-healing properties.",
        specs: ["96+ Hrs Salt Spray", "8-12 microns", "Automotive Spec"],
        image: "/images/passivation/hexavalent_yellow.png"
    },
    {
        id: 'hex-blue',
        title: "Hexavalent Zinc Blue",
        color: "#3B82F6",
        desc: "Bright blue/clear finish for aesthetics and moderate protection.",
        specs: ["24-48 Hrs Salt Spray", "5-8 microns", "Electronics"],
        image: "/images/passivation/hexavalent_blue.png"
    },
    {
        id: 'olive',
        title: "Olive Green Passivation",
        color: "#556B2F",
        desc: "Maximum protection dark green finish for military applications.",
        specs: ["150+ Hrs Salt Spray", "10-15 microns", "Defense Std"],
        image: "/images/products/olive_green.png"
    },
    {
        id: 'black',
        title: "Zinc Black Passivation",
        color: "#1F2937",
        desc: "Premium deep black finish with thermal stability.",
        specs: ["96+ Hrs Salt Spray", "8-12 microns", "Architectural"],
        image: "/images/products/zinc_black.png"
    },
    {
        id: 'tri-blue',
        title: "Trivalent Zinc Blue",
        color: "#60A5FA",
        desc: "RoHS compliant eco-friendly bright blue finish.",
        specs: ["72+ Hrs Salt Spray", "RoHS/REACH", "Export Quality"],
        image: "/images/passivation/trivalent_blue.png"
    },
    {
        id: 'tri-yellow',
        title: "Trivalent Zinc Yellow",
        color: "#FACC15",
        desc: "High-performance RoHS compliant yellow iridescent finish.",
        specs: ["120+ Hrs Salt Spray", "RoHS/REACH", "Modern Auto"],
        image: "/images/passivation/trivalent_yellow.png"
    }
];

export default function ThreeDCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % SERVICES.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
    };

    const getPosition = (index: number) => {
        const diff = (index - currentIndex + SERVICES.length) % SERVICES.length;
        if (diff === 0) return 'center';
        if (diff === 1 || diff === -(SERVICES.length - 1)) return 'right';
        if (diff === SERVICES.length - 1 || diff === -1) return 'left';
        return 'hidden';
    };

    const currentItem = SERVICES[currentIndex];

    // Handle clicking a background item to bring it to center
    const handleItemClick = (index: number, position: string) => {
        if (position === 'left') prevSlide();
        else if (position === 'right') nextSlide();
    };

    return (
        <div className="w-full min-h-[600px] bg-transparent text-white font-sans overflow-hidden flex items-center justify-center p-4">

            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* --- LEFT SIDE: CAROUSEL --- */}
                <div className="relative h-[400px] flex items-center justify-center perspective-[1000px]">

                    {/* Navigation Arrows */}
                    <button onClick={prevSlide} className="absolute left-0 z-50 p-3 rounded-full border border-[var(--color-olive-green)]/50 text-[var(--color-olive-green)] hover:bg-[var(--color-olive-green)]/10 transition-all hover:scale-110">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextSlide} className="absolute right-0 z-50 p-3 rounded-full border border-[var(--color-olive-green)]/50 text-[var(--color-olive-green)] hover:bg-[var(--color-olive-green)]/10 transition-all hover:scale-110">
                        <ChevronRight size={24} />
                    </button>

                    {/* Carousel Items */}
                    <div className="relative w-full h-full flex items-center justify-center">
                        {SERVICES.map((item, index) => {
                            const position = getPosition(index);
                            const isCenter = position === 'center';

                            let x = 0;
                            let z = 0;
                            let opacity = 0;
                            let scale = 1;
                            let rotateY = 0;
                            let zIndex = 0;

                            if (position === 'center') {
                                x = 0;
                                z = 100; // Move closer
                                opacity = 1;
                                scale = 1.1;
                                rotateY = 0;
                                zIndex = 20;
                            } else if (position === 'left') {
                                x = -220; // Adjusted for alignment
                                z = -100;
                                opacity = 0.5;
                                scale = 0.7;
                                rotateY = 25;
                                zIndex = 10;
                            } else if (position === 'right') {
                                x = 220; // Adjusted for alignment
                                z = -100;
                                opacity = 0.5;
                                scale = 0.7;
                                rotateY = -25;
                                zIndex = 10;
                            } else {
                                opacity = 0;
                                z = -500;
                                zIndex = 0;
                            }

                            return (
                                <motion.div
                                    key={item.id}
                                    className="absolute flex flex-col items-center justify-center cursor-pointer"
                                    initial={false}
                                    animate={{ x, z, opacity, scale, rotateY, zIndex }}
                                    transition={{ type: "spring", stiffness: 150, damping: 20 }}
                                    onClick={() => handleItemClick(index, position)}
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 ${isCenter ? 'border-[var(--color-olive-green)] shadow-[0_0_30px_rgba(163,180,11,0.4)]' : 'border-gray-600/40'} bg-white overflow-hidden flex items-center justify-center p-6 transition-all duration-500`}>
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-contain drop-shadow-xl"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                    </div>
                                    {!isCenter && (
                                        <p className="mt-4 text-sm font-semibold text-gray-400 uppercase tracking-widest">{item.title}</p>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>


                {/* --- RIGHT SIDE: DETAILS BOX --- */}
                <div className="relative flex justify-center lg:justify-start">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentItem.id}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="bg-black/30 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl max-w-lg w-full relative overflow-hidden"
                        >
                            {/* Decorative Accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-olive-green)]/10 rounded-bl-full pointer-events-none" />

                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
                                {currentItem.title}
                            </h2>
                            <div className="w-16 h-1.5 bg-[var(--color-olive-green)] mb-6 rounded-full" />

                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                {currentItem.desc}
                            </p>

                            <div className="space-y-3 mb-8">
                                <h3 className="text-sm font-bold text-[var(--color-olive-green)] uppercase tracking-widest mb-4">Specifications</h3>
                                {currentItem.specs.map((spec, i) => (
                                    <div key={i} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-6 h-6 rounded-full bg-[var(--color-olive-green)]/20 flex items-center justify-center text-[var(--color-olive-green)]">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span>{spec}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact" className="block">
                                <Button className="w-full bg-[var(--color-olive-green)] hover:bg-[var(--color-olive-green)]/90 text-white py-4 text-lg rounded-xl shadow-[0_4px_20px_rgba(163,180,11,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(163,180,11,0.4)]">
                                    Enquire Now
                                </Button>
                            </Link>

                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
}
