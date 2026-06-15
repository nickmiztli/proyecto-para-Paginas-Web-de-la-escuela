console.log("gatito cargado")
const imgDum = document.getElementById("gatitoSound")
const gatitoSound = new Audio('../Sonidos/cat.mp3')
imgDum.addEventListener("click", ()  => {
    console.log("MEOW")
    gatitoSound.play()
})