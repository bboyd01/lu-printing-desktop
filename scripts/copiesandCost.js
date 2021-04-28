document.addEventListener("DOMContentLoaded", init, false);


function init() {
    document.querySelector("#copyInput").addEventListener('change', handleCost, false);
}

function handleCost(){
    var bal = $("#balance");
    var cost = $("#cost");
    var newbal = $("#newBalance");
    var copies = parseInt($("#copyInput").val());
    let costVal = 0.1;

    // set input to 1 if negative
    if (copies < 1) {
        copies = 1;
        $("#copyInput").val("1");
    }

 
    cost.text("$" + (copies * costVal).toFixed(2)); // displays cost * copy number
    newbal.text("$" + (parseFloat((bal.text().slice(1)) - (copies * costVal).toFixed(2))).toFixed(2)); // display and Calculates new balance based on cost value and current balance

}