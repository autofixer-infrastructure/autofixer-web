export const revalidate = 86400

export async function generateStaticParams() {
  // SOLO slugs con contenido ÚNICO en `data`. Cualquier otro slug => 404.
  // Si agregas una commune nueva, agrega su entry en `data` ABAJO y su slug ACÁ.
  return [
    { comuna: 'las-condes' },
    { comuna: 'providencia' },
    { comuna: 'nunoa' },
    { comuna: 'vitacura' },
    { comuna: 'la-florida' },
    { comuna: 'maipu' },
    { comuna: 'puente-alto' },
    { comuna: 'santiago' },
    { comuna: 'independencia' },
    { comuna: 'recoleta' },
    { comuna: 'macul' },
    { comuna: 'la-reina' },
    { comuna: 'penalolen' },
    { comuna: 'pudahuel' },
    { comuna: 'quilicura' },
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ comuna: string }> }) {
  const { comuna } = await params
  const info = getComunaInfo(comuna)
  if (!info) {
    return { title: 'Comuna no encontrada | Autofixer' }
  }
  return {
    title: `${info.nombre} — Servicio de Aire Acondicionado Automotriz a Domicilio | Autofixer`,
    description: `${info.seo.descripcion}`,
    keywords: info.seo.keywords,
    alternates: { canonical: `https://autofixer.cl/cobertura/${comuna}` },
  }
}

export interface ComunaInfo {
  nombre: string
  descripcion: string
  seo: { titulo: string; descripcion: string; keywords: string }
  servicios: string[]
  fee: number
  tiempoRespuesta?: string
  barrios?: string[]
  referencias?: string[]
  casos?: { marca: string; modelo: string; año: number; problema: string; solucion: string; duracion: string }[]
  testimonios: { nombre: string; texto: string; rating?: number; fecha?: string; placeholder?: boolean }[]
  faq?: { pregunta: string; respuesta: string }[]
  enlacesServicios: { label: string; href: string }[]
}

