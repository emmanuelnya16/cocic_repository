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
  // ── SIGNALÉTIQUE ──────────────────────────────────────────────────────────

  {
    id: "r1",
    titre: "Enseigne Lumineuse 3D — Siège Tradex",
    secteur: "Énergie & Pétrole",
    image: "/realisations/projet_tradex_4.PNG",
    pole: "signaletique",
    categorie: "Enseignes",
    client: "Tradex S.A.",
    annee: "2024",
    description: "Fabrication et pose de l'enseigne monumentale lumineuse 3D en lettres découpées rétroéclairées sur la façade arrondie du siège social de Tradex à Douala. Structure en aluminium et acier inoxydable résistante aux intempéries."
  },
  {
    id: "r2",
    titre: "Station-Service Tradex — Habillage LED Éclairé (Edéa)",
    secteur: "Énergie & Pétrole",
    image: "/realisations/IMG-20260720-WA0046.jpg",
    pole: "signaletique",
    categorie: "Enseignes",
    client: "Tradex S.A.",
    annee: "2024",
    description: "Habillage lumineux complet de la canopée de la station Tradex Edéa avec bandeau LED rouge haute intensité et enseigne principale rétroéclairée. Installation réalisée de nuit pour une mise en service immédiate."
  },
  {
    id: "r3",
    titre: "Totem Directionnel Prix Carburant — Tradex Nkolotou'Outou",
    secteur: "Énergie & Pétrole",
    image: "/realisations/IMG-20260720-WA0031.jpg",
    pole: "signaletique",
    categorie: "Totems",
    client: "Tradex S.A.",
    annee: "2024",
    description: "Totem de station-service 6 mètres avec afficheur numérique des prix (Super, Gasoil, Pétrole, Gaz) sur structure métallique galvanisée. Conception et pose clé en main."
  },
  {
    id: "r4",
    titre: "Totem Complet Tradex Magzi — Prix & Services",
    secteur: "Énergie & Pétrole",
    image: "/realisations/IMG-20260720-WA0044.jpg",
    pole: "signaletique",
    categorie: "Totems",
    client: "Tradex S.A.",
    annee: "2024",
    description: "Totem double corps avec panneau d'affichage des prix digitaux et modules de services (Trad'Shop, TradexLub, Maxiboost, ATM). Habillage Alucobond rouge et blanc avec signalétique directionnelle intégrée."
  },
  {
    id: "r5",
    titre: "Installation Totem Tradex Mballa 2 — Chantier",
    secteur: "Énergie & Pétrole",
    image: "/realisations/IMG-20260720-WA0045.jpg",
    pole: "signaletique",
    categorie: "Totems",
    client: "Tradex S.A.",
    annee: "2024",
    description: "Chantier de pose du totem principal de la station Tradex Mballa 2 à Yaoundé. Câblage électrique du bandeau lumineux et installation des caissons rétroéclairés sous échafaudage certifié."
  },
  {
    id: "r6",
    titre: "Signalétique Directionnelle Tradex — Panneau Bienvenue",
    secteur: "Énergie & Pétrole",
    image: "/realisations/IMG-20260720-WA0032.jpg",
    pole: "signaletique",
    categorie: "Signalétique Intérieure",
    client: "Tradex S.A.",
    annee: "2024",
    description: "Panneau directionnel d'entrée de station avec pictogramme automobile et message « Bonne route — À bientôt chez Tradex ». Structure acier peint bicolore rouge et blanc."
  },
  {
    id: "r7",
    titre: "Trad'Shop — Enseigne Lumineuse Façade & Bandeau LED",
    secteur: "Énergie & Pétrole",
    image: "/realisations/projet_tradex_5.PNG",
    pole: "signaletique",
    categorie: "Enseignes",
    client: "Tradex / Trad'Shop",
    annee: "2024",
    description: "Enseigne Trad'Shop rétroéclairée LED en façade avec bandeau néon circulaire autour de la canopée. Réalisation nocturne photographiée lors de la réception des travaux à la station Tradex Edéa."
  },
  {
    id: "r8",
    titre: "Trad'Shop — Construction & Habillage Façade",
    secteur: "Énergie & Pétrole",
    image: "/realisations/projet_tradex_7.PNG",
    pole: "signaletique",
    categorie: "Enseignes",
    client: "Tradex / Trad'Shop",
    annee: "2023",
    description: "Habillage complet façade Alucobond gris et rouge de la boutique Trad'Shop avec enseigne principale. Vue de chantier avant réception des travaux."
  },
  {
    id: "r9",
    titre: "Enseigne Lumineuse Tradex — Siège Douala Vue Nuit",
    secteur: "Énergie & Pétrole",
    image: "/realisations/IMG-20260720-WA0020.jpg",
    pole: "signaletique",
    categorie: "Enseignes",
    client: "Tradex S.A.",
    annee: "2024",
    description: "Vue nocturne de l'enseigne lumineuse principale du siège Tradex à Douala, lettres 3D rétroéclairées positionnées en hauteur sur la façade arrondie. Rendu spectaculaire validé à la réception."
  },
  {
    id: "r10",
    titre: "Enseigne Ecobank — Lettres 3D Façade (Yaoundé)",
    secteur: "Banques & Finance",
    image: "/realisations/IMG-20260720-WA0021.jpg",
    pole: "signaletique",
    categorie: "Enseignes",
    client: "Ecobank Cameroun",
    annee: "2025",
    description: "Fabrication et pose des lettres volumiques 3D « Ecobank — The Pan African Bank » sur fond Alucobond bleu en façade d'agence. Finition brillante anti-UV adaptée au climat équatorial."
  },
  {
    id: "r11",
    titre: "Guichet Automatique Ecobank — Caisson Lumineux ATM",
    secteur: "Banques & Finance",
    image: "/realisations/IMG-20260720-WA0034.jpg",
    pole: "signaletique",
    categorie: "Signalétique Intérieure",
    client: "Ecobank Cameroun",
    annee: "2025",
    description: "Habillage des cabines GAB (Guichet Automatique Bancaire) Ecobank avec caissons lumineux bleus intégrés, signalétique VISA/Mastercard et branding complet des DAB."
  },
  {
    id: "r12",
    titre: "Cabine ATM Ecobank — Pose Caisson & Signalétique",
    secteur: "Banques & Finance",
    image: "/realisations/IMG-20260720-WA0047.jpg",
    pole: "signaletique",
    categorie: "Enseignes",
    client: "Ecobank Cameroun",
    annee: "2025",
    description: "Intervention de pose du caisson lumineux bleu de la cabine ATM Ecobank. Habillage complet avec signalétique de retrait et dépôt. Chantier réalisé avec EPI certifiés."
  },
  {
    id: "r13",
    titre: "Enseigne Lumineuse Ecobank — Bandeau Entrée Agence",
    secteur: "Banques & Finance",
    image: "/realisations/IMG-20260720-WA0051.jpg",
    pole: "signaletique",
    categorie: "Enseignes",
    client: "Ecobank Cameroun",
    annee: "2025",
    description: "Enseigne lumineuse néon LED en bandeau sur portique d'entrée d'agence Ecobank — vue nocturne. Lettrage rétroéclairé blanc sur fond bleu roi, résistant aux intempéries."
  },
  {
    id: "r14",
    titre: "Totem Ecobank Ngaoundéré — Agence & Services",
    secteur: "Banques & Finance",
    image: "/realisations/IMG-20260720-WA0052.jpg",
    pole: "signaletique",
    categorie: "Totems",
    client: "Ecobank Cameroun",
    annee: "2024",
    description: "Totem bleu complet de l'agence Ecobank Ngaoundéré avec horaires, services GAB 24h/24, RapidTransfer, MoneyGram et Bureau de Change. Structure aluminium avec impression numérique UV durable."
  },
  {
    id: "r15",
    titre: "Façade Agence Ecobank Ngaoundéré — Vue Nocturne",
    secteur: "Banques & Finance",
    image: "/realisations/IMG-20260720-WA0053.jpg",
    pole: "signaletique",
    categorie: "Enseignes",
    client: "Ecobank Cameroun",
    annee: "2024",
    description: "Vue nocturne complète de l'agence Ecobank Ngaoundéré après installation des enseignes lumineuses COCIC : façade rétroéclairée, totem et signalétique extérieure."
  },
  {
    id: "r16",
    titre: "Station OLA Energy — Habillage Canopée Alucobond",
    secteur: "Énergie & Pétrole",
    image: "/realisations/IMG-20260720-WA0026.jpg",
    pole: "signaletique",
    categorie: "Enseignes",
    client: "OLA Energy",
    annee: "2024",
    description: "Pose des panneaux Alucobond bleu et blanc sur la canopée de la station OLA Energy. Chantier en hauteur sous échafaudage, avec techniciens EPI COCIC. Branding OLA complet."
  },
  {
    id: "r17",
    titre: "Totem Station Gulfin — Caisson Prix & Enseigne",
    secteur: "Énergie & Pétrole",
    image: "/realisations/IMG-20260720-WA0023.jpg",
    pole: "signaletique",
    categorie: "Totems",
    client: "Gulfin Cameroun",
    annee: "2023",
    description: "Totem complet de station-service Gulfin avec caisson de prix lumineux et enseigne principale. Construction métallique galvanisée avec habillage Alucobond jaune et blanc."
  },
  {
    id: "r18",
    titre: "Coffret Distributeur Gulfin — Pétrole & Signalétique",
    secteur: "Énergie & Pétrole",
    image: "/realisations/IMG-20260720-WA0027.jpg",
    pole: "signaletique",
    categorie: "Signalétique Intérieure",
    client: "Gulfin Cameroun",
    annee: "2023",
    description: "Habillage du coffret distributeur Gulfin avec signalétique Pétrole en grand format. Caisson double face aluminium et impression UV grand format fond jaune et blanc."
  },
  {
    id: "r19",
    titre: "Enseigne Fabrication — Atelier COCIC (Lettrage Acier)",
    secteur: "Autres",
    image: "/realisations/IMG-20260720-WA0025.jpg",
    pole: "signaletique",
    categorie: "Enseignes",
    client: "COCIC SARL — Production interne",
    annee: "2024",
    description: "Technicien COCIC en EPI haute visibilité effectuant la finition au pistolet de peinture sur un panneau de lettrage grand format en atelier. Illustration du savoir-faire technique de fabrication."
  },
  {
    id: "r20",
    titre: "Habillage Réfrigérateur Boissons du Cameroun",
    secteur: "Agroalimentaire",
    image: "/realisations/IMG-20260720-WA0019.jpg",
    pole: "signaletique",
    categorie: "Signalétique Intérieure",
    client: "Boissons du Cameroun",
    annee: "2023",
    description: "Habillage complet d'un réfrigérateur mobile Boissons du Cameroun en vinyle impression numérique UV jaune et orange. Caisson aluminium sur roulettes pour points de vente."
  },
  {
    id: "r21",
    titre: "Tour Alucobond Bicolore — Station Énergie (Vue Dusk)",
    secteur: "Énergie & Pétrole",
    image: "/realisations/IMG-20260720-WA0043.jpg",
    pole: "signaletique",
    categorie: "Enseignes",
    client: "Client énergie — Douala",
    annee: "2024",
    description: "Tour de station-service en Alucobond bicolore gris et blanc avec bandeau LED rouge panoramique. Installation à Douala lors d'un chantier nocturne de mise en lumière."
  },

  // ── TEXTILE & CONFECTION ─────────────────────────────────────────────────

  {
    id: "r22",
    titre: "Chemise Corporate Boissons du Cameroun — Collection Homme",
    secteur: "Agroalimentaire",
    image: "/realisations/textile_1.jpg",
    pole: "textile",
    categorie: "Uniformes Corporate",
    client: "Boissons du Cameroun",
    annee: "2025",
    description: "Confection de chemise corporate homme Boissons du Cameroun en tissu chiné tricolore (jaune, gris, blanc) avec badge brodé. Coupe ajustée sur-mesure, finitions biais blancs et bandes réfléchissantes."
  },
  {
    id: "r23",
    titre: "Polo Long Manches Boissons du Cameroun — Collection Homme",
    secteur: "Agroalimentaire",
    image: "/realisations/textile_2.jpg",
    pole: "textile",
    categorie: "Uniformes Corporate",
    client: "Boissons du Cameroun",
    annee: "2025",
    description: "Polo manches longues corporate Boissons du Cameroun bicolore jaune/marine avec appliqué logo intégré. Conception et production d'une ligne homogène pour la force de vente terrain."
  },
  {
    id: "r24",
    titre: "Robe Uniforme Dame Boissons du Cameroun — Collection Femme",
    secteur: "Agroalimentaire",
    image: "/realisations/textile_3.jpg",
    pole: "textile",
    categorie: "Uniformes Corporate",
    client: "Boissons du Cameroun",
    annee: "2025",
    description: "Robe uniforme corporate femme rouge et gris perle avec col officier, badge brodé et manches évasées en georgette. Collection hôtesses et accueil pour les événements corporatifs Boissons du Cameroun."
  },
  {
    id: "r25",
    titre: "Chemise Corporate Boissons du Cameroun — Gris-Blanc (Homme)",
    secteur: "Agroalimentaire",
    image: "/realisations/IMG-20260720-WA0038.jpg",
    pole: "textile",
    categorie: "Uniformes Corporate",
    client: "Boissons du Cameroun",
    annee: "2025",
    description: "Chemise corporate homme Boissons du Cameroun gris chiné/blanc avec rayure jaune centrale et badge brodé. Modèle manches longues pour managers et commerciaux terrain."
  },
  {
    id: "r26",
    titre: "Tablier Corporate Trad'Shop — Tenue Hôtesse",
    secteur: "Énergie & Pétrole",
    image: "/realisations/IMG-20260720-WA0042.jpg",
    pole: "textile",
    categorie: "Uniformes Corporate",
    client: "Tradex / Trad'Shop",
    annee: "2024",
    description: "Tablier rouge corporate Trad'Shop avec poche avant grise et broderie logo. Confectionné pour les hôtesses et vendeurs des boutiques Trad'Shop dans les stations Tradex."
  },
  {
    id: "r27",
    titre: "Sac Banane Brodé Orange Digital Centre",
    secteur: "Autres",
    image: "/realisations/IMG-20260720-WA0041.jpg",
    pole: "textile",
    categorie: "Merchandising",
    client: "Orange Digital Centre",
    annee: "2024",
    description: "Confection de sacs banane en toile noire avec broderie « Orange Digital Centre » en orange. Production réalisée sur brodeuse industrielle Tajima multi-têtes pour les participants aux formations."
  },

  // ── IMPRESSION & ARTS GRAPHIQUES ─────────────────────────────────────────

  {
    id: "r28",
    titre: "Packaging Sac Farine Bijou Agege Best — 50kg",
    secteur: "Agroalimentaire",
    image: "/realisations/IMG-20260720-WA0018.jpg",
    pole: "impression",
    categorie: "Arts Graphiques",
    client: "Bijou / Agege Best",
    annee: "2024",
    description: "Conception graphique et impression numérique du packaging grand sac de farine Bijou Agege Best 50 kg. Rendu chromatic premium en bleu/or sur fond sombre, surimpression brillante sur polypropylène tissé."
  },
  {
    id: "r29",
    titre: "Totem Promotionnel Castel Beer — Bouteille Gonflable 4m",
    secteur: "Agroalimentaire",
    image: "/realisations/IMG-20260720-WA0029.jpg",
    pole: "impression",
    categorie: "Événementiel",
    client: "Boissons du Cameroun / Castel Beer",
    annee: "2024",
    description: "Fabrication d'une réplique gonflable géante de la bouteille Castel Beer en PVC haute résistance — 4 mètres de hauteur. Impression numérique UV grand format fidèle au design de l'étiquette officielle."
  },
  {
    id: "r30",
    titre: "Bouteille Gonflable 33 Export — Événementiel Football",
    secteur: "Agroalimentaire",
    image: "/realisations/IMG-20260720-WA0030.jpg",
    pole: "impression",
    categorie: "Événementiel",
    client: "Boissons du Cameroun / 33 Export",
    annee: "2024",
    description: "Réplique gonflable géante 33 Export Bière en PVC imprimée numériquement. Confectionnée pour les animations et campagnes de visibilité lors des matchs de football. Dimension : 4,5 mètres."
  },
  {
    id: "r31",
    titre: "Arche Gonflable Source Tangui — Événement 14×7m",
    secteur: "Agroalimentaire",
    image: "/realisations/IMG-20260720-WA0028.jpg",
    pole: "impression",
    categorie: "Événementiel",
    client: "Source Tangui",
    annee: "2024",
    description: "Conception et fabrication d'une arche gonflable Source Tangui de 14 mètres de largeur et 7 mètres de hauteur. Structure PVC bleu/rouge avec impression numérique intégrale. Parfaite pour courses et événements sportifs."
  },
  {
    id: "r32",
    titre: "Panneau Publicitaire 33 Export — Affichage Bar",
    secteur: "Agroalimentaire",
    image: "/realisations/projet_signaletique_9.PNG",
    pole: "impression",
    categorie: "Impression Grand Format",
    client: "Boissons du Cameroun / 33 Export",
    annee: "2024",
    description: "Impression numérique grand format bâche frontlit 33 Export avec habillage bar et bandeau promotionnel « Le Sucre de la CAN ». Pose complète sur structure en extérieur."
  },
  {
    id: "r33",
    titre: "Bandeau Publicitaire 33 Export — Le Sucre de la CAN",
    secteur: "Agroalimentaire",
    image: "/realisations/IMG-20260720-WA0054.jpg",
    pole: "impression",
    categorie: "Impression Grand Format",
    client: "Boissons du Cameroun / 33 Export",
    annee: "2024",
    description: "Bandeau publicitaire en drapeau triangulaire 33 Export avec message « Chez 2 Le Sucre de la CAN ». Impression numérique sur bâche couplée à un panneau billboard. Pose sur mât acier."
  },
  {
    id: "r34",
    titre: "Bandeau Bâche TOP Boissons — Façade Bar Promotionnel",
    secteur: "Agroalimentaire",
    image: "/realisations/IMG-20260720-WA0049.jpg",
    pole: "impression",
    categorie: "Impression Grand Format",
    client: "Boissons du Cameroun / TOP",
    annee: "2024",
    description: "Bâches frontlit grand format « Un TOP sourire à la vie » avec visuels bouteilles en pied de façade de bar. Impression numérique haute définition installée à Douala."
  },
  {
    id: "r35",
    titre: "Panneau Caisson Trad'Shop — Affichage Extérieur",
    secteur: "Énergie & Pétrole",
    image: "/realisations/IMG-20260720-WA0040.jpg",
    pole: "impression",
    categorie: "Impression Grand Format",
    client: "Tradex / Trad'Shop",
    annee: "2024",
    description: "Panneau double face imprimé en caisson Trad'Shop « Visitez nos Trad'Shops » avec visuel photographique grand format. Structure aluminium slim-frame posée sur pelouse."
  },
  {
    id: "r36",
    titre: "Billboard Trad'Shop — Cadre Mural Exterior 24h/24",
    secteur: "Énergie & Pétrole",
    image: "/realisations/IMG-20260720-WA0050.jpg",
    pole: "impression",
    categorie: "Impression Grand Format",
    client: "Tradex / Trad'Shop",
    annee: "2024",
    description: "Panneau mural imprimé grand format Trad'Shop « Ouvertes 24h/24 » sur cadre métallique intégré dans une structure décorative circulaire. Impression numérique photo qualité extérieur."
  },
  {
    id: "r37",
    titre: "Habillage Comptoir Bar 33 Export — Vinyle Adhésif",
    secteur: "Agroalimentaire",
    image: "/realisations/projet_signaletique_10.PNG",
    pole: "impression",
    categorie: "Arts Graphiques",
    client: "Boissons du Cameroun / 33 Export",
    annee: "2023",
    description: "Habillage du comptoir d'un bar partenaire avec vinyle adhésif rouge 33 Export et logo blanc en relief. Application sur surface bois laquée, finition vernis brillant UV."
  },
  {
    id: "r38",
    titre: "Conception Stand Total Quartz — Contenant Promotionnel 3D",
    secteur: "Énergie & Pétrole",
    image: "/realisations/IMG-20260720-WA0022.jpg",
    pole: "impression",
    categorie: "Événementiel",
    client: "Total Quartz Cameroun",
    annee: "2023",
    description: "Rendu 3D conception d'un stand promotionnel container Total Quartz Chez Essomba avec vitrine d'exposition huiles moteur. Design architectural et visual merchandising intégré."
  },
  {
    id: "r39",
    titre: "Terrain de Basketball Marqué — YouZou (Vue Aérienne)",
    secteur: "Autres",
    image: "/realisations/IMG-20260720-WA0048.jpg",
    pole: "impression",
    categorie: "Arts Graphiques",
    client: "YouZou — Yaoundé",
    annee: "2024",
    description: "Marquage complet d'un terrain de basketball aux couleurs YouZou — vert, blanc et logo central — réalisé par application de peinture spéciale sol extérieur résistante aux UV et aux intempéries."
  },

  // ── WRAPPING & HABILLAGE VÉHICULES ───────────────────────────────────────

  {
    id: "r40",
    titre: "Car Wrapping OLA Lab — Van Mercedes Sprinter",
    secteur: "Énergie & Pétrole",
    image: "/realisations/IMG-20260720-WA0024.jpg",
    pole: "impression",
    categorie: "Arts Graphiques",
    client: "OLA Energy",
    annee: "2024",
    description: "Semi-covering complet du van Mercedes Sprinter OLA Lab (laboratoire mobile de contrôle qualité) aux couleurs OLA Energy bleu, blanc et orange. Vinyle polymère coulé 3M avec lamination anti-UV pour une durée de vie de 5 ans sous soleil africain."
  },
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
