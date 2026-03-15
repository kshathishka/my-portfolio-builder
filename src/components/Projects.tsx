import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "StudyGen.ai",
    tags: ["FastAPI", "LLM", "Learning Platform"],
    year: "2025",
    description:
      "Built an end-to-end AI learning platform with automatic quiz generation, flashcards, and a conversational tutor from user-supplied study material.",
    metrics: ["Real-time tutoring", "LLM pipelines", "Personalized feedback"],
    link: "https://github.com/kshathishka/studygen.ai",
    color: "primary",
  },
  {
    title: "Medical Triage System",
    tags: ["BERT", "NLP", "REST APIs"],
    year: "2025",
    description:
      "Engineered a BERT-based symptom classifier with 90% accuracy across 15+ triage categories and optimized inference to under 200ms under load.",
    metrics: ["90% accuracy", "<200ms latency", "OpenAPI docs"],
    link: "https://github.com/kshathishka/arovia",
    color: "primary",
  },
  {
    title: "Smart Hospital Appointment Booking System",
    tags: ["HealthTech", "Web Platform", "Scheduling"],
    year: "2026",
    description:
      "Designed a Zomato-style hospital discovery and appointment platform with location-based search, doctor specialization filters, ratings, and slot-based booking workflows.",
    metrics: ["Nearby hospital discovery", "Doctor + specialty listings", "Appointment scheduling API"],
    link: "https://github.com/kshathishka",
    color: "primary",
  },
  {
    title: "Automated Human Activity Surveillance System",
    tags: ["Python", "OpenCV", "Computer Vision"],
    year: "2026",
    description:
      "Built a CVIP mini project that detects and tracks people in CCTV streams and raises alerts on suspicious movement patterns to reduce manual monitoring fatigue.",
    metrics: ["Real-time human detection", "Movement tracking", "Suspicious behavior flagging"],
    link: "https://github.com/kshathishka",
    color: "primary",
  },
  {
    title: "Collaborative Study Planner (MVP)",
    tags: ["EdTech", "Productivity", "Collaboration"],
    year: "2026",
    description:
      "Created an MVP study collaboration platform inspired by Notion-style workflows where students share schedules, track group tasks, and visualize progress for accountability.",
    metrics: ["Shared study schedules", "Group task tracking", "Progress visibility dashboard"],
    link: "https://github.com/kshathishka",
    color: "primary",
  },
  {
    title: "Telugu Health Text Data Collection Pipeline",
    tags: ["NLP", "Data Engineering", "Low-Resource Languages"],
    year: "2026",
    description:
      "Developed a dataset creation pipeline for Telugu health NLP by combining Wikipedia scraping, YouTube subtitle extraction, OCR from PDFs, and translated English health corpora, followed by cleaning and tokenization.",
    metrics: ["Multi-source text ingestion", "OCR + translation pipeline", "Tokenized Telugu health corpus"],
    link: "https://github.com/kshathishka",
    color: "primary",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 line-gradient opacity-15" />
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
          <h2 className="text-2xl md:text-4xl font-bold mt-4 leading-[1.4] pixel-title">
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
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="group relative rounded-sm bg-card border-2 border-border card-hover overflow-hidden cursor-pointer retro-panel"
            >
              {/* Animated gradient border on hover */}
              <motion.div
                className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--${project.color}) / 0.05), transparent 60%)`,
                }}
              />

              {/* Number indicator */}
              <div className="absolute top-6 right-6 md:top-8 md:right-8 font-mono text-6xl md:text-8xl font-bold text-foreground/[0.02] group-hover:text-foreground/[0.04] transition-all duration-700 select-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative p-7 md:p-9">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-500">
                        {project.title}
                      </h3>
                      <motion.div
                        animate={hoveredIdx === i ? { x: 3, y: -3 } : { x: 0, y: 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ArrowUpRight size={18} className="text-muted-foreground/50 group-hover:text-primary transition-colors duration-500" />
                      </motion.div>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      {project.tags.map((tag, j) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.3 + i * 0.12 + j * 0.05 }}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-primary/[0.06] text-primary border border-primary/10 group-hover:border-primary/25 group-hover:bg-primary/[0.1] transition-all duration-500"
                        >
                          {tag}
                        </motion.span>
                      ))}
                      <span className="text-[10px] font-mono text-muted-foreground ml-1">{project.year}</span>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xl group-hover:text-secondary-foreground transition-colors duration-500">
                      {project.description}
                    </p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:text-accent transition-colors"
                    >
                      {project.link.replace("https://", "")}
                      <ArrowUpRight size={13} />
                    </a>
                  </div>

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
