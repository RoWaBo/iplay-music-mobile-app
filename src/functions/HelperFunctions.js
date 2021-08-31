
export const convertMsToMAndS = ms => {
    const msToMinutes = ms / 60000 
    const minutes = Math.floor(msToMinutes)
    const minutesDecimals = Number(JSON.stringify(msToMinutes).substring(1)) 
    let seconds = Number(JSON.stringify(minutesDecimals * 60).substring(0, 2)) 
    
    if (seconds < 10) seconds = "0" + seconds

    return minutes + ":" + seconds
}

export const decideSingularPlural = (amount, singularItemName) => (
    `${amount} ${amount === 1 ? singularItemName : singularItemName + "s"}`
)