import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic", "latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "CC Route — настройка Claude и Claude Code",
  description: "Профессиональная настройка рабочей среды для Claude и Claude Code на ваших устройствах — с проверкой, передачей доступов и понятной инструкцией.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${spaceMono.variable}`}>{children}</body>
    </html>
  );
}
