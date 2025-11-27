let existingEmails = ["test@example.com", "user@domain.com"];

$("#regForm").submit(function (e) {
    e.preventDefault();
    let valid = true;

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let password = $("#password").val();

    $("#name, #email, #password").removeClass("error");

    if (name === "") {
        $("#name").addClass("error");
        valid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email) || existingEmails.includes(email)) {
        $("#email").addClass("error");
        valid = false;
    }

    if (password.length < 8) {
        $("#password").addClass("error");
        valid = false;
    }

    if (valid) {
        $("#message").text("Registration Successful!").removeClass("error").addClass("success");
        existingEmails.push(email);
        $("#regForm")[0].reset();
    } else {
        $("#message").text("Please correct highlighted fields").removeClass("success").addClass("error");
    }
});
