import "./navbar.css";
import menuImage from "../../assets/menu.png";

export async function loadNavbar(): Promise<HTMLElement> {

    const response = await fetch("/src/components/navbar/navbar.html");
    const html = await response.text();

    const template = document.createElement("template");
    template.innerHTML = html;

    const navbar = template.content.firstElementChild as HTMLElement;


    const img = navbar.querySelector("img");

    if (img) {
        img.src = menuImage;
    }


    navbar.querySelector("#btnNavbar")?.addEventListener("click", () => {
        document.dispatchEvent(new CustomEvent("toggleMenu"));

    });


    return navbar;
}