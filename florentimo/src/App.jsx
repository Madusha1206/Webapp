import { NavLink, Outlet } from 'react-router-dom'

function Header() {
  const baseLink = 'px-3 py-2 rounded-md text-sm font-medium hover:text-brand-700 hover:bg-brand-50 transition-colors'
  const activeLink = 'text-brand-700 bg-brand-50'
  return (
    <header className="border-b bg-white sticky top-0 z-40">
      <div className="container-base flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-brand-700">Florentimo</span>
          <span className="text-xs text-gray-500">Flower Shop</span>
        </div>
        <nav className="flex items-center gap-1">
          <NavLink to="/" end className={({ isActive }) => `${baseLink} ${isActive ? activeLink : 'text-gray-700'}`}>Home</NavLink>
          <NavLink to="/wedding" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : 'text-gray-700'}`}>Wedding Bouquets</NavLink>
          <div className="relative group">
            <NavLink to="/gift-items" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : 'text-gray-700'}`}>Gift Items</NavLink>
          </div>
          <div className="relative group">
            <NavLink to="/occasions" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : 'text-gray-700'}`}>Occasions</NavLink>
          </div>
          <NavLink to="/events" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : 'text-gray-700'}`}>Events</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : 'text-gray-700'}`}>About Us</NavLink>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t mt-20 bg-gray-50">
      <div className="container-base py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Florentimo. All rights reserved.</p>
        <p className="text-gray-500">Crafted with React, Vite and Tailwind CSS</p>
      </div>
    </footer>
  )
}

function Layout() {
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
