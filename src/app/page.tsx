import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-300 flex flex-col items-center p-8">
      {/* Logo */}
      <div className="mt-10">
        <Image
          src="/NoFondoLogo.png"
          alt="SPADA Logo"
          width={200}
          height={200}
          priority
        />
      </div>

      {/* Título */}
      <h1 className="text-4xl font-bold text-yellow-400 mt-6">Bienvenido a SPADA</h1>
      <p className="text-lg text-gray-400 mt-2">Análisis avanzado de baloncesto para apuestas precisas</p>

      {/* Botones de acción */}
      <div className="mt-8 flex gap-4">
        <a
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold transition"
          href="#predicciones"
        >
          Ver Predicciones
        </a>
        <a
          className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg font-semibold transition"
          href="#estadisticas"
        >
          Estadísticas
        </a>
      </div>

      {/* Secciones */}
      <section id="predicciones" className="mt-16 w-full max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-yellow-400">📊 Predicciones en Tiempo Real</h2>
        <p className="mt-2 text-gray-400">Obtén predicciones basadas en datos históricos y rendimiento actual.</p>
      </section>

      <section id="estadisticas" className="mt-12 w-full max-w-4xl text-center">
        <h2 className="text-2xl font-semibold text-yellow-400">🏀 Estadísticas Detalladas</h2>
        <p className="mt-2 text-gray-400">Explora métricas avanzadas para mejorar tu toma de decisiones.</p>
      </section>
    </div>
  );
}