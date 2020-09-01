//drop down when cicked
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

//add hover effect to portfolio
$(document).ready(function() {
    $("#projects").mouseenter(function() {
        $("#overlay").css("display", "block");
    }).mouseleave(function() {
        $("#overlay").css("display", "none");
    });
});

$(document).ready(function() {
    $("#projects1").mouseenter(function() {
        $("#overlay1").css("display", "block");
    }).mouseleave(function() {
        $("#overlay1").css("display", "none");
    });
});

$(document).ready(function() {
    $("#projects2").mouseenter(function() {
        $("#overlay2").css("display", "block");
    }).mouseleave(function() {
        $("#overlay2").css("display", "none");
    });
});

$(document).ready(function() {
    $("#projects3").mouseenter(function() {
        $("#overlay3").css("display", "block");
    }).mouseleave(function() {
        $("#overlay3").css("display", "none");
    });
});

$(document).ready(function() {
    $("#projects4").mouseenter(function() {
        $("#overlay4").css("display", "block");
    }).mouseleave(function() {
        $("#overlay4").css("display", "none");
    });
});

$(document).ready(function() {
    $("#projects5").mouseenter(function() {
        $("#overlay5").css("display", "block");
    }).mouseleave(function() {
        $("#overlay5").css("display", "none");
    });
});

$(document).ready(function() {
    $("#projects6").mouseenter(function() {
        $("#overlay6").css("display", "block");
    }).mouseleave(function() {
        $("#overlay6").css("display", "none");
    });
});

$(document).ready(function() {
    $("#projects7").mouseenter(function() {
        $("#overlay7").css("display", "block");
    }).mouseleave(function() {
        $("#overlay7").css("display", "none");
    });
});

//alert
$(document).ready(function() {
    $('#mc-embedded-subscribe').click(function() {
        alert($("#mce-FNAME").val() + ", we have received your message. Thank you for reaching out to us.");
    });
});