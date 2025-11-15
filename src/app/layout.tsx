import type { Metadata, Viewport } from "next";
import ThemeRegistry from "@/components/ThemeRegistry";
import "./globals.css";

export const metadata: Metadata = {
  title: "FRACTALBYTE - Crafting Digital Excellence Through Code",
  description: "FRACTALBYTE specializes in creating stunning, high-performance websites and web applications. Web design, development, and digital solutions.",
  keywords: ["web development", "web design", "React", "Next.js", "digital solutions", "Croatia"],
  authors: [{ name: "FRACTALBYTE" }],
  icons: {
    icon: "/fractalbyte-avatar.jpg",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
