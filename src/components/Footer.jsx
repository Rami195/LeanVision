// src/components/FooterLean.jsx
"use client";
import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xldppgbb";

export default function FooterLean() {
  const [status, setStatus] = useState("idle"); // "idle" | "sending" | "ok" | "error"
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
    <footer id="footer" className="w-full bg-blue-600">
      {/* Contenedor responsivo */}
      <div className="mx-auto px-4 py-10 sm:px-6 md:py-12 lg:px-40">


        <div className="grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-2">

          <div className="text-white">
            <p className="text-lg font-semibold sm:text-xl">LeanVision</p>

            <div className="mt-4 space-y-2 text-sm leading-6 sm:text-base">
              <p>Ver lo invisible, mejorar lo esencial.</p>
              <p>
                Transformamos procesos a través de visión artificial inspirada en
                principios Lean, generando valor medible para nuestros clientes.
              </p>
            </div>

            <div className="mt-8 space-y-2 text-sm leading-6 sm:text-base">
              <p className="font-medium">Contacto</p>
              {/* En móvil se apilan, en md usan dos columnas compactas */}
              <div className="mt-2 grid grid-cols-1 gap-2 text-white/90 sm:grid-cols-1 sm:gap-3">
                <p><span className="font-medium text-white">Mail:</span> contacto@leanvision.ai</p>
                <p><span className="font-medium text-white">Celular:</span> +54 261111111</p>
                <p><span className="font-medium text-white">Ubicación:</span> Mendoza, Argentina</p>
              </div>
            </div>
          </div>


          <div className="lg:flex lg:justify-end">
            <form
              onSubmit={onSubmit}
              className="w-full max-w-xl rounded-xl bg-[#e0e0e0] p-5 shadow md:p-6 lg:p-7"
            >
              <p className="mb-5 text-sm text-slate-800 sm:text-base">
                ¡Hablá con nuestros expertos!
              </p>

              <input type="hidden" name="_subject" value="Nuevo contacto desde LeanVision" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />


              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label htmlFor="nombre" className="mb-1 text-sm text-slate-700">Nombre *</label>
                  <input
                    id="nombre"
                    name="nombre"
                    autoComplete="name"
                    className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:border-sky-500"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email" className="mb-1 text-sm text-slate-700">Mail *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:border-sky-500"
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="mensaje" className="mb-1 block text-sm text-slate-700">Tu mensaje *</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500"
                  required
                />
              </div>

              {/* Mensajes accesibles */}
              <div className="mt-3 min-h-[1.25rem]" aria-live="polite">
                {errorMsg && (
                  <p className="text-sm font-medium text-red-700">{errorMsg}</p>
                )}
                {status === "ok" && (
                  <p className="text-sm font-medium text-emerald-700">¡Mensaje enviado!</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-5 w-full rounded-md bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow hover:bg-slate-950 disabled:opacity-60 sm:text-base"
              >
                {status === "sending" ? "Enviando…" : "Enviar mensaje"}
              </button>

              {/* Notita legal/chica que se oculta en xs si querés */}
              <p className="mt-3 hidden text-xs text-slate-600 sm:block">
                Al enviar aceptás ser contactad@ para coordinar una demo o responder tu consulta.
              </p>
            </form>
          </div>
        </div>

        {/* Línea y mini footer en móvil/desktop */}
        <div className="mt-10 border-t border-white/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-white/90 sm:flex-row">
            <p className="text-xs sm:text-sm">© {new Date().getFullYear()} LeanVision. Todos los derechos reservados.</p>
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
