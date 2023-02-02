// Add smooth scrolling to navigation links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetSection = document.querySelector(event.target.hash);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});



