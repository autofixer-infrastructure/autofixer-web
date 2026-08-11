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
  testimonios: { nombre: string; texto: string }[]
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
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Independencia. Atención en todo el sector norte de Santiago, incluyendo el Hospital Clínico y el商圈 chino. Diagnóstico gratis si contratas.',
      seo: {
        titulo: 'Independencia',
        descripcion: 'Aire acondicionado automotriz a domicilio en Independencia. Carga de gas R134a desde $35.000, sin costo de desplazamiento. Diagnóstico gratis si contratas. Técnicos certificados con garantía de 90 días.',
        keywords: 'aire acondicionado Independencia, carga gas Independencia, reparacion AC Independencia, servicio a domicilio Santiago norte',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Detección de fugas', 'Cambio de compresor', 'Sanitización antibacterial', 'Diagnóstico OBD2'],
      fee: 0,
      testimonios: [
        { nombre: 'Patricio H.', texto: 'Estaba en el trabajo cerca del Hospital y vinieron a chequear el auto. Quedó helado en una hora.' },
        { nombre: 'Lorena Q.', texto: 'Buen precio, sin costo de salida porque Independencia es zona 1. Recomendados.' },
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
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Recoleta. Cubrimos toda la comuna, desde la Plaza Patronato hasta el Cerro Blanco. Técnicos certificados con equipos profesionales.',
      seo: {
        titulo: 'Recoleta',
        descripcion: 'Aire acondicionado automotriz a domicilio en Recoleta, Santiago. Carga de gas R134a desde $35.000, sin costo de desplazamiento. Diagnóstico gratis. Cobertura completa.',
        keywords: 'aire acondicionado Recoleta, carga gas Recoleta, reparacion AC Recoleta, servicio a domicilio',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Detección y reparación de fugas', 'Cambio de compresor', 'Sanitización', 'Mantención preventiva'],
      fee: 0,
      testimonios: [
        { nombre: 'Felipe M.', texto: 'Vivo en Patronato y el técnico llegó sin problema. Carga de gas rápida y bien hecha.' },
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
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Macul. Cobertura completa en la comuna, desde Avenida Macul hasta el Estadio Monumental. Diagnóstico gratis si contratas.',
      seo: {
        titulo: 'Macul',
        descripcion: 'Aire acondicionado automotriz a domicilio en Macul, Santiago. Carga de gas R134a desde $35.000. Técnico certificado, garantía 90 días. Atendemos en toda la comuna.',
        keywords: 'aire acondicionado Macul, carga gas Macul, reparacion AC Macul, servicio a domicilio Santiago oriente',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Detección de fugas', 'Reparación de compresor', 'Sanitización', 'Diagnóstico profesional'],
      fee: 5000,
      testimonios: [
        { nombre: 'Sebastián R.', texto: 'Atención rápida, a la hora que coordinaron. Mi Hyundai quedó con aire heladísimo.' },
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
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en La Reina. Atención en todo el sector oriente, incluyendo Plaza La Reina y la Avenida Larraín. Carga de gas R1234yf disponible para vehículos híbridos.',
      seo: {
        titulo: 'La Reina',
        descripcion: 'Aire acondicionado automotriz a domicilio en La Reina, Santiago oriente. Carga de gas R134a y R1234yf desde $35.000. Especialistas en vehículos híbridos y de alta gama.',
        keywords: 'aire acondicionado La Reina, carga gas La Reina, reparacion AC La Reina, vehiculos hibridos Santiago',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Diagnóstico para híbridos', 'Reparación de compresor', 'Sanitización', 'Cambio de evaporador'],
      fee: 5000,
      testimonios: [
        { nombre: 'Mónica V.', texto: 'Tengo un Toyota Yaris híbrido y vinieron con el gas R1234yf. Muy profesionales.' },
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
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Peñalolén. Cobertura completa en la comuna, desde Avenida Grecia hasta Avenida Quilín. Carga de gas R134a y R1234yf.',
      seo: {
        titulo: 'Peñalolén',
        descripcion: 'Aire acondicionado automotriz a domicilio en Peñalolén, Santiago. Carga de gas R134a desde $35.000. Diagnóstico gratis si contratas. Cobertura en toda la comuna.',
        keywords: 'aire acondicionado Peñalolén, carga gas Peñalolén, reparacion AC Peñalolén, servicio a domicilio',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Detección de fugas', 'Cambio de compresor', 'Sanitización', 'Diagnóstico OBD2'],
      fee: 10000,
      testimonios: [
        { nombre: 'Rodrigo A.', texto: 'Estaba complicado con mi Logan y me lo resolvieron en la misma visita. 10 puntos.' },
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
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Pudahuel. Cubrimos todo el sector poniente, incluyendo el aeropuerto y Ciudad de los Valles. Técnicos certificados.',
      seo: {
        titulo: 'Pudahuel',
        descripcion: 'Aire acondicionado automotriz a domicilio en Pudahuel, Santiago poniente. Carga de gas R134a desde $35.000. Diagnóstico gratis si contratas. Cobertura completa.',
        keywords: 'aire acondicionado Pudahuel, carga gas Pudahuel, reparacion AC Pudahuel, servicio a domicilio Santiago poniente',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Detección de fugas', 'Reparación de compresor', 'Sanitización', 'Mantención preventiva'],
      fee: 15000,
      testimonios: [
        { nombre: 'Carla T.', texto: 'Vivo en Ciudad de los Valles y vinieron sin problema. Servicio rápido y garantizado.' },
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
      descripcion: 'Servicio de aire acondicionado automotriz a domicilio en Quilicura. Cobertura completa en la comuna, incluyendo Lo Marcoleta y el sector industrial. Técnicos certificados con equipos profesionales.',
      seo: {
        titulo: 'Quilicura',
        descripcion: 'Aire acondicionado automotriz a domicilio en Quilicura, Santiago norte. Carga de gas R134a desde $35.000. Diagnóstico gratis si contratas. Cobertura completa.',
        keywords: 'aire acondicionado Quilicura, carga gas Quilicura, reparacion AC Quilicura, servicio a domicilio Santiago norte',
      },
      servicios: ['Carga de gas R134a y R1234yf', 'Detección y reparación de fugas', 'Cambio de compresor', 'Sanitización', 'Diagnóstico profesional'],
      fee: 15000,
      testimonios: [
        { nombre: 'Ignacio P.', texto: 'Tengo una van de trabajo y vinieron al sector industrial. Buena atención y precio.' },
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
