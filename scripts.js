let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active"); // Remove active from all links
      });

      let activeLink = document.querySelector(".navbar a[href=#" + id + "]");
      if (activeLink) {
        activeLink.classList.add("active"); // Add active to current link
      }
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};
