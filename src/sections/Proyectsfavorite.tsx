import image5 from "../assets/1.png";
import cartPritn from "../assets/2.png";
import image6 from "../assets/3.png";

export const Proyectsfavorite = () => {
  return (
    <div id="proyectos" className="container mx-auto px-6 mb-16">
      {/* ENCABEZADO */}
      <div className="flex flex-col gap-4 py-10 text-center md:text-left">
        <p className="text-green-700 text-sm uppercase tracking-wide">
          Proyectos
        </p>
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-light leading-tight">
          Proyectos favoritos
        </h1>
      </div>

      {/* GRID RESPONSIVO */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[image5, image6, cartPritn].map((img, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-3xl shadow-2xl group"
          >
            <img
              src={img}
              alt={`Proyecto ${i + 1}`}
              className="w-full h-64 md:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
