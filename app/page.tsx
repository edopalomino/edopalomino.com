import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Proyectos", href: "/projects" },
  { name: "Contacto", href: "/contact" },
  { name: "Sobre mi", href: "/about" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
       <a rel="me" href="https://superhappy.social/@edopalomino"></a>
      <nav className="my-16">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        edopalomino
      </h1>

      <div className="hidden w-screen h-px md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center">
        <h2 className="text-lg text-zinc-500 ">
          Desarrollador de React Native, web, artista digital y alquimista de galletas.
        </h2>
      </div>
    </div>
  );
}