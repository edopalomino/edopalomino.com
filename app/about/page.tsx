import React from "react";
import { Navigation } from "app/components/nav";

export default function AboutPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="flex flex-col md:flex-row md:justify-between max-w-2xl mx-auto">
          <img src="https://res.cloudinary.com/deeqmbkhc/image/upload/v1708201023/edopalomino/ipcqronjkvaqovh7b1a2.jpg" alt="Imagen de perfil" className="w-64 h-64 rounded-full mx-auto md:ml-4 md:mr-0 mb-4 md:mb-0" />
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Soy Edo Palomino. Desarrolador de React Native, web y alquimista de galletas.
            </h2>
            <p className="mt-4 text-zinc-400">
              Siempre me ha gustado crear, mi gran sueño era crear un videojuego, pero grandes ideas requieren grandes inversiones, así que decidí crear algo más pequeño.
            </p>
            <p className="mt-4 text-zinc-400">
            Gracias a mi trabajo he conocido a muchas personas y creado muchas cosas, pero siempre he querido tener un lugar donde compartir mis ideas y proyectos. Así que aquí estoy, creando mi propio espacio.
            </p>
            <p className="mt-4 text-zinc-400">
            Donde quizás no encuentres grandes proyectos, pero sí pequeñas ideas que puedan ayudarte o entretenerte.
            </p>
          </div>
        </div>
        <div className="w-full h-px bg-zinc-800" />
      </div>
    </div>
  );
}