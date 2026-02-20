import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const floatingShapes = [
  { size: 120, top: "15%", left: "8%", delay: 0, duration: 7 },
  { size: 80, top: "60%", left: "85%", delay: 1.5, duration: 9 },
  { size: 60, top: "75%", left: "15%", delay: 3, duration: 6 },
  { size: 100, top: "20%", left: "78%", delay: 2, duration: 8 },
];

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background image with parallax feel */}
    <motion.div
      initial={{ scale: 1.15 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    
    {/* Gradient overlay */}
    <div className="absolute inset-0" style={{ background: "var(--hero-gradient)", opacity: 0.85 }} />
    
    {/* Animated floating circles */}
    {floatingShapes.map((s, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border border-primary-foreground/10"
        style={{ width: s.size, height: s.size, top: s.top, left: s.left }}
        animate={{ y: [-10, 15, -10], rotate: [0, 5, 0] }}
        transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
      />
    ))}

    {/* Grain texture */}
    <div className="absolute inset-0 grain-overlay" />

    <div className="relative z-10 container mx-auto px-4 text-center py-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm mb-8"
      >
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span className="font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/90">
          Ephesians 4:11-19
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-[1.1] max-w-4xl mx-auto"
      >
        Global Alliance{" "}
        <span className="relative">
          for Missionaries
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute -bottom-2 left-0 w-full h-1 bg-accent/60 rounded-full origin-left"
          />
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="mt-8 font-body text-lg md:text-xl max-w-2xl mx-auto text-primary-foreground/80 leading-relaxed"
      >
        Faith · Service · Community — Serving humanity through spiritual empowerment, 
        education, humanitarian support, and community development across Kenya and beyond.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#programs"
          className="group inline-flex items-center justify-center px-8 py-3.5 rounded-full font-body font-semibold text-accent-foreground bg-accent hover:brightness-110 transition-all shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5"
        >
          Our Programs
          <motion.span
            className="ml-2 inline-block"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.span>
        </a>
        <a
          href="#membership"
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-body font-semibold text-primary-foreground border-2 border-primary-foreground/30 hover:border-primary-foreground/60 hover:bg-primary-foreground/5 transition-all hover:-translate-y-0.5"
        >
          Become a Member
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
