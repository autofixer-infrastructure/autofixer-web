// Helper para mapear service slug a categoría
export const mapServiceToCategory = (serviceSlug: string): string => {
  const map: Record<string, string> = {
    'recarga-r1234yf': 'recarga',
    'carga-gas': 'recarga',
    'diagnostico': 'diagnostico',
    'mantenimiento-preventivo': 'mantenimiento',
    'sanitizacion': 'mantenimiento',
    'deteccion-reparacion-fugas': 'reparacion',
    'flushing': 'reparacion',
    'cambio-condensador': 'reparacion',
    'reparacion-compresor': 'reparacion',
    'cambio-evaporador': 'reparacion',
    'aire-electrico-hibrido': 'especializado',
  };
  return map[serviceSlug] || 'general';
};

// Helper para enviar eventos con custom dimensions
export const trackEvent = (
  eventName: string,
  customDims: Record<string, string | number | undefined> = {}
) => {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', eventName, {
    event_category: 'engagement',
    ...customDims,
  });
};
