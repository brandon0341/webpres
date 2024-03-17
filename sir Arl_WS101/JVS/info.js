

const upATT = (title, para, button) => {
    let uDiv = document.createElement("div")
    uDiv.className = "intro"
    uDiv.innerHTML = `<h1>${title}</h1>
                      <p>${para}</p>
                      <button>${button}</button>`

    return uDiv
}

export {upATT}