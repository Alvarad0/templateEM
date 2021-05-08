function init() {
    let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    popoverTriggerList.map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl))

    $("#btnSearch").click(() => {
        $("#btnSearch").hide()
        $("#boxSearch").css("display", "flex")
        $("#boxSearch input").focus()
    })
    $("#boxSearch button").click(() => {
        $("#btnSearch").show()
        $("#boxSearch").css("display", "none")
        $("#boxSearch input").val("")
    })

    $("#mainCarousel").owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $("#carouselPeople").owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 2
            },
            1000:{
                items: 3
            }
        }
    })

    $(".venobox-video").venobox({
        autoplay: true,
        border: '5px',
        spinner: 'wave',
    })
}

init()
