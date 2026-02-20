import { motion } from "framer-motion";
import gamLogo from "@/assets/gam-logo.png";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="relative bg-foreground text-primary-foreground overflow-hidden">
    <div className="absolute inset-0 grain-overlay" />
    
    <div className="container mx-auto px-4 py-16 relative z-10">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={gamLogo} alt="GAM Logo" className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-foreground/20" />
            <div>
              <p className="font-display text-lg font-bold leading-none">GAM</p>
              <p className="font-body text-[10px] uppercase tracking-[0.15em] text-primary-foreground/60">
                Global Alliance for Missionaries
              </p>
            </div>
          </div>
          <p className="font-body text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
            Serving humanity through faith, education, and community development across Kenya and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-body text-sm text-primary-foreground/60 hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider mb-4">
            Contact Info
          </h4>
          <div className="space-y-2 font-body text-sm text-primary-foreground/60">
            <p>globalmissionaries2026@gmail.com</p>
            <p>+254 726 491 828</p>
            <p>P.O. Box 51378-00100, Nairobi</p>
            <p>Josca, Along Kagundo Road, Kenya</p>
          </div>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="border-t border-primary-foreground/10 pt-8 text-center">
        <p className="font-body text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Global Alliance for Missionaries. All rights reserved. | Ephesians 4:11-19
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
