$("#dropdown").click(function () {
    var display = document.getElementById('dropdown-content').style.display;
    if (display === "none") {
        $("#dropdown-content").css("display", "block");
    } else {
        $("#dropdown-content").css("display", "none");
    }

});

$(document).ready(function () {
    setTimeout(function () {
        $("#logo").addClass("rotate-animation");
    }, 1000);
    
});

var x = document.getElementById("logo");
x.addEventListener("animationend", myEndFunction);

function myEndFunction() {
    $("#logo").addClass("fadeout-animation");
    setTimeout(function () {
        $("#logo").attr("src", "../images/logo.png");
        $("#logo").addClass("fadein-animation");
    }, 450);

}

/*$("#logo").click(
    function () {
        $(this).removeClass('fadeout-animation');
    },
    function () {
        $(this).removeClass('fadein-animation');
    },
    function () {
        $(this).removeClass('rotate-animation');
    },
    function () {
        $(this).attr("src", "../images/simple-logo.png");

    }
)*/
