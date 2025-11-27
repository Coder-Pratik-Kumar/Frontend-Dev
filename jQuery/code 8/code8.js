let postCount = 1;

$("#addPost").click(function () {
    $("#posts").append(`
        <div class="post">
            <div class="tag">New</div>
            New Blog Post ${postCount++}
        </div>
    `);
});

$("#prependPost").click(function () {
    $("#posts").prepend(`
        <div class="post">
            <div class="tag">Featured</div>
            Featured Blog Post
        </div>
    `);
});

$("#removeLast").click(function () {
    $("#posts .post").last().remove();
});

$(".post").each(function () {
    $(this).before("<div class='tag'>Tag</div>");
    $(this).after("<div style='font-size:12px; color:gray;'>--- End of Post ---</div>");
});

$("#keyword").keyup(function () {
    let text = $(this).val().toLowerCase();

    $(".post").removeClass("highlight");

    if (text !== "") {
        $(".post").filter(function () {
            return $(this).text().toLowerCase().includes(text);
        }).addClass("highlight");
    }
});
