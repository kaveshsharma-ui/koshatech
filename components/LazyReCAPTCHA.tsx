"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), {
  ssr: false,
});

type ReCAPTCHAProps = React.ComponentProps<typeof ReCAPTCHA>;

interface LazyReCAPTCHAProps extends Omit<ReCAPTCHAProps, "ref"> {
  /** When true, mount reCAPTCHA immediately (e.g. modal is open). Otherwise load when container is in view. */
  ready?: boolean;
  /** Optional ref to pass to the underlying ReCAPTCHA instance */
  recaptchaRef?: React.RefObject<unknown>;
}

/**
 * Loads Google reCAPTCHA only when the form is in view (or when ready=true).
 * Reduces third-party script and cookie impact until the user needs to submit.
 */
export function LazyReCAPTCHA({
  ready = false,
  recaptchaRef,
  ...props
}: LazyReCAPTCHAProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const shouldLoad = ready || inView;

  useEffect(() => {
    if (ready) return;
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setInView(true);
      },
      { rootMargin: "100px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ready]);

  return (
    <div ref={containerRef} className="flex justify-center min-h-[78px]">
      {shouldLoad ? (
        <ReCAPTCHA
          {...props}
          {...(recaptchaRef && { ref: recaptchaRef as React.RefObject<React.ComponentRef<typeof ReCAPTCHA>> })}
        />
      ) : (
        <span className="text-sm text-inherit opacity-70" aria-hidden="true">
          Loading verification…
        </span>
      )}
    </div>
  );
}
