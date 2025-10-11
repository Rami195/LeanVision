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
      <div className="mx-auto px-40 py-10 lg:py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="text-white">
            <p className="font-semibold">LeanVision</p>
            <div className="mt-6 space-y-4 text-[14px] leading-6">
              <p>Ver lo invisible, mejorar lo esencial.</p>
              <p>Transformamos procesos a través de visión artificial inspirada en</p>
              <p>principios Lean, generando valor medible para nuestros clientes.</p>
            </div>
            <div className="mt-10 space-y-4 text-[14px] leading-6">
              <p className="font-medium">Contacto</p>
              <p>Mail</p>
              <p>Celular</p>
              <p>Ubicación</p>
            </div>
          </div>

          <div className="flex justify-center">
            <form onSubmit={onSubmit} className="w-full max-w-[520px] rounded-md bg-[#e0e0e0] p-8 shadow">
              <p className="mb-6 text-sm">¡Habla con nuestros expertos!</p>

              <input type="hidden" name="_subject" value="Nuevo contacto desde LeanVision" />
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col">
                  <label className="mb-1 text-sm text-slate-700">Nombre *</label>
                  <input name="nombre" className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:border-sky-500" required />
                </div>
              
                <div className="flex flex-col">
                  <label className="mb-1 text-sm text-slate-700">Mail *</label>
                  <input type="email" name="email" className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm outline-none focus:border-sky-500" required />
                </div>
                
              </div>

              <div className="mt-4">
                <label className="mb-1 block text-sm text-slate-700">Tu mensaje *</label>
                <textarea name="mensaje" className="min-h-[110px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-sky-500" required />
              </div>

              {errorMsg && <p className="mt-3 text-sm font-medium text-red-700">{errorMsg}</p>}
              {status === "ok" && <p className="mt-3 text-sm font-medium text-emerald-700">¡Mensaje enviado!</p>}

              <button type="submit" disabled={status === "sending"} className="mt-6 w-full rounded-md bg-slate-800 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-slate-900 disabled:opacity-60">
                {status === "sending" ? "Enviando…" : "Enviar mensaje"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
