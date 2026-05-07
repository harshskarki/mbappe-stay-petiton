import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import stayStamp from "@/assets/stay-stamp.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MbappeSTAY — Sign the Petition" },
      { name: "description", content: "Madridistas who believe. Sign the petition to keep Mbappé at Real Madrid." },
      { property: "og:title", content: "MbappeSTAY — Sign the Petition" },
      { property: "og:description", content: "Stand with Kylian. Hala Madrid." },
    ],
  }),
  component: Index,
});

function Index() {
  const goal = 25000000;
  const [count, setCount] = useState(19400285);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setCount((c) => c + Math.floor(Math.random() * 5) + 1), 2000);
    return () => clearInterval(id);
  }, []);

  const pct = Math.min(100, (count / goal) * 100).toFixed(2);

  return (
    <main className="min-h-screen text-foreground" style={{ background: "var(--gradient-bg)" }}>
      <div className="h-1 w-full" style={{ background: "var(--gradient-red)" }} />
      <header className="py-8 text-center">
        <h1 className="text-sm font-bold tracking-[0.4em] text-muted-foreground">
          MBAPPE<span style={{ color: "var(--brand-red)" }}>STAY</span>
        </h1>
      </header>

      <section className="mx-auto flex max-w-2xl flex-col items-center px-6 pb-20">
        <img
          src={stayStamp}
          alt="STAY stamp"
          width={768}
          height={896}
          className="w-full max-w-md drop-shadow-[0_0_60px_rgba(34,197,94,0.45)]"
        />

        <blockquote
          className="mt-12 border-l-4 pl-6 text-lg italic text-muted-foreground"
          style={{ borderColor: "var(--brand-red)" }}
        >
          Madridistas, make your voice heard. If you believe Kylian is the future, don't stay
          silent — sign this petition and stand for keeping him at the club.
        </blockquote>

        <div
          className="mt-12 w-full rounded-2xl border border-border/40 bg-card/30 p-8 backdrop-blur"
          style={{ boxShadow: "var(--shadow-red)" }}
        >
          <div className="flex items-end justify-between">
            <div>
              <div className="text-5xl font-bold tabular-nums sm:text-6xl">
                {count.toLocaleString()}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                Madridistas signed
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold" style={{ color: "var(--brand-red)" }}>
                {goal.toLocaleString()}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                Goal
              </div>
            </div>
          </div>

          <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-secondary/40">
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${pct}%`, background: "var(--gradient-red)" }}
            />
          </div>
          <div className="mt-2 text-right text-xs text-muted-foreground">{pct}% of goal</div>

          <button
            onClick={() => {
              if (!signed) {
                setCount((c) => c + 1);
                setSigned(true);
              }
            }}
            disabled={signed}
            className="mt-8 w-full rounded-xl py-4 text-lg font-bold uppercase tracking-wider text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
            style={{ background: "var(--gradient-red)", boxShadow: "var(--shadow-red)" }}
          >
            {signed ? "✓ Signed — Hala Madrid" : "Sign the Petition"}
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            No account needed · Share to grow the movement
          </p>
        </div>

        <div
          className="mt-16 text-2xl font-black tracking-[0.3em]"
          style={{ color: "var(--brand-red)" }}
        >
          HALA MADRID
        </div>
        <div className="mt-2 text-xs text-muted-foreground">crafted with passion</div>
      </section>
    </main>
  );
}
