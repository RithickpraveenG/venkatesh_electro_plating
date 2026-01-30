'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

// Simplified Bolt Icon
const SmallBolt = ({ color, angle, x = 0, y = 0, delay = 0 }: { color: string, angle: number, x?: number, y?: number, delay?: number }) => (
    <motion.svg
        x={x} y={y}
        width="22" height="32"
        viewBox="0 0 60 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ rotate: angle, originX: "50%", originY: "50%" }}
        animate={{ rotate: angle + 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: delay }}
    >
        <path d="M20 30H40V90C40 92.7614 37.7614 95 35 95H25C22.2386 95 20 92.7614 20 90V30Z" fill={color} stroke="rgba(0,0,0,0.5)" strokeWidth="3" />
        <path d="M10 10H50V30H10V10Z" fill={color} stroke="rgba(0,0,0,0.5)" strokeWidth="3" />
    </motion.svg>
);

const GearShape = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className}>
        {/* Main Circular Body */}
        <circle cx="50" cy="50" r="42" fill="currentColor" />
        {/* Gear Teeth (Dashed Stroke Ring) */}
        <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="10 5" />
        {/* Inner Detail / Hub */}
        <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
        <circle cx="50" cy="50" r="15" fill="rgba(0,0,0,0.3)" />
        {/* Spokes to show rotation */}
        <path d="M50 20 L50 80 M20 50 L80 50" stroke="rgba(0,0,0,0.2)" strokeWidth="4" />
    </svg>
);

