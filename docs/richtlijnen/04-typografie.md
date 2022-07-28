---
title: Typografie
hide_title: true
hide_table_of_contents: false
sidebar_label: Typografie
pagination_label: Typografie
description: Tips om een lettertype naar keuze te gebruiken voor je website
keywords:
  - typografie
  - toegankelijkheid
---

<!-- @license CC0-1.0 -->

# Typografie

## Verschillen in welk lettertype gebruikers zien

**Sommige gebruikers kiezen om alle tekst op hun scherm vet te maken.**

**Sommige gebruikers lezen de vertaalde tekst in mogelijk Grieks, Cyrillisch, Arabisch of Aziatisch schrift.**

**Sommige gebruikers lezen de tekst met extra grote letters.**

**Sommige gebruikers lezen de tekst met extra grote regelafstand.**

**Sommige gebruikers lezen de tekst zonder web font, met een eigen lettertype.**

## Vetgedrukt, ofwel `bold`

Gebruik alleen lettertypes die zijn ontworpen voor goede leesbaarheid met vette letters. Als je met CSS een eigen font gebruikt, dan moet je ook `font-weight` noemen. Gebruik in je site alleen `font-weight` waarvoor je ook echt een webfont hebt.

Je kunt dingen doen om te voorkomen dat een verkeerde `font-weight` wordt gebruikt. Maak een overzicht in je documentatie van elke `font-weight` die gebruikt kan worden in je ontwerpen. Maak een design token voor elke `font-weight` die mag, zodat je de regel voor iedereen simpel is: gebruik nooit eigen `font-weight` waarde, gebruik alleen de CSS variable van deze design tokens.

Bijvoorbeeld, je kunt deze design tokens hebben:

- `example.typography.light.font-weight`: 300
- `example.typography.normal.font-weight`: 400
- `example.typography.semi-bold.font-weight`: 500
- `example.typography.bold.font-weight`: 700

Dan gebruik je CSS variables die verwijzen naar de design token, in plaats van direct `font-weight: 500`:

```css
h3 {
  font-weight: var(--example-typography-semi-bold-font-weight);
}
```

## Cursief, ofwel `italic`

## Hoe het niet moet

### Eigen `font-family` naam voor bold of italic variant

Soms wordt een lettertype aangeleverd met CSS code waarin voor hetzelfde lettertype verschillende namen zijn gebruikt. Gebruik dan niet de naam zoals die is aangeleverd, maar pas de code aan zodat elke `@font-face` dezelfde `font-family` heeft.

Gebruik niet:

```css
@font-face {
  font-family: GovernmentFont;
  font-weight: normal;
  src: url("GovernmentFont.woff2");
}

@font-face {
  font-family: GovernmentFontBold;
  font-weight: bold;
  src: url("GovernmentFontBold.woff2");
}

:root {
  font-family: GovernmentFont;
}

h1 {
  font-family: GovernmentFontBold;
}
```

Sommige gebruikers kiezen om alle tekst op hun scherm vet te maken. In plaats van een beter leesbare pagina, krijgen ze door bovenstaande code een automatische bold variant van `GovernmentFont` in plaats van de speciaal ontworpen `GovernmentFontBold`.

Wel:

```css
@font-face {
  font-family: GovernmentFont;
  font-weight: normal;
  src: url("GovernmentFont.woff2");
}

@font-face {
  font-family: GovernmentFont;
  font-weight: bold;
  src: url("GovernmentFontBold.woff2");
}

:root {
  font-family: GovernmentFont;
}

dt {
  font-weight: bold;
}
```

Op deze manier loop je niet het risico dat gebruikers minder leesbare teksten zien door _faux italic_ of _faux bold_ letters, en heb je bovendien duidelijkere code.

## Links

- [On Link Underlines, by Adrian Roselli](https://adrianroselli.com/2016/06/on-link-underlines.html)
