import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ChevronRight } from "lucide-react";
import { CITIES } from "@/data/cities";

export const Route = createFileRoute("/plan-du-site")({
  head: () => ({
    meta: [
      { title: "Plan du site — Malaaji Solar" },
      {
        name: "description",
        content:
          "Plan du site Malaaji Solar : accédez rapidement à toutes les pages, services solaires et zones d'intervention au Sénégal.",
      },
      { property: "og:title", content: "Plan du site — Malaaji Solar" },
      {
        property: "og:description",
        content: "Toutes les pages et services de Malaaji Solar en un coup d'œil.",
      },
    ],
    links: [{ rel: "canonical", href: "https://malaaji-solar.sn/plan-du-site" }],
  }),
  component: SitemapPage,
});

type SitemapLink = { to: string; label: string; desc?: string; params?: Record<string, string> };

const sections: { title: string; links: SitemapLink[] }[] = [
  {
    title: "Pages principales",
    links: [
      { to: "/", label: "Accueil", desc: "Présentation de Malaaji Solar" },
      { to: "/about", label: "À propos", desc: "Notre mission et nos partenaires" },
      { to: "/services", label: "Produits & Services", desc: "Catalogue complet de nos solutions" },
      { to: "/realisations", label: "Réalisations", desc: "Projets installés au Sénégal" },
      { to: "/contact", label: "Contact", desc: "Devis gratuit sous 24h" },
    ],
  },
  {
    title: "Nos services solaires",
    links: [
      { to: "/services", label: "Panneaux solaires photovoltaïques" },
      { to: "/services", label: "Batteries & stockage lithium Livoltek" },
      { to: "/services", label: "Kits solaires résidentiels (5 KVA – 30 KW)" },
      { to: "/services", label: "Pompes solaires & forages" },
      { to: "/services", label: "Mini-centrales pour entreprises & collectivités" },
      { to: "/services", label: "Bornes de recharge & mobilité électrique" },
    ],
  },
  {
    title: "Pages villes dédiées",
    links: CITIES.map((c) => ({
      to: "/solaire/$ville",
      params: { ville: c.slug },
      label: `Solaire à ${c.name}`,
      desc: c.intro.slice(0, 90) + "…",
    })),
  },
  {
    title: "Autres zones d'intervention",
    links: [
      { to: "/contact", label: "Solaire à Ziguinchor" },
      { to: "/contact", label: "Solaire à Touba & Diourbel" },
      { to: "/contact", label: "Solaire à Louga, Tambacounda, Kolda" },
      { to: "/contact", label: "Solaire à Fatick, Matam, Kédougou" },
    ],
  },
];

function SitemapPage() {
  return (
    <Layout>
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Plan du site
          </span>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
            Toutes nos pages <span className="text-hero-gradient">en un coup d'œil</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Naviguez facilement à travers le site Malaaji Solar : pages, services et zones
            d'intervention au Sénégal.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-20 max-w-5xl space-y-12">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">{s.title}</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {s.links.map((l, i) => (
                <li key={`${l.label}-${i}`}>
                  <Link
                    to={l.to}
                    params={l.params as never}
                    className="group flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/40 hover:shadow-elegant transition-smooth"
                  >
                    <ChevronRight className="h-4 w-4 mt-1 text-primary shrink-0 group-hover:translate-x-1 transition-smooth" />
                    <div>
                      <div className="font-medium">{l.label}</div>
                      {l.desc && (
                        <div className="text-sm text-muted-foreground mt-0.5">{l.desc}</div>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </Layout>
  );
}
