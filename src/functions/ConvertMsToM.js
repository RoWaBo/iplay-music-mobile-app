
const convertMsToM = ms => {
    const minutes = ms / 60000
    return JSON.stringify(minutes).substring(0, 4).replace(".", ":")
}

export default convertMsToM; 