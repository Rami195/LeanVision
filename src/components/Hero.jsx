// src/components/Hero.jsx
const Hero = () => {
  return (
    <section
      id="Hero"
      className="relative flex h-screen items-center text-white overflow-hidden"
    >
      {/* 🎥 Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* 🌓 Cortina sombreada: 50% izquierda */}
      <div className="absolute top-0 left-0 h-full w-1/2 bg-black/70 z-10" />

      {/* 💬 Contenido: mismo ancho que la cortina, padding responsivo */}
      <div
        className="
          relative z-20 w-1/2
          pl-6 sm:pl-8 lg:pl-12 xl:pl-16
          pr-4
          max-w-full
        "
      >
        <h1
          className="
            mb-4 font-bold leading-tight
            text-[clamp(1.75rem,5vw,3.75rem)]   /* ≈ 28px → 60px */
          "
        >
          Ver lo invisible, <br />
          <span className="text-blue-800">mejorar lo esencial</span>
        </h1>

        <p
          className="
            mb-8 text-gray-200
            text-[clamp(0.95rem,1.6vw,1.125rem)]  /* ≈ 15px → 18px */
            leading-relaxed
          "
        >
          Con visión artificial inspirada en la metodología Lean, transformamos
          imágenes en decisiones que generan valor medible.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#footer"
            className="
              inline-flex items-center justify-center rounded-full
              bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 transition
              text-[clamp(0.95rem,1.3vw,1rem)]
            "
          >
            Solicita una demo
          </a>
          <a
            href="#Principles"
            className="
              inline-flex items-center justify-center rounded-full
              border border-white/70 bg-white/10 px-6 py-3 font-semibold hover:bg-white/20 transition
              text-[clamp(0.95rem,1.3vw,1rem)]
            "
          >
            Conocé más
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
