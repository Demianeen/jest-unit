const mapArrayToString = (arr) => {
    return arr
        .filter(Number.isInteger)
        .map(String)
}

module.exports = mapArrayToString