"use client";
import { useEffect, useRef } from "react";

export default function CarouselTech() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  const tech = [
    { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ];

  // duplicamos para efecto infinito
  const duplicated = [...tech, ...tech];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const speed = 2; // px por frame aprox (ajusta a tu gusto)
    let lastTime = performance.now();

    const step = (now: number) => {
      // pausa si hover
      if (!container || pausedRef.current) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      const dt = now - lastTime;
      lastTime = now;

      // mover en función del tiempo transcurrido para tener velocidad más estable
      // 0.8 px/frame ≈ 0.8 * (dt / 16.67) px
      const px = speed * (dt / 16.67);
      container.scrollLeft += px;

      // si llegamos a la mitad (segunda copia), restamos la mitad para "mover" al equivalente sin salto
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft -= container.scrollWidth / 2;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    // cleanup
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // handlers para pausar en hover
  const onMouseEnter = () => (pausedRef.current = true);
  const onMouseLeave = () => (pausedRef.current = false);

  return (
    <div className="w-full overflow-hidden py-8">
      {/* contenedor visible con ancho total; el área que se desplaza es este div */}
      <div
        ref={scrollRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="w-full overflow-x-auto scrollbar-hide"
        // evita que el usuario vea "snap" al hacer click-drag: permite desplazamiento suave
        style={{ scrollBehavior: "auto" }}
      >
        {/* contenido: inline-flex para que el contenido sea más ancho que el contenedor */}
        <div className="inline-flex gap-6 px-4 py-2">
          {duplicated.map((item, index) => (
            <div
              key={index}
              className="min-w-[240px] h-[240px]
                rounded-2xl shadow-lg  backdrop-blur-3xl
                flex flex-col items-center justify-center p-6
                hover:scale-105 transition-transform"
            >
              <img src={item.src} alt={item.name} className="w-24 h-24 mb-4" />
              <p className="font-semibold text-lg">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
