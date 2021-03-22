// on document load
$(function() {
    // animation on page load
    $("#mainContainer").hide(1);
    $("#mainContainer").slideDown(300);

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
        
    });

    // animation + refresh page when finished printing
    $("#doneButton").click(function () {
        $("#mainContainer").fadeOut(1000, function() {
            location.reload();
        });
        
    });
});