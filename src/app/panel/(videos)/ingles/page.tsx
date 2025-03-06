"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, RefreshCcw, Maximize2, Download } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function InglesPage() {
  const router = useRouter()
  const [id, setId] = useState<number>(3);
    const [video, setVideo] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState<string | null>(null);
  
    // Obtener token y asegurarse de que esté disponible antes de hacer la petición
    useEffect(() => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
      } else {
        console.log("No se pudo obtener el token", storedToken);
        router.push("/login");
      }
    }, [router]);
  
    // Llamar a la API solo cuando el token esté disponible
    useEffect(() => {
      if (!token) return; // No ejecutar si el token aún no está disponible
  
      const fetchVideo = async () => {
        try {
          setLoading(true);
          const response = await fetch(
            `http://localhost:8080/api/contenidos/${id}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
  
          if (!response.ok) {
            throw new Error("No se pudo obtener el contenido");
          }
  
          const data = await response.json();
          console.log("Esta es la data", data);
          setVideo(data.url);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchVideo();
    }, [token, id]); // Ahora `fetchVideo` se ejecuta solo cuando el token está definido

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <div className="bg-[#18181B] text-black h-12 flex items-center px-4 gap-2">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={() => router.push("/panel")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <RefreshCcw className="h-4 w-4" />
          </Button>
          <span className="ml-2 text-sm text-gray-400">/video</span>
        </div>
        <div className="ml-auto">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 text-black">
        {/* Video Player Section */}
        <div className="flex-1 bg-[#F3F4F6]">
          <div className="aspect-video bg-black relative flex items-center justify-center">
          <iframe
              className="w-full h-full"
              src={video}
              title="YouTube Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>
        </div>

        {/* Content Information */}
        <div className="w-[400px] p-8 border-l">
          <h1 className="text-2xl font-semibold mb-2">Ingles</h1>
          <p className="text-sm text-gray-600 mb-4">Por profesor Calderon</p>

          <div className="mb-6">
            <Badge variant="secondary" className="rounded-full">
              Principiante
            </Badge>
          </div>

          <p className="text-gray-600 mb-8">
          Aprende los conceptos fundamentales del inglés. Este curso te ayudará a desarrollar una base sólida  
          en gramática, vocabulario y comprensión oral y escrita.
          </p>

          <Button className="w-full gap-2" variant="outline">
            <Download className="h-4 w-4" />
            Descargar Recursos
          </Button>
        </div>
      </div>
    </div>
  )
}

