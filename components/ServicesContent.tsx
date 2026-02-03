'use client';

import ThreeDCarousel from '@/components/ThreeDCarousel';

export default function ServicesContent() {
    return (
        <div className="relative bg-[var(--color-deep-blue)] text-white min-h-screen overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[var(--color-deep-blue)]/95 to-[var(--color-deep-blue)] z-0" />

            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="relative z-10 pt-24 pb-12 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase tracking-wider">
                    Our <span className="text-green-500">Services</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto px-4">
                    Explore our premium zinc plating solutions. Swipe to view our range of passivation finishes.
                </p>
            </div>

            <div className="relative z-10">
                <ThreeDCarousel />
            </div>
        </div>
    );
}
