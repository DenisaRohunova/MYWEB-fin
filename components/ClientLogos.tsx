'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const logos = [
  'mercedes.jpg',
  'asklepion.jpg',
  'czech-tv.jpg',
  'EU-leadership-academy.jpg',
  'msic.jpg',
  'ai-asociaon--we-are-part-of.jpg',
  'bayo.jpg',
  'comac-cal.jpg',
  'dva-mluvci.jpg',
  'mandario.jpg',
  'marketingOn.jpg',
  'new-dimension.jpg',
  'ostrava-muzeum.jpg',
  'septim.jpg',
  'slu-opf.jpg',
  'SMJ.jpg',
  'SMO.JPG',
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              transition={{ delay: index * 0.1, duration: 0.4 }}
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
