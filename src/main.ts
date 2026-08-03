import db from "./services/db";
import { loadNavbar } from "./components/navbar/navbar";
import { loadSideMenu } from "./components/sideMenu/sideMenu";
import { loadTopBar } from "./components/topBar/topBar";


/*async function remplir() {

    await db.ajouter({
        titre: "Premier",
        contenu: "Contenu du premier"
    });

    await db.ajouter({
        titre: "Deuxième",
        contenu: "Contenu du deuxième"
    });

    await db.ajouter({
        titre: "Troisième",
        contenu: "Contenu du troisième"
    });

    afficher();

}

async function afficher() {

    const tbody = document.getElementById("tbody")!;

    tbody.innerHTML = "";

    const elements = await db.getAll();

    elements.forEach(e => {

        tbody.innerHTML += `
            <tr>
                <td>${e.titre}</td>
                <td>${e.contenu}</td>
            </tr>
        `;

    });

}*/

async function main() {

    await db.init();
    const app = document.getElementById("app")!;


    app.appendChild(await loadNavbar());
    app.appendChild(await loadSideMenu());
    app.appendChild(await loadTopBar());

    /*afficher();

    document
        .getElementById("btnInit")!
        .addEventListener("click", remplir);*/

}

main();