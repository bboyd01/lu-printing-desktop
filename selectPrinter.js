// on document load
$(function () {
    // lets you choose a printer
    $(".printer").click(function () {
        console.log($(this).next().text());
        if ($(this).hasClass("printerSelected")) {
            $(".printer").removeClass("printerSelected text-light bg-primary");
        } else {
            $(".printer").removeClass("printerSelected text-light bg-primary");
            $(this).addClass("printerSelected text-light bg-primary");
        }
    });

    // allows you to focus the searchbar by clicking the icon
    $(".input-focus").click(function () {
        $(this).children("input").focus();
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


