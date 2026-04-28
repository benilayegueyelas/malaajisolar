import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Target, Eye, Leaf, Handshake, ArrowRight } from "lucide-react";
import team from "@/assets/realisation-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — Malaaji Solar" },
      {
        name: "description",
        content:
          "Malaaji Solar : entreprise sénégalaise spécialisée en solutions solaires Livoltek. Vision, mission et engagement pour la transition énergétique.",
      },
      { property: "og:title", content: "À propos de Malaaji Solar" },
      {
        property: "og:description",
        content:
          "Notre vision : rendre l'énergie solaire accessible et abordable pour tous au Sénégal.",
      },
      { property: "og:image", content: team },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Qui sommes-nous
          </span>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
            Au service d'une <span className="text-hero-gradient">énergie propre</span>, accessible
            à tous.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            MALAAJI Solar est une entreprise sénégalaise spécialisée dans la vente, la fourniture et
            l'installation de solutions solaires. Nous distribuons les produits Livoltek du groupe
            Hexing Afrique — la marque mondialement reconnue notamment grâce aux compteurs
            intelligents Woyofal largement utilisés au Sénégal.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <img
          src={team}
          alt="Équipe Malaaji Solar en intervention"
          loading="lazy"
          className="rounded-3xl shadow-elegant w-full object-cover aspect-[4/3]"
        />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Une expertise complète, un accompagnement sur mesure
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Que ce soit pour les particuliers, les entreprises ou les collectivités, MALAAJI Solar
            propose des produits allant des panneaux solaires aux systèmes complets d'alimentation
            en énergie renouvelable.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Pour garantir une gouvernance saine, nous nous appuyons sur le cabinet conseil{" "}
            <strong className="text-foreground">M&S Associates</strong>
            qui nous accompagne en stratégie, gestion comptable, financière et fiscale.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              i: Eye,
              t: "Notre Vision",
              d: "Contribuer activement à la transition énergétique en rendant l'énergie solaire accessible et abordable pour tous, partout au Sénégal.",
            },
            {
              i: Target,
              t: "Notre Mission",
              d: "Promouvoir une énergie propre, durable et inépuisable, tout en réduisant l'empreinte carbone mondiale.",
            },
            {
              i: Leaf,
              t: "Engagement écologique",
              d: "Sensibiliser à l'énergie verte et réduire la dépendance aux énergies fossiles avec des produits fiables et économiques.",
            },
            {
              i: Handshake,
              t: "Partenariats stratégiques",
              d: "Avec Hexing Afrique, nous montons des projets nationaux et internationaux d'accès universel à l'énergie.",
            },
          ].map((b) => (
            <div
              key={b.t}
              className="p-8 bg-card rounded-2xl border border-border hover:shadow-elegant transition-smooth"
            >
              <div className="h-14 w-14 rounded-2xl bg-leaf-gradient flex items-center justify-center text-primary-foreground shadow-elegant">
                <b.i className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold">{b.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-24">
        <div className="rounded-3xl bg-hero-gradient p-10 md:p-14 text-background text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Construisons ensemble votre projet solaire
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-background text-primary font-semibold px-7 py-3.5 rounded-full hover:scale-105 transition-smooth"
          >
            Nous contacter <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
