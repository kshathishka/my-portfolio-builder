import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Medical Triage System",
    tags: ["LLM", "NLP", "BERT"],
    year: "2025",
    description:
      "BERT-based classification system achieving 90% accuracy in symptom triage with structured REST APIs and optimized data pipelines.",
    metrics: ["90% accuracy", "REST APIs", "Low latency"],
  },
  {
    title: "Fraud Detection Pipeline",
    tags: ["ML", "Real-time", "Monitoring"],
    year: "2025",
    description:
      "Real-time transaction monitoring pipeline handling 2K+ daily transactions with ML anomaly detection at 96% accuracy.",
    metrics: ["96% accuracy", "2K+ tx/day", "Scalable"],
  },
  {
    title: "Health Assistant API",
    tags: ["FastAPI", "Multi-modal"],
    year: "2024",
    description:
      "FastAPI backend with multi-modal query capabilities, sub-100ms latency, and comprehensive API documentation.",
    metrics: ["<100ms latency", "Multi-modal", "FastAPI"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 line-gradient opacity-20" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            03 — Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            Things I've built
          </h2>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border border-glow-hover transition-all duration-500 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg md:text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={16}
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/8 text-primary border border-primary/10"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="text-[10px] font-mono text-muted-foreground ml-1">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                </div>

                {/* Metrics pills */}
                <div className="flex md:flex-col gap-2 md:items-end shrink-0">
                  {project.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {m}
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

export default Projects;
