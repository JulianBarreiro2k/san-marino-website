'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Sabor } from '@/lib/data'

export function FlavorCard({ sabor }: { sabor: Sabor }) {
  const [showDescription, setShowDescription] = useState(false)

  const toggleDescription = () => {
    setShowDescription(!showDescription)
  }

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border transition-shadow hover:shadow-lg">
      {/* Image and Description Overlay Container */}
      <div
        className="relative aspect-square overflow-hidden cursor-pointer"
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
        onClick={toggleDescription}
      >
        {/* Image Layer */}
        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            showDescription ? '-translate-x-full' : 'translate-x-0'
          }`}
        >
          <Image
            src={sabor.imagen || '/placeholder.svg'}
            alt={`Helado de ${sabor.nombre}`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
        </div>

        {/* Description Layer */}
        <div
          className={`absolute inset-0 bg-card/95 backdrop-blur-sm p-6 flex flex-col justify-center transition-transform duration-500 ease-in-out ${
            showDescription ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-6">
            {sabor.descripcion}
          </p>
        </div>

        {/* Title Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-transparent to-transparent flex items-end p-4">
          <h3 className="text-lg font-bold text-white">{sabor.nombre}</h3>
        </div>
      </div>

      {/* Product Info Below */}
      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <p className="text-sm text-muted-foreground">
          {sabor.tamaño && `${sabor.tamaño} de Helado`}
        </p>
      </div>
    </article>
  )
}
