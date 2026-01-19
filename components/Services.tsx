'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Services() {
  const t = useTranslations('services');
  const tHero = useTranslations('hero');
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section id="services" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0514] via-[#1a0a2e] to-[#0a0514] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 gradient-text">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('mainIntro')}
          </p>
        </motion.div>

        {/* Main Product Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-3xl p-10 mb-12 border-2 border-primary/20 glow-effect"
        >
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white">
              {t('mainProduct')}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[
              { title: t('process.step1.title'), desc: t('process.step1.description') },
              { title: t('process.step2.title'), desc: t('process.step2.description') },
              { title: t('process.step3.title'), desc: t('process.step3.description') },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all"
              >
                <div>
                  <h4 className="font-bold text-xl text-white mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Subsidy Card - Highlighted */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl p-8 text-white shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/photos/innovation-star-award.avif')] opacity-10 bg-cover bg-center" />
            <div className="relative z-10">
              <h4 className="text-3xl font-black mb-4">{t('subsidy.title')}</h4>
              <p className="text-xl mb-6 opacity-95 leading-relaxed">{t('subsidy.description')}</p>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-4 rounded-xl border-2 border-white/30 mb-10">
                <p className="text-2xl font-black">{t('subsidy.highlight')}</p>
              </div>
              <motion.a
                href="#booking"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="group relative inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg overflow-hidden border-2 border-white/30 ml-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{tHero('cta')}</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: isHovering ? 5 : 0 }}
                >
                  <ArrowRight size={24} />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  initial={{ x: '-100%' }}
                  animate={{ x: isHovering ? '0%' : '-100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Individual Consultation Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl p-10 border-2 border-primary/20"
        >
          <h3 className="text-3xl font-bold text-white mb-3">
            {t('individual.title')}
          </h3>
          <p className="text-xl text-primary font-semibold mb-4">
            {t('individual.subtitle')}
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {t('individual.description')}
          </p>
          <motion.a
            href="#booking"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-lg font-bold text-lg overflow-hidden glow-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">{tHero('cta')}</span>
            <motion.div
              className="relative z-10"
              animate={{ x: isHovering ? 5 : 0 }}
            >
              <ArrowRight size={24} />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary to-primary"
              initial={{ x: '-100%' }}
              animate={{ x: isHovering ? '0%' : '-100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
