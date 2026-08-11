import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Wrench, Thermometer, Wind } from 'lucide-react'
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Casos Reales de Servicio',
  description: 'Casos documentados de reparación de aire acondicionado automotriz a domicilio en Santiago. Toyota, Nissan, Hyundai, Subaru y más. Diagnóstico transparente y garantía 90 días.',
  alternates: { canonical: 'https://autofixer.cl/casos-reales' },
}

const cases = [
  {
    image: '/images/caso-compresor.webp',
    title: 'Compresor Reemplazado — Toyota Corolla 2019',
    vehicle: 'Toyota Corolla 2019 · R134a',
    commune: 'Ñuñoa, Santiago',
    problem: 'El A/C no enfriaba y se escuchaba un ruido metálico al encender el sistema. El cliente ya había visitado un taller tradicional que le ofreció cambiar todo el sistema sin diagnosticar.',
    diagnosis: 'Compresor con embrague deteriorado y desgaste interno. Fuga menor en junta del compresor.',
    solution: 'Reemplazo del compresor por uno original Denso. Carga completa de gas R134a + aceite PAG. Test de presión y temperatura por 30 minutos.',
    duration: '3 horas en domicilio',
    result: 'A/C restaurado, temperatura de salida 4°C, garantía 90 días por escrito.',
  },
  {
    image: '/images/caso-carga-gas.webp',
    title: 'Carga de Gas — Nissan Qashqai 2021',
    vehicle: 'Nissan Qashqai 2021 · R1234yf',
    commune: 'Las Condes, Santiago',
    problem: 'El cliente notó que el A/C enfriaba cada vez menos, sobre todo en días de calor. Llevaba 6 meses con el problema y otro taller le había dicho que necesitaba un compresor nuevo ($450.000 CLP).',
    diagnosis: 'Fuga lenta en conexión de mangueras de alta presión. Compresor y resto del sistema en perfecto estado.',
    solution: 'Detección de fuga con gas trazador + prueba de UV. Recarga de gas R1234yf (gas de nueva generación). Ajuste de conexiones.',
    duration: '1.5 horas en domicilio',
    result: 'Fuga eliminada, A/C funcionando a temperatura óptima, ahorro de $400.000+ vs cambio de compresor innecesario.',
  },
  {
    image: '/images/servicio-sanitizacion.webp',
    title: 'Sanitización — Hyundai Tucson 2020',
    vehicle: 'Hyundai Tucson 2020 · R134a',
    commune: 'Providencia, Santiago',
    problem: 'Malos olores al encender el A/C, sobre todo los primeros minutos. La cliente tenía niños pequeños y quería una sanitización completa antes del invierno.',
    diagnosis: 'Acumulación de hongos y bacterias en el evaporador por condensación natural del sistema. Filtro de aire de habitáculo con más de 2 años sin cambio.',
    solution: 'Sanitización antibacterial con producto certificado (no daña componentes electrónicos). Cambio de filtro de habitáculo. Limpieza de ductos.',
    duration: '1 hora en domicilio',
    result: 'Olor eliminado completamente. Ambiente interior más saludable. Recomendación de repetir cada 12 meses.',
  },
]

export default function CasosRealesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-brand-blue to-brand-blueDark text-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Casos Reales de Nuestros Clientes
          </h1>
          <p className="text-blue-100 text-lg max-w-3xl">
            Documentamos cada servicio con diagnóstico, solución y resultado. Sin inventar, sin exagerar. Estos son trabajos reales hechos a domicilio en Santiago.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {cases.map((c, i) => (
            <article key={c.title} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto overflow-hidden bg-gray-100">
                  <Image src={c.image} alt={c.title} width={800} height={450} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 md:p-8">
                  <div className="text-xs text-brand-gray uppercase tracking-wider mb-2">
                    {c.commune} · {c.vehicle}
                  </div>
                  <h2 className="font-heading font-bold text-xl md:text-2xl text-brand-black mb-4">
                    {c.title}
                  </h2>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-semibold text-red-500 flex items-center gap-2">
                        <Thermometer size={14} /> Problema reportado
                      </div>
                      <p className="text-brand-gray mt-1">{c.problem}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-brand-blue flex items-center gap-2">
                        <Wrench size={14} /> Diagnóstico
                      </div>
                      <p className="text-brand-gray mt-1">{c.diagnosis}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-brand-blue flex items-center gap-2">
                        <Check size={14} /> Solución aplicada
                      </div>
                      <p className="text-brand-gray mt-1">{c.solution}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-brand-gray pt-2">
                      <Wind size={14} /> Duración: <span className="font-medium text-brand-black">{c.duration}</span>
                    </div>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-1.5 bg-brand-success-light text-brand-success text-xs font-semibold px-3 py-1.5 rounded-full">
                    <Check size={12} />
                    <span>{c.result}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-16 bg-brand-silver">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-brand-black mb-4">
            ¿Tu auto tiene alguno de estos problemas?
          </h2>
          <p className="text-brand-gray mb-6 max-w-2xl mx-auto">
            Te enviamos un técnico certificado a tu domicilio. Diagnóstico transparente, presupuesto cerrado, garantía de 90 días por escrito.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/cotizar" className="btn-primary inline-flex items-center gap-2">
              <span>Cotizar mi servicio</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/56935075600?text=Hola%20Autofixer%2C%20quiero%20agendar%20un%20diagn%C3%B3stico%20a%20domicilio"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#1DA851] transition-colors"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
