import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Metadata } from 'next';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://denisarohunova.cz';
  
  return {
    description: 'Denisa Rohunová - Zvýším efektivitu vašeho týmu +25%',
    openGraph: {
      title: 'Denisa Rohunová - Zvýším efektivitu vašeho týmu +25%',
      description: 'Your Guide to AI Transformation',
      type: 'website',
      images: [
        {
          url: `${baseUrl}/photos/profesional-portrait-of-me-top.jpeg`,
          width: 1200,
          height: 630,
          alt: 'Denisa Rohunová',
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
