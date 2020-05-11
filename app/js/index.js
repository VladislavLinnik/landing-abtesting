// header menu
$('.js-menuToggle').on('click', function() {
    $('.js-menuList').toggleClass('menu__list--active');
});
$(window).resize(function() {
    if (window.innerWidth <= 768) {
        $('.js-menuList').removeClass('menu__list--active');
    }
});



$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
        $('.header').addClass("scroll");
    }
    else{
        $('.header').removeClass("scroll");
    }
});