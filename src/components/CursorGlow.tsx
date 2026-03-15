import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[999] hidden md:block"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          left: pos.x - 250,
          top: pos.y - 250,
          background: "radial-gradient(circle, hsl(var(--accent) / 0.12) 0%, hsl(var(--primary) / 0.08) 42%, transparent 72%)",
          transition: "left 0.15s ease-out, top 0.15s ease-out",
        }}
      />
    </motion.div>
  );
};

export default CursorGlow;
