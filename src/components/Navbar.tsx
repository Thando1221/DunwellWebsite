import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Campaigns", href: "#campaigns" },
  { label: "Ask Anonymously", href: "#ask" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
            <span className="font-heading font-bold text-accent-foreground text-sm">DW</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-heading font-bold text-foreground leading-tight">DUNWELL</p>
            <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Youth Priority Clinic</p>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link to="/book" className="hidden sm:inline-flex">
            <Button className="bg-gold hover:bg-gold-dark text-accent-foreground font-semibold rounded-full gap-2">
              <Phone className="w-4 h-4" />
              Book Now
            </Button>
          </Link>
          <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-b border-border pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Link to="/book">
              <Button className="w-full bg-gold hover:bg-gold-dark text-accent-foreground font-semibold rounded-full gap-2">
                <Phone className="w-4 h-4" />
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
