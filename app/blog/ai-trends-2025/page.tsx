import Link from "next/link";

export default function AiTrends2025Page() {
  return (
    <div className="min-h-screen py-16 px-6">
      <main className="mx-auto max-w-3xl">
        <Link href="/blog" className="text-sm text-zinc-600 hover:text-zinc-900">
          ← Back to Blog
        </Link>
        <h1 className="mt-8 text-4xl font-bold">AI Trends 2025</h1>
        <p className="mt-4 text-lg text-zinc-600">
          Exploring the latest AI trends and what to expect in 2025.
        </p>
        <p className="mt-6 text-zinc-700">Article content goes here.</p>
      </main>
    </div>
  );
}
