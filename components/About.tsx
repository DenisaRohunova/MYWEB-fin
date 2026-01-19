'use client';

import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { Code, Sparkles, Phone, Heart, Trophy, Award, Users, Briefcase, ArrowRight } from 'lucide-react';

export default function About() {
  const t = useTranslations('about');
  const tHero = useTranslations('hero');
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const storySteps = [
    {
      icon: Trophy,
      title: t('storySteps.step1.title'),
      content: t('storySteps.step1.content'),
      position: "left"
    },
    {
      icon: Code,
      title: t('storySteps.step2.title'),
      content: t('storySteps.step2.content'),
      position: "right"
    },
    {
      icon: Phone,
      title: t('storySteps.step3.title'),
      content: t('storySteps.step3.content'),
      position: "left"
    },
    {
      icon: Award,
      title: t('storySteps.step4.title'),
      content: t('storySteps.step4.content'),
      position: "right"
    },
    {
      icon: Heart,
      title: t('storySteps.step5.title'),
      content: t('storySteps.step5.content'),
      position: "left"
    }
  ];

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0514] via-[#1a0a2e] to-[#0a0514] overflow-hidden min-h-screen"
    >
      {/* Background Image - More Visible */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/photos/me-speaking-at-conference-top.jpeg"
          alt="Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

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
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black gradient-text mb-4 sm:mb-6">
            {t('title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Story Timeline - Mobile Optimized */}
        <div className="relative">
          {/* Vertical Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary opacity-30 hidden lg:block" />

          {/* Story Steps */}
          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {storySteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = step.position === 'left';
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Mobile Layout - Centered */}
                  <div className="lg:hidden flex flex-col items-center">
                    {/* Timeline Dot */}
                    <div className="relative z-10 mb-6">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center border-4 border-[#0a0514] shadow-lg glow-effect"
                      >
                        <Icon className="text-white" size={20} />
                      </motion.div>
                    </div>
                    
                    {/* Content Card */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="w-full bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl p-6 border-2 border-primary/20 glow-effect"
                    >
                      <div className="flex items-center gap-3 justify-center mb-4">
                        <div className="p-2 bg-primary/20 rounded-lg">
                          <Icon className="text-primary" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-base text-center">
                        {step.content}
                      </p>
                    </motion.div>
                  </div>

                  {/* Desktop Layout - Alternating */}
                  <div className={`hidden lg:flex items-center gap-8 ${
                    isLeft ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    {/* Content Card */}
                    <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                      <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className={`inline-block bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl p-8 border-2 border-primary/20 glow-effect max-w-lg ${
                          isLeft ? 'ml-auto' : 'mr-auto'
                        }`}
                      >
                        <div className={`flex items-center gap-4 ${isLeft ? 'justify-end' : 'justify-start'} mb-4`}>
                          <div className="p-3 bg-primary/20 rounded-xl">
                            <Icon className="text-primary" size={32} />
                          </div>
                          <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {step.content}
                        </p>
                      </motion.div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center border-4 border-[#0a0514] shadow-lg glow-effect"
                      >
                        <Icon className="text-white" size={24} />
                      </motion.div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Main Photo - Single */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 sm:mt-32 flex justify-center"
        >
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-2xl overflow-hidden border-2 border-primary/30 glow-effect">
            <Image
              src="/photos/portrait-of-me-top.jpeg"
              alt="Denisa Rohunová"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Closing Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 sm:mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl p-6 sm:p-10 border-2 border-primary/20 max-w-4xl">
            <p className="text-xl sm:text-2xl lg:text-3xl text-white font-bold leading-relaxed mb-4">
              "Věřím, že skutečná digitální transformace začíná vytvořením bezpečného prostředí, kde se lidé nebojí ptát a experimentovat."
            </p>
            <p className="text-base sm:text-lg text-gray-300 mb-8">
              Mám technickou expertízu, abych navrhla ta nejefektivnější řešení a mou superschopností je empatie.
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
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
