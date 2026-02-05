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
                        <div className="flex flex-col items-center">
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
                        <div className="pt-4 space-y-1 flex flex-col items-center">
                            <p className="font-bold text-lg text-[var(--color-deep-blue)]">THIRUMURUGAN V.P.</p>
                            <p className="font-bold text-xl flex items-center justify-center gap-2 text-[var(--color-deep-blue)]">
                                <span className="text-sm font-normal">Cell / WhatsApp :</span>
                                <a href="https://wa.me/919842296662" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-company-red)] transition-colors">
                                    98422 96662
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-bold mb-4 text-[var(--color-deep-blue)] uppercase border-b-2 border-gray-100 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-2 font-medium text-center md:text-left">
                            <li><Link href="/services" className="text-gray-600 hover:text-[var(--color-company-red)] transition-colors hover:translate-x-1 duration-200 inline-block">Services</Link></li>
                            <li><Link href="/process" className="text-gray-600 hover:text-[var(--color-company-red)] transition-colors hover:translate-x-1 duration-200 inline-block">Process</Link></li>
                            <li><Link href="/industries" className="text-gray-600 hover:text-[var(--color-company-red)] transition-colors hover:translate-x-1 duration-200 inline-block">Industries</Link></li>
                            <li><Link href="/contact" className="text-gray-600 hover:text-[var(--color-company-red)] transition-colors hover:translate-x-1 duration-200 inline-block">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-bold mb-4 text-[var(--color-deep-blue)] uppercase border-b-2 border-gray-100 pb-2 inline-block">Our Expertise</h3>
                        <ul className="space-y-2 text-sm text-gray-600 font-medium w-full">
                            <li className="flex items-center justify-center md:justify-start gap-2"><span className="w-1 h-1 bg-[var(--color-company-red)] rounded-full"></span>Hexavalent Zinc Yellow</li>
                            <li className="flex items-center justify-center md:justify-start gap-2"><span className="w-1 h-1 bg-[var(--color-company-red)] rounded-full"></span>Hexavalent Zinc Blue</li>
                            <li className="flex items-center justify-center md:justify-start gap-2"><span className="w-1 h-1 bg-[var(--color-company-red)] rounded-full"></span>Trivalent Zinc Yellow</li>
                            <li className="flex items-center justify-center md:justify-start gap-2"><span className="w-1 h-1 bg-[var(--color-company-red)] rounded-full"></span>Trivalent Zinc Blue</li>
                            <li className="flex items-center justify-center md:justify-start gap-2"><span className="w-1 h-1 bg-[var(--color-company-red)] rounded-full"></span>Olive Green Passivation</li>
                            <li className="flex items-center justify-center md:justify-start gap-2"><span className="w-1 h-1 bg-[var(--color-company-red)] rounded-full"></span>Zinc Black Passivation</li>
                        </ul>
                    </div>

                    {/* Contact - Official Address */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-lg font-bold mb-4 text-[var(--color-deep-blue)] uppercase border-b-2 border-gray-100 pb-2 inline-block">Address</h3>
                        <ul className="space-y-4 text-gray-700 font-medium w-full">
                            <li className="flex items-start gap-3 group justify-center md:justify-start text-center md:text-left">
                                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors mt-1">
                                    <MapPin className="h-5 w-5 text-[var(--color-deep-blue)] shrink-0" />
                                </div>
                                <span className="text-sm leading-relaxed max-w-[250px] md:max-w-none">
                                    <strong>SF. NO 99/2A</strong>,<br />
                                    SREE MARUTHI INDUSTRIAL ESTATE,<br />
                                    SCHOOL STREET, Chinnavedampatti,<br />
                                    Coimbatore, Tamil Nadu 641049.
                                </span>
                            </li>
                            <li className="flex items-center gap-3 group justify-center md:justify-start">
                                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                                    {/* WhatsApp Icon */}
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-5 w-5 text-[#25D366]"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>
                                <a href="https://wa.me/919842296662" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-[var(--color-deep-blue)] hover:text-[var(--color-company-red)] transition-colors">
                                    +91 98422 96662
                                </a>
                            </li>
                            <li className="flex items-center gap-3 group justify-center md:justify-start">
                                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                                    <Mail className="h-5 w-5 text-[var(--color-deep-blue)] shrink-0" />
                                </div>
                                <a href="mailto:venkateshelectroplating@gmail.com" className="text-sm font-bold text-[var(--color-deep-blue)] hover:text-[var(--color-company-red)] transition-colors break-all">
                                    venkateshelectroplating@gmail.com
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
