import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import profilePic from "@/assets/profile-placeholder.jpg";
import { Nav } from "@/components/portfolio/Nav";
import { Particles } from "@/components/portfolio/Particles";
import { Typewriter } from "@/components/portfolio/Typewriter";
import { ProjectModal } from "@/components/portfolio/ProjectModal";
import { useReveal } from "@/hooks/use-reveal";
import { Mail, MapPin, Linkedin, ArrowRight, Briefcase, GraduationCap, Award, Send } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kirk Ludwig Galura — AI Automation Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Kirk Ludwig Galura — AI Automation Specialist building RAG pipelines, AI agents, and workflow systems using n8n, Pinecone, and OpenAI.",
      },
      { property: "og:title", content: "Kirk Ludwig Galura — AI Automation Specialist" },
      {
        property: "og:description",
        content:
          "Portfolio of Kirk Ludwig Galura — AI Automation Specialist building RAG pipelines, AI agents, and workflow systems using n8n, Pinecone, and OpenAI.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const experience = [
  {
    company: "Unleashed PEAK",
    role: "Automation Specialist",
    period: "2025–2026",
    location: "UK (Remote)",
    description:
      "Built an AI-powered YouTube transcript ingestion pipeline, Graph RAG pre-processing workflows, dynamic Pinecone retrieval systems, and a grounded OpenAI Tools Agent — enabling a client to process 1,000+ documents with zero manual intervention.",
  },
  {
    company: "Scale Ops",
    role: "Automation Specialist",
    period: "2024–2025",
    location: "USA (Remote)",
    description:
      "Led automation across HR, sales, and operations using n8n, Airtable, and Go High Level — standardizing 10+ workflows and reducing per-process manual effort by 60–70%.",
  },
  {
    company: "Get Ninja",
    role: "Automation Specialist",
    period: "2023–2024",
    location: "Remote",
    description:
      "Engineered no-code/low-code automation workflows across multiple industries, reducing task creation time by 80%+ through trigger-based systems and CRM pipeline design.",
  },
];

const skillGroups = [
  { label: "Automation Platforms", items: ["n8n", "Make.com", "Zapier", "Go High Level"] },
  { label: "AI & RAG", items: ["RAG Pipelines", "Graph RAG", "OpenAI API", "Anthropic Claude", "Prompt Engineering"] },
  { label: "Databases & Vector Search", items: ["Pinecone", "Supabase", "PostgreSQL", "Airtable"] },
  { label: "Integrations & APIs", items: ["REST APIs", "Webhooks", "Gmail", "Google Sheets", "Slack", "Calendly", "Apify"] },
  { label: "Dev Tools", items: ["JavaScript", "JSON", "Claude Code", "Error Handling", "SOP Documentation"] },
  { label: "Other", items: ["VAPI", "ClickUp", "Notion", "CRM Design", "BPA"] },
];

