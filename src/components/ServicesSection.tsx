import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, Sparkles, ShieldCheck, Brain, CalendarCheck, GraduationCap, Sparkle, ArrowRight } from "lucide-react";
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
    accent: "emerald",
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
      { name: "Stitch Removal", price: "R300" },
    ],
    badge: "R50 Student Discount",
    accent: "blue",
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
    accent: "gold",
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
    accent: "emerald",
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
    accent: "blue",
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
    accent: "gold",
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
    accent: "purple",
  },
];

const accentMap: Record<string, { ring: string; glow: string; chip: string; dot: string; price: string; iconBg: string; iconColor: string; gradient: string; orb: string }> = {
  emerald: {
    ring: "hover:ring-emerald-500/40",
    glow: "from-emerald-500/20 via-emerald-400/5",
    chip: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
    dot: "bg-emerald-500",
    price: "text-emerald-600",
    iconBg: "bg-gradient-to-br from-emerald-400 to-emerald-600",
    iconColor: "text-white",
    gradient: "from-emerald-50 to-transparent",
    orb: "bg-emerald-400/30",
  },
  blue: {
    ring: "hover:ring-blue-500/40",
    glow: "from-blue-500/20 via-blue-400/5",
    chip: "bg-blue-500/10 text-blue-700 border-blue-500/20",
    dot: "bg-blue-500",
    price: "text-blue-600",
    iconBg: "bg-gradient-to-br from-blue-400 to-blue-600",
    iconColor: "text-white",
    gradient: "from-blue-50 to-transparent",
    orb: "bg-blue-400/30",
  },
  gold: {
    ring: "hover:ring-gold/50",
    glow: "from-gold/30 via-gold/5",
    chip: "bg-gold/10 text-gold-dark border-gold/30",
    dot: "bg-gold",
    price: "text-gold-dark",
    iconBg: "bg-gradient-to-br from-gold to-gold-dark",
    iconColor: "text-accent-foreground",
    gradient: "from-amber-50 to-transparent",
    orb: "bg-gold/40",
  },
  purple: {
    ring: "hover:ring-purple-500/40",
    glow: "from-purple-500/20 via-purple-400/5",
    chip: "bg-purple-500/10 text-purple-700 border-purple-500/20",
    dot: "bg-purple-500",
    price: "text-purple-600",
    iconBg: "bg-gradient-to-br from-purple-400 to-purple-600",
    iconColor: "text-white",
    gradient: "from-purple-50 to-transparent",
    orb: "bg-purple-400/30",
  },
};

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<"current" | "new">("current");
  const services = activeTab === "current" ? currentServices : newServices;

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      {/* Decorative background orbs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-turquoise/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-turquoise font-semibold text-sm uppercase tracking-[0.25em] bg-turquoise/10 px-4 py-1.5 rounded-full">
            <Sparkle className="w-3.5 h-3.5" /> What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-4 tracking-tight">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Comprehensive healthcare designed for youth, with student-friendly pricing.
          </p>
        </motion.div>

        {/* Catalogue toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="relative inline-flex bg-card/80 backdrop-blur-sm border border-border rounded-full p-1.5 shadow-lg">
            {/* Sliding indicator */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="absolute inset-y-1.5 bg-gradient-to-r from-gold to-gold-dark rounded-full shadow-md"
              style={{
                left: activeTab === "current" ? "6px" : "50%",
                right: activeTab === "current" ? "50%" : "6px",
              }}
            />
            <button
              onClick={() => setActiveTab("current")}
              className={`relative z-10 px-6 sm:px-8 py-2.5 rounded-full text-sm font-bold transition-colors ${
                activeTab === "current" ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Current
            </button>
            <button
              onClick={() => setActiveTab("new")}
              className={`relative z-10 px-6 sm:px-8 py-2.5 rounded-full text-sm font-bold transition-colors flex items-center gap-2 ${
                activeTab === "new" ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              From 1 May 2026
              <span className={`text-[9px] font-black px-1.5 py-0.5 rounded ${
                activeTab === "new" ? "bg-accent-foreground/20 text-accent-foreground" : "bg-gold text-accent-foreground animate-pulse"
              }`}>NEW</span>
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeTab === "new" && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-2 text-sm bg-gold/10 border border-gold/30 text-foreground px-4 py-2 rounded-full">
                <CalendarCheck className="w-4 h-4 text-gold-dark" />
                Effective <strong className="font-bold">1 May 2026</strong> · Now with Mental Health
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {services.map((service, i) => {
              const a = accentMap[service.accent];
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -6 }}
                  className={`group relative bg-card rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-2xl ring-1 ring-transparent ${a.ring} transition-all duration-500`}
                >
                  {/* Animated gradient orb */}
                  <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full ${a.orb} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                  {/* Header */}
                  <div className={`relative bg-gradient-to-br ${a.gradient} px-6 pt-6 pb-5 border-b border-border/50`}>
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-14 h-14 rounded-2xl ${a.iconBg} flex items-center justify-center shadow-lg shrink-0`}
                      >
                        <service.icon className={`w-7 h-7 ${a.iconColor}`} strokeWidth={2.2} />
                      </motion.div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-heading font-bold leading-tight">{service.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1 leading-snug">{service.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="px-6 py-5">
                    <ul className="space-y-1">
                      {service.items.map((item, idx) => (
                        <motion.li
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 + idx * 0.03 }}
                          className="flex items-center justify-between py-2.5 px-2 -mx-2 rounded-lg text-sm hover:bg-muted/60 transition-colors group/item"
                        >
                          <span className="flex items-center gap-2.5 min-w-0">
                            <span className={`w-1.5 h-1.5 rounded-full ${a.dot} shrink-0 group-hover/item:scale-150 transition-transform`} />
                            <span className="truncate">{item.name}</span>
                          </span>
                          <span className={`font-bold ${a.price} ml-3 whitespace-nowrap tabular-nums`}>{item.price}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {service.badge && (
                      <div className={`mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full border ${a.chip}`}>
                        <GraduationCap className="w-3.5 h-3.5" />
                        {service.badge}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Online Bookings CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 relative overflow-hidden bg-gradient-to-br from-primary via-primary to-navy-light rounded-3xl p-10 text-center shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--gold)/0.3),transparent_50%)]" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/20 rounded-full blur-3xl" />

          <div className="relative">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="inline-flex w-14 h-14 rounded-2xl bg-gold items-center justify-center shadow-xl mb-4"
            >
              <CalendarCheck className="w-7 h-7 text-accent-foreground" />
            </motion.div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-primary-foreground mb-2">
              Skip the queue — book online
            </h3>
            <p className="text-primary-foreground/80 text-sm sm:text-base mb-6 max-w-md mx-auto">
              Reserve your slot and we'll confirm via WhatsApp.
            </p>
            <Link to="/book">
              <Button className="bg-gold hover:bg-gold-dark text-accent-foreground font-bold rounded-full px-8 h-12 text-base shadow-lg group">
                Book Appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
