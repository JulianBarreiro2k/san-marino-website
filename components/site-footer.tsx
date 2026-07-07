import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FacebookIcon, InstagramIcon } from '@/components/social-icons'
import { BRAND, ZONAS } from '@/lib/data'

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4 md:px-6">
        <div className="flex flex-col gap-4">
          <Image
            src="/images/logo-sanmarino.png"
            alt="Logo de Helados San Marino, desde 1985, el helado de tu vida"
            width={140}
            height={140}
            className="rounded-2xl"
          />
          <p className="text-sm leading-relaxed text-secondary-foreground/80">
            Desde 1985, los mejores helados artesanales de Mar del Plata.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-bold">Sucursales</h2>
          <ul className="flex flex-col gap-2 text-sm text-secondary-foreground/80">
            {ZONAS.flatMap((zona) =>
              zona.sucursales.map((sucursal) => (
                <li key={sucursal.direccion} className="flex items-start gap-2">
                  <MapPin
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {sucursal.direccion}
                </li>
              )),
            )}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-bold">Delivery</h2>
          <ul className="flex flex-col gap-3 text-sm">
            {ZONAS.map((zona) => (
              <li key={zona.id}>
                <a
                  href={zona.telefonoHref}
                  className="flex items-center gap-2 text-secondary-foreground/80 transition-colors hover:text-primary"
                >
                  <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    {zona.nombre}: {zona.telefono}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-bold">Seguinos</h2>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-foreground/80 transition-colors hover:text-primary"
              >
                <InstagramIcon className="size-4 text-primary" aria-hidden="true" />@
                {BRAND.instagram}
              </a>
            </li>
            <li>
              <a
                href={BRAND.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-foreground/80 transition-colors hover:text-primary"
              >
                <FacebookIcon className="size-4 text-primary" aria-hidden="true" />
                {BRAND.facebook}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-2 break-all text-secondary-foreground/80 transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {BRAND.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/15 py-4">
        <p className="mx-auto max-w-6xl px-4 text-center text-xs text-secondary-foreground/60 md:px-6">
          {`© ${new Date().getFullYear()} Helados San Marino — Mar del Plata, Argentina. El helado de tu vida desde 1985.`}
        </p>
      </div>
      <div className="h-1 bg-primary" aria-hidden="true" />
    </footer>
  )
}
