import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, BadgeCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description:
    'La historia de Helados San Marino: una empresa familiar de Mar del Plata que elabora helados 100% artesanales desde 1985 con recetas propias.',
}

const TIMELINE = [
  {
    anio: '1985',
    titulo: 'Nace San Marino',
    texto:
      'Abrimos nuestra primera heladería en Mar del Plata, con la ilusión de una familia y recetas propias.',
  },
  {
    anio: '1990s',
    titulo: 'Crecemos con la ciudad',
    texto:
      'El boca en boca marplatense nos lleva a abrir nuevas sucursales en el Puerto y el Centro.',
  },
  {
    anio: '2000s',
    titulo: 'Calidad y tecnología',
    texto:
      'Incorporamos tecnología de producción manteniendo la elaboración artesanal bajo estrictas normas de calidad.',
  },
  {
    anio: 'Hoy',
    titulo: '5 sucursales y delivery',
    texto:
      'Seguimos siendo una empresa familiar, con 5 locales y delivery en Puerto, Güemes, Centro y Constitución.',
  },
]

const GALERIA = [
  {
    src: '/images/produccion-artesanal.png',
    alt: 'Elaboración artesanal del helado en nuestro obrador',
    clase: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/images/local-sanmarino.png',
    alt: 'Interior de una sucursal de San Marino',
    clase: '',
  },
  {
    src: '/images/hero-dulce-de-leche.png',
    alt: 'Bandeja de helado de dulce de leche',
    clase: '',
  },
  {
    src: '/images/cucurucho.png',
    alt: 'Cucurucho con helado artesanal',
    clase: '',
  },
  {
    src: '/images/almendrado.png',
    alt: 'Postre almendrado San Marino',
    clase: '',
  },
]

export default function SobreNosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
          <div className="flex flex-col gap-5">
            <p className="w-fit rounded-full bg-primary/20 px-4 py-1.5 text-sm font-bold tracking-wide text-primary">
              · DESDE 1985 ·
            </p>
            <h1 className="text-balance text-4xl font-extrabold leading-tight md:text-5xl">
              Una familia, un oficio, el helado de tu vida
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-secondary-foreground/85">
              {'Somos una empresa familiar marplatense que desde 1985 elabora helados 100% artesanales. A lo largo de estos años logramos conjugar experiencia, elaboración artesanal, calidad y tecnología en un sabor único.'}
            </p>
            <ul className="flex flex-col gap-2.5">
              {[
                'Elaboración 100% artesanal con recetas propias',
                'Materia prima de primera calidad',
                'Producción bajo estrictas normas de calidad',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <BadgeCheck
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-secondary-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/produccion-artesanal.png"
              alt="Maestro heladero elaborando helado artesanal en el obrador de San Marino"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Línea de tiempo */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="mb-12 text-balance text-center text-3xl font-extrabold md:text-4xl">
          Nuestra historia, año a año
        </h2>
        <ol className="grid gap-6 md:grid-cols-4">
          {TIMELINE.map((hito, i) => (
            <li
              key={hito.anio}
              className="relative flex flex-col gap-3 rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-primary font-serif text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <p className="font-serif text-2xl font-extrabold text-primary">
                {hito.anio}
              </p>
              <h3 className="text-lg font-bold">{hito.titulo}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {hito.texto}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Galería */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="mb-10 text-balance text-center text-3xl font-extrabold md:text-4xl">
            Así hacemos el helado de tu vida
          </h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {GALERIA.map((foto) => (
              <div
                key={foto.src}
                className={`relative aspect-square overflow-hidden rounded-2xl ${foto.clase}`}
              >
                <Image
                  src={foto.src || '/placeholder.svg'}
                  alt={foto.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-16 text-center md:px-6">
        <h2 className="text-balance text-3xl font-extrabold md:text-4xl">
          {'¿Todavía no lo probaste?'}
        </h2>
        <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Conocé todos nuestros sabores a la crema, al agua y los postres que
          hacemos artesanalmente todos los días.
        </p>
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-bold text-primary-foreground shadow-md transition-transform hover:scale-105"
        >
          Ver Nuestros Productos
          <ArrowRight className="size-5" aria-hidden="true" />
        </Link>
      </section>
    </>
  )
}
