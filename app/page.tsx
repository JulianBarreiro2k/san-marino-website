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
import { ProductsCarousel } from '@/components/products-carousel'
import { SABORES_CREMA, SABORES_AGUA, PALITOS, POSTRES } from '@/lib/data'

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
        {/* Background Image - Mobile */}
        <Image
          src="/images/hero-mobile.jpg"
          alt="Helados San Marino"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          className="object-cover object-center md:hidden"
        />
        {/* Background Image - Desktop */}
        <Image
          src="/images/hero-desktop.jpg"
          alt="Helados San Marino"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          className="hidden object-cover object-[center_70%] md:block"
        />

        {/* Hero content wrapper */}
        <div className="relative z-10 mx-auto h-full w-full max-w-6xl px-6 md:px-8">
          {/* Inner positioning container */}
          <div className="flex h-full w-full flex-col justify-start pt-28 md:justify-start md:pt-32 items-center md:items-start text-center md:text-left max-w-full md:max-w-[50%] text-foreground">
            <h1 className="text-balance text-center md:text-left text-5xl font-black md:text-7xl uppercase tracking-tight leading-none">
              Los mejores
              <br />
              <span className="text-accent">helados artesanales</span>
            </h1>
            <p className="max-w-xl text-balance text-center md:text-left text-lg md:text-xl font-medium text-foreground mt-4">
              {'El helado de tu vida, elaborado de manera artesanal.'}
            </p>
            <div className="flex flex-nowrap gap-3 mt-6 justify-center md:justify-start">
              <Link
                href="/sucursales#delivery"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105"
              >
                <Phone className="size-4" aria-hidden="true" />
                Pedí delivery
              </Link>
              <Link
                href="/productos"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
              >
                Ver sabores
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mb-12 flex flex-col gap-3">
          <h2 className="text-4xl font-black uppercase tracking-tight text-foreground md:text-5xl font-poppins">
            Conoce Nuestros
            <br />
            <span className="text-primary">Productos</span>
          </h2>
        </div>

        <div className="space-y-16">
          {/* Helados */}
          <ProductsCarousel
            title="Helados"
            items={[...SABORES_CREMA, ...SABORES_AGUA].slice(0, 8)}
            viewAllHref="/productos?tab=helados"
          />
          <div className="border-t border-border" />

          {/* Palitos */}
          <ProductsCarousel
            title="Palitos"
            items={PALITOS.slice(0, 8)}
            viewAllHref="/productos?tab=palitos"
          />
          <div className="border-t border-border" />

          {/* Postres */}
          <ProductsCarousel
            title="Postres"
            items={POSTRES.slice(0, 8)}
            viewAllHref="/productos?tab=postres"
          />
        </div>
      </section>

      {/* Playa / Helados Section */}
      <section className="relative h-96 md:h-[500px] w-full overflow-hidden">
        <Image
          src="/images/beach-section.png"
          alt="Playa"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Contenido */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-balance mb-4">
              Disfruta del mejor helado
              <br />
              de Mar del Plata
            </h2>
            <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Nuestros helados artesanales te acompañan en cada momento del año
            </p>
          </div>
        </div>
      </section>

      {/* Conoce nuestra historia */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 relative w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 h-fit">
          {/* Left side - Text */}
          <div className="flex flex-col justify-center px-6 md:px-12 py-8 md:py-0">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-6">
              Conoce Nuestra Historia
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Somos una empresa familiar marplatense que desde 1985 elabora helados artesanales con pasión y dedicación. Descubre cómo comenzó todo y qué nos hace especiales.
            </p>
            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105 w-fit"
            >
              Nuestra Historia
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
          {/* Right side - Image */}
          <div className="relative aspect-square overflow-hidden md:aspect-square w-full md:w-auto">
            <Image
              src="/images/historia-san-marino.png"
              alt="Mascota de San Marino"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-accent text-accent-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 text-center md:px-6">
          <h2 className="text-balance text-3xl font-extrabold md:text-4xl uppercase">
            {'¿SE TE ANTOJÓ? PEDILO AHORA'}
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
