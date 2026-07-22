import { createFileRoute } from "@tanstack/react-router";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import sandilePhoto from "@/assets/sandile.jpeg.asset.json";
import cvAsset from "@/assets/cv.pdf.asset.json";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Bongimusa Sandile Khoza — Cybersecurity · AI · Data · Risk" },
      { name: "description", content: "Portfolio of Bongimusa Sandile Khoza: BSc CS & Mathematics graduate building secure AI systems, data pipelines and risk-aware software." },
    ],
  }),
});

/* ────────────── Data ────────────── */

const FOCUS = [
  { k: "Cybersecurity", d: "IAM, RBAC, POPIA, NIST, secure SDLC" },
  { k: "AI / ML", d: "DeepFace, LLMs, prompt engineering, clustering" },
  { k: "Software Development", d: "Node.js, React, PostgreSQL, REST APIs, full-stack delivery" },
  { k: "Data & Analytics", d: "Pandas, Power BI, SQL, statistical modelling" },
  { k: "IT Risk & Compliance", d: "Control gaps, audit papers, COBIT, ISO 9001" },
];

const STATS = [
  { n: "2", l: "Live AI apps in production" },
  { n: "10+", l: "Shipped projects" },
  { n: "8", l: "AI & cloud certifications" },
  { n: "100%", l: "Connectivity restored on network audits" },
];

const PROJECTS = [
  {
    tag: "AI · Biometric Security",
    name: "SafeRide",
    sub: "AI Face Recognition Ride Safety Platform",
    desc: "Production biometric IAM using DeepFace — live passenger identity verification with confidence scoring, SOS location logging, and Gemini-driven safety briefings. Directly applicable to fintech IAM and cyber-risk domains.",
    stack: ["Python", "DeepFace", "Streamlit", "Gemini 2.5", "PostgreSQL"],
    live: "https://saferide-rrwv43c8efmxhtbmu2xgjr.streamlit.app",
    code: "https://github.com/SANDILE19991111/saferide",
    metrics: [["Auth", "Biometric"], ["Model", "DeepFace"], ["Latency", "<2s match"]],
    accent: "cyber",
  },
  {
    tag: "AI · Risk & Compliance",
    name: "SAPS iLodge",
    sub: "AI-Powered Complaint & Risk Governance Platform",
    desc: "Complaint & ticket system with AI keyword routing, SLA compliance monitoring, bias auditing, transparency scoring and audit-trail governance — built to demonstrate an AI risk & compliance layer for public-sector operations.",
    stack: ["Node.js", "Express", "Groq LLM", "RBAC", "Render"],
    live: "https://saps-ilodge-week7.onrender.com",
    code: "https://github.com/SANDILE19991111/saps_ilodge_week7",
    metrics: [["Routing", "94% acc"], ["Roles", "3-tier RBAC"], ["Audit", "Full trail"]],
    accent: "signal",
  },
  {
    tag: "AI · Automation",
    name: "Email Drafter",
    sub: "LLM-Powered Email Automation",
    desc: "Full-stack tool integrating LLaMA 3.3 70B via Groq API with production-grade system-prompt hardening, secure API key handling, and CI/CD to Render.",
    stack: ["Node.js", "Express", "Groq", "LLaMA 3.3"],
    live: "https://email-drafter-ciay.onrender.com",
    code: "https://github.com/SANDILE19991111/email-drafter",
    metrics: [["Model", "LLaMA 70B"], ["Tones", "4"], ["Deploy", "CI/CD"]],
    accent: "cyber",
  },
  {
    tag: "Data · NLP",
    name: "SentimentIQ",
    sub: "AI Sentiment Analysis Dashboard",
    desc: "TextBlob polarity engine with interactive Plotly charts, word clouds, and CSV/Markdown exports — turning raw text into decision-ready insights.",
    stack: ["Python", "Streamlit", "TextBlob", "Plotly"],
    code: "https://github.com/SANDILE19991111/sentiment-tool",
    metrics: [["Charts", "5 types"], ["Input", "CSV/Text"], ["Export", "CSV/MD"]],
    accent: "signal",
  },
  {
    tag: "ML · Data Science",
    name: "KMeans User Segmentation",
    sub: "Unsupervised Machine Learning Pipeline",
    desc: "KMeans clustering on 530 synthetic user profiles — segmentation with an ARI of 0.344, correlation analysis and reproducible reporting.",
    stack: ["Python", "Scikit-learn", "NumPy", "Matplotlib"],
    metrics: [["Records", "530"], ["ARI", "0.344"], ["Clusters", "3"]],
    accent: "risk",
  },
  {
    tag: "Networking · Security",
    name: "Enterprise Network Design",
    sub: "Cisco Packet Tracer · VLANs, DHCP Snooping, NAT",
    desc: "Designed 5 topologies for a simulated enterprise; diagnosed 3 critical security failures via root-cause analysis and restored 100% connectivity. Full audit + config documentation.",
    stack: ["Cisco PT", "VLANs", "DHCP/DHCPv6", "Static NAT", "IPv6"],
    metrics: [["Topologies", "5"], ["Findings", "3 critical"], ["Uptime", "100% restored"]],
    accent: "cyber",
  },
  {
    tag: "Full-Stack · QA",
    name: "ClinicCare",
    sub: "Clinic Appointment System + Audit-Style QA",
    desc: "5-role RBAC (Admin/Doctor/Nurse/Receptionist/Pharmacist), JWT auth with 24h expiry, bcrypt hashing, account lockout. Ran 15+ test cases, produced audit working papers on 5+ control gaps.",
    stack: ["Node.js", "PostgreSQL", "JWT", "bcrypt", "RBAC"],
    code: "https://github.com/SANDILE19991111",
    metrics: [["Roles", "5"], ["Auth", "JWT+bcrypt"], ["Tests", "15+"]],
    accent: "signal",
  },
  {
    tag: "Software Dev · DevSecOps",
    name: "DevSecOps Pipeline",
    sub: "Secure CI/CD with SAST, Secrets & Container Scans",
    desc: "End-to-end GitHub Actions pipeline: lint → unit tests → SAST (CodeQL) → secret scanning (Gitleaks) → container image scan (Trivy) → signed deploy to Render. Fails builds on high-severity CVEs and enforces branch protection.",
    stack: ["GitHub Actions", "CodeQL", "Trivy", "Gitleaks", "Docker"],
    code: "https://github.com/SANDILE19991111",
    metrics: [["Gates", "5"], ["Coverage", "SAST+SCA"], ["MTTR", "< 1 day"]],
    accent: "cyber",
  },
  {
    tag: "Software Dev · Full-Stack",
    name: "TaskFlow API",
    sub: "Production REST API — Auth, Rate-Limit, OpenAPI",
    desc: "Typed Node/Express REST API with JWT auth, refresh rotation, per-route rate limiting, Zod validation, PostgreSQL migrations, Swagger/OpenAPI docs, and Jest integration tests. Built to demonstrate clean, testable, production-grade backend engineering.",
    stack: ["TypeScript", "Express", "PostgreSQL", "Zod", "Jest", "OpenAPI"],
    code: "https://github.com/SANDILE19991111",
    metrics: [["Endpoints", "20+"], ["Tests", "Jest"], ["Docs", "OpenAPI"]],
    accent: "signal",
  },
];

