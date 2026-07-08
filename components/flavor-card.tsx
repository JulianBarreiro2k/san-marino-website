import Image from 'next/image'
import type { Sabor } from '@/lib/data'

export function FlavorCard({ sabor }: { sabor: Sabor }) {
  // Color mapping for flavor circles
  const colorMap: Record<string, { bg: string; text: string }> = {
    'Dulce de Leche': { bg: '#5B3A1F', text: 'white' },
    'Chocolate': { bg: '#4A2511', text: 'white' },
    'Vainilla': { bg: '#D4A574', text: 'black' },
    'Frutilla': { bg: '#C1456C', text: 'white' },
    'Mango': { bg: '#E8A03C', text: 'black' },
    'Limón': { bg: '#F4D03F', text: 'black' },
  }

  const flavorColor = colorMap[sabor.nombre] || { bg: '#70161e', text: 'white' }

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={sabor.imagen || '/placeholder.svg'}
          alt={`Helado de ${sabor.nombre}`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Circular label at bottom */}
        <div 
          className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full px-6 py-2 text-sm font-bold shadow-lg"
          style={{ backgroundColor: flavorColor.bg, color: flavorColor.text }}
        >
          {sabor.nombre}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <h3 className="text-xl font-bold text-card-foreground">{sabor.nombre}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {sabor.descripcion}
        </p>
      </div>
    </article>
  )
}
