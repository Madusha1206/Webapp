import { useEffect, useMemo, useState } from 'react'
import { getGiftItems, getHeroImages } from './API.jsx'

export function HomePage() {
  const heroImages = getHeroImages()
  return (
    <div className="container-base py-10">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <div className="lg:col-span-2 flex flex-col justify-center gap-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Bring Joy With Fresh Flowers
          </h1>
          <p className="text-lg text-gray-600 max-w-prose">
            Florentimo creates unforgettable bouquets and event florals. Same-day delivery
            available for birthdays, anniversaries, graduations, and love & romance.
          </p>
          <div className="flex gap-3">
            <a href="/gift-items" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors">
              Shop Gift Items
            </a>
            <a href="/wedding" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-gray-300 text-gray-800 font-medium hover:bg-gray-50">
              Wedding Bouquets
            </a>
          </div>
        </div>
        <aside className="lg:col-span-1 grid grid-cols-2 gap-3 lg:grid-cols-1">
          {heroImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="Florentimo showcase"
              className="w-full h-48 lg:h-32 object-cover rounded-lg shadow-sm"
              loading="lazy"
            />
          ))}
        </aside>
      </section>
    </div>
  )
}

export function WeddingPage() {
  return (
    <div className="container-base py-10">
      <h2 className="text-2xl font-bold mb-4">Wedding Bouquets</h2>
      <p className="text-gray-600 max-w-prose">
        Elegant bridal bouquets, boutonnieres, and centerpieces. Consult our floral stylists to
        design your perfect wedding aesthetics.
      </p>
    </div>
  )
}

export function EventsPage() {
  return (
    <div className="container-base py-10">
      <h2 className="text-2xl font-bold mb-4">Events</h2>
      <p className="text-gray-600 max-w-prose">Corporate events, galas, and private celebrations with bespoke floral installations.</p>
    </div>
  )
}

export function AboutPage() {
  return (
    <div className="container-base py-10">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p className="text-gray-600 max-w-prose">
        Florentimo is a boutique flower studio dedicated to craftsmanship, freshness, and heartfelt gifting.
      </p>
    </div>
  )
}

export function GiftItemsPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const items = getGiftItems()

  const categories = useMemo(() => ['all', ...Array.from(new Set(items.map(i => i.category)))], [items])

  const filtered = items.filter(item => {
    const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase())
    const matchesCategory = category === 'all' || item.category === category
    return matchesQuery && matchesCategory
  })

  return (
    <div className="container-base py-10">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold">Gift Items</h2>
          <p className="text-gray-600">Hand-picked gifts to pair with your flowers.</p>
        </div>
        <div className="flex gap-2">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search gifts..."
            className="h-10 w-56 rounded-md border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="h-10 rounded-md border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat[0].toUpperCase() + cat.slice(1)}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(item => (
          <div key={item.id} className="rounded-lg border border-gray-200 overflow-hidden bg-white hover:shadow-md transition-shadow">
            <img src={item.image} alt={item.name} className="w-full h-40 object-cover" loading="lazy" />
            <div className="p-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{item.category}</p>
              <div className="flex items-center justify-between">
                <span className="font-bold">${item.price.toFixed(2)}</span>
                <button className="px-3 py-1.5 rounded-md bg-brand-600 text-white text-sm hover:bg-brand-700">Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function OccasionsLayout() {
  return (
    <div className="container-base py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="lg:w-64">
          <nav className="grid gap-2">
            <a className="px-3 py-2 rounded-md hover:bg-gray-100" href="/occasions/birthday">Birthday</a>
            <a className="px-3 py-2 rounded-md hover:bg-gray-100" href="/occasions/anniversary">Anniversary</a>
            <a className="px-3 py-2 rounded-md hover:bg-gray-100" href="/occasions/graduation">Graduation</a>
            <a className="px-3 py-2 rounded-md hover:bg-gray-100" href="/occasions/love-romance">Love & Romance</a>
          </nav>
        </aside>
        <section className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Occasions</h2>
          <p className="text-gray-600 mb-6">Choose an occasion to explore curated floral picks.</p>
          {/* Nested routes render here (in main routes) */}
        </section>
      </div>
    </div>
  )
}

function Message({ title, blurb }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{blurb}</p>
    </div>
  )
}

export function BirthdayPage() {
  return <div className="container-base py-10"><Message title="Birthday" blurb="Surprise them with vibrant blooms and cheerful arrangements." /></div>
}

export function AnniversaryPage() {
  return <div className="container-base py-10"><Message title="Anniversary" blurb="Classic roses and elegant bouquets for timeless love." /></div>
}

export function GraduationPage() {
  return <div className="container-base py-10"><Message title="Graduation" blurb="Celebrate milestones with bold, uplifting florals." /></div>
}

export function LoveRomancePage() {
  return <div className="container-base py-10"><Message title="Love & Romance" blurb="Express your heart with romantic arrangements and rose boxes." /></div>
}

export const routes = [
  { index: true, element: HomePage },
  { path: 'wedding', element: WeddingPage },
  { path: 'gift-items', element: GiftItemsPage },
  {
    path: 'occasions',
    element: OccasionsLayout,
    children: [
      { path: 'birthday', element: BirthdayPage },
      { path: 'anniversary', element: AnniversaryPage },
      { path: 'graduation', element: GraduationPage },
      { path: 'love-romance', element: LoveRomancePage },
    ],
  },
  { path: 'events', element: EventsPage },
  { path: 'about', element: AboutPage },
]

