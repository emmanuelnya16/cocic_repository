/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Realisation, Equipment, ClientReference, Testimonial, TimelineEvent } from "./types";

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: "t1",
    annee: "2001",
    titre: "Fondation de COCIC",
    description: "Création de l'atelier d'impression numérique à Douala. L'ambition initiale : professionnaliser la chaîne d'impression grand format au Cameroun."
  },
  {
    id: "t2",
    annee: "2007",
    titre: "Lancement du Pôle Signalétique",
    description: "Acquisition des premières machines de découpe numérique (CNC) et structuration d'une équipe dédiée aux enseignes lumineuses et habillages de façades."
  },
  {
    id: "t3",
    annee: "2013",
    titre: "Intégration du Pôle Textile",
    description: "Inauguration de l'atelier de confection textile et de sérigraphie à Douala-Logpom. Production d'uniformes corporate et équipements industriels (EPI)."
  },
  {
    id: "t4",
    annee: "2018",
    titre: "Modernisation Technologique",
    description: "Investissement dans des imprimantes UV à plat Mimaki de dernière génération et brodeuses multi-têtes industrielles à haute vitesse."
  },
  {
    id: "t5",
    annee: "2023",
    titre: "Expansion Régionale",
    description: "Déploiement des premiers chantiers d'envergure hors Cameroun, notamment au Gabon, Congo, et Togo, affirmant notre rôle de partenaire régional stratégique."
  },
  {
    id: "t6",
    annee: "2026",
    titre: "Célébration des 25 ans & Refonte Digitale",
    description: "25 ans d'excellence visuelle au service des marques les plus exigeantes d'Afrique subsaharienne avec un outil de production 100% intégré."
  }
];

export const EQUIPEMENT_DATA: Equipment[] = [
  // Conception
  {
    id: "eq1",
    nom: "Station de Conception 3D & Pré-Presse",
    categorie: "conception",
    description: "Studio équipé pour la modélisation volumique des enseignes, le prototypage rapide et l'optimisation des fichiers vectoriels pour la production laser.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=600",
    specs: ["Logiciels SolidWorks & Suite Adobe CC", "Calibrage colorimétrique spectrophotométrique", "Écrans Eizo graphiques certifiés"]
  },
  // Signalétique
  {
    id: "eq2",
    nom: "Fraiseuse CNC Haute Précision (3000x2000mm)",
    categorie: "signaletique",
    description: "Découpe laser et fraisage de haute précision pour supports rigides : Alucobond, acrylique, PVC, bois et métaux non-ferreux pour enseignes 3D.",
    image: "https://images.unsplash.com/photo-1615840287214-7fe58a8f3685?auto=format&fit=crop&q=80&w=600",
    specs: ["Tolérance de découpe < 0.1mm", "Fraisage multi-outils automatique", "Système d'aspiration et refroidissement intégré"]
  },
  {
    id: "eq3",
    nom: "Plieuse Thermique & Soudeuse Haute Fréquence",
    categorie: "signaletique",
    description: "Équipement pour le pliage à chaud des plaques de plexiglas et le soudage hermétique haute résistance des bâches et kakémonos grand format.",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=600",
    specs: ["Pliage angulaire précis jusqu'à 2m de longueur", "Soudure HF étanche pour bâches extérieures", "Thermorégulation numérique"]
  },
  // Numérique
  {
    id: "eq4",
    nom: "Imprimante UV LED Mimaki à Plat (Flatbed)",
    categorie: "numerique",
    description: "Impression directe haute définition avec séchage UV instantané sur verre, plexi, métal et supports souples. Rendu chromatique exceptionnel.",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=600",
    specs: ["Résolution jusqu'à 1200 dpi", "Encre blanche et vernis sélectif intégrés", "Format d'impression jusqu'à 2.5m x 1.3m"]
  },
  {
    id: "eq5",
    nom: "Traceur Éco-Solvant Epson SureColor Grand Format",
    categorie: "numerique",
    description: "Impression écologique haute vitesse pour habillages de véhicules, vitrines, et affichages extérieurs. Durabilité exceptionnelle aux UV d'Afrique centrale.",
    image: "https://images.unsplash.com/photo-1596708147259-db4398734e9f?auto=format&fit=crop&q=80&w=600",
    specs: ["Laize d'impression de 1.62m", "Encres éco-solvantes certifiées REACh", "Système de séchage et d'enroulement automatique"]
  },
  // Sérigraphie
  {
    id: "eq6",
    nom: "Carrousel de Sérigraphie Automatique 8 Couleurs",
    categorie: "serigraphie",
    description: "Ligne de sérigraphie textile haute cadence pour impression en série sur t-shirts, polos, et sacs publicitaires avec repérage laser micrométrique.",
    image: "https://images.unsplash.com/photo-1508807526345-15e988543ad4?auto=format&fit=crop&q=80&w=600",
    specs: ["Cadence jusqu'à 800 pièces / heure", "Séchage intermédiaire flash LED", "Précision de registre de 0.05mm"]
  },
  // Couture & Confection
  {
    id: "eq7",
    nom: "Ligne de Couture Industrielle Juki & Automates",
    categorie: "couture",
    description: "Atelier de confection équipé de piqueuses plates, surjeteuses et automates de couture pour la production d'uniformes corporate et d'EPI renforcés.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    specs: ["Machines de couture à double entraînement", "Ourletting et pose de fermetures automatisés", "Contrôle qualité de tension de fil intégré"]
  },
  {
    id: "eq8",
    nom: "Brodeuse Industrielle Multi-Têtes Tajima",
    categorie: "couture",
    description: "Broderie automatisée haute définition sur tous supports textiles. Idéal pour écussons, polos haut de gamme, casquettes et chemises professionnelles.",
    image: "https://images.unsplash.com/photo-1613843773121-a3f2bd2e6d9d?auto=format&fit=crop&q=80&w=600",
    specs: ["12 têtes de broderie simultanées", "Changement de couleur automatique (15 aiguilles par tête)", "Broderie relief 3D sur casquettes"]
  }
];

