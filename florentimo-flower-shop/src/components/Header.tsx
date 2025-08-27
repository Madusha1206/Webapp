import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

type DropdownKey = 'gift' | 'occasions' | 'events'

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey | null>(null)

  function toggleDropdown(key: DropdownKey) {
    setOpenDropdown(prev => (prev === key ? null : key))
  }

  function closeDropdown() {
    setOpenDropdown(null)
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" onClick={closeDropdown}>
          Florentimo
        </Link>
        <nav className="nav">
          <NavLink to="/" className="nav-link" onClick={closeDropdown}>
            Home
          </NavLink>

          <NavLink to="/wedding-bouquets" className="nav-link" onClick={closeDropdown}>
            Wedding Bouquets
          </NavLink>

          <div className={"nav-dropdown" + (openDropdown === 'gift' ? ' open' : '')}>
            <button className="nav-link dropdown-toggle" onClick={() => toggleDropdown('gift')}
              aria-haspopup="true" aria-expanded={openDropdown === 'gift'}>
              Gift Items
            </button>
            <div className="dropdown-menu" role="menu">
              <Link to="/gift/cakes" className="dropdown-item" onClick={closeDropdown}>Cakes</Link>
              <Link to="/gift/toys" className="dropdown-item" onClick={closeDropdown}>Toys</Link>
              <Link to="/gift/flowers" className="dropdown-item" onClick={closeDropdown}>Flowers</Link>
              <Link to="/gift/photo-frames" className="dropdown-item" onClick={closeDropdown}>Photo Frames</Link>
              <Link to="/gift/mugs" className="dropdown-item" onClick={closeDropdown}>Mugs</Link>
              <Link to="/gift/money-bunches" className="dropdown-item" onClick={closeDropdown}>Money Bunches</Link>
              <Link to="/gift/packages" className="dropdown-item" onClick={closeDropdown}>Gift Packages</Link>
            </div>
          </div>

          <div className={"nav-dropdown" + (openDropdown === 'occasions' ? ' open' : '')}>
            <button className="nav-link dropdown-toggle" onClick={() => toggleDropdown('occasions')}
              aria-haspopup="true" aria-expanded={openDropdown === 'occasions'}>
              Occasions
            </button>
            <div className="dropdown-menu" role="menu">
              <Link to="/occasions/birthday" className="dropdown-item" onClick={closeDropdown}>Birthday</Link>
              <Link to="/occasions/anniversary" className="dropdown-item" onClick={closeDropdown}>Anniversary</Link>
              <Link to="/occasions/graduation" className="dropdown-item" onClick={closeDropdown}>Graduation</Link>
              <Link to="/occasions/love-romance" className="dropdown-item" onClick={closeDropdown}>Love & Romance</Link>
            </div>
          </div>

          <div className={"nav-dropdown" + (openDropdown === 'events' ? ' open' : '')}>
            <button className="nav-link dropdown-toggle" onClick={() => toggleDropdown('events')}
              aria-haspopup="true" aria-expanded={openDropdown === 'events'}>
              Events
            </button>
            <div className="dropdown-menu" role="menu">
              <Link to="/events/birthday-decors" className="dropdown-item" onClick={closeDropdown}>Birthday Decors</Link>
              <Link to="/events/car-surprises" className="dropdown-item" onClick={closeDropdown}>Car Surprises</Link>
              <Link to="/events/marry-me" className="dropdown-item" onClick={closeDropdown}>Marry Me</Link>
              <Link to="/events/corporate" className="dropdown-item" onClick={closeDropdown}>Corporate Events</Link>
            </div>
          </div>

          <NavLink to="/about" className="nav-link" onClick={closeDropdown}>
            About Us
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

