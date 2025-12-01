'use client'

import { useState } from 'react'

import { Menu, X } from 'lucide-react'

export default function MobileNav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <div className="lg:hidden">
      {/* Menu Items - visible only when open */}
      {isMobileMenuOpen && (
        <nav className="fixed right-6 bottom-24 z-50 flex flex-col items-end gap-3">
          {[
            { href: '#about', label: 'À propos' },
            { href: '#experience', label: 'Expérience' },
            { href: '#skills', label: 'Compétences' },
            { href: '#contact', label: 'Contact' },
          ].map((link) => (
            <a
              key={link.href}
              className="rounded-full border border-slate-700 bg-slate-800/90 px-6 py-3 text-sm font-bold tracking-widest text-slate-200 uppercase shadow-xl backdrop-blur transition hover:bg-teal-500 hover:text-slate-900"
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}

      {/* The "Camembert" Toggle Button */}
      <button
        aria-expanded={isMobileMenuOpen}
        aria-label="Menu de navigation mobile"
        className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 text-slate-900 shadow-lg shadow-teal-500/20 transition hover:scale-110 hover:bg-teal-400 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900 focus:outline-none"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
  )
}
