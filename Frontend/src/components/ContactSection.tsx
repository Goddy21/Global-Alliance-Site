import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send } from "lucide-react";

const contacts = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Josca, Nairobi", "Along Kagundo Road, Kenya"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["globalmissionaries2026@gmail.com", "P.O. Box 51378-00100, Nairobi"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+254 726 491 828", "+254 724 895 972"],
  },
];

const ContactSection = () => (
  <section id="contact" className="relative py-28 bg-secondary overflow-hidden">
    <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-primary/3 blur-3xl" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm uppercase tracking-[0.25em] text-accent font-semibold mb-3">
          Get In Touch
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          Contact Us
        </h2>
        <div className="decorative-line mx-auto" />
      </motion.div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
        {contacts.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
            whileHover={{ y: -4, transition: { duration: 0.3 } }}
            className="group bg-card rounded-2xl p-8 border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-500 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
              <c.icon size={24} className="text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-3">
              {c.title}
            </h3>
            {c.lines.map((line) => (
              <p key={line} className="font-body text-sm text-muted-foreground leading-relaxed">
                {line}
              </p>
            ))}
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-12"
      >
        <a
          href="mailto:globalmissionaries2026@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-semibold bg-primary text-primary-foreground hover:brightness-110 transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5"
        >
          <Send size={16} />
          Send Us a Message
        </a>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
