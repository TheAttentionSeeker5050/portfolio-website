export default function hamburgerMenuDisplay() {

    let optionsMenuElement = document.getElementById("nav-menu");
    // console.log(optionsMenuElement);
    optionsMenuElement.classList.remove("menu-big-screen");
    optionsMenuElement.classList.remove("flex-row");
    optionsMenuElement.classList.add("flex-column");
    optionsMenuElement.classList.add("menu-mobile");
}

