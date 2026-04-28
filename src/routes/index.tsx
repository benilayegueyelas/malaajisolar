import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Sun,
  Battery,
  Zap,
  Droplets,
  Building2,
  Leaf,
  ShieldCheck,
  Phone,
  MapPin,
} from "lucide-react";
import hero from "@/assets/hero-solar.jpg";
import realKayar from "@/assets/realisation-kayar.jpg";
import realKoki from "@/assets/realisation-koki-diop.jpg";
import realCentrale from "@/assets/realisation-centrale.jpg";
import real2STV from "@/assets/realisation-2stv.jpg";
import { CITIES } from "@/data/cities";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Malaaji Solar — Installateur solaire à Thiès & au Sénégal" },
      {
        name: "description",
        content:
          "Installateur solaire à Thiès, Dakar, Saint-Louis, Kaolack, Mbour, Ziguinchor… Distributeur officiel Livoltek (Hexing Afrique) : kits, panneaux, batteries et mini-centrales.",
      },
      { property: "og:title", content: "Malaaji Solar — L'énergie solaire pour tous" },
      {
        property: "og:description",
        content:
          "Solutions solaires complètes : panneaux, stockage, kits, pompes et mini-centrales. Une énergie propre, accessible et durable.",
      },
      { property: "og:image", content: hero },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: hero },
      { name: "geo.region", content: "SN-TH" },
      { name: "geo.placename", content: "Thiès, Sénégal" },
    ],
    links: [{ rel: "canonical", href: "https://malaaji-solar.sn/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Malaaji Solar",
          image: "https://malaaji-solar.sn/og.jpg",
          telephone: "+221787158888",
          email: "contact@malaaji-solar.sn",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Thiès Sud — Stade, en face PLAN International, Villa N° 425",
            addressLocality: "Thiès",
            addressRegion: "Thiès",
            addressCountry: "SN",
          },
          areaServed: [
            "Thiès",
            "Dakar",
            "Saint-Louis",
            "Kaolack",
            "Mbour",
            "Ziguinchor",
            "Touba",
            "Diourbel",
            "Louga",
            "Tambacounda",
            "Kolda",
            "Fatick",
            "Matam",
            "Kédougou",
          ],
          url: "https://malaaji-solar.sn/",
          priceRange: "$$",
          openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
        }),
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Sun,
    title: "Panneaux solaires",
    desc: "Photovoltaïques haute efficacité, adaptés à toutes les installations.",
  },
  {
    icon: Battery,
    title: "Stockage d'énergie",
    desc: "Batteries lithium Livoltek pour une autonomie totale, jour et nuit.",
  },
  {
    icon: Zap,
    title: "Kits clé en main",
    desc: "Solutions complètes 5 KVA à 30 KW pour foyers et entreprises.",
  },
  {
    icon: Droplets,
    title: "Pompes solaires",
    desc: "Forages et pompage pour l'agriculture et les villages.",
  },
  {
    icon: Building2,
    title: "Mini-centrales",
    desc: "Installations industrielles et communautaires sur mesure.",
  },
  {
    icon: Leaf,
    title: "Voitures électriques",
    desc: "Véhicules et bornes de recharge solaire intelligentes.",
  },
];

