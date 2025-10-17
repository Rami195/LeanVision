// src/components/Hero.jsx
const Hero = () => {
  return (
    <section
      id="Hero"
      className="relative flex h-screen items-center text-white overflow-hidden font-titillium pt-[120px]" // 👈 agregado
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

      {/* 🌓 Cortina sombreada */}
      <div
        className="
          absolute top-0 left-0 h-full w-full
          bg-black/60 sm:bg-black/70
          sm:w-1/2
          z-10
        "
      />

      {/* 💬 Contenido */}
      <div
        className="
          relative z-20 w-full sm:w-1/2
          px-6 sm:px-8 lg:px-12 xl:px-16
          flex flex-col justify-center items-center sm:items-start
          text-center sm:text-left
          h-full
        "
      >
        <h1
          className="
            mb-8 sm:mb-10 font-bold leading-tight font-pt-sans-caption
            text-[clamp(2.5rem,8vw,5rem)]
          "
        >
          Ver lo invisible, <br />
          <span className="text-blue-800">mejorar lo esencial</span>
        </h1>

        <p
          className="
            mb-24 sm:mb-28 text-gray-200
            text-[clamp(1.25rem,2vw,1.5rem)]
            leading-relaxed
            max-w-lg
          "
        >
          Con visión artificial inspirada en la metodología Lean, transformamos
          imágenes en decisiones que generan valor medible.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 max-w-max animate-breathe">
          <a
            href="#footer"
            className="
              inline-flex items-center justify-center rounded-full
              bg-blue-600 px-10 py-4 font-semibold hover:bg-blue-700 transition
              text-[clamp(1rem,1.5vw,1.125rem)]
            "
          >
            Solicita una demo
          </a>
          <a
            href="#Principles"
            className="
              inline-flex items-center justify-center rounded-full
              border border-white/70 bg-white/10 px-10 py-4 font-semibold hover:bg-white/20 transition
              text-[clamp(1rem,1.5vw,1.125rem)]
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
