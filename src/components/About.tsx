import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
    icon: "⌘",
  },
  {
    category: "Backend",
    items: ["FastAPI", "Node.js", "REST APIs", "Microservices", "Auth"],
    icon: "⚡",
  },
  {
    category: "AI / ML",
    items: ["BERT / NLP", "Model Eval", "Data Pipelines", "Feature Eng."],
    icon: "🧠",
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB"],
    icon: "◈",
  },
  {
    category: "Tooling",
    items: ["Git", "Postman", "VS Code", "DevTools"],
    icon: "⚙",
  },
  {
    category: "Strengths",
    items: ["System Debugging", "Perf. Optimization", "Root-Cause Analysis"],
    icon: "△",
  },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 line-gradient opacity-20" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            01 — About
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            What I work with
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl leading-relaxed">
            I build production-ready systems at the intersection of AI and backend engineering.
            Here's my toolkit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-5 rounded-xl bg-card border border-border border-glow-hover transition-all duration-500"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-base">{group.icon}</span>
                <h3 className="font-mono text-sm font-medium text-foreground">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-[11px] font-mono bg-secondary text-secondary-foreground rounded-md group-hover:bg-primary/5 group-hover:text-foreground transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
