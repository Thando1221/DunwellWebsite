import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_REVIEW_LINK =
  "https://www.google.com/search?sca_esv=016f34706b28a015&sxsrf=ANbL-n5slKEOTlCp9uZKAU1KMLsk14CRpw:1771959581660&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZSy2yvm7jHxINRznto0lAoKi9OQH4nLaAHdA21jLrkTy4LgeOuk4jvjuXhjm1ye3LvYRK_ShmVwkuz9rsXuo-VkY6ccNhRxI8giETqmZo9-nX-OMA%3D%3D&q=Dunwell+youth+priority+clinic+Reviews&sa=X&ved=2ahUKEwjR0a7r5_KSAxVq_rsIHUOWJFMQ0bkNegQIIhAH&biw=1280&bih=632&dpr=1.5#lrd=0x1e950d4275333665:0xdda1b46b9d352687,3,,,,";

const RatingSection = () => {
  return (
    <section id="reviews" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-turquoise font-semibold text-base uppercase tracking-widest">
            Patient Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            See what our patients are saying about Dunwell Youth Priority Clinic on Google.
          </p>

          {/* CTA to rate on Google */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm max-w-lg mx-auto"
          >
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-8 h-8 text-gold fill-gold" />
              ))}
            </div>
            <h3 className="font-heading font-bold text-xl mb-2">
              Rate Dunwell Youth Priority Clinic
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Click below to leave a review on Google — your feedback helps us serve you better!
            </p>
            <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold rounded-full px-8 gap-2">
                <ExternalLink className="w-4 h-4" />
                Click to Rate on Google
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RatingSection;
