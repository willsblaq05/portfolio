import { useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
type NavbarProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-muted/20">
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
      >
        <a className="font-semibold tracking-wide text-heading" href="#home">
          Dev<span className="text-accent">Will_</span>
        </a>
        <div className="flex items-center gap-3">
          <button
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="rounded-md p-2 text-heading transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <ul
            className={`${isMenuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-full z-10 flex-col gap-4 border-b border-muted/20 bg-background px-6 py-5 text-sm text-muted md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}
            id="primary-navigation"
          >
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  className="block py-1 transition-colors hover:text-accent md:py-0"
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="rounded-md p-2 text-heading transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            onClick={onToggleTheme}
            type="button"
          >
            {theme === 'dark' ? (
              <FiSun aria-hidden="true" size={18} />
            ) : (
              <FiMoon aria-hidden="true" size={18} />
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
