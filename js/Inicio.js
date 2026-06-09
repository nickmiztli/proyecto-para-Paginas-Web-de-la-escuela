console.log("Inicio Iniializado");
const Images = document.querySelectorAll(".Images")
const Texto = document.querySelectorAll(".texto")
const imagenIzq = document.getElementById("ImgIzq");
const textoIzq = document.getElementById("TextIzq")
const imagenDer = document.getElementById("ImgDer");
const textoDer = document.getElementById("TextDer")


window.addEventListener("scroll", () => {
    
    Images.forEach(img => {
        const rect = img.getBoundingClientRect();
        const total = window.innerHeight + rect.height;
        const progress = (window.innerHeight - rect.top)/ total;
        const clamped = Math.max(0 , Math.min(progress,1));
        const direction = img.classList.contains("izq") ? -1 : 1;
        const offset = direction * (0.5 - clamped) * 200;
        img.style.transform = `translateX(${offset}px)`;
        img.style.opacity=
        Math.sin(clamped * Math.PI)
    })
    Texto.forEach(text => {
        const rect = text.getBoundingClientRect();
        const total = window.innerHeight + rect.height;
        const progress = (window.innerHeight - rect.top)/ total;
        const clamped = Math.max(0 , Math.min(progress,1));
        const direction = text.classList.contains("izq") ? -1 : 1;
        const offset = direction * (0.5 - clamped) * 200;
        text.style.transform = `translateX(${offset}px)`;
        text.style.opacity=
        Math.sin(clamped * Math.PI)
    })
});