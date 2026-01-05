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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('info.title')}</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${t('email')}`}
                  className="flex items-center gap-4 text-gray-700 hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="text-primary group-hover:text-white" size={24} />
                  </div>
                  <span className="text-lg font-medium">{t('email')}</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/denisa-rohunov%C3%A1-001a25225/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-700 hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Linkedin className="text-primary group-hover:text-white" size={24} />
                  </div>
                  <span className="text-lg font-medium">{t('linkedin')}</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-xl border border-purple-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-primary text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-secondary transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <span>{t('form.sending')}</span>
                  </>
                ) : status === 'success' ? (
                  <span className="text-green-500">{t('form.success')}</span>
                ) : status === 'error' ? (
                  <span className="text-red-500">{t('form.error')}</span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>{t('form.submit')}</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Cal.com Booking */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {t('booking.title')}
          </h3>
          <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-200">
            <div className="relative w-full" style={{ minHeight: '600px' }}>
              <iframe
                src="https://cal.com/denisa-rohunova-k2mxqr/30min"
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
