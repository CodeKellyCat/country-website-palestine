// Main Navigation Toggle
const hamburger = document.getElementById("nav-hamburger");
const links = document.getElementById("nav-links");

button.addEventListener('click', function() {
    links.classList.toggle('toggled');
})

// Thumb Navigation Toggle
const thumbButton = document.getElementById("thumb-nav-button");
const thumbLinks = document.getElementById("thumb-nav-secondary");

thumbButton.addEventListener('click', function() {
    thumbLinks.classList.toggle("toggled");
})