'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-purple-50/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold"
            >
              {t('trustBadge')}
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t('headline')}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              {t('subheadline')}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t('cta')}
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/photos/profesional-portrait-of-me-top.jpeg"
                alt="Denisa Rohunová"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
