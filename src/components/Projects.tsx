import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Medical Triage System",
    tag: "LLM + NLP",
    year: "2025",
    bullets: [
      "BERT-based classification system with 90% accuracy in symptom triage",
      "REST APIs with structured validation and error handling",
      "Optimized data pipelines reducing latency significantly",
    ],
  },
  {
    title: "Fraud Detection Pipeline",
    tag: "ML + Real-time",
    year: "2025",
    bullets: [
      "Real-time transaction monitoring handling 2K+ daily transactions",
      "ML anomaly detection with 96% accuracy",
      "Scalable inference endpoints with optimized database queries",
    ],
  },
  {
    title: "Health Assistant API",
    tag: "FastAPI",
    year: "2024",
    bullets: [
      "Multi-modal query capabilities with FastAPI backend",
      "Sub-100ms query execution latency",
      "Structured API documentation for maintainability",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
          // projects
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold font-mono mb-12">
          Things I've Built
        </h3>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/40 glow-border transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold font-mono group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs font-mono px-2 py-0.5 bg-primary/10 text-primary rounded">
                      {project.tag}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                </div>
                <ExternalLink
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors mt-1"
                />
              </div>

              <ul className="space-y-2 text-muted-foreground text-sm">
                {project.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary font-mono shrink-0 text-xs mt-0.5">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
