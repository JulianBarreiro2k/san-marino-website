'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BRAND } from '@/lib/data'
import { FacebookIcon, InstagramIcon } from '@/components/social-icons'

const NAV_LINKS = [
  { href: '/', label: 'Inicio', mobileLabel: 'INICIO' },
  { href: '/sobre-nosotros', label: 'Sobre Nosotros', mobileLabel: 'NOSOTROS' },
  { href: '/productos?tab=helados', label: 'Helados', mobileLabel: 'HELADOS' },
  { href: '/productos?tab=palitos', label: 'Palitos', mobileLabel: 'PALITOS' },
  { href: '/productos?tab=postres', label: 'Postres', mobileLabel: 'POSTRES' },
  { href: '/sucursales', label: 'Sucursales', mobileLabel: 'SUCURSALES' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    // Run once on mount to set initial state
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActiveLink = (href: string) => {
    if (href.includes('?')) {
      const [path, query] = href.split('?')
      if (pathname !== path) return false
      if (typeof window !== 'undefined') {
        return window.location.search.includes(query)
      }
      return false
    }
    return pathname === href
  }

  const showTransparent = pathname === '/' && !isScrolled

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 z-60 w-full transition-all duration-300 ease-in-out",
        showTransparent
          ? "border-b border-transparent bg-transparent text-foreground shadow-none"
          : "border-b border-primary/20 bg-primary text-primary-foreground shadow-sm"
      )}>
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="flex flex-col items-center gap-0.5 hover:opacity-90 transition-opacity"
          onClick={() => setOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 555 118"
            className="h-10 w-auto"
            aria-label="San Marino"
            role="img"
          >
            <path
              d="M 58.00 12.50 L 61.50 13.70 L 61.50 21.60 C 61.50 30.50, 62.30 30.00, 51.80 28.40 C 47.50 27.80, 46.90 28.00, 44.00 30.80 C 40.50 34.40, 40.10 38.10, 42.90 42.50 C 43.90 44.10, 49.10 50.40, 54.40 56.50 C 66.00 69.70, 68.00 73.40, 68.00 81.80 C 68.00 89.30, 66.40 93.40, 61.50 98.80 C 56.10 104.80, 51.10 106.40, 39.30 105.70 C 28.80 105.20, 22.50 103.20, 21.60 100.20 C 20.80 97.90, 22.60 85.00, 23.80 83.80 C 24.30 83.30, 26.70 83.90, 29.40 85.10 C 37.50 88.60, 45.00 85.20, 45.00 77.90 C 45.00 73.50, 43.70 71.10, 35.60 61.10 C 25.60 48.80, 24.10 46.20, 23.00 39.80 C 19.70 19.30, 37.50 5.50, 58.00 12.50 Z M 232.00 30.00 C 239.30 41.00, 245.60 50.00, 245.90 50.00 C 246.30 50.00, 252.50 41.00, 259.80 30.00 C 267.00 19.00, 273.40 10.00, 273.90 10.00 C 275.80 10.00, 276.00 11.80, 280.00 73.40 C 281.70 98.50, 281.80 104.50, 280.80 105.20 C 279.00 106.30, 265.20 106.20, 263.00 105.00 C 261.30 104.10, 261.20 102.60, 261.70 79.30 L 262.20 54.50 L 254.50 65.80 C 250.30 72.00, 246.40 77.00, 245.70 76.80 C 245.00 76.50, 241.90 72.60, 238.70 67.90 C 235.50 63.30, 232.30 58.60, 231.50 57.50 C 230.20 55.70, 230.00 58.40, 230.10 79.90 C 230.20 99.60, 230.00 104.40, 228.90 105.10 C 227.10 106.20, 212.90 106.20, 211.10 105.10 C 210.00 104.40, 209.80 102.20, 210.30 94.30 C 210.70 88.90, 211.70 74.10, 212.50 61.50 C 214.60 28.50, 216.00 11.80, 216.60 10.90 C 216.90 10.40, 217.50 10.00, 217.90 10.00 C 218.30 10.00, 224.70 19.00, 232.00 30.00 Z M 403.00 16.80 C 407.20 22.00, 403.80 29.00, 397.10 29.00 C 388.60 29.00, 386.30 17.90, 394.10 14.60 C 398.10 12.90, 400.50 13.50, 403.00 16.80 Z M 105.40 33.40 C 116.50 36.80, 121.60 43.30, 123.00 56.20 C 124.50 70.80, 126.40 104.00, 125.70 104.70 C 124.90 105.50, 115.10 105.90, 113.30 105.20 C 112.60 105.00, 112.00 103.70, 112.00 102.40 C 112.00 99.30, 110.70 99.40, 106.30 102.80 C 103.10 105.20, 101.80 105.50, 95.40 105.50 C 88.20 105.50, 88.00 105.40, 84.00 101.50 C 76.70 94.30, 74.10 81.90, 77.50 70.20 C 80.40 60.50, 86.10 56.30, 99.50 53.90 C 103.40 53.20, 106.60 52.50, 106.80 52.40 C 107.00 52.30, 106.70 51.20, 106.10 50.10 C 104.00 46.30, 99.60 44.90, 90.40 45.10 C 85.80 45.20, 81.80 45.10, 81.60 44.90 C 80.80 43.90, 80.10 36.40, 80.80 35.40 C 82.70 32.40, 98.00 31.20, 105.40 33.40 Z M 173.80 34.70 C 183.50 41.00, 186.80 55.70, 185.60 86.90 C 185.30 96.60, 184.50 103.80, 183.90 104.60 C 182.40 106.40, 172.40 106.50, 171.30 104.70 C 170.90 104.10, 170.50 93.40, 170.40 81.00 C 170.30 55.90, 169.40 50.70, 164.80 48.10 C 162.50 46.80, 161.80 46.80, 158.00 48.50 C 150.30 52.00, 150.00 53.10, 150.00 80.60 C 150.00 107.60, 150.50 106.00, 142.60 106.00 C 135.90 106.00, 135.30 105.00, 134.60 92.50 C 134.30 86.40, 133.20 71.30, 132.30 58.90 C 131.40 46.50, 131.00 35.60, 131.30 34.60 C 131.90 33.20, 133.20 33.00, 140.70 33.20 C 149.50 33.50, 149.50 33.50, 149.80 36.20 C 150.20 39.50, 150.70 39.60, 153.60 36.90 C 156.30 34.40, 162.40 32.10, 166.50 32.00 C 168.20 32.00, 171.50 33.20, 173.80 34.70 Z M 318.00 33.10 C 324.00 34.40, 329.60 38.40, 332.50 43.50 C 335.40 48.40, 336.50 55.50, 338.50 83.00 C 340.10 106.10, 340.10 106.00, 333.10 106.00 C 327.20 106.00, 325.00 105.00, 325.00 102.60 C 325.00 99.30, 324.00 98.90, 321.60 101.20 C 316.80 105.90, 306.80 107.50, 301.10 104.60 C 297.20 102.50, 292.50 96.90, 290.90 92.30 C 289.20 87.70, 289.20 75.00, 290.90 69.30 C 293.30 60.80, 299.90 56.10, 312.60 53.90 C 316.40 53.20, 319.60 52.50, 319.80 52.40 C 320.80 51.70, 317.50 47.80, 314.80 46.40 C 312.10 45.00, 303.00 44.40, 296.50 45.20 C 294.70 45.50, 294.50 44.90, 294.50 40.00 L 294.50 34.50 L 299.00 33.30 C 304.70 31.90, 312.20 31.80, 318.00 33.10 Z M 382.00 33.50 C 383.00 34.60, 383.00 36.60, 382.40 41.30 L 381.50 47.50 L 377.00 47.50 C 372.20 47.60, 366.90 50.40, 365.00 54.00 C 364.40 55.10, 364.00 66.00, 364.00 80.30 C 364.00 107.60, 364.50 106.00, 356.60 106.00 C 349.00 106.00, 349.40 107.40, 347.00 69.70 C 345.80 51.00, 345.10 35.20, 345.40 34.40 C 345.90 33.20, 347.80 33.00, 354.70 33.20 L 363.50 33.50 L 364.00 36.50 C 364.40 38.60, 364.80 39.10, 365.40 38.10 C 366.50 36.40, 375.90 32.00, 378.60 32.00 C 379.80 32.00, 381.30 32.70, 382.00 33.50 Z M 454.50 33.90 C 459.20 36.00, 463.00 41.20, 465.60 49.00 C 467.30 53.80, 467.50 57.80, 467.50 79.30 C 467.50 107.10, 467.80 106.00, 460.00 106.00 C 452.20 106.00, 452.50 107.00, 452.50 80.30 C 452.50 60.20, 452.20 55.90, 450.80 52.80 C 447.70 46.00, 441.70 45.60, 435.50 51.70 L 433.00 54.30 L 433.00 78.90 C 433.00 96.80, 432.70 103.90, 431.80 104.80 C 430.40 106.20, 421.20 106.40, 419.10 105.10 C 417.70 104.20, 414.50 67.50, 413.80 44.50 L 413.50 33.50 L 421.80 33.20 C 430.30 32.90, 433.60 34.00, 432.60 36.60 C 431.80 38.80, 433.30 39.10, 435.50 37.00 C 437.90 34.70, 444.40 32.20, 448.00 32.10 C 449.40 32.10, 452.30 32.90, 454.50 33.90 Z M 508.60 33.50 C 520.90 37.10, 528.20 53.10, 526.70 73.40 C 525.60 87.60, 521.10 97.00, 512.60 102.70 C 508.50 105.50, 506.90 106.00, 501.60 106.00 C 491.30 106.00, 484.60 101.40, 479.70 91.00 C 476.80 85.00, 476.60 83.50, 476.20 71.50 C 475.90 60.20, 476.10 57.70, 477.90 52.60 C 481.50 42.20, 486.80 36.30, 494.90 33.40 C 499.70 31.70, 502.60 31.70, 508.60 33.50 Z M 402.50 34.20 C 402.90 35.60, 405.50 73.00, 406.60 93.10 L 407.30 104.70 L 404.90 105.30 C 401.80 106.20, 392.20 106.20, 389.10 105.30 C 386.80 104.70, 386.80 104.50, 387.30 97.10 C 387.60 92.90, 388.60 77.30, 389.60 62.50 C 390.50 47.60, 391.40 34.90, 391.60 34.20 C 391.80 33.50, 393.80 33.00, 397.00 33.00 C 400.20 33.00, 402.20 33.50, 402.50 34.20 Z M 97.30 68.50 C 93.00 70.30, 91.00 74.60, 91.00 81.90 C 91.00 87.30, 91.30 88.10, 94.10 90.40 C 97.90 93.60, 99.70 93.70, 104.10 90.70 C 108.20 88.00, 109.80 82.60, 109.20 73.20 L 108.80 67.00 L 104.70 67.00 C 102.40 67.10, 99.10 67.70, 97.30 68.50 Z M 311.00 68.10 C 309.60 68.60, 307.40 70.60, 306.10 72.50 C 304.10 75.50, 303.80 76.90, 304.20 82.10 C 304.60 87.40, 305.10 88.70, 307.50 90.70 C 309.70 92.60, 311.00 93.00, 313.30 92.60 C 321.00 91.00, 324.40 82.90, 322.40 70.70 C 321.80 67.10, 321.60 67.00, 317.60 67.10 C 315.40 67.10, 312.40 67.60, 311.00 68.10 Z M 496.50 47.60 C 492.60 51.60, 491.60 55.30, 491.20 67.80 C 490.70 81.70, 492.10 87.40, 496.70 91.00 C 500.00 93.50, 502.10 93.50, 505.40 90.90 C 509.30 87.80, 511.20 82.50, 511.70 72.50 C 512.70 56.10, 508.70 46.00, 501.50 46.00 C 499.60 46.00, 497.40 46.70, 496.50 47.60 Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
          <span className="text-[11px] font-bold tracking-[0.25em] opacity-75">• HELADOS •</span>
        </Link>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center transition-colors hover:opacity-80"
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
      </header>

      {/* Fullscreen overlay menu */}
      <nav
        id="mobile-menu"
        aria-label="Navegación"
        aria-hidden={!open}
        className={cn(
          'fixed inset-0 z-50 flex flex-col bg-background transition-transform duration-500 ease-in-out',
          open
            ? 'translate-y-0 pointer-events-auto'
            : '-translate-y-full pointer-events-none',
        )}
      >
        {/* Nav links — centered, fills most of the space */}
        <div className="flex flex-1 flex-col items-center justify-center gap-2 pt-24">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${100 + i * 70}ms` : '0ms' }}
              className={cn(
                'py-2 text-3xl font-bold tracking-widest uppercase transition-all duration-300',
                open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                isActiveLink(link.href)
                  ? 'text-primary'
                  : 'text-foreground hover:text-primary',
              )}
            >
              {link.mobileLabel}
            </Link>
          ))}
          <Link
            href="/sucursales#delivery"
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? `${100 + NAV_LINKS.length * 70}ms` : '0ms' }}
            className={cn(
              'mt-4 inline-flex items-center gap-3 bg-accent px-8 py-3 text-sm font-bold tracking-widest uppercase text-accent-foreground transition-all duration-300 hover:scale-105',
              open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            )}
          >
            <Phone className="size-4" aria-hidden="true" />
            Pedí Delivery
          </Link>
        </div>

        {/* Social links — pinned to bottom */}
        <div
          style={{ transitionDelay: open ? '420ms' : '0ms' }}
          className={cn(
            'flex flex-col items-center gap-4 border-t border-border pb-10 pt-8 transition-all duration-300',
            open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          )}
        >
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <InstagramIcon className="size-5" />
            @{BRAND.instagram}
          </a>
          <a
            href={BRAND.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <FacebookIcon className="size-5" />
            /{BRAND.facebook}
          </a>
        </div>
      </nav>
    </>
  )
}
