import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const tiers = [
  {
    name: "Full Member",
    description: "Open to all persons meeting eligibility criteria.",
    benefits: [
      "Vote and stand for electable positions",
      "Attend General Assembly with full participation",
      "Access training programs",
      "Explore accounts of the organization",
    ],
    featured: true,
  },
  {
    name: "Associate Member",
    description: "Non-profit institutions active in development.",
    benefits: [
      "Attend the General Assembly",
      "Access new funding source information",
      "Exemption from provisional registration fees",
      "Act as ambassadors to the organization",
    ],
    featured: false,
  },
  {
    name: "Honorary Member",
    description: "Individuals with seminal contributions to nation building.",
    benefits: [
      "Attend the General Assembly",
      "Recognized for unique contributions",
      "Limited to one per calendar year",
      "Nominated by existing members",
    ],
    featured: false,
  },
  {
    name: "Trustee",
    description: "Founding members of the organization.",
    benefits: [
      "Support and advise the Board & CEO",
      "Elect Board representatives",
      "Define Board tasks and duties",
      "Act in an honorary capacity",
    ],
    featured: false,
  },
];

const MembershipSection = () => (
  <section id="membership" className="relative py-28 bg-background overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.25em] text-accent font-semibold mb-3">
          Join Us
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Membership Categories
        </h2>
        <div className="decorative-line mx-auto" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className={`relative rounded-2xl p-6 border overflow-hidden transition-all duration-500 ${
              t.featured
                ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-elevated)]"
                : "border-border bg-card text-card-foreground shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)]"
            }`}
          >
            {t.featured && (
              <div className="absolute top-3 right-3">
                <Star size={18} className="text-accent fill-accent" />
              </div>
            )}
            <h3 className="font-display text-xl font-bold mb-2">{t.name}</h3>
            <p className={`font-body text-sm mb-6 ${t.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
              {t.description}
            </p>
            <ul className="space-y-3">
              {t.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 font-body text-sm">
                  <div className={`mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                    t.featured ? "bg-accent/20" : "bg-primary/10"
                  }`}>
                    <Check size={12} className={t.featured ? "text-accent" : "text-primary"} />
                  </div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MembershipSection;
