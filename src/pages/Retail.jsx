// src/components/Retail.jsx
"use client";
import React, { useState, useEffect } from "react";
import { TrendingUp, Clock, Smile, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FooterLeanRetail from "../components/FooterLeanRetail";

export default function Retail() {
  const testimonios = [
    {
      text: "Con Lean Retail entendimos mejor cómo se mueve la gente en nuestras tiendas. Pudimos reorganizar productos y el impacto en ventas fue inmediato.",
      author: "Gerente de Operaciones, Retail del Litoral",
    },
    {
      text: "La herramienta nos permitió detectar puntos ciegos en la disposición de los productos, mejorando la experiencia de compra.",
      author: "Directora Comercial, Tiendas Norte",
    },
    {
      text: "Desde que aplicamos Lean Retail, la eficiencia en el flujo de clientes creció de forma constante.",
      author: "Encargado de Sucursales, Urban Market",
    },
    {
      text: "Nos ayudó a comprender el comportamiento del cliente en cada zona del local, optimizando la exhibición.",
      author: "Gerente de Marketing, Superlínea",
    },
    {
      text: "El análisis visual nos permitió tomar decisiones basadas en datos, no en suposiciones. Los resultados hablan por sí solos.",
      author: "CEO, Retail Center",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonios.length);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [currentIndex, testimonios.length]);

  return (
    <div className="relative overflow-hidden text-gray-900">
      {/* HERO con VIDEO DE FONDO */}
      <section className="relative min-h-[100vh] flex items-center justify-center text-gray-900">
        {/* Video de fondo con animación sutil de brillo */}
        <motion.video
          src="/RetailBg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Overlay 50% */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 -z-10"></div>

        {/* Contenido del Hero con animación */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-20 md:py-32 mt-16 md:mt-0"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 p-6 md:p-16">
            {/* Texto */}
            <div className="md:w-1/2 text-center md:text-left space-y-6 md:space-y-8">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-slate-800 break-words"
              >
                Lo que no ves,{" "}
                <span className="text-[#0c6af8ff]">impacta en tus ventas.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-slate-600 break-words"
              >
                Detecta oportunidades invisibles en tu tienda. Convierte datos en
                decisiones con visión real.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="px-8 py-4 text-lg text-white font-semibold rounded-lg shadow-md bg-gradient-to-r from-[#2563EB] to-[#374151] hover:scale-105 transition"
              >
                Conoce más →
              </motion.button>
            </div>

            {/* Imagen */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="md:w-1/2 flex justify-center w-full"
            >
              <img
                src="/Retail-hero.png"
                alt="Lean Retail Hero"
                className="rounded-2xl shadow-xl w-full max-w-xs sm:max-w-md md:max-w-lg object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* VENTA PERDIDA */}
      <section className="text-center py-16 px-6 bg-[#E5F0FF] relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Cada cliente invisible es una{" "}
          <span className="text-[#0c6af8ff]">venta perdida.</span>
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-sm sm:text-base">
          Los datos invisibles son oportunidades ocultas. Lean Retail te ayuda a
          entender mejor cómo se mueven y compran tus clientes.
        </p>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-[#E5F0FF] py-20 px-6 relative z-10">
        <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-12 text-gray-900">
          Lo que tu tienda gana con{" "}
          <span className="text-[#0c6af8ff]">visión real.</span>
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7 max-w-5xl mx-auto">
          {[
            {
              icon: <TrendingUp className="w-12 h-12 text-[#0c6af8ff] mb-6" />,
              title: "Ventas visibles",
              text: "Descubre patrones de compra ocultos en tiempo real.",
            },
            {
              icon: <MapPin className="w-12 h-12 text-[#0c6af8ff] mb-4" />,
              title: "Operación fluida",
              text: "Identifica zonas calientes y frías dentro de la tienda.",
            },
            {
              icon: <Smile className="w-12 h-12 text-[#0c6af8ff] mb-4" />,
              title: "Experiencia avanzada",
              text: "Mejora la satisfacción del cliente con IA predictiva.",
            },
          ].map((b, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col items-center text-center aspect-square"
            >
              {b.icon}
              <h4 className="text-2xl font-bold text-[#0c6af8ff] mb-5">
                {b.title}
              </h4>
              <p className="text-slate-900 text-base">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#0c6af8ff] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0a56d4] transition transform hover:scale-105">
            Quiero ver un caso de éxito
          </button>
        </div>
      </section>

      {/* IMPACTO REAL */}
      <section className="text-center py-16 px-6 bg-white relative z-10">
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
          De los datos invisibles al{" "}
          <span className="text-[#0c6af8ff]">impacto real.</span>
        </h3>
        <p className="text-gray-600 mt-4 text-sm sm:text-base max-w-2xl mx-auto">
          Integra análisis inteligentes y toma decisiones basadas en evidencia.
        </p>

        <div className="mt-10 flex justify-center">
          <img
            src="/retail-1.png"
            alt="Impacto real Lean Retail"
            className="rounded-2xl shadow-lg max-w-xl w-full object-cover"
          />
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="text-center py-16 px-6 bg-[#E5F0FF] relative z-10">
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-12">
          Lo que logramos en{" "}
          <span className="text-[#0c6af8ff]">promedio.</span>
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            {
              icon: (
                <TrendingUp className="w-10 h-10 text-[#0c6af8ff] mb-3 mx-auto" />
              ),
              value: "+12%",
              text: "de conversión en locales con visión Lean",
            },
            {
              icon: <Clock className="w-10 h-10 text-[#0c6af8ff] mb-3 mx-auto" />,
              value: "30%",
              text: "reducción en tiempos de espera en caja",
            },
            {
              icon: <Smile className="w-10 h-10 text-[#0c6af8ff] mb-3 mx-auto" />,
              value: "+18%",
              text: "incremento en satisfacción del cliente",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all"
            >
              {stat.icon}
              <p className="text-4xl sm:text-5xl font-bold text-[#0c6af8ff] mb-2">
                {stat.value}
              </p>
              <p className="text-gray-700 text-sm sm:text-base">{stat.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-20 px-6 bg-white text-center relative z-10">
        <div className="max-w-3xl mx-auto bg-[#E5F0FF] p-10 rounded-2xl shadow-lg relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <p className="italic text-gray-700 mb-4 text-base sm:text-lg">
                “{testimonios[currentIndex].text}”
              </p>
              <p className="font-semibold text-gray-900 text-sm sm:text-base">
                — {testimonios[currentIndex].author}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {testimonios.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex ? "bg-[#0c6af8ff]" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center py-20 px-6 bg-white relative z-10">
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
          Que ninguna venta pase{" "}
          <span className="text-[#0c6af8ff]">desapercibida.</span>
        </h3>
        <button className="px-6 py-3 text-white font-medium rounded-lg shadow-md bg-gradient-to-r from-[#2563EB] to-[#374151] hover:scale-105 transition">
          Agenda una demostración →
        </button>
      </section>

      <FooterLeanRetail />
    </div>
  );
}
