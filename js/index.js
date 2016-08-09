// This variable is used to increment the number of the new_card id
var a = 0;
/*create a new card element in the DOM - similar to the quiz
and group project. You decide the height/width of the card.*/

var existingDiv = document.getElementById("new_card");


function createCard() {
    // Create the boilerplate for a new card
    var containerDiv = document.createElement('div');
    containerDiv.id = "new_card_" + a;
    containerDiv.style.width = "200px";
    containerDiv.style.height = "200px";
    containerDiv.style.border = "1px solid black";
    containerDiv.style.display = "inline-block";
    containerDiv.style.textAlign = "center";

    // Color input #1
    var color0 = document.createElement('input');
    color0.id = "card_color_" + a;
    color0.type = "color";
    color0.setAttribute("value", "#FFFF00");
    containerDiv.appendChild(color0);

    // Color input #2
    var color1 = document.createElement('input');
    color1.id = "color_" + (a + 1);
    color1.type = "color";
    color1.setAttribute("value", "#ff0000");
    containerDiv.appendChild(color1);

    // Create a button to delete the card
    var submit = document.createElement('button');
    submit.id = "delete_" + a;
    submit.innerHTML = "Delete";
    containerDiv.appendChild(submit);

    // random img
    var image = document.createElement('img');
    image.setAttribute("src", "img/blue_card.png");
    image.style.width = "100px";
    image.style.height = "100px";
    containerDiv.appendChild(image);

    // Sample text
    var sampleText = document.createElement('p');
    sampleText.innerHTML = "This is an example of sample text.";
    containerDiv.appendChild(sampleText);

    existingDiv.appendChild(containerDiv);

}

// Reveal a form with an input box and a button
// weird bug with the hidden input
// get the value from the input and set the evenetListener
function createForm(divId) {
    var form = document.createElement('form');

    var header = document.createElement('h2');
    header.innerHTML = "This is a test";
    form.appendChild(header);

    var hiddenInput = document.createElement('input');
    hiddenInput.type = "textarea";
    hiddenInput.innerHTML = "This is a test";
    form.appendChild(hiddenInput);

    var hiddenButton = document.createElement('button');
    hiddenButton.type = "button";
    hiddenButton.innerHTML = "Submit";
    hiddenButton.id = "submit";
    form.appendChild(hiddenButton);

    divId.innerHTML = form.innerHTML;

    document.getElementById("submit").addEventListener("click", function() {
        console.log("This is working");
    });
}

function hiddenForm(divId) {
    divId.style.border = "5px solid black";
    createForm(divId);

}

function cardBackground() {
    document.getElementById("card_color_" + a).addEventListener("input", function() {
        this.parentNode.style.background = this.value;
    });
}

function cardColor() {
    document.getElementById("color_" + (a + 1)).addEventListener("input", function() {
        this.parentNode.style.color = this.value;
    });
}

function deleteListener() {
    document.getElementById("delete_" + a).addEventListener("click", function() {
        this.parentNode.remove();
    });
}

// onclick listener for creating card
document.getElementById("create_new_card").addEventListener("click", function() {
    createCard();
    deleteListener();
    cardBackground();
    cardColor();
    a++;
});







