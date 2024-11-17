// Main Navigation Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("toggled");
    console.log("click");
});
