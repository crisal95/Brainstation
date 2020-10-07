$("#dropdown").click(function () {
    var display = document.getElementById('dropdown-content').style.display;
    if (display === "none") {
        $("#dropdown-content").css("display", "block");
    } else {
        $("#dropdown-content").css("display", "none");
    }

});

$(document).ready(function() {
    $("#logo").addClass("rotate-animation"); 
    });

    var x = document.getElementById("logo");
    x.addEventListener("animationend", myEndFunction);

    function myEndFunction () {
        $("#logo").addClass("fadeout-animation"); 
        setTimeout(function () {
            $("#logo").attr("src", "../images/logo.png");
            $("#logo").addClass("fadein-animation"); 
        }, 500);
      
    }