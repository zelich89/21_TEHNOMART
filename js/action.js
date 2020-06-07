$(".js-button").click(function() {
    if (!$(".js-action").hasClass('active')) {
        $(".js-action").addClass("active");
    }
});

$(".js-close").click(function() {
    $(".js-action").removeClass("active");
});

$(".service__content .service__specific").click(function() {
    $(".service__content .service__specific").removeClass("active").eq($(this).index()).addClass("active");
    $(".service__item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


$(".js-map-show").click(function() {
    $(".js-map-show").toggleClass("active");
});