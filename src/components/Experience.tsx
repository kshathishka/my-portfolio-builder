const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
          // experience
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold font-mono mb-12">
          Where I've Worked
        </h3>

        <div className="relative border-l-2 border-border pl-8 ml-2">
          <div className="absolute w-3 h-3 rounded-full bg-primary -left-[7px] top-1" />
          
          <div className="mb-2">
            <span className="font-mono text-xs text-muted-foreground">2025</span>
          </div>
          <h4 className="text-xl font-bold font-mono mb-1">Senior Tech Lead</h4>
          <p className="text-primary font-mono text-sm mb-4">Swecha × Meta × IIITH</p>

          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-mono shrink-0">→</span>
              Led a team of 8 engineers to architect and deploy backend systems handling 2K+ daily transactions
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-mono shrink-0">→</span>
              Improved API response times by 40% through structured debugging and query optimization
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-mono shrink-0">→</span>
              Designed ML-based fraud detection pipeline achieving 96% detection accuracy
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-mono shrink-0">→</span>
              Diagnosed production issues using log analysis and profiling, implementing long-term fixes
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
