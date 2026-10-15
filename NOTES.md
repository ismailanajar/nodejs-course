# NOTES.md — teaching scratchpad

- Audience: frontend dev, knows fetch() basics, zero backend. Never assume networking/OS/DB.
- Style: plain English first, one concept at a time, frontend analogy → mental model → runnable code.
- Stack lock (verified Oct 2026): Node 24 LTS (Krypton), Express 5.x (needs Node 18+), PostgreSQL 16/17, Prisma ORM 7 stable (v8 is RC — do NOT teach v8 yet), Zod, argon2/bcrypt, Node test runner + Supertest.
- Course spine: TaskFlow grows every module (CLI → raw HTTP → Express in-memory → Postgres → auth → tests/docs → deploy).
- Lesson format: self-contained HTML in ./lessons/, shared CSS in ./assets/, Mermaid via CDN, interactive quiz with instant feedback, primary source + ask-teacher reminder.
- Quiz rule: answer options must be same word/char length where feasible — no formatting clues.
- Do not inline reusable CSS/JS — promote to ./assets/.
- Visual style: exact 1:1 mirror of ../portfolio (user request, Darija-confirmed). Tokens: blue #234df1, yellow #facc15, paper #fff8e9, ink #111113, 3px borders, 6px hard shadows, Space Grotesk + Inter. Source of truth: ../portfolio/styles.css. All lessons via assets/styles.css.
- Diagrams: user wants LOTS of charts per lesson ("khdem b charts bzzf") — default to 3+ Mermaid visuals (flowchart, sequence, plus pie/journey where it fits), each with title + source + walkthrough.
- Lesson endings: NO "Stuck? Ask me" boxes (removed everywhere per user request). Lessons end at Primary source + nav. Checkpoints are fully self-graded, no submission path.
- SEO standard (user request): every page gets TF favicon (data-URI, portfolio style), unique meta description, author Ismail Anajar, robots index/follow, OG + Twitter tags, JSON-LD LearningResource with author link https://ismail-anajar.vercel.app/, and footer credit rel=author. Canonical + og:url set for ismailanajar.github.io/nodejs-course.
- Deploy: GitHub Pages, repo ismailanajar/nodejs-course (public), site https://ismailanajar.github.io/nodejs-course/. Root = site (index.html landing, .nojekyll, sitemap.xml, robots.txt). Local commit done; remote+push+Pages-enable need user (no gh CLI/auth here).
