/*Create a grid of nine boxes
When any box is clicked a red X appears
When the next box is clicked a Blue O appears
#1 and #2 are repeated until a row of 3 of the same character is created
When a win happens:
Alert the players who won
Disallow any further clicks on the game board
Display a play again button that resets the game
For a tie:
Alert players that game has ended in a tie
Display a play again button that resets the game*/
var turn = true;
var winners = [7, 21, 56, 60, 73, 84, 85, 92, 105, 146, 147, 178, 203, 273, 290, 292, 333, 448];
var xValue = 0;
var oValue = 0;
var total = 0; 
counter = 0;
// Alternate between x and o
function whosTurn() {
    // if counter is true it's O's turn
    if(turn === true) {
        oValue += parseInt(insertValue("O", this));
    if ( winners.indexOf( oValue ) > -1 ) {
        alert("We have a winner");
    }
        this.removeEventListener("click", whosTurn);
        this.lastChild.className = "stylingO"
        console.log("O = ", oValue);
        turn = false;
    } else {
        xValue += parseInt(insertValue("X", this));
        if ( winners.indexOf( xValue ) > -1 ) {
            alert("X is the winner");
        }
        insertValue("X", this)
        this.removeEventListener("click", whosTurn);
        this.lastChild.className = "stylingX"
        console.log("X = ", xValue);
        turn = true;
    }
    // 511 is total points
    if(xValue + oValue === 511 && counter <= 8) {
        alert("Game Over It's a Cat");
    }
}

// This takes in the turn value and applying it to that div
function insertValue(a, b) {
    b.lastChild.innerHTML = a;
    return document.getElementById(b.id).getAttribute("value");
}

// When user clicks a div eventListener is fired
for(var i = 0; i <= 8; i++) {
    document.getElementById(i).addEventListener("click", whosTurn);
}









