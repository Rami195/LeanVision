// src/components/NuestroEquipo.jsx
"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const TEAM = [
  { name: "Luis Vivanco", role: "CEO & Project Manager", img: "/persona1.png", links: { fb: "#", ig: "#", tw: "#" } },
  { name: "Luciano Esperlazza", role: "CTO in Engineering", img: "/persona2.png", links: { fb: "#", ig: "#", tw: "#" } },
  { name: "Pilar Rodriguez", role: "Business Manager", img: "/persona3.png", links: { fb: "#", ig: "#", tw: "#" } },
  { name: "Denis Illesca", role: "Data Scientist & Engineering", img: "/persona4.png", links: { fb: "#", ig: "#", tw: "#" } },
  { name: "Florencia Herreira", role: "Product Marketing Specialist", img: "/persona5.png", links: { fb: "#", ig: "#", tw: "#" } },
  { name: "Manual Moya", role: "Software Developer", img: "/persona6.png", links: { fb: "#", ig: "#", tw: "#" } },
  { name: "Inara Colihuinca", role: "Developer Manager", img: "/persona7.png", links: { fb: "#", ig: "#", tw: "#" } },
];

// Iconos
const IconFB = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12H17l-.5 3h-2.5v7A10 10 0 0 0 22 12z"/></svg>);
const IconIG = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>);
const IconTW = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.5.6-2.3.7a3.9 3.9 0 0 0-6.7 3.6A11 11 0 0 1 3.1 5.4a3.9 3.9 0 0 0 1.2 5.3c-.6 0-1.2-.2-1.7-.5v.1c0 1.9 1.3 3.5 3 3.9-.3.1-.7.1-1 .1-.3 0-.5 0-.8-.1.6 1.7 2.9 2.9 4.1 2.9A7.8 7.8 0 0 1 2 19.6a11 11 0 0 0 6 1.8c7.2 0 11.2-6 11.2-11.2v-.5c.8-.5 1.5-1.2 2-2Z"/></svg>);

