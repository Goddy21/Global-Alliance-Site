import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const focusAreas = [
  "Spiritual Empowerment",
  "Ecumenicalism",
  "Agribusiness",
  "Humanitarian Support",
  "Education",
  "Socioeconomic Activities",
  "Capacity Building",
  "Peace and Reconciliation",
  "Supporting Persons with Disabilities",
  "Environmental Sustainability",
];

const regions = ["Nairobi", "Kisumu", "Kakamega", "Kericho", "Mombasa"];

// ⬇️  Point this at your deployed backend URL in production
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

const ApplicationFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    region: "",
    memberType: "",
    focusAreas: [] as string[],
  });

  const set = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const toggleFocus = (area: string) =>
    setForm((prev) => ({
      ...prev,
      focusAreas: prev.focusAreas.includes(area)
        ? prev.focusAreas.filter((a) => a !== area)
        : [...prev.focusAreas, area],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_URL}/api/applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-28 bg-background">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="container mx-auto px-4 text-center max-w-lg"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-primary" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">
            Application Received!
          </h3>
          <p className="font-body text-muted-foreground">
            Thank you for your interest in GAM. We will review your application and get back to you
            soon. A confirmation has been sent to <strong>{form.email}</strong>.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.25em] text-accent font-semibold mb-3">
            Apply Now
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Membership Application
          </h2>
          <div className="decorative-line mx-auto" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card rounded-2xl border border-border p-8 md:p-10 shadow-[var(--shadow-card)]"
        >
          {/* Error banner */}
          {error && (
            <div className="mb-6 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 font-body text-sm">
              {error}
            </div>
          )}

          {/* Personal Info */}
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            Personal Information
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">
                Full Name *
              </label>
              <input
                required
                type="text"
                value={form.fullName}
                onChange={(e) => set("fullName", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-background border border-border font-body text-sm text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">
                Email *
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-background border border-border font-body text-sm text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                placeholder="Your email"
              />
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">
                Phone
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-background border border-border font-body text-sm text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
                placeholder="+254..."
              />
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">
                Gender
              </label>
              <select
                value={form.gender}
                onChange={(e) => set("gender", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-background border border-border font-body text-sm text-foreground focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all"
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Region */}
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            Region of Residency
          </h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {regions.map((r) => (
              <label
                key={r}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border font-body text-sm cursor-pointer transition-all ${
                  form.region === r
                    ? "bg-primary/10 border-primary/30 text-primary"
                    : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                <input
                  type="radio"
                  name="region"
                  value={r}
                  className="sr-only"
                  checked={form.region === r}
                  onChange={() => set("region", r)}
                />
                {r}
              </label>
            ))}
          </div>

          {/* Membership type */}
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            Membership Type
          </h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Individual", "Organization/Group"].map((t) => (
              <label
                key={t}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border font-body text-sm cursor-pointer transition-all ${
                  form.memberType === t
                    ? "bg-primary/10 border-primary/30 text-primary"
                    : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                <input
                  type="radio"
                  name="memberType"
                  value={t}
                  className="sr-only"
                  checked={form.memberType === t}
                  onChange={() => set("memberType", t)}
                />
                {t}
              </label>
            ))}
          </div>

          {/* Focus areas */}
          <h3 className="font-display text-lg font-semibold text-foreground mb-4">
            Areas of Interest
          </h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {focusAreas.map((a) => (
              <label
                key={a}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border font-body text-xs cursor-pointer transition-all ${
                  form.focusAreas.includes(a)
                    ? "bg-primary/10 border-primary/30 text-primary"
                    : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                <input
                  type="checkbox"
                  value={a}
                  className="sr-only"
                  checked={form.focusAreas.includes(a)}
                  onChange={() => toggleFocus(a)}
                />
                {a}
              </label>
            ))}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-body font-semibold bg-primary text-primary-foreground hover:brightness-110 transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Submitting…
              </>
            ) : (
              <>
                <Send size={16} />
                Submit Application
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ApplicationFormSection;
