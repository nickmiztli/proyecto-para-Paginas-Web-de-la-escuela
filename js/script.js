let lastScroll = 0 
const navBar = document.getElementById("navBar");
const menuBtn = document.getElementById("menuBtn")

window.addEventListener("scroll" , () => {

    let currentScroll = window.pageYOffset;

    if(currentScroll > lastScroll){
        navBar.classList.add("hidden");
    }else{
        navBar.classList.remove("hidden");
    }
    lastScroll = currentScroll

});

menuBtn.addEventListener("click" , () => {
    navBar.classList.toggle("hidden")
})