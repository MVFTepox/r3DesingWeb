import image5 from "../assets/1.png";
import cartPritn from "../assets/2.png";
import image6 from "../assets/3.png";

export const Proyectsfavorite = () => {
  return (
    <>
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
        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-3 gap-5  ">
            <div className="w-100 h-100 shadow-2xl rounded-3xl ">
              <img className="resize rounded-3xl" src={image5} alt="" />
            </div>
            <div className="w-100 h-100 shadow-2xl rounded-3xl">
              <img className="resize rounded-3xl" src={image6} alt="" />
            </div>
            <div className="w-100 h-100 shadow-2xl rounded-3xl">
              <img className="resize rounded-3xl" src={cartPritn} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
