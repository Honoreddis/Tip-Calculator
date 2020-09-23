// Calculate Tip Function 
function calculateTip() {
    var BillAmt = document.getElementById("billamt").Value;
    var serviceQual = document.getElementById("serviceQual").Value;
    var numOfPeople = document.getElementById("peopleamt").Value;

    // validate input //
    if (billamt === "" || serviceQual == 0) {
        alert("Please enter values");
        return;
    }

    // Check to see if this input is empty or less equal to 1
    if(numOfPeople === "" || numOfPeople <= 1 ){
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else{
        document.getElementById("each").style.display = "block";
    }

    // Calculate Tip
    var total = (billamt * serviceQual) / numOfPeople;
     
    // round to two decimal places
    total = Math.round(total * 100) / 100;

    // next line allows us to always have to digits after decimal point
    total = total.toFixed(2);
    // display the tip
    document.getElementsByName("totalTip").style.display = "block";
    document.getElementsByName("tip").innerHTML = "total";
}

// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Chick to call function
document.getElementById("calculate").onclick = function() {
    calculateTip();
};
