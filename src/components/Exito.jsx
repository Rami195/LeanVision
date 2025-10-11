// src/components/CasosDeExito.tsx
export default function CasosDeExito() {
  return (
    <section id="Exito" className="w-full bg-[#F2F5F8] py-16 px-6">
      <h2 className="text-center text-4xl font-extrabold text-slate-700 mb-10">
        Casos de Éxito
      </h2>

      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <a
          href="#"
          className="group relative block overflow-hidden rounded-md shadow-[0_12px_30px_rgba(0,0,0,.18)] focus:outline-none focus:ring-4 focus:ring-sky-400/40"
          aria-label="+50% eficiencia en producción — Planta industrial exterior"
        >
          <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop"
            alt="Planta industrial exterior"
            className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <p className="text-[22px] font-extrabold leading-6">
              +50% eficiencia
              <br />en producción
            </p>
            <span className="mt-2 inline-block text-[15px] font-extrabold tracking-wide">
              LEER MÁS
            </span>
          </div>
        </a>

        {/* Card 2 */}
        <a
          href="#"
          className="group relative block overflow-hidden rounded-md shadow-[0_12px_30px_rgba(0,0,0,.18)] focus:outline-none focus:ring-4 focus:ring-sky-400/40"
          aria-label="+50% eficiencia en producción — Línea de indumentaria"
        >
          <img
            src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1600&auto=format&fit=crop"
            alt="Línea de indumentaria"
            className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <p className="text-[22px] font-extrabold leading-6">
              +50% eficiencia
              <br />en producción
            </p>
            <span className="mt-2 inline-block text-[15px] font-extrabold tracking-wide">
              LEER MÁS
            </span>
          </div>
        </a>

        {/* Card 3 */}
        <a
          href="#"
          className="group relative block overflow-hidden rounded-md shadow-[0_12px_30px_rgba(0,0,0,.18)] focus:outline-none focus:ring-4 focus:ring-sky-400/40"
          aria-label="+50% eficiencia en producción — Operación logística urbana"
        >
          <img
            src="https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1600&auto=format&fit=crop"
            alt="Operación logística urbana"
            className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <p className="text-[22px] font-extrabold leading-6">
              +50% eficiencia
              <br />en producción
            </p>
            <span className="mt-2 inline-block text-[15px] font-extrabold tracking-wide">
              LEER MÁS
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