const projects = [
  {
    title: "RAG Agent & AI Knowledge Retrieval System",
    tags: ["n8n", "Pinecone", "OpenAI", "Graph RAG"],
    description:
      "Built a full RAG system that lets users query a large knowledge base conversationally. Includes Graph RAG pre-processing, alias normalization, and a grounded Tools Agent that answers strictly from retrieved content.",
  },
  {
    title: "AI Ingest Pipeline",
    tags: ["n8n", "OpenAI API", "Apify", "PostgreSQL"],
    description:
      "Automated end-to-end ingestion of 1,000+ documents — collecting, cleaning, extracting metadata, and routing structured outputs for downstream AI use with zero manual intervention.",
  },
  {
    title: "AI Pre-Processing & Pinecone Integration",
    tags: ["n8n", "Pinecone", "OpenAI Embeddings"],
    description:
      "Built a chunking, embedding, and vector storage pipeline that transformed a raw document library into a semantically searchable AI knowledge base.",
  },
  {
    title: "Supabase Metadata & Structured Data Layer",
    tags: ["n8n", "Supabase", "PostgreSQL"],
    description:
      "Designed a structured metadata layer alongside Pinecone for full pipeline observability — tracking every document's processing status, entity mappings, and audit trail.",
  },
  {
    title: "VAPI x Supabase — AI Voice Agent Integration",
    tags: ["VAPI", "Supabase", "n8n", "Webhooks"],
    description:
      "Connected a VAPI voice AI to a live Supabase backend, enabling dynamic real-time data lookup during calls and automated write-back of call outcomes to CRM.",
  },
  {
    title: "Lead Generation Automation with Apify",
    tags: ["n8n", "Apify", "Go High Level", "Airtable"],
    description:
      "Built a fully automated lead sourcing pipeline — scraping, cleaning, enriching, and delivering qualified leads directly into CRM on a set schedule with no manual steps.",
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Portfolio() {
  useReveal();
  const [modal, setModal] = useState<string | null>(null);

  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-grid pt-32 pb-24 md:pt-40 md:pb-32">
        <Particles />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for new projects
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            <span className="text-gradient">Kirk Ludwig Galura</span>
          </h1>
          <p className="mt-5 min-h-[3.5rem] text-lg font-medium text-foreground/90 md:text-2xl">
            <Typewriter
              phrases={[
                "AI Automation Specialist",
                "Workflow Engineer",
                "RAG & Data Pipeline Architect",
              ]}
            />
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I design and build AI-powered automation systems for US and UK-based businesses — from
            data ingestion pipelines and RAG agents to CRM workflows and voice AI integrations.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition hover:bg-primary/90"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition hover:bg-surface"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="01" title="About Me">
        <div className="grid items-center gap-12 md:grid-cols-[280px_1fr]">
          <div className="reveal mx-auto h-56 w-56 overflow-hidden rounded-full border border-border bg-surface p-1 md:mx-0">
            <img src={profilePic} alt="Kirk" width={512} height={512} loading="lazy" className="h-full w-full rounded-full object-cover" />
          </div>
          <div className="reveal space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              I'm an AI Automation Specialist with 3+ years of experience building end-to-end
              workflow systems for US and UK-based clients. My work sits at the intersection of n8n,
              large language models, and real business problems — from RAG knowledge retrieval
              agents and vector database pipelines to CRM automations and AI voice integrations.
            </p>
            <p>
              I don't just connect tools. I architect systems that are reliable, scalable, and built
              to run without hand-holding.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 text-sm text-foreground/90">
              <a href="mailto:galurakirk@gmail.com" className="inline-flex items-center gap-2 hover:text-primary-glow">
                <Mail className="h-4 w-4" /> galurakirk@gmail.com
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Bacolor, Pampanga, Philippines
              </span>
              <a
                href="https://linkedin.com/in/kirk-galura-19a820236"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary-glow"
              >
                <Linkedin className="h-4 w-4" /> linkedin.com/in/kirk-galura-19a820236
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section id="experience" eyebrow="02" title="Experience">
        <ol className="relative ml-3 border-l border-border md:ml-6">
          {experience.map((e) => (
            <li key={e.company} className="reveal relative mb-10 pl-8 last:mb-0 md:pl-12">
              <span className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background">
                <Briefcase className="h-2.5 w-2.5 text-primary-foreground" />
              </span>
              <div className="rounded-xl border border-border bg-surface p-6 transition hover:border-primary/40 hover:bg-surface-elevated">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{e.company}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
                </div>
                <p className="mt-1 text-sm text-primary-glow">
                  {e.role} · <span className="text-muted-foreground">{e.location}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="03" title="Skills & Technologies">
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((g) => (
            <div
              key={g.label}
              className="reveal rounded-xl border border-border bg-surface p-6 transition hover:border-primary/40"
            >
              <h3 className="mb-4 font-display text-sm uppercase tracking-wider text-primary-glow">
                {g.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-background/50 px-3 py-1.5 font-mono text-xs text-foreground/90"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" eyebrow="04" title="Education">
        <div className="reveal rounded-xl border border-border bg-surface p-8">
          <div className="flex items-start gap-5">
            <div className="rounded-lg bg-primary/15 p-3 text-primary-glow">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Bachelor of Science in Business Administration</h3>
              <p className="text-sm text-primary-glow">Major in Management & Entrepreneurship</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Angeles University Foundation · 2021–2024 · Angeles City, Philippines
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CERTIFICATES */}
      <Section id="certificates" eyebrow="05" title="Certificates & Credentials">
        <div className="grid gap-5 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="reveal rounded-xl border border-border bg-surface p-6 transition hover:border-primary/40 hover:bg-surface-elevated"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/15 p-2 text-primary-glow">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold">Certificate Name</h3>
              <p className="mt-1 text-sm text-muted-foreground">Issuing Organization</p>
              <p className="mt-3 font-mono text-xs text-muted-foreground">Date</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="06" title="Recent Projects">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="reveal group flex flex-col rounded-xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-primary/50 hover:bg-surface-elevated"
            >
              <h3 className="text-base font-semibold leading-snug">{p.title}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary-glow"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <button
                onClick={() => setModal(p.title)}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary-glow transition group-hover:gap-2.5"
              >
                View Case Study <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </article>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="07" title="Let's Work Together">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="reveal">
            <p className="text-lg text-muted-foreground">
              Open to freelance projects and full-time roles.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:galurakirk@gmail.com"
                className="inline-flex items-center gap-3 rounded-lg border border-border bg-surface px-5 py-4 transition hover:border-primary/40 hover:bg-surface-elevated"
              >
                <Mail className="h-5 w-5 text-primary-glow" />
                <span className="text-sm font-medium">galurakirk@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/kirk-galura-19a820236"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-lg border border-border bg-surface px-5 py-4 transition hover:border-primary/40 hover:bg-surface-elevated"
              >
                <Linkedin className="h-5 w-5 text-primary-glow" />
                <span className="text-sm font-medium">linkedin.com/in/kirk-galura-19a820236</span>
              </a>
            </div>
          </div>
          <form
            className="reveal space-y-4 rounded-xl border border-border bg-surface p-6"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
              const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
              window.location.href = `mailto:galurakirk@gmail.com?subject=${subject}&body=${body}`;
            }}
          >
            <Field name="name" label="Name" type="text" />
            <Field name="email" label="Email" type="email" />
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90"
            >
              Send <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-surface/40">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
          <div>
            <p className="font-display text-sm font-semibold">Kirk Ludwig Galura</p>
            <p className="text-xs text-muted-foreground">AI Automation Specialist</p>
          </div>
          <ul className="flex flex-wrap items-center gap-5 text-xs text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground">{l.label}</a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground">© 2026 Kirk Ludwig Galura</p>
        </div>
      </footer>

      <ProjectModal open={!!modal} onClose={() => setModal(null)} title={modal ?? ""} />
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-28">
      <div className="reveal mb-12 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary-glow">
            / {eyebrow}
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        </div>
        <div className="hidden h-px flex-1 bg-gradient-to-r from-border to-transparent md:block" />
      </div>
      {children}
    </section>
  );
}

function Field({ name, label, type }: { name: string; label: string; type: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
      />
    </div>
  );
}
