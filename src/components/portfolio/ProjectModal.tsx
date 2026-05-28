import { useEffect } from "react";

export function ProjectModal({ open, onClose, title }: { open: boolean; onClose: () => void; title: string }) {
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

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 px-4 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl border border-border bg-surface-elevated p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-md border border-border px-2 py-1 text-sm text-muted-foreground hover:text-foreground"
          >
            Close
          </button>
        </div>
        <div className="mt-6 rounded-xl border border-dashed border-border bg-surface p-10 text-center text-muted-foreground">
          Case study coming soon
        </div>
      </div>
    </div>
  );
}
