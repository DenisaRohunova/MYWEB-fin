'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// All logos from client-logos folder, ensuring no duplicates
const logos = [
  'ai-asociaon--we-are-part-of.jpg',
  'asklepion.jpg',
  'bayo.jpg',
  'comac-cal.jpg',
  'czech-tv.jpg',
  'dva-mluvci.jpg',
  'EU-leadership-academy.jpg',
  'Logo MEZI NAMI PNG - ctverec.jpg',
  'mandario.jpg',
  'marketingOn.jpg',
  'mercedes.jpg',
  'msic.jpg',
  'new-dimension.jpg',
  'ostrava-muzeum.jpg',
  'septim.jpg',
  'slu-opf.jpg',
  'SMJ.jpg',
  'SMO.JPG',
].filter((logo, index, self) => self.indexOf(logo) === index); // Remove duplicates

export default function ClientLogos() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #6100D1 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex items-center justify-center h-20 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={`/client-logos/${logo}`}
                alt={`Client logo ${index + 1}`}
                width={120}
                height={80}
                className="object-contain h-full w-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
