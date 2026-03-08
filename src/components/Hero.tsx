import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import Avatar from "./Avatar";

const roles = ["AI & Backend Engineer", "Python Enthusiast", "Problem Solver", "Code Architect"];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 70;

    if (!isDeleting && displayText === current) {
      const pause = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting ? current.slice(0, displayText.length - 1) : current.slice(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden noise-bg">
      {/* Cinematic ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[300px] h-[600px] bg-primary/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Vertical accent line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 120 }}
        transition={{ delay: 1, duration: 1, ease: [0.25, 0.1, 0, 1] }}
        className="absolute left-12 top-1/2 -translate-y-1/2 w-px line-gradient opacity-30 hidden xl:block"
      />

      <div className="relative z-10 max-w-6xl w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Avatar on mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="lg:hidden flex justify-center"
            >
              <Avatar />
            </motion.div>

            {/* Status chip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-mono text-muted-foreground tracking-wide">OPEN TO WORK</span>
            </motion.div>

            {/* Name */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.9, ease: [0.25, 0.1, 0, 1] }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-bold leading-[0.9] tracking-[-0.04em]"
              >
                <span className="text-foreground">Kshathishka</span>
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.9, ease: [0.25, 0.1, 0, 1] }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-bold leading-[0.9] tracking-[-0.04em]"
              >
                <span className="text-gradient-mixed">Parakala</span>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
                  className="text-primary inline-block ml-2"
                >
                  .
                </motion.span>
              </motion.h1>
            </div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="max-w-lg space-y-3"
            >
              <p className="text-xl md:text-2xl font-medium text-foreground/80 leading-snug">
                AI & Backend Engineer
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Building production systems that don't break under pressure.{" "}
                <span className="text-secondary-foreground">2K+ daily tx · 96% accuracy · 40% faster APIs.</span>
              </p>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="flex items-center gap-4 pt-2"
            >
              <a
                href="mailto:kshathishka@email.com"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold text-sm rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_-5px_hsl(151_100%_54%_/_0.5)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail size={15} />
                  Let's Talk
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </a>

              <div className="flex items-center gap-2">
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic-hover inline-flex items-center justify-center w-12 h-12 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right side — Avatar + Terminal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0, 1] }}
            className="hidden lg:flex flex-col items-center gap-8"
          >
            <Avatar />

            {/* Terminal card */}
            <div className="relative w-full max-w-xs">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-xl" />
              <div className="relative p-5 rounded-xl bg-card/90 border border-border backdrop-blur-sm shimmer">
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                  <span className="ml-2 text-[9px] font-mono text-muted-foreground">~/kshathishka</span>
                </div>
                <div className="font-mono text-[12px] leading-6 space-y-0.5">
                  <div>
                    <span className="text-primary">❯</span>{" "}
                    <span className="text-accent">const</span>{" "}
                    <span className="text-foreground">me</span>{" "}
                    <span className="text-muted-foreground">= {"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground">role:</span>{" "}
                    <span className="text-primary">'AI Engineer'</span><span className="text-muted-foreground">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground">precision:</span>{" "}
                    <span className="text-accent">0.96</span><span className="text-muted-foreground">,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground">status:</span>{" "}
                    <span className="text-primary">'shipping'</span>{" "}
                    <span className="text-lg">🚀</span>
                  </div>
                  <div><span className="text-muted-foreground">{"}"}</span></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll CTA */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="group-hover:text-primary transition-colors" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;
