import "./sideMenu.css";
import html from "./sideMenu.html?raw";

export function loadSideMenu(): HTMLElement {

    const template = document.createElement("template");
    template.innerHTML = html;

    const sideMenuContainer = template.content.firstElementChild as HTMLElement;


    const menu = sideMenuContainer.querySelector("#sideMenu");
    const overlay = sideMenuContainer.querySelector("#menuOverlay");


    document.addEventListener("toggleMenu", () => {

        menu?.classList.toggle("open");
        overlay?.classList.toggle("open");

    });


    overlay?.addEventListener("click", () => {

        menu?.classList.remove("open");
        overlay?.classList.remove("open");

    });


    return sideMenuContainer;
}