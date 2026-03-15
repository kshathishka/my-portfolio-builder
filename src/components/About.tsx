import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const focusAreas = [
  {
    label: "Build",
    title: "Web systems with production shape",
    description: "Backend APIs, architecture, and booking-style flows with reliability in mind.",
    badgeClass: "border-[hsl(349_82%_22%_/_0.3)] bg-[hsl(349_82%_22%_/_0.14)] text-[hsl(45_67%_82%)]",
    cardClass: "bg-[radial-gradient(circle_at_top_left,hsl(349_82%_22%_/_0.16),transparent_55%)]",
  },
  {
    label: "Learn",
    title: "Applied AI and language workflows",
    description: "ML concepts, computer vision, NLP data preparation, and model-enabled product features.",
    badgeClass: "border-[hsl(336_18%_64%_/_0.36)] bg-[hsl(336_18%_64%_/_0.16)] text-[hsl(45_67%_82%)]",
    cardClass: "bg-[radial-gradient(circle_at_top_left,hsl(336_18%_64%_/_0.18),transparent_58%)]",
  },
  {
    label: "Automate",
    title: "Data-moving and workflow-heavy execution",
    description: "Python scripting, OCR, scraping, and dataset pipelines that reduce manual work.",
    badgeClass: "border-[hsl(36_56%_68%_/_0.34)] bg-[hsl(36_56%_68%_/_0.14)] text-[hsl(45_67%_82%)]",
    cardClass: "bg-[radial-gradient(circle_at_top_left,hsl(36_56%_68%_/_0.16),transparent_58%)]",
  },
];

const skillViews = [
  { id: "all", label: "All" },
  { id: "engineering", label: "Engineering" },
  { id: "intelligence", label: "AI / ML" },
  { id: "data", label: "Data" },
];

const skills = [
  {
    category: "AI / ML",
    description: "Modeling foundations and applied intelligence workflows.",
    items: ["ML Concepts", "Computer Vision", "NLP Dataset Creation", "BERT", "LLM Integration"],
    highlights: ["Vision", "Language", "Modeling"],
    view: "intelligence",
    tone: {
      dot: "bg-[hsl(349_82%_22%)] shadow-[0_0_16px_hsl(349_82%_22%_/_0.42)]",
      badge: "border-[hsl(349_82%_22%_/_0.3)] bg-[hsl(349_82%_22%_/_0.12)] text-[hsl(45_67%_82%)]",
      chip: "border-[hsl(349_82%_22%_/_0.16)] bg-[hsl(349_82%_22%_/_0.12)] text-[hsl(45_67%_82%)]",
      footer: "bg-[hsl(349_82%_22%_/_0.1)] text-[hsl(45_67%_82%)]",
      overlay: "bg-[radial-gradient(circle_at_top_right,hsl(349_82%_22%_/_0.16),transparent_58%)]",
      separator: "from-[hsl(349_82%_22%_/_0.45)]",
    },
  },
  {
    category: "Web Engineering",
    description: "Product-facing systems built for reliability and scale.",
    items: ["Web Development", "Backend APIs", "Web Architecture", "Booking Platforms", "FastAPI"],
    highlights: ["Platforms", "Architecture", "APIs"],
    view: "engineering",
    tone: {
      dot: "bg-[hsl(8_24%_58%)] shadow-[0_0_16px_hsl(8_24%_58%_/_0.35)]",
      badge: "border-[hsl(8_24%_58%_/_0.34)] bg-[hsl(8_24%_58%_/_0.14)] text-[hsl(45_67%_82%)]",
      chip: "border-[hsl(8_24%_58%_/_0.18)] bg-[hsl(8_24%_58%_/_0.12)] text-[hsl(45_67%_82%)]",
      footer: "bg-[hsl(8_24%_58%_/_0.1)] text-[hsl(45_67%_82%)]",
      overlay: "bg-[radial-gradient(circle_at_top_right,hsl(8_24%_58%_/_0.18),transparent_58%)]",
      separator: "from-[hsl(8_24%_58%_/_0.45)]",
    },
  },
  {
    category: "Automation",
    description: "Reducing repetitive work through scripts and workflow design.",
    items: ["Automation", "Python Scripting", "Workflow Automation Tools", "Scraping", "OCR"],
    highlights: ["Pipelines", "Scripting", "Ops"],
    view: "engineering",
    tone: {
      dot: "bg-[hsl(36_56%_68%)] shadow-[0_0_16px_hsl(36_56%_68%_/_0.38)]",
      badge: "border-[hsl(36_56%_68%_/_0.34)] bg-[hsl(36_56%_68%_/_0.14)] text-[hsl(349_30%_13%)]",
      chip: "border-[hsl(36_56%_68%_/_0.2)] bg-[hsl(36_56%_68%_/_0.14)] text-[hsl(45_67%_82%)]",
      footer: "bg-[hsl(36_56%_68%_/_0.1)] text-[hsl(45_67%_82%)]",
      overlay: "bg-[radial-gradient(circle_at_top_right,hsl(36_56%_68%_/_0.16),transparent_58%)]",
      separator: "from-[hsl(36_56%_68%_/_0.45)]",
    },
  },
  {
    category: "Data Engineering",
    description: "Collecting, transforming, and preparing usable data assets.",
    items: ["Dataset Pipelines", "Data Collection", "OCR Pipelines", "Scraping Workflows", "Structured Datasets"],
    highlights: ["ETL", "OCR", "Pipelines"],
    view: "data",
    tone: {
      dot: "bg-[hsl(210_18%_72%)] shadow-[0_0_16px_hsl(210_18%_72%_/_0.35)]",
      badge: "border-[hsl(210_18%_72%_/_0.3)] bg-[hsl(210_18%_72%_/_0.14)] text-[hsl(45_67%_82%)]",
      chip: "border-[hsl(210_18%_72%_/_0.18)] bg-[hsl(210_18%_72%_/_0.12)] text-[hsl(45_67%_82%)]",
      footer: "bg-[hsl(210_18%_72%_/_0.1)] text-[hsl(45_67%_82%)]",
      overlay: "bg-[radial-gradient(circle_at_top_right,hsl(210_18%_72%_/_0.16),transparent_58%)]",
      separator: "from-[hsl(210_18%_72%_/_0.45)]",
    },
  },
  {
    category: "Core Stack",
    description: "Day-to-day languages and engineering execution tools.",
    items: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
    highlights: ["Runtime", "Typing", "Delivery"],
    view: "engineering",
    tone: {
      dot: "bg-[hsl(320_12%_78%)] shadow-[0_0_16px_hsl(320_12%_78%_/_0.38)]",
      badge: "border-[hsl(320_12%_78%_/_0.32)] bg-[hsl(320_12%_78%_/_0.12)] text-[hsl(45_67%_82%)]",
      chip: "border-[hsl(320_12%_78%_/_0.16)] bg-[hsl(320_12%_78%_/_0.12)] text-[hsl(45_67%_82%)]",
      footer: "bg-[hsl(320_12%_78%_/_0.1)] text-[hsl(45_67%_82%)]",
      overlay: "bg-[radial-gradient(circle_at_top_right,hsl(320_12%_78%_/_0.16),transparent_58%)]",
      separator: "from-[hsl(320_12%_78%_/_0.45)]",
    },
  },
];

