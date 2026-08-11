# Security Incident: 2026-08-11 - .env.local.bak leaked

## Resumen
Dos archivos `.env.local.bak-*` fueron commiteados al repositorio público
`autofixer-infrastructure/autofixer-web` durante sprints 4-39 bis y
pusheados a `origin/main`.

## Estado del incidente: ABIERTO

**Acciones tomadas:**
- 2026-08-11: Backup completo de .git en
  `/var/backups/autofixer/repo-snapshot-20260811-102931/`
- 2026-08-11: git-filter-repo instalado
- 2026-08-11: Documento de incidente creado

**Acciones pendientes del owner (manuales):**
- [ ] Rotar GOOGLE_MAPS_API_KEY en Google Cloud Console
- [ ] Rotar TURNSTILE_SECRET en Cloudflare Dashboard
- [ ] Cambiar repo a privado en GitHub UI
- [ ] Ejecutar filter-repo + force push (bloqueado por repo público)

**Decisión documentada:** El owner eligió posponer la rotación de keys.
Riesgo activo aceptado. Las 2 keys siguen activas con los valores del .bak.

## Qué se filtró

### Secretos reales (server-side)
- `GOOGLE_MAPS_API_KEY` (en .env.local.bak-sprint29-20260809-191434)
- `TURNSTILE_SECRET` (en ambos .bak)

### Variables públicas por diseño (NEXT_PUBLIC_*)
- NEXT_PUBLIC_API_URL
- NEXT_PUBLIC_APP_URL
- NEXT_PUBLIC_APP_NAME
- NEXT_PUBLIC_APP_DESCRIPTION
- NEXT_PUBLIC_GA_ID
- NEXT_PUBLIC_TURNSTILE_SITE_KEY

### Lo que NO se filtró (seguro)
- Backend secrets: JWT_SECRET, DATABASE_URL, MINIMAX_API_KEY,
  CLOUDFLARE_*, SMTP_*, GOOGLE_APPLICATION_CREDENTIALS, SENTRY_DSN privado
- DB passwords
- OAuth client secrets

## Lección aprendida

**NUNCA commitear .env* ni .bak.**

### Política para futuros sprints
- Antes de CUALQUIER commit, revisar `git status --porcelain`
- NUNCA usar `git add .` (siempre archivos específicos)
- Verificar `git diff --cached --stat` antes del commit
- Si ves `.bak`, `.sprint*-backup`, `.env.local.bak` en el output, abortar

### Cambios preventivos aplicados (.gitignore)
Ver `.gitignore` del proyecto.

## Tags de seguridad
- `pre-history-cleanup-20260811` (tag local antes de hipotético force push,
  no pusheado al remoto porque el repo sigue público)
