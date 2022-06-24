$(document).ready(function(){
    $('#owl-partner').owlCarousel({
        margin: 20,
        dots: false,
        responsiveClass: true,
        responsive: {
            0:{
                items: 1
            },
            768:{
                items: 3
            },
            1024:{
                items: 5,
            }
        }
    });

    $('#hum').click(function () {
        $('#nav-list').addClass('active')
    })
    $('#menu-close').click(function () {
        $('#nav-list').removeClass('active')
    })
});
