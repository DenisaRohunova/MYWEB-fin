'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const t = useTranslations('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Sledování pohybu myši
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Definice pružných hodnot pro animaci
  const x = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 });
  const y = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 });

  // Transformace hodnot pro jemný paralax efekt
  const mouseX = useTransform(x, (value) => value * 0.05);
  const mouseY = useTransform(y, (value) => value * 0.05);

  // Aktualizace pružin podle pozice myši
  useEffect(() => {
    x.set(mousePosition.x - window.innerWidth / 2);
    y.set(mousePosition.y - window.innerHeight / 2);
  }, [mousePosition, x, y]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0514] via-[#1a0a2e] to-[#0a0514]">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(97, 0, 209, ${Math.random() * 0.5 + 0.2})`,
            }}
            animate={{
              y: [0, -Math.random() * 200 - 100, 0],
              x: [0, (Math.random() - 0.5) * 100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Dynamic Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[57.6px] sm:text-[69.12px] lg:text-[92.16px] font-black leading-[1.2] text-white pb-4 overflow-visible break-words"
            >
              <span className="block gradient-text">
                {(() => {
                  const headline = t('headline').trim();
                  if (headline.includes(' v praxi')) {
                    const parts = headline.split(' v praxi');
                    return (
                      <>
                        {parts[0]} <span className="whitespace-nowrap">v praxi</span>
                      </>
                    );
                  }
                  if (headline.includes(' in practice')) {
                    const parts = headline.split(' in practice');
                    return (
                      <>
                        {parts[0]} <span className="whitespace-nowrap">in practice</span>
                      </>
                    );
                  }
                  return headline;
                })()}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl"
            >
              {t('subheadline')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#booking"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-lg font-bold text-lg overflow-hidden glow-effect"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{t('cta')}</span>
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
          </motion.div>

          {/* Image with Parallax Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative"
            style={{
              x: mouseX,
              y: mouseY,
            }}
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-primary/30 glow-effect">
              <Image
                src="/photos/me-speaking-at-conference-top.jpeg"
                alt="Denisa Rohunová"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-transparent to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-8 -right-8 w-24 h-24 bg-primary/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [360, 180, 0],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}