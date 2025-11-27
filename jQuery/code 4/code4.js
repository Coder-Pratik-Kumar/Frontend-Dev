let banners = $(".banner");
let current = 0;

$("#hideBtn").click(function () {
    banners.hide();
});

$("#showBtn").click(function () {
    banners.show();
});

$("#slideBtn").click(function () {
    banners.slideToggle();
});

$("#fadeBtn").click(function () {
    banners.fadeToggle();
});

setInterval(function () {
    banners.fadeOut();
    banners.eq(current).fadeIn();
    current = (current + 1) % banners.length;
}, 5000);
