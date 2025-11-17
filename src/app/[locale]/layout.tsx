import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import ThemeRegistry from "@/components/system/ThemeRegistry";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { locales } from '@/i18n';
import "../globals.css";
import { colors } from "@/constants/colors";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: colors.primary,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isHr = locale === 'hr';
  
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://fractalbyte.studio'),
    title: isHr 
      ? "FRACTALBYTE - Sinonim za Digitalnu Izvrsnost | Web Razvoj Hrvatska"
      : "FRACTALBYTE - Synonym for Digital Excellence | Web Development Croatia",
    description: isHr
      ? "FRACTALBYTE specijaliziran za stvaranje zadivljujućih, visoko performantnih web stranica i aplikacija. Profesionalni web dizajn, razvoj, SEO optimizacija i digitalna rješenja u Hrvatskoj."
      : "FRACTALBYTE specializes in creating stunning, high-performance websites and web applications. Professional web design, development, SEO optimization, and digital solutions in Croatia.",
    keywords: isHr
      ? ['web razvoj', 'izrada web stranica', 'web dizajn', 'SEO optimizacija', 'web aplikacije', 'e-commerce', 'cloud hosting', 'UI/UX dizajn', 'responsive design', 'React', 'Next.js', 'Hrvatska', 'Zagreb', 'digitalna rješenja', 'web shop', 'održavanje web stranica']
      : ['web development', 'website creation', 'web design', 'SEO optimization', 'web applications', 'e-commerce', 'cloud hosting', 'UI/UX design', 'responsive design', 'React', 'Next.js', 'Croatia', 'Zagreb', 'digital solutions', 'web shop', 'website maintenance'],
    authors: [{ name: "FRACTALBYTE" }],
    creator: 'FRACTALBYTE',
    publisher: 'FRACTALBYTE',
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/fractalbyte-avatar.jpg',
    },
    manifest: '/manifest.json',
    alternates: {
      canonical: locale === 'hr' ? 'https://fractalbyte.studio' : 'https://fractalbyte.studio/en',
      languages: {
        'hr': 'https://fractalbyte.studio',
        'en': 'https://fractalbyte.studio/en',
      },
    },
    openGraph: {
      title: isHr
        ? "FRACTALBYTE - Web Razvoj & Digitalna Rješenja"
        : "FRACTALBYTE - Web Development & Digital Solutions",
      description: isHr
        ? "Profesionalni web razvoj, dizajn i SEO usluge u Hrvatskoj"
        : "Professional web development, design, and SEO services in Croatia",
      type: "website",
      locale: locale === 'hr' ? 'hr_HR' : 'en_US',
      alternateLocale: locale === 'hr' ? ['en_US'] : ['hr_HR'],
      url: locale === 'hr' ? 'https://fractalbyte.studio' : 'https://fractalbyte.studio/en',
      siteName: 'FRACTALBYTE',
      images: [
        {
          url: 'https://fractalbyte.studio/fractalbyte-avatar.jpg',
          width: 1200,
          height: 630,
          alt: 'FRACTALBYTE Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isHr
        ? "FRACTALBYTE - Web Razvoj & Digitalna Rješenja"
        : "FRACTALBYTE - Web Development & Digital Solutions",
      description: isHr
        ? "Profesionalni web razvoj, dizajn i SEO usluge u Hrvatskoj"
        : "Professional web development, design, and SEO services in Croatia",
      images: ['https://fractalbyte.studio/fractalbyte-avatar.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Validate locale
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <NextIntlClientProvider messages={messages} locale={locale}>
          <LanguageProvider>
            <ThemeRegistry>
              {children}
            </ThemeRegistry>
          </LanguageProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
