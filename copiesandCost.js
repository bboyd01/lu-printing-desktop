
document.addEventListener("DOMContentLoaded", init, false);


function init() {
        document.querySelector("#copyInput").addEventListener('change', handleCost, false);
}

function handleCost(e){
        var bal     = document.getElementById("balance");
        var cost    = document.getElementById("cost");
        var newbal  = document.getElementById('newBalance');
        let costVal = .1;
        var copies  = e.target.value; // e is the passed arg, its all the data from the obj. targer.value is the number we entered. 

        cost.innerHTML = "$" + (copies*costVal).toFixed(2);  // displays cost * copy number
        newbal.innerHTML = "$" +(parseFloat((bal.innerHTML.slice(1)) - (copies*costVal).toFixed(2))).toFixed(2); // display and Calculates new balance based on cost value and current balance

}