import { Instagram, Facebook } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.3z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-navy py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
              <span className="font-heading font-bold text-accent-foreground text-sm">DW</span>
            </div>
            <div>
              <p className="font-heading font-bold text-primary-foreground">DUNWELL</p>
              <p className="text-xs text-grey-mid tracking-wider uppercase">Youth Priority Clinic</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/dunwellyouthpriority/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors text-primary-foreground hover:text-gold"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@dunwell_clinic?_r=1&_t=ZS-94Dv9TCLStM"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors text-primary-foreground hover:text-gold"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://www.facebook.com/share/1KqaSmzonu/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 dark:bg-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors text-primary-foreground dark:text-foreground hover:text-gold"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-grey-mid">
            © {new Date().getFullYear()} Dunwell Youth Priority Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
