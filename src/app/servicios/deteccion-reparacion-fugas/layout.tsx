import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Detección y Reparación de Fugas A/C Auto Santiago | Autofixer',
  description: 'Detección de fugas con tinte UV y detector electrónico. Reparación de fugas en mangueras, juntas, condensador y evaporador. Servicio a domicilio en Santiago con garantía.',
  alternates: { canonical: 'https://autofixer.cl/servicios/deteccion-reparacion-fugas' },
  openGraph: {
    url: 'https://autofixer.cl/servicios/deteccion-reparacion-fugas',
    title: 'Detección y Reparación de Fugas A/C Auto Santiago | Autofixer',
    description: 'Detección de fugas con tinte UV y detector electrónico. Reparación de fugas en mangueras, juntas, condensador y evaporador. Servicio a domicilio en Santiago con garantía.',
  
    images: [
      {
        url: 'https://autofixer.cl/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Deteccion y Reparacion de Fugas en A/C | Autofixer',
      },
    ],
},
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
