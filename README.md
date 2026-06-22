# django-test

Django + React SPA (CSR) demo.

## Run the app

### Single command (both servers)

```bash
make dev
```

This starts Django on `:8000` and Vite on `:5173` in parallel. Press Ctrl+C to stop both.

### Or run separately

**Backend (Django):**
```bash
source .venv/bin/activate
python manage.py runserver
```

**Frontend (React + Vite):**
```bash
cd frontend && npm run dev
```

Vite proxies `/api/*` to Django. Open `http://localhost:5173`.
