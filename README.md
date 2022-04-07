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

#### Emotion
- Css styling direktig i js. Igennem css funktion kan der skrives css på samme måde som i en css fil. Jeg bruger også deres ThemeProvider, som gør det muligt at dele og dynamisk ændre css værdier med alle views. Dette er smart når app'ens farver/tema skal kunne ændres ved tryk på en knap. Derudover bruger jeg Global funktionen som tilføjer og aktiverer css værdier globalt på alle views. Jeg bruger det som en boilerplate til at nulstille default styling og bruge settings som jeg foretrækker. 

#### Reach Router
- ROUTER/PATH: Styrer hvilke views der bliver loaded udfra browser urlen.
- LINK fungerer som et a tag og loader det view som "to attributen" henviser til. 
- NAVIGATE er næsten ligesom Link, men er en funktion som kan kaldes og loaded et nyt view. 

#### Axios
- Funktionen som fetcher data udfra en url. Det er ligesom fetch, men en smule mere strømlignet og return-objektet er struktureret pænere.

#### Querystring
- Bruges to at parse data i et format så det kan læses som et url parameter. Jeg bruger det i forbindelse med login kommunikation med spotify.

#### React icons
- Bibliotek af ikoner som nemt kan importeres ind i ens reactprojekt. Meget brugbart i alle projekter!

#### React Reveal
- Bibliotek af animationer som nemt kan tilføjes til komponenter ved at wrappe dem i et animationskomponent. 

#### Netlify-cli
- Netlify håndterer vores serversidekode og denne pakke gør det muligt at køre netlify på vores lokale server.  
---

### Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

#### Egne løsninger
Generelt har jeg haft fokus på at forsøge at kode alt selv uden brug af npm-pakker. Jeg traf det valg, da det tvinger mig til at tænke mere over hvordan React fungerer. Det betyder tilgengæld at nogle funktioner kunne være løst bedre, men nu har jeg forsøgt selv og lært en del på vejen.

#### Ekstra "quality of life" funktionalitet
Jeg har brugt ekstra tid på mindre funktioner såsom:

	* View all - funktionen som ved klik viser eller fjerner kontent
	
	* UtilityBar - dynamisk bagground-color når der scrolles
	
	* NavBar - highlighter ikon som matcher det view man er på
	
	* ShadowBox - Placeholderbillede der vises før kontent loades
	
	* Custom hook - som henter spotify api data
	
	* Fuld funktionel Player hvor alle knapper virker - også med autoplay når track slutter
	
	* Player error handling

---
### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

Det er gået rimelig godt, synes jeg. Jeg har fået en del bedre forståelse af React. Ønsker stadig at blive bedre til at overskue re-renders og detaljerne omkring de forskellige hooks. Efter jeg programmerede Playeren, begyndte jeg at fatte hvordan states og useEffect kan arbejde sammen. Har stadig en fornemmelse af at der bliver trigget lidt for mange re-renders, men det må vi lige vende ved lejlighed!

Jeg er stadig ved at finde frem til mine egne systemer i forhold til sammensætning og filstruktur i React. Det har været en udfordring at bevare den samme logik og struktur igennem projektet. Men det er jo bare noget der tager tid og øvelse. Generelt har jeg forsøgt at være konsekvent med opsætning af komponenter og navngivning af variabler.

Jeg begik den fejl ikke at læse opgavebeskrivelsen godt nok, så har spildt tid på nogle opgaver som ikke var obligatoriske. Jeg skrottede fuldstændig funktionerne i min PlayAudioButton.

OBS! Efter jeg tilføjede react-reveal animationer, får jeg en del warnings i consollen, ellers har React ikke kastet mange fejl efter mig andet end 404 på Playlists.

Alt i alt et godt og interessant projekt. Det har været sjovt det meste af tiden.

---
### En beskrivelse af særlige punkter til bedømmelse

#### Dynamiske css værdier
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

