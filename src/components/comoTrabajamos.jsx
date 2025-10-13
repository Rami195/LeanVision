// src/components/ComoTrabajamos.tsx
export default function ComoTrabajamos() {
  return (
    <section className="w-full bg-[#EAF2FF] px-4 py-12 sm:px-6 md:py-14 lg:px-8">
      <h2 className="mb-8 text-center text-3xl font-extrabold text-slate-800 sm:mb-10 sm:text-4xl">
        Cómo Trabajamos
      </h2>

      <div className="relative mx-auto max-w-6xl rounded-2xl bg-[#1F2937] px-4 py-12 shadow-xl sm:px-6 md:py-16 lg:px-8">

        {/* ====== Línea superior con color por tramos (responsive) ====== */}
        <div className="absolute left-4 right-4 top-8 sm:left-6 sm:right-6 md:top-10">
          {/* pista tenue */}
          <div className="h-[6px] w-full rounded-full bg-[#2A3646]" />

          {/* overlay 1 tramo (móvil: 1 col) */}
          <div
            className="pointer-events-none absolute inset-0 h-[6px] rounded-full sm:hidden"
            style={{
              background:
                "linear-gradient(90deg, #10b981 0% 100%)",
              opacity: 0.95,
            }}
            aria-hidden
          />

          {/* overlay 2 tramos (tablet: 2 cols) */}
          <div
            className="pointer-events-none absolute inset-0 hidden h-[6px] rounded-full sm:block lg:hidden"
            style={{
              background:
                "linear-gradient(90deg, #10b981 0% 50%, #0ea5e9 50% 100%)",
              opacity: 0.95,
            }}
            aria-hidden
          />

          {/* overlay 4 tramos (desktop: 4 cols) */}
          <div
            className="pointer-events-none absolute inset-0 hidden h-[6px] rounded-full lg:block"
            style={{
              background:
                "linear-gradient(90deg, #10b981 0% 25%, #0ea5e9 25% 50%, #f97316 50% 75%, #10b981 75% 100%)",
              opacity: 0.95,
            }}
            aria-hidden
          />
        </div>

        {/* ====== Puntos centrados por columna (1 / 2 / 4) ====== */}
        {/* móvil: 1 punto */}
        <div className="pointer-events-none absolute left-4 right-4 top-[calc(2rem-2px)] grid grid-cols-1 sm:hidden">
          <div className="place-self-center h-7 w-7 rounded-full border-4 border-[#1F2937] bg-emerald-600 shadow" />
        </div>
        {/* tablet: 2 puntos */}
        <div className="pointer-events-none absolute left-6 right-6 top-[calc(2.25rem-2px)] hidden grid-cols-2 sm:grid lg:hidden">
          <div className="place-self-center h-7 w-7 rounded-full border-4 border-[#1F2937] bg-emerald-600 shadow" />
          <div className="place-self-center h-7 w-7 rounded-full border-4 border-[#1F2937] bg-sky-500 shadow" />
        </div>
        {/* desktop: 4 puntos */}
        <div className="pointer-events-none absolute left-6 right-6 top-[calc(2.5rem-4px)] hidden grid-cols-4 lg:grid">
          <div className="place-self-center h-7 w-7 rounded-full border-4 border-[#1F2937] bg-emerald-600 shadow" />
          <div className="place-self-center h-7 w-7 rounded-full border-4 border-[#1F2937] bg-sky-500 shadow" />
          <div className="place-self-center h-7 w-7 rounded-full border-4 border-[#1F2937] bg-orange-500 shadow" />
          <div className="place-self-center h-7 w-7 rounded-full border-4 border-[#1F2937] bg-emerald-600 shadow" />
        </div>

        {/* ====== Grilla de tarjetas (1 / 2 / 4 columnas) ====== */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {/* Card 1 */}
          <article className="rounded-2xl bg-[#E7EBF1] p-5 shadow-[0_6px_20px_rgba(0,0,0,.25)] sm:p-6">
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
          </article>

          {/* Card 2 */}
          <article className="rounded-2xl bg-[#E7EBF1] p-5 shadow-[0_6px_20px_rgba(0,0,0,.25)] sm:p-6">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/60">
              <svg width="22" height="22" viewBox="0 0 24 24" className="text-sky-600">
                <path
                  d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12c1 1 1 2 1 2h6s0-1 1-2a7 7 0 0 0-4-12Z"
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
          </article>

          {/* Card 3 */}
          <article className="rounded-2xl bg-[#E7EBF1] p-5 shadow-[0_6px_20px_rgba(0,0,0,.25)] sm:p-6">
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
          </article>

          {/* Card 4 */}
          <article className="rounded-2xl bg-[#E7EBF1] p-5 shadow-[0_6px_20px_rgba(0,0,0,.25)] sm:p-6">
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
          </article>
        </div>
      </div>
    </section>
  );
}
