'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function Services() {
  const t = useTranslations('services');

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
            {t('mainTitle')}
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('mainIntro')}
          </p>
        </motion.div>

        {/* Main Product Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-2 border-primary/20"
        >
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="text-primary" size={32} />
            <h3 className="text-2xl font-bold text-gray-900">
              {t('mainProduct')}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">
                    {t('process.step1.title')}
                  </h4>
                  <p className="text-gray-600">
                    {t('process.step1.description')}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">
                    {t('process.step2.title')}
                  </h4>
                  <p className="text-gray-600">
                    {t('process.step2.description')}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">
                    {t('process.step3.title')}
                  </h4>
                  <p className="text-gray-600">
                    {t('process.step3.description')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Subsidy Card - Highlighted */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white shadow-2xl"
          >
            <h4 className="text-2xl font-bold mb-3">{t('subsidy.title')}</h4>
            <p className="text-lg mb-4 opacity-95">{t('subsidy.description')}</p>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <p className="text-xl font-bold">{t('subsidy.highlight')}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Individual Consultation Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {t('individual.title')}
          </h3>
          <p className="text-lg text-primary font-semibold mb-4">
            {t('individual.subtitle')}
          </p>
          <p className="text-gray-600 text-lg">
            {t('individual.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
