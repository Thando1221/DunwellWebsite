import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Wallet, MapPin, BadgeCheck, X } from "lucide-react";
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
  const [selectedFounder, setSelectedFounder] = useState<typeof founders[0] | null>(null);

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

        {/* Founders Header */}
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] border border-border hover:border-gold/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedFounder(founder)}
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

      {/* Lightbox */}
      <AnimatePresence>
        {selectedFounder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedFounder(null)}
          >
            <button
              onClick={() => setSelectedFounder(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedFounder.image}
              alt={selectedFounder.name}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 text-center text-white">
              <h4 className="font-heading font-bold text-xl">{selectedFounder.name}</h4>
              <p className="text-gold text-sm">{selectedFounder.role}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutSection;
