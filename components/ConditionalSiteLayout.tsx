"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const QuoteModal = dynamic(
  () => import("@/components/QuoteModal").then((m) => ({ default: m.QuoteModal })),
  { ssr: false }
);

const EXCLUDED_PATHS = ["/app-development-company", "/lp"];

export function ConditionalSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isExcluded = EXCLUDED_PATHS.some((p) => pathname?.startsWith(p)) ?? false;

  if (isExcluded) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
      <QuoteModal />
    </>
  );
}
