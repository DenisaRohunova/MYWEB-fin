'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';

export default function Media() {
  const t = useTranslations('media');

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50/20">
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Podcast Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Play className="text-primary" size={28} />
              {t('podcast')}
            </h3>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.youtube.com/embed/372OCyZcOlY"
                title="Podcast Innovation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>

          {/* TV Appearance */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <ExternalLink className="text-primary" size={28} />
              {t('tv')}
            </h3>
            <a
              href="https://www.ceskatelevize.cz/porady/10435049455-dobre-rano/424236100071099/cast/1078784/"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-primary to-secondary">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <ExternalLink size={48} className="mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-xl font-semibold">Česká televize</p>
                    <p className="text-sm opacity-90 mt-2">Dobré ráno</p>
                    <p className="text-sm mt-4 opacity-75">Klikněte pro zobrazení</p>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
