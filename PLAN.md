# Django + React SPA (CSR) Setup Plan

## Django backend changes

1. **Install packages:**
   ```
   pip install djangorestframework django-cors-headers
   ```

2. **`helloworld/settings.py`:**
   - Add `rest_framework` and `corsheaders` to `INSTALLED_APPS`
   - Add `CorsMiddleware` to `MIDDLEWARE` (top of the list)
   - Add `CORS_ALLOWED_ORIGINS = ["http://localhost:5173"]`

3. **`hello/views.py`**: Add a DRF API view, e.g.:
   ```python
   from rest_framework.decorators import api_view
   from rest_framework.response import Response

   @api_view(["GET"])
   def hello_api(request):
       return Response({"message": "Hello from Django!"})
   ```

4. **`hello/urls.py`**: Add an `/api/hello/` route

5. **`helloworld/urls.py`**: Add a top-level `/api/` include

## React frontend setup

6. Create `frontend/` with Vite + React + TypeScript:
   ```
   npm create vite@latest frontend -- --template react-ts
   ```

7. **`frontend/vite.config.ts`**: Proxy `/api` to Django:
   ```ts
   server: {
     proxy: {
       "/api": "http://localhost:8000"
     }
   }
   ```

8. **`frontend/src/App.tsx`**: Fetch from `/api/hello/` and display the message

9. **Root `frontend/package.json`**: Add dev script (`npm run dev` starts Vite on `:5173`)

## Dev workflow

```
Terminal 1:  source .venv/bin/activate && python manage.py runserver   (Django on :8000)
Terminal 2:  cd frontend && npm run dev                                 (Vite on :5173)
```

React dev server proxies `/api/*` → Django. No CORS issues in dev with the proxy; CORS config is there for production.
