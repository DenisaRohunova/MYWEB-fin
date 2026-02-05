'use client';

import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Award, Trophy, GraduationCap, Briefcase, Globe, Lightbulb, ChevronDown } from 'lucide-react';

interface CardData {
  id: string;
  icon: any;
  title: string;
  shortText: string;
  fullText?: string;
  image?: string;
  imageAlt?: string;
  logo?: string;
  logoAlt?: string;
  hasExpandable?: boolean;
}

export default function About() {
  const t = useTranslations('about');
  const tHero = useTranslations('hero');
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const toggleExpand = (id: string) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const cards: CardData[] = [
    {
      id: 'experience',
      icon: Briefcase,
      title: t('cards.experience.title'),
      shortText: t('cards.experience.shortText'),
      image: '/photos/me-speaking-at-conference-panel-top.jpeg',
      imageAlt: t('cards.experience.imageAlt'),
    },
    {
      id: 'computertrends',
      icon: Trophy,
      title: t('cards.computertrends.title'),
      shortText: t('cards.computertrends.shortText'),
      image: '/photos/computertrends.jpg',
      imageAlt: t('cards.computertrends.imageAlt'),
    },
    {
      id: 'innovation',
      icon: Award,
      title: t('cards.innovation.title'),
      shortText: t('cards.innovation.shortText'),
      fullText: t('cards.innovation.fullText'),
      image: '/photos/EU.jpg',
      imageAlt: t('cards.innovation.imageAlt'),
      hasExpandable: true,
    },
    {
      id: 'president',
      icon: Award,
      title: t('cards.president.title'),
      shortText: t('cards.president.shortText'),
      image: '/photos/prezident.jpg',
      imageAlt: t('cards.president.imageAlt'),
    },
    {
      id: 'squash',
      icon: Trophy,
      title: t('cards.squash.title'),
      shortText: t('cards.squash.shortText'),
      image: '/photos/me-playing-squash.jpg',
      imageAlt: t('cards.squash.imageAlt'),
    },
    {
      id: 'education',
      icon: GraduationCap,
      title: t('cards.education.title'),
      shortText: t('cards.education.fullText'),
    },
    {
      id: 'taskyo',
      icon: Briefcase,
      title: t('cards.taskyo.title'),
      shortText: t('cards.taskyo.shortText'),
      fullText: t('cards.taskyo.fullText'),
      logo: '/photos/my-company-logo.avif',
      logoAlt: t('cards.taskyo.logoAlt'),
      hasExpandable: true,
    },
    {
      id: 'international',
      icon: Globe,
      title: t('cards.international.title'),
      shortText: t('cards.international.shortText'),
      image: '/photos/me-with-microfone-talking2.jpg',
      imageAlt: t('cards.international.imageAlt'),
    },
    {
      id: 'lab',
      icon: Lightbulb,
      title: t('cards.lab.title'),
      shortText: t('cards.lab.shortText'),
    },
  ];

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative pt-12 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0514] via-[#1a0a2e] to-[#0a0514] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black gradient-text mb-4 sm:mb-6">
            {t('title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isExpanded = expandedCards.has(card.id);
            const showFullText = !card.hasExpandable || isExpanded;
            
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="inline-flex p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors">
                      <Icon className="text-primary" size={24} />
                    </div>
                  </div>

                  {/* Image or Logo */}
                  {card.image && (
                    <div className="relative w-full h-48 sm:h-56 mb-4 rounded-xl overflow-hidden border border-primary/20">
                      <Image
                        src={card.image}
                        alt={card.imageAlt || card.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}

                  {card.logo && (
                    <div className="relative w-full h-24 mb-4 rounded-xl overflow-hidden flex items-center justify-center bg-white/5">
                      <Image
                        src={card.logo}
                        alt={card.logoAlt || card.title}
                        width={120}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {card.title}
                  </h3>

                  {/* Content */}
                  <div className="flex-1 text-gray-300 leading-relaxed text-sm sm:text-base">
                    <p className={showFullText ? '' : 'line-clamp-3'}>
                      {showFullText && card.fullText ? card.fullText : card.shortText}
                    </p>
                  </div>

                  {/* Expand Button */}
                  {card.hasExpandable && card.fullText && (
                    <button
                      onClick={() => toggleExpand(card.id)}
                      className="mt-4 flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm font-medium group/btn"
                    >
                      <span>{isExpanded ? t('showLess') : t('showMore')}</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={18} className="group-hover/btn:translate-y-0.5 transition-transform" />
                      </motion.div>
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <motion.a
            href="#booking"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-bold text-base sm:text-lg overflow-hidden glow-effect"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">{tHero('cta')}</span>
            <motion.div
              className="relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary to-primary"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
