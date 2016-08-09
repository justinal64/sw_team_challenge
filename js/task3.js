// When the button is clicked, make the div double in size, and change the color from red to blue.
// After 3 seconds, make the div revert to its original size and color.

function defaultStyling() {
    document.getElementById("doubleSize").id = "basic"
}

document.getElementById("double").addEventListener("click", function() {
    this.parentElement.id = "doubleSize";
    var removeStyling = setTimeout(defaultStyling, 3000);
});

