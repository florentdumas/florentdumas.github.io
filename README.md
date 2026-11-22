# Site portfolio — Florent Dumas

Site d'une seule page, sans WordPress ni outil à installer, prévu pour **GitHub Pages**.

## Ce qu'il y a dans le dossier

| Fichier / dossier | Rôle | À modifier ? |
|---|---|---|
| `content.js` | **Tout le contenu** : textes, projets, crédits, prix, contact | **Oui, c'est le seul** |
| `images/` | Images, un sous-dossier par projet (`images/<id>/`) | Oui, pour ajouter des images |
| `files/` | PDF (CV, rapport de stage…) | Si besoin |
| `index.html` | Structure de la page | Non |
| `style.css` | Mise en page et couleurs | Seulement pour changer le style |
| `app.js` | Affiche le contenu | Non |
| `.nojekyll` | Indique à GitHub de publier les fichiers tels quels | Non |

## Ajouter un projet

1. Créer un dossier `images/mon-projet/` et y mettre une vignette (16/9, idéalement 1280 × 720, en `.jpg`) et les captures d'écran.
2. Ouvrir `content.js`, descendre jusqu'à `projects: [`, copier un bloc `{ ... },` existant et le coller à l'endroit voulu (l'ordre de la liste = l'ordre d'affichage).
3. Changer :
   - `id` : nom court sans espace ni accent (il sert d'adresse : `monsite/#mon-projet`) ;
   - `title`, `year`, `type`, `tech`, `platforms`, `role` ;
   - `tags` : `"main"` (projets principaux), `"side"` (perso), `"student"` (étudiants), `"vr"` ;
   - `cover` : chemin de la vignette ;
   - `media` : vidéos et images de la galerie ;
   - `text` : la description en anglais (`en`) et en français (`fr`).
4. Si vous laissez une langue vide (`fr: ""`), le texte de l'autre langue s'affiche à la place.

### Les médias

```js
media: [
  { youtube: "hkSnEq1vEXE", caption: "trailer" },  // la fin de l'adresse youtu.be/hkSnEq1vEXE
  { vimeo: "54491456" },                            // la fin de l'adresse vimeo.com/54491456
  { image: "images/wander/wander_screenshot_1.jpg" },
  { soundcloud: "https://api.soundcloud.com/tracks/59621423" },
],
```

### Mise en forme des textes

Dans les textes entre accents graves `` ` ``, une ligne vide crée un nouveau paragraphe, `[texte](https://adresse)` crée un lien, `[Spheres](#spheres)` ouvre la fiche d'un autre projet et `**texte**` met en gras.

Attention aux guillemets : dans `"..."` n'utilisez pas `"` à l'intérieur (préférez `'` ou les accents graves).

## Voir le site sur son ordinateur

Double-cliquez sur `index.html`. Le site s'affiche ; seules certaines vidéos YouTube peuvent refuser de se lancer depuis un fichier local. Elles fonctionneront une fois le site en ligne.

Si la page reste vide après une modification de `content.js`, c'est presque toujours une virgule ou un guillemet oublié : ouvrez la console du navigateur (F12) pour voir la ligne fautive.

## Mettre en ligne sur GitHub Pages

1. Créer un compte sur [github.com](https://github.com) si besoin.
2. Créer un dépôt public nommé **`<votre-identifiant>.github.io`** (le site sera alors à l'adresse `https://<votre-identifiant>.github.io`). Un autre nom fonctionne aussi, l'adresse devient alors `https://<votre-identifiant>.github.io/<nom-du-depot>`.
3. Dans le dépôt : **Add file → Upload files**, glisser **le contenu** de ce dossier (pas le dossier lui-même), puis **Commit changes**.
4. **Settings → Pages** : Source « Deploy from a branch », branche `main`, dossier `/ (root)`, **Save**.
5. Le site est en ligne après une à deux minutes.

Pour les mises à jour suivantes, il suffit de modifier `content.js` directement sur GitHub (icône crayon) ou de renvoyer les fichiers modifiés.

### Nom de domaine (facultatif)

Pour garder `dumasflo.fr` : **Settings → Pages → Custom domain**, puis chez le registraire du domaine, créer les enregistrements DNS indiqués par GitHub ([documentation](https://docs.github.com/fr/pages/configuring-a-custom-domain-for-your-github-pages-site)).

## Formulaire de contact

GitHub Pages n'envoie pas d'e-mails lui-même : le formulaire passe par **Formspree** (gratuit jusqu'à 50 messages par mois).

1. Créer un compte sur [formspree.io](https://formspree.io) avec l'adresse qui doit recevoir les messages.
2. **New Form**, lui donner un nom, puis copier son adresse (de la forme `https://formspree.io/f/abcdwxyz`).
3. La coller dans `content.js` : `contact: { form: "https://formspree.io/f/abcdwxyz", ... }`.
4. Mettre le site en ligne et envoyer un message de test : Formspree demande de confirmer l'adresse lors du premier envoi.

Tant que `form` est vide, le formulaire s'affiche mais indique que l'envoi a échoué.

## Jeux à télécharger

GitHub refuse les fichiers de plus de 100 Mo. Les anciens jeux (`wander.rar`, `sbires.zip`, `Martyr.zip`, `stalker_sur_glace.exe`, dans `www_old/old/download/` de l'archive) sont à déposer sur [itch.io](https://itch.io) ou dans les **Releases** du dépôt GitHub (jusqu'à 2 Go par fichier), puis il suffit de coller le lien dans le champ `download` du projet.

## Changer l'apparence

- Grand titre de l'accueil : `headline` en haut de `content.js`.
- Couleur d'accent : `accent` en haut de `content.js`.
- Autres couleurs, polices, espacements : variables en haut de `style.css` (`--bg`, `--text`…). Le bloc `:root[data-theme="light"]` juste en dessous contient les couleurs du mode clair.
- Largeur du bandeau du haut : `max-width` de `.topbar-inner` dans `style.css` (plus petit = nom et menu plus proches du centre).
