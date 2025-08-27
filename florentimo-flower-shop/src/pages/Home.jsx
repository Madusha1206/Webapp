export function Home() {
  return (
    <div className="py-8">
      <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-[260px_1fr] gap-6">
        <aside className="grid gap-3">
          <img className="w-full h-40 object-cover rounded-xl" src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=600" alt="Roses" />
          <img className="w-full h-40 object-cover rounded-xl" src="https://images.unsplash.com/photo-1509043759401-136742328bb3?q=80&w=600" alt="Bouquet" />
          <img className="w-full h-40 object-cover rounded-xl" src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=600" alt="Tulips" />
        </aside>
        <section className="grid content-center gap-2 bg-gradient-to-br from-white to-rose-50 border border-gray-200 rounded-2xl p-8">
          <h1 className="m-0 text-4xl font-extrabold text-brand">Florentimo Flower Shop</h1>
          <p className="m-0 text-gray-600">Fresh blooms, curated gifts, and enchanting event decor for every moment.</p>
        </section>
      </div>
    </div>
  )
}
