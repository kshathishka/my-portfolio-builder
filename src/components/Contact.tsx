import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
          // contact
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold font-mono mb-4">
          Let's Connect
        </h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          I'm always open to discussing new projects, opportunities, and ideas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:kshathishka@email.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm rounded-md hover:opacity-90 transition-opacity"
          >
            <Mail size={16} />
            kshathishka@email.com
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-muted-foreground">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <span className="inline-flex items-center gap-1 text-sm">
            <MapPin size={14} />
            Hyderabad, India
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-border text-center">
        <p className="font-mono text-xs text-muted-foreground">
          © 2025 Kshathishka Parakala. Built with purpose.
        </p>
      </div>
    </section>
  );
};

export default Contact;
