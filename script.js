const menu = document.querySelector("#menu-bar");
const menuLinks = document.querySelector("#nav_menu");
const navLogo = document.querySelector("#nav_logo");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};
menu.addEventListener("click", mobileMenu);

// Adding 'Click Event' to menu items
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 961 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};
menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

// See more button
let seeMore = document.getElementById("see_more");
let init = 3;

seeMore.onclick = () => {
  let hiddenData = [...document.querySelectorAll(".work_section .work_wrapper .work_grid .work_card")];
  console.log('hiddenData:', hiddenData.length)
  for (var i = init; i < init + 3; i++) {
    hiddenData[i].style.display = "grid";

    // When last data occurs
    if (i == hiddenData.length - 1) {
      seeMore.style.display = "none";
      break;
    }
  }
  init += 3;
};


// For Slider
let index = 0;
function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  index++;
  if (index > slides.length) {
    index = 1
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[index-1].style.display = "block";  
  dots[index-1].className += " active";

  setTimeout(showSlides, 3000);
}
showSlides();