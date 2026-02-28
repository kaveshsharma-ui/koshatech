import Link from "next/link";

export default function Project2Page() {
  return (
    <div className="min-h-screen py-16 px-6">
      <main className="mx-auto max-w-3xl">
        <Link href="/portfolio" className="text-sm text-zinc-600 hover:text-zinc-900">
          ← Back to Portfolio
        </Link>
        <h1 className="mt-8 text-4xl font-bold">Project 2</h1>
        <p className="mt-4 text-lg text-zinc-600">Project details and case study.</p>
        <p className="mt-6 text-zinc-700">Content goes here.</p>
      </main>
    </div>
  );
}
