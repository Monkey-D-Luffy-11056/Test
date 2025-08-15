# Aide Générale — Expo + Supabase (Auth + Codes Premium)

## 1) Prérequis
- Compte Supabase (gratuit)
- Projet Expo (ou Snack)

## 2) Supabase — Configuration
1. Crée un projet, récupère **API URL** et **anon key**.
2. Dans `supabaseClient.js`, remplis `SUPABASE_URL` et `SUPABASE_ANON_KEY`.

### Table `premium_codes`
Crée une table `premium_codes` avec colonnes :
- `id` uuid (PK, default `uuid_generate_v4()`)
- `code` text
- `is_used` boolean (default false)

Ajoute quelques lignes de test (ex: `VIP-1234`, `false`).

## 3) Lancer le projet
```bash
npm install
npm start
```
Sur Snack, importe `App.js` + copie les autres fichiers dans des onglets (ou migre en projet local).

## 4) Flux Premium
- L'utilisateur entre un code sur l'écran **Premium**.
- L'app vérifie dans Supabase (`premium_codes`) et **marque utilisé**.
- `AsyncStorage` mémorise le statut premium.

## 5) Flux Auth
- Écrans **Login** et **Signup** inclus (email + mot de passe).
- La session est observée ; si connecté, l'app ouvre Accueil par défaut.

## 6) Contenu distant
- Modifie `services/api.js` → `DATA_URL` (Gist Raw) pour charger `data.json`. 
- `sampleData.json` est utilisé en **fallback** si le réseau échoue.

## 7) Personnalisation
- Ajoute d'autres catégories (`HomeScreen.js`)
- Améliore l'UI, ajoute des icônes (Ionicons), etc.

## 8) Sécurité
- Ne mets jamais le contenu premium en clair dans le code.
- Liens premium: utilise Google Drive non listé ou une page protégée.