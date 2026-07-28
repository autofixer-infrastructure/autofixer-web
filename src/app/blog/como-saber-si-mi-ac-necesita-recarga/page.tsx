import Link from 'next/link';

export const metadata = {
  title: 'Cómo saber si tu aire acondicionado automotriz necesita recarga | Autofixer',
  description: 'Guía paso a paso para identificar si el sistema de aire acondicionado de tu vehículo necesita mantención o recarga de gas refrigerante R134a o R1234yf.',
};

export default function BlogPost() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Cómo saber si tu aire acondicionado automotriz necesita recarga",
            "description": "Guía paso a paso para identificar si el sistema de aire acondicionado de tu vehículo necesita mantención o recarga de gas refrigerante.",
            "totalTime": "PT10M",
            "estimatedCost": { "@type": "MonetaryAmount", "currency": "CLP", "value": "0" },
            "supply": [
              { "@type": "HowToSupply", "name": "Termómetro digital" }
            ],
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Revisa la temperatura del aire",
                "text": "Enciende el aire acondicionado al máximo y espera 5 minutos. Si el aire no está frío (menos de 10°C), puede indicar falta de gas refrigerante R134a o R1234yf.",
                "url": "https://autofixer.cl/blog/como-saber-si-mi-ac-necesita-recarga#paso1"
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Escucha ruidos inusuales",
                "text": "Un sonido de clic constante o chirriante al encender el AC puede indicar problemas en el compresor o falta de lubricación en el sistema.",
                "url": "https://autofixer.cl/blog/como-saber-si-mi-ac-necesita-recarga#paso2"
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Detecta olores extraños",
                "text": "Olor a humedad, moho o tierra húmeda indica posible crecimiento de bacterias en el evaporador. Requiere sanitización profesional.",
                "url": "https://autofixer.cl/blog/como-saber-si-mi-ac-necesita-recarga#paso3"
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Revisa fugas visuales",
                "text": "Manchas de aceite o líquido verde/azul bajo el vehículo pueden ser refrigerante derramado. Esto requiere detección profesional con detector UV.",
                "url": "https://autofixer.cl/blog/como-saber-si-mi-ac-necesita-recarga#paso4"
              }
            ]
          })
        }}
      />

      <h1 className="text-3xl font-bold mb-6">Cómo saber si tu aire acondicionado automotriz necesita recarga</h1>

      <p className="text-gray-600 mb-8 leading-relaxed">
        El sistema de aire acondicionado de tu vehículo pierde eficiencia con el tiempo.
        Identificar los síntomas a tiempo puede evitar reparaciones costosas y mantener
        tu confort al volante. En Autofixer, especialistas en climatización automotriz
        a domicilio en Santiago, te explicamos las 4 señales más comunes.
      </p>

      <div className="space-y-8">
        <section id="paso1">
          <h2 className="text-xl font-semibold mb-3">1. Revisa la temperatura del aire</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Enciende el aire acondicionado al máximo y espera 5 minutos. Coloca un termómetro
            digital en una de las rejillas de ventilación. Si la temperatura no baja de 10°C,
            es probable que el sistema necesite recarga de gas refrigerante. Los vehículos
            modernos usan gas <strong>R1234yf</strong>, mientras que los modelos anteriores
            usan <strong>R134a</strong>. En Autofixer recargamos ambos tipos con refrigerante
            puro certificado y medición precisa por gramo.
          </p>
        </section>

        <section id="paso2">
          <h2 className="text-xl font-semibold mb-3">2. Escucha ruidos inusuales</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Un sonido de clic constante o chirriante al encender el AC puede indicar problemas
            en el compresor o falta de lubricación en el sistema. Estos ruidos suelen empeorar
            con el tiempo y pueden dañar componentes costosos si no se atienden pronto. Nuestros
            técnicos realizan un diagnóstico completo del compresor para determinar si necesita
            reparación o reemplazo.
          </p>
        </section>

        <section id="paso3">
          <h2 className="text-xl font-semibold mb-3">3. Detecta olores extraños</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Olor a humedad, moho o tierra húmeda al encender el aire acondicionado indica
            posible crecimiento de bacterias y hongos en el evaporador. Esto no solo es desagradable,
            sino que puede afectar tu salud respiratoria. En Autofixer ofrecemos
            <Link href="/servicios/sanitizacion-malos-olores" className="text-blue-600 hover:underline"> sanitización profesional contra malos olores</Link>
            con productos certificados que eliminan bacterias, hongos y olores del sistema de ventilación.
          </p>
        </section>

        <section id="paso4">
          <h2 className="text-xl font-semibold mb-3">4. Revisa fugas visuales</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Manchas de aceite o líquido verde/azul bajo el vehículo, especialmente cerca del
            compresor o condensador, pueden ser refrigerante derramado. Esto requiere
            <Link href="/servicios/deteccion-reparacion-fugas" className="text-blue-600 hover:underline"> detección profesional con detector UV</Link>
            para localizar el punto exacto de la fuga y sellarla con garantía de hermeticidad.
          </p>
        </section>
      </div>

      <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100">
        <h3 className="text-lg font-bold text-blue-900 mb-2">¿Detectaste alguna de estas señales?</h3>
        <p className="text-blue-800 mb-4">
          Agenda tu diagnóstico completo con nuestros especialistas. Llegamos a tu domicilio
          en cualquier comuna de Santiago.
        </p>
        <Link
          href="/cotizar"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Agendar diagnóstico gratuito →
        </Link>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-500">
          <strong>Tiempo de lectura:</strong> 3 minutos | <strong>Servicios relacionados:</strong>{' '}
          <Link href="/servicios/carga-gas-r134a-r1234yf" className="text-blue-600 hover:underline">Carga de gas</Link>,{' '}
          <Link href="/servicios/deteccion-reparacion-fugas" className="text-blue-600 hover:underline">Detección de fugas</Link>,{' '}
          <Link href="/servicios/mantencion-preventiva" className="text-blue-600 hover:underline">Mantención preventiva</Link>
        </p>
      </div>
    </article>
  );
}
