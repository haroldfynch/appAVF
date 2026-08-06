(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=new class{db;async init(){return new Promise((e,t)=>{let n=indexedDB.open(`MaBase`,1);n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(`test`)||e.createObjectStore(`test`,{keyPath:`id`,autoIncrement:!0})},n.onsuccess=()=>{this.db=n.result,e()},n.onerror=()=>t(n.error)})}async ajouter(e){return new Promise((t,n)=>{let r=this.db.transaction(`test`,`readwrite`);r.objectStore(`test`).add(e),r.oncomplete=()=>t(),r.onerror=()=>n(r.error)})}async getAll(){return new Promise((e,t)=>{let n=this.db.transaction(`test`,`readonly`).objectStore(`test`).getAll();n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)})}},t=`/appAVF/assets/menu-Dskea4ro.png`,n=`<header class="navbar">
    <button id="btnNavbar">
        <img alt="Menu">
    </button>
</header>`;async function r(){let e=document.createElement(`template`);e.innerHTML=n;let r=e.content.firstElementChild,i=r.querySelector(`img`);return i&&(i.src=t),r.querySelector(`#btnNavbar`)?.addEventListener(`click`,()=>{document.dispatchEvent(new CustomEvent(`toggleMenu`))}),r}var i=`<div class="sideMenuContainer">

    <aside id="sideMenu">
        <button class="menuItem" id="accueilBtn">Accueil</button>
        <button class="menuItem" id="profilBtn">Profil</button>
        <button class="menuItem" id="parametersBtn">Paramètres</button>

    </aside>

    <div id="menuOverlay"></div>

</div>`;function a(){let e=document.createElement(`template`);e.innerHTML=i;let t=e.content.firstElementChild,n=t.querySelector(`#sideMenu`),r=t.querySelector(`#menuOverlay`);document.addEventListener(`toggleMenu`,()=>{n?.classList.toggle(`open`),r?.classList.toggle(`open`)}),r?.addEventListener(`click`,()=>{n?.classList.remove(`open`),r?.classList.remove(`open`)});let a=t.querySelector(`#accueilBtn`),l=t.querySelector(`#profilBtn`),u=t.querySelector(`#parametersBtn`);return a.addEventListener(`click`,o),l.addEventListener(`click`,s),u.addEventListener(`click`,c),t}function o(){console.log(`accueil`)}function s(){console.log(`Profile`)}function c(){console.log(`Parameters`)}var l=`<div class="topBarContainer">
    <button class="topBar" id="importBtn">Importer données</button>
    <button class="topBar" id="exportBtn">Exporter données</button>
</div>`;function u(){let e=document.createElement(`template`);e.innerHTML=l;let t=e.content.firstElementChild,n=t.querySelector(`#importBtn`),r=t.querySelector(`#exportBtn`);return n.addEventListener(`click`,d),r.addEventListener(`click`,f),t}function d(){console.log(`Importer`)}function f(){console.log(`Exporter`)}var p=`<div class="mainPageContainer">
    <section class="topSection">
    </section>

    <section class="middleSection">
    </section>

    <section class="bottomSection">
        <button id="addEventBtn">Nouvel évènement</button>
    </section>
</div>`;function m(){let e=document.createElement(`template`);e.innerHTML=p;let t=e.content.firstElementChild;return t.querySelector(`#addEventBtn`).addEventListener(`click`,()=>{console.log(`open popup`),document.dispatchEvent(new CustomEvent(`openForm`))}),t}var h=`<div id="formContainer" class="hidden">
    <div id="popup">
        <h2> Nouvel Evènement </h2>

        <div class="dateElement">
            <label for="dateInput">Date :</label>
            <input id="dateInput" type="date">
        </div>

        <div class="formRow oxygene">
            <label class="checkboxLabel">
                Oxygène: 
                <input type="checkbox" id="oxygenCheckbox">

            </label>
        </div>
        <div class="oxygenElements">
            <div class="formRow oxStartHour">
                <label>Heure de début: </label>
                <div class="timeSelector">
                    <select id="startHourOx"></select>
                    <span>:</span>
                    <select id="startMinuteOx"></select>
                </div>
            </div>

            <div class="formRow oxTime">
                <label>Durée: </label>

                <div class="timeSelector">
                    <select id="durationHourOx"></select>
                    <span>:</span>
                    <select id="durationMinuteOx"></select>
                </div>
            </div>
        </div>

        

        <div class="formRow crise">
            <label class="checkboxLabel">
                Crise: 
                <input type="checkbox" id="criseCheckbox">

            </label>
        </div>
        <div class="criseElements">
            <div class="formRow criseStartHour">
                <label>Heure de début: </label>
                <div class="timeSelector">
                    <select id="startHourCrise"></select>
                    <span>:</span>
                    <select id="startMinuteCrise"></select>
                </div>
            </div>

            <div class="formRow criseTime">
                <label>Durée: </label>

                <div class="timeSelector">
                    <select id="durationHourCrise"></select>
                    <span>:</span>
                    <select id="durationMinuteCrise"></select>
                </div>
            </div>

            <div class="formRow criseIntensity">
                <label>Intensité</label>

                <div class="smileyContainer">

                    <button class="smiley" data-value="1">😐</button>
                    <button class="smiley" data-value="2">😢</button>
                    <button class="smiley" data-value="3">😭</button>
                    <button class="smiley" data-value="4">💀</button>

                </div>
            </div>

            <div class="formRow criseMedecine">
                <label for="tipSelect">Injection</label>

                <select id="medecineSelect">
                    <option value="0">Aucune</option>
                    <option value="1">Imiject</option>
                    <option value="2">Sumatriptan Sun</option>
                </select>
            </div>
        </div>

        <div class="popupButtons">
            <button id="cancelBtn">Annuler</button>
            <button id="validateBtn">Valider</button>
        </div>

    </div>
</div>`,g=0;function _(){let e=document.createElement(`template`);e.innerHTML=h;let t=e.content.firstElementChild,n=t.querySelector(`#dateInput`);n.value=new Date().toISOString().split(`T`)[0];let r=t.querySelector(`#startHourOx`),i=t.querySelector(`#startMinuteOx`),a=t.querySelector(`#durationHourOx`),o=t.querySelector(`#durationMinuteOx`);b(r,0,23,1,`h`),b(i,0,55,5,``),b(a,0,24,1,`h`),b(o,0,55,5,``);let s=new Date;r.value=s.getHours().toString().padStart(2,`0`),i.value=`00`,a.value=`00`,o.value=`00`;let c=t.querySelector(`#startHourCrise`),l=t.querySelector(`#startMinuteCrise`),u=t.querySelector(`#durationHourCrise`),d=t.querySelector(`#durationMinuteCrise`);b(c,0,23,1,`h`),b(l,0,55,5,``),b(u,0,24,1,`h`),b(d,0,55,5,``),c.value=s.getHours().toString().padStart(2,`0`),l.value=`00`,u.value=`00`,d.value=`00`;let f=t.querySelector(`#oxygenCheckbox`),p=t.querySelector(`.oxygenElements`),m=t.querySelector(`#criseCheckbox`),_=t.querySelector(`.criseElements`);x(f,p),x(m,_),f.addEventListener(`change`,()=>{x(f,p),f.checked||S(t)}),m.addEventListener(`change`,()=>{x(m,_),m.checked||C(t)});let w=t.querySelectorAll(`.smiley`);w.forEach(e=>{e.addEventListener(`click`,()=>{w.forEach(e=>{e.classList.remove(`active`),e.classList.remove(`error`)}),e.classList.add(`active`),g=g=Number(e.dataset.value??0)})});let D=t.querySelector(`#cancelBtn`),O=t.querySelector(`#validateBtn`);return document.addEventListener(`openForm`,()=>{v(t)}),D.addEventListener(`click`,()=>{C(t),S(t),x(m,_),x(f,p),E(t),y(t)}),O.addEventListener(`click`,()=>{let e=T(t);console.log(e),e&&(C(t),S(t),x(m,_),x(f,p),E(t),y(t))}),t.querySelectorAll(`input, select, textarea`).forEach(e=>{e.addEventListener(`input`,()=>{e.classList.remove(`error`)}),e.addEventListener(`change`,()=>{e.classList.remove(`error`)})}),t}function v(e){e.classList.remove(`hidden`)}function y(e){e.classList.add(`hidden`)}function b(e,t,n,r,i){for(let a=t;a<=n;a+=r){let t=a.toString().padStart(2,`0`),n=document.createElement(`option`);n.value=t,n.textContent=i?`${t} ${i}`:t,e.appendChild(n)}}function x(e,t){let n=t.querySelectorAll(`input, select, button`);function r(){n.forEach(t=>{t.disabled=!e.checked}),t.classList.toggle(`disabled`,!e.checked)}r()}function S(e){let t=e.querySelector(`#startHourOx`),n=e.querySelector(`#startMinuteOx`),r=e.querySelector(`#durationHourOx`),i=e.querySelector(`#durationMinuteOx`);t.value=new Date().getHours().toString().padStart(2,`0`),n.value=`00`,r.value=`00`,i.value=`00`;let a=e.querySelector(`#oxygenCheckbox`);a.checked=!1}function C(e){let t=e.querySelector(`#startHourCrise`),n=e.querySelector(`#startMinuteCrise`),r=e.querySelector(`#durationHourCrise`),i=e.querySelector(`#durationMinuteCrise`);t.value=new Date().getHours().toString().padStart(2,`0`),n.value=`00`,r.value=`00`,i.value=`00`,e.querySelectorAll(`.smiley`).forEach(e=>{e.classList.remove(`active`)}),g=0;let a=e.querySelector(`#medecineSelect`);a.value=`0`;let o=e.querySelector(`#criseCheckbox`);o.checked=!1}function w(e){if(!e)return!1;let t=new Date(e);return!isNaN(t.getTime())&&t>=new Date(2026,0,1)&&t<=new Date}function T(e){let t=!0;e.querySelectorAll(`.error`).forEach(e=>e.classList.remove(`error`));let n=e.querySelector(`#dateInput`);w(n.value)||(n.classList.add(`error`),t=!1);let r=e.querySelector(`#oxygenCheckbox`),i=e.querySelector(`#criseCheckbox`);if(r.checked&&t){let n=e.querySelector(`#startHourOx`),r=e.querySelector(`#startMinuteOx`),i=e.querySelector(`#durationHourOx`),a=e.querySelector(`#durationMinuteOx`),o=Number(n.value),s=Number(r.value),c=Number(i.value),l=Number(a.value);c===0&&l===0&&(i.classList.add(`error`),a.classList.add(`error`),t=!1);let u=new Date,d=new Date;d.setHours(o,s,0,0),d>u&&(n.classList.add(`error`),r.classList.add(`error`),t=!1)}if(i.checked&&t){let n=e.querySelector(`#startHourCrise`),r=e.querySelector(`#startMinuteCrise`),i=e.querySelector(`#durationHourCrise`),a=e.querySelector(`#durationMinuteCrise`),o=Number(n.value),s=Number(r.value),c=Number(i.value),l=Number(a.value);c===0&&l===0&&(i.classList.add(`error`),a.classList.add(`error`),t=!1);let u=new Date,d=new Date;d.setHours(o,s,0,0),d>u&&(n.classList.add(`error`),r.classList.add(`error`),t=!1),g==0&&e.querySelectorAll(`.smiley`).forEach(e=>{e.classList.add(`error`)})}return t&&(i.checked||r.checked)}function E(e){e.querySelectorAll(`.error`).forEach(e=>{e.classList.remove(`error`)})}async function D(){await e.init();let t=document.getElementById(`app`);t.appendChild(await r()),t.appendChild(await a()),t.appendChild(await u()),t.appendChild(await m()),t.appendChild(await _())}D();