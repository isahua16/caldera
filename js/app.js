function open_nav() {
  let nav = document.querySelector(`#mobile_nav`);
  nav.style.padding = `20px 0px`;
  nav.style.visibility = `visible`;
  nav.style.opacity = `1`;
  nav.style.height = `200px`;
}

let menu = document.querySelector(`#menu_icon`);
menu.addEventListener(`click`, open_nav);
