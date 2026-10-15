# Node.js Backend Resources

## Knowledge

- [Node.js Docs — Getting Started + LTS schedule](https://nodejs.org/en/docs)
  Covers install, run, ES modules, built-ins. Use for: Module 2 Node fundamentals and version claims (24 Krypton = LTS Oct 2026).
- [Node.js: How the event loop works (official guides)](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick)
  Beginner-safe mental model of non-blocking I/O. Use for: event loop without internals overload.
- [MDN: HTTP Overview + Methods + Status Codes + CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP)
  Primary source for request/response anatomy. Use for: Module 1 mental models and every status-code claim.
- [Express 5.x API Reference + Getting Started](https://expressjs.com/en/api/)
  Requires Node 18+. Use for: Module 4 routing, middleware, error handling. Note v5 breaking changes.
- [PostgreSQL 17 Tutorial + Docs](https://www.postgresql.org/docs/current/tutorial.html)
  Authoritative SQL, keys, JOINs, transactions. Use for: Module 5 before any ORM.
- [Prisma ORM v7 Docs — PostgreSQL connector](https://www.prisma.io/docs/orm/v7/core-concepts/supported-databases/postgresql)
  Stable GA path for course (v8 is RC Oct 2026). Use for: introducing Prisma only after raw SQL.
- [Zod Documentation](https://zod.dev/)
  Schema validation API. Use for: Module 4/6 input validation.
- [OWASP: Password Storage + Authentication Cheatsheets](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)
  Argon2id/bcrypt guidance, what never to do. Use for: Module 6 hashing, safe errors.
- [Node.js Test Runner Docs](https://nodejs.org/api/test.html)
  Built-in test runner. Use for: Module 7 unit + integration tests with Supertest.
- [Docker Docs — Getting Started + Node samples](https://docs.docker.com/get-started/)
  Containers for local Postgres and deploy. Use for: Module 8 Docker fundamentals only.

## Wisdom (Communities)

- [r/node](https://www.reddit.com/r/node/)
  Large Node community, beginner questions welcome. Use for: debugging stuck points, ecosystem sanity checks.
- [r/PostgreSQL](https://www.reddit.com/r/PostgreSQL/)
  Strict, high-signal SQL help. Use for: schema design and query review for TaskFlow.
- [Express.js Discord / GitHub Discussions](https://github.com/expressjs/express/discussions)
  Direct framework help. Use for: Express 5 migration quirks.

## Gaps

- Single beginner-friendly Argon2-vs-bcrypt walkthrough pinned to Express 5 + Node 24 — will synthesize from OWASP + npm docs in Module 6.
- Deployment target comparison grounded in 2026 pricing — to research in Module 8, not assumed now.
