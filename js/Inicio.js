console.log("Inicio Iniializado");
const Images = document.querySelectorAll(".Images")
const Texto = document.querySelectorAll(".texto")
const imagenIzq = document.getElementById("ImgIzq");
const textoIzq = document.getElementById("TextIzq")
const imagenDer = document.getElementById("ImgDer");
const textoDer = document.getElementById("TextDer")
const texti = document.querySelectorAll("texto")


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
        let opacity = 1;
        const direction =
    text.classList.contains("izq") ? -1 : 1;

        let offset = 0;

        let enterProgress = 0;

        if(rect.top < window.innerHeight){
            enterProgress =
                Math.min(1,
                (window.innerHeight - rect.top) / rect.height);
        }

        let exitProgress = 0;

        if(rect.top < 0){
            exitProgress =
            Math.min(1,
            -rect.top / rect.height);
        }



        if(rect.top > 0){
            offset = (1 - enterProgress) * 500 * direction;
        }
        if(rect.top < 0){
            offset = exitProgress * 500 * direction;
        }

        text.style.transform = `translateX(${offset}px)`;


        if (rect.top < 1){
            opacity = Math.max( 0, 1 + rect.top/rect.height)
        }
        text.style.opacity = opacity;
        console.log("recttopNEg" , -rect.top)
        console.log("recth" , rect.height)
        console.log("extpr" , exitProgress)
        console.log("dir" , direction)
        console.log("enprg" , enterProgress)
        console.log(offset)
    })
});
console.log(window.innerHeight)