const SKILLS = {
  "Cybersecurity & Risk": ["POPIA", "NIST awareness", "COBIT / ISO 9001", "RBAC / IAM", "DHCP Snooping", "Incident Mgmt", "Control Gap Analysis", "Audit Documentation"],
  "AI & Machine Learning": ["DeepFace", "Scikit-learn", "KMeans", "Neural Networks", "NLP / TextBlob", "Prompt Engineering", "Azure Cognitive Services"],
  "LLMs & GenAI": ["LLaMA 3.3 70B (Groq)", "Gemini 2.5 Flash", "Claude AI", "System Prompt Hardening"],
  "Data & Analytics": ["Python · Pandas · NumPy", "SQL / PostgreSQL", "Power BI", "Plotly / Matplotlib", "Statistical Analysis", "Financial Modelling"],
  "Software & Cloud": ["Node.js / Express", "JavaScript / TS", "Java · C++", "Streamlit Cloud", "Render", "Git / GitHub Pages", "REST APIs"],
  "QA & Testing": ["Test Plan Design", "Functional & System Testing", "Defect Tracking", "Root Cause Analysis", "BABOK Awareness"],
};

const CERTS = [
  ["Full Stack Development", "FNB App Academy", "Jul 2025"],
  ["AI For Everyone", "DeepLearning.AI / Coursera", "Apr 2026"],
  ["Introduction to Generative AI", "Google Cloud / Coursera", "May 2026"],
  ["Introduction to Artificial Intelligence", "IBM / Coursera", "May 2026"],
  ["Generative AI: Prompt Engineering Basics", "IBM / Coursera", "May 2026"],
  ["Python for Data Science, AI & Dev", "IBM / Coursera", "2026"],
  ["AI Essentials", "Google / Coursera", "Jun 2026"],
  ["AI Bootcamp", "Coursera", "Jun 2026"],
];

