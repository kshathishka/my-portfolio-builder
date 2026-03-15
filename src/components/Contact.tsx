import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 px-6 relative noise-bg" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 line-gradient opacity-15" />

      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-[11px] text-primary tracking-[0.25em] uppercase font-medium">
            04 — Connect
          </span>
          <h2 className="text-2xl md:text-5xl font-bold mt-4 leading-[1.4] pixel-title">
            Let's build<br />
            <span className="text-gradient-mixed">something great</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-md mx-auto text-base leading-relaxed">
            AI &amp; Backend Engineer focused on production systems and applied ML. Open for internships and high-impact engineering roles.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col items-center gap-3 mb-14"
        >
          <a
            href="mailto:kshathishka@email.com"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm rounded-sm overflow-hidden retro-btn"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Mail size={16} />
              kshathishka@email.com
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
          <p className="text-sm font-mono text-secondary-foreground">+91 73866 89393</p>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-3"
        >
          {[
            { icon: Github, href: "https://github.com/kshathishka", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/kshathishka", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-hover inline-flex items-center justify-center w-12 h-12 rounded-sm border-2 border-border text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Icon size={18} />
            </a>
          ))}
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground ml-3 font-mono">
            <MapPin size={12} className="text-primary/50" />
            Hyderabad, IN
          </span>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-28 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[11px] text-muted-foreground/60">
          © 2025 Kshathishka Parakala
        </p>
        <p className="font-mono text-[11px] text-muted-foreground/60">
          B.Tech AI &amp; ML - Anurag University (2023 - 2027)
        </p>
      </div>
    </section>
  );
};

export default Contact;
