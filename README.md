# 🇨🇲 COCIC SARL — Site Vitrine Ultra-Premium

Bienvenue dans le dépôt du site vitrine institutionnel de **COCIC SARL**, leader camerounais en communication visuelle, signalétique industrielle, textile/confection et impression numérique grand format.

Ce site a été conçu et développé avec les plus hauts standards de l'artisanat web : une architecture mobile-first fluide, des coupures géométriques CNC signatures (`clip-path`), des filtres de portfolio fluides avec réorganisation animée et un mode de transition de page premium sous **React 19, Vite, Tailwind CSS v4 et Framer Motion**.

---

## 📂 STRUCTURE DE L'ARBORESCENCE

L'organisation des fichiers suit une logique modulaire stricte garantissant l'indépendance de la logique de données et des composants d'affichage :

```text
/
├── .env.example            # Configuration des variables d'environnement de l'applet
├── index.html              # Point d'entrée HTML principal (titre de marque configuré)
├── package.json            # Manifeste des dépendances (React 19, Motion, Lucide-react, React-Router-Dom)
├── tsconfig.json           # Configuration stricte de compilation TypeScript
├── vite.config.ts          # Configuration du bundler Vite avec alias d'importation
│
└── src/
    ├── main.tsx            # Point d'entrée d'initialisation React
    ├── App.tsx             # Gestionnaire de routage principal (lazy loading & suspensions)
    ├── index.css           # Design Tokens, variables de marque, polices et masques de calage
    ├── types.ts            # Déclaration stricte des interfaces de données de la marque
    ├── data.ts             # Données d'ateliers, réalisations (portfolio), clients et témoignages
    │
    ├── components/         # Composants d'interface réutilisables (Shared Components)
    │   ├── Button.tsx          # CTA primaire (rouge coupé), secondaire (contour bleu), light
    │   ├── SectionTitle.tsx    # Titre H2 avec repère graphique triangulaire rouge signature
    │   ├── AnimatedCounter.tsx # Compteur de statistiques lié à l'intersection du viewport
    │   ├── FilterPills.tsx     # Pilules de filtrage avec glissement du fond actif (layout ID)
    │   └── PageTransition.tsx  # Wrapper fluide pour les fondus enchaînés des routes
    │
    └── pages/              # Pages structurelles de l'univers de marque
        ├── Accueil.tsx         # Héro diagonal XXL, bandeau chiffres clés, 3 pôles et défilé infini
        ├── APropos.tsx         # Citation géante, timeline horizontale 25 ans, facteurs de succès
        ├── Services.tsx        # Hub et galerie de réalisations (duotone, lightboxes, filtres dynamiques)
        ├── Equipements.tsx     # Parc machines complet trié par atelier et schéma de flux de production
        ├── References.tsx      # Grille des logos sectoriels grayscale -> couleur et témoignages
        └── Contact.tsx         # Formulaire, sélecteur de pôle stylisé, WhatsApp CTA et Google Map
```

---

## 🎨 DESIGN TOKENS & IDENTITÉ GRAPHIQUE

Tous nos jetons de design sont centralisés dans le fichier `src/index.css` à l'intérieur de la directive `@theme` de **Tailwind CSS v4** :

- **brand-blue (`#005CAA`)** : Couleur dominante institutionnelle (60% de l'espace colorimétrique).
- **brand-red (`#EE323A`)** : Couleur d'action et d'accent (CTA, hovers, indicateurs actifs).
- **brand-navy (`#0A2540`)** : Fonds sombres texturés et structures immersives.
- **brand-offwhite (`#F7F8FA`)** : Arrière-plan pour adoucir la luminance.
- **brand-darkblue (`#032E4F`)** : Dégradés d'en-tête et hero.

### Formes Signature (Usinage Laser)
- `.clip-top-left` / `.clip-bottom-right` : Simulent les angles coupés à 45° typiques des chutes de plaques d'Alucobond et d'acrylique découpées à l'atelier.
- `.offset-register` : Effet de surimpression décalé en surbrillance (clin d'œil graphique au mauvais calage d'impression offset).
- `.duotone-filter` : Filtre photo bleu/rouge appliqué au repos sur le catalogue de réalisations pour homogénéiser les photos clients d'origines hétérogènes.

---

## ⚙️ COMMENT REMPLACER LES DONNÉES MOCKÉES par du contenu Réel ?

Toutes les données du site sont découplées des vues et stockées dans `/src/data.ts` sous des tableaux d'objets TypeScript typés (voir `/src/types.ts`).

### Option 1 : Modification Manuelle Directe (Statique)
Pour mettre à jour les réalisations, ajouter un client ou modifier une machine, ouvrez simplement le fichier `/src/data.ts` et mettez à jour les enregistrements existants. 

*Exemple pour ajouter une réalisation dans `REALISATIONS_DATA` :*
```typescript
{
  id: "r11",
  titre: "Enseigne lumineuse et habillage de station",
  secteur: "Énergie & Pétrole",
  image: "https://votre-cdn.com/photos/votre-image.jpg",
  pole: "signaletique",
  categorie: "Enseignes",
  client: "Tradex Congo",
  annee: "2026",
  description: "Description de la pose de l'enseigne..."
}
```

### Option 2 : Connexion à un Headless CMS ou Base de données (Dynamique)
Pour rendre le site entièrement administrable par les équipes marketing de COCIC, vous pouvez remplacer les imports de `/src/data.ts` dans les composants par des requêtes API asynchrones vers votre CMS préféré (Strapi, Contentful ou Google Firestore).

1. **Création d'un Hook de Données** (ex. `src/hooks/useFetchCMS.ts`) :
   ```typescript
   import { useState, useEffect } from "react";
   import { Realisation } from "../types";

   export function useRealisations() {
     const [data, setData] = useState<Realisation[]>([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
       fetch("https://cms.cocic-sarl.com/api/realisations")
         .then((res) => res.json())
         .then((json) => {
           setData(json);
           setLoading(false);
         });
     }, []);

     return { data, loading };
   }
   ```
2. **Utilisation dans la Page** :
   Dans `/src/pages/Services.tsx`, remplacez l'importation locale `REALISATIONS_DATA` par l'appel à votre hook :
   ```typescript
   const { data: realisations, loading } = useRealisations();
   ```

---

## 🛠️ SCRIPTS DE DÉVELOPPEMENT

Le projet inclut des scripts optimisés pour le développement et la mise en production :

- `npm run dev` : Lance le serveur de développement local sur le port 3000.
- `npm run lint` : Valide la conformité du code TypeScript et prévient les erreurs de syntaxe.
- `npm run build` : Compile et optimise les ressources (HTML, CSS, JS minifié) dans le dossier `/dist`.

Développé pour **COCIC SARL** — *Laisser la plus belle Empreinte…*
"# cocic_repository" 
