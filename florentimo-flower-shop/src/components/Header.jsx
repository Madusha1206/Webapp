import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

export function Header() {
  const [open, setOpen] = useState(null)
  const toggle = (key) => setOpen(prev => prev === key ? null : key)
  const close = () => setOpen(null)

  const linkBase = 'px-3 py-2 rounded-md hover:bg-gray-100 text-sm'
  const dropdownBase = 'absolute hidden group-[.open]:block top-full left-0 min-w-56 bg-white border border-gray-200 rounded-xl shadow-lg p-2'
  const itemBase = 'block px-3 py-2 rounded-lg hover:bg-gray-100 text-sm'

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link to="/" onClick={close} className="text-brand font-extrabold text-lg">Florentimo</Link>
        <nav className="flex items-center gap-1">
          <NavLink to="/" onClick={close} className={linkBase}>Home</NavLink>
          <NavLink to="/wedding-bouquets" onClick={close} className={linkBase}>Wedding Bouquets</NavLink>

          <div className={(open === 'gift' ? 'open ' : '') + 'group relative'}>
            <button className={linkBase + ' cursor-pointer'} onClick={() => toggle('gift')}>Gift Items</button>
            <div className={dropdownBase}>
              <Link to="/gift/cakes" onClick={close} className={itemBase}>Cakes</Link>
              <Link to="/gift/toys" onClick={close} className={itemBase}>Toys</Link>
              <Link to="/gift/flowers" onClick={close} className={itemBase}>Flowers</Link>
              <Link to="/gift/photo-frames" onClick={close} className={itemBase}>Photo Frames</Link>
              <Link to="/gift/mugs" onClick={close} className={itemBase}>Mugs</Link>
              <Link to="/gift/money-bunches" onClick={close} className={itemBase}>Money Bunches</Link>
              <Link to="/gift/packages" onClick={close} className={itemBase}>Gift Packages</Link>
            </div>
          </div>

          <div className={(open === 'occasions' ? 'open ' : '') + 'group relative'}>
            <button className={linkBase + ' cursor-pointer'} onClick={() => toggle('occasions')}>Occasions</button>
            <div className={dropdownBase}>
              <Link to="/occasions/birthday" onClick={close} className={itemBase}>Birthday</Link>
              <Link to="/occasions/anniversary" onClick={close} className={itemBase}>Anniversary</Link>
              <Link to="/occasions/graduation" onClick={close} className={itemBase}>Graduation</Link>
              <Link to="/occasions/love-romance" onClick={close} className={itemBase}>Love & Romance</Link>
            </div>
          </div>

          <div className={(open === 'events' ? 'open ' : '') + 'group relative'}>
            <button className={linkBase + ' cursor-pointer'} onClick={() => toggle('events')}>Events</button>
            <div className={dropdownBase}>
              <Link to="/events/birthday-decors" onClick={close} className={itemBase}>Birthday Decors</Link>
              <Link to="/events/car-surprises" onClick={close} className={itemBase}>Car Surprises</Link>
              <Link to="/events/marry-me" onClick={close} className={itemBase}>Marry Me</Link>
              <Link to="/events/corporate" onClick={close} className={itemBase}>Corporate Events</Link>
            </div>
          </div>

          <NavLink to="/about" onClick={close} className={linkBase}>About Us</NavLink>
        </nav>
      </div>
    </header>
  )
}
