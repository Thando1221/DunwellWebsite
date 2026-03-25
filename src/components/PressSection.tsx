import { motion } from "framer-motion";
import { ExternalLink, Newspaper } from "lucide-react";

const PressSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Newspaper className="w-4 h-4" />
            In The News
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Media Coverage
          </h2>
        </motion.div>

        <motion.a
          href="https://scrolla.africa/new-clinic-gives-braamfontein-youth-access-to-care-they-could-not-afford/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group block max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500 hover:border-accent/40">
            <div className="md:flex">
              <div className="md:w-2/5 overflow-hidden">
                <img
                  src="https://cdn.scrolla.africa/content/media/2026/03/25173508/260325-Clinic-696x522.jpeg"
                  alt="Staff at the Dunwell Youth Priority Clinic in Braamfontein"
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Scrolla.Africa
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">25 March 2026</span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-accent-foreground transition-colors">
                  New clinic gives Braamfontein youth access to care they could not afford
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  The clinic provides healthcare, mental support, drug treatment and HIV prevention
                  services designed to meet growing needs of young people in Johannesburg. Founders
                  bring years of experience in health and infrastructure.
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent-foreground group-hover:gap-3 transition-all">
                  Read full article
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};

export default PressSection;