export default function PlatingAnimation() {
    const colors = ["#FFD700", "#60A5FA", "#556B2F", "#1F2937"];
    const [colorIndex, setColorIndex] = useState(0);

    return (
        <div className="relative w-[340px] h-[400px] mx-auto scale-90 md:scale-100 font-sans">

            {/* The Tank - White Polypropylene with Steel Frame */}
            <div className="absolute bottom-0 left-0 right-0 h-44 z-30">
                {/* Steel Frame Structure */}
                <div className="absolute inset-0 border-x-8 border-b-8 border-gray-600 rounded-b-lg shadow-2xl bg-gray-300">
                    {/* Tank Body (White PP) */}
                    <div className="absolute inset-[4px] bg-white/90 backdrop-blur-sm overflow-hidden border border-gray-200">
                        {/* Liquid Level */}
                        <motion.div
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-4 left-0 right-0 h-[150%] bg-blue-100/50"
                        />
                        {/* Bubbles */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute bottom-0 w-3 h-3 bg-blue-200/40 rounded-full border border-blue-300/20"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{
                                    y: -150,
                                    x: Math.random() * 40 - 20,
                                    opacity: [0, 1, 0]
                                }}
                                transition={{
                                    duration: 2 + Math.random(),
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                    ease: "linear"
                                }}
                                style={{ left: `${20 + Math.random() * 60}%` }}
                            />
                        ))}
                    </div>
                </div>
                {/* Steel Top Rim */}
                <div className="absolute -top-2 left-[-8px] right-[-8px] h-4 bg-gray-500 rounded-sm shadow-sm" />
            </div>

            {/* The Hoist Mechanism */}
            <motion.div
                className="absolute top-0 left-0 right-0 z-20 flex justify-center"
                animate={{
                    y: ["0%", "58%", "58%", "0%"]
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.7, 1]
                }}
            >
                <div className="relative w-[240px] h-[200px] flex justify-center">

                    {/* Main Hoist Beam */}
                    <div className="absolute -top-[100px] w-6 h-[120px] bg-gray-700 mx-auto left-0 right-0 rounded-b-md shadow-lg" />

                    {/* Cross Spreader Bar (Steel) */}
                    <div className="absolute top-[20px] w-[240px] h-8 bg-gray-300 rounded shadow-md border border-gray-400 flex items-center justify-between px-2">
                        <div className="w-2 h-2 rounded-full bg-gray-500" />
                        <div className="w-2 h-2 rounded-full bg-gray-500" />
                    </div>

                    {/* HOOKS (Left and Right - Holding the Gear Axle) */}
                    {/* Left Hook */}
                    <div className="absolute top-[28px] left-6 w-3 h-28 bg-gray-400 border-x border-gray-500">
                        <div className="absolute bottom-0 w-full h-4 bg-gray-500 rounded-b-full" />
                        {/* J-Hook Shape */}
                        <div className="absolute -bottom-4 -left-2 w-8 h-8 border-b-6 border-l-6 border-gray-500 rounded-bl-full" />
                    </div>
                    {/* Right Hook */}
                    <div className="absolute top-[28px] right-6 w-3 h-28 bg-gray-400 border-x border-gray-500">
                        <div className="absolute bottom-0 w-full h-4 bg-gray-500 rounded-b-full" />
                        {/* J-Hook Shape */}
                        <div className="absolute -bottom-4 -right-2 w-8 h-8 border-b-6 border-r-6 border-gray-500 rounded-br-full" />
                    </div>


                    {/* THE BARREL ASSEMBLY - Horizontal Front View (Rolling) */}
                    <div className="absolute top-[100px]">
                        {/* The assembly container moves up/down with the hoist, but the rotation is internal */}
                        <div className="relative flex items-center justify-center">

                            {/* Central Axle (Stationary) */}
                            <div className="absolute w-[260px] h-3 bg-gray-400 rounded-full z-0 shadow-inner" />

                            {/* Left Gear (Spinning) */}
                            <motion.div
                                className="absolute -left-[100px] z-10"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                                <GearShape className="w-12 h-12 text-gray-300 drop-shadow-md" />
                            </motion.div>

                            {/* Right Gear (Spinning) */}
                            <motion.div
                                className="absolute -right-[100px] z-10"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                            >
                                <GearShape className="w-12 h-12 text-gray-300 drop-shadow-md" />
                            </motion.div>

                            {/* Barrel Body (Stationary Shape, Animated Texture) */}
                            <div className="relative w-[200px] h-[90px] bg-slate-100 border-2 border-slate-300 rounded-lg overflow-hidden z-20 shadow-lg">
                                {/* Gradient Overlay for cylindricity */}
                                <div className="absolute inset-0 bg-gradient-to-b from-slate-200/50 via-transparent to-slate-200/50 pointer-events-none z-30" />

                                {/* Mesh Pattern */}
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,_#000_1px,_transparent_1px)] [background-size:8px_8px]" />

                                {/* Moving Ribs & Bolts to simulate rolling */}
                                <motion.div
                                    className="absolute inset-x-0 -top-[100px] h-[300px]"
                                    animate={{ y: [0, 90] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                >
                                    {/* Ribs (Recurring Horizontal Lines) */}
                                    {[0, 1, 2, 3].map((i) => (
                                        <div key={i} className="absolute w-full h-8 border-y-2 border-slate-200 bg-slate-50 flex items-center justify-around" style={{ top: i * 90 }}>
                                            {/* Clamps/Details on the rib */}
                                            <div className="w-4 h-5 bg-slate-300 rounded-sm shadow-sm" />
                                            <div className="w-4 h-5 bg-slate-300 rounded-sm shadow-sm" />
                                        </div>
                                    ))}

                                    {/* Bolts Tumbling Inside (Between Ribs) */}
                                    {/* Randomized positions relative to the moving strip */}
                                    <div className="absolute top-[45px] left-10"><SmallBolt color="#9CA3AF" angle={45} x={0} y={0} /></div>
                                    <div className="absolute top-[50px] left-28"><SmallBolt color={colors[colorIndex]} angle={120} x={0} y={0} /></div>

                                    <div className="absolute top-[135px] left-16"><SmallBolt color="#9CA3AF" angle={200} x={0} y={0} /></div>
                                    <div className="absolute top-[140px] right-12"><SmallBolt color={colors[colorIndex]} angle={10} x={0} y={0} /></div>

                                    <div className="absolute top-[225px] left-8"><SmallBolt color="#9CA3AF" angle={90} x={0} y={0} /></div>
                                    <div className="absolute top-[230px] left-32"><SmallBolt color={colors[colorIndex]} angle={300} x={0} y={0} /></div>
                                </motion.div>
                            </div>

                        </div>
                    </div>

                </div>
            </motion.div>

            {/* Front Tank Glass Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-44 z-40 bg-gradient-to-t from-white/10 to-transparent pointer-events-none rounded-b-lg border-b-8 border-transparent" />

        </div>
    );
}
