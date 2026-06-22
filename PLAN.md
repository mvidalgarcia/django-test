# Django + React SPA (CSR) — Setup Plan

## Status

| Step | Status |
|------|--------|
| Django project created | ✅ |
| `djangorestframework` + `corsheaders` installed | ✅ |
| DRF API endpoint (`/api/hello/`) | ✅ |
| CORS configured for `localhost:5173` | ✅ |
| SECRET_KEY via env var with dev fallback | ✅ |
| `.env.example` | ✅ |
| AGENTS.md project rules | ✅ |
| AI agent skills installed (Python/Django/React) | ✅ |
| `requirements.txt` (pinned) | ✅ |
| React + Vite frontend scaffolded | ✅ |
| Vite proxy `/api` → Django | ✅ |
| `App.tsx` fetches from `/api/hello/` | ✅ |
| `make dev` single-command runner | ✅ |
| `README.md` with run instructions | ✅ |
| GitHub repo created and pushed | ✅ |

## Run the app

```bash
make dev
```

Or separately:

```bash
# Terminal 1 — Django on :8000
source .venv/bin/activate && python manage.py runserver

# Terminal 2 — Vite on :5173
cd frontend && npm run dev
```

Open `http://localhost:5173`.
