'use client';

import { motion, useReducedMotion } from 'framer-motion';

const BAR_DURATION = 3.2;

// 🎞 Variantes animación
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
      className="w-full bg-gradient-to-t from-[#CCCCCC] via-[#CCCCCC] to-[#CCCCCC] font-titillium"
    >
      {/* 🔹 Título principal (mantiene fuente base) */}
      <motion.h2
        variants={fadeInUp(0)}
        className="mb-8 text-center text-3xl font-bold text-blue-800 sm:mb-10 sm:text-5xl font-sans"
      >
        Cómo Trabajamos
      </motion.h2>

      <motion.div
        variants={fadeInUp(0.05)}
        className="relative mx-auto max-w-6xl rounded-2xl bg-[#1F2937] px-4 py-12 shadow-xl sm:px-6 md:py-16 lg:px-8"
      >
        {/* ===== Línea superior + puntos ===== */}
        <div className="absolute left-4 right-4 top-8 sm:left-6 sm:right-6 md:top-10">
          <div className="relative h-10">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[6px] rounded-full bg-[#2A3646]" />

            {/* Overlays gradientes por tamaño */}
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
          </div>
        </div>

        {/* ===== Grilla de tarjetas ===== */}
        <motion.div
          variants={staggerParent}
          className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
        >
          {[
            {
              iconColor: 'text-emerald-600',
              title: 'Diagnóstico',
              week: 'Semana 1',
              desc: 'Análisis profundo de procesos actuales e identificación de oportunidades de mejora a través de observación directa.',
              note: 'Mapeo completo del estado actual',
              accent: 'text-emerald-700',
            },
            {
              iconColor: 'text-sky-600',
              title: 'Piloto',
              week: 'Semana 2-4',
              desc: 'Implementación de solución de visión artificial en un área acotada para validar hipótesis y ajustar algoritmos.',
              note: 'Primera mejora del 15–20%',
              accent: 'text-sky-600',
            },
            {
              iconColor: 'text-orange-500',
              title: 'Implementación',
              week: 'Mes 2-3',
              desc: 'Despliegue completo de la solución escalando a toda la operación con entrenamiento del equipo y documentación.',
              note: 'Alcance del 80% del potencial',
              accent: 'text-orange-500',
            },
            {
              iconColor: 'text-emerald-700',
              title: 'Escala & Mejora',
              week: 'Continuo',
              desc: 'Monitoreo permanente, optimización de algoritmos y expansión a nuevas áreas según principios de mejora continua.',
              note: 'Mejora sostenida del 30%+',
              accent: 'text-emerald-700',
            },
          ].map((card, i) => (
            <motion.article
              key={i}
              variants={fadeInUp(i * 0.05)}
              whileHover={{ y: reduce ? 0 : -4 }}
              className="rounded-2xl bg-[#E7EBF1] p-5 shadow-[0_6px_20px_rgba(0,0,0,.25)] sm:p-6"
            >
              <div
                className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/60 ${card.iconColor}`}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>

              {/* h3 mantiene fuente base */}
              <h3 className="text-xl font-extrabold text-slate-500 sm:text-2xl font-sans">
                {card.title}
              </h3>
              <p className={`mt-1 font-semibold ${card.accent}`}>{card.week}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:mt-4">
                {card.desc}
              </p>
              <p className={`mt-3 font-semibold sm:mt-4 ${card.accent}`}>{card.note}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
