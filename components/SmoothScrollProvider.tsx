"use client";

import { useEffect, useRef } from "react";

const MOBILE_BREAKPOINT = 768;

function isMobileOrTouch() {
  if (typeof window === "undefined") return true;
  return (
    window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches ||
    window.matchMedia("(pointer: coarse)").matches
  );
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<unknown>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (isMobileOrTouch()) return;

    type LenisConstructor = new (opts?: Record<string, unknown>) => { stop(): void; start(): void; destroy(): void };
    function initLenis(Lenis: LenisConstructor) {
      const lenis = new Lenis({
        lerp: 0.1,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 0.9,
        syncTouch: true,
        touchMultiplier: 1.2,
        infinite: false,
        overscroll: true,
        autoRaf: true,
        stopInertiaOnNavigate: true,
        anchors: { offset: 80 },
      });

      lenisRef.current = lenis;

      const lenisApi = lenis as { stop(): void; start(): void; destroy(): void };
      const checkModalState = () => {
        if (lenisRef.current) {
          const api = lenisRef.current as { stop(): void; start(): void };
          if (document.body.style.overflow === "hidden") api.stop();
          else api.start();
        }
      };

      const observer = new MutationObserver(checkModalState);
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ["style"],
      });

      cleanupRef.current = () => {
        observer.disconnect();
        lenisApi.destroy();
      };
    }

    // Defer Lenis load and init to idle so it doesn't block main-thread parse/compile
    const id =
      typeof requestIdleCallback !== "undefined"
        ? requestIdleCallback(
            (deadline) => {
              const doInit = () => {
                import("lenis").then((mod) => {
                  initLenis(mod.default as LenisConstructor);
                });
              };
              if (deadline.timeRemaining() > 0) doInit();
              else setTimeout(doInit, 0);
            },
            { timeout: 800 }
          )
        : setTimeout(
            () => import("lenis").then((mod) => initLenis(mod.default as LenisConstructor)),
            0
          );

    return () => {
      if (typeof id === "number") {
        if (typeof cancelIdleCallback !== "undefined") cancelIdleCallback(id);
        else clearTimeout(id);
      }
      cleanupRef.current?.();
      cleanupRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
