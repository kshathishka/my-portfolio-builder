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
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono font-bold text-sm tracking-tight">
          <span className="text-primary">K</span>
          <span className="text-foreground">.</span>
          <span className="text-muted-foreground">dev</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="px-4 py-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-secondary/50"
            >
              {l.label}
            </motion.a>
          ))}
          <motion.a
            href="mailto:kshathishka@email.com"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="ml-2 px-4 py-1.5 text-[13px] font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
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
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
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
