import "./DropDownLogic/css/stylemenu.css";
import { removetext, revealtext } from "./DropDownLogic/js/makeMenu";
// import { removeItem, revealItem } from "./DropDownLogic/js/makeMenu";
// (function start() {
//   const menuButton = document.querySelector(".menuButton");
//   const menu = document.querySelector(".dropDownMenu");
//   menuButton.addEventListener("pointerover", (event) => {
//     revealItem(event.target);
//   });
//   menu.addEventListener("pointerleave", (event) => {
//     removeItem(event.target);
//     event.stopPropagation();
// });
// })();

//  hover event using JS

(function start() {
     const menuButton = document.querySelector(".menuButton");
    const menu = document.querySelector(".dropDownMenu");
     const dropDownItemDescription = Array.from(
    document.querySelectorAll(".dropDownItemDescription"),
  );
  dropDownItemDescription.forEach((value) =>
    value.setAttribute("style", "display:none"),
  );
  menuButton.addEventListener("pointerover",()=>{
    setTimeout(revealtext, 400);
  })
  menu.addEventListener("pointerleave", () => {
    removetext();
  });
})();
