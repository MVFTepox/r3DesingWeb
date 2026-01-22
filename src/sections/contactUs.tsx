import { useRef, useState } from "react";
import type { ChangeEvent } from "react";

type PreviewFile = {
  file: File;
  url: string;
};

export const ContactUs = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<PreviewFile[]>([]);

  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selected = Array.from(e.target.files).map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setFiles((prev) => [...prev, ...selected]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].url);
      updated.splice(index, 1);
      return updated;
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section className="bg-black p-6 md:p-12">
      <div className="container mx-auto bg-white rounded-3xl px-6 md:px-12 py-12 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LADO IZQUIERDO */}
          <div className="flex flex-col gap-6">
            <span id="contactanos" className="inline-block w-fit px-4 py-1 text-sm uppercase tracking-widest text-green-700 bg-green-100 rounded-full">
              Contáctanos
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-light leading-tight text-gray-900">
              Hablemos de tu{" "}
              <span className="text-green-700 font-normal">proyecto</span>
            </h1>

            <p className="text-gray-600 max-w-md">
              Adjunta imágenes de referencia. Puedes verlas aquí y quitar las
              que no quieras antes de enviar 🌱
            </p>

            {/* PREVIEW DE IMÁGENES */}
            {files.length > 0 && (
              <div className="grid grid-cols-3 gap-3">
                {files.map((item, index) => (
                  <div
                    key={index}
                    className="relative group rounded-xl overflow-hidden border border-green-700"
                  >
                    <img
                      src={item.url}
                      alt={`preview-${index}`}
                      className="h-28 w-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="absolute top-1 right-1 bg-black/70 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* LADO DERECHO */}
          <form
            action="https://formsubmit.co/8713457990pepe@gmail.com"
            method="POST"
            encType="multipart/form-data"
            className="flex flex-col gap-4 bg-green-50 p-6 rounded-2xl border border-green-100"
          >
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              required
              className="rounded-xl border border-green-700 px-4 py-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />

            <input
              type="email"
              name="correo"
              placeholder="Correo electrónico"
              required
              className="rounded-xl border border-green-700 px-4 py-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />

            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono (opcional)"
              className="rounded-xl border border-green-700 px-4 py-3 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />

            <textarea
              name="mensaje"
              placeholder="Cuéntanos tu idea…"
              rows={4}
              required
              className="rounded-xl border border-green-700 px-4 py-3 resize-none focus:ring-2 focus:ring-green-600 focus:outline-none"
            />

            {/* INPUT FILE */}
            <label className="flex items-center justify-between gap-4 rounded-xl border border-dashed border-green-400 bg-white px-4 py-3 text-green-700 cursor-pointer hover:bg-green-100 transition">
              <span className="text-sm">📎 Adjuntar imágenes</span>
              <span className="text-xs text-green-600">JPG / PNG</span>

              <input
                ref={fileInputRef}
                type="file"
                name="archivos"
                multiple
                accept="image/*"
                onChange={handleFiles}
                className="hidden"
              />
            </label>
            <span className="text-xs text-green-600">
              Puedes adjuntar hasta 3 imagenes
            </span>

            {/* FORMSUBMIT CONFIG */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value="Nuevo mensaje desde la web"
            />

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-green-700 py-3 text-white font-medium hover:bg-green-800 active:scale-[0.98] transition-all"
            >
              Enviar mensaje 🚀
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
