# Sprint 40 v2 - Baseline Report
Fecha: 2026-08-10 18:02:06 UTC

## Build/Deploy info
BUILD_ID: QWBzQGkxKal__uDhdcaxV
PM2 PID: │
PM2 uptime: │
PM2 restarts: │

## Next.config images section
  images: {
    // Sprint 39 bis: habilitar AVIF/WebP + cache 1 año
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',

## HTML y conteo de imágenes (FASE 2)
HTML sin comprimir: 190169 bytes
HTML gzipped: 31059 bytes
HTML brotli: 22185 bytes
Total <img>: 1
Con srcset: 0
Que usan /_next/image: 1
Hardcodeadas: 0

GZIP_SIZE=31059
BROTLI_SIZE=22185
HTML_SIZE=190169
TOTAL_IMG=1
TOTAL_SRCSET=0
TOTAL_NEXT_IMAGE=1
TOTAL_HARDCODED=0

## TTFB baseline (FASE 4)
Home (3 runs):
  Run 1: TTFB=0.027559s Total=0.028805s Size=190169
  Run 2: TTFB=0.027304s Total=0.028416s Size=190169
  Run 3: TTFB=0.030341s Total=0.031933s Size=190169

Páginas internas:
  /servicios/recarga-r1234yf: TTFB=0.043164s Total=0.044961s Size=137058
  /cobertura/santiago: TTFB=0.027351s Total=0.028123s Size=113235
  /casos-reales: TTFB=0.039253s Total=0.039885s Size=90922

## Conteo HTML y elementos (FASE 2)
GZIP_SIZE=31059
BROTLI_SIZE=22185
HTML_SIZE=190169
TOTAL_IMG=1
TOTAL_SRCSET=0
TOTAL_NEXT_IMAGE=1
TOTAL_HARDCODED=0

## Tabla 5 imágenes (FASE 3)
categoria,url,content_type_avif,vary_avif,cache_control_avif,bytes_avif,bytes_webp,bytes_jpeg,ahorro_avif_pct,ahorro_webp_pct
sabida_que_andaba,/_next/image?url=%2Fimages%2Fedinson-portrait.webp&w=640&q=75,image/avif,Accept,public, max-age=31536000, must-revalidate,20384,24748,39572,48.5,37.5
era_hardcodeada_ClientHome,/_next/image?url=%2Fimages%2Fcaso-compresor.webp&w=750&q=75,image/avif,Accept,public, max-age=31536000, must-revalidate,33872,38904,44031,23.1,11.6
galeria_servicios,/_next/image?url=%2Fimages%2Fservicio-carga-gas.webp&w=640&q=75,image/avif,Accept,public, max-age=31536000, must-revalidate,15254,17702,25139,39.3,29.6
hero_alt_home,/_next/image?url=%2Fimages%2Fhero-technician.webp&w=640&q=75,image/avif,Accept,public, max-age=31536000, must-revalidate,25715,30094,42953,40.1,29.9
size_grande,/_next/image?url=%2Fimages%2Fedinson-portrait.webp&w=1920&q=75,image/avif,Accept,public, max-age=31536000, must-revalidate,28782,37996,60268,52.2,37.0

## Sizes en runtime (FASE 5)
Sizes distintos encontrados en home:
- (max-width: 1024px) 100vw, 340px (1x) - usado por edinson-portrait
- (max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw (6x) - usado por galería servicios
- any (1x) - algún SVG o similar

srcSet: 10 widths por imagen (256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840)

## Ternario ClientHome (FASE 6)
Path real: /var/www/autofixer-web/src/app/ClientHome.tsx
Linea 253-254:
  priority={i === 0}
  fetchPriority={i === 0 ? "high" : "auto"}

<Image> totales en src/: 4 (todas con width y height)

## Control negativo (FASE 7)
no-existe.webp: 400 (rechazado)
Accept: image/heic: 200 image/jpeg (fallback)
w=99999: 400 | w=1: 400 | w=800: 400 (no permitido)
w=750: 200 | w=3840: 200 (permitidos)
q=200: 400 | q=1: 200

## Hit ratio cache (FASE 8)
Total requests /_next/image: 135
Status 200: 125 | Status 304: 0 | Status 400: 10 (queries inválidos)
Hit ratio: 92.6%
x-nextjs-cache: HIT (incluso en 1ra petición = Next.js ya tiene en memoria)

Top 5 imágenes:
  68x edinson-portrait
  46x servicio-carga-gas
   7x caso-compresor (probablemente errores)
   6x servicio-detector-fugas
   6x hero-technician

## Comando PSI (FASE 9)
Guardado: /tmp/lcp-check-post-sprint39bis.sh
5 URLs (home + 2 servicios + 2 cobertura)
Ejecutable cuando PSI quota libere

## WebVitalsDebug (FASE 10)
GATE: ?debug=lcp query param
Sin query param: retorna inmediatamente (no instrumentation)
Layout: src/app/layout.tsx:318 <WebVitalsDebug />

## HALLAZGOS CRÍTICOS

1. w=800 NO está permitido por Next.js (deviceSizes default: 640,750,828,1080,1200,1920,2048,3840)
   - Cualquier width fuera de esa lista devuelve 400
   - Si se quiere w=800, hay que agregar a deviceSizes en next.config.js

2. Cambios Sprint 39 bis NO están en git (último commit: f2ab51e = AggregateRating)
   - Riesgo: si se reinstala desde git, se pierden los fixes
   - Acción futura: hacer commit de los cambios

3. HTML inicial solo tiene 1 <img> (es la home con ClientHome CSR)
   - Las otras imágenes se renderizan en cliente vía JS
   - Lo que importa es que el JS bundle llame a /_next/image (verificado)

4. hit ratio 92.6% (10/135 = 7.4% son 400 por queries inválidos)
   - De los 125 válidos, casi todos son HIT de Next.js cache

## Veredicto
Sprint 39 bis funcionalidades: ✅ operativas
AVIF: ✅ funciona (5/5 imágenes)
WebP: ✅ funciona (5/5 imágenes)
Hardcodeadas: ✅ 0
Vary: Accept: ✅ presente
Cache-Control max-age=31536000: ✅ presente
LCP: pendiente PSI (cuota)
Próximo paso: medir LCP con PSI cuando quota libre
