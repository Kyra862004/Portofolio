$(document).ready(function () {
    // default
    $("#website div").hide();
    $("#codepen div").hide();
    $(".sub-skill").hide();
    // topScroll function
    $("#top").click(function () { 
        $(window).scrollTop(0);
    });
    // height adjusment
    let bannerHeight = $(".banner").height();
    let projectsHeight = $("#projects").height();
    let skillsHeight = $("#skills").height();
    let profileHeight = $("#profile").height();
    $("#projects").css("padding-top", bannerHeight);
    $("#projects").css("padding-bottom", bannerHeight);
    $("#skills").css("padding-top", projectsHeight);
    $("#skills").css("padding-bottom", projectsHeight);
    $("#profile").css("padding-top", skillsHeight);
    $("#profile").css("padding-bottom", skillsHeight);
    // display function
    $("#website a").click(function() { 
        $("#website div").slideToggle();
    });
    $("#codepen a").click(function () { 
        $("#codepen div").slideToggle();
    });
    $(".skill").click(function () { 
        $(".sub-skill").slideToggle();
    });
});