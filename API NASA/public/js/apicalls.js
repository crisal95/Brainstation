//apikey=rABzOvQUQ7PZSUr1SBBcl4l0vdc0ySqyOW835ptB


$("button").click(function () {
    var date = document.getElementById("input-date").value;
    var dateCheck = date;
    var dateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])/
    if (dateCheck.match(dateRegex) || date === '') {
        $.ajax({
            type: 'GET',
            url: 'https://api.nasa.gov/planetary/apod',
            data: {
                "api_key": 'rABzOvQUQ7PZSUr1SBBcl4l0vdc0ySqyOW835ptB',
                "date": date
            },
            success: function (response) {
                $("#nasa-image").attr("src", response.url);
                $("#nasa-image").css("display", "block");
                $("#image-text").text(response.explanation);
                $("#image-title").text(response.title);

            },
            error: function () {
                alert("Something went wrong getting the information\n Hint: Date must be between Jun 16, 1995 and today´s date.");
            }
           
        });
    } else {
        alert("Date format it´s incorrect. It should be YYYY-MM-DD");
    }

    document.getElementById("input-date").value = '';
});