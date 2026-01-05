'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const locale = useLocale();
  const [expandedTestimonials, setExpandedTestimonials] = useState<Set<string>>(new Set());

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
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50/20 to-white">
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

        {/* Video Testimonials */}
        {videoTestimonials.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {videoTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl"
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

            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  {testimonial.photo && (
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={testimonial.photo}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                        sizes="64px"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    {testimonial.role && (
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    )}
                    <p className="text-sm font-semibold text-primary">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{displayText}</p>
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
      </div>
    </section>
  );
}
