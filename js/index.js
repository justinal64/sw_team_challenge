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
function createForm(divId) {
    var form = document.createElement('form');

    var header = document.createElement('h2');
    header.innerHTML = "This is a test";
    form.appendChild(header);

    var hiddenInput = document.createElement('input');
    hiddenInput.type = "textarea";
    hiddenInput.innerHTML = "This is a test";
    form.appendChild(hiddenInput);

    divId.innerHTML = form.innerHTML;


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

// onclick listener for create button
document.getElementById("create_new_card").addEventListener("click", function() {
    createCard();
    deleteListener();
    cardBackground();
    cardColor();
    a++;
});

// Event listener for the 3 divs (Task 2)
// Can this be condensed????
    document.getElementById("hidden_form_0").addEventListener("click", function() {
    var hidden_form_0 = document.getElementById("hidden_form_0");
    hiddenForm(hidden_form_0);

});

    document.getElementById("hidden_form_1").addEventListener("click", function() {
    var hidden_form_1 = document.getElementById("hidden_form_1");
    hiddenForm(hidden_form_1);

});

    document.getElementById("hidden_form_2").addEventListener("click", function() {
    var hidden_form_2 = document.getElementById("hidden_form_2");
    hiddenForm(hidden_form_2);

});



