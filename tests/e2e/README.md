# E2E Tests

Suite automatizada con Playwright para validar flujos críticos.

## ⚠️ Seguridad

**Los tests NO son completamente read-only:**
- POST /api/contact válido → crea ContactMessage en DB
- Rate limiting test → genera 12+ requests

**Por lo tanto:**
- ❌ NO ejecutar `pnpm test:e2e` contra producción sin autorización
- ❌ NO incluir E2E en CI contra producción (no hay staging todavía)
- ✅ Ejecutar contra staging o local para desarrollo
- ✅ Producción: solo validación manual controlada
- ✅ Datos de test marcados: `e2e-test`, `ratetest`, `DELETEME`

## Configuración

- `playwright.config.ts` - base config
- 2 projects: `chromium` (mayoría) + `rate-limit-isolated`
- workers: 1 global para evitar bursts
- Retries: 2 en CI, 0 local

## CI/CD

Ver `.github/workflows/ci.yml`. Actualmente:
- ✅ Build + Type check + Lint
- ❌ E2E (deshabilitado, requiere staging)

Próximo sprint: configurar `staging.autofixer.cl` y habilitar E2E en CI como PR gate.