/* ────────────── Component ────────────── */

function Portfolio() {
  const [typed, setTyped] = useState("");
  const full = "secure • intelligent • data-driven";
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setTyped(full.slice(0, ++i));
      if (i >= full.length) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative min-h-screen text-foreground">
      <LiveBackground />
      <div className="relative z-10">
        <Nav />
        <Hero typed={typed} />
        <FocusStrip />
        <About />
        <Projects />
        <Skills />
        <Certs />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

/* ────────────── Sections ────────────── */

function scrollToHash(hash: string) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    const id = hash.replace(/^#/, "");
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["about","About"],["projects","Projects"],["skills","Skills"],["certs","Certs"],["contact","Contact"]] as const;
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" onClick={scrollToHash("#top")} className="flex items-center gap-2 font-mono text-sm cursor-pointer">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-bold">SK</span>
          <span className="hidden sm:inline text-muted-foreground">~/sandile.khoza <span className="cursor" /></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-sm text-muted-foreground">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={scrollToHash(`#${id}`)} className="hover:text-primary transition-colors cursor-pointer">./{label.toLowerCase()}</a>
          ))}
        </nav>
        <a href={cvAsset.url} download="Sandile_Khoza_CV.pdf" target="_blank" rel="noreferrer" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
          Download CV
        </a>
      </div>
    </header>
  );
}

