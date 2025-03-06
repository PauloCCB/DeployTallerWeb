"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Page() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8080/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Credenciales incorrectas");
      }

      const data = await response.json();
      localStorage.setItem("token", data.accessToken); // Guardar token en localStorage

      router.push("/panel");
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleCreate = (e: any) => {
    e.preventDefault();
    router.push("/create");
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-20 w-auto" src="/logo.png" alt="Escuela Virtual" />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Iniciar sesión
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full rounded-md border border-gray-300 text-black px-3 py-1.5"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 block w-full rounded-md border border-gray-300 text-black px-3 py-1.5"
            />
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md">
            Iniciar sesión
          </button>

          <div className="text-black flex items-center justify-center gap-4">
            <a href="#" className="text-sm font-semibold text-indigo-600">
              ¿Olvidaste tu contraseña?
            </a>
            <button className="text-sm font-semibold text-indigo-600" onClick={handleCreate}>
              ¿Eres nuevo?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
