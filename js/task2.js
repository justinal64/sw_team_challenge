// Event listener for the 3 divs (Task 2)
var counter = 0;

//Event Listeners for the 3 hidden forms
document.getElementById("hidden_form_0").addEventListener("click", hiddenForm);
document.getElementById("hidden_form_1").addEventListener("click", hiddenForm);
document.getElementById("hidden_form_2").addEventListener("click", hiddenForm);

// Checks to see if Div exist. If it does this removes the eventListener
function hiddenForm() {
    if(this.hasAttribute("style")) {
        this.removeEventListener("click", hiddenForm);
    } else {
        this.style.border = "5px solid black";
        createForm(this);
    }
}

function changeBackground(a,counter) {
    document.getElementById(a.id).addEventListener("click", function() {
        document.getElementById("hidden_form_" + counter).style.backgroundColor = document.getElementById("input_" + counter).value;
    });
}

function createForm(divId) {
    var form = document.createElement('form');

    var header = document.createElement('h2');
    header.innerHTML = "This is a test";
    form.appendChild(header);

    var hiddenInput = document.createElement('input');
    hiddenInput.type = "textarea";
    hiddenInput.id= "input_" + counter;
    hiddenInput.innerHTML = "This is a test";
    form.appendChild(hiddenInput);

    var hiddenButton = document.createElement('button');
    hiddenButton.type = "button";
    hiddenButton.innerHTML = "Submit";
    hiddenButton.id = "submit_" + counter;
    form.appendChild(hiddenButton);

    divId.innerHTML = form.innerHTML;

    var listener = document.getElementById("submit_" + counter);
    changeBackground(listener,counter);

    counter++;
}
