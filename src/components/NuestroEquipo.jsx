// src/components/NuestroEquipo.jsx
"use client";
import { useEffect, useMemo, useRef, useState } from "react";

const TEAM = [
  { name: "Emily", role: "Front End Developer", img: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1400&auto=format&fit=crop", links:{fb:"#",ig:"#",tw:"#"} },
  { name: "Jon arshaf", role: "Marketer", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop", links:{fb:"#",ig:"#",tw:"#"} },
  { name: "Kani Jon", role: "Designer", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1400&auto=format&fit=crop", links:{fb:"#",ig:"#",tw:"#"} },
  { name: "Andrea", role: "ML Engineer", img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1400&auto=format&fit=crop", links:{fb:"#",ig:"#",tw:"#"} },
  { name: "Lucas", role: "Data Scientist", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1400&auto=format&fit=crop", links:{fb:"#",ig:"#",tw:"#"} },
  { name: "Nadia", role: "Product Manager", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1400&auto=format&fit=crop", links:{fb:"#",ig:"#",tw:"#"} },
];

// Iconos nítidos
const IconFB = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12H17l-.5 3h-2.5v7A10 10 0 0 0 22 12z"/></svg>
);
const IconIG = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
  </svg>
);
const IconTW = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.5.6-2.3.7a3.9 3.9 0 0 0-6.7 3.6A11 11 0 0 1 3.1 5.4a3.9 3.9 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.3 3.5 3 3.9-.3.1-.7.1-1 .1-.3 0-.5 0-.8-.1.6 1.7 2.9 2.9 4.1 2.9A7.8 7.8 0 0 1 2 19.6a11 11 0 0 0 6 1.8c7.2 0 11.2-6 11.2-11.2v-.5c.8-.5 1.5-1.2 2-2Z"/></svg>
);

export default function NuestroEquipo() {
  const [index, setIndex] = useState(0);
  const [cols, setCols] = useState(3);
  const trackRef = useRef(null);
  const [gapPx, setGapPx] = useState(24);  // gap real en px
  const [stepPx, setStepPx] = useState(0); // desplazamiento = card + gap

  // Responsivo: 3/2/1 columnas
  useEffect(() => {
    const computeCols = () => {
      const w = window.innerWidth;
      if (w >= 1024) setCols(3);
      else if (w >= 640) setCols(2);
      else setCols(1);
    };
    const computeGeometry = () => {
      const track = trackRef.current;
      if (!track) return;
      const styles = getComputedStyle(track);
      const g = parseFloat(styles.columnGap || styles.gap || "0") || 0;
      setGapPx(g);

      const first = track.firstElementChild;
      if (first) {
        const w = first.getBoundingClientRect().width;
        setStepPx(w + g); // mover en píxeles exactos
      }
    };

    computeCols();
    computeGeometry();
    window.addEventListener("resize", computeCols);
    window.addEventListener("resize", computeGeometry);
    return () => {
      window.removeEventListener("resize", computeCols);
      window.removeEventListener("resize", computeGeometry);
    };
  }, []);

  // Si cambian columnas, corregir índice para no pasar el final
  useEffect(() => {
    setIndex((i) => Math.min(i, Math.max(0, TEAM.length - cols)));
  }, [cols]);

  const maxIndex = useMemo(() => Math.max(0, TEAM.length - cols), [cols]);

  const prev = () => setIndex((i) => Math.max(0, i - cols));
  const next = () => setIndex((i) => Math.min(maxIndex, i + cols));

  // ANCHO REAL de cada card (evita recortes por el gap)
  const cardBasis = useMemo(
    () => `calc((100% - ${gapPx * (cols - 1)}px) / ${cols})`,
    [gapPx, cols]
  );

  return (
    <section id="NuestroEquipo" className="w-full bg-[#F2F5F8] py-14 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-4xl font-extrabold text-blue-600">Nuestro equipo</h2>

        <div className="flex items-end justify-between gap-6">
          {/* Viewport */}
          <div className="relative flex-1 overflow-hidden rounded-[18px]">
            {/* Track */}
            <div
              ref={trackRef}
              className="flex gap-6 transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)]"
              style={{ transform: `translateX(-${index * stepPx}px)` }}
            >
              {TEAM.map((m, i) => (
                <article
                  key={i}
                  className="relative overflow-hidden rounded-2xl bg-white shadow-[0_18px_40px_rgba(0,0,0,.22)]"
                  style={{ flex: `0 0 ${cardBasis}` }}
                >
                  <div className="relative">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="h-[340px] w-full rounded-t-2xl object-cover"
                      style={{ filter: "grayscale(100%) brightness(55%) contrast(112%)" }}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-t-2xl bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                  </div>

                  <div className="rounded-b-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 px-5 pb-5 pt-4 text-white">
                    <div className="mb-3 h-[2px] w-full bg-white/30" />
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-[18px] font-extrabold leading-5">{m.name}</p>
                        <p className="text-sm opacity-90">{m.role}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <a href={m.links.fb} aria-label={`${m.name} Facebook`} className="grid h-8 w-8 place-items-center rounded-full bg-white text-blue-600 shadow hover:opacity-90"><IconFB /></a>
                        <a href={m.links.ig} aria-label={`${m.name} Instagram`} className="grid h-8 w-8 place-items-center rounded-full bg-white text-pink-600 shadow hover:opacity-90"><IconIG /></a>
                        <a href={m.links.tw} aria-label={`${m.name} Twitter`} className="grid h-8 w-8 place-items-center rounded-full bg-white text-sky-600 shadow hover:opacity-90"><IconTW /></a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Botones */}
          <div className="hidden shrink-0 items-center gap-4 lg:flex">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="grid h-12 w-12 place-items-center rounded-full bg-neutral-700 text-white shadow hover:bg-neutral-800 disabled:opacity-50"
              disabled={index === 0}
            >
              <span className="-ml-0.5 text-2xl">←</span>
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="grid h-12 w-12 place-items-center rounded-full bg-neutral-700 text-white shadow hover:bg-neutral-800 disabled:opacity-50"
              disabled={index === maxIndex}
            >
              <span className="ml-0.5 text-2xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
