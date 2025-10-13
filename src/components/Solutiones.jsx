// src/components/Solutions.jsx
'use client'; 
import { useEffect, useState } from "react";

export default function Solutions() {
  const sections = [
    { brand: "Lean Retail", title: "Toma decisiones basadas en datos", color: "#8a2be2",
      gradient: "linear-gradient(135deg, #059669, #2563EB)",
      list: ["Volumen de tráfico, datos demográficos y faciales.","Alertas sobre clientes en espera.","Análisis completo del recorrido del cliente."],
      image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=900&q=60",
    },
    { brand: "Lean Mobility", title: "Conecta tu negocio con tu audiencia", color: "#00bcd4",
      gradient: "linear-gradient(135deg, #2563EB, #374151)",
      list: ["Crea señalización digital dirigida y campañas dinámicas.","Edita plantillas sin necesidad de código.","Integra IA para contenido adaptativo en tiempo real."],
      image: "https://images.unsplash.com/photo-1603570419872-1a5b2a0b9ff0?auto=format&fit=crop&w=900&q=60",
    },
    { brand: "Lean Industry", title: "Monetiza tus espacios y datos", color: "#ff7a00",
      gradient: "linear-gradient(135deg, #EA580C, #2563EB )",
      list: ["Gestiona tus anuncios de manera profesional.","Analiza ingresos por ubicación y audiencia.","Optimiza rendimientos publicitarios con IA predictiva."],
      image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=900&q=60",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

 
  const goToHeroRetail = (e) => {
    e.preventDefault();
    const el = document.getElementById("heroRetail");
    if (!el) return;
    const OFFSET = 90; 
    const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

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

  return (
    <section className="w-full py-24 px-6 bg-[#EAF2FF] flex justify-center">
      <div
        className="w-full max-w-[1200px] p-10 rounded-3xl shadow-2xl flex flex-col gap-10 transition-all duration-700"
        style={{ background: sections[activeIndex].gradient }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`relative cursor-pointer p-8 rounded-xl shadow-xl overflow-hidden transition-all duration-500 min-h-[170px] h-full ${
                activeIndex === index ? "bg-white/30 scale-105" : "bg-white/20 hover:scale-102"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div
                className="absolute top-0 left-0 h-full bg-white/20 transition-all duration-100 ease-linear"
                style={{ width: activeIndex === index ? `${progress}%` : "0%", zIndex: 0 }}
              />
              <div className="relative z-10 h-full flex flex-col justify-start">
                <h4 className="text-lg font-semibold mb-1">{section.brand}</h4>
                <p className="text-sm opacity-80">
                  {index === 0 && "Información sobre los visitantes, eficacia de los empleados y más."}
                  {index === 1 && "Señalización digital dirigida, editor de plantillas sin código y más."}
                  {index === 2 && "Maximiza tus ingresos publicitarios con una plataforma profesional."}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 w-full bg-white/20 backdrop-blur-md p-10 rounded-2xl shadow-lg">
          <div className="w-full md:w-1/2 text-white">
            <span
              className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full mb-3"
              style={{ background: "rgba(255,255,255,.12)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,.25)" }}
            >
              {sections[activeIndex].brand}
            </span>

            <h2
              className="text-4xl font-bold mb-6 leading-snug"
              dangerouslySetInnerHTML={{
                __html: sections[activeIndex].title.replace(
                  "basadas",
                  `<span style="color:${sections[activeIndex].color}">basadas</span>`
                ),
              }}
            />
            <ul className="space-y-3 mb-8 text-lg text-gray-100">
              {sections[activeIndex].list.map((item, i) => (
                <li key={i} className="leading-relaxed">{item}</li>
              ))}
            </ul>

            {/* ⬇️ botón con scroll al heroRetail */}
            <button
              onClick={goToHeroRetail}
              className="px-7 py-3 rounded-lg text-white font-medium shadow-md hover:shadow-lg transition-all"
              style={{ background: `linear-gradient(90deg, ${sections[activeIndex].color}, #b180ff)` }}
            >
              Conoce más →
            </button>

            <p className="text-xs mt-4 text-gray-300">Cumple con LGPD, GDPR y CCPA</p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              key={sections[activeIndex].image}
              src={sections[activeIndex].image}
              alt={`${sections[activeIndex].brand} dashboard`}
              className="rounded-2xl shadow-xl w-full h-96 object-cover transition-opacity duration-700 ease-in-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
