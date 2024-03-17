

const dATT = (titleWan, paraO, btnO, paraT, btnT, paraTh, btnTh) => {
    let dDiv = document.createElement("div")
    dDiv.className = "datas"
    dDiv.innerHTML =   `<h1 class="pro">${titleWan}</h1>
                        <p>${paraO}</p>
                        <button>${btnO}</button>
                        <p>${paraT}</p>
                        <button>${btnT}</button>
                        <p>${paraTh}</p>
                        <button>${btnTh}</button>`

    return dDiv
}

export {dATT}