'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Quote, ArrowRight } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const tHero = useTranslations('hero');
  const locale = useLocale();
  const [expandedTestimonials, setExpandedTestimonials] = useState<Set<string>>(new Set());
  const [isHovering, setIsHovering] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);
  
  // Na mobilu zobrazíme jen první 3 reference
  const MOBILE_VISIBLE_COUNT = 3;

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedTestimonials);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedTestimonials(newExpanded);
  };

  const textTestimonials = testimonials.filter(t => !t.isVideo);
  const videoTestimonials = testimonials.filter(t => t.isVideo);

  return (
    <section id="testimonials" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0514] via-[#1a0a2e] to-[#0a0514] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Quote className="text-primary mx-auto mb-6" size={48} />
          <h2 className="text-5xl sm:text-6xl font-black gradient-text">
            {t('title')}
          </h2>
        </motion.div>

        {/* Video Testimonials */}
        {videoTestimonials.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {videoTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-primary/30 glow-effect"
              >
                <iframe
                  src={testimonial.videoUrl}
                  title={testimonial.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Text Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {textTestimonials.map((testimonial, index) => {
            const isExpanded = expandedTestimonials.has(testimonial.id);
            const text = testimonial.text[locale as 'cs' | 'en'];
            const shouldTruncate = text.length > 300;
            const displayText = shouldTruncate && !isExpanded 
              ? text.substring(0, 300) + '...' 
              : text;
            
            // Na mobilu skrýt reference po první 3, pokud není showAllMobile
            const isHiddenOnMobile = index >= MOBILE_VISIBLE_COUNT && !showAllMobile;

            return (
              <motion.div
                key={testimonial.id}
                id={index === MOBILE_VISIBLE_COUNT ? 'first-hidden-testimonial' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all ${
                  isHiddenOnMobile ? 'hidden md:block' : ''
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  {testimonial.photo && (
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={testimonial.photo}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover border-2 border-primary/30"
                        sizes="64px"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    {testimonial.role && (
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    )}
                    <p className="text-sm font-semibold text-primary">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">{displayText}</p>
                {shouldTruncate && (
                  <button
                    onClick={() => toggleExpand(testimonial.id)}
                    className="flex items-center gap-1 text-primary hover:text-secondary font-semibold text-sm transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        <span>{locale === 'cs' ? 'Méně' : 'Less'}</span>
                        <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        <span>{locale === 'cs' ? 'Více' : 'Read more'}</span>
                        <ChevronDown size={16} />
                      </>
                    )}
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Show All Button - Only visible on mobile */}
        {textTestimonials.length > MOBILE_VISIBLE_COUNT && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-center md:hidden"
          >
            <motion.button
              onClick={() => {
                if (!showAllMobile) {
                  // Scroll to first hidden testimonial (Tereza Svobodová) when showing all
                  setTimeout(() => {
                    const firstHidden = document.getElementById('first-hidden-testimonial');
                    if (firstHidden) {
                      firstHidden.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }
                setShowAllMobile(!showAllMobile);
              }}
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg font-bold text-lg overflow-hidden glow-effect"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAllMobile ? t('showLess') : t('showAll')}
            </motion.button>
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
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
