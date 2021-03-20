// on document load
$(function () {
    
    // select a printer from the table
    $(".printer").click(function () {
        console.log($(this).next().text());
        if ($(this).hasClass("printerSelected")) {
            $(".printer").removeClass("printerSelected text-light bg-primary");
            tryButton(false);
        } else {
            $(".printer").removeClass("printerSelected text-light bg-primary");
            $(this).addClass("printerSelected text-light bg-primary");
            tryButton(true);
        }
    });

    // focus the searchbar by clicking the icon
    $(".input-focus").click(function () {
        $(this).children("input").focus();
    });

    // show recents
    $("#recents").click(function() {
        $(".printer").show();
        $("#recents").addClass("btn-primary");
        $("#favorites").removeClass("btn-primary");
        $("#recents").removeClass("btn-outline-primary");
        $("#favorites").addClass("btn-outline-primary");
    });

    // show favorites
    $("#favorites").click(function() {
        $(".printer").hide();
        $(".favorite").show();
        $("#favorites").addClass("btn-primary");
        $("#recents").removeClass("btn-primary");
        $("#favorites").removeClass("btn-outline-primary");
        $("#recents").addClass("btn-outline-primary");
    });
});


// this function is from w3schools.com
function searchPrinters() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("printerSearchBar");
    filter = input.value.toUpperCase();
    table = document.getElementById("printerList");
    tr = table.getElementsByClassName("printer");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


function tryButton(canPrint) {
    // show print button if you can print
    if (canPrint) {
        $("#printButton").removeAttr("disabled");
    } else {
        $("#printButton").attr("disabled", "disabled");
    }
}


