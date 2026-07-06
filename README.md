# Bongimusa Sandile Khoza — Portfolio

Personal portfolio site showcasing my work in software development, AI/ML, data engineering, and cybersecurity.

🔗 **Live site:** [https://sandile.khozabongimusa4.workers.dev](https://sandile.khozabongimusa4.workers.dev)

## About

BSc Computer Science and Mathematics graduate (North-West University, Mafikeng) currently completing the CAPACITI AI Bootcamp in Johannesburg. This portfolio highlights my projects, skills, and experience across full-stack development, AI engineering, and data analytics.

## Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React + SSR)
- **Build tool:** Vite
- **Styling:** Tailwind CSS
- **UI components:** Radix UI / shadcn-style components
- **State/data:** TanStack Query, TanStack Router
- **Hosting:** Cloudflare Workers (via Nitro's `cloudflare-module` preset)
- **Built with:** [Lovable](https://lovable.dev)

## Deployment

This project is deployed automatically via Cloudflare's Git integration — every push to `main` triggers a new build and deployment.

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`
- **Output:** `.output/public` (client assets) + `.output/server` (SSR Worker)

### Local development

```bash
npm install
npm run dev
```

Runs the dev server at `http://localhost:8080`.

### Local production build

```bash
npm run build
```

## Featured Projects

- **SAPS iLodge** — AI-powered police ticket/complaint management platform (Node.js, Express, PostgreSQL, LLaMA 3.3 70B via Groq)
- **SafeRide** — Biometric ride safety platform (Python, DeepFace, Gemini 2.5 Flash)
- **Email Drafter** — AI email drafting tool (Node.js, Groq API)
- **OceanIQ** — AI chatbot (Team Lead project)

## Certifications

- Azure AI Engineer Associate
- Power BI Data Analyst Associate (Microsoft/NEMISA)
- Full Stack Development (FNB App Academy)
- Generative AI (Google Cloud)
- Introduction to AI (IBM)

## Contact

- **LinkedIn:** [linkedin.com/in/bongimusa-khoza-7661aa396](https://linkedin.com/in/bongimusa-khoza-7661aa396)
- **GitHub:** [github.com/SANDILE19991111](https://github.com/SANDILE19991111)

---

*Note: This repository's source is deployed via Cloudflare Workers, not GitHub Pages, due to the project's server-side rendering (SSR) requirements.*
