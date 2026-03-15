import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
    accent: "primary",
  },
  {
    category: "Backend",
    items: ["FastAPI", "Node.js", "REST APIs", "Microservices", "JWT Auth"],
    accent: "primary",
  },
  {
    category: "AI / ML",
    items: ["BERT", "Transformer FT", "LLM Integration", "NLP Pipelines", "Anomaly Detect"],
    accent: "accent",
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "Indexing", "Schema Design"],
    accent: "primary",
  },
  {
    category: "Tooling",
    items: ["Git", "Docker (Basics)", "Postman", "Tech Documentation"],
    accent: "primary",
  },
  {
    category: "Strengths",
    items: ["System Debugging", "Perf. Optimization", "Root-Cause Analysis"],
    accent: "accent",
  },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>
      {/* Section connector */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 line-gradient opacity-15" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-2xl"
        >
          <span className="font-mono text-[11px] text-primary tracking-[0.25em] uppercase font-medium">
            01 — Arsenal
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mt-4 leading-[1.4] pixel-title">
            Tools of the<br />
            <span className="text-gradient-mixed">trade</span>
          </h2>
          <p className="text-muted-foreground text-base mt-5 leading-relaxed">
            Production-tested stack for building systems that scale. Every tool earned its spot.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="group relative p-6 rounded-sm bg-card border-2 border-border card-hover overflow-hidden retro-panel"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-mono text-xs font-semibold text-foreground tracking-wide uppercase">
                    {group.category}
                  </h3>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:shadow-[0_0_10px_hsl(151_100%_54%_/_0.5)] transition-all duration-500" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-[11px] font-mono bg-secondary text-secondary-foreground rounded-md group-hover:bg-primary/[0.06] group-hover:text-foreground transition-all duration-500"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
