import incon from "../assets/1.jpg";
import { Icon } from "@iconify/react";

export const Footer = () => {
  return (
    <footer className="bg-green-700 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Contenido principal */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src={incon}
              alt="R3Design logo"
              className="w-32 h-32 object-cover rounded-3xl"
            />
          </div>

          {/* Contactame */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Contactame</h2>

            <p className="mb-2 flex items-center">
              <Icon icon="mdi:email" className="mr-2" />
              <a href="mailto:8713457990pepe@gmail.com">8713457990pepe@gmail.com</a>
            </p>

            <p className="mb-2 flex items-center">
              <Icon icon="mdi:phone" className="mr-2" />
              <a href="tel:8712419520">+52 8712419520</a>
            </p>


          </div>

          {/* Redes sociales */}
          <div className="text-center md:text-right">
            <h2 className="text-lg font-semibold mb-3">
              Nuestras Redes Sociales
            </h2>

            <div className="flex justify-center md:justify-end gap-5">
              <a
                href="https://www.facebook.com/share/1C7NaFiCgT/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-300 transition"
              >
                <Icon
                  icon="mdi:facebook"
                  className="text-3xl hover:scale-110 transition-transform"
                />
              </a>

              <a
                href="https://instagram.com/r3desing_"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-300 transition"
              >
                <Icon
                  icon="mdi:instagram"
                  className="text-3xl hover:scale-110 transition-transform"
                />
              </a>

              
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-green-600 py-4">
        <p className="text-center text-sm">
          © 2023 <span className="font-bold">R3Design</span>. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};
