import type { Metadata, Viewport } from "next";
import ThemeRegistry from "@/components/ThemeRegistry";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "./globals.css";
import { colors } from "@/constants/colors";

export const metadata: Metadata = {
  metadataBase: new URL('https://fractalbyte.studio'),
  title: "FRACTALBYTE - Crafting Digital Excellence Through Code | Web Development Croatia",
  description: "FRACTALBYTE specializes in creating stunning, high-performance websites and web applications. Professional web design, development, SEO optimization, and digital solutions in Croatia.",
  authors: [{ name: "FRACTALBYTE" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/fractalbyte-avatar.jpg",
  },
  openGraph: {
    title: "FRACTALBYTE - Web Development & Digital Solutions",
    description: "Professional web development, design, and SEO services in Croatia",
    type: "website",
    locale: "hr_HR",
    alternateLocale: ["en_US"],
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: colors.primary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body>
        <ThemeRegistry>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
