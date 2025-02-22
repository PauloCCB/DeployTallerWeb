import React from "react";
import Link from "next/link";
import Image from "next/image";

function Page() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Encabezado */}
            <header className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <Image
                        src="/logo.png"
                        alt="Escuela Virtual"
                        width={120}
                        height={50}
                    />

                    {/* Botón de Inicio de Sesión */}
                    <Link href="/login">
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition">
                            Iniciar Sesión
                        </button>
                    </Link>
                </div>
            </header>

            {/* Sección Hero */}
            <section className="text-center py-20 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Bienvenido a Nuestra Escuela Virtual
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Aprende a tu propio ritmo con clases interactivas y
                        materiales de calidad.
                    </p>

                    {/* Botón de Registro */}
                    <Link href="/register">
                        <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-500 transition">
                            Empieza Ahora
                        </button>
                    </Link>
                </div>
            </section>

            {/* Sección de Características */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900">
                        ¿Por qué elegirnos?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        {/* Característica 1 */}
                        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
                            <h3 className="text-xl font-semibold">
                                Clases Interactivas
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Accede a videos y materiales de estudio en
                                cualquier momento.
                            </p>
                        </div>

                        {/* Característica 2 */}
                        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
                            <h3 className="text-xl font-semibold">
                                Seguimiento del Progreso
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Consulta tu avance en cada materia y mejora tu
                                aprendizaje.
                            </p>
                        </div>

                        {/* Característica 3 */}
                        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
                            <h3 className="text-xl font-semibold">
                                Acceso desde Cualquier Lugar
                            </h3>
                            <p className="text-gray-600 mt-2">
                                Compatible con computadoras, tablets y teléfonos
                                móviles.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pie de Página */}
            <footer className="bg-gray-800 text-white text-center py-6">
                <p>
                    &copy; 2025 Escuela Virtual. Todos los derechos reservados.
                </p>
            </footer>
        </div>
    );
}

export default Page;
