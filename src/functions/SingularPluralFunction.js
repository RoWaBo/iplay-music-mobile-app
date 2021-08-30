
const DecideSingularPlural = (amount, singularItemName) => (
     `${amount} ${amount === 1 ? singularItemName : singularItemName + "s"}`
)

export default DecideSingularPlural;