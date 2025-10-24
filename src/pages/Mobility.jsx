"use client";
import React from "react";
import { motion } from "framer-motion";
import FooterLeanMobility from "../components/FooterLeanMobility";

export default function Mobility() {
  return (
    <div className="relative text-gray-900">
      {/* HERO con VIDEO DE FONDO */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-gray-900">
        {/* Video de fondo */}
        <motion.video
          src="/LeanMobilityBackground.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Overlay solo sobre el video */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 -z-10"></div>

        {/* Card con contenido */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-16 py-32 mt-36 mb-20"
        >
          <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-10 md:gap-16 p-8 md:p-24">
            {/* Texto */}
            <div className="md:w-1/2 text-center md:text-left space-y-6 md:space-y-8">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight break-words"
              >
                Tu ciudad no puede perder{" "}
                <span className="text-[#15b437ff]">más tiempo.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-gray-700 break-words"
              >
                Con Lean Mobility, cada segundo cuenta: soluciones ágiles, seguras
                y sostenibles para optimizar la movilidad urbana.
              </motion.p>
              <motion.div className="flex justify-center md:justify-start">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="px-8 py-4 text-lg text-white font-semibold rounded-lg shadow-md bg-gradient-to-r from-[#18a04b] to-[#215d00] hover:scale-105 transition"
                >
                  Solicita una demo →
                </motion.button>
              </motion.div>
            </div>

            {/* Video dentro de la card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="md:w-2/3 flex justify-center w-full"
            >
              <video
                src="/mobility.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-2xl shadow-xl w-full max-w-full md:max-w-5xl object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* RESTO DE LA PÁGINA CON FONDO GRIS */}
      <div className="bg-[#CCCCCC] pt-16">

        {/* COSTO INVISIBLE */}
        <section className="bg-white rounded-2xl shadow-md py-16 px-8 md:px-20 text-center max-w-6xl mx-auto mb-16 mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            El tiempo perdido en el tránsito es un{" "}
            <span className="text-[#15b437ff]">costo invisible.</span>
          </h2>
          <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
            Congestión, semáforos mal sincronizados y accidentes generan miles de
            horas perdidas y toneladas de emisiones innecesarias. Lean Mobility
            hace visible lo que antes era invisible para devolver fluidez a tu
            ciudad.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Miles de horas perdidas" },
              { title: "Accidentes no detectados" },
              { title: "Emisiones innecesarias" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-[#f9f9f9] border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-[#15b437ff]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* SOLUCIONES */}
        <section className="bg-white rounded-2xl shadow-md py-16 px-8 md:px-20 text-center max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">
            Movilidad más ágil, segura y sostenible.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Flujo inteligente", desc: "Coordinación en tiempo real del tránsito." },
              { title: "Ciudades más seguras", desc: "Reducción de siniestros con visión inteligente." },
              { title: "Movilidad conectada", desc: "Análisis predictivo de comportamiento vial." },
            ].map((card, i) => (
              <div
                key={i}
                className="p-8 bg-[#f9f9f9] border border-gray-200 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[#15b437ff] mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-700">{card.desc}</p>
              </div>
            ))}
          </div>
          <button className="mt-10 px-6 py-3 bg-gradient-to-r from-[#18a04b] to-[#215d00] text-white rounded-lg font-medium shadow-md hover:scale-105 transition">
            Conoce cómo funciona →
          </button>
        </section>

        {/* DATOS INVISIBLES */}
        <section className="bg-white rounded-2xl shadow-md py-16 px-8 md:px-20 max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            De los datos invisibles a una{" "}
            <span className="text-[#15b437ff]">ciudad que fluye.</span>
          </h2>
          <div className="space-y-6">
            {[
              { title: "Gestión inteligente de semáforos", tag: "Optimización del transporte" },
              { title: "Detección temprana de incidentes", tag: "Seguridad vial urbana" },
              { title: "Optimización de rutas de transporte público", tag: "Mayor eficiencia operativa" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row items-center justify-between bg-[#f9f9f9] border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-[#15b437ff] mb-2 md:mb-0">
                  {item.title}
                </h3>
                <span className="text-sm bg-[#15b43720] text-[#215d00] px-4 py-2 rounded-lg font-medium">
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* RESULTADOS */}
        <section className="bg-white rounded-2xl shadow-md py-16 px-8 md:px-20 text-center max-w-6xl mx-auto mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Resultados visibles en la{" "}
            <span className="text-[#15b437ff]">vida urbana.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { stat: "-35%", desc: "en tiempos de espera promedio" },
              { stat: "↑", desc: "Mayor eficiencia en rutas de transporte público" },
              { stat: "↓", desc: "Reducción de emisiones asociadas al tráfico detenido" },
            ].map((result, i) => (
              <div
                key={i}
                className="p-8 bg-[#f9f9f9] border border-gray-200 rounded-xl shadow-sm"
              >
                <p className="text-4xl font-bold text-[#15b437ff] mb-3">{result.stat}</p>
                <p className="text-gray-700">{result.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIO */}
        <section className="bg-white rounded-2xl shadow-md py-12 px-8 md:px-20 max-w-6xl mx-auto mb-16">
          <div className="border-l-4 border-[#15b437ff] pl-6">
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              "Gracias a Lean Mobility, logramos reducir significativamente los tiempos de viaje en los principales corredores de la ciudad."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#15b437ff] flex items-center justify-center text-white font-bold">
                SM
              </div>
              <div className="text-left">
                <p className="font-semibold">Subsecretaría de Movilidad</p>
                <p className="text-gray-500 text-sm">Ciudad de referencia</p>
              </div>
            </div>
          </div>
        </section>

        {/* FLUJO DE MOVILIDAD */}
        <section className="max-w-6xl mx-auto mb-16 px-8 md:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Así fluye la movilidad con Lean.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "📸", step: "01", title: "Captura", desc: "Cámaras y sensores en intersecciones clave." },
              { icon: "🧠", step: "02", title: "Análisis", desc: "Algoritmos predicen y optimizan el tránsito en tiempo real." },
              { icon: "⚡", step: "03", title: "Acción", desc: "Ajustes automáticos y dashboards para autoridades de movilidad." },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-[#f9f9f9] rounded-xl border border-gray-200 shadow-sm"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#15b437ff] mb-2">
                  {item.step} - {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
          <button className="mt-12 px-8 py-4 bg-gradient-to-r from-[#18a04b] to-[#215d00] text-white font-semibold rounded-lg shadow-md hover:scale-105 transition">
            Solicita un piloto en tu ciudad →
          </button>
        </section>

        {/* CALL TO ACTION FINAL */}
        <section className="bg-white rounded-2xl shadow-md py-16 px-8 md:px-20 text-center max-w-6xl mx-auto mb-32">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Una ciudad que se mueve mejor, es una ciudad que vive mejor.
          </h2>
          <p className="text-gray-700 mb-8">
            Transformá la movilidad urbana con tecnología inteligente y sostenible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-[#15b437ff] text-white rounded-lg font-medium shadow-md hover:scale-105 transition">
              Pedir un estudio vial
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg font-medium hover:bg-gray-100 transition">
              Ver caso de éxito
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <FooterLeanMobility />
      </div>
    </div>
  );
}
