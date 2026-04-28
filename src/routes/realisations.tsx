import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { MapPin, Zap, ArrowRight } from "lucide-react";
import koki from "@/assets/realisation-koki-diop.jpg";
import saintLouis from "@/assets/realisation-saint-louis.jpg";
import sinthiou from "@/assets/realisation-sinthiou.jpg";
import kayar from "@/assets/realisation-kayar.jpg";
import batteries from "@/assets/realisation-batteries.jpg";
import centrale from "@/assets/realisation-centrale.jpg";
import stock from "@/assets/realisation-stock.jpg";
import team from "@/assets/realisation-team.jpg";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — Malaaji Solar" },
      { name: "description", content: "Découvrez nos installations solaires à travers le Sénégal : Koki Diop, Saint-Louis, Sinthiou Bamambé, Kayar et plus." },
      { property: "og:title", content: "Nos réalisations solaires au Sénégal" },
      { property: "og:description", content: "Forages, mini-centrales, kits AIO, batteries Livoltek — déjà installés à travers le Sénégal." },
      { property: "og:image", content: centrale },
    ],
  }),
  component: RealisationsPage,
});

const projects = [
  { img: koki, title: "Forage solaire de Koki Diop", loc: "Koki Diop", power: "29 kWc", desc: "Alimentation d'une pompe électrique pour l'eau potable du village." },
  { img: saintLouis, title: "Système AIO 5 KVA + 5 kWh", loc: "Saint-Louis", power: "5 KVA / 5 kWh", desc: "Installation résidentielle Livoltek tout-en-un avec stockage." },
  { img: sinthiou, title: "Pompe AC/DC 2200 W", loc: "Sinthiou Bamambé", power: "2.2 kW", desc: "Pompage solaire pour l'irrigation et l'agriculture villageoise." },
  { img: kayar, title: "Kayar FM — 5 KVA / 5 kWh", loc: "Kayar", power: "5 KVA", desc: "Alimentation continue d'une station radio locale." },
  { img: centrale, title: "Mini-centrale 169 kWc", loc: "Site industriel", power: "90 KVA / 200 kWh", desc: "Installation 2 onduleurs Livoltek + parc batterie pour autonomie totale." },
  { img: batteries, title: "Parc de stockage lithium", loc: "Showroom Thiès", power: "Multi-rack", desc: "Batteries lithium-ion Livoltek pour projets de grande capacité." },
  { img: team, title: "Mise en service & formation", loc: "Sur site client", power: "—", desc: "Notre équipe technique assure câblage, paramétrage et formation à l'usage." },
  { img: stock, title: "Stock & logistique", loc: "Entrepôt Malaaji", power: "—", desc: "Disponibilité immédiate de matériel Livoltek certifié." },
];

function RealisationsPage() {
  return (
    <Layout>
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nos réalisations</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
            Le solaire, <span className="text-hero-gradient">en action</span> à travers le Sénégal.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            De Saint-Louis à Sinthiou Bamambé, en passant par Koki Diop et Kayar — nos installations alimentent
            foyers, villages, commerces et infrastructures.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-elegant hover:-translate-y-1 transition-smooth">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-accent" />{p.loc}</span>
                  {p.power !== "—" && <span className="inline-flex items-center gap-1"><Zap className="h-3.5 w-3.5 text-primary" />{p.power}</span>}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-24">
        <div className="rounded-3xl bg-hero-gradient p-10 md:p-14 text-background text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Votre projet sera notre prochaine réalisation</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-background text-primary font-semibold px-7 py-3.5 rounded-full hover:scale-105 transition-smooth">
            Démarrer mon projet <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
