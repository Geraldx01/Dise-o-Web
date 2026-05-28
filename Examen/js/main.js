
document.addEventListener("DOMContentLoaded", () => {

    const menu = document.querySelector(".menu");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){
            menu.style.background = "#000";
        }else{
            menu.style.background = "rgba(0,0,0,0.8)";
        }

    }, { passive: true });

    const carousel = document.querySelector("#carouselAutos");

    if(carousel){

        new bootstrap.Carousel(carousel, {
            interval: 2500,
            ride: "carousel",
            pause: false,
            wrap: true
        });

    }

});
