'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import type { Sabor } from '@/lib/data'

export function FlavorCard({ sabor }: { sabor: Sabor }) {
  const [isOpen, setIsOpen] = useState(false)
  const titleRef = useRef<HTMLParagraphElement>(null)
  const [titleHeight, setTitleHeight] = useState(24)

  useEffect(() => {
    if (!titleRef.current) return

    // Using ResizeObserver to handle asynchronous font loading and layout shifts accurately
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // Measure only the text content height of the title element
        setTitleHeight(entry.target.clientHeight)
      }
    })

    observer.observe(titleRef.current)

    return () => {
      observer.disconnect()
    }
  }, [sabor.nombre])

  return (
    <article 
      className={`card mx-auto cursor-pointer ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Image Layer */}
      <div className="card-image">
        {sabor.imagen && (
          <Image
            src={sabor.imagen}
            alt={`Helado de ${sabor.nombre}`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
        )}
      </div>

      {/* Description Layer */}
      <div 
        className="card-description"
        style={{
          // Center the title vertically by having equal spacing on top (1rem padding) and bottom (1rem padding)
          transform: isOpen ? 'translateY(0)' : `translateY(calc(100% - (${titleHeight}px + 2rem)))`
        }}
      >
        <p ref={titleRef} className="text-title">{sabor.nombre}</p>
        <div className="flex flex-col justify-center flex-grow min-h-0">
          <p className="text-body">{sabor.descripcion}</p>
        </div>
      </div>
    </article>
  )
}
