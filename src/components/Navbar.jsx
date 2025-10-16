// src/components/Navbar.jsx
"use client";
import { useEffect, useState } from "react";

const OFFSET = 90;

const IconMenu = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconClose = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Evitar scroll del body cuando el menú está abierto
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const scrollToId = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] md:w-[85%]
                   z-50 rounded-2xl border border-white/20 bg-white/70 backdrop-blur-md shadow-lg"
      >
        {/* Contenido en grid para evitar superposiciones */}
        <div className="grid grid-cols-[auto,1fr,auto] items-center gap-3 md:gap-6 px-4 md:px-6 h-16 lg:h-20">
          {/* LOGO */}
          <a
            href="#Hero"
            onClick={scrollToId("Hero")}
            className="text-lg font-semibold cursor-pointer text-gray-900 hover:text-blue-600 transition-colors"
            aria-label="Ir al inicio"
          >
            <div className="relative h-10 w-10 lg:h-12 lg:w-12 overflow-visible">
              <img
                src="/logoLV.png"
                alt="Logo de la marca"
                className="absolute inset-0 h-full w-full object-contain
                           origin-left transform-gpu
                           scale-[1.45] md:scale-[1.55] lg:scale-[1.65]
                           transition-transform duration-200 ease-out
                           hover:scale-[1.8]"
              />
            </div>
          </a>

          {/* NAV LINKS Desktop */}
          <ul className="hidden md:flex items-center justify-center gap-4 lg:gap-6 text-gray-800 font-medium">
            <li><a href="#Hero" onClick={scrollToId("Hero")} className="hover:text-blue-600 transition-colors">Inicio</a></li>
            <li><a href="#Principles" onClick={scrollToId("Principles")} className="hover:text-blue-600 transition-colors">Filosofía Lean</a></li>
            <li><a href="#Exito" onClick={scrollToId("Exito")} className="hover:text-blue-600 transition-colors">Casos de éxito</a></li>
            <li><a href="#NuestroEquipo" onClick={scrollToId("NuestroEquipo")} className="hover:text-blue-600 transition-colors">Nosotros</a></li>
            <li><a href="#footer" onClick={scrollToId("footer")} className="hover:text-blue-600 transition-colors">Contacto</a></li>
          </ul>

          {/* CTA Desktop (solo lg+ para no apretar) */}
          <div className="hidden lg:block">
            <button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition"
              onClick={scrollToId("footer")}
            >
              Solicita una demo
            </button>
          </div>

          {/* Botón Hamburger (mobile) */}
          <div className="md:hidden justify-self-end">
            <button
              className="group grid place-items-center h-10 w-10 rounded-xl border border-white/30 bg-white/60 text-gray-900 hover:bg-white transition"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <IconClose className="h-6 w-6 transition-transform duration-200 ease-out group-hover:scale-110" />
              ) : (
                <IconMenu className="h-6 w-6 transition-transform duration-200 ease-out group-hover:scale-110" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay (mobile) */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px] transition-opacity md:hidden
                    ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Panel móvil */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 top-[88px] w-[92%] md:hidden z-50
                    rounded-2xl border border-white/20 bg-white/90 backdrop-blur-md shadow-xl
                    transition-transform duration-300
                    ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}`}
      >
        <div className="p-4">
          <ul className="flex flex-col divide-y divide-gray-200/60 text-gray-800 font-medium">
            <li><a href="#Hero" onClick={scrollToId("Hero")} className="block py-3 px-2 rounded-lg hover:bg-gray-100">Inicio</a></li>
            <li><a href="#Principles" onClick={scrollToId("Principles")} className="block py-3 px-2 rounded-lg hover:bg-gray-100">Filosofía Lean</a></li>
            <li><a href="#Exito" onClick={scrollToId("Exito")} className="block py-3 px-2 rounded-lg hover:bg-gray-100">Casos de éxito</a></li>
            <li><a href="#NuestroEquipo" onClick={scrollToId("NuestroEquipo")} className="block py-3 px-2 rounded-lg hover:bg-gray-100">Nosotros</a></li>
            <li><a href="#footer" onClick={scrollToId("footer")} className="block py-3 px-2 rounded-lg hover:bg-gray-100">Contacto</a></li>
          </ul>

          <button
            onClick={scrollToId("footer")}
            className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Solicita una demo
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
