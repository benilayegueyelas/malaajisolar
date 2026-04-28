import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import {
  Sun,
  Battery,
  Zap,
  Droplets,
  Building2,
  Car,
  Lightbulb,
  Gauge,
  Check,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Produits & Services — Malaaji Solar" },
      {
        name: "description",
        content:
          "Découvrez nos kits solaires 5 KVA à 30 KW, panneaux Livoltek, batteries lithium, pompes solaires, mini-centrales et bornes de recharge.",
      },
      { property: "og:title", content: "Produits & Services solaires Livoltek" },
      {
        property: "og:description",
        content:
          "Kits 5 KVA, 10 KW, 15 KW, 30 KW triphasés. Panneaux, batteries, pompes, lampadaires, mini-centrales.",
      },
    ],
  }),
  component: ServicesPage,
});

const products = [
  {
    i: Sun,
    t: "Panneaux solaires",
    d: "Photovoltaïques de haute efficacité, adaptés à diverses installations résidentielles et industrielles.",
  },
  {
    i: Battery,
    t: "Stockage d'énergie",
    d: "Batteries solaires Livoltek pour stocker l'énergie excédentaire et l'utiliser en période de faible ensoleillement.",
  },
  {
    i: Zap,
    t: "Kits solaires clé en main",
    d: "Solutions complètes pour foyers et petites entreprises : panneaux, régulateurs, onduleurs et batteries.",
  },
  {
    i: Droplets,
    t: "Pompes solaires",
    d: "Pompage AC/DC pour forages, irrigation et alimentation en eau de villages.",
  },
  {
    i: Lightbulb,
    t: "Lampadaires solaires",
    d: "Éclairage public autonome, robuste et sans facture électrique.",
  },
  {
    i: Building2,
    t: "Mini-centrales",
    d: "Installations industrielles et communautaires de plusieurs centaines de kWh.",
  },
  { i: Car, t: "Voitures électriques", d: "Véhicules zéro émission distribués au Sénégal." },
  {
    i: Gauge,
    t: "Bornes de recharge solaire",
    d: "Compteurs et stations de recharge pour véhicules électriques.",
  },
];

const kits = [
  {
    name: "KIT 5 KVA",
    appliances: [
      "5 lampes 20W",
      "1 ventilateur",
      "2 climatiseurs 1.5CV",
      "1 frigo",
      "3 caméras",
      "2 PC",
      "1 TV",
    ],
    badge: "Maison familiale",
  },
  {
    name: "KIT AIO 5 KVA",
    appliances: [
      "5 lampes 20W",
      "1 ventilateur",
      "2 climatiseurs 1.5CV",
      "1 frigo",
      "3 caméras",
      "2 PC",
      "1 TV",
    ],
    badge: "Tout-en-un",
  },
  {
    name: "KIT 10 KW Monophasé",
    appliances: [
      "20 lampes 20W",
      "5 ventilateurs",
      "2 clim 1.5CV + 1 clim 2CV",
      "3 frigos",
      "3 caméras",
      "2 PC",
      "2 TV",
    ],
    badge: "Grande maison",
  },
  {
    name: "KIT 10 KW Triphasé",
    appliances: [
      "10 lampes 20W",
      "3 ventilateurs",
      "2 clim 1.5CV + 1 clim 2CV",
      "2 frigos",
      "3 caméras",
      "2 PC",
      "2 TV",
    ],
    badge: "PME",
  },
  {
    name: "KIT 15 KW Triphasé",
    appliances: [
      "13 lampes",
      "6 ventilateurs",
      "2 clim 1.5CV + 2 clim 2CV",
      "3 frigos",
      "Micro-onde, Nespresso, fontaine",
      "TV, PC, caméras",
    ],
    badge: "Villa premium",
  },
  {
    name: "KIT 30 KW Triphasé",
    appliances: [
      "30 lampes",
      "8 ventilateurs",
      "5 clim 1.5CV + 4 clim 2CV",
      "7 frigos",
      "Multi-équipements pro",
      "Bureaux & commerces",
    ],
    badge: "Entreprise",
  },
];

function ServicesPage() {
  return (
    <Layout>
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Produits & Services
          </span>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
            Toute la gamme <span className="text-hero-gradient">Livoltek</span>, sous un seul toit.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            De la lampe solaire au mini-réseau industriel, nous exploitons toutes les gammes des
            solutions solaires pour répondre aux besoins énergétiques de chaque catégorie de
            clients.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.t}
              className="p-6 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-elegant hover:-translate-y-1 transition-smooth"
            >
              <div className="h-12 w-12 rounded-xl bg-leaf-gradient flex items-center justify-center text-primary-foreground shadow-elegant">
                <p.i className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Nos kits
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">
              Des kits adaptés à <span className="text-hero-gradient">chaque besoin</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Du foyer modeste à l'entreprise, choisissez la puissance qui vous convient.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kits.map((k) => (
              <div
                key={k.name}
                className="bg-card rounded-2xl p-7 border border-border hover:shadow-elegant transition-smooth flex flex-col"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-primary">{k.name}</h3>
                  <span className="text-xs font-semibold bg-sun-gradient text-accent-foreground px-3 py-1 rounded-full">
                    {k.badge}
                  </span>
                </div>
                <ul className="mt-5 space-y-2 flex-1">
                  {k.appliances.map((a) => (
                    <li key={a} className="flex gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {a}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-smooth"
                >
                  Demander un devis <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-24">
        <div className="rounded-3xl bg-hero-gradient p-10 md:p-14 text-background text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Un projet sur mesure ?</h2>
          <p className="mt-4 text-background/85">Étude de faisabilité gratuite par nos experts.</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-background text-primary font-semibold px-7 py-3.5 rounded-full hover:scale-105 transition-smooth"
          >
            Parler à un expert <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
