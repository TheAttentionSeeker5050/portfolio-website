
export default function hamburgerMenuNotDisplay() {

    let optionsMenuElement = document.getElementById("nav-menu");
    // console.log(optionsMenuElement);
    optionsMenuElement.classList.add("menu-big-screen");
    optionsMenuElement.classList.add("flex-row");
    optionsMenuElement.classList.remove("flex-column");
    optionsMenuElement.classList.remove("menu-mobile");
}