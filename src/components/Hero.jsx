// src/components/Hero.jsx
const Hero = () => {
  return (
    <section
      id="Hero"
      className="relative flex flex-col justify-center items-start h-screen px-10 text-white overflow-hidden"
    >
      {/* 🎥 Video de fondo (sin cambios) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* 🌓 Capa negra EXACTA (sin cambios) */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-black/70 z-10"></div>

      {/* 💬 Contenido */}
      <div className="relative z-20 max-w-2xl px-24">
        <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Ver lo invisible, <br />
          <span className="text-blue-600">mejorar lo esencial</span>
        </h1>

        <p className="mb-8 text-base sm:text-lg text-gray-200">
          Con visión artificial inspirada en la metodología Lean, transformamos
          imágenes en decisiones que generan valor medible.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#footer"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 transition"
          >
            Solicita una demo
          </a>
          <a
            href="#Principles"
            className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/10 px-6 py-3 font-semibold hover:bg-white/20 transition"
          >
            Conocé más
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
