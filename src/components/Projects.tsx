import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Medical Triage System",
    tags: ["LLM", "NLP", "BERT"],
    year: "2025",
    description:
      "BERT-based classification system achieving 90% accuracy in symptom triage with structured REST APIs and optimized data pipelines.",
    metrics: ["90% accuracy", "REST APIs", "Low latency"],
    gradient: "from-primary/10 to-accent/5",
  },
  {
    title: "Fraud Detection Pipeline",
    tags: ["ML", "Real-time", "Monitoring"],
    year: "2025",
    description:
      "Real-time transaction monitoring pipeline handling 2K+ daily transactions with ML anomaly detection at 96% accuracy.",
    metrics: ["96% accuracy", "2K+ tx/day", "Scalable"],
    gradient: "from-accent/10 to-primary/5",
  },
  {
    title: "Health Assistant API",
    tags: ["FastAPI", "Multi-modal"],
    year: "2024",
    description:
      "FastAPI backend with multi-modal query capabilities, sub-100ms latency, and comprehensive API documentation.",
    metrics: ["<100ms latency", "Multi-modal", "FastAPI"],
    gradient: "from-primary/10 to-primary/5",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 line-gradient opacity-15" />

      {/* Ambient */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-2xl"
        >
          <span className="font-mono text-[11px] text-primary tracking-[0.25em] uppercase font-medium">
            03 — Work
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 tracking-[-0.03em] leading-[1.05]">
            Selected<br />
            <span className="text-gradient-mixed">projects</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.6 }}
              className="group relative rounded-2xl bg-card border border-border card-hover overflow-hidden cursor-pointer"
            >
              {/* Top accent */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="p-7 md:p-9">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    {/* Title row */}
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-500">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={18}
                        className="text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500"
                      />
                    </div>

                    {/* Tags */}
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-primary/[0.06] text-primary border border-primary/10 group-hover:border-primary/20 transition-colors duration-500"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="text-[10px] font-mono text-muted-foreground ml-1">
                        {project.year}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xl group-hover:text-secondary-foreground transition-colors duration-500">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="flex md:flex-col gap-2 md:items-end shrink-0">
                    {project.metrics.map((m) => (
                      <span
                        key={m}
                        className="text-[11px] font-mono px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground border border-border/50 group-hover:border-primary/10 transition-colors duration-500"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
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
