.PHONY: dev
dev:
	@trap 'kill 0' EXIT; \
	echo "Starting Django (port 8000) and Vite (port 5173)..."; \
	(. .venv/bin/activate && python manage.py runserver) & \
	(cd frontend && npm run dev) & \
	wait
