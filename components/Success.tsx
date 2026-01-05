'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Award, Code, Users, Briefcase, Trophy } from 'lucide-react';

export default function Success() {
  const t = useTranslations('success');

  const items = [
    {
      icon: Award,
      text: t('items.innovation'),
      color: 'text-primary'
    },
    {
      icon: Code,
      text: t('items.developer'),
      color: 'text-secondary'
    },
    {
      icon: Users,
      text: t('items.msic'),
      color: 'text-primary'
    },
    {
      icon: Briefcase,
      text: t('items.cofounder'),
      color: 'text-secondary'
    },
    {
      icon: Trophy,
      text: t('items.squash'),
      color: 'text-primary'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            {t('title')}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border-2 border-purple-100 hover:border-primary transition-all shadow-lg hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className={`${item.color} flex-shrink-0`}>
                    <Icon size={32} />
                  </div>
                  <p className="text-gray-700 font-medium leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
