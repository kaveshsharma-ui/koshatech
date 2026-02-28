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
        // Adjust offset based on cursor size (button is wider, so center it)
        const widthStr = cursor.style.width || "24px";
        const heightStr = cursor.style.height || "24px";
        const width = parseFloat(widthStr.replace("px", "")) || 24;
        const height = parseFloat(heightStr.replace("px", "")) || 24;
        cursor.style.transform = `translate3d(${currentX - width / 2}px, ${currentY - height / 2}px, 0)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    const handleEnter = (target: HTMLElement) => {
      // New API: data-type=\"image|video|button\" and data-value=\"/path/to/media\" (optional for button)
      const type = (target.dataset.type || "").toLowerCase();
      const src = target.dataset.value;

      if (!cursor) return;

      mediaContainer.innerHTML = "";

      if (type === "button") {
        // Button cursor: oval shape with "Click" text
        cursor.style.width = "120px";
        cursor.style.height = "48px";
        cursor.style.background = "#000000";
        cursor.style.border = "none";
        cursor.style.borderRadius = "24px";
        cursor.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
        cursor.style.mixBlendMode = "normal";
        cursor.style.display = "flex";
        cursor.style.alignItems = "center";
        cursor.style.justifyContent = "center";

        // Update mediaContainer to work with flex layout
        mediaContainer.style.width = "100%";
        mediaContainer.style.height = "100%";
        mediaContainer.style.borderRadius = "24px";
        mediaContainer.style.display = "flex";
        mediaContainer.style.alignItems = "center";
        mediaContainer.style.justifyContent = "center";

        const clickText = document.createElement("span");
        clickText.textContent = "Click";
        clickText.style.color = "#ffffff";
        clickText.style.fontSize = "14px";
        clickText.style.fontWeight = "600";
        clickText.style.letterSpacing = "0.5px";
        mediaContainer.appendChild(clickText);
      } else if (type === "video" && src) {
        // Video cursor: circular with video
        cursor.style.width = "150px";
        cursor.style.height = "150px";
        cursor.style.background = "transparent";
        cursor.style.border = "none";
        cursor.style.borderRadius = "50%";
        cursor.style.boxShadow = "none";
        cursor.style.mixBlendMode = "normal";
        cursor.style.display = "block";

        // Reset mediaContainer for video/image
        mediaContainer.style.width = "100%";
        mediaContainer.style.height = "100%";
        mediaContainer.style.borderRadius = "50%";
        mediaContainer.style.display = "block";

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
      } else if (type === "image" && src) {
        // Image cursor: circular with image
        cursor.style.width = "150px";
        cursor.style.height = "150px";
        cursor.style.background = "transparent";
        cursor.style.border = "none";
        cursor.style.borderRadius = "50%";
        cursor.style.boxShadow = "none";
        cursor.style.mixBlendMode = "normal";
        cursor.style.display = "block";

        // Reset mediaContainer for video/image
        mediaContainer.style.width = "100%";
        mediaContainer.style.height = "100%";
        mediaContainer.style.borderRadius = "50%";
        mediaContainer.style.display = "block";

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
      cursor.style.borderRadius = "50%";
      cursor.style.boxShadow = "none";
      cursor.style.mixBlendMode = "normal";
      cursor.style.display = "block";
      cursor.style.alignItems = "";
      cursor.style.justifyContent = "";
      
      // Reset mediaContainer
      mediaContainer.style.width = "100%";
      mediaContainer.style.height = "100%";
      mediaContainer.style.borderRadius = "50%";
      mediaContainer.style.display = "block";
      mediaContainer.style.alignItems = "";
      mediaContainer.style.justifyContent = "";
      mediaContainer.innerHTML = "";
    };

    // Track the element currently showing media, so we don't recreate it
    // every time the cursor moves between child nodes inside the same element.
    let activeTarget: HTMLElement | null = null;

    const handleMouseEnter = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      // Skip if the target or any parent has data-cursor-exclude
      if (e.target.closest("[data-cursor-exclude]")) return;
      // Look for elements with data-type (button doesn't need data-value)
      const closest = e.target.closest("[data-type]") as HTMLElement | null;
      // Only fire handleEnter when we move into a *different* target
      if (closest && closest !== activeTarget) {
        activeTarget = closest;
        handleEnter(closest);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      // Skip if the target or any parent has data-cursor-exclude
      if (e.target.closest("[data-cursor-exclude]")) return;
      // Look for elements with data-type (button doesn't need data-value)
      const closest = e.target.closest("[data-type]") as HTMLElement | null;
      if (closest && closest === activeTarget) {
        // Only reset when the cursor truly leaves the element —
        // relatedTarget must be outside the active target.
        const related = e.relatedTarget as Element | null;
        if (!related || !closest.contains(related)) {
          activeTarget = null;
          handleLeave();
        }
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
