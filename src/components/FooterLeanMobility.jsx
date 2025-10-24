"use client";
import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdkwbqez";

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
    <footer id="footer" className="w-full bg-[#12510b] py-6 font-titillium">
      <div className="mx-auto px-4 py-10 sm:px-6 md:py-12 lg:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 min-h-[60vh] lg:min-h-0">
          {/* ----- Columna de información ----- */}
          <div className="text-white flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <img
              className="h-40 rounded-full mb-6 lg:mb-0"
              src="/LogoLeanMobility1.jpg"
              alt="Logo LeanVision"
            />

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
                  <span className="font-medium text-white">Email:</span>{" "}
                  contacto@leanvision.ai
                </p>
                <p>
                  <span className="font-medium text-white">Teléfono:</span> +54 9 2616119753
                </p>
                <p>
                  <span className="font-medium text-white">Ubicación:</span>{" "}
                  Rafael Cubillos 2056, M5505 Godoy Cruz, Mendoza
                </p>
              </div>
              
              <div className="mt-5 flex gap-3 justify-center lg:justify-start">
                <a
                  href="https://wa.me/message/DRZTCNR6UJXQC1?src=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-[#25D366] text-white rounded-md transition-all duration-300 hover:scale-110"
                  title="Contactanos por WhatsApp"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
                
                <a
                  href="https://www.linkedin.com/company/lean-vision-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-[#0A66C2] text-white rounded-md transition-all duration-300 hover:scale-110"
                  title="Seguinos en LinkedIn"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              
              <div className="mt-4 w-full h-48 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.437198375359!2d-68.8206824!3d-32.939464799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0bf31018e1d5%3A0xd272359691e34683!2sMendoza%20TIC%20Parque%20Tecnol%C3%B3gico!5e0!3m2!1ses-419!2sar!4v1760797102058!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación LeanVision en Mendoza, Argentina"
                />
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
                  <label
                    htmlFor="nombre"
                    className="mb-1 text-sm text-slate-700"
                  >
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
                  <label
                    htmlFor="apellido"
                    className="mb-1 text-sm text-slate-700"
                  >
                    Apellido
                  </label>
                  <input
                    id="apellido"
                    name="apellido"
                    className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:border-[#1B3159] focus:ring-2 focus:ring-[#1B3159]/30 transition-all"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="mb-1 text-sm text-slate-700"
                  >
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
                  <label
                    htmlFor="celular"
                    className="mb-1 text-sm text-slate-700"
                  >
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
                  <label
                    htmlFor="compania"
                    className="mb-1 text-sm text-slate-700"
                  >
                    Compañía
                  </label>
                  <input
                    id="compania"
                    name="compania"
                    className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:border-[#1B3159] focus:ring-2 focus:ring-[#1B3159]/30 transition-all"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="producto"
                    className="mb-1 text-sm text-slate-700"
                  >
                    Producto
                  </label>
                  <select
                    id="producto"
                    name="producto"
                    className="h-11 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:border-[#1B3159] focus:ring-2 focus:ring-[#1B3159]/30 transition-all cursor-pointer"
                  >
                    <option value="">Seleccioná un producto</option>
                    <option value="Lean Mobility">Lean Mobility</option>
                    <option value="Personalizado">Desarrollo personalizado</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="mensaje"
                  className="mb-1 block text-sm text-slate-700"
                >
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
                {errorMsg && (
                  <p className="text-sm font-medium text-red-700">{errorMsg}</p>
                )}
                {status === "ok" && (
                  <p className="text-sm font-medium text-emerald-700">
                    ¡Mensaje enviado!
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-5 w-full rounded-md bg-[#1f6f14] px-4 py-3 text-sm font-semibold text-white shadow hover:bg-[#1A540D] disabled:opacity-60 sm:text-base transition-colors"
              >
                {status === "sending" ? "Enviando…" : "Enviar mensaje"}
              </button>

              <p className="mt-3 hidden text-xs text-slate-800 sm:block">
                Al enviar aceptás ser contactad@ para coordinar una demo o
                responder tu consulta.
              </p>
            </form>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-10 border-t border-white/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-white/90 sm:flex-row">
            <p className="text-xs md:text-sm">
              © {new Date().getFullYear()} LeanVision. Todos los derechos
              reservados.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
              <a href="#privacidad" className="hover:text-white">
                Privacidad
              </a>
              <span className="opacity-40">•</span>
              <a href="#terminos" className="hover:text-white">
                Términos
              </a>
              <span className="opacity-40">•</span>
              <a href="#contacto" className="hover:text-white">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}