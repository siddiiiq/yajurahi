// Get references to the buttons and message element
const yesButton = document.getElementById('yesBtn');
const noButton = document.getElementById('noBtn');
const responseText = document.getElementById('responseText');

// Event listener for the "Yes" button
yesButton.addEventListener('click', function() {
    responseText.innerHTML = "Well, that's true, now press no ❤️!";
    noButton.disabled = true; // Disable the "No" button
});

// Event listener for the "No" button
noButton.addEventListener('click', function() {
    responseText.innerHTML = "Why'd you press No? Press Yes.";
});
