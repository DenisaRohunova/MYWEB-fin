'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0514] via-[#1a0a2e] to-[#0a0514] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl" />
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">{t('info.title')}</h3>
              <div className="space-y-6">
                <motion.a
                  href={`mailto:${t('email')}`}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
                >
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors border border-primary/30">
                    <Mail className="text-primary group-hover:text-white" size={28} />
                  </div>
                  <span className="text-xl font-medium">{t('email')}</span>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/denisa-rohunov%C3%A1-001a25225/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group"
                >
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors border border-primary/30">
                    <Linkedin className="text-primary group-hover:text-white" size={28} />
                  </div>
                  <span className="text-xl font-medium">{t('linkedin')}</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl rounded-2xl p-10 border-2 border-primary/20 glow-effect"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-white/5 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-white/5 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-white/5 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-4 rounded-lg font-bold text-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 glow-effect transition-all"
              >
                {status === 'sending' ? (
                  <>
                    <span>{t('form.sending')}</span>
                  </>
                ) : status === 'success' ? (
                  <span className="text-green-400">{t('form.success')}</span>
                ) : status === 'error' ? (
                  <span className="text-red-400">{t('form.error')}</span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>{t('form.submit')}</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Cal.com Booking */}
        <motion.div
          id="booking"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-10">
            {t('booking.title')}
          </h3>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-4 border-2 border-primary/20">
            <div className="relative w-full" style={{ minHeight: '600px' }}>
              <iframe
                src="https://cal.com/denisa-rohunova-k2mxqr/15min?overlayCalendar=true&date=2026-02-26"
                className="w-full h-full min-h-[600px] rounded-lg"
                frameBorder="0"
                title="Book a consultation"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
