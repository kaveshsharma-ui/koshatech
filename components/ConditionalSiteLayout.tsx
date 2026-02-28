"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const QuoteModal = dynamic(
  () => import("@/components/QuoteModal").then((m) => ({ default: m.QuoteModal })),
  { ssr: false }
);

const APP_DEV_PATH = "/app-development-company";

export function ConditionalSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAppDevPage = pathname?.startsWith(APP_DEV_PATH) ?? false;

  if (isAppDevPage) {
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
