import Link from 'next/link';
import Image from 'next/image';
import { Hammer, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-white text-[var(--color-deep-blue)] pt-16 pb-8 border-t-4 border-[var(--color-company-red)] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand from Card */}
                    <div className="space-y-4">
                        <div className="flex flex-col items-start">
                            {/* Logo Image */}
                            <div className="relative w-56 h-20 mb-2">
                                <Image
                                    src="/logo.png"
                                    alt="Venkatesh Electro Plating"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="font-bold text-[var(--color-deep-blue)] tracking-[0.2em] uppercase text-sm border-b-2 border-[var(--color-deep-blue)] pb-1 mt-1 w-full text-center">
                                ZINC PLATING
                            </p>
                        </div>
                        <div className="pt-4 space-y-1">
                            <p className="font-bold text-lg text-[var(--color-deep-blue)]">THIRUMURUGAN V.P.</p>
                            <p className="font-bold text-xl flex items-center gap-2 text-[var(--color-deep-blue)]">
                                <span className="text-sm font-normal">Cell :</span> 98422 96662
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[var(--color-deep-blue)] uppercase border-b-2 border-gray-100 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-2 font-medium">
                            <li><Link href="/services" className="text-gray-600 hover:text-[var(--color-company-red)] transition-colors hover:translate-x-1 duration-200 inline-block">Services</Link></li>
                            <li><Link href="/process" className="text-gray-600 hover:text-[var(--color-company-red)] transition-colors hover:translate-x-1 duration-200 inline-block">Process</Link></li>
                            <li><Link href="/industries" className="text-gray-600 hover:text-[var(--color-company-red)] transition-colors hover:translate-x-1 duration-200 inline-block">Industries</Link></li>
                            <li><Link href="/contact" className="text-gray-600 hover:text-[var(--color-company-red)] transition-colors hover:translate-x-1 duration-200 inline-block">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[var(--color-deep-blue)] uppercase border-b-2 border-gray-100 pb-2 inline-block">Our Expertise</h3>
                        <ul className="space-y-2 text-sm text-gray-600 font-medium">
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[var(--color-company-red)] rounded-full"></span>Hexavalent Zinc Yellow</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[var(--color-company-red)] rounded-full"></span>Hexavalent Zinc Blue</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[var(--color-company-red)] rounded-full"></span>Trivalent Zinc Yellow</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[var(--color-company-red)] rounded-full"></span>Trivalent Zinc Blue</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[var(--color-company-red)] rounded-full"></span>Olive Green Passivation</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-[var(--color-company-red)] rounded-full"></span>Zinc Black Passivation</li>
                        </ul>
                    </div>

                    {/* Contact - Official Address */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[var(--color-deep-blue)] uppercase border-b-2 border-gray-100 pb-2 inline-block">Address</h3>
                        <ul className="space-y-4 text-gray-700 font-medium">
                            <li className="flex items-start gap-3 group">
                                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                                    <MapPin className="h-5 w-5 text-[var(--color-deep-blue)] shrink-0" />
                                </div>
                                <span className="text-sm leading-relaxed">
                                    <strong>Flat.No. SF.No. 99/2A</strong>,<br />
                                    Building: SREE MARUTHI INDUSTRIAL ESTATE,<br />
                                    School Street, Chinnavedampatti,<br />
                                    Coimbatore - 641 049,<br />
                                    Tamilnadu.
                                </span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                                    <Mail className="h-5 w-5 text-[var(--color-deep-blue)] shrink-0" />
                                </div>
                                <a href="mailto:venkateshplating@yahoo.com" className="text-sm font-bold text-[var(--color-deep-blue)] hover:text-[var(--color-company-red)] transition-colors">
                                    venkateshplating@yahoo.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Venkatesh Electro Plating. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