function Hero({ typed }: { typed: string }) {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-36 pb-24 lg:grid-cols-[1.2fr_0.8fr] lg:pt-44 lg:pb-32">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            AVAILABLE_FOR_HIRE · Gauteng, SA · Willing to relocate
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Bongimusa <span className="text-gradient-cyber">Sandile</span> Khoza
          </h1>

          <p className="mt-4 font-mono text-sm text-primary">
            &gt; role: <span className="text-foreground">Cybersecurity · AI/ML · Data · IT Risk</span>
          </p>
          <p className="mt-1 font-mono text-sm text-muted-foreground">
            &gt; mission: <span className="text-foreground">{typed}</span><span className="cursor" />
          </p>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            BSc Computer Science & Mathematics graduate (North-West University, NQF 7) building
            <span className="text-foreground"> secure, intelligent, data-driven systems</span> —
            from biometric IAM platforms to LLM automation, network audits, and AI risk & compliance layers.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" onClick={scrollToHash("#projects")} className="cursor-pointer rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground glow-cyber hover:brightness-110 transition-all">
              Explore Projects →
            </a>
            <a href="#contact" onClick={scrollToHash("#contact")} className="cursor-pointer rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold hover:border-primary transition-colors">
              Hire me
            </a>
            <a href={cvAsset.url} download="Sandile_Khoza_CV.pdf" target="_blank" rel="noreferrer" className="cursor-pointer rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold hover:border-accent transition-colors">
              ⬇ CV (PDF)
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.l} className="rounded-lg border border-border bg-card/50 p-4 backdrop-blur">
                <div className="font-display text-3xl font-bold text-gradient-cyber">{s.n}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl" />
          <div className="relative float-slow">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary via-accent to-primary opacity-70 blur" />
            <img
              src={sandilePhoto.url}
              alt="Portrait of Bongimusa Sandile Khoza"
              className="relative h-[420px] w-[320px] rounded-3xl object-cover border border-border shadow-[var(--shadow-signal)]"
              width={320} height={420}
            />
            <div className="absolute -bottom-4 -left-6 rounded-lg border border-border bg-card px-4 py-3 font-mono text-xs shadow-[var(--shadow-card)]">
              <div className="text-primary">$ whoami</div>
              <div className="text-foreground">sandile.khoza</div>
              <div className="text-muted-foreground">CS · Math · NWU '25</div>
            </div>
            <div className="absolute -top-4 -right-6 rounded-lg border border-border bg-card px-4 py-3 font-mono text-xs shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-2 text-accent">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                secure_channel
              </div>
              <div className="text-muted-foreground">TLS 1.3 · POPIA · NIST</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FocusStrip() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="mx-auto grid max-w-7xl gap-px bg-border/50 sm:grid-cols-2 lg:grid-cols-5">
        {FOCUS.map((f) => (
          <div key={f.k} className="group bg-background p-6 transition-colors hover:bg-card">
            <div className="font-mono text-xs text-primary">// domain</div>
            <div className="mt-1 font-display text-xl font-semibold group-hover:text-gradient-cyber transition-all">{f.k}</div>
            <div className="mt-2 text-sm text-muted-foreground">{f.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader index="01" title="About" caption="whoami --verbose" />
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I grew up in <span className="text-foreground">Cunningmore B Trust, Bushbuckridge (Mpumalanga)</span> — a place where technology wasn't handed out, it was chosen. I chose <span className="text-foreground">BSc Computer Science & Mathematics at North-West University</span> without fully knowing the road, and the road became my discipline.
          </p>
          <p>
            Today I build <span className="text-primary">security-first AI systems</span>: DeepFace biometric verification for ride safety, LLM-powered automation with hardened system prompts, AI-driven complaint routing with audit trails, and enterprise networks with DHCP snooping and root-cause failure analysis.
          </p>
          <p>
            My work sits where <span className="text-foreground">cybersecurity, AI, data and IT risk</span> converge — because that's where modern enterprises actually operate, and where recruiters are hunting for graduates who ship, not just study.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-card p-6 font-mono text-sm shadow-[var(--shadow-card)]">
          <div className="flex items-center gap-1.5 border-b border-border pb-3">
            <span className="h-3 w-3 rounded-full bg-destructive" />
            <span className="h-3 w-3 rounded-full bg-risk" />
            <span className="h-3 w-3 rounded-full bg-primary" />
            <span className="ml-2 text-xs text-muted-foreground">profile.sh</span>
          </div>
          <div className="mt-4 space-y-2">
            <Row k="name" v="Bongimusa Sandile Khoza" />
            <Row k="location" v="Tembisa, Gauteng · relocatable" />
            <Row k="degree" v="BSc CS & Mathematics · NQF 7" />
            <Row k="uni" v="North-West University" />
            <Row k="status" v="Immediately available" color="primary" />
            <Row k="citizenship" v="South African" />
            <Row k="licence" v="Code 10 (C1)" />
            <Row k="languages" v="EN · Xitsonga · IsiZulu" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v, color }: { k: string; v: string; color?: string }) {
  return (
    <div className="flex gap-3">
      <span className="w-24 shrink-0 text-muted-foreground">{k}</span>
      <span className="text-primary">=</span>
      <span className={color === "primary" ? "text-primary" : "text-foreground"}>"{v}"</span>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-card/20">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader index="02" title="Selected Work" caption="ls -la ~/projects" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article key={p.name} className="group relative overflow-hidden rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/50 hover:shadow-[var(--shadow-signal)]">
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: "radial-gradient(400px circle at 50% 0%, oklch(0.82 0.18 155 / 0.08), transparent 70%)" }} />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-mono text-xs text-primary">{p.tag}</div>
                    <h3 className="mt-1 font-display text-2xl font-bold">{p.name}</h3>
                    <p className="text-sm text-muted-foreground">{p.sub}</p>
                  </div>
                  {p.live && (
                    <span className="flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 font-mono text-[10px] text-primary">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> LIVE
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {p.metrics.map(([k, v]) => (
                    <div key={k} className="rounded-md border border-border bg-card p-2">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{k}</div>
                      <div className="font-mono text-xs text-foreground">{v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded border border-border bg-secondary px-2 py-0.5 font-mono text-[10px] text-secondary-foreground">{s}</span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3 text-sm">
                  {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="text-primary hover:underline">→ Live demo</a>}
                  {p.code && <a href={p.code} target="_blank" rel="noreferrer" className="text-accent hover:underline">→ Source code</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader index="03" title="Stack & Capabilities" caption="cat skills.json" />
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {Object.entries(SKILLS).map(([group, items]) => (
          <div key={group} className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">{group}</h3>
              <span className="font-mono text-xs text-muted-foreground">[{items.length}]</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground hover:border-primary hover:text-primary transition-colors">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Certs() {
  return (
    <section id="certs" className="border-t border-border bg-card/20">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeader index="04" title="Certifications" caption="./certifications --list" />
        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {CERTS.map(([name, issuer, date]) => (
            <div key={name} className="flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/60">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">✓</div>
              <div className="flex-1">
                <div className="font-medium">{name}</div>
                <div className="text-xs text-muted-foreground">{issuer}</div>
              </div>
              <div className="font-mono text-xs text-muted-foreground">{date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader index="05" title="Get in touch" caption="init contact.sh" />
      <div className="mt-12 grid gap-8 rounded-2xl border border-border bg-card p-8 md:p-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h3 className="font-display text-3xl font-bold">Let's build something <span className="text-gradient-cyber">secure</span>.</h3>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Open to roles in <span className="text-foreground">cybersecurity, AI/ML engineering, data analytics, IT risk & compliance, QA, and graduate programmes</span> — on-site in Gauteng, hybrid, remote, or with relocation.
          </p>
          <div className="mt-6 grid gap-3 font-mono text-sm">
            <ContactRow label="email" value="bongimusa.khoza@outlook.com" href="mailto:bongimusa.khoza@outlook.com" />
            <ContactRow label="phone" value="+27 76 602 6847" href="tel:+27766026847" />
            <ContactRow label="linkedin" value="linkedin.com/in/bongimusa-khoza" href="https://linkedin.com/in/bongimusa-khoza-7661aa396" />
            <ContactRow label="github" value="github.com/SANDILE19991111" href="https://github.com/SANDILE19991111" />
            <ContactRow label="location" value="Tembisa, Gauteng, South Africa" />
          </div>
        </div>
        <div className="rounded-xl border border-border bg-background p-6">
          <div className="font-mono text-xs text-primary">// quick_actions</div>
          <div className="mt-4 space-y-3">
            <a href={cvAsset.url} download className="block w-full rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground glow-cyber hover:brightness-110 transition-all">
              ⬇ Download Full CV (PDF)
            </a>
            <a href="mailto:bongimusa.khoza@outlook.com" className="block w-full rounded-md border border-border bg-card px-4 py-3 text-center text-sm font-semibold hover:border-accent transition-colors">
              ✉ Email me directly
            </a>
            <a href="https://linkedin.com/in/bongimusa-khoza-7661aa396" target="_blank" rel="noreferrer" className="block w-full rounded-md border border-border bg-card px-4 py-3 text-center text-sm font-semibold hover:border-accent transition-colors">
              in Connect on LinkedIn
            </a>
          </div>
          <div className="mt-6 rounded-md border border-border bg-secondary/50 p-3 font-mono text-xs text-muted-foreground">
            <div className="text-primary">status:</div>
            available · immediate start · relocation OK
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = <span className="text-foreground hover:text-primary transition-colors">{value}</span>;
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="w-20 text-muted-foreground">{label}</span>
      <span className="text-primary">→</span>
      {href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a> : inner}
    </div>
  );
}

function SectionHeader({ index, title, caption }: { index: string; title: string; caption: string }) {
  return (
    <div className="flex flex-col gap-2 border-l-2 border-primary pl-4">
      <span className="font-mono text-xs text-primary">{index} / {caption}</span>
      <h2 className="font-display text-4xl font-bold sm:text-5xl">{title}</h2>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-xs text-muted-foreground sm:flex-row">
        <div>© 2026 Bongimusa Sandile Khoza · From Cunningmore B Trust to the cloud.</div>
        <div className="flex gap-4">
          <a href="https://github.com/SANDILE19991111" target="_blank" rel="noreferrer" className="hover:text-primary">github</a>
          <a href="https://linkedin.com/in/bongimusa-khoza-7661aa396" target="_blank" rel="noreferrer" className="hover:text-primary">linkedin</a>
          <a href={cvAsset.url} download className="hover:text-primary">cv.pdf</a>
        </div>
      </div>
    </footer>
  );
}

/* ────────────── Live animated background ──────────────
   Perf-optimized:
   • Respects prefers-reduced-motion (renders a single static gradient)
   • Detects low-end / mobile devices and downsizes work
   • DPR capped, canvases sized with CSS + backing store
   • Pauses when tab hidden (visibilitychange)
   • Frame-rate throttled (~30fps mobile / 45fps desktop)
   • No shadowBlur (major GPU cost) — uses radial gradients / additive fills instead
   • `contain: strict` + will-change hints prevent layout jank on the page
*/

type Perf = { reduced: boolean; low: boolean; dpr: number; fps: number };

/* ── Debug perf bus ─────────────────────────────
   Each animated canvas reports per-frame render time + drops here.
   PerfPanel subscribes and renders when debug mode is on
   (URL contains ?debug=perf, or localStorage.bgDebug === "1"). */
type LayerStats = { fps: number; render: number; drops: number; frames: number };
type PerfSnapshot = Record<string, LayerStats>;
const perfBus = {
  raw: {} as Record<string, { times: number[]; renders: number[]; drops: number; frames: number }>,
  report(layer: string, renderMs: number, dropped: boolean) {
    const s = (this.raw[layer] ||= { times: [], renders: [], drops: 0, frames: 0 });
    const now = performance.now();
    s.times.push(now);
    s.renders.push(renderMs);
    s.frames++;
    if (dropped) s.drops++;
    while (s.times.length > 0 && now - s.times[0] > 1000) {
      s.times.shift();
      s.renders.shift();
    }
  },
  snapshot(): PerfSnapshot {
    const out: PerfSnapshot = {};
    for (const [k, s] of Object.entries(this.raw)) {
      const avg = s.renders.length ? s.renders.reduce((a, b) => a + b, 0) / s.renders.length : 0;
      out[k] = { fps: s.times.length, render: avg, drops: s.drops, frames: s.frames };
    }
    return out;
  },
};

function useDebugMode() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const check = () => {
      const url = new URLSearchParams(window.location.search);
      setOn(url.get("debug") === "perf" || window.localStorage.getItem("bgDebug") === "1");
    };
    check();
    window.addEventListener("storage", check);
    return () => window.removeEventListener("storage", check);
  }, []);
  return on;
}

function usePerfProfile(): Perf {
  const [p, setP] = useState<Perf>({ reduced: false, low: false, dpr: 1, fps: 45 });
  useEffect(() => {
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cores = (navigator.hardwareConcurrency ?? 4);
    // deviceMemory is Chromium-only, safe fallback
    const mem = (navigator as unknown as { deviceMemory?: number }).deviceMemory ?? 4;
    const small = window.innerWidth < 900;
    const low = small || cores <= 4 || mem <= 4;
    const dpr = Math.min(window.devicePixelRatio || 1, low ? 1 : 1.5);
    setP({ reduced: mqReduced.matches, low, dpr, fps: low ? 30 : 45 });
    const on = () => setP((s) => ({ ...s, reduced: mqReduced.matches }));
    mqReduced.addEventListener("change", on);
    return () => mqReduced.removeEventListener("change", on);
  }, []);
  return p;
}

function LiveBackground() {
  const perf = usePerfProfile();
  const debug = useDebugMode();
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ contain: "strict" }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, oklch(0.22 0.06 250 / 0.6), transparent 60%), radial-gradient(ellipse at 80% 80%, oklch(0.2 0.08 155 / 0.35), transparent 60%)",
        }}
      />
      {!perf.reduced && (
        <>
          {!perf.low && <CodeRainCanvas perf={perf} />}
          <NetworkCanvas perf={perf} />
          {!perf.low && <CodeStreamOverlay />}
        </>
      )}
      <div className="absolute inset-0 bg-background/55" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, oklch(0.15 0.02 250 / 0.4) 40%, oklch(0.15 0.02 250 / 0.85) 100%)",
        }}
      />
      {debug && <PerfPanel perf={perf} />}
    </div>
  );
}

function PerfPanel({ perf }: { perf: Perf }) {
  const [snap, setSnap] = useState<PerfSnapshot>({});
  useEffect(() => {
    const id = window.setInterval(() => setSnap(perfBus.snapshot()), 500);
    return () => window.clearInterval(id);
  }, []);
  const layers = Object.entries(snap);
  const budget = 1000 / perf.fps;
  return (
    <div
      className="pointer-events-auto fixed bottom-3 right-3 z-50 min-w-[240px] rounded-md border border-primary/40 bg-background/90 p-3 font-mono text-[11px] text-primary shadow-lg backdrop-blur"
      style={{ contain: "content" }}
    >
      <div className="mb-2 flex items-center justify-between gap-2 border-b border-primary/20 pb-1">
        <span className="font-semibold">bg.debug</span>
        <span className="text-muted-foreground">
          {perf.reduced ? "reduced" : perf.low ? "low" : "hi"} · dpr{perf.dpr} · {perf.fps}fps
        </span>
      </div>
      {layers.length === 0 && <div className="text-muted-foreground">waiting for frames…</div>}
      {layers.map(([name, s]) => {
        const over = s.render > budget;
        return (
          <div key={name} className="py-0.5">
            <span className="text-accent">{name}</span>{" "}
            <span className={over ? "text-destructive" : "text-foreground"}>
              {s.fps.toString().padStart(2, " ")}fps · {s.render.toFixed(2)}ms · drops {s.drops} · f{s.frames}
            </span>
          </div>
        );
      })}
      <div className="mt-2 text-[10px] text-muted-foreground">
        toggle: localStorage.bgDebug = "1" · ?debug=perf
      </div>
    </div>
  );
}

function CodeRainCanvas({ perf }: { perf: Perf }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    let W = 0, H = 0, cols = 0, drops: number[] = [];
    const FS = 16;
    const CHARS = "01アイウエオカサタ{}[]<>=const let async fn 200 401 500 SELECT JOIN".split("");
    const resize = () => {
      const cssW = window.innerWidth;
      const cssH = window.innerHeight;
      W = cssW; H = cssH;
      canvas.style.width = cssW + "px";
      canvas.style.height = cssH + "px";
      canvas.width = Math.floor(cssW * perf.dpr);
      canvas.height = Math.floor(cssH * perf.dpr);
      ctx.setTransform(perf.dpr, 0, 0, perf.dpr, 0, 0);
      cols = Math.ceil(W / FS);
      drops = Array.from({ length: cols }, () => Math.random() * -H / FS);
    };
    resize();
    let rt: number | undefined;
    const onResize = () => { clearTimeout(rt); rt = window.setTimeout(resize, 200); };
    window.addEventListener("resize", onResize);

    let raf = 0;
    let last = 0;
    const frameMs = 1000 / perf.fps;
    let running = !document.hidden;
    const onVis = () => {
      running = !document.hidden;
      if (running) { last = 0; raf = requestAnimationFrame(draw); }
      else cancelAnimationFrame(raf);
    };
    document.addEventListener("visibilitychange", onVis);

    const draw = (now = 0) => {
      if (!running) return;
      if (now - last < frameMs) { raf = requestAnimationFrame(draw); return; }
      const dropped = last !== 0 && now - last > frameMs * 2;
      last = now;
      const t0 = performance.now();
      ctx.fillStyle = "oklch(0.15 0.02 250 / 0.1)";
      ctx.fillRect(0, 0, W, H);
      ctx.font = `${FS}px JetBrains Mono, monospace`;
      ctx.fillStyle = "oklch(0.82 0.18 155 / 0.85)";
      for (let i = 0; i < drops.length; i++) {
        const y = drops[i] * FS;
        const ch = CHARS[(Math.random() * CHARS.length) | 0];
        ctx.fillText(ch, i * FS, y);
        if (y > H && Math.random() > 0.975) drops[i] = Math.random() * -20;
        drops[i] += 0.6;
      }
      perfBus.report("rain", performance.now() - t0, dropped);
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
      clearTimeout(rt);
    };
  }, [perf.dpr, perf.fps]);
  return <canvas ref={ref} className="absolute inset-0 opacity-20" style={{ willChange: "contents" }} />;
}

function NetworkCanvas({ perf }: { perf: Perf }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    let W = 0, H = 0;
    type Node = { x: number; y: number; vx: number; vy: number; r: number; c: string };
    let nodes: Node[] = [];
    type Pkt = { from: number; to: number; t: number; speed: number; color: string };
    let pkts: Pkt[] = [];
    const palette = ["oklch(0.82 0.18 155)", "oklch(0.72 0.18 220)", "oklch(0.75 0.19 55)"];
    const resize = () => {
      const cssW = window.innerWidth;
      const cssH = window.innerHeight;
      W = cssW; H = cssH;
      canvas.style.width = cssW + "px";
      canvas.style.height = cssH + "px";
      canvas.width = Math.floor(cssW * perf.dpr);
      canvas.height = Math.floor(cssH * perf.dpr);
      ctx.setTransform(perf.dpr, 0, 0, perf.dpr, 0, 0);
      const cap = perf.low ? 14 : 26;
      const count = Math.min(cap, Math.floor((W * H) / (perf.low ? 90000 : 60000)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: 2 + Math.random() * 2,
        c: palette[(Math.random() * palette.length) | 0],
      }));
      pkts = [];
    };
    resize();
    let rt: number | undefined;
    const onResize = () => { clearTimeout(rt); rt = window.setTimeout(resize, 200); };
    window.addEventListener("resize", onResize);

    const LINK_DIST = perf.low ? 140 : 180;
    const MAX_PKTS = perf.low ? 8 : 16;
    let raf = 0;
    let last = 0;
    const frameMs = 1000 / perf.fps;
    let running = !document.hidden;
    const onVis = () => {
      running = !document.hidden;
      if (running) { last = 0; raf = requestAnimationFrame(draw); }
      else cancelAnimationFrame(raf);
    };
    document.addEventListener("visibilitychange", onVis);

    const spawnPkt = () => {
      if (nodes.length < 2 || pkts.length >= MAX_PKTS) return;
      const from = (Math.random() * nodes.length) | 0;
      let to = (Math.random() * nodes.length) | 0;
      if (to === from) to = (to + 1) % nodes.length;
      const a = nodes[from], b = nodes[to];
      const dx = a.x - b.x, dy = a.y - b.y;
      if (dx * dx + dy * dy > (LINK_DIST * 1.4) * (LINK_DIST * 1.4)) return;
      pkts.push({ from, to, t: 0, speed: 0.008 + Math.random() * 0.012, color: palette[(Math.random() * palette.length) | 0] });
    };

    const draw = (now = 0) => {
      if (!running) return;
      if (now - last < frameMs) { raf = requestAnimationFrame(draw); return; }
      const dropped = last !== 0 && now - last > frameMs * 2;
      last = now;
      const t0 = performance.now();
      ctx.clearRect(0, 0, W, H);
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      }
      // links — single beginPath batching
      const linkLim = LINK_DIST * LINK_DIST;
      ctx.lineWidth = 1;
      ctx.strokeStyle = "oklch(0.72 0.18 220 / 0.16)";
      ctx.beginPath();
      for (let i = 0; i < nodes.length; i++) {
        const ni = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const nj = nodes[j];
          const dx = ni.x - nj.x, dy = ni.y - nj.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < linkLim) {
            ctx.moveTo(ni.x, ni.y);
            ctx.lineTo(nj.x, nj.y);
          }
        }
      }
      ctx.stroke();
      // packets
      for (const p of pkts) {
        p.t += p.speed;
        const a = nodes[p.from], b = nodes[p.to];
        if (!a || !b) continue;
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(x, y, 2.5, 0, Math.PI * 2); ctx.fill();
      }
      pkts = pkts.filter((p) => p.t < 1);
      if (Math.random() < 0.2) spawnPkt();
      // nodes (no shadowBlur, cheap outer ring)
      for (const n of nodes) {
        ctx.fillStyle = n.c;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
      }
      perfBus.report("net", performance.now() - t0, dropped);
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
      clearTimeout(rt);
    };
  }, [perf.dpr, perf.fps, perf.low]);
  return <canvas ref={ref} className="absolute inset-0 opacity-50" style={{ willChange: "contents" }} />;
}

