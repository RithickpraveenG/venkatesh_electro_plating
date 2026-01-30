'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Settings, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Card, CardTitle, CardContent } from '@/components/ui/Card';
import PlatingAnimation from '@/components/PlatingAnimation';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-[var(--color-deep-blue)] text-white">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[var(--color-deep-blue)]/95 to-[var(--color-deep-blue)] z-0" />

        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative z-10 container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

          {/* Hero Content */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                PRECISION <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-olive-green)] to-yellow-400">
                  SURFACE FINISHING
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed border-l-4 border-[var(--color-olive-green)] pl-6">
                Advanced electroplating solutions for automotive and industrial sectors.
                Delivering superior corrosion resistance and aesthetic excellence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto shadow-[0_0_20px_rgba(163,180,11,0.3)]">
                    Request Quotation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-gray-500 text-gray-300 hover:text-white hover:border-white">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Plating Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:flex justify-center items-center relative"
          >
            {/* Glow Effect behind animation */}
            <div className="absolute inset-0 bg-[var(--color-olive-green)] blur-[100px] opacity-20 rounded-full" />
            <PlatingAnimation />
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <Section className='bg-white'>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[var(--color-deep-blue)] mb-6 uppercase tracking-wide">
              World-Class <span className="text-[var(--color-olive-green)]">Standards</span>
            </h2>
            <p className="text-[var(--color-steel-grey)] text-lg leading-relaxed mb-6">
              Venkatesh Electro Plating specializes in high-performance zinc electroplating and passivation services.
              We utilize state-of-the-art automated lines to ensure uniform thickness, superior adhesion,
              and consistent salt spray endurance.
            </p>
            <ul className="space-y-4">
              {[
                "Automated Rack & Barrel Plating",
                "ISO 9001:2015 Compliant Processes",
                "X-Ray Fluorescence Thickness Testing",
                "24/7 Production Capability"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[var(--color-deep-blue)] font-medium">
                  <CheckCircle className="h-5 w-5 text-[var(--color-olive-green)]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-blue)]/80 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="font-bold text-lg">High Capacity Production Lines</p>
              <p className="text-sm opacity-80">Serving 50+ Industrial Clients</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section background="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--color-deep-blue)] uppercase tracking-wide">Core Services</h2>
          <div className="w-20 h-1 bg-[var(--color-olive-green)] mx-auto mt-4" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Trivalent Zinc",
              desc: "Eco-friendly high-corrosion resistant plating available in blue and yellow variations.",
              icon: Shield
            },
            {
              title: "Zinc Iron Black",
              desc: "Deep black finish with superior thermal shock resistance and aesthetic appeal.",
              icon: Zap
            },
            {
              title: "Olive Green Passivation",
              desc: "Maximum salt spray protection developed specifically for defense and heavy machinery.",
              icon: Settings
            }
          ].map((service, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-t-2 border-transparent hover:border-[var(--color-olive-green)]">
                <div className="p-6">
                  <div className="bg-[var(--color-zinc-silver)] w-14 h-14 rounded-full flex items-center justify-center mb-6 text-[var(--color-olive-green)]">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="mb-3 text-[var(--color-deep-blue)]">{service.title}</CardTitle>
                  <p className="mb-6 text-gray-600 leading-relaxed">{service.desc}</p>
                  <Link href="/services" className="text-[var(--color-olive-green)] font-semibold flex items-center gap-2 hover:gap-3 transition-all uppercase text-sm tracking-wide">
                    View Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/services">
            <Button variant="outline" className="border-[var(--color-deep-blue)] text-[var(--color-deep-blue)] hover:bg-[var(--color-deep-blue)] hover:text-white">View All Services</Button>
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark" className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Surface Finish?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Get in touch with our technical team for a consultation and custom quotation.
        </p>
        <Link href="/contact">
          <Button variant="secondary" size="lg" className="animate-pulse">Get a Free Quote</Button>
        </Link>
      </Section>
    </>
  );
}
