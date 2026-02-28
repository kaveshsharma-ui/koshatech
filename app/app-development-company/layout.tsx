import type { Metadata } from "next";
import { QuoteModal } from "@/components/QuoteModal";

export const metadata: Metadata = {
  title: "Mobile App Development | Koshatech",
  description:
    "Design, build, and launch high-quality mobile apps with a senior engineering team.",
};

export default function AppDevelopmentCompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <QuoteModal />
    </>
  );
}
