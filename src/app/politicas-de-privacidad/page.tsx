import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Autofixer. Informacion sobre como protegemos y usamos tus datos personales en cumplimiento con la Ley 19.628 de Chile.',
  alternates: { canonical: '/politicas-de-privacidad' },
}

export default function PrivacyPage() {
  return (
    <main className="pt-[72px]">
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-12 md:py-16">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-white">
            Política de Privacidad
          </h1>
          <p className="mt-3 text-blue-100 text-base">
            Ultima actualizacion: Julio 2026
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">

            <h2>1. Responsable del Tratamiento</h2>
            <p>
              <strong>Autofixer SpA</strong>, RUT: 77.XXX.XXX-X, con domicilio en
              Gran Santiago, Chile, es el responsable del tratamiento de los datos
              personales recopilados a traves de este sitio web.
            </p>

            <h2>2. Datos Personales Recopilados</h2>
            <p>Autofixer recopila los siguientes datos personales:</p>
            <ul>
              <li><strong>Nombre completo</strong> — para identificarte y emitir documentos tributarios.</li>
              <li><strong>Correo electronico</strong> — para confirmaciones y seguimiento del servicio.</li>
              <li><strong>Numero de telefono</strong> — para contactarte y coordinar la atencion a domicilio.</li>
              <li><strong>Patente del vehiculo</strong> — para identificar el automobile al cual se prestara el servicio.</li>
              <li><strong>Comuna y direccion</strong> — exclusivamente para la prestacion del servicio a domicilio.</li>
            </ul>

            <h2>3. Finalidad del Tratamiento</h2>
            <ul>
              <li>Gestionar solicitudes de cotizacion y agendamiento.</li>
              <li>Coordinar la visita tecnica a domicilio.</li>
              <li>Enviar confirmaciones y seguimiento del servicio.</li>
              <li>Emitir boletas o facturas.</li>
              <li>Resolver consultas, solicitudes o reclamos.</li>
            </ul>

            <h2>4. Base Legal</h2>
            <p>
              El tratamiento se realiza en virtud de tu <strong>consentimiento informado y voluntario</strong>,
              aceptado al completar el formulario y hacer clic en el checkbox de autorizacion.
            </p>

            <h2>5. Destinatarios</h2>
            <p>
              Autofixer no vende ni transfiere tus datos a terceros, excepto cuando sea
              necesario para la prestacion del servicio o por obligacion legal.
            </p>

            <h2>6. Plazo de Conservacion</h2>
            <p>
              Datos conservados durante <strong>5 anos</strong> desde la ultima interaccion,
              o el tiempo necesario para cumplir la finalidad de recopilacion.
            </p>

            <h2>7. Tus Derechos (Ley 19.628)</h2>
            <ul>
              <li><strong>Acceso:</strong> Conocer tus datos almacenados.</li>
              <li><strong>Rectificacion:</strong> Corregir datos inexactos.</li>
              <li><strong>Cancelacion:</strong> Solicitar eliminacion de tus datos.</li>
              <li><strong>Oposicion:</strong> Oponerte al tratamiento.</li>
            </ul>
            <p>
              Para ejercer tus derechos, escribe a <a href="mailto:contacto@autofixer.cl" className="text-blue-600 underline">contacto@autofixer.cl</a>.
            </p>

            <h2>8. Medidas de Seguridad</h2>
            <p>
              Autofixer utiliza conexion SSL/TLS encriptada, acceso restringido a bases
              de datos y protocolos internos de seguridad.
            </p>

            <h2>9. Cookies</h2>
            <p>
              Al visitar por primera vez se muestra un banner informativo. Puedes aceptar
              o rechazar cookies en cualquier momento. Mas detalles en nuestra politica de cookies.
            </p>

            <h2>10. Contacto</h2>
            <ul>
              <li><strong>Email:</strong> contacto@autofixer.cl</li>
              <li><strong>Telefono:</strong> +56 9 3507 5600</li>
              <li><strong>WhatsApp:</strong> +56 9 3507 5600</li>
            </ul>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PrivacyPolicy",
            "name": "Política de Privacidad — Autofixer",
            "description": "Política de privacidad de Autofixer en cumplimiento con la Ley 19.628 de Chile.",
            "url": "https://autofixer.cl/politicas-de-privacidad",
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
