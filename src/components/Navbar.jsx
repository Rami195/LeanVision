import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const IconMenu = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconClose = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Inicio", id: "Hero" },
    { label: "Soluciones", id: "Solutiones" },
    { label: "Filosofía Lean", id: "Principles" },
    { label: "Nosotros", id: "NuestroEquipo" },
    { label: "Como Trabajamos", id: "ComoTrabajamos" },
    { label: "Contacto", id: "Footer" },
  ];

  const scrollToId = (id) => {
    if (location.pathname !== "/") return;
    const el = document.getElementById(id);
    if (!el) return;
    const OFFSET = 90;
    const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
    setOpen(false);
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] md:w-[85%] z-50 rounded-2xl border border-white/20 bg-white/70 backdrop-blur-md shadow-lg">
        <div className="grid grid-cols-[auto,1fr,auto] items-center px-4 md:px-6 h-16 lg:h-20">
          {/* LOGO */}
          <a onClick={() => scrollToId("Hero")} className="cursor-pointer">
            <img src="/logoLV.png" alt="Logo" className="h-14 w-14 md:h-16 md:w-16" />
          </a>

          {/* Links Desktop centrados */}
          <ul className="hidden md:flex justify-center gap-6 text-gray-800 font-medium">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  onClick={() => scrollToId(link.id)}
                  className="cursor-pointer hover:text-blue-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger Mobile */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center h-12 w-12 rounded-xl border bg-white/60 text-gray-900"
            >
              {open ? <IconClose className="m-auto" /> : <IconMenu className="m-auto" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Panel mobile */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 top-[88px] w-[92%] md:hidden z-50
                    rounded-2xl border border-white/20 bg-white/90 backdrop-blur-md shadow-xl
                    transition-transform duration-300 ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"}`}
      >
        <div className="p-4 flex flex-col items-center">
          <ul className="flex flex-col divide-y divide-gray-200/60 text-gray-800 font-medium w-full">
            {links.map((link) => (
              <li key={link.id} className="w-full">
                <a
                  onClick={() => scrollToId(link.id)}
                  className="block py-4 px-2 rounded-lg hover:bg-gray-100 w-full text-center"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
