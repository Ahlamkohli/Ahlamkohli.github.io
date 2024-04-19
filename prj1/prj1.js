$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }
    });

    function newDate() {
        return new Date().getFullYear();
    }

    document.getElementById("autodate").innerHTML = newDate();
});
// Toggle navigation menu on small screens
const menuToggle = document.querySelector('.hamburger-lines');
const menuItems = document.querySelector('.menu-items');

menuToggle.addEventListener('click', () => {
    menuItems.classList.toggle('show-menu');
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (message.trim() === '') {
        alert('Please enter a message.');
        return;
    }

    // Form is valid, you can submit it here
    alert('Form submitted successfully!');
    form.reset();
});
