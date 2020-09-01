//what we do dropdown on click
$(document).ready(function() {
    $("#dev-image").click(function() {
        $("#dev-image").slideUp('1000');
        $("#dev").slideDown('1000');
    });
    $("#dev").click(function() {
        $("#dev").slideUp('1000');
        $("#dev-image").slideDown('1000');
    });
});

$(document).ready(function() {
    $("#des-image").click(function() {
        $("#des-image").slideUp('1000');
        $("#des").slideDown('1000');
    });
    $("#des").click(function() {
        $("#des").slideUp('1000');
        $("#des-image").slideDown('1000');
    });
});

$(document).ready(function() {
    $("#prod-image").click(function() {
        $("#prod-image").slideUp('1000');
        $("#prod").slideDown('1000');
    });
    $("#prod").click(function() {
        $("#prod").slideUp('1000');
        $("#prod-image").slideDown('1000');
    });
});

$(document).ready(function() {
    $('#mc-embedded-subscribe').click(function() {
        alert($("#mce-FNAME").val() + ", we have received your message. Thank you for reaching out to us.");
    });
});