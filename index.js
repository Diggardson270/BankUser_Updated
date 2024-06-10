const navbar = document.querySelector("header");

window.onscroll = () => {
  if (window.scrollY > 100) {
    navbar.classList.add("bg-color-primary-dark");
    navbar.classList.add("border-b");
    navbar.classList.add("border-color-gray");
  } else {
    navbar.classList.remove("bg-color-primary-dark");
    navbar.classList.remove("border-b");
    navbar.classList.remove("border-color-gray");
  }
};

// hamburger Menu
const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hlink = document.querySelectorAll("#hlink");
const fasolid = document.querySelector(".fa-solid");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  fasolid.classList.toggle("fa-xmark");
});

hlink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    fasolid.classList.toggle("fa-xmark");
  });
});

//testimonials
const userTexts = document.getElementsByClassName("user-text");
const userPics = document.getElementsByClassName("user-pic");

function showReview() {
  for (userPic of userPics) {
    userPic.classList.remove("active-pic");
  }
  for (userText of userTexts) {
    userText.classList.remove("active-text");
  }

  // this will get the index of the clicked image then add the properties to that image
  let i = Array.from(userPics).indexOf(event.target);
  userPics[i].classList.add("active-pic");
  userTexts[i].classList.add("active-text");
}

const toggleBtn = document.getElementById("toggleBtn");

const card_1_front = document.querySelector("#card_1_front");
const card_1_back = document.querySelector("#card_1_back");

const card_2_front = document.querySelector("#card_2_front");
const card_2_back = document.querySelector("#card_2_back");

const card_3_front = document.querySelector("#card_3_front");
const card_3_back = document.querySelector("#card_3_back");

toggleBtn.addEventListener("change", () => {
  card_1_front.classList.toggle("-rotate-y-180");
  card_1_back.classList.toggle("rotate-y-180");

  card_2_front.classList.toggle("-rotate-y-180");
  card_2_back.classList.toggle("rotate-y-180");

  card_3_front.classList.toggle("-rotate-y-180");
  card_3_back.classList.toggle("rotate-y-180");
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTopButton");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopButton.classList.remove("hidden");
      scrollToTopButton.classList.add("opacity-100");
    } else {
      scrollToTopButton.classList.add("hidden");
      scrollToTopButton.classList.remove("opacity-100");
    }
  });

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
