import { useEffect, useState } from "react";

const COLORS = ["#2F5495", "#E7C46A", "#4B78C7", "#F5F7FA", "#D4AF37"];

export function Confetti({ show, count = 80 }: { show: boolean; count?: number }) {
  const [pieces, setPieces] = useState<{ id: number; left: number; delay: number; color: string; size: number; duration: number }[]>([]);

  useEffect(() => {
    if (!show) return;
    setPieces(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.6,
        color: COLORS[i % COLORS.length],
        size: 6 + Math.random() * 8,
        duration: 2.5 + Math.random() * 1.8,
      })),
    );
  }, [show, count]);

  if (!show) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.left}%`,
            top: "-5vh",
            width: p.size,
            height: p.size * 0.4,
            background: p.color,
            borderRadius: 2,
            animation: `confetti-fall ${p.duration}s linear ${p.delay}s forwards`,
          }}
        />
      ))}
    </div>
  );
}
