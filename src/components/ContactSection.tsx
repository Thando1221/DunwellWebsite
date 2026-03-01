import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Instagram, Facebook } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.3z" />
  </svg>
);

const contactInfo = [
  { icon: MapPin, label: "Address", value: "38 De Beer Street, Braamfontein, Johannesburg", href: "https://maps.google.com/?q=38+De+Beer+Street+Braamfontein+Johannesburg" },
  { icon: Phone, label: "Phone", value: "072 176 0247", href: "tel:0721760247" },
  { icon: Mail, label: "Email", value: "admin@dunwellyouthpriority.co.za", href: "mailto:admin@dunwellyouthpriority.co.za" },
  { icon: Globe, label: "Website", value: "www.dunwellyouthpriority.co.za", href: "https://www.dunwellyouthpriority.co.za/" },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/dunwellyouthpriority/" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1KqaSmzonu/" },
  { icon: TikTokIcon, label: "TikTok", href: "https://www.tiktok.com/@dunwell_clinic?_r=1&_t=ZS-94Dv9TCLStM" },
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
          <span className="text-turquoise font-medium text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mt-2">Visit Our Clinic</h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-card rounded-2xl p-8 border border-border space-y-6">
            <h3 className="font-heading font-bold text-lg mb-2">Contact Information</h3>
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

            {/* Social Media */}
            <div className="pt-4 border-t border-border">
              <h4 className="font-heading font-semibold text-sm mb-3 text-muted-foreground uppercase tracking-wider">Follow Us</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors text-gold"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-border h-[400px] md:h-full min-h-[300px]"
          >
            <iframe
              title="Dunwell Youth Priority Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5!2d28.0389!3d-26.1925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s38+De+Beer+Street%2C+Braamfontein%2C+Johannesburg!5e0!3m2!1sen!2sza!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
