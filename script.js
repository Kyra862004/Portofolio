$(document).ready(function () {
    $("#website div").hide();
    $("#website div").css("opacity", "1");
    $("#website a").click(function() { 
        $("#website div").slideToggle();
    });
});
$(document).ready(function () {
    $("#codepen div").hide();
    $("#codepen a").click(function () { 
        $("#codepen div").slideToggle();
    });
});