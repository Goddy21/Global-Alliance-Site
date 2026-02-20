import { motion } from "framer-motion";
import { Church, Sprout, Heart, GraduationCap, Handshake, Users, Building, Scale } from "lucide-react";

const programs = [
  {
    icon: Church,
    title: "Spiritual Empowerment",
    desc: "Foster spiritual growth through faith-based programs, worship, theological education, and ecumenical collaborations.",
    color: "145 55% 28%",
  },
  {
    icon: Sprout,
    title: "Agribusiness & Sustainability",
    desc: "Support communities in adopting sustainable farming practices to increase food security and improve livelihoods.",
    color: "120 40% 35%",
  },
  {
    icon: Heart,
    title: "Humanitarian Assistance",
    desc: "Address immediate needs of communities affected by crises through disaster relief and support services.",
    color: "0 65% 50%",
  },
  {
    icon: GraduationCap,
    title: "Education & Training",
    desc: "Increase access to quality education, vocational training, and lifelong learning opportunities.",
    color: "210 55% 45%",
  },
  {
    icon: Users,
    title: "Disability Inclusion",
    desc: "Advocate for friendly policies and provide support services for people with disabilities.",
    color: "280 45% 50%",
  },
  {
    icon: Handshake,
    title: "Peace & Reconciliation",
    desc: "Engage in peace-building and reconciliation activities to address conflict and promote social cohesion.",
    color: "40 80% 50%",
  },
  {
    icon: Building,
    title: "Infrastructure Development",
    desc: "Assist in establishing churches, schools, and hospitals to meet community spiritual and social needs.",
    color: "190 50% 40%",
  },
  {
    icon: Scale,
    title: "Policy & Advocacy",
    desc: "Advocate for justice and the rights of marginalized groups, influencing policy for lasting change.",
    color: "330 45% 45%",
  },
];

const ProgramsSection = () => (
  <section id="programs" className="relative py-28 bg-secondary overflow-hidden">
    <div className="absolute top-20 left-0 w-80 h-80 rounded-full bg-primary/3 blur-3xl" />
    <div className="absolute bottom-20 right-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.25em] text-accent font-semibold mb-3">
          What We Do
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Our Core Programs
        </h2>
        <div className="decorative-line mx-auto" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {programs.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group relative bg-card rounded-2xl p-6 border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-500 overflow-hidden"
          >
            {/* Hover gradient accent */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500"
              style={{ background: `radial-gradient(circle at 30% 30%, hsl(${p.color}), transparent 70%)` }}
            />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                <p.icon size={26} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {p.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsSection;
