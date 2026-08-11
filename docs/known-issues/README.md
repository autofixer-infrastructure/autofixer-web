# Known Issues (deuda menor documentada)

## w=800 en Next.js Image API → 400

**Fecha:** 2026-08-10
**Severidad:** Baja
**Hallazgo:** Sprint 40 v2 FASE 7 (control negativo)

### Descripción

Next.js 15 deviceSizes default: `[640, 750, 828, 1080, 1200, 1920, 2048, 3840]`
Cualquier `w=` fuera de esa lista devuelve HTTP 400.

### Impacto

- No afecta usuarios normales
- Solo si alguien pide explícitamente w=800
- `<Image width={800}>` SÍ funciona (Next usa sizes automáticos)

### Fix (si se necesita)

Agregar a next.config.js:

```js
images: {
  deviceSizes: [640, 750, 800, 828, 1080, 1200, 1920, 2048, 3840],
}
```

## WebVitalsDebug temporal

**Fecha:** 2026-08-10
**Severidad:** Baja
**Estado:** Activo, gateado por `?debug=lcp`

El componente `src/components/WebVitalsDebug.tsx` está en producción pero:
- Solo loguea si URL tiene `?debug=lcp`
- Sin query param, retorna inmediatamente
- Es seguro dejarlo

**Acción futura:** limpiar cuando ya no se necesite medir LCP
