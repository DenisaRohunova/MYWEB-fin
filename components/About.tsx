'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/photos/portrait-of-me-top.jpeg"
                alt="Denisa Rohunová"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              {t('title')}
            </h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed whitespace-pre-line">
              {t('story').split('\n').map((paragraph, index) => (
                <p key={index} className={paragraph ? '' : 'h-4'}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
