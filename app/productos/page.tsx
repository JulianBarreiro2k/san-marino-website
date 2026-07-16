'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { FlavorCard } from '@/components/flavor-card'
import { PALITOS, POSTRES, SABORES_AGUA, SABORES_CREMA, LISTADO_SABORES } from '@/lib/data'

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

const SABOR_CATEGORIES = [
  { id: 'cremas', label: 'CREMAS', key: 'CREMAS' },
  { id: 'dulces', label: 'DULCES DE LECHE', key: 'DULCES DE LECHE' },
  { id: 'chocolates', label: 'CHOCOLATES', key: 'CHOCOLATES' },
  { id: 'frutas', label: 'FRUTAS', key: 'FRUTAS AL AGUA Y A LA CREMA' },
]

const SUB_TAB_STYLES: Record<string, { active: string; dot: string; itemHover: string }> = {
  cremas: {
    active: 'bg-amber-500 text-white border-amber-500 shadow-amber-500/20 shadow-md',
    dot: 'bg-amber-500',
    itemHover: 'hover:bg-white hover:shadow-xs hover:shadow-amber-500/5',
  },
  dulces: {
    active: 'bg-orange-600 text-white border-orange-600 shadow-orange-600/20 shadow-md',
    dot: 'bg-orange-600',
    itemHover: 'hover:bg-white hover:shadow-xs hover:shadow-orange-600/5',
  },
  chocolates: {
    active: 'bg-stone-600 text-white border-stone-600 shadow-stone-600/20 shadow-md',
    dot: 'bg-stone-600',
    itemHover: 'hover:bg-white hover:shadow-xs hover:shadow-stone-600/5',
  },
  frutas: {
    active: 'bg-rose-500 text-white border-rose-500 shadow-rose-500/20 shadow-md',
    dot: 'bg-rose-500',
    itemHover: 'hover:bg-white hover:shadow-xs hover:shadow-rose-500/5',
  },
}

function ProductosContent() {
  const [activeTab, setActiveTab] = useState('helados')
  const [activeSubTab, setActiveSubTab] = useState('cremas')
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
    setActiveSubTab('cremas')
    router.push(`/productos?tab=${id}`, { scroll: false })
  }

  const current = TABS.find((t) => t.id === activeTab)!

  // Filter active sub-tab flavors
  const currentCategory = LISTADO_SABORES.find((cat) => {
    const matchedSubTab = SABOR_CATEGORIES.find((sub) => sub.id === activeSubTab)
    return cat.categoria === matchedSubTab?.key
  })

  const saboresDeCategoria = currentCategory
    ? [...currentCategory.sabores].sort((a, b) => a.localeCompare(b, 'es'))
    : []

  return (
    <div className="relative isolate overflow-hidden min-h-screen pb-20 bg-background text-foreground">
      {/* Hero header */}
      <section className="relative pt-36 pb-10 text-center px-4 overflow-hidden">
        {/* Background Watermark - Only behind header */}
        <div className="pointer-events-none absolute inset-x-0 top-[45%] md:top-1/4 -z-10 flex items-center justify-center select-none opacity-[0.08]">
          <span className="text-[28vw] md:text-[20vw] font-black tracking-tight text-muted-foreground text-center uppercase leading-none whitespace-nowrap">
            San Marino
          </span>
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl uppercase leading-none">
          Nuestros
          <br />
          <span className="text-primary">Productos</span>
        </h1>
      </section>

      {/* Tabs */}
      <div className="sticky top-[80px] z-40 bg-background/95 backdrop-blur-md border-b border-border">
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

      {/* Categorized list of all ice cream flavors */}
      {activeTab === 'helados' && (
        <section className="mt-24 border-t border-border pt-10">
          {/* Title section with watermark */}
          <div className="relative overflow-hidden py-14 text-center w-full">
            {/* Background Watermark - behind title */}
            <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 -z-10 flex items-center justify-center select-none opacity-[0.08]">
              <span className="text-[28vw] md:text-[20vw] font-black tracking-tight text-muted-foreground text-center uppercase leading-none whitespace-nowrap">
                San Marino
              </span>
            </div>
            
            <h2 className="relative z-10 text-5xl font-extrabold tracking-tight text-foreground md:text-7xl uppercase leading-none">
              Conocé Nuestros
              <br />
              <span className="text-primary">Sabores</span>
            </h2>
          </div>

          <div className="mx-auto max-w-6xl px-4 md:px-6">
            {/* Sub-tabs Selector */}
            <div className="border-b border-border mb-10 bg-background/95 backdrop-blur-md">
              <div className="mx-auto flex flex-wrap max-w-6xl items-end justify-center gap-0 px-2 md:px-6">
                {SABOR_CATEGORIES.map((subTab) => {
                  const isActive = activeSubTab === subTab.id
                  return (
                    <button
                      key={subTab.id}
                      onClick={() => setActiveSubTab(subTab.id)}
                      className={`relative px-3 sm:px-6 py-4 text-xs font-bold tracking-widest transition-colors duration-200 cursor-pointer ${
                        isActive
                          ? 'text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {subTab.id === 'dulces' ? (
                        <>
                          <span className="sm:hidden">DDL</span>
                          <span className="hidden sm:inline">{subTab.label}</span>
                        </>
                      ) : subTab.id === 'chocolates' ? (
                        <>
                          <span className="sm:hidden">CHOCOS</span>
                          <span className="hidden sm:inline">{subTab.label}</span>
                        </>
                      ) : (
                        subTab.label
                      )}
                      {/* Active underline */}
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-foreground transition-transform duration-300 origin-left ${
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Grilla de Sabores Categorizados */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {saboresDeCategoria.map((sabor) => (
                <div
                  key={sabor}
                  className={`bg-[#eff1f1] rounded-2xl p-4 flex items-center justify-center text-center transition-all duration-300 hover:scale-102 hover:shadow-xs group cursor-default ${SUB_TAB_STYLES[activeSubTab].itemHover}`}
                >
                  <span className="text-title text-sm sm:text-base text-black transition-colors duration-200">
                    {sabor}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default function ProductosPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-muted-foreground">Cargando productos...</div>}>
      <ProductosContent />
    </Suspense>
  )
}


