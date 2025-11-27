$(document).ready(function () {

    $(".product").click(function () {
        $(".product").removeClass("highlight");
        $(this).addClass("highlight");

        if ($(this).data("stock") === "out") {
            alert("This product is out of stock!");
        }
    });

    $(".favorite").click(function (e) {
        e.stopPropagation();
        $(this).toggleClass("selected");
    });
});
