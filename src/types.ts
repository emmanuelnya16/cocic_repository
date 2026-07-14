/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Realisation {
  id: string;
  titre: string;
  secteur: string;
  image: string;
  pole: "signaletique" | "textile" | "impression";
  categorie: string;
  client: string;
  annee: string;
  description: string;
}

export interface Equipment {
  id: string;
  nom: string;
  categorie: "conception" | "signaletique" | "numerique" | "serigraphie" | "couture";
  description: string;
  image: string;
  specs: string[];
}

export interface ClientReference {
  id: string;
  nom: string;
  secteur: "banque" | "energie" | "agro" | "transport" | "institutionnel" | "education" | "pharma" | "autres";
  logoUrl?: string; // We can use stylized typography fallback if we don't have images
  highlighted: boolean;
  temoignage?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  role: string;
  quote: string;
  logoUrl?: string;
}

export interface TimelineEvent {
  id: string;
  annee: string;
  titre: string;
  description: string;
}
