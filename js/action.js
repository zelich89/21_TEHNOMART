$(".js-button").click(function() {
    if (!$(".js-action").hasClass('active')) {
        $(".js-action").addClass("active");
    }
});

$(".js-close").click(function() {
    $(".js-action").removeClass("active");
});


