import { useEffect, useState } from "react";

export function Typewriter({ phrases, speed = 55, pause = 1400 }: { phrases: string[]; speed?: number; pause?: number }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[i % phrases.length];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text === current) {
      t = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((p) => p + 1);
    } else {
      t = setTimeout(
        () => setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
        deleting ? speed / 2 : speed,
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, i, phrases, speed, pause]);

  return (
    <span>
      {text}
      <span className="ml-0.5 inline-block w-[2px] bg-primary-glow align-middle animate-blink" style={{ height: "0.9em" }} />
    </span>
  );
}
