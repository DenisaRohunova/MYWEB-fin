'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0514] via-[#1a0a2e] to-[#0a0514] border-t border-primary/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-400 text-sm"
        >
          <p className="mb-2">
            © {currentYear} Denisa Rohunová. {t('copyright')}
          </p>
          <p className="text-gray-500">
            {t('createdBy')}{' '}
            <a
              href="https://taskyo.cz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-secondary transition-colors font-medium"
            >
              {t('company')}
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