const getSkillsForView = (view: string) =>
  view === "all" ? skills : skills.filter((skill) => skill.view === view);

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>
      {/* Section connector */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 line-gradient opacity-15" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-2xl"
        >
          <span className="font-mono text-[11px] text-primary tracking-[0.25em] uppercase font-medium">
            01 — Arsenal
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mt-4 leading-[1.4] pixel-title">
            Tools of the<br />
            <span className="text-gradient-mixed">trade</span>
          </h2>
          <p className="text-muted-foreground text-base mt-5 leading-relaxed">
            Production-tested stack for building systems that scale. Every tool earned its spot.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.label}
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 + i * 0.06 }}
            >
              <Card className={`border-2 border-border/80 retro-panel card-hover overflow-hidden ${area.cardClass}`}>
                <CardContent className="p-5">
                  <Badge variant="outline" className={`rounded-sm font-mono text-[10px] uppercase tracking-[0.22em] ${area.badgeClass}`}>
                    {area.label}
                  </Badge>
                  <h3 className="mt-4 text-base font-semibold text-foreground leading-snug">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="h-auto w-full flex-wrap justify-start gap-2 rounded-sm border-2 border-border bg-card/60 p-2 retro-panel">
            {skillViews.map((view) => (
              <TabsTrigger
                key={view.id}
                value={view.id}
                className="rounded-sm border border-transparent px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] data-[state=active]:border-border data-[state=active]:bg-background/90"
              >
                {view.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillViews.map((view) => (
            <TabsContent key={view.id} value={view.id} className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {getSkillsForView(view.id).map((group, i) => (
                  <motion.div
                    key={`${view.id}-${group.category}`}
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.08 + i * 0.05 }}
                  >
                    <Card className="group relative overflow-hidden border-2 border-border bg-card/95 retro-panel card-hover">
                      <div className={`absolute inset-0 opacity-90 ${group.tone.overlay}`} />
                      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                      <CardHeader className="relative z-10 p-6 pb-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <Badge variant="outline" className={`mb-3 rounded-sm font-mono text-[10px] uppercase tracking-[0.2em] ${group.tone.badge}`}>
                              {group.view}
                            </Badge>
                            <CardTitle className="font-mono text-sm uppercase tracking-wide text-foreground">
                              {group.category}
                            </CardTitle>
                            <CardDescription className="mt-2 max-w-[28ch] text-[12px] leading-relaxed text-muted-foreground">
                              {group.description}
                            </CardDescription>
                          </div>
                          <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${group.tone.dot}`} />
                        </div>
                      </CardHeader>

                      <CardContent className="relative z-10 px-6 pb-4 pt-0">
                        <Separator className={`mb-4 bg-gradient-to-r ${group.tone.separator} to-transparent`} />
                        <div className="flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <Badge
                              key={item}
                              variant="secondary"
                              className={`rounded-md border px-2.5 py-1 font-mono text-[10px] font-medium ${group.tone.chip}`}
                            >
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter className="relative z-10 flex flex-wrap gap-2 px-6 pb-6 pt-0">
                        {group.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className={`rounded-sm px-2 py-1 text-[10px] font-mono uppercase tracking-[0.18em] ${group.tone.footer}`}
                          >
                            {highlight}
                          </span>
                        ))}
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default About;
