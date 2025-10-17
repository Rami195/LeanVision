"use client";
import { useEffect, useState, useRef } from "react";

export default function Solutions() {
  const sections = [
    {
      brand: "Lean Retail",
      title: "Optimizamos la experiencia a través de análisis visual",
      color: "#0c6af8ff",
      gradient: "linear-gradient(135deg, #2563EB, #374151)",
      list: [
        "Optimización de layouts de productos.",
        "Detección de colas y tiempos de espera.",
        "Análisis completo del recorrido del cliente.",
      ],
      image: "/retailing.png",
      logo: "/logoretail.png",
    },
    {
      brand: "Lean Mobility",
      title: "Innovamos el transporte urbano con visión artificial",
      color: "#15b437ff",
      gradient: "linear-gradient(135deg, #18a04b, #215d00)",
      list: [
        "Gestión inteligente de semáforos.",
        "Detección de incidentes en carreteras.",
        "Optimización de rutas de transporte público.",
      ],
      video: "/mobility.mp4",
      logo: "/logomobility.png",
    },
    {
      brand: "Lean Industry",
      title: "Aseguramos calidad desde el origen de la producción",
      color: "#ff7a00",
      gradient: "linear-gradient(100deg, #EA580C, #B5460B)",
      list: [
        "Gestiona tus anuncios de manera profesional.",
        "Analiza ingresos por ubicación y audiencia.",
        "Optimiza rendimientos industrial con IA predictiva.",
      ],
      image: "/industry.jpg",
      logo: "/logoindustry.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((prevIndex) => (prevIndex + 1) % sections.length);
          return 0;
        }
        return prev + 1.25;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => setProgress(0), [activeIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const goToHeroRetail = () => {
    const el = document.getElementById("heroRetail");
    if (!el) return;
    const OFFSET = 90;
    const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-gradient-to-t from-[#CCCCCC] via-[#1B3159] to-[#001334] py-16 px-4 sm:px-6 lg:px-8 fade-in-up ${visible ? "visible" : ""}`}
    >
      <div className="mx-auto w-full max-w-[1200px]">
        {/* ----- BLOQUES DE CARDS ----- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 font-titillium">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`
                relative cursor-pointer rounded-xl p-5 sm:p-6 transition-transform duration-500
                ${activeIndex === index ? "bg-white/30 ring-1 ring-white/40 scale-[1.05]" : "bg-white/20 hover:scale-[1.02]"}
              `}
              onClick={() => setActiveIndex(index)}
            >
              {/* Logo */}
              <div className="absolute right-4 top-4">
                <img src={section.logo} alt="" className="h-14 w-14 object-contain opacity-90 drop-shadow-md" />
              </div>

              {/* Brand */}
              <h4 className="text-lg font-semibold text-white mb-1">{section.brand}</h4>

              {/* Texto: siempre visible si la card está activa */}
              {activeIndex === index && (
                <div className="mt-2">
                  <p className="text-sm text-white/90 mb-2">{section.title}</p>
                  <ul className="text-xs text-white/80 space-y-1">
                    {section.list.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                  {/* Botón: solo mobile */}
                  <button
                    onClick={goToHeroRetail}
                    className="mt-2 px-4 py-2 rounded-lg text-white font-medium sm:hidden"
                    style={{ background: section.color }}
                  >
                    Conoce más →
                  </button>
                </div>
              )}

              {/* Barra de progreso */}
              <span
                className="absolute top-0 left-0 h-full bg-white/20 transition-[width] duration-100 ease-linear"
                style={{ width: activeIndex === index ? `${progress}%` : "0%" }}
                aria-hidden
              />
            </div>
          ))}
        </div>

        {/* ----- SECCIÓN PRINCIPAL: SOLO DESKTOP ----- */}
        <div className="hidden sm:flex font-titillium mt-8 sm:mt-10 lg:mt-12 flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10 lg:gap-12 w-full">
          <div
            className="mx-auto w-full max-w-[1200px] rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 transition-all duration-700"
            style={{ background: sections[activeIndex].gradient }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10 lg:gap-12">
              {/* Texto */}
              <div className="w-full md:w-1/2 text-white">
                <span
                  className="inline-flex items-center gap-2 px-3 py-1 text-[10px] sm:text-xs font-semibold rounded-full mb-3"
                  style={{ background: "rgba(255,255,255,.12)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,.25)" }}
                >
                  <img
                    src={sections[activeIndex].logo}
                    alt={`${sections[activeIndex].brand} logo`}
                    className="h-4 w-4 object-contain"
                  />
                  {sections[activeIndex].brand}
                </span>

                <h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 lg:mb-6 leading-snug"
                  dangerouslySetInnerHTML={{
                    __html: sections[activeIndex].title.replace(
                      "a través",
                      `<span style="color:${sections[activeIndex].color}">a través</span>`
                    ),
                  }}
                />

                <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 text-base sm:text-lg text-gray-100">
                  {sections[activeIndex].list.map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>

                {/* Botón desktop */}
                <div className="flex">
                  <button
                    onClick={goToHeroRetail}
                    className="w-full md:w-auto px-6 sm:px-7 py-3 rounded-lg text-white font-medium shadow-md hover:shadow-lg transition-all"
                    style={{ background: `linear-gradient(90deg, ${sections[activeIndex].color}, #1b1b1bff)` }}
                  >
                    Conoce más →
                  </button>
                </div>
              </div>

              {/* Media */}
              <div className="w-full md:w-1/2">
                <div className="relative w-full h-52 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] rounded-2xl shadow-xl overflow-hidden bg-black/10">
                  {sections[activeIndex].video ? (
                    <video
                      src={sections[activeIndex].video}
                      autoPlay
                      loop
                      muted
                      className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out"
                    />
                  ) : (
                    <img
                      src={sections[activeIndex].image}
                      alt={`${sections[activeIndex].brand} dashboard`}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out"
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
