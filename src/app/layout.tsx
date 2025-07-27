import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FerriFresh - Premium Fresh Products | Natural Meat & Fresh Eggs",
  description: "Discover FerriFresh's premium fresh products - from hormone-free meat to fresh eggs. Experience the difference that natural, quality production makes in every bite.",
  keywords: "premium meat, fresh eggs, natural protein, hormone-free, fresh products, FerriFresh, quality food",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  robots: "noindex, nofollow",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
