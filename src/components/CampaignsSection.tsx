import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import campaignWomensDay from "@/assets/campaign-womens-day.jpg";
import campaignHiv from "@/assets/campaign-hiv.jpg";
import campaignStudent from "@/assets/campaign-student.jpg";
import campaignMentalHealth from "@/assets/campaign-mental-health.jpg";

const campaigns = [
  {
    badge: "40% OFF",
    tag: "Women's Day",
    title: "Women's Day Special",
    desc: "Celebrate Women's Day with discounted wellness packages. Free Papsmear screening, discounted glow drips, and comprehensive women's health checkups.",
    highlights: ["Free Papsmear", "Glow Drip – R150", "Full Checkup – R99"],
    period: "1 – 31 August",
    image: campaignWomensDay,
  },
  {
    badge: "FREE Testing",
    tag: "HIV Awareness",
    title: "HIV Awareness Month",
    desc: "Know your status. Free HIV testing, discounted PrEP & PEP, and confidential counselling sessions for all youth.",
    highlights: ["Free HIV Test", "PrEP/PEP – R30", "Counselling – Free"],
    period: "1 – 30 November",
    image: campaignHiv,
  },
  {
    badge: "50% OFF",
    tag: "Student Special",
    title: "Student Health Week",
    desc: "Exclusive health packages for university students. Show your student card and access discounted consultations, STI screening, and vitamin boosters.",
    highlights: ["Consultation – R25", "STI Screen – R40", "VitBco – R80"],
    period: "Feb & Jul (Registration)",
    image: campaignStudent,
  },
  {
    badge: "FREE Session",
    tag: "Mental Health",
    title: "Mental Health Awareness",
    desc: "Your mental health matters. Free initial counselling sessions and discounted wellness drips to help you destress and recharge.",
    highlights: ["1st Session Free", "Detox Drip – R120", "Recovery Drip – R130"],
    period: "1 – 31 October",
    image: campaignMentalHealth,
  },
];

const CampaignsSection = () => {
  return (
    <section id="campaigns" className="py-20 bg-navy dark:bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-widest">Special Offers</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2 mb-4 text-primary-foreground dark:text-foreground">
            Campaigns & Specials
          </h2>
          <p className="text-grey-mid dark:text-muted-foreground max-w-2xl mx-auto">
            Take advantage of our seasonal health campaigns with exclusive discounts and free services for youth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {campaigns.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card dark:bg-secondary/30 rounded-2xl overflow-hidden border border-border hover:border-gold/30 transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gold text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">{c.badge}</span>
                <span className="text-sm text-muted-foreground">{c.tag}</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {c.highlights.map((h) => (
                  <span key={h} className="bg-muted text-foreground text-xs px-3 py-1.5 rounded-full font-medium">{h}</span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{c.period}</span>
                <a href="tel:0721760247">
                  <Button size="sm" className="bg-gold hover:bg-gold-dark text-accent-foreground rounded-full gap-1">
                    <Phone className="w-3 h-3" />
                    Book Now
                  </Button>
                </a>
              </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-grey-mid dark:text-muted-foreground mt-8">
          T&Cs apply. Specials valid during campaign periods only.
        </p>
      </div>
    </section>
  );
};

export default CampaignsSection;
