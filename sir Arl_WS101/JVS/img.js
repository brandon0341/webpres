

const att = (image) => {
    let aDiv = document.createElement("div")
    aDiv.className = "bigP"
    aDiv.innerHTML = `<img src="./IMGS/${image}>`

    return aDiv
}
const bAtt = (image) => {
    let cDiv = document.createElement("div")
    cDiv.className = "sOne"
    cDiv.innerHTML = `<img src="./IMGS/${image}>`

    return cDiv
}

const bATt = (image) => {
    let cDivO = document.createElement("div")
    cDivO.className = "sTwo"
    cDivO.innerHTML = `<img src="./IMGS/${image}>`

    return cDivO
}

const bATT = (image) => {
    let cDivT = document.createElement("div")
    cDivT.className = "sThr"
    cDivT.innerHTML = `<img src="./IMGS/${image}>`

    return cDivT
}

export {att, bAtt, bATt, bATT}