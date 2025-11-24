import { GridScan } from "@/components/GridScan";
import Image from "next/image";
export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
        
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

      <div className="grid grid-cols-2 items-center justify-center border-amber-200 w-full h-screen z-10 relative ">
        <div className="flex flex-col  items-center justify-center p-8 border-r-5 border-violet-800  m-10">
          <h1 className="text-4xl font-bold mb-4 text-white">Thomas Pinda</h1>  

        </div>
        <div className="grid grid-cols-2 items-center shadow-blue-950  justify-center p-8 m-10">
          <div className="flex flex-col items-center justify-center p-5 m-3 rounded-3xl border-amber-200 backdrop-blur-3xl">
            <h2 className="text-lg font-semibold mb-4 text-white">Educación básica y media</h2>
            <h2>Colegio Felmer Niklitschek</h2>
          </div>
          <div className="flex flex-col items-center justify-center p-5 m-3 rounded-3xl border-amber-200 backdrop-blur-3xl">
            <h2 className="text-lg font-semibold mb-4 text-white">Educación universitaria</h2>
            <h2>Universidad de los Lagos</h2>
          </div>
          <div className="flex flex-col items-center justify-center p-5 m-3 rounded-3xl border-amber-200 backdrop-blur-3xl">
            <h2 className="text-lg font-semibold mb-4 text-white">Ciudad</h2>
            <h2>Puerto Varas</h2>
          </div>
          <div className="flex flex-col items-center justify-center p-5 m-3 rounded-3xl border-amber-200 backdrop-blur-3xl">
            <h2 className="text-lg font-semibold mb-4 text-white">Carrera actual</h2>
            <h2>Ingeniería Civil en Informática</h2>
          </div>
        </div>  
      </div>


      <div className="flex flex-col items-center justify-center p-8 m-10 z-10 relative w-full h-screen">
          <h1 className="text-6xl mb-5">Experiencia Profecional</h1>
          <div className="flex flex-col items-center justify-center p-5 m-3 rounded-3xl border-amber-200 backdrop-blur-xs w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-white">Estudios en la Universidad de Los Lagos</h2>
            <p className="text-white text-center">Proyectos academicos utilizando diversas herramientas de desarrollo de software tanto en Frontend, Backend y DataBase.</p>
            
          </div>
          <div className="flex flex-col items-center justify-center p-5 m-3 rounded-3xl border-amber-200 backdrop-blur-xs w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-white">Práctica intermedia en la Municipalidad de Puerto Varas</h2>
            <p className="text-white text-center">Instalación, mantenimiento y configuración de equipos informáticos</p>
            
          </div>
      </div>

      <div className="flex flex-col iterm-center justyfy-center p-8 m-10 z-10 relative w-full h-screen">
          <h1 className="text-6xl mb-5">Stack recurrente</h1>
          <div className="flex flex-row items-center justify-center p-5 m-3 rounded-3xl border-amber-200 backdrop-blur-xs w-full gap-10">
            <Image src="/icons/html5.svg" alt="HTML5" width={60} height={60} />
            <Image src="/icons/css3.svg" alt="CSS3" width={60} height={60} />
            <Image src="/icons/javascript.svg" alt="JavaScript" width={60} height={60} />
            <Image src="/icons/typescript.svg" alt="TypeScript" width={60} height={60} />
            <Image src="/icons/react.png" alt="React" width={60} height={60} />
            <Image src="/icons/nextjs.svg" alt="Next.js" width={60} height={60} />
            <Image src="/icons/mongodb.svg" alt="MongoDB" width={60} height={60} />
            <Image src="/icons/postgreSQL.svg" alt="PostreSQL" width={60} height={60} />
            <Image src="/icons/nodejs.svg" alt="Node.js" width={60} height={60} />
            <Image src="/icons/git.svg" alt="Git" width={60} height={60} />

          </div>


      </div>
    </div>
  );
}