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
  sucursales: {
    direccion: string
    mapsQuery: string
    imagen?: string
    horarios: {
      dias: string
      hora: string
    }[]
  }[]
}

export const ZONAS: Zona[] = [
  {
    id: 'centro-guemes',
    nombre: 'Zona Centro / Güemes',
    telefono: '494-9455',
    telefonoHref: 'tel:+542234949455',
    sucursales: [
      {
        direccion: 'Córdoba 1621',
        mapsQuery: 'Córdoba 1621, Mar del Plata',
        imagen: '/images/local-cordoba-1621.png',
        horarios: [
          { dias: 'Domingo a jueves', hora: '11 a 0 h' },
          { dias: 'Viernes y sábado', hora: '11 a 1 h' },
        ],
      },
      {
        direccion: 'Olavarría esq. Alvarado',
        mapsQuery: 'Olavarría y Alvarado, Mar del Plata',
        imagen: '/images/local-olavarria-alvarado.png',
        horarios: [
          { dias: 'Domingo a jueves', hora: '11 a 1 h' },
          { dias: 'Viernes y sábado', hora: '11 a 2 h' },
        ],
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
        imagen: '/images/local-constitucion-4018.png',
        horarios: [
          { dias: 'Domingo a jueves', hora: '11 a 0:30 h' },
          { dias: 'Viernes y sábado', hora: '11 a 1:30 h' },
        ],
      },
      {
        direccion: 'Av. Constitución 5627',
        mapsQuery: 'Av. Constitución 5627, Mar del Plata',
        imagen: '/images/local-constitucion-5627.png',
        horarios: [
          { dias: 'Domingo a jueves', hora: '11 a 0:30 h' },
          { dias: 'Viernes y sábado', hora: '11 a 1:30 h' },
        ],
      },
    ],
  },
  {
    id: 'puerto',
    nombre: 'Zona Puerto',
    telefono: '480-8233',
    telefonoHref: 'tel:+542234808233',
    sucursales: [
      {
        direccion: 'Magallanes 3598',
        mapsQuery: 'Magallanes 3598, Mar del Plata',
        imagen: '/images/local-magallanes-3598.png',
        horarios: [
          { dias: 'Domingo a jueves', hora: '11 a 0 h' },
          { dias: 'Viernes y sábado', hora: '11 a 1 h' },
        ],
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
    nombre: '1 Kilo y Medio',
    descripcion: '1 Kilo y Medio de Helado.',
    imagen: '/images/helado 1kg+0.5kg.jpg',
  },
  {
    nombre: 'Helado 1/4 kg',
    descripcion: 'Hasta tres sabores a elección.',
    imagen: '/images/helado 0.25kg.jpg',
  },
  {
    nombre: 'Helado 1/2 kg',
    descripcion: 'Hasta tres sabores a elección.',
    imagen: '/images/helado 0.5kg.jpg',
  },
  {
    nombre: 'Helado 1 Kg',
    descripcion: 'Hasta cuatro sabores a elección.',
    imagen: '/images/helado 1kg.jpg',
  },
]

export const SABORES_AGUA: Sabor[] = [
  {
    nombre: 'Vasito de pasta',
    descripcion: 'vasito de pasta.',
    imagen: '/images/vasito_pasta.jpg',
  },
  {
    nombre: 'Cucurucho',
    descripcion: 'Barquillo.',
    imagen: '/images/helado_cucurucho.jpg',
  },
]

export const POSTRES: Sabor[] = [
  {
    nombre: 'Bombón Suizo',
    descripcion:
      'Base de pionono con helado de crema americana, corazón de dulce de leche natural, bañado en chocolate, decorado con crema y una guinda.',
    imagen: '/images/postre_bombon_suizo.jpg',
  },
  {
    nombre: 'Bombón Escocés',
    descripcion:
      'Base de pionono con helado de chocolate, corazón de dulce de leche natural, bañado en chocolate y decorado con una almendra.',
    imagen: '/images/postre_bombon_escoces.jpg',
  },
  {
    nombre: 'Postre Cassata',
    descripcion:
      'Helado de crema americana, chocolate y frutilla a la crema cubierto con pionono bañado en chocolate.',
    imagen: '/images/postre_casatta.jpg',
  },
  {
    nombre: 'Postre Almendrado',
    descripcion:
      'Helado de crema americana con almendras tostadas cubierto con crocante de maní y almendras.',
    imagen: '/images/postre_almendrado.jpg',
  },
  {
    nombre: 'Cubatones',
    descripcion:
      'Oblea rellena de helado de crema americana, chocolate o dulce de leche con crocante y bañado en chocolate.',
    imagen: '/images/postre_cubaton.jpg',
  },
]

export const PALITOS: Sabor[] = [
  {
    nombre: 'Palito Bañado',
    descripcion: 'Helado en palito de sabor americana, chocolate, dulce de leche, frutilla o menta.',
    imagen: '/images/palito_bombon.jpg',
  },
  {
    nombre: 'Palito de Agua',
    descripcion: 'Helado en palito de sabores ananá al agua, frutilla al agua o limón al agua.',
    imagen: '/images/palito_frutilla.jpg',
  },
  {
    nombre: 'Palito Kinder Bueno',
    descripcion: 'Helado sabor kinder bueno bañado en chocolate con leche.',
    imagen: '/images/palito_kinder.jpg',
  },
  {
    nombre: 'Palito Dubái',
    descripcion: 'Helado de chocolate con crema de pistacho crocante, bañado en chocolate cubierto con crocante de pistacho.',
    imagen: '/images/palito_pistacho.jpg',
  },
  {
    nombre: 'Patita',
    descripcion:
      'Helado de dulce de leche con corazón de dulce de leche natural bañado en chocolate con leche.',
    imagen: '/images/paleta_patita.jpg',
  },
  {
    nombre: 'Carita Cielo',
    descripcion: 'Helado de crema del cielo bañado en chocolate blanco.',
    imagen: '/images/paleta_carita.jpg',
  },
  {
    nombre: 'Carita Kinder',
    descripcion: 'Helado sabor a huevo kinder con trocitos de huevo kinder bañado en chocolate con leche.',
    imagen: '/images/paleta_carita_chocolate.jpg',
  },
]

export const INSTAGRAM_GRID = [
  { src: '/images/helado_cucurucho.jpg', alt: 'Helado Cucurucho' },
  { src: '/images/paleta_patita.jpg', alt: 'Patita' },
  { src: '/images/postre_cubaton.jpg', alt: 'Cubatones' },
  { src: '/images/palito_pistacho.jpg', alt: 'Palito Dubái' },
  { src: '/images/postre_almendrado.jpg', alt: 'Postre Almendrado' },
  { src: '/images/paleta_carita.jpg', alt: 'Carita Cielo' },
]
