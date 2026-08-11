import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terminos y Condiciones',
  description: 'Terminos y condiciones del servicio de aire acondicionado automotriz a domicilio de Autofixer en Santiago, Chile.',
  alternates: { canonical: '/terminos-y-condiciones' },
}

export default function TermsPage() {
  return (
    <main className="pt-[72px]">
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-white">
            Terminos y Condiciones
          </h1>
          <p className="mt-3 text-blue-100 text-base">
            Ultima actualizacion: Julio 2026
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">

            <h2>1. Datos del Prestador</h2>
            <p>
              <strong>Razon Social:</strong> Autofixer SpA<br/>
              <strong>RUT:</strong> 77.XXX.XXX-X<br/>
              <strong>Direccion:</strong> Gran Santiago, Chile<br/>
              <strong>Telefono:</strong> +56 9 3507 5600<br/>
              <strong>Email:</strong> contacto@autofixer.cl
            </p>

            <h2>2. Descripcion del Servicio</h2>
            <p>
              Autofixer ofrece servicios especializados de diagnostico, mantencio,
              reparacion y carga de gas de aire acondicionado automotriz a domicilio,
              realizados por tecnicos certificados en las comunas de cobertura del Gran Santiago.
            </p>

            <h2>3. Cobertura y Disponibilidad</h2>
            <p>
              Servicio a domicilio en las comunas indicadas en la pagina de cobertura.
              Lunes a sabado de 8:00 a 19:00 horas. No se atiende dias festivos.
            </p>

            <h2>4. Agendamiento y Confirmacion</h2>
            <ul>
              <li>El agendamiento se confirma al recibir la aceptacion por WhatsApp o llamada.</li>
              <li>El tecnico llegara en el rango horario acordado con margen de espera de 15 minutos.</li>
              <li>El cliente debe garantizar acceso al vehiculo en el domicilio indicado.</li>
            </ul>

            <h2>5. Precios y Formas de Pago</h2>
            <ul>
              <li>Precios referenciales publicados en la pagina de precios.</li>
              <li>El precio final puede variar segun el diagnostico en terreno.</li>
              <li>Formas de pago: efectivo, transferencia bancaria o link de pago (Flow/WebPay).</li>
              <li>Pago al finalizar el servicio, salvo acuerdo diferente por escrito.</li>
            </ul>

            <h2>6. Garantia del Servicio</h2>
            <p>
              Garantia de <strong>90 dias</strong> por el trabajo realizado, siempre que
              el problema no sea causado por un nuevo siniestro, mal uso del vehiculo o
              intervencion de terceros. Cubre mano de obra y repuestos utilizados.
              No cubre danos preexistentes no detectados en el diagnostico inicial.
            </p>

            <h2>7. Cancelaciones y Reagendamiento</h2>
            <ul>
              <li>Cancelacion o reagendamiento con al menos 2 horas de anticipacion sin costo.</li>
              <li>Cancelaciones con menor anticipacion pueden implicar cargo por visita.</li>
              <li>Autofixer puede cancelar por fuerza mayor notificando al cliente.</li>
            </ul>

            <h2>8. Responsabilidad</h2>
            <p>
              Autofixer es responsable exclusivamente por los servicios contratados.
              No se hace responsable por danos indirectos, perdida de negocios o danos
              a otros componentes del vehiculo no relacionados con el sistema de AC.
            </p>

            <h2>9. Datos Personales</h2>
            <p>
              Tratados conforme a la Politica de Privacidad, en cumplimiento de la
              Ley 19.628 de Chile. Al contratar, el cliente acepta las condiciones alli descritas.
            </p>

            <h2>10. Legislacion Aplicable</h2>
            <p>
              Estos terminos se rigen por las leyes de la Republica de Chile.
              Controversias sometidas a los tribunales ordinarios de Santiago.
            </p>

            <h2>11. Contacto</h2>
            <ul>
              <li><strong>Email:</strong> contacto@autofixer.cl</li>
              <li><strong>Telefono:</strong> +56 9 3507 5600</li>
            </ul>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Términos y Condiciones — Autofixer",
            "description": "Términos y condiciones del servicio de aire acondicionado automotriz a domicilio de Autofixer en Santiago, Chile.",
            "url": "https://autofixer.cl/terminos-y-condiciones",
            "publisher": {
              "@type": "Organization",
              "name": "Autofixer SPA",
              "url": "https://autofixer.cl",
            },
            "inLanguage": "es-CL",
            "dateModified": "2026-07-28",
          }),
        }}
      />
    </main>
  )
}
