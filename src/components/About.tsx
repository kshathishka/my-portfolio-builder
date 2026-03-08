const skills = [
  { category: "Programming", items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"] },
  { category: "Backend & APIs", items: ["FastAPI", "Node.js", "REST APIs", "Microservices"] },
  { category: "AI & ML", items: ["BERT / NLP", "Model Evaluation", "Data Pipelines", "Feature Engineering"] },
  { category: "Databases", items: ["MySQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "Postman", "VS Code", "DevTools"] },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
          // about
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold font-mono mb-8">
          Technical Skills
        </h3>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-2xl">
          AI-focused backend engineer with experience building production systems
          handling 2K+ daily transactions. Strong foundation in API design, distributed
          systems, and applied machine learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-lg bg-card border border-border glow-border hover:border-primary/30 transition-colors"
            >
              <h4 className="font-mono text-sm text-primary mb-3">{group.category}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
