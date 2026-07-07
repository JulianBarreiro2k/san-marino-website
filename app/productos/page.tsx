import type { Metadata } from 'next'
import Link from 'next/link'
import { Info, MapPin } from 'lucide-react'
import { FlavorCard } from '@/components/flavor-card'
import { PALITOS, POSTRES, SABORES_AGUA, SABORES_CREMA } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Nuestros Productos',
  description:
    'Helados artesanales a la crema y al agua, palitos y postres: almendrados, casattas y bombones. Con recetas propias, elaborados 100% artesanalmente en Mar del Plata.',
}

export default function ProductosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-14 text-center md:px-6 md:py-16">
          <p className="rounded-full bg-primary-foreground/15 px-4 py-1.5 text-sm font-bold tracking-wide">
            HELADO ARTESANAL
          </p>
          <h1 className="text-balance text-4xl font-extrabold md:text-5xl">
            Nuestros Productos
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/90">
            Con recetas propias elaboramos todos nuestros productos de manera
            artesanal, con la mejor materia prima.
          </p>
        </div>
      </section>

      {/* A la crema */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6" aria-labelledby="crema">
        <div className="mb-8 flex flex-col gap-2">
          <h2 id="crema" className="text-3xl font-extrabold md:text-4xl">
            A la Crema
          </h2>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            Cremosos e intensos: dulce de leche, chocolate y las cremas de
            siempre, junto a los nuevos gustos de temporada.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {SABORES_CREMA.map((sabor) => (
            <FlavorCard key={sabor.nombre} sabor={sabor} />
          ))}
        </div>
      </section>

      {/* Al agua */}
      <section className="bg-muted py-14" aria-labelledby="agua">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8 flex flex-col gap-2">
            <h2 id="agua" className="text-3xl font-extrabold md:text-4xl">
              Al Agua
            </h2>
            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              Frutales naturales, frescos y livianos. El clásico refrescante
              del verano marplatense.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {SABORES_AGUA.map((sabor) => (
              <FlavorCard key={sabor.nombre} sabor={sabor} />
            ))}
          </div>
        </div>
      </section>

      {/* Palitos */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6" aria-labelledby="palitos">
        <div className="mb-8 flex flex-col gap-2">
          <h2 id="palitos" className="text-3xl font-extrabold md:text-4xl">
            Palitos
          </h2>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            A la crema, al agua y especiales. Para darse un gusto en cualquier
            momento.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {PALITOS.map((sabor) => (
            <FlavorCard key={sabor.nombre} sabor={sabor} />
          ))}
        </div>
      </section>

      {/* Postres */}
      <section className="bg-muted py-14" aria-labelledby="postres">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-8 flex flex-col gap-2">
            <h2 id="postres" className="text-3xl font-extrabold md:text-4xl">
              Postres
            </h2>
            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              Almendrados, casattas y bombones helados para cerrar cualquier
              comida como corresponde.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {POSTRES.map((sabor) => (
              <FlavorCard key={sabor.nombre} sabor={sabor} />
            ))}
          </div>
        </div>
      </section>

      {/* Nota + CTA */}
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center md:px-6">
        <div className="flex max-w-2xl items-start gap-3 rounded-3xl bg-card p-6 text-left shadow-sm ring-1 ring-border">
          <Info className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
          <p className="leading-relaxed text-muted-foreground">
            {'Consultá en las sucursales por otros gustos del día: siempre hay nuevos sabores de temporada y el clásico "sabor de la semana".'}
          </p>
        </div>
        <Link
          href="/sucursales"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-bold text-accent-foreground shadow-md transition-transform hover:scale-105"
        >
          <MapPin className="size-5" aria-hidden="true" />
          Encontrá tu sucursal más cercana
        </Link>
      </section>
    </>
  )
}
