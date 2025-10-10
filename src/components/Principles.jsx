import { motion } from "framer-motion";

const principlesData = [
  {
    title: "Compromiso",
    subtitle: "Cumplir siempre",
    desc: "Nos esforzamos al máximo en cada proyecto, garantizando calidad y responsabilidad.",
  },
  {
    title: "Innovación",
    subtitle: "Pensar diferente",
    desc: "Buscamos soluciones creativas que hagan la diferencia y generen valor real.",
  },
  {
    title: "Transparencia",
    subtitle: "Confianza real",
    desc: "Valoramos la comunicación clara, la honestidad y el respeto en cada paso.",
  },
  {
    title: "Excelencia",
    subtitle: "Más allá del estándar",
    desc: "Nos impulsa la mejora continua y la pasión por los detalles.",
  },
];

export default function Principles() {
  return (
    <section className="w-full py-24 px-6 bg-[#374151] flex justify-center items-center">
      <div className="max-w-6xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 text-[#fbbd23]"
        >
          Nuestros Principios
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 mb-12"
        >
          La base de todo lo que hacemos
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
