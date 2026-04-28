import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-malaaji.jpg";

const nav = [
  { to: "/", label: "Accueil" },
  { to: "/about", label: "À propos" },
  { to: "/services", label: "Produits & Services" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Malaaji Solar" className="h-12 w-auto object-contain transition-smooth group-hover:scale-105" />
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-smooth rounded-md hover:bg-secondary"
              activeProps={{ className: "px-4 py-2 text-sm font-semibold text-primary rounded-md bg-secondary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+221787158888"
          className="hidden lg:inline-flex items-center gap-2 bg-leaf-gradient text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-elegant hover:opacity-90 transition-smooth"
        >
          <Phone className="h-4 w-4" /> +221 78 715 88 88
        </a>
        <button
          aria-label="Menu"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-md text-foreground hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <a href="tel:+221787158888" className="mt-2 inline-flex items-center justify-center gap-2 bg-leaf-gradient text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold">
              <Phone className="h-4 w-4" /> +221 78 715 88 88
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
