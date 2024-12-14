$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }

    });
});


$(document).ready(function () {
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typed-text", {
        strings: ["Web Developer", "Designer", "Creative Person","Coder","Student","Front-end Developer"],
        typeSpeed: 100,
        backSpeed: 25,
        backDelay: 1000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        smartBackspace: true,
    });
});

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
  // Existing typed.js configuration
  var typed = new Typed("#typed-text", {
    strings: ["Web Developer", "Designer", "Creative Person", "Coder", "Student", "Front-end Developer"],
    typeSpeed: 100,
    backSpeed: 25,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
    showCursor: true,
    smartBackspace: true,
  });

  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Mobile menu toggle
  const navToggle = document.getElementById('nav-toggle');
  const menuItems = document.querySelector('.menu-items');
  
  navToggle?.addEventListener('click', () => {
    menuItems.classList.toggle('active');
    navToggle.classList.toggle('active');
  });

  // Navbar background on scroll
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});

// Add smooth reveal animations for sections
const observerOptions = {
  threshold: 0.25
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Enhanced Animation Observer
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.fade-up, .fade-in, .slide-in-left, .slide-in-right, .scale-up, .zoom-in, .rotate-in, .flip-in, .bounce-in'
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Add continuous animations after element is visible
                if (entry.target.classList.contains('add-float')) {
                    entry.target.classList.add('float');
                }
                if (entry.target.classList.contains('add-pulse')) {
                    entry.target.classList.add('pulse');
                }
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '-50px'
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});