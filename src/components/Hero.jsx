

const Hero = () => {
  return (
    <section id="Hero" className="relative flex flex-col justify-center items-start h-screen px-10 text-white overflow-hidden">

      {/* 🎥 Video de fondo */}
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

      {/* 🌓 Capa negra translúcida a la izquierda */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-black/70 z-10"></div>

      {/* 💬 Contenido del Hero */}
      <div className="relative z-20 max-w-2xl ">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Ver lo invisible, <br />
          <span className="text-blue-400">mejorar lo esencial</span>
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Con visión artificial inspirada en la metodología Lean, transformamos
          imágenes en decisiones que generan valor medible.
        </p>

        <div className="flex gap-4">
          <button className="bg-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Solicita una demo
          </button>
          <button className="bg-white/20 border border-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition">
            Conoce más
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

