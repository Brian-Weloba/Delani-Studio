$(document).ready(function() {
    $("#development-image").click(function() {
        $("#development-image").slideDown('1000').hide('1000');
        $("#development").show('1000');
    });
    $("#development").click(function() {
        $("#development").hide('1000');
        $("#development-image").slideDown('1000');
    });
});

$(document).ready(function() {
    $("#design-image").click(function() {
        $("#design-image").slideDown('1000').hide('1000');
        $("#design").show('1000');
    });
    $("#design").click(function() {
        $("#design").slideUp('1000');
        $("#design-image").slideDown('1000');
    });
});

$(document).ready(function() {
    $("#product-image").click(function() {
        $("#product-image").slideDown('1000').hide('1000');
        $("#product").show('1000');
    });
    $("#product").click(function() {
        $("#product").slideUp('1000');
        $("#product-image").slideDown('1000');
    });
});