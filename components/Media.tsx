'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ExternalLink, Play } from 'lucide-react';
import Image from 'next/image';

export default function Media() {
  const t = useTranslations('media');

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0514] via-[#1a0a2e] to-[#0a0514] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-black gradient-text">
            {t('title')}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Podcast Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <Play className="text-primary" size={32} />
              {t('podcast')}
            </h3>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-primary/30 glow-effect">
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
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <ExternalLink className="text-primary" size={32} />
              {t('tv')}
            </h3>
            <a
              href="https://www.ceskatelevize.cz/porady/10435049455-dobre-rano/424236100071099/cast/1078784/"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-primary/30 glow-effect bg-gradient-to-br from-primary to-secondary">
                <Image
                  src="/photos/in-the-czech-TV-show.jpg"
                  alt="Czech TV appearance"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="mb-4"
                    >
                      <ExternalLink size={64} className="mx-auto" />
                    </motion.div>
                    <p className="text-2xl font-bold">Česká televize</p>
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
