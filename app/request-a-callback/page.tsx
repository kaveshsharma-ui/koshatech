import Image from "next/image";

export const metadata = {
  title: "Request A Callback | Koshatech",
  description: "Get in touch with Koshatech.",
};

export default function RequestCallbackPage() {
  return (
    <main className="bg-[#f3f3f3]">
      {/* HERO SECTION */}
      <section className="container mx-auto px-8 py-28">
        <div className="grid md:grid-cols-2 items-center gap-20">
          {/* LEFT SIDE */}
          <div>
            <div className="flex gap-20">
              <div>
                <h2 className="text-5xl font-bold text-primary-700">230+</h2>
                <p className="mt-3 text-lg text-gray-600">Happy Clients</p>
              </div>

              <div>
                <h2 className="text-5xl font-bold text-primary-700">100%</h2>
                <p className="mt-3 text-lg text-gray-600">
                  Client Satisfaction
                </p>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-12">
              <a
                href="https://api.whatsapp.com/send/?phone=918924099542&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-md bg-primary-600 px-10 py-4 text-white text-lg shadow-md transition hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M16 .4C7.2.4.1 7.5.1 16.3c0 2.9.8 5.7 2.3 8.1L0 32l7.9-2.3c2.3 1.3 5 2 7.8 2 8.8 0 15.9-7.1 15.9-15.9S24.8.4 16 .4zm0 29c-2.5 0-5-.7-7.1-2l-.5-.3-4.7 1.4 1.5-4.6-.3-.5c-1.4-2.2-2.1-4.7-2.1-7.2 0-7.4 6-13.4 13.4-13.4s13.4 6 13.4 13.4-6 13.4-13.4 13.4zm7.3-9.8c-.4-.2-2.5-1.2-2.9-1.4-.4-.2-.6-.2-.9.2-.2.4-1 1.4-1.2 1.6-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.8-1.1-1-1.8-2.3-2-2.7-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.2-.4.4-.6.1-.2.1-.5 0-.7-.1-.2-.9-2.2-1.2-3-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .4-.3.3-1.3 1.3-1.3 3.2s1.3 3.7 1.5 3.9c.2.2 2.5 3.8 6 5.2.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 2.5-1 2.9-2 .4-1 .4-1.9.3-2-.1-.1-.4-.2-.8-.4z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center">

    
    <video
      src="/partners/contact.mp4"
      
      autoPlay
      loop
      muted
      playsInline
    />


</div>
        </div>
      </section>

      {/* CLIENT LOGOS SECTION */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-8">
          <div className="flex flex-wrap items-center justify-between gap-16 opacity-90">
            <Image src="/client/panasonic.png" alt="Panasonic" width={80} height={32} className="h-8 w-auto" />
            <Image src="/client/hero.png" alt="Hero" width={100} height={40} className="h-10 w-auto" />
            <Image src="/client/eicher.png" alt="Eicher" width={80} height={32} className="h-8 w-auto" />
            <Image src="/client/pvr.png" alt="PVR" width={100} height={40} className="h-10 w-auto" />
            <Image src="/client/relaxo.png" alt="Relaxo" width={80} height={32} className="h-8 w-auto" />
            <Image src="/client/skf.png" alt="SKF" width={100} height={40} className="h-10 w-auto" />
          </div>
        </div>
      </section>
    </main>
  );
}
