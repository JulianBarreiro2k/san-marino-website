'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { Info, MapPin } from 'lucide-react'
import { FlavorCard } from '@/components/flavor-card'
import { PALITOS, POSTRES, SABORES_AGUA, SABORES_CREMA } from '@/lib/data'

const TABS = [
  {
    id: 'helados',
    label: 'HELADOS',
    description: 'Cremosos a la crema e intensos al agua: nuestros clásicos de siempre junto a nuevos gustos de temporada.',
    items: [...SABORES_CREMA, ...SABORES_AGUA],
    cols: 'grid-cols-2 md:grid-cols-4',
  },
  {
    id: 'palitos',
    label: 'PALITOS',
    description: 'A la crema, al agua y especiales. Para darse un gusto en cualquier momento.',
    items: PALITOS,
    cols: 'grid-cols-2 md:grid-cols-3',
  },
  {
    id: 'postres',
    label: 'POSTRES',
    description: 'Almendrados, casattas y bombones helados para cerrar cualquier comida como corresponde.',
    items: POSTRES,
    cols: 'grid-cols-2 md:grid-cols-4',
  },
]

function ProductosContent() {
  const [activeTab, setActiveTab] = useState('helados')
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab && TABS.some((t) => t.id === tab)) {
      setActiveTab(tab)
    }
  }, [searchParams])

  const handleTabChange = (id: string) => {
    setActiveTab(id)
    router.push(`/productos?tab=${id}`, { scroll: false })
  }

  const current = TABS.find((t) => t.id === activeTab)!

  return (
    <>
      {/* Hero header */}
      <section className="pt-36 pb-10 text-center px-4">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl uppercase leading-none">
          Nuestros
          <br />
          <span className="text-primary">Productos</span>
        </h1>
      </section>

      {/* Tabs */}
      <div className="sticky top-[80px] z-40 bg-background border-b border-border">
        <div className="mx-auto flex max-w-6xl items-end justify-center gap-0 px-4 md:px-6">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`relative px-6 py-4 text-xs font-bold tracking-widest transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
              {/* Active underline */}
              <span
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-foreground transition-transform duration-300 origin-left ${
                  activeTab === tab.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className={`grid gap-4 md:gap-6 ${current.cols}`}>
          {current.items.map((sabor) => (
            <FlavorCard key={sabor.nombre} sabor={sabor} />
          ))}
        </div>
      </section>

      {/* Note + CTA */}
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

export default function ProductosPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-muted-foreground">Cargando productos...</div>}>
      <ProductosContent />
    </Suspense>
  )
}
