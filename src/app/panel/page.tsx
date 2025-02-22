"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Bell, User, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"


const courses = [
  {
    id: 1,
    title: "Introducción a las matematicas",
    category: "Matematicas",
    image: "/matematicas.png?height=180&width=320&text=Matematicas",
    path:"/panel/matematica"
  },
  {
    id: 2,
    title: "Introducción a la programación",
    category: "Programación",
    image: "/programacion.jpeg?height=180&width=320&text=Programacion",
    path:"/panel/programacion"
  },
  {
    id: 3,
    title: "Ingles",
    category: "Ingles",
    image: "/ingles.jpg?height=180&width=320&text=Ingles",
    path:"/panel/ingles"
  },
  {
    id: 4,
    title: "Introducción a la química",
    category: "Química",
    image: "/quimica.jpeg?height=180&width=320&text=Quimica",
    path:"/panel/quimica"
  },
  {
    id: 5,
    title: "Introducción a la Física",
    category: "Fisica",
    image: "/fisica.png?height=150&width=2800&text=Machine+Learning",
    path:"/panel/fisica"
  },
  {
    id: 6,
    title: "Introducción a la Geografía",
    category: "Geografía",
    image: "/geografia.jpeg?height=180&width=320&text=JavaScript",
    path:"/panel/geografia"
  
  },
]

const categories = ["Todo", "Matematicas","Química", "Programación", "Ingles", "Fisica", "Geografía"]

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState("Todo")
  const [searchQuery, setSearchQuery] = useState("")
  const router=useRouter();

  const filteredCourses = courses.filter(
    (course) =>
      (selectedCategory === "Todo" || course.category === selectedCategory) &&
      course.title.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleExit= ()=>{
    router.push("/") // 
  }

  const handleContinueLearning = (coursePath: string) => {
    router.push(coursePath)
  }
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image  src="/logo.png" alt="Escuela Virtual" width={32} height={32} className="mr-2" />
              <span className="text-xl font-bold text-blue-600">Yachachiq</span>
            </div>
            <div className="flex items-center space-x-4 text-black">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleExit}>
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-black">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64">
            <div className="bg-white p-4 rounded-lg shadow text-black">
              <h2 className="text-lg font-semibold mb-4">Categorias</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Mis cursos</h1>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Buscar cursos..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <Card key={course.id}  className="flex flex-col justify-between h-full">
                  <CardHeader>
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={300}
                      height={150}
                      className="rounded-md object-cover h-[180px] w-full"
                    />
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.category}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" onClick={()=>handleContinueLearning(course?.path)}>Continuar aprendiendo</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <p className="text-center text-gray-500 mt-8">
                No se encontró el curso. Intenta buscar otro
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

