
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

export const getRandomInt = max => Math.floor(Math.random() * max);

export const lazyImgObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        const img = entry.target.querySelector('img')

        if (entry.isIntersecting) {
            img.src = img.dataset.src
            img.removeAttribute("data-src");
            lazyImgObserver.unobserve(entry.target);
        }
    })
}, {rootMargin: "0px 0px -200px"});