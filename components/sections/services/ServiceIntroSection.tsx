import Link from "next/link";

interface IntroData {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
}

interface Props {
  data: IntroData;
}

export function ServiceIntroSection({ data }: Props) {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="section-heading">{data.heading}</h2>
        <p className="mt-6 text-lg text-slate-600">{data.body}</p>
        <Link href={data.ctaHref} className="btn-primary mt-8 inline-block" data-cursor-exclude>
          {data.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
