import { motion } from "framer-motion";
import { Users, Wallet, MapPin, BadgeCheck } from "lucide-react";
import thandoImg from "@/assets/thando-cele.jpg";
import njabuloImg from "@/assets/nonjabulo-mbuthu.jpg";

const features = [
  { icon: Users, label: "Youth-Focused", desc: "Serving young people" },
  { icon: Wallet, label: "Affordable", desc: "Student-friendly pricing" },
  { icon: MapPin, label: "Accessible", desc: "Braamfontein location" },
  { icon: BadgeCheck, label: "Professional", desc: "Qualified healthcare team" },
];

const founders = [
  {
    name: "Thando Cele",
    role: "Executive Director & Co-Founder",
    image: thandoImg,
  },
  {
    name: "Nonjabulo Mbuthu",
    role: "Programme Director & Co-Founder",
    image: njabuloImg,
  },
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
            Dunwell Youth Priority Clinic is a private health facility providing services including Consultations, Family Planning, HIV Management, STI Management, Skin Care, Vitamins, and Office Procedures. Located in the heart of Braamfontein, Johannesburg.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-widest">Leadership</span>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold mt-2">
            Meet the Founders
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <h4 className="font-heading font-bold text-xl text-white">{founder.name}</h4>
                <p className="text-gold text-sm font-medium">{founder.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
