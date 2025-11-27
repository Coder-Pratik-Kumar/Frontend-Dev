$(document).ready(function () {
    $("#search").keyup(function () {
        let text = $(this).val().toLowerCase();
        let count = 0;

        $(".course").each(function () {
            let courseText = $(this).text().toLowerCase();

            if (courseText.includes(text)) {
                $(this).show();
                $(this).css("background", "yellow");  
                count++;
            } else {
                $(this).hide();  
            }
        });

        $("#count").text("Matched Courses: " + count);
    });

 
    $("#clear").click(function () {
        $("#search").val("");
        $(".course").show().css("background", "#f2f2f2"); 
        $("#count").text("");
    });
});
