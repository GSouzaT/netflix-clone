$('.owl-carousel').owlCarousel({
    loop:false,//roda infinito e false trava quando termina e precisa voltar
    margin:10,
    responsiveClass:false,//setas para "correr" o carrosel
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:false
        }
    }
})