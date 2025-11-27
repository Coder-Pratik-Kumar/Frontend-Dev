var jq1 = jQuery.noConflict(true);
var jq2 = jQuery.noConflict(true);

jq1(function () {
    let slides = ["Slide 1", "Slide 2", "Slide 3"];
    let i = 0;
    setInterval(function () {
        i = (i + 1) % slides.length;
        jq1("#slider").text(slides[i]);
    }, 2000);

    jq1(".widget").click(function () {
        jq1(".widget").removeClass("active");
        jq1(this).addClass("active");
    });
});

jq2(function () {
    jq2("#showModal").click(function () {
        jq2("#modal").fadeIn();
        setTimeout(() => jq2("#modal").fadeOut(), 2000);
    });

    jq2(".hoverItem").hover(function (e) {
        jq2("#tip").css({ top: e.pageY + 5, left: e.pageX + 5 }).fadeIn();
    }, function () {
        jq2("#tip").fadeOut();
    });
});
