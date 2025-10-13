import { motion } from "framer-motion";

const principlesData = [
  {
    title: "Kaizen",
    subtitle: "Mejora continua",
    desc: "Evolución constante através de pequeños cambios incrementales que generan gran impacto.",
  },
  {
    title: "Muda",
    subtitle: "Eliminación de desperdicio",
    desc: "Identificamos y eliminamos actividades que no agregan valor al proceso productivo.",
  },
  {
    title: "Jidoka",
    subtitle: "Detección de fallas",
    desc: "Paramos el proceso ante el primer signo de defecto para evitar la propagación del error.",
  },
  {
    title: "Gemba",
    subtitle: "Decisión en el lugar",
    desc: "Las mejores decisiones se toman donde ocurre la acción real, con datos en tiempo real.z",
  },
];

export default function Principles() {
  return (
    <section id="Principles" className="w-full py-24 px-6 bg-[#EAF2FF] flex justify-center items-center">
      <div className="max-w-6xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-blue-600"
        >
          Principios Lean
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-700 mb-12"
        >
          Nuestra visión artificial está fundamentada en los principios japoneses que revolucionaron la manufactura mundial.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {principlesData.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2 text-[#2a458f]">
                {card.title}
              </h3>
              <h4 className="text-[#fbbd23] mb-3 font-medium">
                {card.subtitle}
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}