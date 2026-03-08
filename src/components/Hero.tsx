import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(174 72% 56%) 1px, transparent 1px), linear-gradient(90deg, hsl(174 72% 56%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="relative z-10 max-w-3xl text-center animate-fade-up">
        <p className="font-mono text-primary text-sm tracking-widest uppercase mb-4">
          // hello world
        </p>
        <h1 className="text-5xl md:text-7xl font-bold font-mono leading-tight mb-6">
          <span className="text-foreground">Kshathishka</span>
          <br />
          <span className="text-gradient">Parakala</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          AI & Backend Engineer crafting scalable, production-oriented systems.
          Currently pursuing B.Tech in AI & ML at Anurag University.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="mailto:kshathishka@email.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-mono text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            <Mail size={16} />
            Get in Touch
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
