import { GridScan } from "@/components/GridScan";

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
          />
      </div>

      <div className="relative z-10 p-8 text-white">
        <h1 className="text-4xl">Mi Contenido sobre el Fondo</h1>
        <p className="mt-4">Este texto se apila correctamente.</p>

      </div>
    </div>
  );
}