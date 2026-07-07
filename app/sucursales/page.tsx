import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Phone } from 'lucide-react'
import { ZONAS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Nuestras Sucursales',
  description:
    '5 sucursales de Helados San Marino en Mar del Plata: Puerto, Centro/Güemes y Constitución. Direcciones, mapa y teléfonos de delivery por zona.',
}

export default function SucursalesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-14 text-center md:px-6 md:py-16">
          <p className="rounded-full bg-primary-foreground/15 px-4 py-1.5 text-sm font-bold tracking-wide">
            MAR DEL PLATA
          </p>
          <h1 className="text-balance text-4xl font-extrabold md:text-5xl">
            Nuestras Sucursales
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/90">
            5 locales en Puerto, Güemes, Centro y Constitución, con delivery
            propio en cada zona.
          </p>
        </div>
      </section>

      {/* Zonas */}
      <section
        id="delivery"
        className="mx-auto flex max-w-6xl scroll-mt-24 flex-col gap-12 px-4 py-14 md:px-6"
      >
        {ZONAS.map((zona) => (
          <article
            key={zona.id}
            className="flex flex-col gap-6"
            aria-labelledby={`zona-${zona.id}`}
          >
            <h2 id={`zona-${zona.id}`} className="text-xl font-bold md:text-2xl">
              {zona.nombre} <span className="text-muted-foreground">| {zona.sucursales.length} Sucursales</span>
            </h2>

            <ul className="grid gap-6 md:grid-cols-2">
              {zona.sucursales.map((sucursal) => (
                <li
                  key={sucursal.direccion}
                  className="flex flex-col gap-4 border-l-4 border-accent bg-card overflow-hidden shadow-sm"
                >
                  {sucursal.imagen && (
                    <div className="relative w-full h-48 -m-6 mb-0">
                      <Image
                        src={sucursal.imagen}
                        alt={`Sucursal San Marino - ${sucursal.direccion}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  
                  <div className="p-6 pt-4">
                    <h3 className="text-lg font-bold text-primary">
                      {sucursal.direccion}
                    </h3>

                    <p className="text-sm text-foreground">
                      Mar del Plata, Buenos Aires
                    </p>

                    <div className="space-y-1 pt-3 border-t border-border">
                      {sucursal.horarios.map((horario, idx) => (
                        <p key={idx} className="text-sm text-foreground">
                          <span className="font-semibold">{horario.dias}:</span> {horario.hora}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sucursal.mapsQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                      >
                        <MapPin className="size-4" aria-hidden="true" />
                        Ver en Mapa
                      </a>
                      <a
                        href={zona.telefonoHref}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                      >
                        <Phone className="size-4" aria-hidden="true" />
                        {zona.telefono}
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>


    </>
  )
}
