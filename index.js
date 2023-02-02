// Add smooth scrolling to navigation links
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const targetSection = document.querySelector(event.target.hash);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});



//navbar hide on scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

