"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./ImageLightbox.module.css";

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageLightbox({ src, alt, className }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const modalContent = isOpen ? (
    <div className={styles.overlay} onClick={() => setIsOpen(false)}>
      <button
        className={styles.closeBtn}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(false);
        }}
        aria-label="Close lightbox"
      >
        ✕
      </button>
      
      <div className={styles.imageContainer} onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className={styles.fullImage} />
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Thumbnail */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`${className || ""} ${styles.trigger}`}
        onClick={() => setIsOpen(true)}
        aria-label="View fullscreen image"
      />

      {/* Lightbox Overlay */}
      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}
