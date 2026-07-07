import type { Metadata } from 'next'
import { ExternalLink, MapPin, Phone } from 'lucide-react'
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
        className="mx-auto flex max-w-6xl scroll-mt-24 flex-col gap-10 px-4 py-14 md:px-6"
      >
        {ZONAS.map((zona) => (
          <article
            key={zona.id}
            className="overflow-hidden rounded-3xl bg-card shadow-sm ring-1 ring-border"
            aria-labelledby={`zona-${zona.id}`}
          >
            <div className="flex flex-col gap-4 bg-secondary px-6 py-5 text-secondary-foreground md:flex-row md:items-center md:justify-between">
              <h2 id={`zona-${zona.id}`} className="text-2xl font-extrabold md:text-3xl">
                {zona.nombre}
              </h2>
              <a
                href={zona.telefonoHref}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-bold text-accent-foreground shadow-sm transition-transform hover:scale-105"
              >
                <Phone className="size-4" aria-hidden="true" />
                {`Delivery: ${zona.telefono}`}
              </a>
            </div>

            <ul className="grid gap-0 md:grid-cols-2">
              {zona.sucursales.map((sucursal) => (
                <li
                  key={sucursal.direccion}
                  className="flex flex-col gap-4 border-t border-border p-6 md:border-r md:last:border-r-0"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/15">
                      <MapPin className="size-5 text-primary" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold">{sucursal.direccion}</h3>
                      <p className="text-sm text-muted-foreground">
                        Mar del Plata, Buenos Aires
                      </p>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-2xl ring-1 ring-border">
                    <iframe
                      title={`Mapa de la sucursal ${sucursal.direccion}`}
                      src={`https://www.google.com/maps?q=${encodeURIComponent(sucursal.mapsQuery)}&output=embed`}
                      className="h-48 w-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href={zona.telefonoHref}
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
                    >
                      <Phone className="size-4" aria-hidden="true" />
                      Llamar
                    </a>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sucursal.mapsQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2.5 text-sm font-bold text-foreground transition-colors hover:bg-border"
                    >
                      <ExternalLink className="size-4" aria-hidden="true" />
                      Cómo llegar
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {/* Nota de delivery */}
      <section className="bg-muted py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center md:px-6">
          <h2 className="text-balance text-3xl font-extrabold md:text-4xl">
            {'¿Preferís que te lo llevemos?'}
          </h2>
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Llamá al teléfono de delivery de tu zona y pedí el helado de tu
            vida sin moverte de casa.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {ZONAS.map((zona) => (
              <a
                key={zona.id}
                href={zona.telefonoHref}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-bold text-accent-foreground shadow-sm transition-transform hover:scale-105"
              >
                <Phone className="size-4" aria-hidden="true" />
                {`${zona.nombre}: ${zona.telefono}`}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
