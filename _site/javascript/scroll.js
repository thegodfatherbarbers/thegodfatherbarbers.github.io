$(document).ready(function () {
    resizeDiv();

    $('nav a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });

    $('.site-header-high-res').on('load', function() {
        alert('load');
        $('.site-header').addClass('loaded');
    }).off().each(function () {
        if (this.complete) {
            this.trigger('load');
        }
    });

    $('.phone').click(function () {
        $(this).closest('ul').toggleClass('phone-active');
    });
});

window.onresize = function(event) {
    resizeDiv();
}

function resizeDiv() {
    vpw = $(window).width();
    vph = $(window).height();
    $('header, .final').css({'height': vph + 'px'});
}
