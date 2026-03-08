import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden noise-bg">
      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-pattern pointer-events-none" />

      <div className="relative z-10 max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="space-y-6"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/50 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-muted-foreground">Open to opportunities</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
          >
            <span className="text-foreground">Kshathishka</span>
            <br />
            <span className="text-gradient-mixed">Parakala</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
          >
            AI & Backend Engineer building production systems that scale.
            <br className="hidden md:block" />
            <span className="text-secondary-foreground">2K+ daily transactions. 96% accuracy. 40% faster APIs.</span>
          </motion.p>

          {/* CTA + socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="flex items-center gap-3 pt-2"
          >
            <a
              href="mailto:kshathishka@email.com"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-full hover:shadow-[0_0_30px_-5px_hsl(160_80%_58%_/_0.4)] transition-all duration-300"
            >
              <Mail size={16} />
              Get in Touch
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 hover:bg-secondary/50 transition-all duration-300"
            >
              <Github size={17} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 hover:bg-secondary/50 transition-all duration-300"
            >
              <Linkedin size={17} />
            </a>
          </motion.div>
        </motion.div>

        {/* Floating code snippet */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2"
        >
          <div className="p-4 rounded-xl bg-card/80 border border-border backdrop-blur-sm font-mono text-xs leading-6 glow-sm">
            <div className="text-muted-foreground">
              <span className="text-accent">const</span> <span className="text-foreground">engineer</span> = {"{"}
            </div>
            <div className="pl-4">
              <span className="text-muted-foreground">name:</span> <span className="text-primary">"Kshathishka"</span>,
            </div>
            <div className="pl-4">
              <span className="text-muted-foreground">focus:</span> <span className="text-primary">"AI + Backend"</span>,
            </div>
            <div className="pl-4">
              <span className="text-muted-foreground">accuracy:</span> <span className="text-accent">0.96</span>,
            </div>
            <div className="pl-4">
              <span className="text-muted-foreground">vibes:</span> <span className="text-primary">"immaculate"</span> ✨
            </div>
            <div className="text-muted-foreground">{"}"}</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
