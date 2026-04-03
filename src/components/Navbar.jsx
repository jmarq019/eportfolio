import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/academics', label: 'Academics' },
  { to: '/experience', label: 'Experience' },
]

export default function Navbar() {
  // Controls the mobile hamburger menu open/close state
  const [menuOpen, setMenuOpen] = useState(false)

  // Helper to get NavLink className — highlights the active route in orange
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-auburn-orange font-semibold border-b-2 border-auburn-orange pb-0.5 transition-colors duration-200'
      : 'text-auburn-navy font-medium hover:text-auburn-orange transition-colors duration-200'

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Wordmark / Logo */}
          <NavLink
            to="/"
            className="text-auburn-navy font-bold text-lg tracking-tight hover:text-auburn-orange transition-colors duration-200 leading-tight"
          >
            Jorge A. Márquez Barragán
          </NavLink>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} className={linkClass}>
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-auburn-navy transition-transform duration-200 ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-auburn-navy transition-opacity duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-auburn-navy transition-transform duration-200 ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2 flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
