'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { cn } from './ui/Button';

const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/process', label: 'Process' },
    { href: '/industries', label: 'Industries' },
    { href: '/contact', label: 'Contact' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 text-[var(--color-deep-blue)] shadow-sm">
            <div className="max-w-10xl mx-6 px-0 sm:px-6 lg:px-6">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0 flex items-center gap-1">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative w-24 h-10 md:w-48 md:h-16 -ml-2 md:-ml-4">
                                <Image
                                    src="/logo.png"
                                    alt="Venkatesh Electro Plating"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            <span className="text-[10px] sm:text-xs md:text-xl font-bold text-[var(--color-deep-blue)] tracking-wide whitespace-nowrap block">
                                VENKATESH ELECTRO PLATING
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-baseline space-x-6">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        'px-3 py-2 text-sm font-bold transition-all duration-200 uppercase tracking-wide hover:text-[var(--color-company-red)]',
                                        pathname === link.href
                                            ? 'text-[var(--color-company-red)] border-b-2 border-[var(--color-company-red)]'
                                            : 'text-[var(--color-deep-blue)]'
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <Link href="/contact">
                            <Button className="bg-[var(--color-company-red)] hover:bg-red-700 text-white font-bold py-2 px-6 rounded-md shadow-md hover:shadow-lg transition-all">
                                Get Quotation
                            </Button>
                        </Link>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-deep-blue)] hover:text-[var(--color-company-red)] hover:bg-gray-100 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        'block px-3 py-2 rounded-md text-base font-bold uppercase tracking-wide',
                                        pathname === link.href
                                            ? 'text-[var(--color-company-red)] bg-red-50'
                                            : 'text-[var(--color-deep-blue)] hover:text-[var(--color-company-red)] hover:bg-gray-50'
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="mt-4 px-3">
                                <Link href="/contact" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full bg-[var(--color-company-red)] hover:bg-red-700 text-white font-bold">Get Quotation</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
