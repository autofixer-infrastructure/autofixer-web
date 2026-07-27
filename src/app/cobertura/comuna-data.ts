export const revalidate = 86400

export async function generateStaticParams() {
  return [
    { comuna: 'las-condes' },
    { comuna: 'providencia' },
    { comuna: 'nunoa' },
    { comuna: 'vitacura' },
    { comuna: 'la-florida' },
    { comuna: 'maipu' },
    { comuna: 'puente-alto' },
    { comuna: 'santiago' },
    { comuna: 'san-bernardo' },
    { comuna: 'penalolen' },
    { comuna: 'la-reina' },
    { comuna: 'macul' },
    { comuna: 'pudahuel' },
    { comuna: 'quilicura' },
    { comuna: 'colina' },
    { comuna: 'cerrillos' },
    { comuna: 'estacion-central' },
    { comuna: 'lo-barnechea' },
    { comuna: 'huechuraba' },
    { comuna: 'peñaflor' },
    { comuna: 'talagante' },
    { comuna: 'melipilla' },
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ comuna: string }> }) {
  const { comuna } = await params
  const info = getComunaInfo(comuna)
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
  testimonios: { nombre: string; texto: string }[]
  enlacesServicios: { label: string; href: string }[]
}

export function getComunaInfo(slug: string): ComunaInfo {
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
        { label: 'Reparación de Compresor', href: '/servicios/reparacion-compresor' },
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
        { label: 'Reparación de Compresor', href: '/servicios/reparacion-compresor' },
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
        { label: 'Reparación de Compresor', href: '/servicios/reparacion-compresor' },
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
        { label: 'Reparación de Compresor', href: '/servicios/reparacion-compresor' },
        { label: 'Sanitización', href: '/servicios/sanitizacion' },
      ],
    },
    'santiago': {
      nombre: 'Santiago Centro',
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Santiago Centro. Atención en toda la ciudad. Carga de gas, diagnóstico y reparación.',
      seo: {
        titulo: 'Santiago Centro',
        descripcion: 'Aire acondicionado automotriz a domicilio en Santiago Centro. R134a desde $35.000, diagnóstico desde $15.000. Atención en toda la comuna.',
        keywords: 'aire acondicionado Santiago Centro, carga gas Santiago, reparacion AC centro',
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
  }

  // Default for other comunas
  const defaultData: ComunaInfo = {
    nombre: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    descripcion: 'Servicio de aire acondicionado automotriz a domicilio en tu comuna. Técnicos certificados. Diagnóstico gratis si contratas.',
    seo: {
      titulo: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      descripcion: `Servicio de aire acondicionado automotriz a domicilio. Carga de gas R134a desde $35.000, diagnóstico desde $15.000. Cobertura en toda la zona.`,
      keywords: `aire acondicionado ${slug.replace(/-/g, ' ')}, carga gas`,
    },
    servicios: ['Carga de gas R134a y R1234yf', 'Detección de fugas', 'Diagnóstico profesional', 'Sanitización', 'Reparación de compresor'],
    fee: 10000,
    testimonios: [],
    enlacesServicios: [
      { label: 'Carga de Gas R134a', href: '/servicios/carga-gas' },
      { label: 'Detección de Fugas', href: '/servicios/deteccion-reparacion-fugas' },
      { label: 'Reparación de Compresor', href: '/servicios/reparacion-compresor' },
      { label: 'Sanitización', href: '/servicios/sanitizacion' },
    ],
  }

  return data[slug] || { ...defaultData, nombre: defaultData.nombre }
}
