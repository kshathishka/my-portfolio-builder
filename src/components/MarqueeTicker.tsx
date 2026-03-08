import { motion } from "framer-motion";

const skills = [
  "Python", "FastAPI", "BERT", "NLP", "Java", "TypeScript", "Node.js",
  "MySQL", "MongoDB", "REST APIs", "Microservices", "ML Pipelines",
  "Data Engineering", "System Design", "Performance Tuning",
];

const MarqueeTicker = () => {
  const doubled = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden py-6 border-y border-border/50">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="flex items-center gap-6 whitespace-nowrap"
      >
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="flex items-center gap-3 text-sm font-mono text-muted-foreground/60 hover:text-primary transition-colors duration-300"
          >
            <span className="w-1 h-1 rounded-full bg-primary/30" />
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeTicker;
