import { Link, useLocation } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { motion } from "framer-motion";
import cozyLogo from "@/assets/cozy-logo-2.png";
import NewsletterPopup from "@/components/NewsletterPopup";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/gallery", label: "Gallery" },
  { to: "/custom-order", label: "Order Form" },
  { to: "/faq", label: "FAQ" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <NewsletterPopup />
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto liquid-glass-strong rounded-2xl px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={cozyLogo} alt="Cozy Creations" className="h-10 w-auto" />
            <span className="font-display text-xl font-bold text-foreground">
              Cozy Creations
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.to
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Mobile menu */}
          <div className="flex md:hidden items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  location.pathname === link.to
                    ? "bg-primary/20 text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col items-center gap-6">
            <img src={cozyLogo} alt="Cozy Creations" className="h-14 w-auto" />
            <p className="text-muted-foreground text-center max-w-md">
              Tufted rugs at the intersection of nostalgia and technology. Designed digitally, made by hand, rooted in the art that raised us.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/cozycreations412/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full liquid-glass flex items-center justify-center text-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:cozycreations412@gmail.com"
                className="w-11 h-11 rounded-full liquid-glass flex items-center justify-center text-foreground hover:text-primary transition-colors hover:scale-110 transform duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              © 2026 Cozy Creations. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
