import "./topBar.css";
import html from "./topBar.html?raw";

export function loadTopBar(): HTMLElement {

    const template = document.createElement("template");
    template.innerHTML = html;

    const topBarContainer = template.content.firstElementChild as HTMLElement;


    const miaou = topBarContainer.querySelector("#miaou");
    
    return topBarContainer;
}