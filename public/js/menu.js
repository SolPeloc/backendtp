/*JS*/
/*Menu*/
let btnMenu = document.querySelector(".label_menu");

const menu = () => {
  btnMenu.addEventListener("click", () => {
    let nav = document.querySelector(".menu");

    nav.classList.toggle("active_menu");
  });
};
menu(); 