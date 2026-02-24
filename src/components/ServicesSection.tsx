import { motion } from "framer-motion";
import { ShieldCheck, Stethoscope, Sparkles, GraduationCap, CalendarCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: ShieldCheck,
    title: "Prevention",
    subtitle: "Proactive healthcare to keep you protected",
    items: [
      "Family Planning",
      "Implanon Insertion",
      "Implanon Removal",
      "HIV PreP",
      "HIV PEP",
      "Emergency Pills",
      "Papsmear",
      "Prostate",
      "Mental Health Counselling",
    ],
    note: "*Free for all students",
    color: "text-green-500",
  },
  {
    icon: Stethoscope,
    title: "Clinical",
    subtitle: "Professional medical consultations & treatment",
    items: [
      "Consultation",
      "STI Treatment",
      "HIV Care",
      "Chronic Illness",
      "Skin Care",
      "Wound Care",
      "Stitch Removal",
    ],
    note: "Prices include meds & exclude lab tests",
    color: "text-blue-500",
  },
  {
    icon: Sparkles,
    title: "Wellness",
    subtitle: "Boost your health with our wellness services",
    items: [
      "Pregnancy Test",
      "BP / Glucose Test",
      "HIV Test",
      "VitBco / B12 / C",
      "Glutathione",
      "Detox Drip",
      "Glow Drip",
      "Recovery Drip",
      "Energy Drip",
    ],
    note: "",
    color: "text-gold",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2 mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services designed specifically for youth, with student-friendly pricing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>
              <h3 className="text-xl font-heading font-bold mb-1">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{service.subtitle}</p>
              <ul className="space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              {service.note && (
                <p className="text-xs text-muted-foreground mt-4 italic">{service.note}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Student pricing banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 bg-navy rounded-2xl p-6 text-center border border-gold/20"
        >
          <GraduationCap className="w-8 h-8 text-gold mx-auto mb-3" />
          <p className="text-primary-foreground font-medium">
            🎓 Clinical & Prevention Services excl. Papsmear & Prostate <span className="text-gold font-bold">R50 for Wits Students</span> — Bring your student card
          </p>
        </motion.div>

        {/* Online Bookings Allowed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 bg-card rounded-2xl p-6 text-center border border-gold/30 shadow-sm"
        >
          <CalendarCheck className="w-8 h-8 text-gold mx-auto mb-3" />
          <h3 className="font-heading font-bold text-lg mb-2">Online Bookings Allowed</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Skip the queue — book your appointment online and we'll confirm via phone.
          </p>
          <Link to="/book">
            <Button className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold rounded-full px-8">
              Book Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
