# Mission: Node.js Backend Course

## Why
I know frontend (HTML/CSS/JS + fetch) but have never built a server. I want to independently build, test, secure, document, and deploy a real backend API (TaskFlow) and connect it to a frontend.

## Success looks like
- Explain a full HTTP request lifecycle (browser → server → database → response) in plain English
- Run Node.js programs, build a raw HTTP server, then an Express REST API with validation and clean errors
- Store users, projects, and tasks in PostgreSQL (SQL first, then Prisma) with correct relations
- Add registration/login with hashed passwords and enforce ownership/role authorization
- Add automated tests + OpenAPI docs, then deploy the API + database and wire it to a real frontend

## Constraints
- Frontend JS known; zero backend/networking/DB assumed — teach from first principles
- One concept at a time; small runnable examples; ES modules only
- Verified versions: Node 24 LTS, Express 5, PostgreSQL 16/17, Prisma ORM 7 stable

## Out of scope
- Kubernetes, microservices, multiple backend frameworks, advanced runtime internals before needed
- Job guarantees; theory without a runnable TaskFlow milestone