const cities = [
  "Thiès",
  "Dakar",
  "Saint-Louis",
  "Kaolack",
  "Mbour",
  "Ziguinchor",
  "Touba",
  "Diourbel",
  "Louga",
  "Tambacounda",
  "Kolda",
  "Fatick",
  "Matam",
  "Kédougou",
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={hero}
          alt="Installation solaire au Sénégal"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
        <div className="relative container mx-auto px-4 lg:px-8 py-28 md:py-40 max-w-6xl">
          <span className="inline-flex items-center gap-2 bg-background/15 backdrop-blur text-background border border-background/20 px-4 py-1.5 rounded-full text-xs font-medium">
            <Sun className="h-3.5 w-3.5 text-accent-glow" /> Distributeur officiel Livoltek · Hexing
            Afrique
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold text-background leading-[1.05] max-w-4xl">
            L'énergie du soleil, <span className="text-accent-glow">au service du Sénégal.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-background/85 leading-relaxed">
            Malaaji Solar conçoit, installe et entretient des solutions solaires fiables pour
            particuliers, entreprises et collectivités. Une énergie propre, accessible et durable.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-sun-gradient text-accent-foreground font-semibold px-7 py-3.5 rounded-full shadow-warm hover:scale-105 transition-smooth"
            >
              Découvrir nos solutions <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-background/10 backdrop-blur text-background border border-background/30 font-semibold px-7 py-3.5 rounded-full hover:bg-background hover:text-foreground transition-smooth"
            >
              Demander un devis
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
            {[
              { v: "200+", l: "Installations" },
              { v: "14 régions", l: "Couvertes" },
              { v: "100%", l: "Livoltek certifié" },
              { v: "24/7", l: "Support technique" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl md:text-4xl font-bold text-background">{s.v}</div>
                <div className="text-sm text-background/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container mx-auto px-4 lg:px-8 py-24">
        <div className="max-w-3xl mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Nos solutions
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">
            Des solutions solaires <span className="text-hero-gradient">complètes</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            De la lampe au mini-réseau industriel, Malaaji Solar exploite toutes les gammes Livoltek
            pour répondre à chaque besoin énergétique.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-7 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-elegant transition-smooth"
            >
              <div className="h-12 w-12 rounded-xl bg-leaf-gradient flex items-center justify-center text-primary-foreground shadow-elegant group-hover:scale-110 transition-smooth">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-secondary/60 py-24">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Pourquoi Malaaji
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">
              Un partenaire engagé pour la{" "}
              <span className="text-hero-gradient">transition énergétique</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Depuis l'étude de faisabilité jusqu'à la maintenance, notre équipe d'experts en
              énergie renouvelable vous accompagne avec des solutions personnalisées, certifiées
              Livoltek.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                {
                  i: ShieldCheck,
                  t: "Équipements certifiés Livoltek",
                  d: "Le meilleur du groupe Hexing Afrique.",
                },
                {
                  i: Leaf,
                  t: "Engagement écologique",
                  d: "Réduire l'empreinte carbone, préserver l'avenir.",
                },
                {
                  i: Sun,
                  t: "Accompagnement de A à Z",
                  d: "Étude, installation, formation et maintenance.",
                },
              ].map((b) => (
                <li key={b.t} className="flex gap-4">
                  <div className="shrink-0 h-11 w-11 rounded-xl bg-background flex items-center justify-center text-primary shadow-elegant">
                    <b.i className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{b.t}</div>
                    <div className="text-sm text-muted-foreground">{b.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <MediaPlaceholder
              src={real2STV}
              alt="Installation 2STV Dakar"
              ratio="auto"
              className="rounded-2xl shadow-elegant aspect-[4/5] w-full"
            />
            <div className="space-y-4 mt-10">
              <MediaPlaceholder
                src={realKoki}
                alt="Forage solaire Koki Diop"
                ratio="square"
                className="rounded-2xl shadow-warm w-full"
              />
              <MediaPlaceholder
                src={realCentrale}
                alt="Mini-centrale Livoltek"
                ratio="square"
                className="rounded-2xl shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 lg:px-8 py-24">{/* VILLES DESSERVIES */}</section>

      <section className="bg-secondary/40 py-20" aria-labelledby="zones-title">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Zones d'intervention
            </span>
            <h2 id="zones-title" className="mt-3 text-3xl md:text-5xl font-bold">
              Installateur solaire dans <span className="text-hero-gradient">tout le Sénégal</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Basée à Thiès, notre équipe intervient dans les 14 régions du pays pour
              l'installation, la maintenance et le service après-vente de vos équipements solaires.
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {cities.map((cityName) => {
              const dedicated = CITIES.find((c) => c.name === cityName);
              const content = (
                <>
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span className="font-medium">Solaire à {cityName}</span>
                </>
              );
              return (
                <li key={cityName}>
                  {dedicated ? (
                    <Link
                      to="/solaire/$ville"
                      params={{ ville: dedicated.slug }}
                      className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/40 hover:shadow-elegant transition-smooth"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border opacity-80">
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* SERVICES DÉTAILLÉS SEO */}
      <section
        className="container mx-auto px-4 lg:px-8 py-20"
        aria-labelledby="seo-services-title"
      >
        <div className="max-w-3xl mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Services
          </span>
          <h2 id="seo-services-title" className="mt-3 text-3xl md:text-5xl font-bold">
            Nos prestations solaires <span className="text-hero-gradient">détaillées</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              t: "Installation panneaux solaires Thiès & Dakar",
              d: "Pose de modules photovoltaïques Livoltek pour villas, immeubles et bâtiments tertiaires, avec étude d'ensoleillement et dimensionnement gratuit.",
            },
            {
              t: "Kits solaires résidentiels (5 KVA à 10 KW)",
              d: "Kits hybrides clé en main avec onduleur, batteries lithium et accessoires : autonomie totale, sans coupures.",
            },
            {
              t: "Pompage solaire agricole & forages",
              d: "Solutions de pompage solaire pour exploitations maraîchères, élevages et villages — Koki Diop, Sinthiou et toutes les zones rurales.",
            },
            {
              t: "Mini-centrales & solaire entreprise",
              d: "Mini-centrales 15-30 KW pour PME, écoles, centres de santé et collectivités — supervision et maintenance incluses.",
            },
            {
              t: "Maintenance & SAV solaire",
              d: "Diagnostic, nettoyage, remplacement de batteries et onduleurs partout au Sénégal sous 48h.",
            },
            {
              t: "Bornes & mobilité électrique",
              d: "Bornes de recharge solaire et accompagnement vers la mobilité électrique pour particuliers et flottes.",
            },
          ].map((s) => (
            <article key={s.t} className="p-6 bg-card rounded-2xl border border-border">
              <h3 className="text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-10 md:p-16 text-background shadow-elegant">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent-glow/40 blur-3xl animate-float" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Prêt à passer au solaire ?
            </h2>
            <p className="mt-4 text-background/85 text-lg">
              Parlons de votre projet. Nos experts vous proposent une étude personnalisée et un
              devis gratuit.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-background text-primary font-semibold px-7 py-3.5 rounded-full hover:scale-105 transition-smooth"
              >
                Obtenir un devis <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+221787158888"
                className="inline-flex items-center gap-2 border border-background/40 text-background font-semibold px-7 py-3.5 rounded-full hover:bg-background/10 transition-smooth"
              >
                <Phone className="h-4 w-4" /> +221 78 715 88 88
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
