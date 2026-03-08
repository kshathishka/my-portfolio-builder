import { motion } from "framer-motion";
import avatarImg from "@/assets/avatar.png";

const Avatar = () => {
  return (
    <div className="relative w-48 h-48 md:w-56 md:h-56">
      {/* Outer rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-dashed border-primary/20"
      />

      {/* Middle pulsing ring */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute inset-2 rounded-full border border-primary/15"
      />

      {/* Glow behind avatar */}
      <div className="absolute inset-4 rounded-full bg-primary/10 blur-2xl" />

      {/* Avatar image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
        className="absolute inset-4 rounded-full overflow-hidden border-2 border-primary/20"
      >
        <img
          src={avatarImg}
          alt="Kshathishka Parakala"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Floating status dot */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-border backdrop-blur-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
        </span>
        <span className="text-[9px] font-mono text-primary tracking-wider font-semibold">ONLINE</span>
      </motion.div>

      {/* Orbiting particles */}
      {[0, 120, 240].map((deg, i) => (
        <motion.div
          key={deg}
          animate={{ rotate: [deg, deg + 360] }}
          transition={{ repeat: Infinity, duration: 12 + i * 3, ease: "linear" }}
          className="absolute inset-0"
          style={{ transformOrigin: "center" }}
        >
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/60"
            style={{ top: 0, left: "50%", transform: "translateX(-50%)" }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Avatar;
