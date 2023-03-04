


// import scripts
import {codeAnimation} from './scripts/code_animation.js';
import hamburgerMenuDisplay from './scripts/hamburger_menu.js';
import hamburgerMenuNotDisplay from './scripts/hamburger_menu_not_display.js';

let codeAnimationIndex = 0;
const CODE_ANIMATION_LENGHT = 30;

function main() {

    document.getElementsByTagName("main").item(0).addEventListener("click", hamburgerMenuNotDisplay);
    document.getElementById("p-footer").addEventListener("click", hamburgerMenuNotDisplay);
    document.getElementById("menu-icon-container").addEventListener("click", hamburgerMenuDisplay);


}

main()