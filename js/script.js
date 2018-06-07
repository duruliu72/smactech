$(document).ready(function () {
    $(document).ready(function () {
        $('#main-slider').owlCarousel({
            loop: true,
            nav: true,
            margin: 10,
            nav: false,
            margin: 10,
            items: 1
        });
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    });
    //AOS Effect
    AOS.init();
    //    For scrolling
    var scrolllink = $('.scroll');
    //    smooth scrolling
    scrolllink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top - 50,
        }, 1000);
    });
    //    Active link switching
    $(window).scroll(function () {
        var scrollbarlocation = $(this).scrollTop() + 65;
        scrolllink.each(function () {
            var sectionoffset = $(this.hash).offset().top;
            if (sectionoffset <= scrollbarlocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.nextElementSibling.toggle('open');
        });
    }
});
