import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, Sun } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Malaaji Solar" },
      {
        name: "description",
        content:
          "Contactez Malaaji Solar à Thiès. Devis gratuit pour vos installations solaires au Sénégal. +221 78 715 88 88.",
      },
      { property: "og:title", content: "Contactez Malaaji Solar" },
      {
        property: "og:description",
        content:
          "Notre équipe à Thiès vous accompagne pour votre projet solaire — devis et étude gratuits.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Contact
          </span>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
            Parlons de votre <span className="text-hero-gradient">projet solaire</span>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Notre équipe d'experts vous répond sous 24h. Devis et étude de faisabilité gratuits.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-6">
          {[
            {
              i: MapPin,
              t: "Adresse",
              d: "Thiès Sud — Stade, en face PLAN International, Villa N° 425, Niveau 1",
            },
            { i: Phone, t: "Téléphone", d: "+221 78 715 88 88", href: "tel:+221787158888" },
            {
              i: Mail,
              t: "Email",
              d: "contact@malaaji-solar.sn",
              href: "mailto:contact@malaaji-solar.sn",
            },
          ].map((c) => (
            <div key={c.t} className="p-6 bg-card rounded-2xl border border-border flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-leaf-gradient flex items-center justify-center text-primary-foreground shadow-elegant shrink-0">
                <c.i className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">{c.t}</div>
                {c.href ? (
                  <a
                    href={c.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {c.d}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{c.d}</p>
                )}
              </div>
            </div>
          ))}
          <div className="p-6 bg-hero-gradient rounded-2xl text-background">
            <Sun className="h-8 w-8 text-accent-glow" />
            <h3 className="mt-3 font-bold text-xl">Horaires</h3>
            <p className="mt-2 text-background/85 text-sm">
              Lundi – Vendredi : 8h – 18h
              <br />
              Samedi : 9h – 14h
            </p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="lg:col-span-3 p-8 md:p-10 bg-card rounded-3xl border border-border shadow-elegant"
        >
          <h2 className="text-2xl font-bold">Demandez votre devis gratuit</h2>
          <p className="mt-2 text-muted-foreground text-sm">
            Décrivez-nous votre besoin, nous revenons vers vous rapidement.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <Field label="Nom complet" id="name" required />
            <Field label="Téléphone" id="phone" type="tel" required />
            <Field label="Email" id="email" type="email" className="sm:col-span-2" />
            <Field
              label="Localisation"
              id="loc"
              placeholder="Ville / quartier"
              className="sm:col-span-2"
            />
            <div className="sm:col-span-2">
              <label htmlFor="type" className="block text-sm font-medium mb-1.5">
                Type de projet
              </label>
              <select
                id="type"
                className="w-full bg-background border border-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option>Kit résidentiel</option>
                <option>Pompe solaire</option>
                <option>Installation entreprise</option>
                <option>Mini-centrale</option>
                <option>Autre</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="msg" className="block text-sm font-medium mb-1.5">
                Message
              </label>
              <textarea
                id="msg"
                rows={5}
                className="w-full bg-background border border-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Décrivez vos besoins en énergie..."
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-leaf-gradient text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-elegant hover:opacity-90 transition-smooth"
          >
            {sent ? (
              "Message envoyé ✓"
            ) : (
              <>
                Envoyer la demande <Send className="h-4 w-4" />
              </>
            )}
          </button>
          {sent && (
            <p className="mt-4 text-sm text-primary text-center">
              Merci ! Nous vous recontactons sous 24h.
            </p>
          )}
        </form>
      </section>
    </>
  );
}

function Field({
  label,
  id,
  type = "text",
  className = "",
  ...rest
}: {
  label: string;
  id: string;
  type?: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...rest}
        className="w-full bg-background border border-input rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