export const REALISATIONS_DATA: Realisation[] = [
  // Signalétique
  {
    id: "r1",
    titre: "Enseigne Lumineuse 3D & Façade Alucobond",
    secteur: "Banques & Finance",
    image: "https://images.unsplash.com/photo-1572945281744-424a55551925?auto=format&fit=crop&q=80&w=800",
    pole: "signaletique",
    categorie: "Enseignes",
    client: "Ecobank Cameroun",
    annee: "2025",
    description: "Habillage intégral de la façade de l'agence principale en Alucobond anthracite avec lettrage 3D rétroéclairé par LED étanches haute efficacité. Résistant aux intempéries équatoriales."
  },
  {
    id: "r2",
    titre: "Totem Directionnel & Signalétique Extérieure",
    secteur: "Énergie & Pétrole",
    image: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?auto=format&fit=crop&q=80&w=800",
    pole: "signaletique",
    categorie: "Totems",
    client: "Tradex S.A.",
    annee: "2024",
    description: "Conception et fabrication de totems de station-service de 6 mètres de hauteur, intégrant des afficheurs de prix digitaux et une structure métallique certifiée anti-rafales."
  },
  {
    id: "r3",
    titre: "Signalétique Intérieure Directive et Directionnelle",
    secteur: "Banques & Finance",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800",
    pole: "signaletique",
    categorie: "Signalétique Intérieure",
    client: "Société Générale Cameroun",
    annee: "2024",
    description: "Signalétique épurée en plexiglas dépoli et aluminium brossé pour les bureaux du siège social à Douala. Pictogrammes sur-mesure découpés au laser."
  },
  {
    id: "r4",
    titre: "Habillage de Façade Corporate et Enseigne",
    secteur: "Transport & Logistique",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
    pole: "signaletique",
    categorie: "Enseignes",
    client: "Bolloré Africa Logistics",
    annee: "2023",
    description: "Structures de signalétique monumentales et enseigne principale pour les entrepôts portuaires de Douala, alliant tôle pré-laquée et lettrage acier brossé."
  },

  // Textile
  {
    id: "r5",
    titre: "Uniformes Corporate & Polos Brodés Premium",
    secteur: "Agroalimentaire",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=800",
    pole: "textile",
    categorie: "Uniformes Corporate",
    client: "Nestlé Cameroun",
    annee: "2025",
    description: "Production de 1200 polos en coton piqué haut de gamme avec broderie relief 3D du logo pour la force de vente et les équipes d'animation."
  },
  {
    id: "r6",
    titre: "Équipements de Protection Individuelle (EPI) Marqués",
    secteur: "Énergie & Pétrole",
    image: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?auto=format&fit=crop&q=80&w=800",
    pole: "textile",
    categorie: "Tenues Techniques",
    client: "TotalEnergies Cameroun",
    annee: "2024",
    description: "Confection de combinaisons ignifugées et gilets haute visibilité normés avec bandes rétro-réfléchissantes 3M et sérigraphie ignifuge."
  },
  {
    id: "r7",
    titre: "Ligne de Vêtements d'Image & Merchandising",
    secteur: "Autres",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800",
    pole: "textile",
    categorie: "Merchandising",
    client: "Brasseries du Cameroun",
    annee: "2025",
    description: "Développement et production de casquettes, t-shirts sérigraphiés et tabliers personnalisés pour les campagnes promotionnelles nationales."
  },

  // Impression
  {
    id: "r8",
    titre: "Campagne d'Affichage Urbain & Roll-ups",
    secteur: "Institutionnel & ONG",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&q=80&w=800",
    pole: "impression",
    categorie: "Impression Grand Format",
    client: "UNICEF Cameroun",
    annee: "2025",
    description: "Impression numérique haute définition sur bâches frontlit 550g avec œillets renforcés pour la campagne de sensibilisation nationale."
  },
  {
    id: "r9",
    titre: "Habillage Flotte de Véhicules (Car Wrapping)",
    secteur: "Transport & Logistique",
    image: "https://images.unsplash.com/photo-1508974239320-0a029497e820?auto=format&fit=crop&q=80&w=800",
    pole: "impression",
    categorie: "Arts Graphiques",
    client: "DHL Cameroun",
    annee: "2024",
    description: "Semi-covering de 15 véhicules utilitaires de livraison. Utilisation de vinyle polymère coulé 3M avec lamination brillante anti-UV pour préserver les couleurs éclatantes sous le soleil africain."
  },
  {
    id: "r10",
    titre: "Décoration de Stand d'Exposition Événementiel",
    secteur: "Banques & Finance",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=800",
    pole: "impression",
    categorie: "Événementiel",
    client: "UBA Cameroun",
    annee: "2025",
    description: "Aménagement graphique complet du pavillon UBA au salon international de l'entreprise PROMOTE : backdrops en tissu tendu rétroéclairé et comptoirs d'accueil personnalisés."
  }
];

