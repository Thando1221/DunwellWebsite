import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, Sparkles, ShieldCheck, Brain, CalendarCheck, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const currentServices = [
  {
    icon: ShieldCheck,
    title: "Prevention",
    subtitle: "Proactive care to keep you healthy",
    items: [
      { name: "Family Planning", price: "R150" },
      { name: "Implanon Insertion", price: "R300" },
      { name: "Implanon Removal", price: "R350" },
      { name: "HIV PrEP", price: "R350" },
      { name: "HIV PEP", price: "R350" },
      { name: "Emergency Pills", price: "R150" },
      { name: "Papsmear", price: "R300" },
      { name: "Prostate", price: "R300" },
    ],
    badge: "R50 Student Discount",
    badgeIcon: GraduationCap,
    gradient: "from-emerald-500/10 to-emerald-600/5",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
  {
    icon: Stethoscope,
    title: "Clinical",
    subtitle: "Consultations & treatment (incl. meds, excl. lab tests)",
    items: [
      { name: "Consultation", price: "R250" },
      { name: "STI Treatment", price: "R350" },
      { name: "HIV Care", price: "R300" },
      { name: "Chronic Illness", price: "R300" },
      { name: "Skin Care from", price: "R300" },
      { name: "Wound Care from", price: "R300" },
      { name: "Stitch Removal", price: "R300" },
    ],
    badge: "R50 Student Discount",
    badgeIcon: GraduationCap,
    gradient: "from-blue-500/10 to-blue-600/5",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Sparkles,
    title: "Wellness",
    subtitle: "Boost your health with premium wellness treatments",
    items: [
      { name: "Pregnancy Test", price: "R50" },
      { name: "BP / Glucose Test", price: "R50" },
      { name: "HIV Test", price: "R100" },
      { name: "Vit Bco / B12 / C", price: "R50" },
      { name: "Glutathione", price: "R200" },
      { name: "Acne Care / Skin Care", price: "R300" },
      { name: "Detox Drip", price: "R600" },
      { name: "Glow Drip", price: "R500" },
      { name: "Recovery Drip", price: "R400" },
      { name: "Energy Drip", price: "R450" },
    ],
    badge: null,
    badgeIcon: null,
    gradient: "from-amber-500/10 to-yellow-500/5",
    iconBg: "bg-gold/10",
    iconColor: "text-gold",
  },
];

const newServices = [
  {
    icon: ShieldCheck,
    title: "Prevention",
    subtitle: "Proactive care to keep you healthy",
    items: [
      { name: "Family Planning (Injection)", price: "R150" },
      { name: "Family Planning Pills", price: "R200" },
      { name: "Implanon Insertion", price: "R300" },
      { name: "Implanon Removal", price: "R350" },
      { name: "HIV PrEP", price: "R350" },
      { name: "HIV PEP", price: "R300" },
      { name: "Emergency Pills", price: "R350" },
      { name: "Pap Smear", price: "R300" },
      { name: "Prostate", price: "R300" },
    ],
    badge: "R50 Student Discount",
    badgeIcon: GraduationCap,
    gradient: "from-emerald-500/10 to-emerald-600/5",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
  {
    icon: Stethoscope,
    title: "Clinical",
    subtitle: "Consultations & treatment (incl. meds, excl. lab tests)",
    items: [
      { name: "Consultation", price: "R300" },
      { name: "Follow-Up Consultation", price: "R150" },
      { name: "STI Treatment", price: "R350" },
      { name: "HIV Care", price: "R300" },
      { name: "Chronic Illness Management", price: "R300" },
      { name: "Wound Care from", price: "R300" },
      { name: "Stitch Removal", price: "R300" },
    ],
    badge: "R50 Student Discount",
    badgeIcon: GraduationCap,
    gradient: "from-blue-500/10 to-blue-600/5",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Sparkles,
    title: "Wellness",
    subtitle: "Boost your health with premium wellness treatments",
    items: [
      { name: "Pregnancy Test", price: "R50" },
      { name: "BP / Glucose Test", price: "R50" },
      { name: "HIV Test", price: "R100" },
      { name: "Vitamins (B12/C)", price: "R50" },
      { name: "Glutathione Shots", price: "R200" },
      { name: "Acne Care / Skin Care", price: "R300" },
      { name: "Detox Drip", price: "R600" },
      { name: "Glow Drip", price: "R500" },
      { name: "Recovery Drip", price: "R400" },
      { name: "Energy Drip", price: "R450" },
    ],
    badge: null,
    badgeIcon: null,
    gradient: "from-amber-500/10 to-yellow-500/5",
    iconBg: "bg-gold/10",
    iconColor: "text-gold",
  },
  {
    icon: Brain,
    title: "Mental Health",
    subtitle: "Confidential counselling & therapy sessions",
    items: [
      { name: "Individual Session (1 Hour)", price: "R200" },
      { name: "Couples Session (Per Hour)", price: "R350" },
      { name: "Family Package — 4+ People (Per Hour)", price: "R150 pp" },
    ],
    badge: null,
    badgeIcon: null,
    gradient: "from-purple-500/10 to-purple-600/5",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<"current" | "new">("current");
  const services = activeTab === "current" ? currentServices : newServices;

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-turquoise font-semibold text-base uppercase tracking-widest">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2 mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare services designed specifically for youth, with student-friendly pricing.
          </p>
        </motion.div>

        {/* Catalogue toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-card border border-border rounded-full p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("current")}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === "current"
                  ? "bg-gold text-accent-foreground shadow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Current Catalogue
            </button>
            <button
              onClick={() => setActiveTab("new")}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === "new"
                  ? "bg-gold text-accent-foreground shadow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              From 1 May 2026
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                activeTab === "new" ? "bg-accent-foreground/15 text-accent-foreground" : "bg-gold/15 text-gold"
              }`}>NEW</span>
            </button>
          </div>
        </div>

        {activeTab === "new" && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-sm text-muted-foreground mb-6"
          >
            🗓️ New pricing & services effective <strong className="text-foreground">1 May 2026</strong> — now including Mental Health support.
          </motion.p>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl hover:border-gold/30 transition-all duration-300 group`}
              >
                <div className={`bg-gradient-to-r ${service.gradient} px-6 py-5 flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold">{service.title}</h3>
                      <p className="text-xs text-muted-foreground">{service.subtitle}</p>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4">
                  <ul className="divide-y divide-border">
                    {service.items.map((item) => (
                      <li key={item.name} className="flex items-center justify-between py-3 text-sm hover:bg-muted/50 -mx-2 px-2 rounded-lg transition-colors">
                        <span className="flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                          {item.name}
                        </span>
                        <span className="font-bold text-gold ml-4 whitespace-nowrap">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                  {service.badge && (
                    <p className="text-xs text-muted-foreground mt-3 italic flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-gold" />
                      Student discount: R50 on all clinical services
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Online Bookings CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-card rounded-2xl p-8 text-center border border-gold/30 shadow-sm"
        >
          <CalendarCheck className="w-10 h-10 text-gold mx-auto mb-4" />
          <h3 className="font-heading font-bold text-xl mb-2">Online Bookings Allowed</h3>
          <p className="text-muted-foreground text-sm mb-5 max-w-md mx-auto">
            Skip the queue — book your appointment online and we'll confirm via WhatsApp.
          </p>
          <Link to="/book">
            <Button className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold rounded-full px-10 h-12 text-base">
              Book Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
