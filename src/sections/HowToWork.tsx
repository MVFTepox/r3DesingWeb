import { Icon } from "@iconify/react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: "mdi:paper-plane",
      title: "1. Contactanos",
      description:
        "Envianos tus archivos digitales y te contactaremos para cotizar tu proyecto. ",
    },
    {
      icon: "mdi:printer-3d",
      title: "2. Imprimimos",
      description:
        "Imprimimos tus modelos personalizados con alta precisión en una impresora 3D de alta calidad.",
    },
    {
      icon: "mdi:truck-delivery",
      title: "3. Entrega rápida",
      description:
        "Enviamos tus piezas directamente a tu puerta. Nuestro servicio de entrega es rápido y seguro.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Cómo funciona
          </h2>
          <p className="text-gray-500 mt-2">
            Del archivo digital al objeto físico en tres sencillos pasos.
          </p>
        </div>

        {/* Línea horizontal */}
        <div className="relative flex justify-between items-start">
          <div className="absolute top-7 left-0 w-full h-0.5 bg-green-400" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-col items-center text-center w-1/3 px-4"
            >
              {/* Icono */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-green-400 bg-white text-green-500">
                <Icon icon={step.icon} className="text-2xl" />
              </div>

              {/* Texto */}
              <h3 className="mt-6 font-semibold text-gray-800">{step.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
