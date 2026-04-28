import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Linkedin, Facebook, Sun } from "lucide-react";
import logo from "@/assets/logo-malaaji.jpg";
import { CITIES } from "@/data/cities";

export function Footer() {
  return (
    <footer className="mt-24 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <img
            src={logo}
            alt="Malaaji Solar"
            className="h-14 w-auto object-contain bg-background rounded-lg p-2 mb-4"
          />
          <p className="text-sm text-background/70 max-w-md leading-relaxed">
            Spécialiste sénégalais des solutions solaires. Distributeur officiel Livoltek — groupe
            Hexing Afrique. Nous accompagnons particuliers, entreprises et collectivités vers une
            énergie propre et durable.
          </p>
          <div className="mt-5">
            <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" /> Villes desservies
            </h4>
            <ul className="flex flex-wrap gap-2">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/solaire/$ville"
                    params={{ ville: c.slug }}
                    className="text-xs px-3 py-1 rounded-full bg-background/10 text-background/80 hover:bg-accent hover:text-accent-foreground transition-smooth"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <Sun className="h-4 w-4 text-accent" /> Navigation
          </h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li>
              <Link to="/about" className="hover:text-accent transition-smooth">
                À propos
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-accent transition-smooth">
                Produits & Services
              </Link>
            </li>
            <li>
              <Link to="/realisations" className="hover:text-accent transition-smooth">
                Réalisations
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-accent transition-smooth">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/plan-du-site" className="hover:text-accent transition-smooth">
                Plan du site
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" /> Thiès Sud — Stade, en face
              PLAN International, Villa N° 425, Niveau 1
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" /> +221 78 715 88 88
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 rounded-full bg-background/10 hover:bg-accent hover:text-accent-foreground transition-smooth"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded-full bg-background/10 hover:bg-accent hover:text-accent-foreground transition-smooth"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6 text-xs text-background/50 flex flex-col md:flex-row gap-2 md:justify-between">
          <span>© {new Date().getFullYear()} Malaaji Solar. Tous droits réservés.</span>
          <span>Partenaire officiel Livoltek · Hexing Afrique</span>
        </div>
      </div>
    </footer>
  );
}
