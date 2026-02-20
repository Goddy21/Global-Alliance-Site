import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gamLogo from "@/assets/gam-logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl shadow-[var(--shadow-soft)] border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-18 px-4 py-3">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all flex items-center justify-center bg-white p-1">
            <img
              src={gamLogo}
              alt="GAM Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="font-display text-lg font-bold text-primary leading-none block">
              GAM
            </span>
            <span className="font-body text-[10px] uppercase tracking-[0.15em] text-muted-foreground leading-none">
              Global Alliance
            </span>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
            >
              {l.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
          <a
            href="#membership"
            className="ml-4 px-5 py-2 rounded-full font-body text-sm font-semibold bg-primary text-primary-foreground hover:brightness-110 transition-all shadow-sm"
          >
            Join Us
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="flex flex-col py-4 px-4 gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-primary/5"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
