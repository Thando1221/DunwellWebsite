import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Phone, X, MapPin, Globe, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import campaignStudent from "@/assets/campaign-student-discount.jpg";
import campaignTb from "@/assets/campaign-tb-awareness.png";

const studentServices = [
  { name: "Consultation (incl meds)", normal: "R250", student: "R50" },
  { name: "Family Planning", normal: "R150", student: "R50" },
  { name: "HIV Testing", normal: "R100", student: "R50" },
  { name: "STI Management", normal: "R300", student: "R50" },
  { name: "Acne Care", normal: "R250", student: "R50" },
  { name: "BP / HGT Check", normal: "R50", student: "R50" },
];

const tbInfo = {
  symptoms: ["Persistent Cough", "Chest Pain", "Night Sweats"],
  spreads: ["Through the air", "Coughing & Sneezing", "Close Contact"],
  prevention: ["Get Tested", "Take Your Medicine", "Stay Healthy"],
};

const CampaignsSection = () => {
  const [tbModalOpen, setTbModalOpen] = useState(false);

  return (
    <>
      <section id="campaigns" className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-turquoise font-semibold text-base uppercase tracking-widest">Special Offers & Awareness</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2 mb-4 text-primary-foreground">
              Campaigns & Promotions
            </h2>
            <p className="text-grey-mid max-w-2xl mx-auto">
              Stay informed with our monthly health awareness campaigns and take advantage of our special offers.
            </p>
          </motion.div>

          {/* Monthly Awareness - World TB Day */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-gold" />
              <span className="text-gold font-heading font-bold text-sm uppercase tracking-widest">March — Monthly Awareness</span>
            </div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setTbModalOpen(true)}
              className="relative rounded-2xl overflow-hidden border border-border cursor-pointer group shadow-lg shadow-black/20"
            >
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src={campaignTb}
                  alt="World TB Awareness Day — Learn, Protect, Prevent"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full">
                      World TB Day
                    </span>
                    <span className="bg-gold text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                      March 2026
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                    World TB Awareness — Learn. Protect. Prevent.
                  </h3>
                  <p className="text-white/70 text-sm mt-1">Tap to learn more about Tuberculosis</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Student Discount */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-card rounded-2xl overflow-hidden border border-border"
          >
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img
                src={campaignStudent}
                alt="University students enjoying campus life"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <span className="bg-gold text-accent-foreground text-sm font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  R50 Student Special
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-heading font-bold mb-2">
                All Clinical Services — Only R50
              </h3>
              <p className="text-muted-foreground mb-6">
                Show your valid university student card and access any clinical service for just R50. Available year-round for registered students.
              </p>

              <div className="rounded-xl border border-border overflow-hidden mb-6">
                <div className="grid grid-cols-3 bg-muted text-xs font-semibold uppercase tracking-wider px-4 py-3">
                  <span>Service</span>
                  <span className="text-center">Normal</span>
                  <span className="text-center text-gold">Student</span>
                </div>
                {studentServices.map((s) => (
                  <div key={s.name} className="grid grid-cols-3 px-4 py-3 border-t border-border text-sm">
                    <span>{s.name}</span>
                    <span className="text-center text-muted-foreground line-through">{s.normal}</span>
                    <span className="text-center font-bold text-gold">{s.student}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  🎓 Valid student card required. Clinical services only — wellness drips excluded.
                </p>
                <Link to="/book">
                  <Button className="bg-gold hover:bg-gold-dark text-accent-foreground rounded-full gap-2 px-6">
                    <Phone className="w-4 h-4" />
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          <p className="text-center text-xs text-grey-mid mt-8">
            T&Cs apply. Student discount valid with a valid university student card.
          </p>
        </div>
      </section>

      {/* Fullscreen TB Awareness Modal */}
      <AnimatePresence>
        {tbModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setTbModalOpen(false)}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => setTbModalOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-3 transition-colors"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: 15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: -15 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full h-full sm:w-[90vw] sm:h-[90vh] sm:max-w-5xl sm:rounded-2xl overflow-hidden relative flex flex-col"
            >
              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto bg-gradient-to-b from-sky-900 via-sky-800 to-sky-900">
                {/* Hero image */}
                <motion.div
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <img
                    src={campaignTb}
                    alt="World TB Awareness"
                    className="w-full h-auto max-h-[50vh] object-contain"
                  />
                </motion.div>

                {/* Info cards */}
                <div className="px-4 sm:px-8 py-6 space-y-6">
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl sm:text-3xl font-heading font-bold text-white text-center"
                  >
                    What is Tuberculosis (TB)?
                  </motion.h2>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { title: "Symptoms", items: tbInfo.symptoms, color: "from-green-600 to-green-800", emoji: "🫁" },
                      { title: "How It Spreads", items: tbInfo.spreads, color: "from-blue-500 to-blue-700", emoji: "💨" },
                      { title: "Prevention", items: tbInfo.prevention, color: "from-amber-500 to-amber-700", emoji: "🛡️" },
                    ].map((card, i) => (
                      <motion.div
                        key={card.title}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + i * 0.1, type: "spring", damping: 20 }}
                        className={`rounded-xl bg-gradient-to-b ${card.color} p-5 text-white shadow-xl`}
                      >
                        <h3 className="font-heading font-bold text-lg mb-3 flex items-center gap-2">
                          <span className="text-xl">{card.emoji}</span> {card.title}
                        </h3>
                        <ul className="space-y-2">
                          {card.items.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                              <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center space-y-4"
                  >
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                      Get Tested & Stay Safe!
                    </h3>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-white/80 text-sm">
                      <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> 38 De Beer St, Braamfontein</span>
                      <span className="hidden sm:block">•</span>
                      <span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4" /> 072 176 0247</span>
                    </div>
                    <Link to="/book" onClick={() => setTbModalOpen(false)}>
                      <Button className="bg-gold hover:bg-gold-dark text-accent-foreground rounded-full gap-2 px-8 py-3 text-base font-bold mt-2">
                        <Phone className="w-5 h-5" />
                        Book Now
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CampaignsSection;
