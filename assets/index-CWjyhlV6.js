(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=new class{db;async init(){return new Promise((e,t)=>{let n=indexedDB.open(`MaBase`,1);n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(`test`)||e.createObjectStore(`test`,{keyPath:`id`,autoIncrement:!0})},n.onsuccess=()=>{this.db=n.result,e()},n.onerror=()=>t(n.error)})}async ajouter(e){return new Promise((t,n)=>{let r=this.db.transaction(`test`,`readwrite`);r.objectStore(`test`).add(e),r.oncomplete=()=>t(),r.onerror=()=>n(r.error)})}async getAll(){return new Promise((e,t)=>{let n=this.db.transaction(`test`,`readonly`).objectStore(`test`).getAll();n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}},t=`/appAVF/assets/menu-Dskea4ro.png`;async function n(){let e=await(await fetch(`/src/components/navbar/navbar.html`)).text(),n=document.createElement(`template`);n.innerHTML=e;let r=n.content.firstElementChild,i=r.querySelector(`img`);return i&&(i.src=t),r.querySelector(`#btnNavbar`)?.addEventListener(`click`,()=>{document.dispatchEvent(new CustomEvent(`toggleMenu`))}),r}var r=`<div class="sideMenuContainer">

    <aside id="sideMenu">
        <button class="menuItem">Accueil</button>
    <button class="menuItem">Profil</button>
    <button class="menuItem">Paramètres</button>

    </aside>

    <div id="menuOverlay"></div>

</div>`;function i(){let e=document.createElement(`template`);e.innerHTML=r;let t=e.content.firstElementChild,n=t.querySelector(`#sideMenu`),i=t.querySelector(`#menuOverlay`);return document.addEventListener(`toggleMenu`,()=>{n?.classList.toggle(`open`),i?.classList.toggle(`open`)}),i?.addEventListener(`click`,()=>{n?.classList.remove(`open`),i?.classList.remove(`open`)}),t}var a=`<div class="topBarContainer">

    <h1 id="miaou"> Miaou</h1>

</div>`;function o(){let e=document.createElement(`template`);return e.innerHTML=a,e.content.firstElementChild}async function s(){await e.init();let t=document.getElementById(`app`);t.appendChild(await n()),t.appendChild(await i()),t.appendChild(await o())}s();