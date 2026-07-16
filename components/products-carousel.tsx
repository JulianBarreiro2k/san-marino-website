'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'

interface ProductsCarouselProps {
  title: string
  items: any[]
  viewAllHref: string
}

export function ProductsCarousel({ title, items, viewAllHref }: ProductsCarouselProps) {
  const scrollContainer = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = 300
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-black uppercase tracking-tight text-foreground font-poppins md:text-3xl">
          {title}
        </h3>
        <Link
          href={viewAllHref}
          className="inline-flex items-center gap-1 rounded-full bg-primary hover:bg-primary/90 px-4 py-2 text-xs font-normal text-white transition-all hover:scale-105 active:scale-95 shadow-sm"
        >
          Ver todos
          <ChevronRight className="size-3.5" strokeWidth={3} />
        </Link>
      </div>

      <div className="relative">
        {/* Carousel Container */}
        <div
          ref={scrollContainer}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => (
            <div key={item.nombre} className="flex-shrink-0 w-[calc(50%-0.5rem)] md:w-[calc(25%-0.75rem)] snap-start">
              <div className="relative rounded-lg overflow-hidden bg-muted aspect-square">
                {item.imagen && (
                  <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-background border border-border hover:bg-muted transition-colors"
          aria-label="Desplazar izquierda"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-background border border-border hover:bg-muted transition-colors"
          aria-label="Desplazar derecha"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  )
}
