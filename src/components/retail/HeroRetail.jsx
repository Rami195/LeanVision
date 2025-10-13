// src/components/retail/HeroRetail.jsx
export default function HeroRetail() {
  return (
    <section
      id="heroRetail"
      className="relative overflow-hidden scroll-mt-24 md:scroll-mt-28"
      aria-label="Hero Lean Retail"
      aria-labelledby="hero-retail-title"
    >
      {/* fondo suave */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/70 via-white to-white"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24 lg:gap-16">
        {/* Columna izquierda: texto */}
        <div>
          <h1
            id="hero-retail-title"
            className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl"
          >
            <span className="block">Lo que no ves,</span>
            <span className="mt-1 block text-blue-600">impacta en tus ventas</span>
            <span className="text-blue-600">.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600">
            Con <strong>Lean Retail</strong>, transformamos la mirada de tu tienda en
            información accionable: <strong>menos colas</strong>, <strong>más conversión</strong>,{" "}
            <strong>diseños más inteligentes</strong>.
          </p>

          <div className="mt-7">
            <a
              href="#contacto"
              className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 ring-1 ring-blue-700/50 transition hover:translate-y-[-1px] hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Solicitá un piloto en tu tienda
            </a>
          </div>
        </div>

        {/* Columna derecha: imagen */}
        <div className="relative">
          {/* glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-4 -z-10 rounded-3xl bg-blue-200/50 blur-2xl"
          />
          <div className="rounded-3xl border border-white/50 bg-white/60 shadow-2xl shadow-blue-900/5 backdrop-blur-md">
            <img
              src="https://images.pexels.com/photos/6488889/pexels-photo-6488889.jpeg?cs=srgb&dl=pexels-andrea-bova-1169228-6488889.jpg&fm=jpg"
              alt="Pasillo de supermercado con cliente caminando y góndolas a ambos lados"
              width="880"
              height="520"
              loading="lazy"
              className="h-auto w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
