'use client'

import { Check, X, Phone, Calendar, TrendingDown, Building2, Truck, Clock } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { ServiceSchemaMarkup } from '@/components/ServiceSchema'

const prices = [
  { service: 'Diagnóstico Completo a Domicilio', desc: 'Revisión completa del sistema con equipos digitales', price: '$15.000 – $25.000', note: '¡Gratis si realizas el servicio!', time: '20-30 min' },
  { service: 'Carga de Gas R134a', desc: 'Recarga con refrigerante puro certificado', price: '$35.000 – $70.000', note: 'Según capacidad del sistema', time: '45-60 min' },
  { service: 'Carga de Gas R1234yf', desc: 'Recarga con refrigerante ecológico certificado', price: '$90.000 – $180.000', note: 'Para vehículos nuevos y híbridos', time: '45-60 min' },
  { service: 'Detección y Reparación de Fuga', desc: 'Localización electrónica + sellado profesional', price: '$45.000 – $150.000+', note: 'Según complejidad y ubicación', time: '1-2 hrs' },
  { service: 'Cambio de Compresor', desc: 'Diagnóstico + repuesto original + instalación', price: '$180.000 – $450.000+', note: 'Incluye garantía de repuesto', time: '2-3 hrs' },
  { service: 'Cambio de Condensador/Evaporador', desc: 'Repuesto + instalación + carga de gas', price: '$120.000 – $350.000+', note: 'Según modelo del vehículo', time: '2-3 hrs' },
  { service: 'Sanitización + Mantención', desc: 'Limpieza antibacterial + revisión completa', price: '$35.000 – $65.000', note: 'Recomendado cada 6 meses', time: '45-60 min' },
  { service: 'Reparación de Fuga Simple', desc: 'Sellado de conexiones o reemplazo de O-rings', price: '$35.000 – $60.000', note: 'Cuando la fuga es accesible', time: '45-90 min' },
]

const comparison = [
  { feature: 'Diagnóstico a domicilio', autofixer: true, taller: false },
  { feature: 'Sin mover el vehículo', autofixer: true, taller: false },
  { feature: 'Precio cerrado in situ', autofixer: true, taller: false },
  { feature: 'Garantía 90 días', autofixer: true, taller: 'Variable' },
  { feature: 'Atención en subterráneos', autofixer: true, taller: false },
  { feature: 'Especialista exclusivo en A/C', autofixer: true, taller: false },
  { feature: 'Tecnología de punta', autofixer: true, taller: 'Variable' },
  { feature: 'Sin costos fijos de local', autofixer: true, taller: false },
]

const savings = [
  { icon: Building2, title: 'Sin Arriendo', desc: 'No pagamos local comercial, eso se traduce en mejores precios para ti.' },
  { icon: Truck, title: 'Sin Traslado', desc: 'No necesitas llevar el auto a ningún taller. Vamos donde estés.' },
  { icon: Clock, title: 'Sin Perdida de Tiempo', desc: 'El técnico llega con todo lo necesario. Resolvemos en una sola visita.' },
]

export default function PreciosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Precios Referenciales de Servicio
            </h1>
            <p className="text-xl text-blue-100 mb-2">
              Trabajamos con precio cerrado in situ — sin sorpresas.
            </p>
            <p className="text-blue-200">
              Diagnóstico gratis si contratas el servicio. Todos los precios incluyen IVA.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Price Table */}
        <ScrollReveal>
          <div className="bg-white rounded-2xl shadow-card overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="text-left p-4 font-semibold text-gray-900">Servicio</th>
                    <th className="text-left p-4 font-semibold text-gray-900 hidden md:table-cell">Descripción</th>
                    <th className="text-center p-4 font-semibold text-gray-900">Precio Referencial</th>
                    <th className="text-center p-4 font-semibold text-gray-900 hidden sm:table-cell">Duración</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {prices.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4">
                        <div className="font-semibold text-gray-900">{item.service}</div>
                        {item.note && (
                          <div className="text-sm text-green-600 font-medium mt-1">{item.note}</div>
                        )}
                      </td>
                      <td className="p-4 text-gray-600 text-sm hidden md:table-cell">{item.desc}</td>
                      <td className="p-4 text-center">
                        <span className="font-bold text-blue-900 text-lg">{item.price}</span>
                      </td>
                      <td className="p-4 text-center text-gray-500 text-sm hidden sm:table-cell">{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border-t border-amber-100 p-4">
              <p className="text-sm text-amber-800 text-center">
                <strong>Nota:</strong> Los precios son referenciales y pueden variar según el modelo y estado del vehículo.
                Entregamos presupuesto cerrado antes de cualquier intervención.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Comparison */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              ¿Por qué es más conveniente con Autofixer?
            </h2>
            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <div className="grid grid-cols-3 border-b">
                <div className="p-4" />
                <div className="p-4 text-center bg-blue-900 text-white font-bold">Autofixer</div>
                <div className="p-4 text-center bg-gray-200 font-bold text-gray-700">Taller Tradicional</div>
              </div>
              {comparison.map((item, i) => (
                <div key={i} className="grid grid-cols-3 border-b last:border-0">
                  <div className="p-4 text-gray-700 font-medium text-sm">{item.feature}</div>
                  <div className="p-4 text-center bg-blue-50/50">
                    {item.autofixer ? (
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </div>
                  <div className="p-4 text-center bg-gray-50/50">
                    {item.taller === true ? (
                      <Check className="w-5 h-5 text-green-600 mx-auto" />
                    ) : item.taller === false ? (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    ) : (
                      <span className="text-gray-500 text-sm">{item.taller}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* How We Save */}
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Más ahorro para ti
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {savings.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-card text-center">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Quieres un presupuesto exacto?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Contáctanos por WhatsApp o teléfono y te entregamos un presupuesto cerrado
              sin compromiso. El diagnóstico es gratis si contratas el servicio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/56935075600?text=Hola%2C%20quiero%20un%20presupuesto%20para%20servicio%20de%20aire%20acondicionado"
                className="inline-flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                <Phone className="w-5 h-5" />
                Solicitar Presupuesto
              </a>
              <a
                href="/cotizar"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Cotizar Online
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
