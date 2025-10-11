// src/components/ComoTrabajamos.tsx
export default function ComoTrabajamos() {
    return (
        <section className="w-full bg-[#EAF2FF] py-16 px-6">
            <h2 className="text-center text-4xl font-extrabold text-slate-800 mb-10">
                Cómo Trabajamos
            </h2>

            <div className="relative mx-auto max-w-6xl rounded-2xl bg-[#1F2937] px-6 sm:px-8 py-16 shadow-xl">

                {/* ===== Línea superior con color por tramos ===== */}
                <div className="absolute left-6 right-6 top-10">
                    {/* pista tenue (fondo) */}
                    <div className="h-[6px] w-full rounded-full bg-[#2A3646]" />
                    {/* overlay de color segmentado */}
                    <div
                        className="pointer-events-none absolute inset-0 h-[6px] rounded-full"
                        style={{
                            background:
                                // 4 tramos, uno por columna
                                'linear-gradient(90deg, ' +
                                '#10b981 0% 25%, ' +   // emerald
                                '#0ea5e9 25% 50%, ' +  // sky
                                '#f97316 50% 75%, ' +  // orange
                                '#10b981 75% 100%)',   // emerald
                            opacity: 0.95,
                        }}
                    />
                </div>
                {/* Puntos centrados por columna (coinciden con las cards) */}
                <div className="pointer-events-none absolute left-6 right-6 top-[calc(2.5rem-4px)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="place-self-center h-7 w-7 rounded-full border-4 border-[#1F2937] bg-emerald-600 shadow" />
                    <div className="place-self-center h-7 w-7 rounded-full border-4 border-[#1F2937] bg-sky-500 shadow" />
                    <div className="place-self-center h-7 w-7 rounded-full border-4 border-[#1F2937] bg-orange-500 shadow" />
                    <div className="place-self-center h-7 w-7 rounded-full border-4 border-[#1F2937] bg-emerald-600 shadow" />
                </div>



                {/* Grilla de tarjetas */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Card 1 */}
                    <article className="rounded-2xl bg-[#E7EBF1] p-6 shadow-[0_6px_20px_rgba(0,0,0,.25)]">
                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/60">
                            {/* Lupa */}
                            <svg width="22" height="22" viewBox="0 0 24 24" className="text-emerald-600">
                                <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
                                <path d="M20 20L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-extrabold text-slate-500">Diagnóstico</h3>
                        <p className="mt-1 font-semibold text-emerald-700">Semana 1</p>
                        <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                            Análisis profundo de procesos actuales e identificación de oportunidades de mejora
                            a través de observación directa.
                        </p>
                        <p className="mt-4 font-semibold text-emerald-700">
                            Mapeo completo del estado actual
                        </p>
                    </article>

                    {/* Card 2 */}
                    <article className="rounded-2xl bg-[#E7EBF1] p-6 shadow-[0_6px_20px_rgba(0,0,0,.25)]">
                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/60">
                            {/* Bombilla */}
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
                        <h3 className="text-2xl font-extrabold text-slate-500">Piloto</h3>
                        <p className="mt-1 font-semibold text-sky-600">Semana 2-4</p>
                        <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                            Implementación de solución de visión artificial en un área acotada para validar
                            hipótesis y ajustar algoritmos.
                        </p>
                        <p className="mt-4 font-semibold text-sky-600">
                            Primera mejora del 15–20%
                        </p>
                    </article>

                    {/* Card 3 */}
                    <article className="rounded-2xl bg-[#E7EBF1] p-6 shadow-[0_6px_20px_rgba(0,0,0,.25)]">
                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/60">
                            {/* Cohete */}
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
                        <h3 className="text-2xl font-extrabold text-slate-500">Implementación</h3>
                        <p className="mt-1 font-semibold text-orange-500">Mes 2-3</p>
                        <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                            Despliegue completo de la solución escalando a toda la operación con entrenamiento
                            del equipo y documentación.
                        </p>
                        <p className="mt-4 font-semibold text-orange-500">
                            Alcance del 80% del potencial
                        </p>
                    </article>

                    {/* Card 4 */}
                    <article className="rounded-2xl bg-[#E7EBF1] p-6 shadow-[0_6px_20px_rgba(0,0,0,.25)]">
                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/60">
                            {/* Flecha ascendente */}
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
                        <h3 className="text-2xl font-extrabold text-slate-500">Escala & Mejora</h3>
                        <p className="mt-1 font-semibold text-emerald-700">Continuo</p>
                        <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                            Monitoreo permanente, optimización de algoritmos y expansión a nuevas áreas
                            según principios de mejora continua.
                        </p>
                        <p className="mt-4 font-semibold text-emerald-700">
                            Mejora sostenida del 30%+
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}
