import { motion } from "framer-motion";
import avatarImg from "@/assets/mechibi-cutout.png";

const Avatar = () => {
  return (
    <div className="relative w-52 h-52 md:w-64 md:h-64">
      {/* Outer rotating dashed ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute inset-0 rounded-[8px] border-2 border-dashed border-primary/35"
      />

      {/* Middle pulsing ring */}
      <motion.div
        animate={{ scale: [1, 1.04, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute inset-3 rounded-[6px] border-2 border-primary/20"
      />

      {/* Glow */}
      <div className="absolute inset-6 rounded-[6px] bg-primary/10 blur-2xl" />

      {/* Avatar — gentle float */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, y: [0, -6, 0] }}
        transition={{
          scale: { delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0, 1] },
          opacity: { delay: 0.3, duration: 0.8 },
          y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        }}
        className="absolute inset-4 rounded-[4px] overflow-hidden border-2 border-primary/30 bg-transparent"
      >
        <img
          src={avatarImg}
          alt="Kshathishka Parakala"
          className="w-full h-full object-contain object-top scale-105 drop-shadow-[0_8px_12px_hsl(28_35%_8%_/_0.6)]"
        />
      </motion.div>

      {/* Floating emoji badges */}
      {[
        { emoji: "💻", delay: 0, x: -12, y: 20, duration: 3.5 },
        { emoji: "🎧", delay: 0.5, x: 85, y: 5, duration: 4 },
        { emoji: "✨", delay: 1, x: 90, y: 75, duration: 3 },
      ].map((b) => (
        <motion.div
          key={b.emoji}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -5, 0],
          }}
          transition={{
            opacity: { delay: 0.8 + b.delay, duration: 0.5 },
            scale: { delay: 0.8 + b.delay, type: "spring", stiffness: 300 },
            y: { repeat: Infinity, duration: b.duration, ease: "easeInOut", delay: b.delay },
          }}
          className="absolute text-lg md:text-xl"
          style={{ left: `${b.x}%`, top: `${b.y}%` }}
        >
          {b.emoji}
        </motion.div>
      ))}

      {/* Status pill */}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-sm bg-card border-2 border-border retro-panel"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        <span className="text-[9px] font-mono text-primary tracking-wider font-semibold">ONLINE</span>
      </motion.div>

      {/* Orbiting particles */}
      {[0, 180].map((deg, i) => (
        <motion.div
          key={deg}
          animate={{ rotate: [deg, deg + 360] }}
          transition={{ repeat: Infinity, duration: 15 + i * 5, ease: "linear" }}
          className="absolute inset-0"
          style={{ transformOrigin: "center" }}
        >
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/50"
            style={{ top: 0, left: "50%", transform: "translateX(-50%)" }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Avatar;
