export function Particles() {
  const dots = Array.from({ length: 28 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const size = 2 + Math.random() * 4;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = 14 + Math.random() * 14;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-primary-glow/40 blur-[1px]"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              animation: `float ${duration}s ease-in-out ${delay}s infinite`,
            }}
          />
        );
      })}
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
    </div>
  );
}
