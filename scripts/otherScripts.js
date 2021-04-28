// on document load
$(function() {
    // animation on page load
    $("#mainContainer").hide(1);
    $("#mainContainer").fadeIn(300);

    // hide modal button on load
    $("#mButton").hide();

    // if screen is small, then remove the empty space on the 1st box to accomodate the vertical layout
    var breakpoint = 576;
    var width = window.innerWidth;
    if (width < breakpoint) {
        console.log("small")
        $("#filesTable").height("auto");
        $("#printerTable").height("150px");
        $("#heading").css("font-size","200%");
        //$("#filesTable").removeProp("height");
    }
    console.log(width);

    // press print button
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

// update button based on whether or not you can print
function checkButton(input) {
    var canPrint = input;

    // can print if printer is selected and file is up
    // if ($("#printerList").next().has(".printerSelected") != "") {
    //     canPrint = true;
    //     console.log("1");
    // } 
    // if ($("#fileList").next().has("td") != "") {
    //     canPrint = true;
    //     console.log("2");
    // } 

    // show print button if you can print
    if (canPrint) {
        $("#printButton").removeAttr("disabled");
    } else {
        $("#printButton").attr("disabled", "disabled");
    }
}