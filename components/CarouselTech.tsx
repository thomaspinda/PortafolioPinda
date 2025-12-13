"use client";
import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface TechItem {
  name: string;
  src: string;
  description: string;
}

export default function CarouselTech() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  
  // CONFIGURACIÓN
  const baseSpeed = 3;  // Velocidad constante suave (Móvil y PC reposo)
  const hoverSpeed = 8;   // Velocidad rápida (Solo PC hover)
  
  const speedRef = useRef(baseSpeed); 
  const isDraggingRef = useRef(false); // Para detectar si el usuario está tocando la pantalla (móvil)

  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  const tech: TechItem[] = [
    { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", description: "Estructura semántica para la web moderna." },
    { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", description: "Estilos y diseño responsivo avanzado." },
    { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", description: "Interactividad y lógica dinámica en el cliente." },
    { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", description: "Superset de JS con tipado estático robusto." },
    { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "Biblioteca para interfaces de usuario basadas en componentes." },
    { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", description: "Framework de React para producción y SSR." },
    { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", description: "Base de datos relacional potente y open source." },
    { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", description: "Entorno de ejecución para JavaScript en el servidor." },
    { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", description: "Control de versiones distribuido." },
    { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", description: "Plataforma de alojamiento de código y colaboración." },
    { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", description: "Lenguaje versátil para backend, IA y scripting." },
    { name: "Django", src: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/django/django-plain.svg", description: "Framework web de alto nivel para Python." },
    { name: "Tailwind CSS", src: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/tailwindcss/tailwindcss-original.svg", description: "Framework de utilidades para diseño rápido." },
    { name: "Express.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", description: "Framework minimalista para servidores Node.js." },
    { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", description: "Base de datos NoSQL orientada a documentos." },
    { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", description: "Plataforma de contenerización de aplicaciones." },
    { name: "AWS", src: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", description: "Servicios de computación en la nube." },
    { name: "Linux", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", description: "Sistema operativo de código abierto." },
    { name: "VS Code", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", description: "Editor de código fuente potente y ligero." },
    { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", description: "Herramienta de diseño de interfaces colaborativa." },
    { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", description: "Lenguaje de programación de propósito general." },
    { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", description: "Lenguaje de alto rendimiento y uso en sistemas." },
    { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", description: "Lenguaje orientado a objetos y multiplataforma." },
    { name: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", description: "Lenguaje de script para desarrollo web." },
    { name: "C#", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", description: "Lenguaje moderno y seguro de tipo para .NET." },
    { name: "Bootstrap", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg", description: "Toolkit para desarrollo frontend responsivo." },
    { name: "Angular", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", description: "Plataforma para construir aplicaciones web móviles y de escritorio." },
    { name: "Vue.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", description: "Framework progresivo para interfaces de usuario." },
    { name: "Flutter", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", description: "UI Toolkit de Google para aplicaciones nativas." },
    { name: "Dart", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", description: "Lenguaje optimizado para UI rápida en cualquier plataforma." },
    { name: "Android Studio", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg", description: "IDE oficial para el desarrollo de Android." },
    { name: "Blender", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg", description: "Suite de creación 3D de código abierto." },
    { name: "Unity", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", description: "Motor de desarrollo de videojuegos multiplataforma." },
    { name: "React Native", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", description: "Framework para construir aplicaciones móviles con React." },
    { name: "Expo", src: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/expo/expo-original-wordmark.svg", description: "Herramienta para desarrollar y construir aplicaciones React Native." },
  ];

  // Triplicamos para un loop infinito suave
  const duplicated = [...tech, ...tech, ...tech];

  const handleCardClick = (item: TechItem) => {
    if (selectedTech?.name === item.name) {
      setSelectedTech(null);
    } else {
      setSelectedTech(item);
    }
  };

  const handleClose = () => {
    setSelectedTech(null);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    if (container.scrollLeft === 0) {
        container.scrollLeft = 1; 
    }

    let lastTime = performance.now();

    const step = (now: number) => {
      if (!container) return;

      const dt = now - lastTime;
      lastTime = now;

      // Pausamos animación si:
      // 1. Hay una tarjeta abierta (selectedTech)
      // 2. El usuario está tocando/arrastrando en móvil (isDraggingRef)
      if (!selectedTech && !isDraggingRef.current) {
        const px = speedRef.current * (dt / 16.67);
        container.scrollLeft += px;

        const maxScroll = container.scrollWidth / 3;

        // Lógica de Scroll Infinito
        if (container.scrollLeft >= maxScroll * 2) {
            container.scrollLeft = maxScroll;
        } else if (container.scrollLeft <= 0) {
            container.scrollLeft = maxScroll;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [selectedTech]);

  return (
    <div className="relative w-full py-12 group">
      
      {/* --- ZONA IZQUIERDA (SOLO PC) --- */}
      {/* Nota la clase 'hidden md:flex': Oculto en móvil, Flex en pantallas medianas hacia arriba */}
      <div 
        className="hidden md:flex absolute left-0 top-12 bottom-12 w-24 z-20 
                   items-center justify-start pl-4
                   cursor-w-resize transition-opacity duration-300"
        onMouseEnter={() => { speedRef.current = -hoverSpeed; }}
        onMouseLeave={() => { speedRef.current = baseSpeed; }}
      >
        <div className="p-2 rounded-full bg-white/10 border border-white/5 backdrop-blur-md shadow-lg animate-pulse">
            <ChevronLeft className="text-white w-8 h-8" />
        </div>
      </div>

      {/* --- ZONA DERECHA (SOLO PC) --- */}
      {/* Nota la clase 'hidden md:flex' */}
      <div 
        className="hidden md:flex absolute right-0 top-12 bottom-12 w-24 z-20 
                   items-center justify-end pr-4
                   cursor-e-resize transition-opacity duration-300"
        onMouseEnter={() => { speedRef.current = hoverSpeed; }}
        onMouseLeave={() => { speedRef.current = baseSpeed; }}
      >
        <div className="p-2 rounded-full bg-white/10 border border-white/5 backdrop-blur-md shadow-lg animate-pulse">
            <ChevronRight className="text-white w-8 h-8" />
        </div>
      </div>

      {/* --- CONTENEDOR CARRUSEL --- */}
      <div
        ref={scrollRef}
        // Agregamos eventos de toque para móviles para pausar el auto-scroll mientras se desliza con el dedo
        onTouchStart={() => { isDraggingRef.current = true; }}
        onTouchEnd={() => { isDraggingRef.current = false; }}
        className="w-full overflow-x-auto scrollbar-hide select-none relative z-10"
        style={{ scrollBehavior: "auto" }} // Importante para que el scroll manual en móvil no se sienta pesado
      >
        <div className="inline-flex gap-6 px-4 py-2">
          {duplicated.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(item)}
              className={`
                min-w-60 h-60 rounded-2xl shadow-lg backdrop-blur-3xl
                flex flex-col items-center justify-center p-6
                cursor-pointer transition-all duration-300
                border border-white/10 bg-white/5
                hover:scale-105 hover:bg-white/10 hover:border-violet-500/30
                active:scale-95  // Feedback visual al tocar en móvil
                ${selectedTech?.name === item.name ? "ring-2 ring-violet-500 scale-105 bg-white/10" : ""}
              `}
            >
              <img src={item.src} alt={item.name} className="w-24 h-24 mb-4 object-contain" />
              <p className="font-semibold text-lg text-white">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL / DETALLE --- */}
      {selectedTech && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm rounded-2xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-md   backdrop-blur-xl  rounded-3xl p-8 shadow-2xl ring-1 ring-white/10">
            
            <button 
              onClick={(e) => { e.stopPropagation(); handleClose(); }}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6 p-4 bg-white/5 rounded-full flex items-center justify-center ring-1 ring-white/10">
                <img src={selectedTech.src} alt={selectedTech.name} className="w-24 h-24 object-contain" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{selectedTech.name}</h3>
              <div className="h-1 w-20 bg-linear-to-r from-violet-500 to-amber-300 rounded-full mb-4"></div>
              <p className="text-slate-300 leading-relaxed">
                {selectedTech.description}
              </p>
              
              <button 
                onClick={handleClose}
                className="mt-8 px-6 py-2 bg-white text-slate-900 hover:bg-gray-200 rounded-full font-bold transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
          <div className="absolute inset-0 -z-10" onClick={handleClose}></div>
        </div>
      )}
    </div>
  );
}