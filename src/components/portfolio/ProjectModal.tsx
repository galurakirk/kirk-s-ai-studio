import { useEffect } from "react";

export type Project = {
  title: string;
  tags: string[];
  description: string;
  image: string;
  caseStudy: {
    problem: string;
    built: string;
    result: string;
  };
};

export function ProjectModal({
  open,
  onClose,
  project,
}: {
  open: boolean;
  onClose: () => void;
  project: Project | null;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open || !project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-background/80 px-4 py-10 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl rounded-2xl border border-border bg-surface-elevated shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-4 md:px-8">
          <div>
            <h3 className="text-xl font-semibold leading-snug md:text-2xl">{project.title}</h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary-glow"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 rounded-md border border-border px-2.5 py-1 text-sm text-muted-foreground hover:text-foreground"
          >
            Close
          </button>
        </div>

        <div className="px-6 py-6 md:px-8">
          <div className="overflow-hidden rounded-xl border border-border bg-background">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              className="block w-full h-auto"
            />
          </div>

          <div className="mt-8 space-y-8">
            <CaseSection label="The Problem" body={project.caseStudy.problem} />
            <CaseSection label="What I Built" body={project.caseStudy.built} />
            <CaseSection label="The Result" body={project.caseStudy.result} />
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseSection({ label, body }: { label: string; body: string }) {
  return (
    <section>
      <h4 className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary-glow">
        {label}
      </h4>
      <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">{body}</p>
    </section>
  );
}
