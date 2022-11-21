const bodyElement = document.querySelector("body"),
  images = document.querySelectorAll("img")

images.forEach(e => e.addEventListener("click", (event) =>
{
  let overlay = document.createElement("div"),
    imgSRC = event.target.src,
    bigIMG = document.createElement("img")

  bigIMG.setAttribute("class", "bigIMG")
  overlay.appendChild(bigIMG)
  bigIMG.setAttribute("src", imgSRC)
  overlay.setAttribute("class", "overlay")
  bodyElement.appendChild(overlay)

  overlay.addEventListener("click", () =>
  {
    body.removeChild(overlay)
  })
}))



