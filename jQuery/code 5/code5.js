$(".manager").click(function () {
    $(".employee").removeClass("highlight");
    $(this)
        .nextUntil(".manager, .department")
        .filter(".employee")
        .addClass("highlight");
});

$(".employee").hover(
    function () {
        $(this).next(".contact").fadeIn();
    },
    function () {
        $(this).next(".contact").fadeOut();
    }
);

$(".department").click(function (e) {
    if (e.target !== this) return;
    $(".employee, .manager").removeClass("highlight");
    $(this).children(".team").find("*").addClass("highlight");
});

$("#randomBtn").click(function () {
    let employees = $(".employee");
    let r = Math.floor(Math.random() * employees.length);
    let chosen = employees.eq(r);

    $(".employee").removeClass("highlight");
    chosen.addClass("highlight");
    chosen.siblings(".employee").addClass("highlight");
});

$("#toggleBtn").click(function () {
    $(".team").slideToggle();
});
