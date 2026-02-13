import Hero from "@/components/Hero";
import QuickCategories from "@/components/QuickCategories";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <main>
      {/* Hero Banner */}
      <Hero />
      <QuickCategories />
      <ProductGrid />

      <section className="relative h-[80vh] bg-gray-100 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000"
          className="w-full h-full object-cover"
          alt="Nueva Colección"
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-10 text-white">
          <h1 className="text-5xl font-black italic uppercase mb-4">Nueva Temporada</h1>
          <button className="bg-white text-black font-bold py-3 px-8 w-fit hover:bg-yellow-400 transition-colors">
            COMPRAR AHORA
          </button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-6 uppercase tracking-tighter">Tendencias del Momento</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-200 overflow-hidden relative">
                <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1">
                  OFERTA
                </div>
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000')] bg-cover bg-center group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="mt-3">
                <p className="text-sm font-medium">Vestido de Noche "Pague Menos"</p>
                <div className="flex gap-2 items-center">
                  <span className="text-red-600 font-bold">$29.99</span>
                  <span className="text-gray-400 line-through text-sm">$54.00</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}