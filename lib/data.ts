export const BRAND = {
  name: 'Helados San Marino',
  slogan: 'El helado de tu vida',
  since: 1985,
  email: 'contacto@heladossanmarino.com.ar',
  instagram: 'heladossanmarino',
  instagramUrl: 'https://instagram.com/heladossanmarino',
  facebook: 'helados.sanmarino',
  facebookUrl: 'https://facebook.com/helados.sanmarino',
}

export type Zona = {
  id: string
  nombre: string
  telefono: string
  telefonoHref: string
  sucursales: { direccion: string; mapsQuery: string; imagen?: string }[]
}

export const ZONAS: Zona[] = [
  {
    id: 'puerto',
    nombre: 'Zona Puerto',
    telefono: '480-8233',
    telefonoHref: 'tel:+542234808233',
    sucursales: [
      {
        direccion: 'Magallanes 3598',
        mapsQuery: 'Magallanes 3598, Mar del Plata',
      },
    ],
  },
  {
    id: 'centro-guemes',
    nombre: 'Zona Centro / Güemes',
    telefono: '494-9455',
    telefonoHref: 'tel:+542234949455',
    sucursales: [
      {
        direccion: 'Córdoba 1621',
        mapsQuery: 'Córdoba 1621, Mar del Plata',
      },
      {
        direccion: 'Olavarría esq. Alvarado',
        mapsQuery: 'Olavarría y Alvarado, Mar del Plata',
      },
    ],
  },
  {
    id: 'constitucion',
    nombre: 'Zona Constitución',
    telefono: '471-6757',
    telefonoHref: 'tel:+542234716757',
    sucursales: [
      {
        direccion: 'Av. Constitución 4018',
        mapsQuery: 'Av. Constitución 4018, Mar del Plata',
      },
      {
        direccion: 'Av. Constitución 5627',
        mapsQuery: 'Av. Constitución 5627, Mar del Plata',
        imagen: '/images/local-constitucion-5627.png',
      },
    ],
  },
]

export type Sabor = {
  nombre: string
  descripcion: string
  imagen: string
}

export const SABORES_CREMA: Sabor[] = [
  {
    nombre: 'Dulce de Leche',
    descripcion: 'El clásico de la casa, cremoso y con dulce de leche natural.',
    imagen: '/images/hero-dulce-de-leche.png',
  },
  {
    nombre: 'Chocolate',
    descripcion: 'Intenso, con cacao de primera calidad y trozos de chocolate.',
    imagen: '/images/sabor-chocolate.png',
  },
  {
    nombre: 'Açaí',
    descripcion:
      'Refrescante, suave y con ese sabor único que te transporta directo a Brasil.',
    imagen: '/images/sabor-acai.png',
  },
  {
    nombre: 'Yuzu',
    descripcion:
      'Fresco y delicado. Ideal para quienes buscan sabores intensos pero equilibrados.',
    imagen: '/images/sabor-yuzu.png',
  },
]

export const SABORES_AGUA: Sabor[] = [
  {
    nombre: 'Mango',
    descripcion:
      'Helado de agua de mango natural, fresco y tropical, con veteado de mango.',
    imagen: '/images/sabor-mango.png',
  },
  {
    nombre: 'Frutilla',
    descripcion: 'Frutal, natural y liviano. El sabor del verano marplatense.',
    imagen: '/images/sabor-frutilla.png',
  },
  {
    nombre: 'Limón',
    descripcion: 'Cítrico y refrescante, elaborado con fruta natural.',
    imagen: '/images/sabor-limon.png',
  },
]

export const POSTRES: Sabor[] = [
  {
    nombre: 'Almendrado',
    descripcion:
      'Helado de crema americana con almendras, recubierto de garrapiñada.',
    imagen: '/images/almendrado.png',
  },
  {
    nombre: 'Casatta',
    descripcion:
      'El postre helado clásico en capas, con frutas y crema. Ideal para compartir.',
    imagen: '/images/casatta.png',
  },
  {
    nombre: 'Bombón Suizo',
    descripcion:
      'Bocado de helado bañado en chocolate con crema y guinda.',
    imagen: '/images/bombon-suizo.png',
  },
  {
    nombre: 'Bombón Escocés',
    descripcion:
      'Helado bañado en chocolate con dulce de leche y almendra.',
    imagen: '/images/bombon-escoces.png',
  },
]

export const PALITOS: Sabor[] = [
  {
    nombre: 'Palito al Agua',
    descripcion: 'Frutales naturales: frutilla, limón y naranja.',
    imagen: '/images/palito-agua.png',
  },
  {
    nombre: 'Palito a la Crema',
    descripcion: 'Bañados en chocolate con pistacho, almendra o maní.',
    imagen: '/images/palito-crema.png',
  },
  {
    nombre: 'Patita',
    descripcion:
      'Helado de dulce de leche con corazón de dulce de leche natural bañado en chocolate con leche.',
    imagen: '/images/patita.png',
  },
]

export const INSTAGRAM_GRID = [
  { src: '/images/sabor-acai.png', alt: 'Nuevo gusto Açaí' },
  { src: '/images/sabor-yuzu.png', alt: 'Nuevo gusto Yuzu' },
  { src: '/images/sabor-mango.png', alt: 'Nuevo gusto Mango' },
  { src: '/images/palito-crema.png', alt: 'Palitos a la crema' },
  { src: '/images/patita.png', alt: 'Patita de dulce de leche' },
  { src: '/images/bombon-suizo.png', alt: 'Bombón Suizo' },
]
