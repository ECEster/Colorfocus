# 🎨 Kleurplaten voor Volwassenen

Gratis kleurplaten voor volwassenen — statische website zonder backend, klaar voor GitHub Pages.

## Functies
- 18 kleurplaten verdeeld over 9 categorieën (mandala's, botanisch, fantasy, dieren, seizoenen, geometrisch, sprookjes, pin-up, historische kleding)
- Zoeken op trefwoord + filteren op categorie
- Favorieten opslaan (localStorage, geen account nodig)
- PDF/afdruk: kleurplaat openen in printvenster
- Wekelijks nieuw badge
- NL / EN taalswitch
- Volledig responsive

## Categorieën
| Categorie | Beschrijving |
|---|---|
| Mandala's | Klassieke & ster-mandala's |
| Natuur & Botanisch | Rozen, tropische bladeren |
| Fantasy & Abstract | Draken, kristallen |
| Dieren & Wildlife | Uil, vlinder |
| Seizoenen | Herfst, sneeuwvlok |
| Geometrisch | Hexagonen, diamantroosters |
| Sprookjes & Magie | Kastelen, feeën |
| Pin-up (1940–1960) | Retro glamour |
| Historische Kleding | Victoriaans, volkskostuum |

## Lokaal bekijken
Open `index.html` in een browser — geen server of buildstap nodig.

> Tip: gebruik de Live Server extensie in VS Code voor de beste ervaring.

## GitHub Pages
1. Push naar GitHub
2. Ga naar **Settings → Pages**
3. Kies branch `main`, map `/` (root)
4. De site is live op `https://<gebruikersnaam>.github.io/<repo-naam>/`

## Structuur
```
kleurplaten-website/
├── index.html          Home
├── galerij.html        Alle kleurplaten + zoek/filter
├── favorieten.html     Opgeslagen kleurplaten
├── tips.html           Printtips & kleurtechnieken
├── css/
│   └── style.css
└── js/
    ├── data.js         Kleurplaten-data + SVG thumbnails
    ├── i18n.js         NL/EN vertalingen
    └── app.js          Alle interactie
```

## Nieuwe kleurplaten toevoegen
Voeg een object toe aan de `PAGES` array in `js/data.js`:
```js
{
  id: 19,
  category: 'mandala',   // een van de 9 categorieën
  isNew: true,
  difficulty: 2,          // 1=eenvoudig, 2=gemiddeld, 3=gedetailleerd
  title:  { nl: 'Naam NL', en: 'Name EN' },
  desc:   { nl: 'Beschrijving NL', en: 'Description EN' },
  thumb:  THUMBS.mandala1  // hergebruik of voeg eigen SVG toe
}
```

## Licentie
Vrij te gebruiken voor persoonlijk en educatief gebruik.
