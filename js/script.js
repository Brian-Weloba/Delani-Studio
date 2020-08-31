$(document).ready(function() {
    $("#development-image").click(function() {
        $("#development-image").slideUp('1000')
        $("#development").slideDown('1000');
    });
    $("#development").click(function() {
        $("#development").slideUp('1000');
        $("#development-image").slideDown('1000');
    });
});

$(document).ready(function() {
    $("#design-image").click(function() {
        $("#design-image").slideUp('1000');
        $("#design").slideDown('1000');
    });
    $("#design").click(function() {
        $("#design").slideUp('1000');
        $("#design-image").slideDown('1000');
    });
});

$(document).ready(function() {
    $("#product-image").click(function() {
        $("#product-image").slideUp('1000');
        $("#product").slideDown('1000');
    });
    $("#product").click(function() {
        $("#product").slideUp('1000');
        $("#product-image").slideDown('1000');
    });
});