import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "38 De Beer Street, Braamfontein, Johannesburg", href: "https://maps.google.com/?q=38+De+Beer+Street+Braamfontein+Johannesburg" },
  { icon: Phone, label: "Phone", value: "072 176 0247", href: "tel:0721760247" },
  { icon: Mail, label: "Email", value: "admin@dunwellyouthpriority.co.za", href: "mailto:admin@dunwellyouthpriority.co.za" },
  { icon: Globe, label: "Website", value: "www.dunwellyouthpriority.co.za", href: "https://www.dunwellyouthpriority.co.za/" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold font-medium text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2">Visit Our Clinic</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border space-y-6">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group hover:bg-muted p-3 rounded-xl -mx-3 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