export const REFERENCES_DATA: ClientReference[] = [
  { id: "ref1", nom: "Ecobank", secteur: "banque", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Ecobank_Logo.svg", highlighted: true, temoignage: "La rigueur industrielle de COCIC et le soin apporté aux finitions de nos enseignes lumineuses font d'eux un partenaire de confiance depuis de nombreuses années." },
  { id: "ref2", nom: "TotalEnergies", secteur: "energie", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/TotalEnergies_logo.svg", highlighted: true, temoignage: "Leurs tenues de protection ignifugées confectionnées localement respectent nos normes les plus strictes d'ingénierie et de sécurité." },
  { id: "ref3", nom: "Nestlé", secteur: "agro", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Nestle_textlogo.svg", highlighted: true, temoignage: "La broderie de nos uniformes corporate est irréprochable. Un service client réactif et un respect strict des délais de livraison." },
  { id: "ref4", nom: "UNICEF", secteur: "institutionnel", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/77/UNICEF_logo.svg", highlighted: true, temoignage: "Une excellente réactivité pour l'impression de nos supports de communication d'urgence dans la sous-région." },
  { id: "ref5", nom: "Tradex S.A.", secteur: "energie", logoUrl: "", highlighted: false },
  { id: "ref6", nom: "Société Générale", secteur: "banque", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Soci%C3%A9t%C3%A9_G%C3%A9n%C3%A9rale_logo.svg", highlighted: false },
  { id: "ref7", nom: "UBA Bank", secteur: "banque", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9f/United_Bank_for_Africa_Logo.svg", highlighted: false },
  { id: "ref8", nom: "DHL Logistics", secteur: "transport", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/DHL_Logo.svg", highlighted: false },
  { id: "ref9", nom: "Orange Cameroun", secteur: "autres", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg", highlighted: false },
  { id: "ref10", nom: "MTN Cameroon", secteur: "autres", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/af/MTN_Logo.svg", highlighted: false },
  { id: "ref11", nom: "Eneo S.A.", secteur: "energie", logoUrl: "", highlighted: false },
  { id: "ref12", nom: "Chambre des Mines", secteur: "institutionnel", logoUrl: "", highlighted: false },
  { id: "ref13", nom: "Aéroport de Douala", secteur: "transport", logoUrl: "", highlighted: false },
  { id: "ref14", nom: "Université de Douala", secteur: "education", logoUrl: "", highlighted: false },
  { id: "ref15", nom: "Cami Toyota", secteur: "transport", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Toyota_Logo.svg", highlighted: false },
  { id: "ref16", nom: "PharmaCam", secteur: "pharma", logoUrl: "", highlighted: false }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test1",
    clientName: "Marc KAMGANG",
    company: "Ecobank Cameroun",
    role: "Directeur de l'Immobilier et des Moyens Généraux",
    quote: "Pour la refonte de nos enseignes sur l'ensemble du réseau national, COCIC a su nous proposer des solutions de signalétique lumineuse extrêmement durables et fidèles à notre charte graphique. Leur usine intégrée à Douala garantit un contrôle de bout en bout qui fait toute la différence.",
  },
  {
    id: "test2",
    clientName: "Sandrine EBONGUE",
    company: "Nestlé Cameroun",
    role: "Responsable Trade Marketing & Événements",
    quote: "Nos exigences en matière de textile publicitaire sont extrêmement strictes. La qualité du coton piqué de COCIC, associée à la précision micrométrique des broderies de leur atelier de couture, est de niveau international. Nous recommandons vivement !",
  },
  {
    id: "test3",
    clientName: "Innocent MEKONG",
    company: "TotalEnergies S.A.",
    role: "Directeur HSE Afrique Centrale",
    quote: "Les combinaisons de travail ignifugées et tenues techniques de nos opérateurs en station-service et dépôts pétroliers exigent des matériaux de haute technicité. COCIC a conçu, confectionné et certifié nos tenues de travail dans des conditions de robustesse exemplaires.",
  }
];