#### Player
```js
const Player = ({ mediaUrl, trackNumber }) => {

    const { theme } = useTheme()
    const { authToken } = useAuth();
    const [tracks, setTracks] = useState();
    let [trackIndex, setTrackIndex] = useState(Number(trackNumber));
    const audioElement = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const playBtn = useRef();

    const trackName = () => tracks && (tracks[trackIndex].track?.name || tracks[trackIndex].name)
    const trackArtist = () => tracks && (tracks[trackIndex].track?.artists[0].name || tracks[trackIndex].artists[0].name)
    const trackPreviewUrl = () => tracks && (tracks[trackIndex].track?.preview_url || tracks[trackIndex].preview_url)

    useEffect(() => {
        if (authToken) {
            axios(decodeURIComponent(mediaUrl), {
                headers: {
                    "Authorization": `${authToken.token_type} ${authToken.access_token}`
                }
            })
                .then(result => {
                    setTracks(result.data.items)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [authToken, mediaUrl])

    useEffect(() => {
        isPlaying && audioElement.current.play()

        // ERROR HANDLING
        if (tracks && !tracks[trackIndex].track?.preview_url && !tracks[trackIndex].preview_url) {
            !audioElement.current.paused && audioElement.current.pause()
            setIsPlaying(false)
            playBtn.current.disabled = true
            alert(`"${trackName()}" can't be played because of missing preview url!`)
        } else {
            playBtn.current && (playBtn.current.disabled = false)
        }
    }, [trackIndex, isPlaying, tracks])

    isPlaying && (audioElement.current.ontimeupdate = e => (setCurrentTime(e.target.currentTime)))

    function playPause() {
        if (audioElement.current.paused) {
            audioElement.current.play()
            setIsPlaying(true)
        } else {
            audioElement.current.pause()
            setIsPlaying(false)
        }
    }

    const setTimeFromTimelineClick = e => {
        const updatedTime = (e.clientX - 30) / e.target.clientWidth * audioElement.current.duration
        audioElement.current.currentTime = updatedTime
        setCurrentTime(updatedTime)
    }

    // === STYLE ===
    const imgContainer = css`
        background-image: url('/vinyl.png'), ${theme === 'light' ? `url('/sound-wave-light.png')` : `url('/sound-wave-dark.png')`};
        background-position: center;
        background-repeat: no-repeat;
        height: 395px;
        margin-top: 81px;
    `

    const textContainer = css`
        margin: ${spacing.m};
    `

    const infoText = ({ colors }) => css`
        font-size: ${font.size.m};
        font-weight: ${font.weight.light};
        color: ${colors.font.primary};
        text-align: center;
        padding: ${spacing.xs};
        text-transform: capitalize;
    `
    // MEDIACONTROL STYLING
    const mediaControls = ({ colors }) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: ${spacing.m};

        & > button {
            border: none;
            display: grid;
            place-content: center;
            cursor: pointer;               
        }
    `
    const skipButtons = ({ colors }) => css`
        background: transparent;
        font-size: 1.4rem;
        padding: ${spacing.xs};
        color: ${colors.font.primary};

        & > svg {
            fill: url(#gradient-fill);
            display: initial;    
        }        
    `
    const backForwardButtons = ({ colors }) => css`
        color: ${colors.font.primary};
        background: transparent;
        font-size: 1.7rem;
        padding: ${spacing.xs};
    `
    const playButton = ({ colors }) => css`
        width: 75px;
        height: 75px;
        min-width: 75px;
        min-height: 75px;
        border-radius: 50%;
        background: ${colors.gradient};
        color: ${colors.font.secondary};
        margin: 0 ${spacing.xs};

        & > * {
            font-size: 3.5rem;
            margin-left: ${isPlaying ? 'unset' : '.4rem'};
            pointer-events: none;
        }
    
    `
    const mediaTimeLine = ({ colors }) => css`
        padding: 0 ${spacing.m};
    `
    const timeLine = ({ colors }) => css`
        background: ${colors.primary};
        height: 3px;
        width: 100%;
        position: relative;  
    `
    const timeLineDot = ({ colors }) => css`
        height: 12px;
        width: 12px;
        background: ${colors.primary};
        border-radius: 50%;
        box-shadow: 0px 0px 0px 6px rgba(255, 17, 104, 0.35);

        position: absolute;
        top: -4.5px;
        left: ${((currentTime * 1000) / (audioElement.current?.duration * 1000)) * 100}%;
    `
    const time = ({ colors }) => css`
        color: ${colors.font.primary};
        font-size: ${font.size.m};
        font-weight: ${font.weight.light};
        display: flex;
        padding-top: ${spacing.s};

        & > :first-of-type {
            margin-right: auto;
        }
    `

    return (
        <MainFullViewContainer>
            <UtilityBar heading="playing" />
            <div css={imgContainer}></div>
            {tracks && (<>
                <header css={textContainer}>
                    <SubHeading large>{trackName()}</SubHeading>
                    <h3 css={infoText}>{trackArtist()}</h3>
                </header>
                <div css={mediaTimeLine}>
                    <div css={timeLine} onClick={setTimeFromTimelineClick}>
                        <div css={timeLineDot}></div>
                    </div>
                    <div css={time}>
                        <p>{convertMsToMAndS(currentTime * 1000)}</p>
                        <p>{convertMsToMAndS(audioElement.current?.duration * 1000 || 30000)}</p>
                    </div>
                </div>
                <div css={mediaControls}>
                    <button css={skipButtons} onClick={() => trackIndex > 0 && setTrackIndex(trackIndex - 1)}>
                        <IoPlaySkipBackSharp style={trackIndex === 0 && { fill: 'unset' }} />
                    </button>
                    <button css={backForwardButtons} onClick={() => (audioElement.current.currentTime = audioElement.current.currentTime - 3)}>
                        <IoPlayBackSharp />
                    </button>
                    <button ref={playBtn} css={playButton} onClick={playPause}>
                        <audio
                            ref={audioElement}
                            onEnded={() => trackIndex < tracks.length - 1 ? setTrackIndex(trackIndex + 1) : setIsPlaying(false)}
                            src={trackPreviewUrl()}
                        />
                        {isPlaying ? <IoIosPause /> : <IoIosPlay />}
                    </button>
                    <button css={backForwardButtons} onClick={() => (audioElement.current.currentTime = audioElement.current.currentTime + 3)}>
                        <IoPlayForwardSharp />
                    </button>
                    <button css={skipButtons} onClick={() => trackIndex < tracks.length - 1 && setTrackIndex(trackIndex + 1)}>
                        <IoPlaySkipForwardSharp style={trackIndex === tracks?.length - 1 && { fill: 'unset' }} />
                    </button>
                </div>
            </>)}
            <Gradient />
        </MainFullViewContainer>
    );
}
```

#### Custom hook
```js
const useSpotifyApiFetch = url => {

    const { authToken } = useAuth();

    const [data, setData] = useState(); 

    useEffect(() => {
        if (authToken) {
            axios(url, {
                headers: {
                    "Authorization": `${authToken.token_type} ${authToken.access_token}`
                }
            })
                .then(result => { 
                    setData(result) 
                })
                .catch(error => { 
                    console.log(error) 
                })                 
        }
    }, [authToken, url])

    return data
}
```



