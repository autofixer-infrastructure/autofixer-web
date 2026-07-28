import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '¿Por Qué Mi Aire Acondicionado de Auto No Enfría? Causas y Soluciones',
  description: 'Descubre por qué tu aire acondicionado automotriz no enfría. Guía técnica con las 7 causas más comunes, cómo diagnosticarlas y cuánto cuesta repararlas en Santiago.',
  keywords: 'aire acondicionado auto no enfría, diagnóstico AC automotriz, mengapa AC mobil tidak dingin, why car AC not cooling, Santiago Chile',
  openGraph: {
    title: '¿Por Qué Mi Aire Acondicionado de Auto No Enfría? | Autofixer',
    description: 'Guía técnica completa: 7 causas por las que tu A/C automotriz no enfría y cómo solucionarlo a domicilio en Santiago.',
    url: 'https://autofixer.cl/blog/por-que-mi-aire-acondicionado-de-auto-no-enfria',
    type: 'article',
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Diagnosticar y Arreglar un Aire Acondicionado de Auto que No Enfría",
  "description": "Guía paso a paso para identificar la causa de un sistema de aire acondicionado automotriz que no produce frío, desde la revisión básica hasta el diagnóstico profesional.",
  "totalTime": "PT45M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "CLP",
    "minValue": 15000,
    "maxValue": 250000
  },
  "tool": [
    { "@type": "HowToTool", "name": "Manómetro de presión para R134a o R1234yf" },
    { "@type": "HowToTool", "name": "Equipo de vacío (bomba de vacío)" },
    { "@type": "HowToTool", "name": "Lámpara UV para detección de fugas" },
    { "@type": "HowToTool", "name": "Scanner OBD2" }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Paso 1: Verificar el compresor",
      "text": "Enciende el motor y el A/C. Abre el capó y verifica si el embrague del compresor (un disco metálico al frente del compresor) se está enganchando y soltando. Si hace clic constantemente sin engancharse, el compresor no está funcionando.",
      "position": 1
    },
    {
      "@type": "HowToStep",
      "name": "Paso 2: Revisar el nivel de gas refrigerante",
      "text": "Con el motor encendido y A/C en máximo, conecta los manómetros al servicio del sistema. Presiones太低 (cerca de 0 psi al lado de baja) indican falta de gas. Presiones demasiado altas pueden indicar exceso de gas o problema en el condensador.",
      "position": 2
    },
    {
      "@type": "HowToStep",
      "name": "Paso 3: Inspeccionar visualmente las líneas y conexiones",
      "text": "Revisa las mangueras de refrigerante en busca de manchas aceitosas (indicio de fuga), grietas, abolladuras o conexiones flojas. Las fugas pequeñas pueden no ser visibles pero reducen gradualmente la capacidad de enfriamiento.",
      "position": 3
    },
    {
      "@type": "HowToStep",
      "name": "Paso 4: Verificar el condensador y el evaporador",
      "text": "El condensador (frente al radiador) debe estar limpio y sin obstrucciones. Si está tapado con insectos o tierra, el flujo de aire se bloquea y el sistema no puede rechazar calor. El evaporador dentro del tablero puede acumular suciedad y obstruirse.",
      "position": 4
    },
    {
      "@type": "HowToStep",
      "name": "Paso 5: Diagnóstico profesional con equipo especializado",
      "text": "Un técnico certificado utilizará equipo de vacío para extraer todo el refrigerante, pesarlo y detectar fugas exactas. Esta es la forma más precisa de determinar si el problema es fuga de gas, compresor fallado, válvula de expansión tapada o eléctrico.",
      "position": 5
    }
  ],
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
  "datePublished": "2026-06-01",
  "dateModified": "2026-07-28"
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
              <span className="text-brand-black font-medium">Aire Acondicionado No Enfría</span>
            </nav>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-black leading-tight mb-6">
              ¿Por Qué Mi Aire Acondicionado de Auto No Enfría?{' '}
              <span className="text-brand-blue">Causas y Soluciones</span>
            </h1>

            <div className="flex flex-wrap gap-3 mb-8">
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Tiempo de lectura: 8 min</span>
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Actualizado: Julio 2026</span>
              <span className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">Guía Técnica</span>
            </div>

            <p className="text-lg text-brand-gray leading-relaxed mb-8">
              Es una de las consultas más frecuentes en Santiago: enciendes el aire acondicionado de tu auto y el aire que sale es tibio o directamente caliente. Las causas varían desde una simple falta de gas hasta un compresor completamente fallado. En esta guía técnica te explicamos cada causa con datos concretos para que sepas qué esperar antes de llamar al técnico.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-black mb-8">
              Las 7 Causas Más Comunes por las que un A/C Automotriz No Enfría
            </h2>

            <div className="space-y-8">
              {[
                {
                  num: '1',
                  title: 'Falta de gas refrigerante (la causa #1)',
                  icon: '❄️',
                  desc: 'El refrigerante (R134a o R1234yf) es el fluido que absorbe y expulsa el calor. Cada año se pierde entre un 5% y 15% del gas de forma natural. Cuando la pérdida supera el 20%, la capacidad de enfriamiento cae drásticamente. En Santiago, la contaminación ambiental y el polvo aceleran este proceso.',
                  costo: 'Desde $35.000 (carga de gas R134a) / Desde $90.000 (R1234yf)',
                  tiempo: '45 minutos - 1 hora',
                  causa: 'Fuga de gas por desgaste de mangueras, juntas tóricas o conexiones. También puede deberse a una fuga en el compresor, evaporador, condensador o válvula de expansión.'
                },
                {
                  num: '2',
                  title: 'Fuga de gas visible o interna',
                  icon: '🔍',
                  desc: 'Las fugas se dividen en lentas (que tardan meses en notarse) y rápidas (que dejan el sistema vacío en días). Las fugas lentas son las más comunes y aparecen como manchas aceitosas cerca de las conexiones. Las fugas internas hacia el crankcase del motor son más graves.',
                  costo: 'Desde $45.000 (detección + sellado) hasta $180.000 (cambio de compresor si la fuga es ahí)',
                  tiempo: '1 - 3 horas según ubicación de la fuga',
                  causa: 'Juntas O-ring secas, mangueras agrietadas, soldaduras defectuosas en evaporador o condensador, sellos del compresor.'
                },
                {
                  num: '3',
                  title: 'Compresor de A/C fallado',
                  icon: '⚙️',
                  desc: 'El compresor es el corazón del sistema. Cuando falla, generalmente hace ruido metálico, no se engancha (el embrague no gira), o el sistema hace ruido de gorgoteo. Los compresores fallan por falta de lubricación, edad del componente o fallas eléctricas del embrague.',
                  costo: 'Desde $180.000 (compresor nuevo + instalación + gas + aceite)',
                  tiempo: '4 - 6 horas',
                  causa: 'Desgaste natural (generalmente después de 8-12 años), falta de aceite refrigerante, contaminacion interna del sistema, falla eléctrica del embrague electromagnético.'
                },
                {
                  num: '4',
                  title: 'Condensador tapado u obstruido',
                  icon: '🌡️',
                  desc: 'El condensador disipa el calor del refrigerante. Si está tapado con hojas, insectos, polvo o está doblado por impacto de piedras, el flujo de aire se reduce y el sistema no puede rechazar calor eficientemente. Esto hace que las presiones suban y el aire no enfríe.',
                  costo: 'Desde $15.000 (limpieza profesional) hasta $85.000 (cambio de condensador)',
                  tiempo: '30 minutos - 2 horas',
                  causa: 'Contaminación urbana, impactación de piedras, edad del componente, aletas dobladas manualmente.'
                },
                {
                  num: '5',
                  title: 'Válvula de expansión tapada',
                  icon: '🚰',
                  desc: 'La válvula de expansión controla el flujo de refrigerante hacia el evaporador. Si se obstruye con partículas o humedad, crea un bloqueo que impide el paso del gas. Esto genera presiones muy bajas en el lado de baja y ningún enfriamiento.',
                  costo: 'Desde $25.000 (reemplazo de válvula TXV)',
                  tiempo: '1 - 2 horas',
                  causa: 'Contaminación del sistema (humedad, residuos de soldadura, aceite degradado), pieza defectuosa de fábrica.'
                },
                {
                  num: '6',
                  title: 'Problema eléctrico o del panel de control',
                  icon: '⚡',
                  desc: 'El sistema de climatización depende de múltiples sensores (sensor de temperatura ambiental, sensor de evaporador, motor del blower, actuadores de mezcla) y un módulo de control. Una falla eléctrica puede hacer que el compresor nunca se enganche o que el blower no funcione.',
                  costo: 'Desde $15.000 (diagnóstico OBD2) hasta $120.000 (módulo de climatización)',
                  tiempo: '1 - 3 horas de diagnóstico',
                  causa: 'Fusibles quemados, conectores corroídos, sensores defectuosos, módulos de control fallados, cableado dañado por roedores.'
                },
                {
                  num: '7',
                  title: 'Evaporador sucio o obstruido',
                  icon: '🧹',
                  desc: 'El evaporador es un radiador pequeño dentro del tablero que produce el frío. Con el tiempo acumula polvo, hojas secas y humedad, lo que reduce drásticamente su capacidad de intercambio térmico. El aire puede salir limpio pero tibio.',
                  costo: 'Desde $25.000 (sanitización profunda) hasta $95.000 (cambio de evaporador)',
                  tiempo: '2 - 4 horas',
                  causa: 'Falta de mantenimiento preventivo, humedad acumulada que genera hongos y bacterias, polvo urbano fino.'
                }
              ].map((item) => (
                <div key={item.num} className="bg-brand-silver rounded-2xl p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">{item.icon}</div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-brand-black">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-brand-gray leading-relaxed mb-4">{item.desc}</p>
                  <p className="text-sm text-red-600 font-semibold mb-2">🔧 Causa: {item.causa}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full font-medium">💰 {item.costo}</span>
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">⏱️ {item.tiempo}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-blue-50 border border-blue-100 rounded-2xl">
              <h3 className="font-heading font-bold text-lg text-brand-black mb-3">
                ¿Cómo saber exactamente qué tiene tu auto?
              </h3>
              <p className="text-brand-gray leading-relaxed mb-4">
                No puedes saber con certeza cuál de estas 7 causas afecta tu vehículo sin el equipo adecuado. Por eso en <strong>Autofixer</strong> ofrecemos diagnóstico profesional con manómetros y equipo de vacío desde <strong>$15.000</strong>. Si contratas el servicio, el diagnóstico es <strong>GRATIS</strong>. Nos desplazamos a tu domicilio en Las Condes, Providencia, Ñuñoa, La Florida, Maipú, Santiago Centro, Puente Alto y toda la Región Metropolitana.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/56935075600?text=Hola%20Autofixer,%20mi%20aire%20acondicionado%20no%20enfría" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Solicitar Diagnóstico por WhatsApp
                </a>
                <a href="/servicios/diagnostico" className="btn-secondary">
                  Ver Servicio de Diagnóstico
                </a>
              </div>
            </div>

            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-black mt-12 mb-6">
              Preguntas Frecuentes sobre A/C que No Enfría
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: '¿Cuánto cuesta arreglar el aire acondicionado de un auto en Santiago?',
                  a: 'El costo depende de la causa: desde $35.000 por una carga de gas simple hasta $250.000+ por un cambio de compresor completo. El diagnóstico profesional parte de $15.000.'
                },
                {
                  q: '¿Puedo cargar gas yo mismo en mi auto?',
                  a: 'No es recomendable. Se necesita equipo profesional (manómetros, bomba de vacío), el gas correcto (R134a o R1234yf según tu vehículo), y conocer la cantidad exacta en gramos. Una carga incorrecta puede dañar el compresor.'
                },
                {
                  q: '¿Cada cuánto debo cargar gas del aire acondicionado?',
                  a: 'No hayintervalo fijo. En Santiago, recomendamos revisión anual del sistema de A/C antes del verano (octubre-noviembre). Si notas que enfria menos, es señal de fuga.'
                },
                {
                  q: '¿EI A/C de mi auto puede arreglarse a domicilio?',
                  a: 'Sí. En Autofixer ofrecemos servicio a domicilio en toda la Región Metropolitana con equipo profesional completo. El técnico llega con manómetros, bomba de vacío, gas refrigerante y herramientas de diagnóstico.'
                }
              ].map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-5">
                  <h4 className="font-semibold text-brand-black mb-2">{faq.q}</h4>
                  <p className="text-brand-gray text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
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
