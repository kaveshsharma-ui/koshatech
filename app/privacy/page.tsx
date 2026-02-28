export const metadata = {
  title: "Privacy Policy | Koshatech",
  description: "Privacy policy for Koshatech.",
};

export default function PrivacyPage() {
  return (
    <main>
      <div className="border-b border-slate-200 bg-white py-16 text-center">
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">Privacy Policy</h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          How we collect, use, and protect your information.
        </p>
      </div>
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-3xl px-4 prose prose-slate">
          <p>
            This is a placeholder privacy policy. Replace with your actual
            privacy policy content. We use technologies like cookies to store
            and/or access device information to provide the best experiences.
          </p>
        </div>
      </section>
    </main>
  );
}
