import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, MapPin, Phone, Quote, ShieldCheck, Sun, Zap } from "lucide-react";
import { CITIES, getCity } from "@/data/cities";
import { MediaPlaceholder } from "@/components/site/MediaPlaceholder";

export const Route = createFileRoute("/solaire/$ville")({
  loader: ({ params }) => {
    const city = getCity(params.ville);
    if (!city) throw notFound();
    return { city };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Ville non trouvée — Malaaji Solar" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { city } = loaderData;
    const url = `https://malaaji-solar.sn/solaire/${city.slug}`;
    const title = `Installateur solaire à ${city.name} — Malaaji Solar`;
    const description = `Installation solaire à ${city.name} (région ${city.region}) : panneaux, batteries, kits Livoltek. Devis gratuit, intervention rapide. ${city.intro}`;
    return {
      meta: [
        { title },
        { name: "description", content: description.slice(0, 160) },
        { property: "og:title", content: title },
        { property: "og:description", content: description.slice(0, 200) },
        { property: "og:image", content: city.realisations[0]?.img },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: city.realisations[0]?.img },
        { name: "geo.region", content: "SN" },
        { name: "geo.placename", content: `${city.name}, Sénégal` },
        { name: "geo.position", content: `${city.geo.lat};${city.geo.lng}` },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${url}#localbusiness`,
            name: `Malaaji Solar — ${city.name}`,
            description,
            url,
            telephone: "+221787158888",
            email: "contact@malaaji-solar.sn",
            image: city.realisations[0]?.img,
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: city.address.street,
              addressLocality: city.address.locality,
              addressRegion: city.address.region,
              addressCountry: city.address.countryCode,
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: city.geo.lat,
              longitude: city.geo.lng,
            },
            areaServed: { "@type": "City", name: city.name },
            openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
            sameAs: ["https://malaaji-solar.sn/"],
            review: city.testimonials.map((t) => ({
              "@type": "Review",
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
              author: { "@type": "Person", name: t.name },
              reviewBody: t.quote,
            })),
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: String(city.testimonials.length),
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://malaaji-solar.sn/" },
              { "@type": "ListItem", position: 2, name: "Zones d'intervention", item: "https://malaaji-solar.sn/plan-du-site" },
              { "@type": "ListItem", position: 3, name: `Solaire à ${city.name}`, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: CityPage,
  notFoundComponent: () => (
    <Layout>
      <section className="container mx-auto px-4 lg:px-8 py-32 text-center">
        <h1 className="text-4xl font-bold">Ville non couverte</h1>
        <p className="mt-4 text-muted-foreground">Cette ville n'a pas encore de page dédiée. Contactez-nous pour un devis personnalisé.</p>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-leaf-gradient text-primary-foreground font-semibold px-7 py-3.5 rounded-full">
          Nous contacter <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </Layout>
  ),
});

function CityPage() {
  const { city } = Route.useLoaderData();
  const otherCities = CITIES.filter((c) => c.slug !== city.slug);

  return (
    <Layout>
      {/* HERO */}
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <nav aria-label="Fil d'Ariane" className="text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-primary">Accueil</Link>
            <span className="mx-2">/</span>
            <Link to="/plan-du-site" className="hover:text-primary">Zones</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Solaire à {city.name}</span>
          </nav>
          <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wider">
            <MapPin className="h-4 w-4" /> Région de {city.region}
          </span>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
            Installateur solaire à <span className="text-hero-gradient">{city.name}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">{city.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {city.highlights.map((h) => (
              <span key={h} className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 text-sm">
                <ShieldCheck className="h-4 w-4 text-primary" /> {h}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-leaf-gradient text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-elegant hover:opacity-90 transition-smooth">
              Devis solaire {city.name} <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+221787158888" className="inline-flex items-center gap-2 border border-border text-foreground font-semibold px-7 py-3.5 rounded-full hover:bg-secondary transition-smooth">
              <Phone className="h-4 w-4" /> +221 78 715 88 88
            </a>
          </div>
        </div>
      </section>

      {/* CONTEXTE & ADRESSE */}
      <section className="container mx-auto px-4 lg:px-8 py-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Le solaire à {city.name}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{city.context}</p>
          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            {[
              { i: Sun, t: "Étude gratuite", d: "Dimensionnement sur mesure" },
              { i: Zap, t: "Livoltek certifié", d: "Garanties constructeur" },
              { i: ShieldCheck, t: "SAV local", d: `Intervention rapide à ${city.name}` },
            ].map((b) => (
              <div key={b.t} className="p-5 bg-card rounded-2xl border border-border">
                <b.i className="h-6 w-6 text-primary" />
                <div className="mt-3 font-semibold">{b.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{b.d}</div>
              </div>
            ))}
          </div>
        </div>
        <aside className="p-6 bg-hero-gradient rounded-2xl text-background h-fit">
          <MapPin className="h-7 w-7 text-accent-glow" />
          <h3 className="mt-3 font-bold text-xl">Notre zone d'intervention</h3>
          <p className="mt-3 text-background/85 text-sm leading-relaxed">{city.address.street}</p>
          <p className="mt-2 text-background/85 text-sm">{city.address.locality}, région de {city.address.region}, Sénégal</p>
          <div className="mt-5 pt-5 border-t border-background/20 text-sm space-y-2">
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent-glow" /> +221 78 715 88 88</div>
            <div className="text-background/70">Lun–Ven 8h–18h · Sam 9h–14h</div>
          </div>
        </aside>
      </section>

      {/* RÉALISATIONS LOCALES */}
      <section id="realisations" className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Réalisations</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Nos installations à {city.name} et alentours</h2>
            <p className="mt-4 text-muted-foreground">
              Quelques projets représentatifs livrés par Malaaji Solar dans la région de {city.region}.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {city.realisations.map((p) => {
              const hasDesc = Boolean(p.desc && p.desc.trim().length > 0);
              const hasPower = Boolean(p.power && p.power.trim().length > 0 && p.power !== "—");
              const fallbackDesc = `Projet solaire réalisé par Malaaji Solar à ${city.name}. Détails techniques disponibles sur demande.`;
              return (
                <article
                  key={p.title}
                  className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border hover:shadow-elegant hover:-translate-y-1 transition-smooth"
                >
                  <MediaPlaceholder
                    src={p.img}
                    alt={`${p.title} — ${city.name}`}
                    ratio="4/3"
                    variant="leaf"
                    imgClassName="group-hover:scale-110 transition-smooth duration-700"
                  />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-accent" />
                        {city.name}
                      </span>
                      {hasPower && (
                        <span className="inline-flex items-center gap-1">
                          <Zap className="h-3.5 w-3.5 text-primary" />
                          {p.power}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                    <p
                      className={`mt-2 text-sm leading-relaxed ${hasDesc ? "text-muted-foreground" : "text-muted-foreground/70 italic"}`}
                    >
                      {hasDesc ? p.desc : fallbackDesc}
                    </p>
                    <div className="mt-auto pt-5 flex items-center justify-between gap-3 border-t border-border">
                    <Link
                      to="/realisations"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                      aria-label={`Voir le projet : ${p.title}`}
                    >
                      Voir le projet <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="text-xs font-medium text-muted-foreground hover:text-primary transition-smooth"
                    >
                      Devis similaire →
                    </Link>
                  </div>
                </div>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-3xl mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Témoignages</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Ils nous ont fait confiance à {city.name}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {city.testimonials.map((t) => (
            <figure key={t.name} className="p-8 bg-card rounded-2xl border border-border shadow-elegant">
              <Quote className="h-8 w-8 text-accent" />
              <blockquote className="mt-4 text-lg leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* AUTRES VILLES */}
      <section className="bg-secondary/40 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Nous intervenons aussi à</h2>
          <ul className="flex flex-wrap gap-3">
            {otherCities.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/solaire/$ville"
                  params={{ ville: c.slug }}
                  className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5 text-sm font-medium hover:border-primary/40 hover:shadow-elegant transition-smooth"
                >
                  <MapPin className="h-4 w-4 text-primary" /> Solaire à {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="rounded-3xl bg-hero-gradient p-10 md:p-14 text-background text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Prêt à passer au solaire à {city.name} ?</h2>
          <p className="mt-4 text-background/85 max-w-2xl mx-auto">Étude gratuite et devis sous 24h pour votre projet résidentiel, professionnel ou agricole.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-background text-primary font-semibold px-7 py-3.5 rounded-full hover:scale-105 transition-smooth">
            Demander mon devis <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}