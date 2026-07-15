'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Award, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react'

export default function NosotrosPage() {
  const values = [
    {
      icon: Sparkles,
      title: 'Elaboración Artesanal',
      description: 'Elaboramos un verdadero helado artesanal a través de procesos tradicionales meticulosos, cuidando la textura y frescura de cada sabor.'
    },
    {
      icon: Heart,
      title: 'Tradición Familiar',
      description: 'Desde 1985, somos una familia marplatense que conserva sus recetas secretas con amor y dedicación para ofrecerte el helado de tu vida.'
    },
    {
      icon: Award,
      title: 'Calidad & Tecnología',
      description: 'Conjugamos experiencia artesanal, ingredientes de primer nivel y la última tecnología en refrigeración bajo estrictas normas de producción.'
    }
  ]

  const milestones = [
    {
      year: '1985',
      title: 'El Comienzo de un Sueño',
      description: 'Iniciamos nuestro camino como una pequeña empresa familiar en Mar del Plata, dedicados a crear el helado artesanal definitivo.'
    },
    {
      year: '1998',
      title: 'Tecnología Italiana',
      description: 'Incorporamos maquinaria de vanguardia importada de Italia para optimizar la cremosidad sin alterar nuestras recetas tradicionales.'
    },
    {
      year: '2012',
      title: 'Nuevos Puntos de Encuentro',
      description: 'Expandimos nuestra presencia abriendo locales estratégicos en Puerto, Güemes y Constitución para estar más cerca de cada familia.'
    },
    {
      year: 'Hoy',
      title: 'Más de 40 Años de Pasión',
      description: 'Nos consolidamos como un referente indiscutido en la Costa Atlántica, manteniendo la calidad intacta desde el primer día.'
    }
  ]

  const standards = [
    'Materia prima 100% seleccionada: frutas frescas y chocolates importados.',
    'Proceso de producción certificado bajo estrictas normas de higiene y seguridad.',
    'Elaboración diaria para asegurar la máxima frescura y textura aterciopelada.',
    'Sin colorantes artificiales ni aditivos innecesarios, sabor genuino e inconfundible.'
  ]

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/30 via-accent/20 to-background">
        {/* Animated decorative shapes */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-foreground mb-6 leading-none text-balance font-sans">
            Nuestra <span className="text-primary">Historia</span> &amp; <span className="text-accent">Pasión</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Conocé la trayectoria familiar y el compromiso artesanal detrás del helado de tu vida en Mar del Plata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#historia"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-primary/30"
            >
              Nuestra Esencia
              <ChevronRight className="size-5" />
            </Link>
            <Link
              href="/sucursales"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 backdrop-blur-sm px-8 py-4 font-bold text-foreground transition-all hover:bg-muted hover:scale-105"
            >
              Visitanos
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="historia" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Story Text - Left Half */}
            <div className="py-12 md:py-0 flex items-center lg:aspect-square" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-accent font-bold uppercase tracking-widest text-sm block">La Tradición Continúa</span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground leading-tight font-sans">
                  Un verdadero <br />
                  <span className="text-primary">Helado Artesanal</span>
                </h2>
              </div>
              
              <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed lg:pr-12">
                <p className="border-l-4 border-accent pl-4 font-medium italic text-foreground">
                  &ldquo;Desde 1985, elaboramos helados artesanales con recetas familiares y pasión.&rdquo;
                </p>
                <p>
                  Conjugamos tradición, ingredientes de calidad premium y tecnología moderna para crear un sabor único e inconfundible que te llevará a los mejores recuerdos.
                </p>
              </div>
            </div>
          </div>

          {/* Story Image - Right Half, Full Height */}
          <div className="relative aspect-square lg:aspect-auto w-full overflow-hidden">
            <Image
              src="/images/produccion-artesanal.png"
              alt="Producción Artesanal de Helados San Marino"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
              <span className="text-accent font-bold text-xs uppercase tracking-widest mb-2">100% Calidad</span>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-2 font-sans">Elaboración propia</h3>
              <p className="text-sm text-gray-300">Cada lote es supervisado por maestros heladeros que custodian el sabor familiar.</p>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Standards & Excellence Grid */}
      <section>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left side: Mascot Image */}
            <div className="relative aspect-square overflow-hidden shadow-2xl group order-2 lg:order-1">
              <Image
                src="/images/historia-san-marino.png"
                alt="Mascota Helados San Marino"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/45 to-transparent blend-multiply" />
            </div>

            {/* Right side: Standards Checkmarks */}
            <div className="space-y-8 order-1 lg:order-2 lg:pl-12">
              <div className="space-y-4">
                <span className="text-accent font-bold uppercase tracking-widest text-sm block">Excelencia Garantizada</span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground font-sans">
                  Procesos bajo <br />
                  <span className="text-primary">estrictas normas</span>
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  Cada lote es cuidado con estrictas normas de higiene y control de calidad para garantizar un helado puro, fresco y con textura perfecta.
                </p>
              </div>

              <ul className="space-y-4">
                {standards.map((std, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 bg-accent/10 text-accent rounded-full p-1 flex-shrink-0">
                      <ShieldCheck className="size-4" />
                    </div>
                    <span className="text-foreground font-medium text-sm sm:text-base">{std}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="relative overflow-hidden text-white shadow-2xl" style={{
        backgroundImage: 'url(/images/helado-fondo.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-20 mx-auto max-w-6xl px-6 py-20 md:py-32 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-balance font-sans">
              ¡Disfrutá del verdadero sabor artesanal!
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-xl font-medium">
              Vení a visitarnos a nuestras sucursales o pedí online y te lo llevamos directamente a tu puerta.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/productos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-primary shadow-lg hover:scale-105 hover:bg-gray-50 transition-all text-sm sm:text-base"
            >
              Ver Sabores
            </Link>
            <Link
              href="/sucursales"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-bold text-white shadow-lg hover:scale-105 hover:bg-accent/90 transition-all text-sm sm:text-base border border-white/20"
            >
              Sucursales
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
