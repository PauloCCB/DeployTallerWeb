"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, RefreshCcw, Maximize2, Download } from "lucide-react"
import { useRouter } from "next/navigation"

export default function GeografiaPage() {
  const router = useRouter()

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
              src="https://www.youtube.com/embed/LdlivD73ypg"
              title="YouTube Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

          </div>
        </div>

        {/* Content Information */}
        <div className="w-[400px] p-8 border-l">
          <h1 className="text-2xl font-semibold mb-2">Geografia</h1>
          <p className="text-sm text-gray-600 mb-4">Por Profesor Quique</p>

          <div className="mb-6">
            <Badge variant="secondary" className="rounded-full">
              Principiante
            </Badge>
          </div>

          <p className="text-gray-600 mb-8">
          Aprende los conceptos fundamentales de la geografía. Este curso te ayudará a desarrollar una base sólida  
          en cartografía, climatología y geografía física.
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

