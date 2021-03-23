// on document load
$(function() {
    // animation on page load
    $("#mainContainer").hide(1);
    $("#mainContainer").fadeIn(300);

    // hide modal button on load
    $("#mButton").hide();

    // if screen is small, then remove the empty space on the 1st box to accomodate the vertical layout
    var minWidth = 992;
    var elementHeight = "550"; // make sure this matches the column height in the HTML file or it'll be confusing
    if (window.screen.width < minWidth) {
        $("#column1").css("height","50%");
    } else {
        $("#column1").css("height", "");
    }

    // press print button (add more to this later)
    $("#printButton").click(function () {
        var delayMs = 1000;
        console.log("print");

        // after delay, hide loading icon and show text
        setTimeout(function() {
            $("#mHead").addClass("text-success");
            $("#mHead").html("Success <i class=\"far fa-check-circle\"></i>");
            $("#mSpinner").hide();
            $("#mBody").text("Thank you for using LU Printing!");
            $("#mButton").show();
        }, delayMs);
    });

    // fadeOut and refresh page on modal close
    $("#mButton").click(function () {
        $("#mainContainer").fadeOut(300, function() {
            location.reload();
        });
        
    });
});