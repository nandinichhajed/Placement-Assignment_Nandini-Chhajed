var debounceTimer;

function debounce(func, delay) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(func, delay);
}

function showMessage() {
    var messageContainer = document.getElementById("messageContainer");
    messageContainer.innerText =
        "Button clicked! Debouncing is applied to ensure only one click event is registered, even if the button is pressed multiple times rapidly.";
}

var button = document.getElementById("myButton");
button.addEventListener("click", function () {
    debounce(showMessage, 500);
});
