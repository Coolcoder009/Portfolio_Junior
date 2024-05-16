'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
// Array of 10 quotes
const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Wish it. Do it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger."
];

// Function to display a random quote in an alert
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  alert(quotes[randomIndex]);
}

// Event listener for the button click
document.getElementById("quoteButton").addEventListener("click", displayRandomQuote);


const form=document.querySelector('form');

