'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Flame, Award, Home } from 'lucide-react'

export default function NosotrosPage() {
  const values = [
    {
      icon: Flame,
      title: 'Pasión',
      description: 'Elaboramos cada helado con dedicación y amor por lo que hacemos.'
    },
    {
      icon: Award,
      title: 'Calidad',
      description: 'Ingredientes naturales y procesos artesanales en cada producción.'
    },
    {
      icon: Home,
      title: 'Familia',
      description: 'Una empresa familiar que valora a su comunidad y clientes.'
    }
  ]

  const milestones = [
    { year: '1985', title: 'Fundación', description: 'Nace San Marino en el corazón de Mar del Plata' },
    { year: '2024', title: 'Presente', description: '5 sucursales sirviendo a la comunidad marplatense' }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
        {/* Background decoration - subtle */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground mb-6 text-balance leading-tight">
            Nuestra Historia
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
            Desde 1985, elaboramos helados artesanales con pasión, tradición y los mejores ingredientes naturales
          </p>
          <Link
            href="/sucursales"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
          >
            Visitanos
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>

      {/* Story Section */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-6 text-balance">
              El Comienzo
            </h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                En 1985, una familia marplatense decidió crear algo especial: helados artesanales elaborados con pasión y los mejores ingredientes naturales. Lo que comenzó como un pequeño local en el corazón de Mar del Plata se convirtió en una institución local.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Cada cucharada de San Marino cuenta la historia de nuestro compromiso con la calidad, la tradición y el amor por lo que hacemos. Nuestros clientes no son solo eso, son parte de nuestra familia.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Hoy, con 5 sucursales en Puerto, Güemes, Centro y Constitución, seguimos manteniéndose fieles a nuestros valores: ingredientes naturales, procesos artesanales y atención personalizada.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative aspect-square rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/historia-san-marino.png"
              alt="Mascota San Marino"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-12 md:mb-16 text-center text-balance">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-background shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                    <Icon className="size-6 md:size-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">{value.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-12 md:mb-16 text-center text-balance">
          Nuestra Trayectoria
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="relative">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm md:text-base flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-black text-accent mb-1">{milestone.year}</h3>
                  <h4 className="text-base md:text-lg font-bold text-foreground mb-2">{milestone.title}</h4>
                  <p className="text-sm md:text-base text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 md:mb-8 text-balance">
            Nuestra Misión
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8">
            Crear momentos de felicidad a través de helados artesanales de excelente calidad, manteniendo nuestros valores familiares y el compromiso con la tradición marplatense. Queremos ser el lugar donde cada cliente se sienta parte de nuestra familia.
          </p>
          <p className="text-sm sm:text-base md:text-lg opacity-90">
            Porque cada helado San Marino es más que un dulce, es un recuerdo, una emoción, una tradición que compartimos con vos.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24">
        <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 sm:p-12 md:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-4 md:mb-6 text-balance">
            Visitanos Hoy
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8">
            Ven a probar nuestros deliciosos helados artesanales en cualquiera de nuestras sucursales en Mar del Plata
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/productos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              Ver Sabores
              <ArrowRight className="size-5" />
            </Link>
            <Link
              href="/sucursales"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105"
            >
              Nuestras Sucursales
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
