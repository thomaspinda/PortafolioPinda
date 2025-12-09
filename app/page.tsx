import { GridScan } from "@/components/GridScan";
import CarouselTech from "@/components/CarouselTech";
import ExperienceCards from "@/components/ExperienceCards";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { faReact, faNodeJs, faPython, faHtml5, faBootstrap} from '@fortawesome/free-brands-svg-icons';
import { SiNextdotjs, SiTailwindcss, SiDjango } from "react-icons/si";



export default async function Home() {
  
  const projects = [

  {
    title: "Portafolio Personal",
    description: "Este mismo sitio web desarrollado con las últimas tecnologías.",
    imageSrc: "/images/Portafolio.png",
    liveLink: "https://github.com/thomaspinda/PortafolioPinda",
    techStack: [
      { icon: faReact, name: "React.js" },
      { icon: faNodeJs, name: "Node.js" },
      { icon: SiTailwindcss, name: "Tailwind CSS" },
      { icon: SiNextdotjs, name: "Next.js" },
    ],
  },
  {
    title: "Sistema de Gestión Contable",
    description: "Aplicación web para la gestión de pequeñas empresas.",
    imageSrc: "/images/Sistema_Contable.png",
    liveLink: "https://github.com/thomaspinda/sistema_contable",
    techStack: [
      { icon: faNodeJs, name: "Node.js" },
      { icon: faPython, name: "Python" },
      { icon: faHtml5, name: "HTML5" },
      { icon: faBootstrap, name: "Bootstrap" },
      { icon: SiDjango, name: "Django" },
      ],
  },
];
  return (
    
    <div className="relative min-h-screen w-full overflow-x-hidden">

      <div className="fixed inset-0 z-0">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
          scanDuration={10}
          scanDelay={0}
        />
      </div>
      <Header />
      <div id="about" className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center w-full min-h-screen z-10 relative pointer-events-none">
        
        <div  className="flex flex-col items-center lg:items-start justify-center p-8 lg:pl-20 pointer-events-auto">
          
          <div className="relative w-48 h-48 mb-6 rounded-full p-1 bg-linear-to-tr from-violet-500 to-amber-300 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
            <div className="w-full h-full rounded-full overflow-hidden relative bg-black">
              <Image 
                src="images/Yo.jpg"
                alt="Thomas Pinda"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-2 text-white tracking-tight">
            Thomas Pinda
          </h1>
          <h2 className="text-xl lg:text-2xl text-gray-300 font-light">
            Ingeniería Civil en Informática
          </h2>
          <div className="flex space-x-6 mt-4">
            <a 
              href="https://www.linkedin.com/in/thomas-pinda-98bb00345/" 
              className="flex items-center text-gray-400 hover:text-blue-400 transition duration-300 group"
              >
              <i className="fab fa-linkedin text-3xl"></i>
              <span className="ml-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300">
              LinkedIn
            </span>
          </a>

          <a 
            href="https://github.com/thomaspinda" 
            className="flex items-center text-gray-400 hover:text-white transition duration-300 group"
            >
              <i className="fab fa-github text-3xl"></i>
              <span className="ml-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-300">
                GitHub
              </span>
            </a>
          </div>
        </div>

        <div className="w-full flex justify-center px-4 lg:pr-20 pointer-events-auto">
          <div
            className="backdrop-blur-xl bg-white/5 dark:bg-black/40 
                   border border-white/10
                   rounded-3xl shadow-2xl 
                   p-8 lg:p-10 max-w-2xl 
                   text-center lg:text-left
                   transition-all duration-300 
                   hover:bg-white/10 hover:shadow-violet-900/20 hover:border-white/20"
          >
            <h2 className="text-3xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-linear-to-r from-amber-200 to-white">
              Perfil Profesional
            </h2>

            <p className="text-lg leading-relaxed text-gray-300">
              Estudiante con interés en el <span className="text-amber-200 font-semibold">desarrollo Full Stack</span> y creación de soluciones integrales. 
              Poseo habilidades en inteligencia artificial, videojuegos y redes. 
              Me caracterizo por aprender rápido, adaptarme con facilidad y abordar los proyectos con una mentalidad analítica.
            </p>
          </div>
        </div>
      </div>

      <div id="experience" className="flex flex-col items-center justify-center p-8 z-10 relative w-full min-h-screen pointer-events-none">
          <div className="pointer-events-auto w-full flex flex-col items-center">
            <h1 className="text-5xl font-bold mb-10 text-white">Experiencia Profesional</h1>

            <ExperienceCards
              experiences={[
                {
                  title: "Estudios en Universidad de Los Lagos",
                  description:
                    "Actualmente cursando la carrera de Ingeniería Civil en Informática, adquiriendo conocimientos en programación, algoritmos, estructuras de datos y sistemas de información.",
                  date: "Marzo 2021 - Presente",
                },
                {
                  title: "Práctica intermedia en la Municipalidad de Puerto Varas",
                  description:"Instalación, configuración y mantenimiento de redes computacionales, así como soporte técnico a usuarios internos.",
                  date: "Febrero 2025",
                },
              ]}
            />  
          </div>
      </div>

      <div id="stack" className="flex flex-col items-center justify-center w-full h-screen relative z-10 pointer-events-none">
        <div className="pointer-events-auto w-full flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-16 text-center text-white">
            Stack Recurrente
          </h1>
          
          <div className="w-full max-w-9xl"> 
            <CarouselTech />
          </div>
        </div>
      </div>
      <div id="projects" className="flex flex-col items-center justify-center p-8 z-10 relative w-full min-h-screen pointer-events-none">
          <div className="pointer-events-auto w-full flex flex-col items-center">
            <h1 className="text-5xl font-bold mb-10 text-white">Proyectos Destacados</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
              {projects.map((project, index) => (
                <ProjectCard 
                  key={index}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                  liveLink={project.liveLink}
                  techStack={project.techStack}
                />
              ))}
            </div>
          </div>

      </div>
      <Footer />
    </div>
  );
}