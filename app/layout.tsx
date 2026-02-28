import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QuoteModalProvider } from "@/components/QuoteModalContext";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { ConditionalSiteLayout } from "@/components/ConditionalSiteLayout";
import AdvancedCursor from "@/components/AdvancedCursor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563eb",
};

export const metadata: Metadata = {
  title: "Koshatech | AI-Powered Software Development Company",
  description:
    "Koshatech builds web and mobile products plus AI features—strategy, design, engineering, and long-term support.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <AdvancedCursor />
        <SmoothScrollProvider>
          <QuoteModalProvider>
            <ConditionalSiteLayout>{children}</ConditionalSiteLayout>
          </QuoteModalProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
