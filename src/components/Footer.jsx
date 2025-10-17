"use client";
import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xldppgbb";

export default function FooterLean() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setErrorMsg("");
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    const nombre = String(data.get("nombre") || "");
    const email = String(data.get("email") || "");
    const mensaje = String(data.get("mensaje") || "");
    if (!nombre || !email || !mensaje) {
      setStatus("idle");
      setErrorMsg("Completá nombre, email y mensaje.");
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("No se pudo enviar.");
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg("Error al enviar. Probá de nuevo.");
      console.error(err);
    }
  }

  return (
    <footer id="footer" className="w-full bg-slate-900 py-6 font-titillium">
      <div className="mx-auto px-4 py-10 sm:px-6 md:py-12 lg:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 min-h-[60vh] lg:min-h-0">
          {/* ----- Columna de información ----- */}
          <div className="text-white flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <img className="h-40 rounded-full mb-6 lg:mb-0" src="/logo.png" alt="Logo LeanVision" />

            <div className="mt-4 space-y-2 text-xl leading-6 md:text-base text-center lg:text-left">
              <h3>Ver lo invisible, mejorar lo esencial.</h3>
              <p>
                Transformamos procesos a través de visión artificial inspirada
                en principios Lean, generando valor medible para nuestros
                clientes.
              </p>
            </div>

            <div className="mt-8 space-y-2 text-sm leading-6 sm:text-base text-center lg:text-left">
              <p className="font-medium">Contacto</p>
              <div className="mt-2 grid grid-cols-1 gap-2 text-white/90 sm:grid-cols-1 sm:gap-3">
                <p>
                  <span className="font-medium text-white">Mail:</span>{" "}
                  contacto@leanvision.ai
                </p>
                <p>
                  <span className="font-medium text-white">Celular:</span> +54
                  261111111
                </p>
                <p>
                  <span className="font-medium text-white">Ubicación:</span>{" "}
                  Mendoza, Argentina
                </p>
              </div>
            </div>
          </div>

          {/* ----- Columna del formulario ----- */}
          <div className="lg:flex lg:justify-end">
            <form
              onSubmit={onSubmit}
              className="w-full max-w-xl rounded-xl bg-[#e0e0e0] p-5 pb-4 shadow md:p-6 md:pb-4 lg:p-7 lg:pb-5"
            >
              <p className="mb-5 text-base font-medium text-slate-800">
                ¡Hablá con nuestros expertos!
              </p>

              <input
                type="hidden"
                name="_subject"
                value="Nuevo contacto desde LeanVision"
              />
              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label htmlFor="nombre" className="mb-1 text-sm text-slate-700">
                    Nombre *
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    autoComplete="name"
                    className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:border-[#1B3159] focus:ring-2 focus:ring-[#1B3159]/30 transition-all"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="apellido" className="mb-1 text-sm text-slate-700">
                    Apellido
                  </label>
                  <input
                    id="apellido"
                    name="apellido"
                    className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:border-[#1B3159] focus:ring-2 focus:ring-[#1B3159]/30 transition-all"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-1 text-sm text-slate-700">
                    Mail *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:border-[#1B3159] focus:ring-2 focus:ring-[#1B3159]/30 transition-all"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="celular" className="mb-1 text-sm text-slate-700">
                    Celular
                  </label>
                  <input
                    id="celular"
                    name="celular"
                    type="tel"
                    placeholder="+54 9 ..."
                    className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:border-[#1B3159] focus:ring-2 focus:ring-[#1B3159]/30 transition-all"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="compania" className="mb-1 text-sm text-slate-700">
                    Compañía
                  </label>
                  <input
                    id="compania"
                    name="compania"
                    className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:border-[#1B3159] focus:ring-2 focus:ring-[#1B3159]/30 transition-all"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="producto" className="mb-1 text-sm text-slate-700">
                    Producto
                  </label>
                  <select
                    id="producto"
                    name="producto"
                    className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:border-[#1B3159] focus:ring-2 focus:ring-[#1B3159]/30 transition-all cursor-pointer"
                  >
                    <option value="">Seleccioná un producto</option>
                    <option value="Lean Mobility">Lean Mobility</option>
                    <option value="Lean Retailing">Lean Retail</option>
                    <option value="Lean Industry">Lean Industry</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="mensaje" className="mb-1 block text-sm text-slate-700">
                  Tu mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={3}
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#1B3159] focus:ring-2 focus:ring-[#1B3159]/30 transition-all resize-y"
                  required
                />
              </div>

              <div className="mt-3 min-h-[1.25rem]" aria-live="polite">
                {errorMsg && <p className="text-sm font-medium text-red-700">{errorMsg}</p>}
                {status === "ok" && <p className="text-sm font-medium text-emerald-700">¡Mensaje enviado!</p>}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-5 w-full rounded-md bg-[#1B3159] px-4 py-3 text-sm font-semibold text-white shadow hover:bg-[#2a458f] disabled:opacity-60 sm:text-base transition-colors"
              >
                {status === "sending" ? "Enviando…" : "Enviar mensaje"}
              </button>

              <p className="mt-3 hidden text-xs text-slate-600 sm:block">
                Al enviar aceptás ser contactad@ para coordinar una demo o
                responder tu consulta.
              </p>
            </form>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-10 border-t border-white/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-white/90 sm:flex-row">
            <p className="text-xs sm:text-sm">
              © {new Date().getFullYear()} LeanVision. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              <a href="#privacidad" className="hover:text-white">Privacidad</a>
              <span className="opacity-40">•</span>
              <a href="#terminos" className="hover:text-white">Términos</a>
              <span className="opacity-40">•</span>
              <a href="#contacto" className="hover:text-white">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
