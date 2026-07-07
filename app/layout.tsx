import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Baloo_2, Nunito } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { DeliveryFab } from '@/components/delivery-fab'
import './globals.css'

const _baloo = Baloo_2({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-baloo',
})

const _nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: {
    default: 'Helados San Marino | El helado de tu vida — Mar del Plata',
    template: '%s | Helados San Marino',
  },
  description:
    'Desde 1985, los mejores helados artesanales de Mar del Plata. Helados a la crema, al agua y postres elaborados 100% artesanalmente. 5 sucursales y delivery.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#38b2b2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`bg-background ${_baloo.variable} ${_nunito.variable}`}
    >
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <DeliveryFab />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
