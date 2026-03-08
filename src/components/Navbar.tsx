import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/60 backdrop-blur-2xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono font-bold text-base tracking-tight group">
          <span className="text-primary group-hover:drop-shadow-[0_0_8px_hsl(151_100%_54%_/_0.5)] transition-all duration-300">K</span>
          <span className="text-foreground">P</span>
        </a>

        <div className="hidden md:flex items-center gap-0.5">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              className="relative px-4 py-2 text-[13px] text-muted-foreground hover:text-foreground transition-all duration-300 rounded-md group"
            >
              {l.label}
              <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
            </motion.a>
          ))}
          <motion.a
            href="mailto:kshathishka@email.com"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="ml-4 px-5 py-1.5 text-[13px] font-semibold bg-primary text-primary-foreground rounded-full hover:shadow-[0_0_30px_-5px_hsl(151_100%_54%_/_0.4)] transition-all duration-300"
          >
            Say Hello
          </motion.a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-2xl border-b border-border/50"
          >
            <div className="px-6 py-6 space-y-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-muted-foreground hover:text-foreground hover:pl-2 transition-all duration-300"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
