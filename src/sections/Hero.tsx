import heroImg from "../assets/1.jpg";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-green-700 overflow-hidden">
      {/* Fondo decorativo (opcional pero queda 🔥) */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-green-700 to-emerald-600" />

      {/* CONTENEDOR GLASS */}
      <div
        className="relative container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-16
        bg-white/10 backdrop-blur-xl
        border border-white/20
        rounded-3xl
        shadow-2xl
      "
      >
        {/* TEXTO */}
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-light leading-tight">
            Convierte tus ideas en <span className="font-bold">REALIDAD</span>{" "}
            con nosotros
          </h1>

          <p className="text-green-100 text-lg md:text-2xl max-w-xl">
            Soluciones en impresión 3D rápidas, precisas y personalizadas.
          </p>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => {
                document
                  .getElementById("contactanos")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white/90 text-green-700 px-6 py-3 rounded-xl font-semibold hover:bg-white transition"
            >
              Cotizar ahora
            </button>

            <button               onClick={() => {
                document
                  .getElementById("proyectos")
                  ?.scrollIntoView({ behavior: "smooth" });
              }} className="border border-white/70 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition">
              Ver trabajos
            </button>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="flex justify-center items-center">
          <img
            src={heroImg}
            alt="R3Design"
            className="w-full max-w-md rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};
