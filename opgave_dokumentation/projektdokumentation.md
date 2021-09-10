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

#### Querystring
- Bruges to at parse data i et format så det kan læses som et url parameter. Jeg bruger det i forbindelse med login kommunikation med spotify.

#### React icons
- Bibliotek af ikoner som nemt kan importeres ind i ens reactprojekt. Meget brugbart i alle projekter! 

#### Netlify-cli
- Netlify håndterer vores server site kode og denne pakke gør det muligt at køre netlify på vores lokale server.  
---

### Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

#### Egne løsninger
Generelt har jeg haft fokus på at forsøge at kode alt selv uden brug af npm-pakker. Jeg traf det valg, da det tvinger mig til at tænke mere over hvordan React fungerer. Det betyder tilgengæld at nogle funktioner kunne være løst bedre, men nu har jeg forsøgt selv og lært en del på vejen.

#### Ingen animationer
Jeg valgte at lægge alt min energi i at forstå de basale React States og hooks, derfor har jeg ikke brugt tid på at tilføje animationer. Jeg brugte den sidste del af tiden på at få min player til at virke og lave error handling.

#### Ekstra "quality of life" funktionalitet
Jeg har brugt ekstra tid på mindre funktioner såsom: 
	* View all - funktionen som ved klik viser eller fjerner kontent
	* UtilityBar - dynamisk bagground-color når der scrolles
	* NavBar - highlighter ikon som matcher det view man er på
	* ShadowBox - Placeholderbillede der vises før kontent loades
	* Custom hook - som henter spotify api data
	* Fuld funktionel Player hvor alle knapper virker - også med autoplay når track slutter

---
### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

Det er gået rimelig godt, synes jeg. Jeg har fået en del bedre forståelse for React, men der er stadig noget vej endnu. Er stadig lidt forvirret over re-renders og detaljerne omkring de forskellige hooks. Men efter jeg programmerede Playeren, begyndte jeg at fatte hvordan states og useEffect kan arbejde sammen. Har stadig en fornemmelse af at der bliver trigget lidt for mange re-renders, men det må vi lige vende ved lejlighed!

Jeg er stadig ved at finde frem til mine egne systemer i forhold til sammensætning og filstruktur i React. Det har været en udfordring at bevare den samme logik og struktur igennem projektet. Men det er jo bare noget der tager tid og øvelse. Generelt har jeg forsøgt at være konsekvent med opsætning af komponenter og navngivning af variabler.

Jeg begik den fejl ikke at læse opgavebeskrivelsen godt nok, så har spildt tid på nogle opgaver som ikke var obligatoriske. Jeg skrottede fuldstændig funktionerne i min PlayAudioButton.

Alt i alt et godt og interessant projekt. Det har været sjovt det meste af tiden.

---
### En beskrivelse af særlige punkter til bedømmelse

Brug af objekter som dynamisk css værdier:
```js
export const font = {
    fontImportUrl: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap',
    family: `'Poppins', sans-serif`,
    size: {
        xl: "36px",
        l: "20px",
        m: "15px",
        s: "12px"
    },
    weight: {
        bold: "600",
        light: "400"
    }
}

export const spacing = {
    xxs: "0.2rem",
    xs: "0.5rem",
    s: "1rem",
    m: "1.5rem",
    l: "2rem",
    xl: "2.5rem",
    xxl: "5rem"
}
```
Komponent hvor objekterne er brugt:
```js
const ItemPresentationBar = ({ imgUrl, heading, description, additionalInfo, audioUrl }) => {

    const container = ({ colors }) => css`
        color: ${colors.font.primary};
        margin: ${spacing.m};
        display: flex;
        align-items: center;
    `
    const textContainer = ({ colors }) => css`
        padding-left: ${spacing.s};

        & h2 {
            width: ${imgUrl ? '45vw' : '58vw'} ;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;            
        }

        & p {
            font-size: ${font.size.s};
            font-weight: ${font.weight.light};
            padding-top: ${spacing.xxs};    
        }

        & a {
            color: ${colors.font.primary};    
        }
    `
    const infoContainer = ({ colors }) => css`
        font-size: ${font.size.s};
        font-weight: ${font.weight.light};
        margin-left: auto;
        min-width: fit-content;

        & a {
            color: ${colors.font.primary};    
        }
    `

    return (
        <li css={container}>
            {imgUrl ? <ShadowBox small><img src={imgUrl} alt={heading} /></ShadowBox> : <PlayAudioButton audioUrl={audioUrl} />}
            <div css={textContainer}>
                <SubHeading>{heading}</SubHeading>
                <p>{description}</p>
            </div>
            <div css={infoContainer}>
                <p>{additionalInfo}</p>
            </div>
        </li>

    );
}
```