export default function NuestroEquipo() {
  const [index, setIndex] = useState(0);
  const [cols, setCols] = useState(3);
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const [gapPx, setGapPx] = useState(24);
  const [stepPx, setStepPx] = useState(0);

  // cols
  useEffect(() => {
    const computeCols = () => {
      const w = window.innerWidth;
      if (w >= 1024) setCols(3);
      else if (w >= 640) setCols(2);
      else setCols(1);
    };
    computeCols();
    window.addEventListener("resize", computeCols);
    return () => window.removeEventListener("resize", computeCols);
  }, []);

  // geometría
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const computeGeometry = () => {
      const styles = getComputedStyle(track);
      const g = parseFloat(styles.columnGap || styles.gap || "0") || 0;
      setGapPx(g);
      const first = track.firstElementChild;
      if (first) {
        const w = first.getBoundingClientRect().width;
        setStepPx(w + g);
      }
    };
    computeGeometry();
    const onLoad = () => computeGeometry();
    window.addEventListener("load", onLoad);
    const ro = new ResizeObserver(() => computeGeometry());
    ro.observe(track);
    if (viewportRef.current) ro.observe(viewportRef.current);
    return () => { window.removeEventListener("load", onLoad); ro.disconnect(); };
  }, []);

  useEffect(() => { setIndex((i) => Math.min(i, Math.max(0, TEAM.length - cols))); }, [cols]);
  const maxIndex = useMemo(() => Math.max(0, TEAM.length - cols), [cols]);
  const prev = () => setIndex((i) => Math.max(0, i - cols));
  const next = () => setIndex((i) => Math.min(maxIndex, i + cols));
  const cardBasis = useMemo(() => `calc((100% - ${gapPx * (cols - 1)}px) / ${cols})`, [gapPx, cols]);

  // swipe
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    let startX = 0, dx = 0;
    const tstart = (e) => { startX = e.touches[0].clientX; dx = 0; };
    const tmove  = (e) => { dx = e.touches[0].clientX - startX; };
    const tend   = () => { if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); } };
    el.addEventListener("touchstart", tstart, { passive: true });
    el.addEventListener("touchmove", tmove, { passive: true });
    el.addEventListener("touchend", tend);
    return () => {
      el.removeEventListener("touchstart", tstart);
      el.removeEventListener("touchmove", tmove);
      el.removeEventListener("touchend", tend);
    };
  }, [next, prev]);

  // Animations
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.45, ease: [0.2, 0.7, 0.2, 1] } },
  };

  return (
    <section id="NuestroEquipo" className="w-full bg-[#CCCCCC] py-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-3xl font-extrabold text-blue-800 sm:text-4xl">Nuestro equipo</h2>
          <div className="hidden shrink-0 items-center gap-3 sm:flex">
            <button onClick={prev} aria-label="Anterior" className="grid h-10 w-10 place-items-center rounded-full bg-neutral-700 text-white shadow hover:bg-neutral-800 disabled:opacity-40" disabled={index === 0}><span className="-ml-0.5 text-xl">←</span></button>
            <button onClick={next} aria-label="Siguiente" className="grid h-10 w-10 place-items-center rounded-full bg-neutral-700 text-white shadow hover:bg-neutral-800 disabled:opacity-40" disabled={index === maxIndex}><span className="ml-0.5 text-xl">→</span></button>
          </div>
        </div>

        <div className="relative">
          <div ref={viewportRef} className="relative overflow-hidden rounded-2xl">
            {/* botones mobile */}
            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-between px-2 sm:hidden">
              <button onClick={prev} aria-label="Anterior" disabled={index === 0} className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-neutral-900/70 text-white backdrop-blur hover:bg-neutral-900/90 disabled:opacity-40"><span className="-ml-0.5 text-xl">←</span></button>
              <button onClick={next} aria-label="Siguiente" disabled={index === maxIndex} className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-neutral-900/70 text-white backdrop-blur hover:bg-neutral-900/90 disabled:opacity-40"><span className="ml-0.5 text-xl">→</span></button>
            </div>

            {/* track */}
            <div
              ref={trackRef}
              className="flex gap-4 sm:gap-5 lg:gap-6 transition-transform duration-500 ease-[cubic-bezier(.2,.7,.2,1)]"
              style={{ transform: `translateX(-${index * stepPx}px)` }}
            >
              {TEAM.map((m, i) => (
                <motion.article
                  key={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ scale: 1.02, y: -4, boxShadow: "0 22px 50px rgba(0,0,0,.35)" }}
                  whileTap={{ scale: 0.995 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="
                    relative overflow-hidden rounded-2xl cursor-pointer
                    bg-slate-900/80 ring-1 ring-white/10 
                    shadow-[0_18px_40px_rgba(0,0,0,.28)]
                  "
                  style={{ flex: `0 0 ${cardBasis}` }}
                >
                  {/* Área imagen */}
                  <div
                    className="
                      relative
                      bg-[radial-gradient(60%_80%_at_20%_20%,#1B3159_0%,transparent_60%),radial-gradient(70%_80%_at_90%_10%,#0ea5e9_0%,transparent_40%),linear-gradient(180deg,#0e1b35_0%,#0a1428_100%)]
                    "
                  >
                    <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(45deg,rgba(255,255,255,.9)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,.9)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                    <motion.img
                      src={m.img}
                      alt={m.name}
                      className="block h-[300px] w-full object-contain object-bottom sm:h-[320px] lg:h-[340px]"
                      style={{ filter: "grayscale(100%) brightness(75%) contrast(110%)" }}
                      onLoad={() => {
                        const styles = getComputedStyle(trackRef.current);
                        const g = parseFloat(styles.columnGap || styles.gap || "0") || 0;
                        setGapPx(g);
                        const first = trackRef.current?.firstElementChild;
                        if (first) {
                          const w = first.getBoundingClientRect().width;
                          setStepPx(w + g);
                        }
                      }}
                      initial={{ y: 4, opacity: 0.95 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
                      whileHover={{ y: -2 }}
                    />

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  {/* Footer */}
                  <div className="-mt-px bg-gradient-to-r from-blue-700 via-blue-800 to-sky-800 px-5 pb-5 pt-4 text-white">
                    <div className="mb-3 h-[2px] w-full " />
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
                </motion.article>
              ))}
            </div>
          </div>

          {/* indicadores */}
          <div className="mt-5 flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, iDot) => (
              <button
                key={iDot}
                onClick={() => setIndex(iDot)}
                aria-label={`Ir a slide ${iDot + 1}`}
                className={`h-2 w-2 rounded-full transition-opacity ${iDot === index ? "bg-blue-600 opacity-100" : "bg-blue-600/40 hover:opacity-80"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
