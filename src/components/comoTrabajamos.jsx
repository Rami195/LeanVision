// src/components/ComoTrabajamos.tsx
'use client';

import { motion, useReducedMotion } from 'framer-motion';

const BAR_DURATION = 3.2; // más lento (ajustá a gusto)

// Variantes reutilizables
const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  },
});

const staggerParent = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const popIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
  },
});

export default function ComoTrabajamos() {
  const reduce = useReducedMotion();

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full bg-gradient-to-t from-[#CCCCCC] via-[#CCCCCC] to-[#CCCCCC]"
    >
      <motion.h2
        variants={fadeInUp(0)}
        className="mb-8 text-center text-3xl font-bold text-blue-800 sm:mb-10 sm:text-5xl"
      >
        Cómo Trabajamos
      </motion.h2>

      <motion.div
        variants={fadeInUp(0.05)}
        className="relative mx-auto max-w-6xl rounded-2xl bg-[#1F2937] px-4 py-12 shadow-xl sm:px-6 md:py-16 lg:px-8"
      >
        {/* ====== Línea superior + puntos centrados por tramo ====== */}
        <div className="absolute left-4 right-4 top-8 sm:left-6 sm:right-6 md:top-10">
          <div className="relative h-10">
            {/* pista tenue */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[6px] rounded-full bg-[#2A3646]" />

            {/* overlays de color — móvil */}
            <motion.div
              initial={reduce ? { opacity: 0 } : { scaleX: 0, opacity: 1 }}
              whileInView={reduce ? { opacity: 1 } : { scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: BAR_DURATION, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: '0% 50%' }}
              className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[6px] rounded-full sm:hidden"
              aria-hidden
            >
              <div
                className="h-full w-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #10b981 0% 100%)', opacity: 0.95 }}
              />
            </motion.div>

            {/* overlays de color — tablet */}
            <motion.div
              initial={reduce ? { opacity: 0 } : { scaleX: 0, opacity: 1 }}
              whileInView={reduce ? { opacity: 1 } : { scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: BAR_DURATION, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: '0% 50%' }}
              className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 hidden h-[6px] rounded-full sm:block lg:hidden"
              aria-hidden
            >
              <div
                className="h-full w-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #10b981 0% 50%, #0ea5e9 50% 100%)',
                  opacity: 0.95,
                }}
              />
            </motion.div>

            {/* overlays de color — desktop */}
            <motion.div
              initial={reduce ? { opacity: 0 } : { scaleX: 0, opacity: 1 }}
              whileInView={reduce ? { opacity: 1 } : { scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: BAR_DURATION + 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: '0% 50%' }}
              className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 hidden h-[6px] rounded-full lg:block"
              aria-hidden
            >
              <div
                className="h-full w-full rounded-full"
                style={{
                  background:
                    'linear-gradient(90deg, #10b981 0% 25%, #0ea5e9 25% 50%, #f97316 50% 75%, #10b981 75% 100%)',
                  opacity: 0.95,
                }}
              />
            </motion.div>

            {/* puntos: móvil */}
            <motion.div
              variants={staggerParent}
              className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 grid grid-cols-1 sm:hidden"
            >
              <motion.div
                variants={popIn(0.1)}
                className="place-self-center h-7 w-7 rounded-full border-4 border-[#1F2937] bg-emerald-600 shadow"
              />
            </motion.div>

            {/* puntos: tablet */}
            <motion.div
              variants={staggerParent}
              className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 hidden grid-cols-2 sm:grid lg:hidden"
            >
              <motion.div
                variants={popIn(0.1)}
                className="place-self-center h-7 w-7 rounded-full border-4 border-[#1F2937] bg-emerald-600 shadow"
              />
              <motion.div
                variants={popIn(0.22)}
                className="place-self-center h-7 w-7 rounded-full border-4 border-[#1F2937] bg-sky-500 shadow"
              />
            </motion.div>

            {/* puntos: desktop */}
            <motion.div
              variants={staggerParent}
              className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 hidden grid-cols-4 lg:grid"
            >
              <motion.div
                variants={popIn(0.1)}
                className="place-self-center h-7 w-7 rounded-full border-4 border-[#1F2937] bg-emerald-600 shadow"
              />
              <motion.div
                variants={popIn(0.22)}
                className="place-self-center h-7 w-7 rounded-full border-4 border-[#1F2937] bg-sky-500 shadow"
              />
              <motion.div
                variants={popIn(0.34)}
                className="place-self-center h-7 w-7 rounded-full border-4 border-[#1F2937] bg-orange-500 shadow"
              />
              <motion.div
                variants={popIn(0.46)}
                className="place-self-center h-7 w-7 rounded-full border-4 border-[#1F2937] bg-emerald-600 shadow"
              />
            </motion.div>
          </div>
        </div>

        {/* ====== Grilla de tarjetas (1 / 2 / 4 columnas) ====== */}
        <motion.div
          variants={staggerParent}
          className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          {/* Card 1 */}
          <motion.article
            variants={fadeInUp(0.05)}
            whileHover={{ y: reduce ? 0 : -4 }}
            className="rounded-2xl bg-[#E7EBF1] p-5 shadow-[0_6px_20px_rgba(0,0,0,.25)] sm:p-6"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/60">
              <svg width="22" height="22" viewBox="0 0 24 24" className="text-emerald-600">
                <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold text-slate-500 sm:text-2xl">Diagnóstico</h3>
            <p className="mt-1 font-semibold text-emerald-700">Semana 1</p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:mt-4">
              Análisis profundo de procesos actuales e identificación de oportunidades de mejora
              a través de observación directa.
            </p>
            <p className="mt-3 font-semibold text-emerald-700 sm:mt-4">Mapeo completo del estado actual</p>
          </motion.article>

          {/* Card 2 */}
          <motion.article
            variants={fadeInUp(0.1)}
            whileHover={{ y: reduce ? 0 : -4 }}
            className="rounded-2xl bg-[#E7EBF1] p-5 shadow-[0_6px_20px_rgba(0,0,0,.25)] sm:p-6"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/60">
              <svg width="22" height="22" viewBox="0 0 24 24" className="text-sky-600">
                <path
                  d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c1 1 1 2 1 2h6s 0-1 1-2a7 7 0 0 0-4-12Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold text-slate-500 sm:text-2xl">Piloto</h3>
            <p className="mt-1 font-semibold text-sky-600">Semana 2-4</p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:mt-4">
              Implementación de solución de visión artificial en un área acotada para validar
              hipótesis y ajustar algoritmos.
            </p>
            <p className="mt-3 font-semibold text-sky-600 sm:mt-4">Primera mejora del 15–20%</p>
          </motion.article>

          {/* Card 3 */}
          <motion.article
            variants={fadeInUp(0.15)}
            whileHover={{ y: reduce ? 0 : -4 }}
            className="rounded-2xl bg-[#E7EBF1] p-5 shadow-[0_6px_20px_rgba(0,0,0,.25)] sm:p-6"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/60">
              <svg width="22" height="22" viewBox="0 0 24 24" className="text-orange-500">
                <path
                  d="M5 19c1.5-4 5-7 9-9l3-3 3 3-3 3c-2 4-5 7.5-9 9l-2-3Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path d="M14 10l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold text-slate-500 sm:text-2xl">Implementación</h3>
            <p className="mt-1 font-semibold text-orange-500">Mes 2-3</p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:mt-4">
              Despliegue completo de la solución escalando a toda la operación con entrenamiento
              del equipo y documentación.
            </p>
            <p className="mt-3 font-semibold text-orange-500 sm:mt-4">Alcance del 80% del potencial</p>
          </motion.article>

          {/* Card 4 */}
          <motion.article
            variants={fadeInUp(0.2)}
            whileHover={{ y: reduce ? 0 : -4 }}
            className="rounded-2xl bg-[#E7EBF1] p-5 shadow-[0_6px_20px_rgba(0,0,0,.25)] sm:p-6"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/60">
              <svg width="22" height="22" viewBox="0 0 24 24" className="text-emerald-700">
                <path
                  d="M3 17l6-6 4 4 7-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M14 8h6v6" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold text-slate-500 sm:text-2xl">Escala & Mejora</h3>
            <p className="mt-1 font-semibold text-emerald-700">Continuo</p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:mt-4">
              Monitoreo permanente, optimización de algoritmos y expansión a nuevas áreas
              según principios de mejora continua.
            </p>
            <p className="mt-3 font-semibold text-emerald-700 sm:mt-4">Mejora sostenida del 30%+</p>
          </motion.article>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
