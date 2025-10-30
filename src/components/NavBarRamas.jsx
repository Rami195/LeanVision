// src/components/NavbarRamas.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

export default function NavbarRamas() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { label: "Inicio", path: "/" },
    { label: "Retail", path: "/retail" },
    { label: "Mobility", path: "/mobility" },
    { label: "Industry", path: "/industry" },
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 rounded-2xl border border-white/20 bg-white/70 backdrop-blur-md shadow-lg">
        <div className="grid grid-cols-[auto,1fr,auto] items-center gap-4 md:gap-6 px-4 md:px-6 h-16 lg:h-20">
          
          {/* LOGO MÁS GRANDE */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer flex items-center"
          >
            <img src="/logoLV.png" alt="Logo" className="h-16 w-16 md:h-20 md:w-20 object-contain" />
          </div>

          {/* Links Desktop */}
          <ul className="hidden md:flex items-center justify-center gap-6 lg:gap-8 text-gray-800 font-medium">
            {links.map((link) => (
              <li key={link.path}>
                <button
                  onClick={() => navigate(link.path)}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <div className="md:hidden justify-self-end">
            <button
              onClick={() => setOpen(!open)}
              className="h-10 w-10 rounded-xl border bg-white/60 text-gray-900 flex items-center justify-center shadow-sm"
            >
              {open ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Panel mobile */}
      <div
        className={`fixed left-1/2 -translate-x-1/2 top-[72px] w-[90%] max-w-sm md:hidden z-50
          rounded-2xl border border-white/20 bg-white/90 backdrop-blur-md shadow-xl
          transition-all duration-300 transform origin-top ${
            open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="p-4">
          <ul className="flex flex-col divide-y divide-gray-200/60 text-gray-800 font-medium">
            {links.map((link) => (
              <li key={link.path}>
                <button
                  onClick={() => {
                    navigate(link.path);
                    setOpen(false);
                  }}
                  className="block py-4 px-3 rounded-lg hover:bg-gray-100 w-full text-left transition"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
