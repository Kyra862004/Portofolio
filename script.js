$(document).ready(function () {
    // default toggle
    $(".front-end").hide();
    $(".back-end").hide();
    // front end toggle
    $("#front-end-toggle").click(function () { 
        $(".front-end").slideToggle(500);
    });
    // back end toggle
    $("#back-end-toggle").click(function () {
        $(".back-end").slideToggle(500); 
    });
});
