// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("darkModeToggle");
  const body = document.body;
  
// Lade Zustand aus localStorage
  if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    toggle.checked = true;
  }
  
  toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "disabled");
    }
   });
});

// Mobile Navigation Toggle
const navToggle = document.getElementById("navToggle");
const navList = document.getElementById("navList");

navToggle.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// Scroll to top
const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, 
    behavior: "smooth" 
  });
};

// JavaScript-Alert und Reset-Funktion für Formular implementiert
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault(); 
  alert("Vielen Dank für Ihre Nachricht!");
  this.reset(); 
});