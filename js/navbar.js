const toggleBtn = document.getElementsByClassName("toggle-btn")[0];

const navBarLinks = document.getElementsByClassName("navbar-links")[0];

toggleBtn.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});
