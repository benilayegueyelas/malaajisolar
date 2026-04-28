import kayar from "@/assets/realisation-kayar.jpg";
import saintLouis from "@/assets/realisation-saint-louis.jpg";
import koki from "@/assets/realisation-koki-diop.jpg";
import sinthiou from "@/assets/realisation-sinthiou.jpg";
import centrale from "@/assets/realisation-centrale.jpg";
import batteries from "@/assets/realisation-batteries.jpg";
import team from "@/assets/realisation-team.jpg";
import stock from "@/assets/realisation-stock.jpg";

export type CityRealisation = {
  img?: string;
  title: string;
  power?: string;
  desc?: string;
};

export type CityTestimonial = {
  name: string;
  role: string;
  quote: string;
};

export type CityData = {
  slug: string;
  name: string;
  region: string;
  intro: string;
  context: string;
  geo: { lat: number; lng: number };
  address: {
    street: string;
    locality: string;
    region: string;
    countryCode: "SN";
  };
  realisations: CityRealisation[];
  testimonials: CityTestimonial[];
  highlights: string[];
};

export const CITIES: CityData[] = [
  {
    slug: "thies",
    name: "Thiès",
    region: "Thiès",
    intro:
      "Siège de Malaaji Solar : nous installons et entretenons panneaux, batteries et kits solaires Livoltek dans toute la région de Thiès.",
    context:
      "Avec plus de 2 800 heures d'ensoleillement par an, Thiès bénéficie d'un potentiel solaire exceptionnel. Notre showroom et entrepôt y sont basés, ce qui nous permet d'intervenir sous 24 à 48h pour tout devis, installation ou service après-vente.",
    geo: { lat: 14.7833, lng: -16.9333 },
    address: {
      street: "Thiès Sud — Stade, en face PLAN International, Villa N° 425",
      locality: "Thiès",
      region: "Thiès",
      countryCode: "SN",
    },
    realisations: [
      { img: batteries, title: "Parc batteries showroom Thiès", power: "Multi-rack", desc: "Stock permanent de batteries lithium Livoltek pour projets résidentiels et industriels." },
      { img: team, title: "Formation technique sur site", power: "—", desc: "Formation client à l'utilisation et au monitoring des systèmes installés." },
      { img: stock, title: "Logistique & disponibilité immédiate", power: "—", desc: "Onduleurs, panneaux et accessoires Livoltek certifiés en stock à Thiès." },
    ],
    testimonials: [
      { name: "Mamadou D.", role: "Particulier, Thiès Nord", quote: "Installation rapide et propre. Plus aucune coupure depuis 8 mois, et l'équipe a pris le temps de tout m'expliquer." },
      { name: "Aïssatou F.", role: "Commerçante, marché central", quote: "J'ai économisé près de 60% sur ma facture Senelec dès le premier mois. Je recommande vivement Malaaji." },
    ],
    highlights: ["Showroom & entrepôt sur place", "Intervention sous 24h", "Installateur officiel Livoltek"],
  },
  {
    slug: "dakar",
    name: "Dakar",
    region: "Dakar",
    intro:
      "Solutions solaires pour villas, immeubles et entreprises de la capitale : kits hybrides, autoconsommation et bornes de recharge.",
    context:
      "Dakar concentre la majorité des entreprises et résidences haut standing du Sénégal. Malaaji Solar y déploie des installations photovoltaïques en toiture, des kits hybrides Livoltek anti-coupures et des bornes de recharge solaire pour véhicules électriques.",
    geo: { lat: 14.6928, lng: -17.4467 },
    address: {
      street: "Interventions sur Dakar, Almadies, Plateau, Mermoz, Ouakam, Yoff",
      locality: "Dakar",
      region: "Dakar",
      countryCode: "SN",
    },
    realisations: [
      { img: centrale, title: "Mini-centrale entreprise 169 kWc", power: "90 KVA / 200 kWh", desc: "Deux onduleurs Livoltek + parc batterie pour autonomie totale d'un site industriel." },
      { img: batteries, title: "Backup résidentiel Almadies", power: "10 KVA / 15 kWh", desc: "Système hybride pour villa avec piscine, climatisation et zéro coupure." },
    ],
    testimonials: [
      { name: "Cheikh N.", role: "Directeur PME, Plateau", quote: "ROI atteint en moins de 3 ans. L'équipe Malaaji est professionnelle et le SAV répond très vite." },
      { name: "Fatou S.", role: "Propriétaire villa, Almadies", quote: "Plus aucune dépendance à Senelec la nuit. Installation soignée, design discret sur la toiture." },
    ],
    highlights: ["Kits anti-coupures villas", "Autoconsommation entreprise", "Bornes recharge VE"],
  },
  {
    slug: "saint-louis",
    name: "Saint-Louis",
    region: "Saint-Louis",
    intro:
      "Installateur solaire à Saint-Louis : kits AIO Livoltek, pompage et solutions adaptées à l'humidité côtière.",
    context:
      "Capitale historique du Nord, Saint-Louis combine zones résidentielles, hôtels et activités agricoles. Nous y installons des systèmes AIO 5 KVA, des pompes solaires pour le maraîchage et des solutions de stockage adaptées au climat côtier.",
    geo: { lat: 16.0179, lng: -16.4896 },
    address: {
      street: "Interventions Saint-Louis, Sor, Guet Ndar, Ndar Toute, Pikine",
      locality: "Saint-Louis",
      region: "Saint-Louis",
      countryCode: "SN",
    },
    realisations: [
      { img: saintLouis, title: "Système AIO 5 KVA + 5 kWh", power: "5 KVA / 5 kWh", desc: "Installation résidentielle Livoltek tout-en-un avec stockage lithium." },
      { img: koki, title: "Forage solaire de Koki Diop", power: "29 kWc", desc: "Pompe électrique pour eau potable, zone rurale Saint-Louis." },
    ],
    testimonials: [
      { name: "Ibrahima B.", role: "Hôtelier, Langue de Barbarie", quote: "Mes clients ne subissent plus de coupures. Investissement rentabilisé sur la haute saison touristique." },
      { name: "Aminata D.", role: "Maraîchère, périphérie", quote: "Ma pompe solaire fonctionne tous les jours. Plus de gasoil, plus de pannes, juste l'eau qui coule." },
    ],
    highlights: ["Kits AIO résidentiels", "Pompage agricole", "Adapté climat côtier"],
  },
  {
    slug: "mbour",
    name: "Mbour",
    region: "Thiès",
    intro:
      "Solaire à Mbour et Petite Côte : résidences, restaurants de plage, lodges et activités touristiques.",
    context:
      "De Saly à Nianing, la Petite Côte demande des solutions énergétiques fiables pour hôtels, restaurants et villas secondaires. Nos kits hybrides Livoltek garantissent confort et autonomie, même en haute saison.",
    geo: { lat: 14.4194, lng: -16.9636 },
    address: {
      street: "Interventions Mbour, Saly, Nianing, Somone, Ngaparou",
      locality: "Mbour",
      region: "Thiès",
      countryCode: "SN",
    },
    realisations: [
      { img: kayar, title: "Kit 5 KVA / 5 kWh résidentiel", power: "5 KVA / 5 kWh", desc: "Villa secondaire Saly : autonomie complète week-ends et vacances." },
      { img: centrale, title: "Mini-centrale lodge touristique", power: "30 KW", desc: "Mini-centrale pour lodge éco-touristique sur la Petite Côte." },
    ],
    testimonials: [
      { name: "Jean-Marc P.", role: "Gérant lodge, Saly", quote: "Mes clients adorent l'aspect éco-responsable, et moi j'adore ne plus payer de groupe électrogène." },
      { name: "Awa K.", role: "Restauratrice, Nianing", quote: "Installation faite en 2 jours, frigos et cuisine tournent sans interruption." },
    ],
    highlights: ["Kits villas secondaires", "Hôtels & lodges", "Maintenance saisonnière"],
  },
  {
    slug: "kaolack",
    name: "Kaolack",
    region: "Kaolack",
    intro:
      "Solutions solaires pour le Bassin arachidier : commerces, exploitations agricoles et villages.",
    context:
      "Kaolack et le Bassin arachidier concentrent une forte activité agricole et commerciale. Nous y installons pompes solaires, kits commerciaux et mini-centrales communautaires pour villages et coopératives.",
    geo: { lat: 14.1593, lng: -16.0726 },
    address: {
      street: "Interventions Kaolack, Kahone, Nioro du Rip, Guinguinéo",
      locality: "Kaolack",
      region: "Kaolack",
      countryCode: "SN",
    },
    realisations: [
      { img: sinthiou, title: "Pompe AC/DC 2200 W", power: "2.2 kW", desc: "Pompage solaire pour irrigation et agriculture villageoise." },
      { img: koki, title: "Forage solaire 29 kWc", power: "29 kWc", desc: "Eau potable pour village du Bassin arachidier." },
    ],
    testimonials: [
      { name: "Modou T.", role: "Coopérative agricole", quote: "Notre périmètre maraîcher est passé en irrigation solaire. Rendements en hausse, charges en baisse." },
      { name: "Fatim N.", role: "Commerçante, marché Kaolack", quote: "Mon congélateur tourne 24h/24 grâce au kit Malaaji. Mes produits ne se gâtent plus." },
    ],
    highlights: ["Pompage agricole", "Mini-réseaux villages", "Kits commerces"],
  },
];

export const CITY_SLUGS = CITIES.map((c) => c.slug);

export function getCity(slug: string): CityData | undefined {
  return CITIES.find((c) => c.slug === slug);
}