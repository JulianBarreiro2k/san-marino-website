'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { IceCreamCone, Menu, Phone, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { href: '/productos', label: 'Nuestros Productos' },
  { href: '/sucursales', label: 'Sucursales' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <IceCreamCone className="size-6" aria-hidden="true" />
          <span className="font-serif text-xl font-bold leading-none">
            San Marino
          </span>
          <span className="sr-only">Helados San Marino, ir al inicio</span>
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-1 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-primary-foreground/15',
                pathname === link.href && 'bg-primary-foreground/20',
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/sucursales#delivery"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-sm transition-transform hover:scale-105"
          >
            <Phone className="size-4" aria-hidden="true" />
            Pedí Delivery
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full transition-colors hover:bg-primary-foreground/15 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
          <span className="sr-only">
            {open ? 'Cerrar menú' : 'Abrir menú'}
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Navegación móvil"
          className="flex flex-col gap-1 border-t border-primary-foreground/20 px-4 pb-4 pt-2 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                'rounded-xl px-4 py-3 text-base font-semibold transition-colors hover:bg-primary-foreground/15',
                pathname === link.href && 'bg-primary-foreground/20',
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/sucursales#delivery"
            onClick={() => setOpen(false)}
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-base font-bold text-accent-foreground"
          >
            <Phone className="size-5" aria-hidden="true" />
            Pedí Delivery
          </Link>
        </nav>
      )}
    </header>
  )
}
