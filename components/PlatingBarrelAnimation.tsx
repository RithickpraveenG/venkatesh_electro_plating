'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PASSIVATIONS = [
    { name: "Trivalent Blue Passivation", color: "#A5BFE1" }, // Silver/Blue
    { name: "Trivalent Yellow Passivation", color: "#E2D1F0" }, // Silvery Violet
    { name: "Hexavalent Yellow Passivation", color: "#EAB308" }, // Bright Yellow
    { name: "Hexavalent Blue Passivation", color: "#38BDF8" }, // Bright Light Blue
    { name: "Zinc Black Passivation", color: "#1F2937" }, // Deep Black
    { name: "Olive Green Passivation", color: "#556B2F" }, // Olive Green
];

export default function PlatingBarrelAnimation() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % PASSIVATIONS.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(timer);
    }, []);

    const currentPassivation = PASSIVATIONS[currentIndex];

    return (
        <div className="relative w-full h-[500px] md:h-[600px] bg-[var(--color-deep-blue)] overflow-hidden flex flex-col items-center justify-center">
            {/* Background Grid/Technical Lines */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
            </div>

            {/* Animation Scene */}
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                    <defs>
                        <linearGradient id="tankGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#4B5563" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#1F2937" stopOpacity="1" />
                        </linearGradient>
                        <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#2563EB" stopOpacity="0.6" />
                        </linearGradient>
                    </defs>

                    {/* --- TANK --- */}
                    <path
                        d="M 50 250 L 50 380 L 350 380 L 350 250"
                        fill="url(#tankGradient)"
                        stroke="#9CA3AF"
                        strokeWidth="2"
                    />
                    {/* Liquid in Tank */}
                    <motion.path
                        d="M 60 280 C 100 275, 140 285, 200 280 C 260 275, 300 285, 340 280 L 340 370 L 60 370 Z"
                        fill="url(#liquidGradient)"
                        animate={{
                            d: [
                                "M 60 280 C 100 275, 140 285, 200 280 C 260 275, 300 285, 340 280 L 340 370 L 60 370 Z",
                                "M 60 280 C 100 285, 140 275, 200 280 C 260 285, 300 275, 340 280 L 340 370 L 60 370 Z",
                                "M 60 280 C 100 275, 140 285, 200 280 C 260 275, 300 285, 340 280 L 340 370 L 60 370 Z"
                            ]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />


                    {/* --- ROTATING BARREL --- */}
                    {/* The barrel rotates around the center (200, 200) */}
                    <motion.g
                        style={{ originX: "200px", originY: "200px" }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                        {/* Barrel Shape - Hexagon */}
                        <path
                            d="M 150 113.4 L 250 113.4 L 300 200 L 250 286.6 L 150 286.6 L 100 200 Z"
                            fill="none"
                            stroke="#D1D5DB"
                            strokeWidth="4"
                            strokeDasharray="5 5" // Perforated look
                        />
                        {/* Barrel Inner Lines for depth */}
                        <path
                            d="M 150 113.4 L 200 200 L 250 113.4 M 200 200 L 150 286.6 M 200 200 L 250 286.6 M 200 200 L 300 200 M 200 200 L 100 200"
                            stroke="#D1D5DB"
                            strokeWidth="1"
                            opacity="0.3"
                        />
                    </motion.g>

                    {/* --- STATIC BOLTS CLUSTER (Center) --- */}
                    {/* Bolts stay in position but change color */}
                    <g transform="translate(170, 170) scale(0.6)">
                        {/* Bolt 1 */}
                        <motion.path
                            d="M 10 10 L 40 10 L 40 60 L 10 60 Z M 5 10 L 45 10 L 45 0 L 5 0 Z"
                            animate={{ fill: currentPassivation.color }}
                            transition={{ duration: 1 }}
                        />
                        {/* Bolt 2 (Rotated) */}
                        <motion.path
                            d="M 60 40 L 90 40 L 90 90 L 60 90 Z M 55 40 L 95 40 L 95 30 L 55 30 Z"
                            transform="rotate(45, 75, 60)"
                            animate={{ fill: currentPassivation.color }}
                            transition={{ duration: 1 }}
                        />
                        {/* Bolt 3 */}
                        <motion.path
                            d="M 10 80 L 40 80 L 40 130 L 10 130 Z M 5 80 L 45 80 L 45 70 L 5 70 Z"
                            animate={{ fill: currentPassivation.color }}
                            transition={{ duration: 1 }}
                        />
                        {/* Bolt 4 */}
                        <motion.path
                            d="M 80 10 L 110 10 L 110 60 L 80 60 Z M 75 10 L 115 10 L 115 0 L 75 0 Z"
                            transform="rotate(-20, 95, 30)"
                            animate={{ fill: currentPassivation.color }}
                            transition={{ duration: 1 }}
                        />
                        {/* Add more random small shapes for 'tumbled' look */}
                        <motion.circle cx="50" cy="50" r="5" animate={{ fill: currentPassivation.color }} transition={{ duration: 1 }} />
                        <motion.rect x="70" y="80" width="10" height="20" animate={{ fill: currentPassivation.color }} transition={{ duration: 1 }} />
                    </g>

                </svg>
            </div>

            {/* --- BOTTOM WHITE PANEL (TEXT) --- */}
            <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center px-4">
                <div className="bg-white/95 backdrop-blur-sm px-8 py-3 rounded-full shadow-lg border border-gray-100 min-w-[300px] text-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-lg md:text-xl font-bold text-gray-800 uppercase tracking-widest">
                                {currentPassivation.name}
                            </span>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Gradient Overlay for integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-blue)] via-transparent to-transparent pointer-events-none" />
        </div>
    );
}
