import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Encabezado */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
               {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Escuela Virtual" width={80} height={40} />
            <span className="text-center align-middle text-xl font-bold ml-2 text-blue-600">
              Yachachiq
            </span>
          </div>
          {/* Botón de Inicio de Sesión */}
          <Link href="/login">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition">
              Iniciar Sesión
            </button>
          </Link>
        </div>
      </header>

      {/* Contenedor principal */}
      <main className="flex-grow">
        {/* Sección Hero */}
        <section className="text-center py-20 bg-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900">
              Bienvenido a Nuestra Escuela Virtual
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Aprende a tu propio ritmo con clases interactivas y materiales de
              calidad.
            </p>

            {/* Botón de Registro */}
            <Link href="/login">
              <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-500 transition">
                Empieza Ahora
              </button>
            </Link>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 text-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
              ¿Porque elegirnos?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Video className="h-8 w-8 text-blue-600" />,
                  title:
                    "Accede a videos y materiales de estudio en cualquier momento",
                },
                {
                  icon: <BookOpen className="h-8 w-8 text-blue-600" />,
                  title:
                    " Consulta tu avance en cada materia y mejora tu aprendizaje.",
                },
                {
                  icon: <Users className="h-8 w-8 text-blue-600" />,
                  title: "Instructores expertos",
                },
                {
                  icon: <Award className="h-8 w-8 text-blue-600" />,
                  title: "Certificaciones",
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-lg  font-semibold">{benefit.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
              Lo que nuestros estudiantes dicen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  imagen: "estudianteA.jpg",
                  name: "Paulo",
                  testimonio: "Aprendí muchisimo",
                  curso: "Inglés",
                },
                {
                  imagen: "estudianteB.png",
                  name: "María",
                  testimonio:
                    "El curso de matemáticas me ayudó a mejorar mis habilidades",
                  curso: "Matemáticas",
                },
                {
                  imagen: "estudianteC.jpg",
                  name: "Carlos",
                  testimonio: "Ahora puedo programar mis propias aplicaciones",
                  curso: "Programación",
                },
                {
                  imagen: "estudianteD.jpg",
                  name: "Lucía",
                  testimonio:
                    "Nunca imaginé que la química fuera tan interesante",
                  curso: "Química",
                },
                {
                  imagen: "estudianteE.jpeg",
                  name: "Javier",
                  testimonio:
                    "Gracias a este curso, mejoré mi comprensión del mundo físico",
                  curso: "Física",
                },
              ].map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <p className="text-gray-600 mb-4">
                      {testimonial.testimonio}
                    </p>
                    <div className="flex items-center">
                      <Image
                        src={`/${testimonial.imagen}?height=40&width=40&text=S${testimonial.name}`}
                        alt={`Student ${testimonial.name}`}
                        width={40}
                        height={40}
                        className="rounded-full mr-3"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">
                          {testimonial.curso}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Pie de Página */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sobre nosotros</h3>
              <p className="text-gray-400">
              Yachachiq se dedica a ofrecer cursos en vídeo de alta calidad a estudiantes de todo el mundo.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links rapidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Cursos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Politica de privacidad
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacta con nosotros</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 Escuela Virtual. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
