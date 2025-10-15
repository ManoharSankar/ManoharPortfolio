// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// Animate skill bars
window.addEventListener("DOMContentLoaded", () => {
  const fills = document.querySelectorAll(".skill-fill");
  fills.forEach((fill) => {
    const width = fill.style.width;
    fill.style.width = "0";
    setTimeout(() => {
      fill.style.width = width;
    }, 300);
  });
});

// Smooth scroll
document.querySelectorAll("nav#navbar a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });

    // Close mobile menu after clicking
    navLinks.classList.remove("show");
  });
});

// Hamburger Menu
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
