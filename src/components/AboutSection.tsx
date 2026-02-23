import { motion } from "framer-motion";
import { Users, Wallet, MapPin, BadgeCheck } from "lucide-react";

const features = [
  { icon: Users, label: "Youth-Focused", desc: "Serving young people" },
  { icon: Wallet, label: "Affordable", desc: "Student-friendly pricing" },
  { icon: MapPin, label: "Accessible", desc: "Braamfontein location" },
  { icon: BadgeCheck, label: "Professional", desc: "Qualified healthcare team" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-widest">About Us</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2 mb-4">
            Empowering Youth Through Quality Healthcare
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Dunwell Youth Priority Clinic is dedicated to providing accessible, affordable, and confidential healthcare services to young people. Located in the heart of Braamfontein, Johannesburg, we understand the unique health needs of youth and students.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 text-center border border-border hover:border-gold/30 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <f.icon className="w-7 h-7 text-gold" />
              </div>
              <h4 className="font-heading font-bold mb-1">{f.label}</h4>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
