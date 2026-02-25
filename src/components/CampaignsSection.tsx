import { motion } from "framer-motion";
import { GraduationCap, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import campaignStudent from "@/assets/campaign-student-discount.jpg";

const studentServices = [
  { name: "Consultation (incl meds)", normal: "R250", student: "R50" },
  { name: "Family Planning", normal: "R150", student: "R50" },
  { name: "HIV Testing", normal: "R100", student: "R50" },
  { name: "STI Management", normal: "R300", student: "R50" },
  { name: "Acne Care", normal: "R250", student: "R50" },
  { name: "BP / HGT Check", normal: "R50", student: "R50" },
];

const CampaignsSection = () => {
  return (
    <section id="campaigns" className="py-20 bg-navy">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-widest">Special Offers</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2 mb-4 text-primary-foreground">
            Student Discount
          </h2>
          <p className="text-grey-mid max-w-2xl mx-auto">
            Dunwell Youth Priority Clinic offers R50 on all clinical services for university students. Just bring your student card!
          </p>
        </motion.div>

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

            {/* Price comparison table */}
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
  );
};

export default CampaignsSection;
