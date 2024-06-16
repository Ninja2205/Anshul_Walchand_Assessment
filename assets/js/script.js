'use strict';


// Preloader
const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



// General
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

// JS for Read More and Read Less Functionality
document.addEventListener('DOMContentLoaded', function() {
  const productInfos = document.querySelectorAll('.product-info');
  
  productInfos.forEach(productInfo => {
      const productShortDescription = productInfo.querySelector('.product-short-description');
      const moreText = productShortDescription.querySelector('.more-text');
      const readMoreLink = productShortDescription.querySelector('.read-more');
      const readLessLink = document.createElement('a');
      
      readLessLink.textContent = 'Read Less';
      readLessLink.className = 'read-less';
      readLessLink.style.display = 'none';
      
      readMoreLink.addEventListener('click', function(e) {
          e.preventDefault();
          moreText.style.display = 'inline';
          readMoreLink.style.display = 'none';
          readLessLink.style.display = 'inline';
      });
      
      readLessLink.addEventListener('click', function(e) {
          e.preventDefault();
          moreText.style.display = 'none';
          readMoreLink.style.display = 'inline';
          readLessLink.style.display = 'none';
      });
      
      productShortDescription.appendChild(readLessLink);
  });
});






// JS for Back to Header
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
let lastScrollPos = 0;
const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


const parallaxItems = document.querySelectorAll("[data-parallax-item]");
let x, y;
window.addEventListener("mousemove", function (event) {

  x = (event.clientX / window.innerWidth * 10) - 5;
  y = (event.clientY / window.innerHeight * 10) - 5;

  x = x - (x * 2);
  y = y - (y * 2);

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }

});
