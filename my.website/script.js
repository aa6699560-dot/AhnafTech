// Hero Button Click
document.querySelector(".btn").addEventListener("click", () => {
  alert("Thanks for showing interest! We'll contact you soon.");
});

// Smooth scrolling for nav links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});