"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

type Picture = { src: string; alt: string };

// Adapted from the portfolio viewer, with native modal focus containment.
export default function ImageLightbox({ images, initialIndex, children }: {
  images: Picture[];
  initialIndex: number;
  children: ReactNode;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(initialIndex);
  const current = images[index];

  useEffect(() => {
    if (!open) return;
    const modal = dialog.current!;
    const opener = trigger.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    modal.showModal();
    return () => {
      modal.close();
      document.body.style.overflow = previousOverflow;
      opener?.focus({ preventScroll: true });
    };
  }, [open]);

  function move(delta: number) {
    setIndex((value) => (value + delta + images.length) % images.length);
  }

  return <>
    <button ref={trigger} type="button" className="lightbox-trigger"
      aria-label={`Enlarge image: ${images[initialIndex].alt}`} aria-haspopup="dialog"
      onClick={() => { setIndex(initialIndex); setOpen(true); }}>
      {children}
      <span className="lightbox-hint">View larger ↗</span>
    </button>
    <dialog ref={dialog} className="image-lightbox" aria-label="Service image viewer"
      onCancel={() => setOpen(false)} onClose={() => setOpen(false)}
      onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          move(event.key === "ArrowRight" ? 1 : -1);
        }
      }}>
      {open && <>
        <button type="button" className="lightbox-close" aria-label="Close enlarged image"
          onClick={() => setOpen(false)}>×</button>
        <figure className="lightbox-figure">
          {/* Use the original asset so the enlarged image retains its detail. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={current.src} alt={current.alt} className="lightbox-image" />
          <figcaption aria-live="polite">{current.alt}</figcaption>
          {images.length > 1 && <div className="lightbox-navigation">
            <button type="button" aria-label="Previous image" onClick={() => move(-1)}>← Previous</button>
            <span>{index + 1} / {images.length}</span>
            <button type="button" aria-label="Next image" onClick={() => move(1)}>Next →</button>
          </div>}
          <p className="lightbox-instructions">Click outside or press Esc to close</p>
        </figure>
      </>}
    </dialog>
  </>;
}
