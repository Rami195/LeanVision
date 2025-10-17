"use client";
import { useEffect, useState, useRef } from "react";

export default function Solutions() {
  const sections = [
    {
      brand: "Lean Retail",
      title: "Optimizamos la experiencia a través de análisis visual",
      color: "#15b437ff",
      gradient: "linear-gradient(135deg, #18a04b, #215d00)",
      list: [
        "Optimización de layouts de productos.",
        "Detección de colas y tiempos de espera.",
        "Análisis completo del recorrido del cliente.",
      ],
      image: "/retailing.png",
      logo: "/public/logoretail.png",
    },
    {
      brand: "Lean Mobility",
      title: "Innovamos el transporte urbano con visión artificial",
      color: "#0c6af8ff",
      gradient: "  linear-gradient(135deg, #2563EB, #374151)",
      list: [
        "Gestión inteligente de semáforos.",
        "Detección de incidentes en carreteras.",
        "Optimización de rutas de transporte público.",
      ],
      video: "/mobility.mp4",
      logo: "/public/logomobility.png",
    },
    {
      brand: "Lean Industry",
      title: "Aseguramos calidad desde el origen de la producción",
      color: "#ff7a00",
      gradient: "linear-gradient(100deg, #EA580C, #B5460B )",
      list: [
        "Gestiona tus anuncios de manera profesional.",
        "Analiza ingresos por ubicación y audiencia.",
        "Optimiza rendimientos publicitarios con IA predictiva.",
      ],
      image: "/industry.jpg",
      logo: "/public/logoindustry.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const goToHeroRetail = (e) => {
    e.preventDefault();
    const el = document.getElementById("heroRetail");
    if (!el) return;
    const OFFSET = 90;
    const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

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
  }, [sections.length]);

  useEffect(() => setProgress(0), [activeIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-gradient-to-t from-[#CCCCCC] via-[#1B3159] to-[#001334]
                  py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 fade-in-up ${visible ? "visible" : ""}`}
    >
      <div
        className="mx-auto w-full max-w-[1200px] rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 transition-all duration-700"
        style={{ background: sections[activeIndex].gradient }}
      >
        {/* Minicards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 w-full items-stretch">
          {sections.map((section, index) => (
            <button
              type="button"
              key={index}
              className={`relative text-left cursor-pointer p-5 sm:p-6 rounded-xl shadow-xl overflow-hidden
                transition-all duration-500 min-h-[140px] sm:min-h-[160px] h-full
                ${activeIndex === index ? "bg-white/30 ring-1 ring-white/40 scale-[1.02]" : "bg-white/20 hover:scale-[1.01]"}`}
              onClick={() => setActiveIndex(index)}
            >
              {/* barra de progreso */}
              <span
                className="absolute top-0 left-0 h-full bg-white/20 transition-[width] duration-100 ease-linear"
                style={{ width: activeIndex === index ? `${progress}%` : "0%", zIndex: 0 }}
                aria-hidden
              />

              {/* LOGO centrado a la derecha (único) */}
              <div
                className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 pointer-events-none z-[1]"
                aria-hidden
              >
                <img
                  src={section.logo}
                  alt=""
                  className="h-14 w-14 sm:h-20 sm:w-20 object-contain opacity-90 drop-shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Texto (SIN logo a la izquierda) */}
              <span className="relative z-10 block pr-16 sm:pr-20">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1">
                  {section.brand}
                </h4>
                <p className="text-xs sm:text-sm text-white/90">
                  {index === 0 && "Información sobre los visitantes, eficacia de los empleados y más."}
                  {index === 1 && "Señalización digital dirigida, editor de plantillas sin código y más."}
                  {index === 2 && "Optimiza tu operación industrial con datos en tiempo real."}
                </p>
              </span>
            </button>
          ))}

        </div>

        {/* Sección principal */}
        <div
          className="mt-8 sm:mt-10 lg:mt-12 flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-10 lg:gap-12
                     w-full bg-white/20 backdrop-blur-md p-5 sm:p-7 lg:p-10 rounded-2xl shadow-lg"
        >
          {/* Texto */}
          <div className="w-full md:w-1/2 text-white">
            {/* Chapita con logo + marca */}
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
                <li key={i} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>

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
            {/* El alto va en el contenedor, no en la imagen */}
            <div className="relative w-full h-52 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem]
                  rounded-2xl shadow-xl overflow-hidden bg-black/10">
              {sections[activeIndex].video ? (
                <video
                  src={sections[activeIndex].video}
                  autoPlay
                  loop
                  muted
                  className="absolute inset-0 w-full h-full object-cover object-center
                   transition-opacity duration-700 ease-in-out"
                />
              ) : (
                <img
                  src={sections[activeIndex].image}
                  alt={`${sections[activeIndex].brand} dashboard`}
                  className="absolute inset-0 w-full h-full object-cover object-center
                   transition-opacity duration-700 ease-in-out"
                  loading="lazy"
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
