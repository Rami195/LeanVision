// src/components/Navbar.jsx
const Navbar = () => {
  // Altura de compensación por el navbar fijo (ajustá si lo cambiás)
  const OFFSET = 90;

  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%]
                 flex items-center justify-between px-8 py-3
                 bg-white/30 backdrop-blur-md shadow-lg rounded-2xl border border-white/20
                 z-50"
    >
      {/* LOGO / BRAND */}
      <a
        href="#Hero"
        onClick={scrollToId("Hero")}
        className="text-lg font-semibold cursor-pointer text-gray-900
                   hover:text-blue-600 transition-colors"
        aria-label="Ir al inicio"
      >
        Lean Vision
      </a>

      {/* NAV LINKS */}
      <ul className="hidden md:flex items-center gap-6 text-gray-800 font-medium">
        <li>
          <a href="#Hero" onClick={scrollToId("Hero")} className="hover:text-blue-600 transition-colors">
            Inicio
          </a>
        </li>
        <li>
          <a href="#Principles" onClick={scrollToId("Principles")} className="hover:text-blue-600 transition-colors">
            Filosofía Lean
          </a>
        </li>
        <li>
          <a href="#Exito" onClick={scrollToId("Exito")} className="hover:text-blue-600 transition-colors">
            Casos de éxito
          </a>
        </li>
        <li>
          <a href="#NuestroEquipo" onClick={scrollToId("NuestroEquipo")} className="hover:text-blue-600 transition-colors">
            Nosotros
          </a>
        </li>
        <li>
          <a href="#footer" onClick={scrollToId("footer")} className="hover:text-blue-600 transition-colors">
            Contacto
          </a>
        </li>
      </ul>

      <button
        className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600
                   text-white px-4 py-2 rounded-full font-semibold
                   hover:opacity-90 transition"
        onClick={scrollToId("footer")}
      >
        Solicita una demo
      </button>
    </nav>
  );
};

export default Navbar;
