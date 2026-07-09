'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, Users, Leaf } from 'lucide-react'

export default function NosotrosPage() {
  const values = [
    {
      icon: Heart,
      title: 'Pasión',
      description: 'Elaboramos cada helado con dedicación y amor por lo que hacemos.'
    },
    {
      icon: Leaf,
      title: 'Calidad',
      description: 'Ingredientes naturales y procesos artesanales en cada producción.'
    },
    {
      icon: Users,
      title: 'Familia',
      description: 'Una empresa familiar que valora a su comunidad y clientes.'
    }
  ]

  const milestones = [
    { year: '1985', title: 'Fundación', description: 'Nace San Marino en el corazón de Mar del Plata' },
    { year: '1995', title: 'Primera expansión', description: 'Abrimos nuestro segundo local en Güemes' },
    { year: '2005', title: 'Consolidación', description: 'Nos convertimos en referencia de helados artesanales' },
    { year: '2024', title: 'Presente', description: '5 sucursales sirviendo a la comunidad marplatense' }
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen w-full overflow-hidden bg-gradient-to-br from-primary/10 to-accent/5">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-foreground mb-6 text-balance">
            Nuestra Historia
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
            Desde 1985, elaboramos helados artesanales con pasión, tradición y los mejores ingredientes
          </p>
          <Link
            href="/sucursales"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
          >
            Visitanos
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>

      {/* Story Section */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-6">
              El Comienzo
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              En 1985, una familia marplatense decidió crear algo especial: helados artesanales elaborados con pasión y los mejores ingredientes naturales. Lo que comenzó como un pequeño local en el corazón de Mar del Plata se convirtió en una institución local.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Cada cucharada de San Marino cuenta la historia de nuestro compromiso con la calidad, la tradición y el amor por lo que hacemos. Nuestros clientes no son solo eso, son parte de nuestra familia.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hoy, con 5 sucursales en Puerto, Güemes, Centro y Constitución, seguimos manteniéndose fieles a nuestros valores: ingredientes naturales, procesos artesanales y atención personalizada.
            </p>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/historia-san-marino.png"
              alt="Mascota San Marino"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-16 text-center">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="flex flex-col items-center text-center p-8 rounded-2xl bg-background shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="size-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-16 text-center">
          Nuestra Trayectoria
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="relative">
              {/* Timeline dot */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                {index < milestones.length - 1 && (
                  <div className="hidden md:block absolute left-12 top-6 w-full h-1 bg-primary/20" />
                )}
              </div>
              <div>
                <h3 className="text-2xl font-black text-accent mb-2">{milestone.year}</h3>
                <h4 className="text-lg font-bold text-foreground mb-2">{milestone.title}</h4>
                <p className="text-muted-foreground">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
            Nuestra Misión
          </h2>
          <p className="text-xl leading-relaxed mb-8">
            Crear momentos de felicidad a través de helados artesanales de excelente calidad, manteniendo nuestros valores familiares y el compromiso con la tradición marplatense. Queremos ser el lugar donde cada cliente se sienta parte de nuestra familia.
          </p>
          <p className="text-lg opacity-90">
            Porque cada helado San Marino es más que un dulce, es un recuerdo, una emoción, una tradición que compartimos con vos.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 md:px-6 py-20">
        <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground mb-6">
            Visitanos Hoy
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Ven a probar nuestros deliciosos helados artesanales en cualquiera de nuestras sucursales en Mar del Plata
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/productos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              Ver Sabores
              <ArrowRight className="size-5" />
            </Link>
            <Link
              href="/sucursales"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105"
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
