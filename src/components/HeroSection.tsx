import { motion } from "framer-motion";
import { ArrowRight, Shield, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import clinicConsultation from "@/assets/clinic-consultation.jpeg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={clinicConsultation}
          alt="Dunwell Youth Priority Clinic consultation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40 dark:from-background/95 dark:via-background/85 dark:to-background/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 bg-gold/20 text-gold border border-gold/30 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            Youth-Focused Healthcare
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground dark:text-foreground leading-tight mb-6">
            Your Health,{" "}
            <span className="text-gradient">Our Priority</span>
          </h1>

          <p className="text-lg text-grey-mid dark:text-muted-foreground mb-8 max-w-lg">
            Affordable, confidential healthcare services for young people in Braamfontein, Johannesburg. Free clinical & prevention services for students.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#services">
              <Button className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold rounded-full px-8 py-6 text-base gap-2">
                Our Services
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="tel:0721760247">
              <Button variant="outline" className="rounded-full px-8 py-6 text-base border-grey-mid/30 text-primary-foreground dark:text-foreground hover:bg-primary-foreground/10 dark:hover:bg-foreground/10">
                Book Appointment
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-grey-mid dark:text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-gold" />
              Free Prevention
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-gold" />
              Youth Focused
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold" />
              Walk-ins Welcome
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
