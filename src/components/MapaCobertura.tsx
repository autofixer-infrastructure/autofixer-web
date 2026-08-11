/**
 * MapaCobertura — server component con el iframe de Google Maps
 * Usado en /contacto. Server-rendered para SEO y rendimiento.
 */
export default function MapaCobertura() {
  return (
    <div className='bg-white rounded-2xl shadow-card overflow-hidden'>
      <div className='p-6 border-b border-gray-100'>
        <h2 className='text-2xl font-bold text-gray-900 mb-2'>Nuestra zona de cobertura</h2>
        <p className='text-gray-600'>
          Servicio 100% a domicilio en toda la Región Metropolitana de Santiago.
        </p>
      </div>
      <iframe
        title='Mapa de cobertura Autofixer Santiago'
        src='https://www.google.com/maps?q=Santiago,+Chile&output=embed'
        width='100%'
        height='420'
        style={{ border: 0 }}
        allowFullScreen
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </div>
  )
}
