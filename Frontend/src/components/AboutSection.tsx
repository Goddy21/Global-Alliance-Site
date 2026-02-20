import { motion } from "framer-motion";
import { MapPin, Heart, Globe, Users, BookOpen } from "lucide-react";

const stats = [
  { icon: Globe, value: "8+", label: "Core Programs" },
  { icon: Users, value: "4", label: "Membership Tiers" },
  { icon: Heart, value: "100%", label: "Faith-Driven" },
  { icon: BookOpen, value: "2026", label: "Est. Year" },
];

const AboutSection = () => (
  <section id="about" className="relative py-28 bg-background overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/3 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.25em] text-accent font-semibold mb-3">
            About GAM
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our Preamble
          </h2>
          <div className="decorative-line mx-auto mb-8" />
          <p className="font-body text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
            We, the members of Global Alliance for Missionaries, in recognition of our faith and commitment 
            to serve humanity through spiritual empowerment, education and capacity building programs, 
            humanitarian support, environmental sustainability programs, community development, and policy 
            influence, hereby establish this constitution for the governance and operation of our organization in Kenya.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-body font-medium"
          >
            <MapPin size={16} />
            <span>Josca, Nairobi — Along Kagundo Road, Kenya</span>
          </motion.div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative bg-card rounded-2xl p-6 border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-500 hover:-translate-y-1 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <s.icon size={22} className="text-primary" />
              </div>
              <p className="font-display text-2xl md:text-3xl font-bold text-foreground">
                {s.value}
              </p>
              <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mt-1">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
