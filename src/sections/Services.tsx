import { CardService } from "../Components";
import { Icon } from "@iconify/react";

export const ServiceSection = () => {
  const data = [
    {
      icon: "mdi:printer-3d",
      title: "Impresión 3D",
      description: "Imprimimos modelos personalizados con alta precisión.",
    },
    {
      icon: "mdi:cube-scan",
      title: "Prototipado",
      description: "Validación rápida de ideas antes de producción final.",
    },
    {
      icon: "mdi:vector-square",
      title: "Diseño 3D",
      description: "Creamos o ajustamos tus modelos según tu necesidad.",
    },
  ];

  return (
    <section className="container mx-auto px-6 mb-16">
      {/* ENCABEZADO */}
      <div className="flex flex-col gap-4 py-10 text-center md:text-left">
        <p className="text-green-700 text-sm uppercase tracking-wide">
          Servicios
        </p>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-light leading-tight">
          Nuestros servicios de impresión
        </h1>
      </div>

      {/* CARDS */}
      <div className="flex flex-col md:flex-row gap-6">
        {data.map((item, index) => (
          <CardService key={index}>
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100">
              <Icon
                icon={item.icon}
                width={24}
                className="text-green-700"
              />
            </div>

            <h2 className="text-xl font-semibold text-green-700">
              {item.title}
            </h2>

            <p className="text-gray-600 text-sm">
              {item.description}
            </p>
          </CardService>
        ))}
      </div>
    </section>
  );
};
    