'use client'

import { useState } from 'react'
import { Phone, X } from 'lucide-react'
import { ZONAS } from '@/lib/data'

export function DeliveryFab() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-3">
      {open && (
        <div
          role="dialog"
          aria-label="Teléfonos de delivery"
          className="w-72 rounded-3xl bg-card p-5 shadow-xl ring-1 ring-border"
        >
          <p className="mb-3 font-serif text-lg font-bold text-card-foreground">
            Pedí tu delivery
          </p>
          <ul className="flex flex-col gap-2">
            {ZONAS.map((zona) => (
              <li key={zona.id}>
                <a
                  href={zona.telefonoHref}
                  className="flex items-center justify-between rounded-2xl bg-muted px-4 py-3 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <span className="text-sm font-semibold">{zona.nombre}</span>
                  <span className="flex items-center gap-1.5 text-sm font-bold">
                    <Phone className="size-4" aria-hidden="true" />
                    {zona.telefono}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105"
      >
        {open ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Phone className="size-5" aria-hidden="true" />
        )}
        {open ? 'Cerrar' : 'Pedí Delivery'}
      </button>
    </div>
  )
}
