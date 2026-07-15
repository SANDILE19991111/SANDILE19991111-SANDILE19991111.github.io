# Bongimusa Sandile Khoza — Portfolio

Personal portfolio site showcasing my work in software development, AI/ML, data engineering, and cybersecurity.

🔗 **Live site:** [https://sandile.khozabongimusa4.workers.dev](https://sandile.khozabongimusa4.workers.dev)

## About

I build things that make decisions — not just interfaces that display data, but systems that reason over it. SAPS iLodge takes a stream of citizen complaints and routes them intelligently using LLaMA 3.3 70B; SafeRide verifies a rider's identity in real time using DeepFace and Gemini rather than trusting a static photo on file. That's the thread running through my work: I'm less interested in AI as a buzzword and more interested in the specific moment where a model's output has to become someone's actual decision — approve the ride, escalate the ticket, flag the anomaly.
I came to this from a place where computers were rare growing up in Bushbuckridge, Mpumalanga — which maybe explains why I care more about whether a system actually works for the person using it than whether it looks impressive in a demo. My BSc in Computer Science and Mathematics from North-West University gave me the theory; building SAPS iLodge, SafeRide, and Email Drafter end-to-end — architecture, data layer, model integration, deployment — taught me where theory breaks down in practice.
Right now that shows up as full-stack development, AI/ML integration, and data engineering — but the constant is the same: take a messy real-world problem, find the structure in it, and ship something that holds up.
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

- Full Stack Development (FNB App Academy)
- Generative AI (Google Cloud)
- Introduction to AI (IBM)

## Contact

- **LinkedIn:** [linkedin.com/in/bongimusa-khoza-7661aa396](https://linkedin.com/in/bongimusa-khoza-7661aa396)
- **GitHub:** [github.com/SANDILE19991111](https://github.com/SANDILE19991111)

---

*Note: This repository's source is deployed via Cloudflare Workers, not GitHub Pages, due to the project's server-side rendering (SSR) requirements.*
