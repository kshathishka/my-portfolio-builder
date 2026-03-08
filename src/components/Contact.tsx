import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 line-gradient opacity-20" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            04 — Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 tracking-tight">
            Let's build something
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Always open to interesting projects and conversations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <a
            href="mailto:kshathishka@email.com"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-full hover:shadow-[0_0_40px_-5px_hsl(160_80%_58%_/_0.4)] transition-all duration-300"
          >
            <Mail size={16} />
            kshathishka@email.com
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-3"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all"
          >
            <Github size={17} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all"
          >
            <Linkedin size={17} />
          </a>
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground ml-2">
            <MapPin size={12} />
            Hyderabad, India
          </span>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-[11px] text-muted-foreground">
          © 2025 Kshathishka Parakala
        </p>
        <p className="font-mono text-[11px] text-muted-foreground">
          B.Tech AI & ML — Anurag University
        </p>
      </div>
    </section>
  );
};

export default Contact;
