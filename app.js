$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }

    });
});


$(document).ready(function () {
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed-text", {
        strings: ["Web Developer", "Designer", "Creative Person","Coder","Student","Front-end Developer"],
        typeSpeed: 100,
        backSpeed: 25,
        backDelay: 1000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        smartBackspace: true,
    });
});