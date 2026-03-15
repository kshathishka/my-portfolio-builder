import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Users, TrendingUp } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const highlights = [
    { stat: "2K+", label: "Daily Transactions", icon: Zap },
    { stat: "40%", label: "Faster APIs", icon: TrendingUp },
    { stat: "96%", label: "Detection Accuracy", icon: Target },
    { stat: "8", label: "Engineers Led", icon: Users },
  ];

  const bullets = [
    "Architected backend infrastructure handling 2,000+ daily transactions across a multi-service system with high reliability.",
    "Reduced API response latency by 40% through query profiling, index optimization, and request-pipeline restructuring.",
    "Designed and productionized an ML fraud detection pipeline achieving 96% accuracy on live transaction data.",
    "Led production incident response using log analysis and distributed tracing, eliminating recurring failures.",
    "Coordinated technical delivery across a team of 8 engineers in a distributed environment.",
  ];

  return (
    <section id="experience" className="py-32 px-6 relative noise-bg" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 line-gradient opacity-15" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-2xl"
        >
          <span className="font-mono text-[11px] text-primary tracking-[0.25em] uppercase font-medium">
            02 — Impact
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mt-4 leading-[1.4] pixel-title">
            Numbers don't<br />
            <span className="text-gradient-primary">lie</span>
          </h2>
        </motion.div>

        {/* Stats grid with animated counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
              className="group relative p-6 rounded-sm bg-card border-2 border-border card-hover overflow-hidden text-center retro-panel"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <h.icon size={16} className="mx-auto mb-3 text-primary/60 group-hover:text-primary group-hover:drop-shadow-[0_0_8px_hsl(151_100%_54%_/_0.5)] transition-all duration-500" />
                <div className="text-3xl md:text-4xl font-bold font-mono text-gradient-primary tracking-tight">
                  <AnimatedCounter target={h.stat} />
                </div>
                <div className="text-[11px] text-muted-foreground mt-2 font-mono tracking-wide">{h.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Role card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative p-8 md:p-10 rounded-sm bg-card border-2 border-border glow-sm overflow-hidden retro-panel"
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Backend &amp; AI Engineering Intern</h3>
              <p className="text-primary font-mono text-sm mt-2 tracking-wide">
                Swecha × Meta × IIIT Hyderabad AI Programme
              </p>
            </div>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, type: "spring" }}
              className="font-mono text-xs text-muted-foreground px-4 py-2 rounded-full bg-secondary border border-border"
            >
              May 2025 - Sep 2025
            </motion.span>
          </div>

          <div className="space-y-4">
            {bullets.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.55 + i * 0.1, type: "spring", stiffness: 100 }}
                className="flex gap-4 group/item"
              >
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary group-hover/item:shadow-[0_0_8px_hsl(151_100%_54%_/_0.5)] transition-all duration-300" />
                <span className="text-[15px] text-muted-foreground group-hover/item:text-foreground transition-colors duration-300 leading-relaxed">
                  {b}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
