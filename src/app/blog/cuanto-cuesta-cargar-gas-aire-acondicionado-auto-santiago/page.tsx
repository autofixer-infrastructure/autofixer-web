import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '¿Cuánto Cuesta Cargar Gas del Aire Acondicionado del Auto en Santiago? Precios 2026',
  description: 'Guía de precios actualizada 2026 para recarga de gas R134a y R1234yf en Santiago. Costos por tipo de vehículo, tipo de gas, y qué incluye el servicio a domicilio.',
  keywords: 'precio carga gas aire acondicionado auto Santiago, costo recarga gas R134a, cuanto cuesta cargar gas auto Chile, recarga gas automotriz precios 2026',
  openGraph: {
    title: 'Precios 2026: Carga de Gas A/C Automotriz en Santiago | Autofixer',
    description: 'Precios referenciales actualizados para recarga de gas R134a y R1234yf en Santiago. Incluye costos por tipo de vehículo y qué servicios incluyen.',
    url: 'https://autofixer.cl/blog/cuanto-cuesta-cargar-gas-aire-acondicionado-auto-santiago',
    type: 'article',
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Cuánto Cuesta Cargar Gas del Aire Acondicionado del Auto en Santiago — Precios 2026",
  "description": "Guía completa de precios para recarga de gas refrigerante R134a y R1234yf en Santiago de Chile. Incluye costos por tipo de vehículo y servicio a domicilio.",
  "author": {
    "@type": "Organization",
    "name": "Autofixer",
    "url": "https://autofixer.cl"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Autofixer SPA",
    "logo": {
      "@type": "ImageObject",
      "url": "https://autofixer.cl/icon.svg"
    }
  },
  "datePublished": "2026-06-15",
  "dateModified": "2026-07-28",
  "about": {
    "@type": "Service",
    "name": "Recarga de Gas Refrigerante A/C Automotriz",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Autofixer",
      "url": "https://autofixer.cl"
    },
    "areaServed": {
      "@type": "State",
      "name": "Región Metropolitana de Santiago"
    }
  }
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-brand-silver via-white to-brand-silver py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-sm text-brand-gray mb-6 flex items-center gap-2">
              <Link href="/">Inicio</Link>
              <span>/</span>
              <Link href="/blog">Blog</Link>
              <span>/</span>
              <span className="text-brand-black font-medium">Precios Carga de Gas</span>
            </nav>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-black leading-tight mb-6">
              ¿Cuánto Cuesta Cargar el Gas del{' '}
              <span className="text-brand-blue">Aire Acondicionado</span> del Auto en Santiago?
            </h1>

            <p className="text-sm text-brand-gray mb-4">Precios actualizados Julio 2026 — Región Metropolitana</p>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Tiempo de lectura: 6 min</span>
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Precios 2026</span>
              <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">Guía de Precios</span>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                {
                  gas: 'R134a',
                  desc: 'Gas estándar para vehículos anteriores a 2017. Toyota, Hyundai, Kia, Nissan, Ford, Volkswagen, Chevrolet.',
                  precio: 'Desde $35.000',
                  incluye: 'Diagnóstico de presión, carga de gas, verificación de sellos',
                  color: 'blue'
                },
                {
                  gas: 'R1234yf',
                  desc: 'Gas ecológico obligatorio en vehículos post-2017/2018. BMW, Mercedes-Benz, Toyota Hybrid, Ford newer models.',
                  precio: 'Desde $90.000',
                  incluye: 'Diagnóstico de presión, carga de gas profesional, verificación completa',
                  color: 'green'
                }
              ].map((item) => (
                <div key={item.gas} className={`bg-${item.color}-50 border border-${item.color}-100 rounded-2xl p-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-${item.color}-100 rounded-xl flex items-center justify-center text-2xl font-bold text-${item.color}-700`}>{item.gas}</div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-brand-black">{item.gas}</h3>
                      <p className="text-xs text-brand-gray">Gas refrigerante</p>
                    </div>
                  </div>
                  <p className="text-brand-gray text-sm mb-4">{item.desc}</p>
                  <div className="text-2xl font-bold text-brand-black mb-2">{item.precio}</div>
                  <p className="text-xs text-brand-gray mb-4">Incluye: {item.incluye}</p>
                </div>
              ))}
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-black mb-6">
              Precios por Tipo de Servicio
            </h2>

            <div className="overflow-x-auto mb-12">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-silver">
                    <th className="text-left p-4 font-bold text-brand-black rounded-tl-xl">Servicio</th>
                    <th className="text-center p-4 font-bold text-brand-black">Vehículo</th>
                    <th className="text-right p-4 font-bold text-brand-black rounded-tr-xl">Precio Referencial</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { svc: 'Carga de Gas R134a', veh: 'Sedán / Hatchback', precio: '$35.000 - $45.000' },
                    { svc: 'Carga de Gas R134a', veh: 'SUV / Camioneta', precio: '$45.000 - $55.000' },
                    { svc: 'Carga de Gas R1234yf', veh: 'Sedán / Hatchback', precio: '$90.000 - $110.000' },
                    { svc: 'Carga de Gas R1234yf', veh: 'SUV / Camioneta', precio: '$110.000 - $130.000' },
                    { svc: 'Detección de Fugas con Lámpara UV', veh: 'Cualquiera', precio: '$15.000 - $25.000' },
                    { svc: 'Diagnóstico Computarizado OBD2', veh: 'Cualquiera', precio: '$15.000' },
                    { svc: 'Sanitización Antibacterial', veh: 'Cualquiera', precio: '$25.000 - $45.000' },
                    { svc: 'Cambio de Condensador', veh: 'Sedán', precio: '$65.000 - $85.000' },
                    { svc: 'Cambio de Evaporador', veh: 'Sedán', precio: '$75.000 - $95.000' },
                    { svc: 'Cambio de Compresor (incluye aceite + filtro)', veh: 'Sedán', precio: '$160.000 - $220.000' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="p-4 font-medium text-brand-black">{row.svc}</td>
                      <td className="p-4 text-center text-brand-gray">{row.veh}</td>
                      <td className="p-4 text-right font-bold text-brand-blue">{row.precio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-black mb-6">
              ¿Qué Incluye una Carga de Gas Profesional?
            </h2>

            <div className="bg-brand-silver rounded-2xl p-6 mb-8">
              <ul className="space-y-3">
                {[
                  'Diagnóstico inicial de presiones con manómetros calibrados',
                  'Búsqueda de fugas visibles en líneas y conexiones',
                  'Extracción del gas residual (en sistemas que lo permitan)',
                  'Carga de gas nuevo con peso exacto según especificación del fabricante (gramos)',
                  'Aceite PAG (si aplica) para lubricación del compresor',
                  'Verificación de presiones de alta y baja después de la carga',
                  'Prueba de rendimiento del sistema de enfriamiento',
                  'Sellado de conexiones si se detecta fuga menor'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-gray">
                    <span className="text-brand-success mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-black mb-6">
              ¿Por Qué el R1234yf es Más Caro que el R134a?
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-brand-gray leading-relaxed">
                El gas <strong>R1234yf</strong> es un refrigerante de nueva generación con un potencial de calentamiento global (GWP) casi nulo, lo que lo hace ambientalmente superior al R134a. Sin embargo, es significativamente más costoso por kilogramo (hasta 10 veces más que el R134a) y requiere equipos de servicio específicos para vehículos híbridos y eléctricos.
              </p>
              <p className="text-brand-gray leading-relaxed">
                Además, el R1234yf es <strong>ligeramente inflamable</strong> (clasificación A2L), lo que exige precauciones especiales de manejo y certificaciones adicionales para los técnicos. Esto se traduce en un precio mayor para el consumidor final.
              </p>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-black mb-6">
              ¿Cómo Saber Qué Gas Usa tu Auto?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { metodo: 'Etiqueta bajo el capó', desc: 'Busca una etiqueta azul o negra cerca del área del condensador o compresor que indica el tipo de gas y la cantidad en gramos.', icon: '🏷️' },
                { metodo: 'Manual del propietario', desc: 'La sección de especificaciones técnicas del vehículo indica el refrigerante exacto y la carga requerida en gramos.', icon: '📖' },
                { metodo: 'Año del vehículo', desc: 'Autos anteriores a 2017 generalmente usan R134a. Vehículos 2018 en adelante (especialmente europeos, híbridos y eléctricos) usan R1234yf.', icon: '📅' },
                { metodo: 'Consultar con un técnico', desc: 'La forma más segura es que un técnico certified verifique el sistema con manómetros especializados.', icon: '🔧' }
              ].map((m) => (
                <div key={m.metodo} className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                  <div className="text-2xl">{m.icon}</div>
                  <div>
                    <h4 className="font-semibold text-brand-black mb-1">{m.metodo}</h4>
                    <p className="text-sm text-brand-gray">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-orange-50 border border-orange-100 rounded-2xl mb-8">
              <h3 className="font-heading font-bold text-lg text-brand-black mb-3">
                ⚠️ Evita las cargas de gas "exprés" sin diagnóstico
              </h3>
              <p className="text-brand-gray leading-relaxed">
                Muchos talleres ofrecen cargas de gas a muy bajo precio sin revisar el sistema previamente. Esto es arriesgado porque si hay una fuga, el gas se escapará nuevamente en días. En Autofixer siempre hacemos diagnóstico de presión y revisión básica antes de cargar gas. Si contratas el servicio de carga, <strong>el diagnóstico es GRATIS</strong>.
              </p>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-black mb-6">
              ¿A Domicilio o en Taller?
            </h2>

            <p className="text-brand-gray leading-relaxed mb-6">
              El servicio a domicilio tiene un costo adicional menor comparado con la inconvenience de mover tu auto al taller, esperar horas, y volver a buscarlo. En Autofixer, el surcharge por desplazamiento a domicilio en la Región Metropolitana es de <strong>$5.000 a $15.000</strong> dependiendo de la zona. Para comunas como Las Condes, Providencia, Ñuñoa y Vitacura, generalmente no hay surcharge adicional.
            </p>

            <div className="text-center mt-10">
              <a href="https://wa.me/56935075600?text=Hola%20Autofixer,%20quiero%20saber%20el%20precio%20para%20cargar%20gas%20de%20mi%20auto" target="_blank" rel="noopener noreferrer" className="btn-primary mr-4">
                Cotizar por WhatsApp
              </a>
              <Link href="/precios-referenciales" className="btn-secondary">
                Ver tabla de precios completa
              </Link>
            </div>

            <div className="mt-10 text-center">
              <Link href="/blog" className="btn-secondary">
                ← Ver más artículos del blog
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
