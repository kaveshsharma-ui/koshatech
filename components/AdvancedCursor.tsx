"use client";

import { useEffect, useRef } from "react";

export default function AdvancedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on non-touch devices and if user doesn't prefer reduced motion
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const cursor = cursorRef.current;
    const mediaContainer = mediaRef.current;

    if (!cursor || !mediaContainer) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const speed = 0.18;
    let rafId: number | null = null;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      if (cursor) {
        cursor.style.transform = `translate3d(${currentX - 12}px, ${currentY - 12}px, 0)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const handleEnter = (target: HTMLElement) => {
      // New API: data-type=\"image|video\" and data-value=\"/path/to/media\"
      const type = (target.dataset.type || "").toLowerCase();
      const src = target.dataset.value;

      if (!cursor) return;

      cursor.style.width = "150px";
      cursor.style.height = "150px";
      cursor.style.background = "transparent";
      cursor.style.border = "none";
      cursor.style.boxShadow = "none";
      cursor.style.mixBlendMode = "normal";

      mediaContainer.innerHTML = "";

      if (type === "video" && src) {
        const video = document.createElement("video");
        video.src = src;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;
        video.style.width = "100%";
        video.style.height = "100%";
        video.style.objectFit = "cover";
        video.style.borderRadius = "50%";
        mediaContainer.appendChild(video);
      }

      if (type === "image" && src) {
        const img = document.createElement("img");
        img.src = src;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";
        img.style.borderRadius = "50%";
        mediaContainer.appendChild(img);
      }
    };

    const handleLeave = () => {
      if (!cursor) return;

      cursor.style.width = "24px";
      cursor.style.height = "24px";
      cursor.style.background = "#000000";
      cursor.style.border = "none";
      cursor.style.boxShadow = "none";
      cursor.style.mixBlendMode = "normal";
      mediaContainer.innerHTML = "";
    };

    // Use event delegation for dynamic elements
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closest = target.closest("[data-type][data-value]");
      if (closest) {
        handleEnter(closest as HTMLElement);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closest = target.closest("[data-type][data-value]");
      if (closest) {
        handleLeave();
      }
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);
    animate();

    // Add class to body to hide default cursor
    document.body.classList.add("has-advanced-cursor");

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      document.body.classList.remove("has-advanced-cursor");
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="advanced-cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "24px",
        height: "24px",
        background: "#000000",
        border: "none",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate3d(0,0,0)",
        willChange: "transform",
        overflow: "hidden",
        transition:
          "width 0.3s ease, height 0.3s ease, background 0.3s ease, border 0.3s ease",
        boxShadow: "none",
        mixBlendMode: "normal",
      }}
    >
      <div
        ref={mediaRef}
        style={{ width: "100%", height: "100%", borderRadius: "50%" }}
      />
    </div>
  );
}
