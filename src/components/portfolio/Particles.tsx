import { useEffect, useState } from "react";

type Dot = { size: number; left: number; top: number; delay: number; duration: number };

export function Particles() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    setDots(
      Array.from({ length: 28 }, () => ({
        size: 2 + Math.random() * 4,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 14 + Math.random() * 14,
      })),
    );
  }, []);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-primary-glow/40 blur-[1px]"
          style={{
            width: d.size,
            height: d.size,
            left: `${d.left}%`,
            top: `${d.top}%`,
            animation: `float ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
    </div>
  );
}
