import "./DropDownLogic/css/stylemenu.css";
import { removeItem, revealItem } from "./DropDownLogic/js/makeMenu";

(function start() {
  const menuButton = document.querySelector(".menuButton");
  const menu = document.querySelector(".dropDownMenu");
  menuButton.addEventListener("pointerover", (event) => {
    revealItem(event.target);
  });
  menu.addEventListener("pointerleave", (event) => {
    removeItem(event.target);
    event.stopPropagation();
});
})();
