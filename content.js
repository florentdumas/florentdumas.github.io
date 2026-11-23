/* =====================================================================
   CONTENU DU SITE — c'est le seul fichier à modifier pour le mettre à jour.
   ---------------------------------------------------------------------
   • Les textes bilingues s'écrivent { en: "...", fr: "..." }.
     Si une langue est vide (""), l'autre est affichée à la place.
   • Dans les textes longs (entre accents graves ` `) :
       - une ligne vide = nouveau paragraphe
       - [texte du lien](https://adresse)  = lien
       - [voir Spheres](#spheres)          = ouvre la fiche d'un autre projet
       - **gras**
   • Pour ajouter un projet : copier un bloc { ... }, dans "projects",
     changer l'id (sans espace ni accent) et mettre les images dans images/<id>/.
     L'ordre dans la liste = l'ordre d'affichage.
   • Voir README.md pour le mode d'emploi complet.
   ===================================================================== */

window.SITE = {

  /* ---------- Identité ---------- */
  name: "Florent Dumas",
  tagline: { en: "technical audio designer", fr: "technical audio designer" },
  // grand titre de l'accueil
  headline: {
    en: "Interactive Audio, Programming & Sound Design for Games",
    fr: "Audio interactif, programmation & sound design pour le jeu vidéo",
  },
  // ligne sous le titre ([texte](adresse) = lien)
  intro: {
    en: "Lead Audio at [G4F Prod](https://www.g4f-prod.com/)",
    fr: "Lead Audio chez [G4F Prod](https://www.g4f-prod.com/)",
  },
  accent: "#e8a33d",                // couleur d'accent du site
  // CV : chemin du PDF (ex. "files/florent_dumas_resume.pdf") ; vide = « coming soon » affiché à la place
  resume: { en: "", fr: "" },

  /* ---------- Contact ----------
     Formulaire + (facultatif) adresse e-mail et liens affichés en dessous.
     Une ligne vide ou absente n'est pas affichée. */
  contact: {
    // Formulaire : adresse fournie par Formspree (voir README, "Formulaire de contact"),
    // ex. "https://formspree.io/f/abcdwxyz". Les messages arrivent alors dans votre boîte mail.
    form: "https://formspree.io/f/xdegporq",
    email: "",                      // facultatif : adresse affichée sous le formulaire
    links: [
      // { label: "LinkedIn", url: "https://www.linkedin.com/in/..." },
      // { label: "SoundCloud", url: "https://soundcloud.com/..." },
    ],
  },

  /* ---------- Mentions légales (lien en bas de page) ---------- */
  legal: {
    en: `**Publisher and editor**
Florent Dumas, contact through the [contact form](#contact).

**Hosting**
GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States, [pages.github.com](https://pages.github.com).

**Intellectual property**
All texts, sounds, images and videos on this site are protected by copyright and belong to Florent Dumas or to their respective owners. They may not be reused without permission.

**Personal data**
This site does not use cookies or tracking. Messages sent through the contact form (name, email address, message) are delivered by [Formspree](https://formspree.io/legal/privacy-policy) and are used only to reply to you. They are never shared and are deleted once they are no longer needed. You can ask for access to or deletion of your data through the contact form.`,
    fr: `**Éditeur et directeur de la publication**
Florent Dumas, joignable via le [formulaire de contact](#contact).

**Hébergement**
GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis, [pages.github.com](https://pages.github.com).

**Propriété intellectuelle**
Les textes, sons, images et vidéos de ce site sont protégés par le droit d'auteur et appartiennent à Florent Dumas ou à leurs ayants droit respectifs. Toute réutilisation sans autorisation est interdite.

**Données personnelles**
Ce site n'utilise ni cookies ni outil de mesure d'audience. Les messages envoyés via le formulaire de contact (nom, adresse e-mail, message) sont transmis par [Formspree](https://formspree.io/legal/privacy-policy) et servent uniquement à vous répondre. Ils ne sont jamais cédés et sont supprimés lorsqu'ils ne sont plus utiles. Vous pouvez demander l'accès à vos données ou leur suppression via le formulaire de contact.`,
  },

  /* ---------- À propos ---------- */
  about: {
    photo: "images/profile.jpg",
    text: {
      en: `Florent is a lead and technical audio designer at [G4F Prod](https://www.g4f-prod.com/). He graduated from ENJMIN in 2014 and has since gone from building audio tools in Pure Data to leading and implementing audio on games with one- to three-year development cycles. Although his background is in sound design, his real passion is interactive audio. He loves working with talented sound designers to craft amazing game audio together.`,
      fr: `Florent est lead audio et technical audio designer chez [G4F Prod](https://www.g4f-prod.com/). Diplômé de l'ENJMIN en 2014, il est passé de la création d'outils audio sous PureData à la direction et à l'intégration audio de jeux vidéo développés sur un à trois ans. Même s'il vient du sound design, ce qui le passionne avant tout, c'est l'audio interactif. Il aime travailler avec des sound designers talentueux pour créer et développer des bandes-son remarquables.`,
    },
  },

  /* ---------- Actualités (la plus récente en premier) ---------- */
  news: [
    {
      en: "[Warhammer 40,000: Mechanicus II](https://store.steampowered.com/app/2532480/) is out! I had the chance to work on the franchise with Bulwark Studios!",
      fr: "[Warhammer 40,000: Mechanicus II](https://store.steampowered.com/app/2532480/) est sorti ! J'ai eu la chance de travailler sur la franchise avec Bulwark Studios !",
    },
  ],

  /* ---------- Compétences ---------- */
  skills: [
    {
      title: { en: "audio design", fr: "design audio" },
      items: {
        en: ["interactive audio design", "audio implementation", "asset creation", "sound recording / editing / mixing"],
        fr: ["design audio interactif", "intégration audio", "création d'assets", "prise de son / montage / mixage"],
      },
    },
    { title: { en: "programming", fr: "programmation" }, items: { en: ["c# in unity", "blueprint in unreal engine", "pure data"], fr: ["c# dans unity", "blueprint dans unreal engine", "pure data"] } },
    { title: { en: "engines", fr: "moteurs" }, items: { en: ["wwise", "fmod", "unity", "unreal engine"], fr: "" } },
  ],

  /* ---------- Crédits ----------
     project: "id" d'un projet ci-dessous pour rendre la ligne cliquable (facultatif). */
  credits: [
    {
      title: { en: "interactive media", fr: "médias interactifs" },
      rows: [
        { title: "Warhammer 40,000: Mechanicus II", project: "mechanicus-2", role: "sound mixer, implementation, sound design", where: "pc, ps5, xbox series x|s", year: 2026 },
        { title: "Demeter: The Asklepios Chronicles", project: "demeter", role: "lead audio, implementation", where: "quest 2, quest pro, quest 3", year: 2024 },
        { title: "On the Morning You Wake", project: "otmyw", role: "lead audio, implementation", where: "quest 2", year: 2022 },
        { title: "-22.7°C", project: "22-7c", role: "sound design, implementation", where: "rift, youtube", year: 2019 },
        { title: "Spheres", project: "spheres", role: "sound editing, implementation", where: "rift, vive", year: 2018 },
        { title: "Umami", project: "umami", role: "sound design, implementation", where: "rift", year: 2018 },
        { title: "Vandals", project: "vandals", role: "sound design, implementation", where: "android, ios, pc", year: 2018 },
        { title: "Notes on Blindness", project: "notes-on-blindness", role: "sound design, implementation, gameplay programming", where: "gearvr, rift, quest", year: 2016 },
        { title: "Reshape", project: "reshape", role: "programming, soundbank maker", where: "vst, au, aax & osc", year: 2016 },
        { title: "AudioElec", project: "audioelec", role: "programming, soundbank maker", where: "vst, au, aax & osc", year: 2015 },
        { title: "Ascent", project: "ascent", role: "sound design, implementation", where: "rift", year: 2013 },
        { title: "Caveman Wars", project: "caveman-wars", role: "sound design", where: "android, ios", year: 2013 },
        { title: "Yeti on Furry", project: "yeti-on-furry", role: "sound design", where: "android, ios, pc", year: 2013 },
        { title: "Sbires", project: "sbires", role: "sound design, music, voice editing, implementation", where: "pc", year: 2013 },
        { title: "Wander", project: "wander", role: "sound design, music, voice editing, implementation", where: "pc", year: 2013 },
      ],
    },
    {
      title: { en: "film, series & audio", fr: "films, séries & audio" },
      rows: [
        { title: "4 Feet High", project: "4feethigh", role: "lead sound design", where: "", year: 2021 },
        { title: "Malfosse", project: "malfosse", role: "lead sound design, project management", where: "audible", year: 2019 },
        { title: "Change", project: "change", role: "sound design", where: "youtube", year: 2019 },
        { title: "The Isle of the Dead", project: "the-isle-of-the-dead", role: "implementation", where: "rift, youtube", year: 2018 },
        { title: "Elegy", project: "elegy", role: "production sound mixer, sound design", where: "gearvr, go, rift", year: 2018 },
        { title: "Kinoscope", project: "kinoscope", role: "sound design", where: "youtube", year: 2016 },
        { title: "Don't Do That, dir. Cathy Kostova", role: "production sound mixer, boom operator", where: "", year: 2012 },
        { title: "Coco, dir. Gabriel Belanger-Oyarzun", project: "coco", role: "production sound mixer, sound design", where: "", year: 2011 },
        { title: "Friendship's Labour's Lost, dir. Cathy Kostova", role: "production sound mixer, boom operator", where: "", year: 2011 },
      ],
    },
  ],

  /* ---------- Prix et distinctions ---------- */
  awards: [
    { year: 2022, award: "Peabody Awards, Interactive and Digital", project: "notes-on-blindness" },
    { year: 2022, award: "SXSW Film Design Awards, XR Experience Competition", project: "otmyw" },
    { year: 2021, award: "SXSW, Episodic Pilot Competition Award", project: "4feethigh" },
    { year: 2019, award: "NewImages Festival, Prize for New Storytelling", project: "22-7c" },
    { year: 2019, award: "Motion Picture Sound Editors, nominated", project: "spheres" },
    { year: 2018, award: "La Biennale di Venezia, Best VR Award", project: "spheres" },
    { year: 2016, award: "Kaleidoscope, Best Experimental Experience", project: "notes-on-blindness" },
    { year: 2016, award: "Sheffield Doc/Fest, Alternate Realities VR Award", project: "notes-on-blindness" },
    { year: 2016, award: "Tribeca Film Festival, Storyscapes Award", project: "notes-on-blindness" },
    { year: 2013, award: "Le Monde Hits Playtime, Grand Prize", project: "wander" },
  ],

  /* ---------- Filtres de la grille des projets ----------
     Chaque projet a des "tags" ; un filtre affiche les projets qui ont ce tag. */
  filters: [
    { tag: "*", label: { en: "all", fr: "tout" } },
    { tag: "main", label: { en: "main projects", fr: "projets principaux" } },
    { tag: "game", label: { en: "games", fr: "jeux" } },
    { tag: "linear", label: { en: "linear", fr: "linéaire" } },
    { tag: "vr", label: { en: "vr & 360", fr: "vr & 360" } },
    { tag: "tool", label: { en: "tools", fr: "outils" } },
    { tag: "student", label: { en: "student work", fr: "projets étudiants" } },
  ],

  /* ---------- Projets ----------
     Modèle à copier pour un nouveau projet :
  {
    id: "mon-projet",                       // utilisé dans l'adresse : monsite/#mon-projet
    title: "Mon Projet",
    year: 2025,
    tags: ["main", "vr"],                   // main, game, linear, vr, tool, student (plusieurs possibles)
    cover: "images/mon-projet/cover.jpg",   // vignette 16/9 de la grille
    type: { en: "vr experience", fr: "expérience vr" },
    tech: "unity & wwise",
    platforms: "quest 3",
    role: { en: "lead audio", fr: "lead audio" },
    links: [ { label: { en: "website", fr: "site web" }, url: "https://..." } ],
    download: "",                           // lien vers le jeu (itch.io, GitHub Releases...)
    media: [                                // galerie, dans l'ordre
      { youtube: "ID_DE_LA_VIDEO", caption: "trailer" },   // ID = la fin de youtu.be/ID
      { vimeo: "123456789" },
      { image: "images/mon-projet/1.jpg", caption: "" },
      { soundcloud: "https://api.soundcloud.com/tracks/123" },
    ],
    text: {
      en: `First paragraph.

Second paragraph with a [link](https://...).`,
      fr: ``,
    },
  },
  */
  projects: [
  {
    id: "mechanicus-2",
    title: "Warhammer 40,000: Mechanicus II",
    year: 2026,
    tags: ["main", "game"],
    cover: "images/mechanicus-2/mechanicus-2_poster.jpg",
    type: { en: "turn-based tactics game", fr: "jeu de tactique au tour par tour" },
    tech: "fmod, reaper",
    platforms: "pc, ps5, xbox series x|s",
    role: { en: "sound mixer, implementation, sound design", fr: "mixage, intégration, sound design" },
    links: [
      { label: { en: "steam page", fr: "page steam" }, url: "https://store.steampowered.com/app/2532480/" }
    ],
    download: "",
    media: [
      { youtube: "ekWDGK76-tA", caption: "launch trailer" },
      { youtube: "XD_nKRCwz0w", caption: "gameplay overview" },
      { image: "images/mechanicus-2/mechanicus-2_img_1.jpg" },
      { image: "images/mechanicus-2/mechanicus-2_img_2.jpg" },
      { image: "images/mechanicus-2/mechanicus-2_img_3.jpg" },
      { image: "images/mechanicus-2/mechanicus-2_img_4.jpg" },
      { image: "images/mechanicus-2/mechanicus-2_img_5.jpg" },
      { image: "images/mechanicus-2/mechanicus-2_img_6.jpg" },
      { image: "images/mechanicus-2/mechanicus-2_img_7.jpg" },
      { image: "images/mechanicus-2/mechanicus-2_img_8.jpg" }
    ],
    text: {
      en: `Warhammer 40,000: Mechanicus II is the sequel to the acclaimed tactics game Mechanicus, developed by Bulwark Studios and published by Kasedo Games. It blends fast-paced turn-based combat with strategic management: players lead either the deathless Necron legions or the techno-religious Adeptus Mechanicus, with the fate of a world in their hands.

I worked with Guillaume David to mix the soundtrack in FMOD and helped him with several implementation tasks. I also designed some of the Lingua-technis voices under his direction.`,
      fr: `Warhammer 40,000: Mechanicus II est la suite du jeu de tactique Mechanicus, développée par Bulwark Studios et éditée par Kasedo Games. Il mêle combats au tour par tour nerveux et gestion stratégique : le joueur dirige soit les légions immortelles des Nécrons, soit les fidèles techno-religieux de l'Adeptus Mechanicus, avec le destin d'un monde entre ses mains.

J'ai travaillé avec Guillaume David au mixage de la bande-son dans FMOD et je l'ai aidé sur plusieurs tâches d'intégration. J'ai aussi conçu une partie des voix en Lingua-technis sous sa direction.`,
    },
  },
  {
    id: "demeter",
    title: "Demeter: The Asklepios Chronicles",
    year: 2024,
    tags: ["main", "game", "vr"],
    cover: "images/demeter/demeter_poster.jpg",
    type: { en: "mixed reality narrative platformer", fr: "jeu de plateforme narratif en réalité mixte" },
    tech: "unity",
    platforms: "quest2, quest pro, quest3",
    role: { en: "lead audio, implementation", fr: "lead audio, intégration" },
    links: [
      { label: { en: "website", fr: "site web" }, url: "https://demeter-game.com/" },
      { label: { en: "novelab page", fr: "page novelab" }, url: "https://novelab.io/project/demeter-the-asklepios-chronicles/" }
    ],
    download: "",
    media: [
      { youtube: "OrpFnNLTdJ8", caption: "launch trailer" },
      { image: "images/demeter/demeter_still_09.jpg" },
      { image: "images/demeter/demeter_still_07.jpg" },
      { image: "images/demeter/demeter_still_01.jpg" },
      { image: "images/demeter/demeter_background.jpg" }
    ],
    text: {
      en: `Demeter: The Asklepios Chronicles is a mixed reality narrative platformer produced by Novelab with Meta. Atalanta, the heroine, has fallen into our world: the player's walls and furniture become the levels, with puzzles, climbing, flying vehicles and combat, and a world that is procedurally generated to fit any room.

I used my own tool, [Audio Engine](#audio-engine), for this project. Through Audio Engine, I also developed an interactive music system to support the [amazing OST](https://youtu.be/0yuuiaWI9uA) of Antoine Wert.`,
      fr: `Demeter: The Asklepios Chronicles est un jeu de plateforme narratif en réalité mixte produit par Novelab avec Meta. L'héroïne, Atalanta, est tombée dans notre monde : les murs et les meubles du joueur deviennent les niveaux, avec des énigmes, de l'escalade, des engins volants et des combats, dans un monde généré de façon procédurale pour s'adapter à toutes les pièces.

J'ai utilisé mon propre outil, [Audio Engine](#audio-engine), sur ce projet. J'ai aussi développé avec Audio Engine un système de musique interactive pour porter la [superbe bande originale](https://youtu.be/0yuuiaWI9uA) d'Antoine Wert.`,
    },
  },
  {
    id: "4feethigh",
    title: "4 Feet High",
    year: 2021,
    tags: ["vr", "linear"],
    cover: "images/4feethigh/4feethigh_poster.jpg",
    type: { en: "episodic and virtual reality series", fr: "série épisodique et en réalité virtuelle" },
    tech: "reaper, pro tools",
    platforms: "vr",
    role: { en: "lead audio, 360 mix", fr: "lead audio, mix 360" },
    links: [],
    download: "",
    media: [
      { youtube: "8S3jBzRExdw", caption: "official trailer · vr episodes 1 & 2" },
      { youtube: "DsuuFdweUpI", caption: "series trailer · bfi london film festival 2021" },
      { image: "images/4feethigh/4feethigh_still_2.jpg" },
      { image: "images/4feethigh/4feethigh_still_1.jpg" },
      { image: "images/4feethigh/4feethigh_poster.jpg" }
    ],
    text: {
      en: `Juana, a 17-year-old wheelchair user, aims to explore her sexuality but is ashamed of her body. Trying to find her place in a new high school, she will go through failure, friendship, fear and politics until she builds her own pride.`,
      fr: `Juana, une jeune fille de 17 ans en fauteuil roulant, souhaite explorer sa sexualité mais a honte de son corps. Essayant de trouver sa place dans un nouveau lycée, elle passera par l'échec, l'amitié, la peur et la politique jusqu'à ce qu'elle construise sa propre fierté.`,
    },
  },
  {
    id: "otmyw",
    title: "On the Morning You Wake",
    year: 2022,
    tags: ["main", "vr"],
    cover: "images/otmyw/otmyw_poster.jpg",
    type: { en: "virtual reality documentary", fr: "documentaire en réalité virtuelle" },
    tech: "unity",
    platforms: "quest2",
    role: { en: "lead audio, implementation", fr: "lead audio, implementation" },
    links: [
      { label: { en: "website", fr: "site web" }, url: "https://www.arte.tv/digitalproductions/fr/on-the-morning-you-wake-to-the-end-of-the-world/" },
      { label: { en: "oculus page", fr: "page oculus" }, url: "https://www.oculus.com/experiences/quest/5334662579895130" }
    ],
    download: "",
    media: [
      { youtube: "KyTb_56XzN8", caption: "trailer" },
      { image: "images/otmyw/otmyw_img_3.jpg" },
      { image: "images/otmyw/otmyw_img_5.jpg" },
      { image: "images/otmyw/otmyw_img_2.jpg" },
      { image: "images/otmyw/otmyw_img_1.jpg" },
      { image: "images/otmyw/otmyw_img_4.jpg" }
    ],
    text: {
      en: `On the Morning You Wake (to the End of the World) captures the voices of the people who experienced the real and imminent threat of nuclear weapons during 38 minutes on January 2018.`,
      fr: `On the Morning You Wake (to the End of the Wolrd) est un documentaire en réalité virtuelle qui capture les voix des personnes qui ont vécu la menace réelle et imminente des armes nucléaires pendant 38 minutes en Janvier 2018.`,
    },
  },
  {
    id: "spheres",
    title: "Spheres",
    year: 2018,
    tags: ["main", "vr"],
    cover: "images/spheres/spheres_poster.jpg",
    type: { en: "virtual reality narrative experience", fr: "expérience narrative en réalité virtuelle" },
    tech: "unity",
    platforms: "rift, vive",
    role: { en: "sound editing, implementation", fr: "édition son, implementation" },
    links: [
      { label: { en: "website", fr: "site web" }, url: "https://citylightsvr.com/project/spheres/" },
      { label: { en: "oculus page", fr: "page oculus" }, url: "https://www.oculus.com/experiences/rift/1859625197439973" }
    ],
    download: "",
    media: [
      { youtube: "kmi59osnYb4", caption: "spheres · trailer" },
      { youtube: "npXRSC23p2A", caption: "spheres · songs of spacetime · trailer" },
      { youtube: "-8ss1J-Ys1s", caption: "spheres · pale blue dot · trailer" },
      { youtube: "RmDzhDD8qHg", caption: "spheres · chorus of the cosmos · trailer" },
      { image: "images/spheres/spheres_img_1.jpg" },
      { image: "images/spheres/spheres_img_2.jpg" }
    ],
    text: {
      en: `This three chapter interactive virtual reality journey uncovers the hidden songs of the cosmos.

I had the chance to closely work with part of the "Stanger Things" audio team (Craig Hennigan, Kyle Dixon and Michael Stein) on this project.`,
      fr: `Ce voyage interactif en réalité virtuelle en trois chapitres explorent les chants cachés du cosmos.

J'ai eu la chance de travailler étroitement avec une partie de l'équipe audio de "Stranger Things" (Craig Hennigan, Kyle Dixon and Michael Stein) sur ce projet.`,
    },
  },
  {
    id: "notes-on-blindness",
    title: "Notes on Blindness",
    year: 2016,
    tags: ["main", "vr"],
    cover: "images/notes-on-blindness/nob_poster.jpg",
    type: { en: "virtual reality narrative experience", fr: "expérience narrative en réalité virtuelle" },
    tech: "unity & wwise",
    platforms: "gearvr, android, ios, rift, quest",
    role: { en: "sound design, implementation, gameplay programming", fr: "sound design, implementation, programmation gameplay" },
    links: [
      { label: { en: "website", fr: "site web" }, url: "https://www.arte.tv/sites/webproductions/notes-on-blindness/" },
      { label: { en: "oculus page", fr: "page oculus" }, url: "https://www.oculus.com/experiences/rift/1671004309616863" }
    ],
    download: "",
    media: [
      { youtube: "9ViF0GBt6fQ", caption: "into darkness · vr experience teaser" },
      { image: "images/notes-on-blindness/nob_screenshot_2.jpg" },
      { image: "images/notes-on-blindness/nob_screenshot_3.jpg" },
      { image: "images/notes-on-blindness/nob_screenshot_4.jpg" },
      { image: "images/notes-on-blindness/nob_screenshot_5.jpg" },
      { image: "images/notes-on-blindness/nob_screenshot_1.jpg" }
    ],
    text: {
      en: `Notes on Blindness is a transmedia project produced by ARTE providing a both sensorial and psychological immersion into the singular experience of a man confronted to progressive loss of sight.

The interactive audio experience is based on the actual audio diaries recorded by the writer and theologian John Hull, who became blind at the age of 40. It offers six audio pictures, for a duration of about 30 minutes.`,
      fr: `Notes on Blindness est un projet transmedia produit par ARTE qui propose une immersion à la fois sensorielle et psychologique dans l’expérience singulière d’un homme, confronté à la perte progressive de la vue.

L’expérience sonore interactive est basée sur les enregistrements audio réels enregistrés par le théologien et écrivain John Hull, devenu aveugle à l’âge de 40 ans. Elle propose six tableaux sonores, pour une durée d’expérience de 30 minutes.`,
    },
  },
  {
    id: "malfosse",
    title: "Malfosse",
    year: 2019,
    tags: ["main", "linear"],
    cover: "images/malfosse/malfosse_poster.jpg",
    type: { en: "podcast", fr: "podcast" },
    tech: "reaper",
    platforms: "audible app",
    role: { en: "lead sound design, project management", fr: "lead sound design, chef de projet" },
    links: [
      { label: { en: "website", fr: "site web" }, url: "https://www.audible.fr/pd/Malfosse-Livre-Audio/B08G57PRJ4" }
    ],
    download: "",
    media: [
      { youtube: "WDUTdPB_B-k" }
    ],
    text: {
      en: `Malfosse is an audio fiction of 13 episodes. This is the first time I’ve worked on a podcast that big, and it was as cool as it was different from what I used to do.`,
      fr: `Malfosse est une fiction audio constituée de 13 épisodes.

C'est la première fois que je travaille sur un podcast aussi massif, et c'était aussi cool que cela était différent de ce que je fais habituellement.`,
    },
  },
  {
    id: "22-7c",
    title: "-22.7°C",
    year: 2019,
    tags: ["main", "vr"],
    cover: "images/22-7c/22-7c_poster.jpg",
    type: { en: "virtual reality narrative experience", fr: "expérience narrative en réalité virtuelle" },
    tech: "unity",
    platforms: "rift, youtube",
    role: { en: "sound design, implementation", fr: "sound design, implementation" },
    links: [
      { label: { en: "website", fr: "site web" }, url: "https://www.arte.tv/sites/en/webproductions/22-7c" }
    ],
    download: "",
    media: [
      { youtube: "PrBkR7Uqn-A", caption: "360° film" },,
      { image: "images/22-7c/22-7c_img_2.jpg" },,
      { image: "images/22-7c/22-7c_img_1.jpg" },
      { image: "images/22-7c/22-7c_sled.jpg" },
      { image: "images/22-7c/22-7c_iceberg.jpg" },
      { image: "images/22-7c/22-7c_ice_floe.jpg" },
      { image: "images/22-7c/22-7c_campfire.jpg" },
      { image: "images/22-7c/22-7c_ending.jpg" }
    ],
    text: {
      en: `-22.7°C is an immersive experience in the polar circle inspired by the adventures of the musician Molécule.

Guided by the sounds, the user is in a deep listening state. Through an initiatory journey, he reconnects with Nature and his inner self. The user navigates between an «outer» dimension, where he discovers a powerful, majestic but dangerous nature; and an « inner » dimension, where he faces his sensations and fears.

It does exist as an interactive experience and also a video one.`,
      fr: `-22.7°C est une expérience en immersion dans le cercle polaire inspirée de l’aventure du musicien Molécule.

Guidé par les sons, le spectateur est dans un état d'écoute profond. A travers un voyage initiatique, il se reconnecte avec la nature et son moi intérieur. Il navigue entre une dimension "extérieure", où il découvre une nature puissante, majestueuse mais dangereuse; et une dimension "intérieure", où il fait face à ses sensations et ses peurs.

Le projet existe comme expérience interactive ou comme vidéo 360°.`,
    },
  },
  {
    id: "vandals",
    title: "Vandals",
    year: 2016,
    tags: ["main", "game"],
    cover: "images/vandals/vandals_poster_2.jpg",
    type: { en: "turn-based infiltration game", fr: "jeu d'infiltration au tour-par-tour" },
    tech: "unity",
    platforms: "android, ios, pc, mac, switch",
    role: { en: "sound design, implementation, interactive music system", fr: "sound design, implementation, système de musique interactive" },
    links: [
      { label: { en: "website", fr: "site web" }, url: "http://vandals.arte.tv/en/" }
    ],
    download: "",
    media: [
      { youtube: "cpj6JzZgZBw", caption: "trailer" },
      { image: "images/vandals/vandals_screenshot_img_1.jpg" },
      { image: "images/vandals/vandals_screenshot_img_2.jpg" },
      { image: "images/vandals/vandals_screenshot_img_3.jpg" },
      { image: "images/vandals/vandals_screenshot_img_4.jpg" },
      { image: "images/vandals/vandals_screenshot_img_5.jpg" }
    ],
    text: {
      en: `Vandals lets you explore the street art of five different cities, create their own graffiti, and evade the authorities.

Interesting feature about the sound design of the game is that the listener is placed on the head of the character and audio is rendered in binaural.`,
      fr: `Vandals vous permet d'explorer le street art de cinq villes, de créer vos propres graffitis, et d'échapper aux autorités.

Feature intéressante à propos du sound design du jeu : le point d'écoute est placé sur la tête du personnage et l'audio est rendu en binaural.`,
    },
  },
  {
    id: "kinoscope",
    title: "Kinoscope",
    year: 2016,
    tags: ["main", "vr", "linear"],
    cover: "images/kinoscope/kinoscope_poster.jpg",
    type: { en: "virtual reality animated short film", fr: "court métrage en réalité virtuelle" },
    tech: "reaper",
    platforms: "youtube, cardboard",
    role: { en: "sound design, 360 mix", fr: "sound design, mix 360" },
    links: [
      { label: { en: "website", fr: "site web" }, url: "https://artsandculture.google.com/asset/kinoscope-a-vr-journey-into-the-world-of-cinema/mgHwbzF-ExSqCQ" }
    ],
    download: "",
    media: [
      { youtube: "6Y4OTrsccvs" },
      { youtube: "JLRmtfP6mqg", caption: "teaser" }
    ],
    text: {
      en: `Kinoscope is a virtual reality experience immersing the spectator into a lively and colorful universe to discover the history of cinema.

Kinoscope was part of the exhibition "The Cinema Machine: from Méliès to 3D" and showcased at the Cinémathèque Française in Paris in October 2016.`,
      fr: `Kinoscope est un court métrage en réalité virtuelle qui immerge le spectateur dans un voyage dans l'histoire du cinéma.

Il fut intégré au parcours de l'exposition "La Machine cinéma, de Mélies à la 3D" à La Cinémathèque Française en Octobre 2016.`,
    },
  },
  {
    id: "umami",
    title: "Umami",
    year: 2018,
    tags: ["main", "vr"],
    cover: "images/umami/umami_poster.jpg",
    type: { en: "virtual reality experience and installation", fr: "installation et expérience en réalité virtuelle" },
    tech: "unity",
    platforms: "rift",
    role: { en: "sound design, implementation", fr: "sound design, implementation" },
    links: [
      { label: { en: "website", fr: "site web" }, url: "https://en.tinyplanets.fr/umami" }
    ],
    download: "",
    media: [
      { youtube: "MeChpF2nBj8", caption: "trailer" },
      { image: "images/umami/umami_img_1.jpg" },
      { image: "images/umami/umami_img_2.jpg" },
      { image: "images/umami/umami_img_3.jpg" },
      { image: "images/umami/umami_img_5.jpg" },
      { image: "images/umami/umami_img_4.jpg" }
    ],
    text: {
      en: `Umami immerses the user into the story of a man rediscovering his memories through a series of Japanese dishes, beverages and tastes, in a world blending present time, gastronomy, dreams and memories.

Fun fact is that Umami was in competition at la Biennale di Venezia 2018 against [Spheres](#spheres).`,
      fr: `Umami plonge l'utilisateur dans l'histoire d'un homme qui redécouvre ses souvenirs à travers une série de plats, de boissons et de goûts japonais, dans un monde mêlant temps présent, gastronomie, rêves et souvenirs.

Anecdote amusante : Umami était en compétition à la Biennale di Venezia 2018 contre [Spheres](#spheres).`,
    },
  },
  {
    id: "change",
    title: "Change",
    year: 2019,
    tags: ["vr", "linear"],
    cover: "images/change/change_poster.jpg",
    type: { en: "virtual reality 180 short film", fr: "court métrage en réalité virtuelle 180°" },
    tech: "reaper",
    platforms: "youtube",
    role: { en: "sound design", fr: "sound design" },
    links: [],
    download: "",
    media: [
      { youtube: "fEwPKayV01U", caption: "episode 1 · blind spots" },
      { youtube: "BxoIsKDDnag", caption: "episode 2 · reopening doors" },
      { youtube: "WzFAdlGAgLs", caption: "episode 3 · digging deeper" },
      { youtube: "UMMl6JY8E5Q", caption: "episode 4 · the touchstone memory" },
      { youtube: "AYLU4TCM8_Y", caption: "episode 5 · change" }
    ],
    text: {
      en: `Change is a vr180 experiment created in the framework of the YouTube Creator Lab. It is a series of 5 episodes.

The sound was made from scratch in post-production.`,
      fr: `Change est une expérience vr180 créée dans le cadre du Youtube Creator Lab. C'est une série en 5 épisodes.

Le son a été fabriqué entièrement en post-production.`,
    },
  },
  {
    id: "the-isle-of-the-dead",
    title: "The Isle of the Dead",
    year: 2018,
    tags: ["vr", "linear"],
    cover: "images/the-isle-of-the-dead/the_isle_of_the_dead_poster.jpg",
    type: { en: "virtual reality short film", fr: "court métrage en réalité virtuelle" },
    tech: "unreal engine",
    platforms: "rift, youtube",
    role: { en: "implementation", fr: "implementation" },
    links: [
      { label: { en: "website", fr: "site web" }, url: "https://www.arte.tv/sites/en/webproductions/the-isle-of-the-dead/" }
    ],
    download: "",
    media: [
      { vimeo: "281256091", caption: "trailer" },
      { image: "images/the-isle-of-the-dead/the_isle_of_the_dead_img_1.jpg" },
      { image: "images/the-isle-of-the-dead/the_isle_of_the_dead_img_2.jpg" },
      { image: "images/the-isle-of-the-dead/the_isle_of_the_dead_img_3.jpg" }
    ],
    text: {
      en: `Based on the painting "The Isle of the Dead" by Arnold Böcklin.`,
      fr: `Basé sur le tableau “The Isle of the Dead” d'Arnold Böcklin.`,
    },
  },
  {
    id: "elegy",
    title: "Elegy",
    year: 2018,
    tags: ["vr", "linear"],
    cover: "images/elegy/elegy_poster.jpg",
    type: { en: "virtual reality short film", fr: "court métrage en réalité virtuelle" },
    tech: "reaper",
    platforms: "gearvr, go, rift",
    role: { en: "production sound mixer, sound design", fr: "chef opérateur son, sound design" },
    links: [
      { label: { en: "website", fr: "site web" }, url: "https://www.labiennale.org/en/cinema/2018/lineup/venice-virtual-reality/elegy" }
    ],
    download: "",
    media: [
      { image: "images/elegy/elegy_img_1.jpg" },
      { image: "images/elegy/elegy_img_2.jpg" }
    ],
    text: {
      en: `Elegy tells a story of a lost soul trapped in a lift of a luxury hotel, invisible and disconnected from the living except for Bianca, the hotel’s room maid.`,
      fr: `Elegy raconte l'histoire d'une âme piégée dans l'ascenseur d'un hôtel de luxe, invisible et déconnectée du monde des vivants à l'exception de Bianca, femme de chambre de l'hôtel.`,
    },
  },
  {
    id: "reshape",
    title: "Reshape",
    year: 2016,
    tags: ["tool"],
    cover: "images/reshape/reshape_poster.jpg",
    type: { en: "sound design tool", fr: "outil sound design" },
    tech: "puredata",
    platforms: "vst,au,aax & osc",
    role: { en: "programming, soundbank maker", fr: "programmation, création de soundbank" },
    links: [],
    download: "",
    media: [
      { youtube: "qxoG4cVrnEs", caption: "trailer" },
      { youtube: "oDaXNy9-OZE", caption: "features" }
    ],
    text: {
      en: `Reshape is a touch-to-play sound design tool based on exploring gesture usage to give new expression means to sound creators.`,
      fr: ``,
    },
  },
  {
    id: "audioelec",
    title: "AudioElec",
    year: 2015,
    tags: ["tool"],
    cover: "images/audioelec/audioelec_poster.jpg",
    type: { en: "sound design tool", fr: "outil sound design" },
    tech: "puredata",
    platforms: "vst,au,aax & osc",
    role: { en: "programming, soundbank maker", fr: "programmation, création de soundbank" },
    links: [],
    download: "",
    media: [
      { youtube: "6nknBzTN-sI", caption: "features" },
      { youtube: "pv-oE36-iHw", caption: "demo track techno" },
      { youtube: "gueGtAdx1mk", caption: "use case" },
      { image: "images/audioelec/audioelec_interface.jpg" }
    ],
    text: {
      en: `AudioElec is a procedural audio plug-in. Its purpose is to synthesize electrical sounds in real time and to control eletrical-type samples.`,
      fr: `AudioElec est un plug-in audio procédural. Son but est de synthétiser des sons de types électriques en temps réel. Il permet aussi de contrôler des samples de types électriques.`,
    },
  },
  {
    id: "audio-engine",
    title: "Audio Engine",
    year: 2022,
    tags: ["tool"],
    cover: "images/audio-engine/audio-engine_poster.jpg",
    type: { en: "audio engine for unity", fr: "moteur audio pour unity" },
    tech: "unity",
    platforms: "unity package",
    role: { en: "programming", fr: "programmation" },
    links: [],
    download: "",
    media: [
      { image: "images/audio-engine/audio-engine_screenshot_1.jpg", caption: "source: randomization, filters, 3d positioning and rtpc" },
      { image: "images/audio-engine/audio-engine_screenshot_2.jpg", caption: "sequence container" },
      { image: "images/audio-engine/audio-engine_screenshot_3.jpg", caption: "event: play, stop, pause, fades" }
    ],
    text: {
      en: `Audio Engine is a Unity package for designing and implementing game audio directly inside Unity.

Sounds are set up as assets: sources with randomized volume, pitch and filters, 3D positioning and game parameters (RTPC) driving their settings; containers that play several sources in sequence or at random; and events that play, stop, pause or fade them from gameplay.`,
      fr: `Audio Engine est un package Unity pour concevoir et intégrer l'audio d'un jeu directement dans Unity.

Les sons se configurent sous forme d'assets : des sources avec volume, pitch et filtres aléatoires, spatialisation 3D et paramètres de jeu (RTPC) qui pilotent leurs réglages ; des containers qui jouent plusieurs sources en séquence ou au hasard ; et des events qui les lancent, les arrêtent, les mettent en pause ou les fondent depuis le gameplay.`,
    },
  },
  {
    id: "ascent",
    title: "Ascent",
    year: 2014,
    tags: ["student", "vr", "game"],
    cover: "images/ascent/ascent_poster.jpg",
    type: { en: "virtual reality mountain climbing game", fr: "jeu d'alpinisme en réalité virtuelle" },
    tech: "unity & wwise",
    platforms: "rift",
    role: { en: "sound design, implementation", fr: "sound design, implementation" },
    links: [],
    download: "",
    media: [
      { youtube: "FLmkwEqDBaU", caption: "trailer" },
      { youtube: "lzIQfoZhumk", caption: "teaser" }
    ],
    text: {
      en: `Ascent is a 6-month student pre-production project where you’ll have to climb the Kawagarbo moutain using oculus touch as ice axes.

I spent a lot of time reproducing binaural synthesis manually through wwise, which was very exciting. If you are interested, feel free to read [those few pages](files/florent_dumas_rapport_de_stage_m2.pdf) I wrote on this (in french)!

The project has known a future as part of my team created ebim studio to develop [Ascent Spirit](https://www.oculus.com/experiences/rift/839485529495189/)!`,
      fr: `Ascent est un projet étudiant de pré-production où vous devez escalader la montagne du Kawagarbo à l'aide des oculus touch en guise de piolets.

J'ai passé beaucoup de temps à reproduire de la synthèse binaurale manuellement via wwise, ce qui était vraiment intéressant. Si vous êtes interessé, n'hésitez pas à lire [ces quelques pages](files/florent_dumas_rapport_de_stage_m2.pdf) !

Le projet a eu un futur puisqu'une partie de l'équipe du projet a créé ebim studio pour développer [Ascent Spirit](https://www.oculus.com/experiences/rift/839485529495189/)!`,
    },
  },
  {
    id: "yeti-on-furry",
    title: "Yeti on Furry",
    year: 2013,
    tags: ["game"],
    cover: "images/yeti-on-furry/yeti_poster.jpg",
    type: { en: "arcade game", fr: "jeu d'arcade" },
    tech: "unity",
    platforms: "android, ios, pc",
    role: { en: "sound design", fr: "sound design" },
    links: [],
    download: "",
    media: [
      { youtube: "AJgTLx21fCc", caption: "trailer" },
      { youtube: "R4qTqhF5ihw", caption: "gameplay footage" },
      { image: "images/yeti-on-furry/yeti_on_furry_screenshot_1.jpg" },
      { image: "images/yeti-on-furry/yeti_on_furry_screenshot_2.jpg" },
      { image: "images/yeti-on-furry/yeti_on_furry_gameplay_footage.jpg" }
    ],
    text: {
      en: `The player must protect a Yeti living in the last virgin peaks in the world countless Climbers are trying to conquer. The player has several powers to destroy them before they reach the top of the mountain.`,
      fr: `Le joueur est en charge de la protection du Yeti vivant dans les derniers sommets vierges du monde que d'innombrables grimpeurs (les “Climbers”) tentent de conquérir. Le joueur dispose pour cela de plusieurs pouvoirs pour les détruire avant qu'ils n'atteignent le sommet de la montagne.`,
    },
  },
  {
    id: "caveman-wars",
    title: "Caveman Wars",
    year: 2013,
    tags: ["game"],
    cover: "images/caveman-wars/caveman_wars_poster.jpg",
    type: { en: "arcade game", fr: "jeu d'arcade" },
    tech: "unity",
    platforms: "android, ios",
    role: { en: "sound design", fr: "sound design" },
    links: [],
    download: "",
    media: [
      { youtube: "bIUkg0cLlh4", caption: "trailer" },
      { youtube: "ItzmE61DXw4", caption: "gameplay footage" },
      { image: "images/caveman-wars/caveman_wars_screenshot_1.jpg" },
      { image: "images/caveman-wars/caveman_wars_screenshot_2.jpg" },
      { image: "images/caveman-wars/caveman_wars_screenshot_3.jpg" }
    ],
    text: {
      en: `The tribe controlled by the player is regularly attacked by other hungry tribes who want to steal its food. The player must protect his tribe (represented by a hut) against the incessant attacks of the opposing tribes. To do this, he has 3 types of skills (fire, ice and piercing) that will allow him to push his assailants.`,
      fr: `La tribu contrôlée par le joueur est régulièrement prise d’assaut par d’autres tribus affamées qui veulent dérober la nourriture qu'il possède. Il doit donc protéger sa tribu (représentée par une hutte) contre les attaques incessantes des tribus adverses. Pour cela il dispose de 3 types d’attaques (feu, glace et perçant) qui vont lui permettre de repousser ses assaillants.`,
    },
  },
  {
    id: "wander",
    title: "Wander",
    year: 2013,
    tags: ["student", "game"],
    cover: "images/wander/wander_poster2.jpg",
    type: { en: "3d platformer/relationnal strategy", fr: "platformer 3d/stratégie relationnelle" },
    tech: "unity & wwise",
    platforms: "pc",
    role: { en: "sound design, music, voices, implementation", fr: "sound design, musique, voix, implementation" },
    links: [],
    download: "", // ancien fichier : wander.rar (à déposer sur itch.io ou GitHub Releases, puis coller le lien ici)
    media: [
      { youtube: "hkSnEq1vEXE", caption: "trailer", poster: "images/wander/wander_poster2.jpg" },
      { youtube: "dTwM01DttOQ", caption: "audio walkthrough", poster: "images/wander/wander_audio.jpg" },
      { image: "images/wander/wander_screenshot_1.jpg" },
      { image: "images/wander/wander_screenshot_2.jpg" },
      { image: "images/wander/wander_screenshot_3.jpg" },
      { image: "images/wander/wander_screenshot_4.jpg" }
    ],
    text: {
      en: `Wander was one of my student projects I worked on at ENJMIN.

Wander is a game with subjective camera. This is a platformer and a relational strategy game. Wander is a game based on a relationship with a mineral creature. In this game, you are blind. Only the sounds can reveal the environnement. The creature naturally emits sound waves and you have to manage the relationship with her, your life depends on it.`,
      fr: `Wander est un des projets étudiant sur lesquels j'ai travaillé à l'ENJMIN.

Wander est un jeu à la première personne. C'est un jeu de plateforme et de stratégie relationnelle. Wander est un jeu basé sur la relation avec une créature minérale. Dans ce jeu, vous êtes aveugle. Seuls les sons peuvent révéler l'environnement. La créature émet des ondes sonores et vous devez gérer votre relation avec elle, votre vie en dépend.`,
    },
  },
  {
    id: "sbires",
    title: "Sbires",
    year: 2013,
    tags: ["student", "game"],
    cover: "images/sbires/sbires_poster.jpg",
    type: { en: "3d action, puzzle game", fr: "action/puzzle 3d" },
    tech: "unity & wwise",
    platforms: "pc",
    role: { en: "sound design, music, voices, implementation", fr: "sound design, musique, voix, implementation" },
    links: [],
    download: "", // ancien fichier : sbires.zip (à déposer sur itch.io ou GitHub Releases, puis coller le lien ici)
    media: [
      { youtube: "BUEm-ofUbk4", caption: "teaser" },
      { image: "images/sbires/sbires_screenshot_1.jpg" },
      { image: "images/sbires/sbires_screenshot_2.jpg" },
      { image: "images/sbires/sbires_screenshot_3.jpg" }
    ],
    text: {
      en: `Sbires is one of my big student project I worked on at ENJMIN.

You play a minion who tries to escape while the dungeon is besieged. The minion can’t win by fighting his enemies. In order to win, the player has to find a new way to defeat them by using the dungeon’s interactive elements.`,
      fr: `Sbires est un des projets étudiant sur lesquels j'ai travaillé à l'ENJMIN.

Vous incarnez un sbire qui essaie de s'échapper d'un donjon assiégé.

Le sbire ne peut prétendre à la victoire en combattant ses ennemis directement. Vous devrez trouver une nouvelle façon de les vaincre en utilisant les éléments interactifs du donjon !`,
    },
  },
  {
    id: "stalker-sur-glace",
    title: "Stalker sur Glace",
    year: 2012,
    tags: ["game"],
    cover: "images/stalker-sur-glace/stalker_sur_glace_poster_2.jpg",
    type: { en: "2d arcade/survival game", fr: "arcade 2d/jeu de survie" },
    tech: "game maker & wwise",
    platforms: "pc",
    role: { en: "programming, sound design", fr: "programmation, sound design" },
    links: [],
    download: "", // ancien fichier : stalker_sur_glace.exe (à déposer sur itch.io ou GitHub Releases, puis coller le lien ici)
    media: [
      { vimeo: "54491456" }
    ],
    text: {
      en: `Stalker sur Glace is a side project I made with friends. It was presented to the 2012 Game à Niaque contest.

Play as the human or the two zombies in a track race on a very … slippery field! To be played with Xbox360 controllers, one player uses both sticks to control two zombies!`,
      fr: `Stalker sur Glace est un projet personnel sur lequel j'ai travaillé avec deux amis. Il a été présenté au concours Game à niaque 2012.

Incarnez l'humaine ou les zombies pour une course poursuite sur terrain... très glissant !

Se joue à 2, pour manette 360, le 1er joueur incarne la patineuse, le 2ème joueur incarne un zombie par stick !`,
    },
  },
  {
    id: "martyr",
    title: "Martyr",
    year: 2012,
    tags: ["game"],
    cover: "images/martyr/martyr_poster.jpg",
    type: { en: "2d platformer/reflexion", fr: "platformer 2d/réflexion" },
    tech: "construct2",
    platforms: "pc",
    role: { en: "sound design, music", fr: "sound design, musique" },
    links: [],
    download: "", // ancien fichier : Martyr.zip (à déposer sur itch.io ou GitHub Releases, puis coller le lien ici)
    media: [
      { image: "images/martyr/martyr_screenshot_1.jpg" },
      { image: "images/martyr/martyr_screenshot_2.jpg" }
    ],
    text: {
      en: `"You are the villain" was the theme of the 25th Ludum Dare Jam.

You must reach the different levels’ exit with as little health as possible.

The player is forced to loose health and we wanted to create empathy in the player through the sound design.`,
      fr: ``,
    },
  },
  {
    id: "gma",
    title: "GMA",
    year: 2011,
    tags: ["game"],
    cover: "images/gma/gma_poster.jpg",
    type: { en: "audio game", fr: "jeu sonore" },
    tech: "game maker & wwise",
    platforms: "pc",
    role: { en: "sound design, implementation, programming", fr: "sound design, implementation, programmation" },
    links: [
      { label: { en: "download the game", fr: "télécharger le jeu" }, url: "https://martinbussyparis.itch.io/gma" }
    ],
    download: "",
    media: [
      { youtube: "LgKlXF6g0MM" },
      { soundcloud: "http://api.soundcloud.com/tracks/59621423" }
    ],
    text: {
      en: `GMA is a side project I worked on with friends.

How to develop a two players audio game with only one stereo output?`,
      fr: `GMA est un projet personnel sur lequel j'ai travaillé avec des amis.

Comment créer un jeu sonore pour 2 joueurs avec une seule sortie stéréo ?`,
    },
  },
  {
    id: "coco",
    title: "Coco",
    year: 2011,
    tags: ["linear"],
    cover: "images/coco/coco_poster.jpg",
    type: { en: "short film", fr: "court métrage" },
    tech: "",
    platforms: "vimeo",
    role: { en: "production sound mixer, sound design", fr: "chef opérateur son, sound design" },
    links: [],
    download: "",
    media: [
      { vimeo: "32337364" }
    ],
    text: {
      en: `24h of a seductive woman’s life…`,
      fr: `24h de la vie d'une femme séductrice...`,
    },
  },
  ],
};
