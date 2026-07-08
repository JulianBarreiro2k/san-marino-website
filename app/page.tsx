import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Heart,
  IceCreamCone,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react'
import { InstagramIcon } from '@/components/social-icons'
import { BRAND, INSTAGRAM_GRID } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Helados San Marino | Desde 1985, el helado de tu vida — Mar del Plata',
  description:
    'Los mejores helados artesanales de Mar del Plata desde 1985. Helados a la crema, al agua y postres. Delivery en Puerto, Güemes, Centro y Constitución.',
}

const VALORES = [
  {
    icon: IceCreamCone,
    titulo: '100% Artesanal',
    texto:
      'Elaboramos todos nuestros productos con recetas propias y materia prima de primera calidad.',
  },
  {
    icon: Heart,
    titulo: 'Empresa Familiar',
    texto:
      'Una familia marplatense que desde 1985 pone el corazón en cada pote y cucurucho.',
  },
  {
    icon: Sparkles,
    titulo: 'Desde 1985',
    texto:
      'Cuatro décadas conjugando experiencia, calidad y tecnología en un sabor único.',
  },
]

const CATEGORIAS = [
  {
    titulo: 'Nuestros Productos',
    texto: 'Helados a la crema, al agua, palitos y postres artesanales.',
    href: '/productos',
    imagen: '/images/cucurucho.png',
    cta: 'Ver sabores',
  },
  {
    titulo: 'Sucursales',
    texto: '5 locales en Puerto, Güemes, Centro y Constitución.',
    href: '/sucursales',
    imagen: '/images/local-sanmarino.png',
    cta: 'Encontrá tu sucursal',
  },
  {
    titulo: 'Delivery',
    texto: 'Te llevamos el helado de tu vida a casa. Llamá a tu zona.',
    href: '/sucursales#delivery',
    imagen: '/images/hero-dulce-de-leche.png',
    cta: 'Pedir ahora',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/minimalist-hero.png"
          alt="Helados San Marino"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_80%] md:object-[right_center]"
        />

        {/* Hero content wrapper */}
        <div className="relative z-10 mx-auto h-full w-full max-w-6xl px-6 md:px-8">
          {/* Inner positioning container */}
          <div className="flex h-full w-full flex-col justify-start pt-28 md:justify-center md:pt-0 items-center md:items-start text-center md:text-left max-w-full md:max-w-[50%] text-foreground">
            <h1 className="text-balance text-center text-5xl font-black md:text-7xl uppercase tracking-tight leading-none">
              Los mejores
              <br />
              <span className="text-accent">helados artesanales</span>
            </h1>
            <p className="max-w-xl text-balance text-lg md:text-xl font-medium text-foreground mt-4">
              {'El helado de tu vida, elaborado de manera artesanal.'}
            </p>
            <div className="flex flex-wrap gap-4 mt-6 justify-center">
              <Link
                href="/sucursales#delivery"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105"
              >
                <Phone className="size-5" aria-hidden="true" />
                Pedí delivery
              </Link>
              <Link
                href="/productos"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
              >
                Ver sabores
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Historia / valores */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <h2 className="text-balance text-3xl font-extrabold md:text-4xl">
            Una tradición marplatense
          </h2>
          <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            {'A lo largo de estos años logramos conjugar experiencia, elaboración artesanal, calidad y tecnología en un sabor único.'}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {VALORES.map((valor) => (
            <div
              key={valor.titulo}
              className="flex flex-col items-center gap-3 rounded-3xl bg-card p-8 text-center shadow-sm ring-1 ring-border"
            >
              <span className="flex size-14 items-center justify-center rounded-full bg-primary/15">
                <valor.icon className="size-7 text-primary" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold">{valor.titulo}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {valor.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Categorías */}
      <section className="bg-secondary py-16 text-secondary-foreground">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mb-10 text-balance text-center text-3xl font-extrabold md:text-4xl">
            {'¿Qué estás buscando hoy?'}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {CATEGORIAS.map((cat) => (
              <Link
                key={cat.titulo}
                href={cat.href}
                className="group flex flex-col overflow-hidden rounded-3xl bg-card text-card-foreground shadow-md transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cat.imagen || '/placeholder.svg'}
                    alt={cat.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <h3 className="text-2xl font-bold">{cat.titulo}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {cat.texto}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-bold text-primary">
                    {cat.cta}
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mb-8 flex flex-col items-center gap-3 text-center">
          <h2 className="text-balance text-3xl font-extrabold md:text-4xl">
            Seguinos en Instagram
          </h2>
          <a
            href={BRAND.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-accent"
          >
            <InstagramIcon className="size-5" aria-hidden="true" />@
            {BRAND.instagram}
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {INSTAGRAM_GRID.map((post) => (
            <a
              key={post.src}
              href={BRAND.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={post.src || '/placeholder.svg'}
                alt={post.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-accent text-accent-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center md:px-6">
          <h2 className="text-balance text-3xl font-extrabold md:text-4xl">
            {'¿Se te antojó? Pedilo ahora'}
          </h2>
          <p className="max-w-xl text-pretty leading-relaxed text-accent-foreground/90">
            Delivery en Puerto, Güemes, Centro y Constitución, o visitanos en
            cualquiera de nuestras 5 sucursales.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/sucursales#delivery"
              className="inline-flex items-center gap-2 rounded-full bg-accent-foreground px-6 py-3.5 font-bold text-accent transition-transform hover:scale-105"
            >
              <Phone className="size-5" aria-hidden="true" />
              Teléfonos de Delivery
            </Link>
            <Link
              href="/sucursales"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 font-bold text-secondary-foreground transition-transform hover:scale-105"
            >
              <MapPin className="size-5" aria-hidden="true" />
              Ver Sucursales
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