function CodeStreamOverlay() {
  const snippets = [
    "$ nmap -sV 10.0.0.0/24",
    "SELECT id, risk_score FROM audits WHERE severity='HIGH';",
    "const model = await deepface.verify(imgA, imgB);",
    "app.use(rbac({ roles: ['admin','doctor','nurse'] }));",
    "iptables -A INPUT -p tcp --dport 22 -j DROP",
    "df = pd.read_csv('incidents.csv').groupby('dept').sum()",
    "vlan 20 → interface g0/1.20 · encapsulation dot1Q 20",
    "POST /api/verify → 200 OK · confidence: 0.94",
    "kmeans = KMeans(n_clusters=3).fit(X_scaled)",
    "await groq.chat.completions.create({ model: 'llama-3.3-70b' })",
    "ALTER TABLE users ADD CONSTRAINT pk PRIMARY KEY (id);",
    "openssl req -x509 -newkey rsa:4096 -keyout key.pem",
    "risk_score = likelihood * impact  # NIST 800-30",
    "docker run -d --name saferide -p 8501:8501 app:latest",
  ];
  return (
    <div className="absolute inset-0 overflow-hidden font-mono text-[11px] leading-relaxed">
      <div
        className="absolute left-0 top-0 h-[300%] w-full space-y-3 px-6 text-primary/40"
        style={{
          animation: "stream 60s linear infinite",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        {[...snippets, ...snippets, ...snippets].map((s, i) => (
          <div key={i} className="whitespace-nowrap">
            <span className="text-accent/50">→</span> {s}
          </div>
        ))}
      </div>
      <style>{`@keyframes stream { 0%{transform:translate3d(0,0,0)} 100%{transform:translate3d(0,-66%,0)} }`}</style>
    </div>
  );
}

