let subscribed = false;

function showMessage(text) {
    $("#message").text(text);
}

$("#subscribeBtn").click(function () {
    subscribed = true;
    showMessage("Notifications Enabled");
});

$("#unsubscribeBtn").click(function () {
    subscribed = false;
    showMessage("Notifications Disabled");
});

$("#topics").on("click", ".topic", function () {
    if (subscribed) {
        let name = $(this).data("name");
        showMessage("Subscribed to " + name);
    } else {
        showMessage("Enable notifications first!");
    }
});

$("#addTopicBtn").click(function () {
    let newTopic = $("#newTopic").val().trim();
    if (newTopic !== "") {
        $("#topics").append('<div class="topic" data-name="' + newTopic + '">' + newTopic + '</div>');
        showMessage("New topic added: " + newTopic);
        $("#newTopic").val("");
    }
});

$("#unsubscribeBtn").click(function () {
    $("#topics").off("click", ".topic");
    showMessage("All topic click events removed");
});
