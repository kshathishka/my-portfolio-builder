import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { stat: "2K+", label: "Daily Transactions" },
    { stat: "40%", label: "Faster APIs" },
    { stat: "96%", label: "Detection Accuracy" },
    { stat: "8", label: "Engineers Led" },
  ];

  const bullets = [
    "Led backend architecture serving thousands of daily transactions across distributed systems",
    "Achieved 40% API speedup through structured debugging and query optimization",
    "Designed ML fraud detection pipeline with 96% accuracy in production",
    "Diagnosed and resolved production issues with log analysis and profiling tools",
    "Coordinated cross-functional troubleshooting in a distributed team environment",
  ];

  return (
    <section id="experience" className="py-32 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 line-gradient opacity-20" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            02 — Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            Where I've made impact
          </h2>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className="text-center p-5 rounded-xl bg-card border border-border"
            >
              <div className="text-2xl md:text-3xl font-bold font-mono text-gradient-primary">
                {h.stat}
              </div>
              <div className="text-xs text-muted-foreground mt-1">{h.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Role card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="p-6 md:p-8 rounded-2xl bg-card border border-border glow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">Senior Tech Lead</h3>
              <p className="text-primary font-mono text-sm mt-1">
                Swecha × Meta × IIITH
              </p>
            </div>
            <span className="font-mono text-xs text-muted-foreground mt-2 md:mt-0 px-3 py-1 rounded-full bg-secondary">
              2025
            </span>
          </div>

          <div className="space-y-3">
            {bullets.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.07 }}
                className="flex gap-3 text-[15px] text-muted-foreground"
              >
                <span className="text-primary shrink-0 mt-0.5">▸</span>
                <span className="hover:text-foreground transition-colors">{b}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
