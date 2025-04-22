/** @type {import('tailwindcss').Config} */
module.exports = {
  // Purge des classes inutilisées pour optimiser la taille du CSS en production
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  // Mise en cache pour accélérer les builds
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {},
  },
  // Désactiver les variants rarement utilisés pour réduire la taille
  corePlugins: {
    container: false,
    placeholderOpacity: false,
    ringOpacity: false,
  },
  // Mode JIT (Just-In-Time) pour générer uniquement les classes utilisées
  mode: "jit",
  plugins: [],
}
