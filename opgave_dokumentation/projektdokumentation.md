# Projektdokumentation

#### Navn: Robert Watt Boolsen

##### Hold: 1146521c105 / WU05

##### Uddannelse: Webudvikler

##### Uddannelsessted: Roskilde Tekniske Skole

[Link til (min applikaton)](http://nogether.netlify.com/)


## Teknologi-stack

-   HTML
-   CSS
-   JavaScript
-   React
-   ...

---



### Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen (Teknisk dokumentation)

(Hvilke npm-pakker har du installeret for at dit projekt virker? Beskriv kort hvilket "problem" hver pakke løser.)

#### Emotion
- Css styling direktig i js. Igennem css funktion kan der skrives css på samme måde som i en css fil. Jeg bruger også deres ThemeProvider, som gør det muligt at dele og dynamisk ændre css værdier med alle views. Dette er smart når app'ens farver/tema skal kunne ændres ved tryk på en knap. Derudover bruger jeg Global funktionen som tilføjer og aktiverer css værdier globalt på alle views. Jeg bruger det som en boilerplate til at nulstille default styling og bruge settings som jeg foretrækker. 

#### Reach Router
- ROUTER/PATH: Styrer hvilke views der bliver loaded udfra browser urlen.
- LINK fungerer som et a tag og loader det view som "to attributen" henviser til. 
- NAVIGATE er næsten ligesom Link, men er en funktion som kan kaldes og loaded et nyt view. 

#### Axios
- Funktionen som fetcher data udfra en url. Det er ligesom fetch, men en smule mere strømlignet og return objektet er struktureret pænere.


---

### Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

(Hvilke overvejelser har du gjort dig, fx. i forbindelse med dit valg af animationer)

---
### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

(Hvad gik godt. Hvor prioriterede du forkert. Klagesange fra de varme lande om halvfærdigt produkt, på grund af manglende nattesøvn, fordi din kæle-skildpadde havde tandpine er IKKE interessante.)

---
### En beskrivelse af særlige punkter til bedømmelse

(er der en særlig detalje som du synes din underviser bør lægge mærke til når dit projekt evalueres)

Du kan vise kode i markdown på følgende måder: 
```js
function myFunction() {
	
}
```

```css
.my__CSSrule {
	property: value;
}
```

