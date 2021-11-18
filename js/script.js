const hamburger = document.querySelector(".hambuger");
const navList = document.querySelector(".nav-list");
hamburger.addEventListener("click", () => {
  navList.classList.toggle('show')
});
