const menu = document.getElementById("menu-items");
const menuLinks = document.getElementsByClassName("menu-link");

document.getElementById("menu-overlay").onclick = function () {
    menu.classList.toggle("display")
}


document.getElementById("close").onclick = function () {
    menu.classList.toggle("display")
}


for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].onclick = function () {
        menu.classList.toggle("display")
    }
}
