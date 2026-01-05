'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const newLocale = locale === 'cs' ? 'en' : 'cs';

  const navLinks = [
    { href: '#about', label: t('about') },
    { href: '#services', label: t('services') },
    { href: '#testimonials', label: t('testimonials') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/photos/my-personal-brand-logo.png"
              alt="Denisa Rohunová"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            
            <Link
              href="/"
              locale={newLocale}
              className="px-3 py-1 text-sm font-medium text-gray-700 hover:text-primary border border-gray-300 rounded-md hover:border-primary transition-colors"
            >
              {locale === 'cs' ? 'EN' : 'CZ'}
            </Link>

            <a
              href="https://cal.com/denisa-rohunova-k2mxqr/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-secondary transition-colors shadow-lg hover:shadow-xl"
            >
              {t('cta')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/"
              locale={newLocale}
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-3 py-1 text-sm font-medium text-gray-700 hover:text-primary border border-gray-300 rounded-md hover:border-primary transition-colors"
            >
              {locale === 'cs' ? 'EN' : 'CZ'}
            </Link>
            <a
              href="https://cal.com/denisa-rohunova-k2mxqr/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-secondary transition-colors text-center"
            >
              {t('cta')}
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
