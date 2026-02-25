import { motion } from "framer-motion";
import { Stethoscope, Sparkles, CalendarCheck, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Stethoscope,
    title: "Clinical Services",
    subtitle: "Professional medical consultations & treatment",
    items: [
      { name: "Consultation (incl meds)", price: "R250" },
      { name: "Family Planning", price: "R150" },
      { name: "Implanon Insertion", price: "R300" },
      { name: "Implanon Removal", price: "R350" },
      { name: "Pregnancy Test", price: "R50" },
      { name: "HIV Testing", price: "R100" },
      { name: "HIV PrEP/PEP", price: "R350" },
      { name: "HIV Care (Excl labs)", price: "R350" },
      { name: "Chronic Illness", price: "R300" },
      { name: "STI Management", price: "R300" },
      { name: "Acne Care", price: "R250" },
      { name: "Papsmear / PSA", price: "R250" },
      { name: "BP / HGT Check", price: "R50" },
    ],
    badge: "R50 Student Discount",
    badgeIcon: GraduationCap,
    gradient: "from-blue-500/10 to-blue-600/5",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Sparkles,
    title: "Wellness Services",
    subtitle: "Boost your health with premium wellness treatments",
    items: [
      { name: "Vita Shots (Bco/C/B12/Magnesium)", price: "R50" },
      { name: "Glutathione Shot", price: "R200" },
      { name: "Glow Drip", price: "R500" },
      { name: "Recovery Drip", price: "R400" },
      { name: "Energy Drip", price: "R300" },
      { name: "Hangover Drip", price: "R350" },
    ],
    badge: null,
    badgeIcon: null,
    gradient: "from-amber-500/10 to-yellow-500/5",
    iconBg: "bg-gold/10",
    iconColor: "text-gold",
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

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-xl hover:border-gold/30 transition-all duration-300 group`}
            >
              {/* Header gradient strip */}
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
                {service.badge && service.badgeIcon && (
                  <span className="hidden sm:flex items-center gap-1.5 bg-gold/15 text-gold text-xs font-semibold px-3 py-1.5 rounded-full">
                    <service.badgeIcon className="w-3.5 h-3.5" />
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Items */}
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
        </div>

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