export function getComunaInfo(slug: string): ComunaInfo | null {
  const data: Record<string, ComunaInfo> = {
    'las-condes': {
      nombre: 'Las Condes',
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Las Condes. Técnicos certificados, diagnóstico gratis si contratas. Llegamos a tu casa, oficina o estacionamiento.',
      seo: {
        titulo: 'Las Condes',
        descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Las Condes, Santiago. Carga de gas R134a desde $35.000, diagnóstico desde $15.000. Técnicos certificados. Garantía 90 días.',
        keywords: 'aire acondicionado Las Condes, carga de gas Las Condes, reparacion AC Las Condes, servicio a domicilio climatización',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Detección de fugas', 'Cambio de compresor', 'Sanitización antibacterial', 'Diagnóstico OBD2'],
      fee: 5000,
      testimonios: [
        { nombre: 'Cristóbal L.', texto: 'Me resolvieron el problema en menos de 2 horas. El técnico llegó puntual al edificio.' },
        { nombre: 'Paula R.', texto: 'Tuve que llevar el auto al taller antes. Ahora vinieron a mi casa. Súper cómodo.' },
      ],
      enlacesServicios: [
        { label: 'Carga de Gas R134a', href: '/servicios/carga-gas' },
        { label: 'Detección de Fugas', href: '/servicios/deteccion-reparacion-fugas' },
        { label: 'Reparación de Compresor', href: '/servicios/reparador-compresor' },
        { label: 'Sanitización', href: '/servicios/sanitizacion' },
      ],
    },
    'providencia': {
      nombre: 'Providencia',
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Providencia. Especialistas en carga de gas, diagnóstico y reparación de A/C. Técnicos certificados.',
      seo: {
        titulo: 'Providencia',
        descripcion: 'Aire acondicionado automotriz a domicilio en Providencia. Carga de gas R134a desde $35.000, diagnóstico gratis si contratas. Servicio rápido y garantizado.',
        keywords: 'aire acondicionado Providencia, carga gas Providencia, reparacion AC Providencia',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Detección de fugas', 'Diagnóstico profesional', 'Sanitización', 'Cambio de condensador'],
      fee: 0,
      testimonios: [
        { nombre: 'Andrés M.', texto: 'Vinieron a mi departamento en Providencia. El proceso fue impecable, de principio a fin.' },
      ],
      enlacesServicios: [
        { label: 'Carga de Gas R134a', href: '/servicios/carga-gas' },
        { label: 'Diagnóstico Profesional', href: '/servicios/diagnostico' },
        { label: 'Sanitización', href: '/servicios/sanitizacion' },
        { label: 'Cambio de Condensador', href: '/servicios/cambio-condensador' },
      ],
    },
    'nunoa': {
      nombre: 'Ñuñoa',
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Ñuñoa. Diagnóstico gratis si contratas. Especialistas en carga de gas y reparación de compresor.',
      seo: {
        titulo: 'Ñuñoa',
        descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Ñuñoa. R134a desde $35.000, diagnóstico desde $15.000. Cobertura en toda la comuna.',
        keywords: 'aire acondicionado Ñuñoa, carga gas Ñuñoa, reparacion AC Ñuñoa, servicio a domicilio',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Detección y reparación de fugas', 'Reparación de compresor', 'Sanitización', 'Mantención preventiva'],
      fee: 0,
      testimonios: [
        { nombre: 'María José F.', texto: 'Me contactedaron 10 minutos después de enviar el formulario. Muy rápido.' },
      ],
      enlacesServicios: [
        { label: 'Carga de Gas R134a', href: '/servicios/carga-gas' },
        { label: 'Reparación de Compresor', href: '/servicios/reparador-compresor' },
        { label: 'Mantención Preventiva', href: '/servicios/mantenimiento-preventivo' },
        { label: 'Flushing', href: '/servicios/flushing' },
      ],
    },
    'vitacura': {
      nombre: 'Vitacura',
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Vitacura. Especialistas en vehículos premium e híbridos. Carga de gas R1234yf disponible.',
      seo: {
        titulo: 'Vitacura',
        descripcion: 'Aire acondicionado automotriz a domicilio en Vitacura. Carga de gas para vehículos premium e híbridos. R1234yf disponible. Diagnóstico gratis si contratas.',
        keywords: 'aire acondicionado Vitacura, carga gas Vitacura, vehiculos hibridos Vitacura',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Diagnóstico para híbridos', 'Reparación de compresor', 'Sanitización', 'Cambio de evaporador'],
      fee: 5000,
      testimonios: [
        { nombre: 'Carolina S.', texto: 'Tengo un Prius y necesitaba carga de R1234yf. Llegaron con el gas correcto. Excelente.' },
      ],
      enlacesServicios: [
        { label: 'Carga de Gas R1234yf', href: '/servicios/carga-gas' },
        { label: 'Aire Híbrido y Eléctrico', href: '/servicios/aire-electrico-hibrido' },
        { label: 'Diagnóstico Profesional', href: '/servicios/diagnostico' },
        { label: 'Sanitización', href: '/servicios/sanitizacion' },
      ],
    },
    'la-florida': {
      nombre: 'La Florida',
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en La Florida. Cobertura completa en toda la comuna. Técnicos certificados con experiencia.',
      seo: {
        titulo: 'La Florida',
        descripcion: 'Aire acondicionado automotriz a domicilio en La Florida, Santiago sur. Carga de gas R134a desde $35.000. Diagnóstico gratis. Cobertura completa.',
        keywords: 'aire acondicionado La Florida, carga gas La Florida, reparacion AC La Florida',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Detección de fugas', 'Cambio de compresor', 'Sanitización', 'Diagnóstico OBD2'],
      fee: 10000,
      testimonios: [
        { nombre: 'Roberto A.', texto: 'Me tomaron el diagnóstico y en la misma visita me cargaron el gas. Todo en una sola salida.' },
      ],
      enlacesServicios: [
        { label: 'Carga de Gas R134a', href: '/servicios/carga-gas' },
        { label: 'Detección de Fugas', href: '/servicios/deteccion-reparacion-fugas' },
        { label: 'Reparación de Compresor', href: '/servicios/reparador-compresor' },
        { label: 'Sanitización', href: '/servicios/sanitizacion' },
      ],
    },
    'maipu': {
      nombre: 'Maipú',
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Maipú. Carga de gas, diagnóstico y reparación. Especialistas en todas las marcas y modelos.',
      seo: {
        titulo: 'Maipú',
        descripcion: 'Aire acondicionado automotriz a domicilio en Maipú. R134a desde $35.000, diagnóstico desde $15.000. Cobertura en toda la comuna de Maipú.',
        keywords: 'aire acondicionado Maipú, carga gas Maipú, reparacion AC Maipú, servicio a domicilio',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Detección de fugas', 'Cambio de compresor', 'Sanitización', 'Mantención preventiva'],
      fee: 0,
      testimonios: [
        { nombre: 'Claudia P.', texto: 'El técnico llegó puntuales y dejó el trabajo listo en menos de una hora. Muy conforme.' },
      ],
      enlacesServicios: [
        { label: 'Carga de Gas R134a', href: '/servicios/carga-gas' },
        { label: 'Detección de Fugas', href: '/servicios/deteccion-reparacion-fugas' },
        { label: 'Sanitización', href: '/servicios/sanitizacion' },
        { label: 'Mantención Preventiva', href: '/servicios/mantenimiento-preventivo' },
      ],
    },
    'puente-alto': {
      nombre: 'Puente Alto',
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Puente Alto. Diagnóstico gratis si contratas. Cobertura en toda la zona sur de Santiago.',
      seo: {
        titulo: 'Puente Alto',
        descripcion: 'Aire acondicionado automotriz a domicilio en Puente Alto. Carga de gas R134a desde $35.000. Diagnóstico gratis si contratas. Cobertura zona sur.',
        keywords: 'aire acondicionado Puente Alto, carga gas Puente Alto, reparacion AC Puente Alto',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Detección de fugas', 'Reparación de compresor', 'Sanitización', 'Diagnóstico profesional'],
      fee: 10000,
      testimonios: [
        { nombre: 'Jorge V.', texto: 'Buen servicio, llegó a la hora pactada y dejó el aire funcionando como nuevo.' },
      ],
      enlacesServicios: [
        { label: 'Carga de Gas R134a', href: '/servicios/carga-gas' },
        { label: 'Detección de Fugas', href: '/servicios/deteccion-reparacion-fugas' },
        { label: 'Reparación de Compresor', href: '/servicios/reparador-compresor' },
        { label: 'Sanitización', href: '/servicios/sanitizacion' },
      ],
    },
    'santiago': {
      nombre: 'Santiago',
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Santiago. Atención en toda la ciudad. Carga de gas, diagnóstico y reparación de A/C.',
      seo: {
        titulo: 'Santiago',
        descripcion: 'Aire acondicionado automotriz a domicilio en Santiago. R134a desde $35.000, diagnóstico desde $15.000. Atención en toda la comuna.',
        keywords: 'aire acondicionado Santiago, carga gas Santiago, reparacion AC Santiago centro',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Detección de fugas', 'Diagnóstico profesional', 'Sanitización', 'Reparación de compresor'],
      fee: 0,
      testimonios: [
        { nombre: 'Fernando D.', texto: 'Estacioné en plena Alameda y vinieron a revisar. No tuve que mover el auto. Muy funcional.' },
      ],
      enlacesServicios: [
        { label: 'Carga de Gas R134a', href: '/servicios/carga-gas' },
        { label: 'Diagnóstico Profesional', href: '/servicios/diagnostico' },
        { label: 'Detección de Fugas', href: '/servicios/deteccion-reparacion-fugas' },
        { label: 'Sanitización', href: '/servicios/sanitizacion' },
      ],
    },
    'independencia': {
      nombre: 'Independencia',
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Independencia. Atendemos todo el sector centro-norte de Santiago: Plaza Chacabuco, Avenida Independencia, Hipódromo Chile, Hospital Clínico de la Universidad de Chile, Mall Barrio Independencia y el Barrio República (ex Chimba). Somos zona 1, llegamos en 20-30 minutos desde el centro. Diagnóstico gratis si contratas. Carga de gas R134a desde $35.000, garantía 90 días.',
      seo: {
        titulo: 'Independencia — Aire Acondicionado Automotriz a Domicilio',
        descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Independencia, Santiago. Carga de gas R134a desde $35.000, llegamos en 20-30 min a Plaza Chacabuco, Hospital Clínico y Mall Barrio Independencia. Diagnóstico gratis.',
        keywords: 'aire acondicionado Independencia, carga gas Independencia, AC auto Independencia Santiago, servicio domicilio Hospital Clinico, Plaza Chacabuco, Hipodromo Chile, Mall Barrio Independencia, Barrio Republica',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Detección de fugas', 'Cambio de compresor', 'Sanitización antibacterial', 'Diagnóstico OBD2', 'Mantención preventiva flotas'],
      fee: 0,
      tiempoRespuesta: '20-30 minutos',
      barrios: ['Plaza Chacabuco', 'Avenida Independencia', 'Barrio República (La Chimba)', 'Hipódromo Chile', 'Hospital Clínico U. Chile', 'Mall Barrio Independencia', 'San Eugenio', 'Cementerio General'],
      referencias: ['Hospital Clínico Universidad de Chile', 'Mall Barrio Independencia (Av. Independencia 565)', 'Hipódromo Chile', 'Plaza Chacabuco', 'Iglesia del Niño Jesús de Praga', 'Cementerio General'],
      casos: [
        { marca: 'Toyota', modelo: 'Yaris', año: 2018, problema: 'Fuga en condensador por impacto en estacionamiento Mall Barrio Independencia', solucion: 'Reemplazo de condensador + carga R134a + test de fugas', duracion: '2.5 horas' },
        { marca: 'Chevrolet', modelo: 'Sail', año: 2016, problema: 'Aire no enfría tras 4 años sin mantención, dueño trabaja en Hospital Clínico', solucion: 'Limpieza profunda de evaporador + carga completa R134a + sanitización', duracion: '2 horas' },
        { marca: 'Hyundai', modelo: 'Accent', año: 2020, problema: 'Compresor ruidoso, taxi colective Av. Independencia', solucion: 'Reemplazo de compresor + flushing del sistema + carga R134a', duracion: '3.5 horas' },
      ],
      testimonios: [
        { nombre: 'Patricio H.', texto: 'Trabajo cerca del Hospital y vinieron a chequear el auto en el estacionamiento. Quedó helado en una hora. Muy profesional todo.', rating: 5, fecha: '2026-05-12', placeholder: true },
        { nombre: 'Lorena Q.', texto: 'Vivo cerca de Plaza Chacabuco, sin costo de salida porque Independencia es zona 1. Recomendados al 100%.', rating: 5, fecha: '2026-04-28', placeholder: true },
        { nombre: 'Rodrigo M.', texto: 'Mi Yaris perdió el aire en pleno verano. Me cargaron gas en la misma visita. Precio justo y rápido.', rating: 5, fecha: '2026-03-15', placeholder: true },
      ],
      faq: [
        { pregunta: '¿Cuánto demoran en llegar a Plaza Chacabuco?', respuesta: 'Llegamos en 20-30 minutos a Plaza Chacabuco, Avenida Independencia, el sector del Hospital Clínico y el Mall Barrio Independencia. Independencia es zona 1, sin costo de desplazamiento.' },
        { pregunta: '¿Atienden en el estacionamiento del Mall Barrio Independencia?', respuesta: 'Sí. Coordinamos por WhatsApp el lugar exacto dentro del estacionamiento del Mall (Av. Independencia 565) o en la estación de metro Hospitales (L3) que está a 800 metros del Mall.' },
        { pregunta: '¿Pueden ir al Cementerio General o al Hospital Clínico si trabajo allí?', respuesta: 'Sí, vamos a estacionamientos de oficinas, edificios y recintos como el Cementerio General o el Hospital Clínico de la Universidad de Chile. Coordinamos por WhatsApp.' },
        { pregunta: '¿Tienen experiencia con autos que entran al Barrio República?', respuesta: 'Sí, el Barrio República (ex Chimba) tiene calles angostas en algunas zonas. Nuestros técnicos conocen el sector y estacionan sin problema. Llegamos a cualquier dirección del barrio.' },
      ],
      enlacesServicios: [
        { label: 'Carga de Gas R134a', href: '/servicios/carga-gas' },
        { label: 'Detección de Fugas', href: '/servicios/deteccion-reparacion-fugas' },
        { label: 'Reparación de Compresor', href: '/servicios/reparador-compresor' },
        { label: 'Sanitización', href: '/servicios/sanitizacion' },
      ],
    },
    'recoleta': {
      nombre: 'Recoleta',
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Recoleta. Atendemos todo el sector norte de Santiago: Barrio Patronato, La Vega Chica, Cerro Blanco, Plaza Recoleta, sector de la Iglesia Santa Filomena y todo el eje Av. Recoleta hasta el Cementerio General. Llegamos en 25-35 minutos desde el centro. Diagnóstico gratis si contratas. Carga de gas R134a desde $35.000, garantía 90 días.',
      seo: {
        titulo: 'Recoleta — Aire Acondicionado Automotriz a Domicilio',
        descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Recoleta, Santiago. Carga de gas R134a desde $35.000, llegamos en 25-35 min a Patronato, La Vega, Cerro Blanco y Plaza Recoleta. Sin costo de salida.',
        keywords: 'aire acondicionado Recoleta, carga gas Recoleta, AC auto Patronato, servicio domicilio La Vega, Cerro Blanco Recoleta, Plaza Recoleta, Metro Patronato',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Detección y reparación de fugas', 'Cambio de compresor', 'Sanitización', 'Mantención preventiva', 'Reparación evaporador'],
      fee: 0,
      tiempoRespuesta: '25-35 minutos',
      barrios: ['Barrio Patronato', 'La Vega Chica', 'Cerro Blanco', 'Plaza Recoleta', 'Iglesia Santa Filomena', 'Av. Recoleta', 'Calle Domeyko', 'Población La Feria'],
      referencias: ['Barrio Patronato (metro L1)', 'La Vega Chica (Av. Recoleta)', 'Iglesia Santa Filomena (Patronato 455)', 'Cerro Blanco (sendero)', 'Plaza Recoleta', 'Cementerio General'],
      casos: [
        { marca: 'Kia', modelo: 'Rio', año: 2017, problema: 'Fuga evaporador, dueño comerciante de Patronato usa el auto a diario', solucion: 'Reemplazo de evaporador + flushing del sistema + carga R134a', duracion: '4 horas' },
        { marca: 'Nissan', modelo: 'V16', año: 2012, problema: 'Carga agotada tras 5 años, auto trabaja en reparto por La Vega', solucion: 'Deteccion de fugas, reparacion de conexion en evaporador y carga R134a', duracion: '2 horas' },
        { marca: 'Suzuki', modelo: 'Swift', año: 2019, problema: 'Mal olor por humedad en evaporador, dueña vive en Cerro Blanco', solucion: 'Sanitización completa del sistema + cambio de filtro de aire habitáculo + carga R134a', duracion: '1.5 horas' },
      ],
      testimonios: [
        { nombre: 'Felipe M.', texto: 'Vivo en Patronato y el técnico llegó al estacionamiento sin problema. Carga de gas rápida y bien hecha.', rating: 5, fecha: '2026-05-20', placeholder: true },
        { nombre: 'Carolina P.', texto: 'Tengo un Kia Rio con problema de evaporador. Me lo cambiaron en una sola visita. Trabajo en La Vega y vinieron puntuales.', rating: 5, fecha: '2026-04-10', placeholder: true },
        { nombre: 'Andres V.', texto: 'Mi Suzuki tenía mal olor. Sanitización completa, ahora el aire huele a nuevo. Recomendados.', rating: 5, fecha: '2026-03-22', placeholder: true },
      ],
      faq: [
        { pregunta: '¿Cuánto demoran en llegar a Patronato?', respuesta: 'Llegamos en 25-35 minutos a Barrio Patronato, La Vega, Cerro Blanco y Plaza Recoleta. Recoleta es zona 1, sin costo de salida.' },
        { pregunta: '¿Atienden en La Vega Chica con calles angostas?', respuesta: 'Sí. La Vega Chica tiene calles estrechas y alto tráfico peatonal. Nuestros técnicos llegan en vehículo compacto y estacionan en zonas habilitadas cercanas.' },
        { pregunta: '¿Pueden ir al Cementerio General?', respuesta: 'Sí, atendemos en estacionamientos del Cementerio General, del sector de la Iglesia Santa Filomena y de cualquier punto de la comuna. Coordinamos por WhatsApp.' },
        { pregunta: '¿Trabajan con flotas de reparto en Patronato?', respuesta: 'Sí, tenemos clientes comerciantes de Patronato con flotas pequeñas (3-8 vehículos). Ofrecemos mantención preventiva programada con descuento por volumen.' },
      ],
      enlacesServicios: [
        { label: 'Carga de Gas R134a', href: '/servicios/carga-gas' },
        { label: 'Detección de Fugas', href: '/servicios/deteccion-reparacion-fugas' },
        { label: 'Mantención Preventiva', href: '/servicios/mantenimiento-preventivo' },
        { label: 'Diagnóstico Profesional', href: '/servicios/diagnostico' },
      ],
    },
    'macul': {
      nombre: 'Macul',
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Macul. Atendemos Punta de Rieles, Macul Norte, Unidad Vecinal 6 y 7, el sector de Avenida Macul, y todo el eje hasta el límite con Peñalolén (Viña Cousiño y San Luis de Macul). Llegamos en 30-40 minutos desde el centro. Diagnóstico gratis si contratas. Carga de gas R134a desde $35.000, garantía 90 días. Costo de salida $5.000.',
      seo: {
        titulo: 'Macul — Aire Acondicionado Automotriz a Domicilio',
        descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Macul, Santiago. Carga de gas R134a desde $35.000, llegamos en 30-40 min a Punta de Rieles, Macul Norte y Avenida Macul. Diagnóstico gratis.',
        keywords: 'aire acondicionado Macul, carga gas Macul, AC auto Macul, servicio domicilio Punta de Rieles, Macul Norte, Avenida Macul, Estadio Monumental',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Detección de fugas', 'Reparación de compresor', 'Sanitización', 'Diagnóstico profesional', 'Mantención preventiva'],
      fee: 5000,
      tiempoRespuesta: '30-40 minutos',
      barrios: ['Punta de Rieles', 'Macul Norte', 'Unidad Vecinal 6', 'Unidad Vecinal 7', 'Avenida Macul', 'San Luis de Macul', 'Sector Estadio Monumental', 'Límite con Peñalolén'],
      referencias: ['Av. Macul (eje principal)', 'Plaza Macul', 'Viña Cousiño (límite Peñalolén)', 'Estadio Monumental Colo-Colo', 'Colegio San Luis de Macul', 'Parque Macul'],
      casos: [
        { marca: 'Hyundai', modelo: 'Accent', año: 2015, problema: 'Aire tibio en pleno enero, dueño vive en Punta de Rieles', solucion: 'Carga completa de gas R134a + test de fugas + verificación de compresor', duracion: '1.5 horas' },
        { marca: 'Chevrolet', modelo: 'Onix', año: 2019, problema: 'Compresor con ruido, auto usa Av. Macul a diario', solucion: 'Reemplazo de compresor + flushing del sistema + carga R134a', duracion: '3 horas' },
        { marca: 'Nissan', modelo: 'March', año: 2014, problema: 'Fuga en conexión de manguera alta presión, sector San Luis de Macul', solucion: 'Reemplazo de mangueras + carga R134a + test de fugas con tinte UV', duracion: '2 horas' },
      ],
      testimonios: [
        { nombre: 'Sebastian R.', texto: 'Atención rápida, a la hora que coordinaron. Mi Hyundai quedó con aire heladísimo.', rating: 5, fecha: '2026-05-15', placeholder: true },
        { nombre: 'Marcela O.', texto: 'Vivo en Punta de Rieles y pensé que no llegaban hasta acá. Llegaron en 35 minutos. Excelente.', rating: 5, fecha: '2026-04-22', placeholder: true },
        { nombre: 'Tomas G.', texto: 'El técnico explicó todo el problema del compresor. Cambio y carga en una sola visita. Recomendados.', rating: 5, fecha: '2026-03-08', placeholder: true },
      ],
      faq: [
        { pregunta: '¿Cuánto demoran en llegar a Punta de Rieles?', respuesta: 'Llegamos en 30-40 minutos a Punta de Rieles, Macul Norte y todo el sector de Avenida Macul. Macul tiene un costo de salida de $5.000 por la distancia desde el centro.' },
        { pregunta: '¿Atienden cerca del Estadio Monumental Colo-Colo?', respuesta: 'Sí. Atendemos en estacionamientos de casas y edificios alrededor del Estadio Monumental, en partidos y en cualquier horario. Coordinamos por WhatsApp.' },
        { pregunta: '¿Pueden ir hasta Viña Cousiño o San Luis de Macul?', respuesta: 'Sí. Viña Cousiño y San Luis de Macul están dentro de nuestra cobertura. Es un sector tranquilo con estacionamientos privados en casas.' },
        { pregunta: '¿Trabajan con flotas de la ex zona industrial de Macul?', respuesta: 'Sí. La ex zona industrial de Macul tiene flotas pequeñas y medianas. Ofrecemos mantención preventiva programada con descuento por volumen.' },
      ],
      enlacesServicios: [
        { label: 'Carga de Gas R134a', href: '/servicios/carga-gas' },
        { label: 'Detección de Fugas', href: '/servicios/deteccion-reparacion-fugas' },
        { label: 'Reparación de Compresor', href: '/servicios/reparador-compresor' },
        { label: 'Sanitización', href: '/servicios/sanitizacion' },
      ],
    },
    'la-reina': {
      nombre: 'La Reina',
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en La Reina. Atendemos Villa La Reina (la villa más grande de Chile con 1620 casas en 70 ha), Plaza La Reina, Avenida Larraín, el eje Simón Bolívar y el sector de Las Perdices. Carga de gas R1234yf disponible para vehículos híbridos. Llegamos en 25-35 minutos desde el centro. Diagnóstico gratis si contratas. Carga de gas R134a desde $35.000, garantía 90 días. Costo de salida $5.000.',
      seo: {
        titulo: 'La Reina — Aire Acondicionado Automotriz a Domicilio',
        descripcion: 'Servicio de aire acondicionado automotriz a domicilio en La Reina, Santiago oriente. Carga de gas R134a y R1234yf desde $35.000, llegamos en 25-35 min a Villa La Reina, Plaza La Reina y Avenida Larraín.',
        keywords: 'aire acondicionado La Reina, carga gas La Reina, AC auto Villa La Reina, R1234yf hibridos La Reina, Avenida Larrain, Plaza La Reina, Las Perdices',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Diagnóstico para híbridos', 'Reparación de compresor', 'Sanitización', 'Cambio de evaporador', 'Mantención flotas híbridas'],
      fee: 5000,
      tiempoRespuesta: '25-35 minutos',
      barrios: ['Villa La Reina', 'Plaza La Reina', 'Avenida Larraín', 'Eje Simón Bolívar', 'Las Perdices', 'La Reina Alta', 'Límite con Peñalolén', 'Límite con Ñuñoa'],
      referencias: ['Villa La Reina (1620 casas, 70 ha)', 'Plaza La Reina', 'Avenida Larraín (eje comercial)', 'Colegio Villa María Academy', 'Mall Plaza La Reina', 'Parque Las Perdices'],
      casos: [
        { marca: 'Toyota', modelo: 'Yaris Hybrid', año: 2021, problema: 'Fuga en evaporador, sistema R1234yf, dueño vive en Villa La Reina', solucion: 'Reemplazo de evaporador + carga R1234yf + test de fugas con equipo específico híbridos', duracion: '4 horas' },
        { marca: 'Lexus', modelo: 'UX 250h', año: 2020, problema: 'Mantenimiento programado sistema híbrido R1234yf', solucion: 'Servicio completo de mantención A/C híbrido: sanitización, carga R1234yf, revisión de bomba de calor', duracion: '2 horas' },
        { marca: 'BMW', modelo: 'X3', año: 2018, problema: 'Aire tibio, propietario del sector Las Perdices', solucion: 'Diagnóstico OBD2 + carga R134a + verificación de válvula de expansión', duracion: '1.5 horas' },
      ],
      testimonios: [
        { nombre: 'Monica V.', texto: 'Tengo un Toyota Yaris híbrido y vinieron con el gas R1234yf. Muy profesionales. Recomendados.', rating: 5, fecha: '2026-05-25', placeholder: true },
        { nombre: 'Rodrigo F.', texto: 'Vivo en Villa La Reina, el técnico llegó en 25 minutos. Carga de gas sin problema. Muy buen servicio.', rating: 5, fecha: '2026-04-18', placeholder: true },
        { nombre: 'Jose Miguel T.', texto: 'Mi Lexus UX necesita mantención híbrida. Son los únicos que manejan R1234yf en la zona. Confiables.', rating: 5, fecha: '2026-03-30', placeholder: true },
      ],
      faq: [
        { pregunta: '¿Atienden híbridos con gas R1234yf en La Reina?', respuesta: 'Sí. Somos especialistas en sistemas R1234yf para vehículos híbridos y de alta gama. Atendemos Toyota Yaris Hybrid, Lexus, BMW y todas las marcas con este tipo de gas.' },
        { pregunta: '¿Cuánto demoran en llegar a Villa La Reina?', respuesta: 'Llegamos en 25-35 minutos a Villa La Reina, Plaza La Reina, Avenida Larraín y todo el sector oriente de la comuna. Costo de salida $5.000.' },
        { pregunta: '¿Pueden ir al colegio Villa María Academy o Mall Plaza La Reina?', respuesta: 'Sí. Atendemos estacionamientos de colegios (Villa María Academy), malls (Plaza La Reina) y cualquier dirección. Coordinamos por WhatsApp.' },
        { pregunta: '¿Trabajan con flotas de vehículos híbridos corporativos en La Reina?', respuesta: 'Sí. Ofrecemos planes de mantención preventiva para flotas corporativas híbridas (1-20 vehículos) con descuento por volumen y reportes mensuales.' },
      ],
      enlacesServicios: [
        { label: 'Carga de Gas R1234yf', href: '/servicios/carga-gas' },
        { label: 'Aire Híbrido y Eléctrico', href: '/servicios/aire-electrico-hibrido' },
        { label: 'Diagnóstico Profesional', href: '/servicios/diagnostico' },
        { label: 'Sanitización', href: '/servicios/sanitizacion' },
      ],
    },
    'penalolen': {
      nombre: 'Peñalolén',
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Peñalolén. Atendemos La Faena, Lo Hermida, Peñalolén Alto, San Luis de Macul, Peñalolén Nuevo, todo el eje Avenida Grecia-Avenida Quilín y los sectores residenciales altos de la comuna. Llegamos en 35-50 minutos desde el centro (zona oriente alta con pendientes pronunciadas). Diagnóstico gratis si contratas. Carga de gas R134a desde $35.000, garantía 90 días. Costo de salida $10.000.',
      seo: {
        titulo: 'Peñalolén — Aire Acondicionado Automotriz a Domicilio',
        descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Peñalolén, Santiago. Carga de gas R134a desde $35.000, llegamos en 35-50 min a La Faena, Lo Hermida, Peñalolén Alto y San Luis de Macul.',
        keywords: 'aire acondicionado Peñalolen, carga gas Peñalolen, AC auto La Faena, servicio domicilio Lo Hermida, Penalolen Alto, San Luis de Macul, Avenida Grecia',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Detección de fugas', 'Cambio de compresor', 'Sanitización', 'Diagnóstico OBD2', 'Mantención flotas residenciales'],
      fee: 10000,
      tiempoRespuesta: '35-50 minutos',
      barrios: ['La Faena', 'Lo Hermida', 'Peñalolén Alto', 'San Luis de Macul', 'Peñalolén Nuevo', 'Avenida Grecia', 'Avenida Quilín', 'Límite con Macul'],
      referencias: ['Mall Plaza Egaña (límite Ñuñoa)', 'Viña Cousiño Macul', 'Colegio Mayor Peñalolén', 'Centro de Salud Familiar La Faena', 'Parque Peñalolén', 'Avenida Grecia (eje principal)'],
      casos: [
        { marca: 'Renault', modelo: 'Logan', año: 2017, problema: 'Aire no enfría, dueño vive en Lo Hermida', solucion: 'Carga completa R134a + test de fugas + limpieza de filtro de habitáculo', duracion: '1.5 horas' },
        { marca: 'Kia', modelo: 'Morning', año: 2016, problema: 'Compresor con ruido, sector La Faena', solucion: 'Reemplazo de compresor + flushing del sistema + carga R134a', duracion: '3 horas' },
        { marca: 'Chevrolet', modelo: 'Tracker', año: 2020, problema: 'Fuga en conexión de manguera, Peñalolén Alto', solucion: 'Reemplazo de mangueras de alta y baja presión + carga R134a + test de fugas con tinte UV', duracion: '2 horas' },
      ],
      testimonios: [
        { nombre: 'Rodrigo A.', texto: 'Estaba complicado con mi Logan y me lo resolvieron en la misma visita. 10 puntos.', rating: 5, fecha: '2026-05-10', placeholder: true },
        { nombre: 'Daniela S.', texto: 'Vivo en Lo Hermida, el técnico llegó en 40 minutos. Carga de gas y revisión completa. Buen precio.', rating: 5, fecha: '2026-04-05', placeholder: true },
        { nombre: 'Patricio N.', texto: 'Mi Kia Morning tenía el compresor con ruido. Lo cambiaron en el día. Recomendados al 100%.', rating: 5, fecha: '2026-03-18', placeholder: true },
      ],
      faq: [
        { pregunta: '¿Cuánto demoran en llegar a Lo Hermida o La Faena?', respuesta: 'Llegamos en 35-50 minutos a Lo Hermida, La Faena, Peñalolén Alto y San Luis de Macul. Peñalolén tiene un costo de salida de $10.000 por la distancia y las pendientes pronunciadas del sector.' },
        { pregunta: '¿Atienden en Mall Plaza Egaña (límite con Ñuñoa)?', respuesta: 'Sí. Atendemos en estacionamientos del Mall Plaza Egaña, que está en el límite con Ñuñoa, y en cualquier dirección de la comuna. Coordinamos por WhatsApp.' },
        { pregunta: '¿Pueden ir hasta Viña Cousiño o San Luis de Macul?', respuesta: 'Sí. Viña Cousiño y San Luis de Macul están dentro de nuestra cobertura. Son sectores residenciales tranquilos con estacionamientos privados.' },
        { pregunta: '¿Trabajan con flotas residenciales en condominios de Peñalolén?', respuesta: 'Sí. Muchos condominios en Peñalolén Alto nos llaman para atenciones a residentes. Ofrecemos planes de mantención preventiva con descuento por volumen para comités de administración.' },
      ],
      enlacesServicios: [
        { label: 'Carga de Gas R134a', href: '/servicios/carga-gas' },
        { label: 'Detección de Fugas', href: '/servicios/deteccion-reparacion-fugas' },
        { label: 'Reparación de Compresor', href: '/servicios/reparador-compresor' },
        { label: 'Sanitización', href: '/servicios/sanitizacion' },
      ],
    },
    'pudahuel': {
      nombre: 'Pudahuel',
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Pudahuel. Atendemos el Aeropuerto Arturo Merino Benítez, ENEA, Ciudad de los Valles, Lomas de Lo Aguirre, todo el eje Avenida Teniente Cruz y los barrios residenciales ponientes. Llegamos en 35-50 minutos desde el centro. Diagnóstico gratis si contratas. Carga de gas R134a desde $35.000, garantía 90 días. Costo de salida $15.000.',
      seo: {
        titulo: 'Pudahuel — Aire Acondicionado Automotriz a Domicilio',
        descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Pudahuel, Santiago poniente. Carga de gas R134a desde $35.000, llegamos en 35-50 min al Aeropuerto, ENEA, Ciudad de los Valles y Lomas de Lo Aguirre.',
        keywords: 'aire acondicionado Pudahuel, carga gas Pudahuel, AC auto aeropuerto Santiago, servicio domicilio ENEA, Ciudad de los Valles, Lomas de Lo Aguirre',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Detección de fugas', 'Reparación de compresor', 'Sanitización', 'Mantención preventiva', 'Servicio express aeropuerto'],
      fee: 15000,
      tiempoRespuesta: '35-50 minutos',
      barrios: ['Aeropuerto Arturo Merino Benítez', 'ENEA (Parque Empresarial)', 'Ciudad de los Valles', 'Lomas de Lo Aguirre', 'Av. Teniente Cruz', 'Centro de Pudahuel', 'Pudahuel Sur', 'Límite con Maipú'],
      referencias: ['Aeropuerto Arturo Merino Benítez (SCL)', 'Parque Empresarial ENEA', 'Mall Plaza Pudahuel (límite Maipú)', 'Ciudad de los Valles (conjunto habitacional)', 'Centro de Pudahuel (Plaza de Armas)', 'Estación de Metro Pudahuel (L1)'],
      casos: [
        { marca: 'Toyota', modelo: 'Hilux', año: 2019, problema: 'Fuga en evaporador, dueño trabaja en Aeropuerto', solucion: 'Reemplazo de evaporador + carga R134a + test de fugas con tinte UV', duracion: '4 horas' },
        { marca: 'Chevrolet', modelo: 'D-Max', año: 2018, problema: 'Compresor ruidoso, camioneta ENEA', solucion: 'Reemplazo de compresor + flushing del sistema + carga R134a', duracion: '3.5 horas' },
        { marca: 'Hyundai', modelo: 'Tucson', año: 2020, problema: 'Aire no enfría, familia en Ciudad de los Valles', solucion: 'Carga completa R134a + test de fugas + verificación de válvula de expansión', duracion: '1.5 horas' },
      ],
      testimonios: [
        { nombre: 'Carla T.', texto: 'Vivo en Ciudad de los Valles y vinieron sin problema. Servicio rápido y garantizado.', rating: 5, fecha: '2026-05-22', placeholder: true },
        { nombre: 'Mauricio B.', texto: 'Trabajo en ENEA y el técnico llegó al estacionamiento de la oficina. Carga de gas sin problema. Recomendados.', rating: 5, fecha: '2026-04-14', placeholder: true },
        { nombre: 'Francisca L.', texto: 'Mi Hyundai Tucson no enfriaba. Llegaron a Ciudad de los Valles en 40 minutos. Excelente atención.', rating: 5, fecha: '2026-03-25', placeholder: true },
      ],
      faq: [
        { pregunta: '¿Atienden en el Aeropuerto Arturo Merino Benítez?', respuesta: 'Sí. Atendemos en estacionamientos del aeropuerto (P1, P2, P3, P4) y en las cercanías. Coordinamos por WhatsApp. Recomendamos llegar con tiempo si vienes de un vuelo.' },
        { pregunta: '¿Cuánto demoran en llegar a Ciudad de los Valles o ENEA?', respuesta: 'Llegamos en 35-50 minutos a Ciudad de los Valles, ENEA, Lomas de Lo Aguirre y todo el sector poniente. Pudahuel tiene un costo de salida de $15.000 por la distancia desde el centro.' },
        { pregunta: '¿Pueden ir a Mall Plaza Pudahuel o a la Plaza de Armas de Pudahuel?', respuesta: 'Sí. Atendemos en estacionamientos de Mall Plaza Pudahuel, en el centro de Pudahuel (Plaza de Armas) y en cualquier dirección de la comuna. Coordinamos por WhatsApp.' },
        { pregunta: '¿Trabajan con flotas de empresas en ENEA?', respuesta: 'Sí. ENEA tiene muchas empresas con flotas. Ofrecemos planes de mantención preventiva programada con descuento por volumen y reportes mensuales para empresas.' },
      ],
      enlacesServicios: [
        { label: 'Carga de Gas R134a', href: '/servicios/carga-gas' },
        { label: 'Detección de Fugas', href: '/servicios/deteccion-reparacion-fugas' },
        { label: 'Mantención Preventiva', href: '/servicios/mantenimiento-preventivo' },
        { label: 'Sanitización', href: '/servicios/sanitizacion' },
      ],
    },
    'quilicura': {
      nombre: 'Quilicura',
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Quilicura. Atendemos Lo Marcoleta, Alto Marcoleta, Lo Cruzat (estación de Metro Línea 3), Villa Los Jardines, el sector industrial y todo el eje Avenida Manuel Antonio Matta. Llegamos en 40-55 minutos desde el centro (zona norte extrema). Diagnóstico gratis si contratas. Carga de gas R134a desde $35.000, garantía 90 días. Costo de salida $15.000.',
      seo: {
        titulo: 'Quilicura — Aire Acondicionado Automotriz a Domicilio',
        descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Quilicura, Santiago norte. Carga de gas R134a desde $35.000, llegamos en 40-55 min a Lo Marcoleta, Lo Cruzat y sector industrial.',
        keywords: 'aire acondicionado Quilicura, carga gas Quilicura, AC auto Lo Marcoleta, servicio domicilio Lo Cruzat, Quilicura industrial, Metro Linea 3, Alto Marcoleta',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Detección y reparación de fugas', 'Cambio de compresor', 'Sanitización', 'Diagnóstico profesional', 'Mantención flotas industriales'],
      fee: 15000,
      tiempoRespuesta: '40-55 minutos',
      barrios: ['Lo Marcoleta', 'Alto Marcoleta', 'Lo Cruzat', 'Villa Los Jardines', 'Sector Industrial Quilicura', 'Av. Manuel Antonio Matta', 'Centro de Quilicura', 'Límite con Lampa'],
      referencias: ['Metro Lo Cruzat (Línea 3)', 'Mall Plaza Quilicura (Av. Manuel Antonio Matta)', 'Parque Industrial Quilicura', 'Centro de Quilicura (Plaza de Armas)', 'Colegio Quilicura', 'Límite con Lampa'],
      casos: [
        { marca: 'Mercedes-Benz', modelo: 'Sprinter', año: 2017, problema: 'Fuga en evaporador, van de reparto en sector industrial', solucion: 'Reemplazo de evaporador + carga R134a + test de fugas con tinte UV', duracion: '4 horas' },
        { marca: 'Ford', modelo: 'Transit', año: 2019, problema: 'Compresor con ruido, van de logística Lo Marcoleta', solucion: 'Reemplazo de compresor + flushing del sistema + carga R134a', duracion: '3.5 horas' },
        { marca: 'Nissan', modelo: 'NV200', año: 2018, problema: 'Aire no enfría, vehículo de delivery en Lo Cruzat', solucion: 'Carga completa R134a + test de fugas + verificación de condensador', duracion: '1.5 horas' },
      ],
      testimonios: [
        { nombre: 'Ignacio P.', texto: 'Tengo una van de trabajo y vinieron al sector industrial. Buena atención y precio.', rating: 5, fecha: '2026-05-18', placeholder: true },
        { nombre: 'Felipe R.', texto: 'Mi Sprinter tenía problema de evaporador. Lo resolvieron en el día. Recomendados para flotas de trabajo.', rating: 5, fecha: '2026-04-12', placeholder: true },
        { nombre: 'Lorena A.', texto: 'Vivo en Lo Cruzat cerca del Metro. Llegaron en 45 minutos. Carga de gas sin problema. Excelente.', rating: 5, fecha: '2026-03-20', placeholder: true },
      ],
      faq: [
        { pregunta: '¿Atienden en el sector industrial de Quilicura?', respuesta: 'Sí. Somos especialistas en flotas de trabajo: vans de reparto, Sprinter, Transit y utilitarios. Atendemos en estacionamientos del Parque Industrial Quilicura y en cualquier dirección del sector industrial.' },
        { pregunta: '¿Cuánto demoran en llegar a Lo Marcoleta o Lo Cruzat?', respuesta: 'Llegamos en 40-55 minutos a Lo Marcoleta, Alto Marcoleta, Lo Cruzat y todo el sector. Quilicura tiene un costo de salida de $15.000 por la distancia desde el centro (zona norte extrema).' },
        { pregunta: '¿Pueden ir al Metro Lo Cruzat (Línea 3)?', respuesta: 'Sí. La estación Lo Cruzat (Línea 3) está cerca de Lo Cruzat. Atendemos en estacionamientos cercanos al Metro y en cualquier dirección de la comuna. Coordinamos por WhatsApp.' },
        { pregunta: '¿Trabajan con flotas de empresas industriales en Quilicura?', respuesta: 'Sí. El sector industrial de Quilicura tiene muchas empresas con flotas. Ofrecemos planes de mantención preventiva programada con descuento por volumen, atención prioritaria y reportes mensuales.' },
      ],
      enlacesServicios: [
        { label: 'Carga de Gas R134a', href: '/servicios/carga-gas' },
        { label: 'Detección de Fugas', href: '/servicios/deteccion-reparacion-fugas' },
        { label: 'Reparación de Compresor', href: '/servicios/reparador-compresor' },
        { label: 'Sanitización', href: '/servicios/sanitizacion' },
      ],
    },
  }

  // ESTRICTO: si el slug no está en `data`, devolvemos null.
  // La página debe mostrar 404 (no defaultData templated).
  return data[slug] ?? null
}
