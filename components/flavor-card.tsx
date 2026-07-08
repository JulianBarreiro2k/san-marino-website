import Image from 'next/image'
import type { Sabor } from '@/lib/data'

export function FlavorCard({ sabor }: { sabor: Sabor }) {
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
