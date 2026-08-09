(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{nom:`larmoiement de l'oeil`},{nom:`nez bouché`},{nom:`oreille bouchée`},{nom:`paupière tombante`},{nom:`paralysie faciale`},{nom:`sueur`},{nom:`nausées / vomissements`},{nom:`points lumineux devant les yeux`},{nom:`faim`},{nom:`picotements`},{nom:`engourdissement`},{nom:`transpiration`},{nom:`fatigue extrême`},{nom:`sensation de malaise / malaise`},{nom:`sensibilité à la lumière`},{nom:`sensibilité aux sons`},{nom:`sensibilité aux odeurs`}],t=[{nom:`foule`},{nom:`bruit`},{nom:`mauvais sommeil`},{nom:`fatigue`},{nom:`changement de température`},{nom:`stress`},{nom:`odeur forte`}],n=[{nom:`toujours présente`},{nom:`pression sur l'oeil`},{nom:`tête transpercée`},{nom:`oeil transpercé`},{nom:`douleur nuque`},{nom:`martèlement`},{nom:`lancinante`}],r=new class{db;async init(){return new Promise((r,i)=>{let a=indexedDB.open(`avfBase`,1);a.onupgradeneeded=()=>{let r=a.result;if(!r.objectStoreNames.contains(`symptomes`)){let t=r.createObjectStore(`symptomes`,{keyPath:`id`,autoIncrement:!0});e.forEach(e=>{t.add({nom:e.nom})})}if(!r.objectStoreNames.contains(`elementsDeclencheurs`)){let e=r.createObjectStore(`elementsDeclencheurs`,{keyPath:`id`,autoIncrement:!0});t.forEach(t=>{e.add({nom:t.nom})})}if(!r.objectStoreNames.contains(`typeDouleurs`)){let e=r.createObjectStore(`typeDouleurs`,{keyPath:`id`,autoIncrement:!0});n.forEach(t=>{e.add({nom:t.nom})})}},a.onsuccess=()=>{this.db=a.result,r()},a.onerror=()=>i(a.error)})}getDb(){return this.db}},i=`/appAVF/assets/menu-Dskea4ro.png`,a=`<header class="navbar">
    <button id="btnNavbar">
        <img alt="Menu">
    </button>
</header>`;async function o(){let e=document.createElement(`template`);e.innerHTML=a;let t=e.content.firstElementChild,n=t.querySelector(`img`);return n&&(n.src=i),t.querySelector(`#btnNavbar`)?.addEventListener(`click`,()=>{document.dispatchEvent(new CustomEvent(`toggleMenu`))}),t}var s=`<div class="sideMenuContainer">

    <aside id="sideMenu">
        <button class="menuItem" id="accueilBtn">Accueil</button>
        <button class="menuItem" id="profilBtn">Profil</button>
        <button class="menuItem" id="parametersBtn">Paramètres</button>

    </aside>

    <div id="menuOverlay"></div>

</div>`;function c(){let e=document.createElement(`template`);e.innerHTML=s;let t=e.content.firstElementChild,n=t.querySelector(`#sideMenu`),r=t.querySelector(`#menuOverlay`);document.addEventListener(`toggleMenu`,()=>{n?.classList.toggle(`open`),r?.classList.toggle(`open`)}),r?.addEventListener(`click`,()=>{n?.classList.remove(`open`),r?.classList.remove(`open`)});let i=t.querySelector(`#accueilBtn`),a=t.querySelector(`#profilBtn`),o=t.querySelector(`#parametersBtn`);return i.addEventListener(`click`,l),a.addEventListener(`click`,u),o.addEventListener(`click`,d),t}function l(){console.log(`accueil`)}function u(){console.log(`Profile`)}function d(){console.log(`Parameters`)}var f=`<div class="topBarContainer">
    <button class="topBar" id="importBtn">Importer données</button>
    <button class="topBar" id="exportBtn">Exporter données</button>
</div>`;function p(){let e=document.createElement(`template`);e.innerHTML=f;let t=e.content.firstElementChild,n=t.querySelector(`#importBtn`),r=t.querySelector(`#exportBtn`);return n.addEventListener(`click`,m),r.addEventListener(`click`,h),t}function m(){console.log(`Importer`)}function h(){console.log(`Exporter`)}var g=`<div class="mainPageContainer">
    <section class="topSection">
    </section>

    <section class="middleSection">
    </section>

    <section class="bottomSection">
        <button id="addEventBtn">Nouvel évènement</button>
    </section>
</div>`;function _(){let e=document.createElement(`template`);e.innerHTML=g;let t=e.content.firstElementChild;return t.querySelector(`#addEventBtn`).addEventListener(`click`,()=>{console.log(`open popup`),document.dispatchEvent(new CustomEvent(`openForm`))}),t}var v=`<div id="formContainer" class="hidden">
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
            <div class="formRow progressionDouleur">
                <label for="tipSelect">Progression de la douleur</label>

                <select id="progressionDouleur">
                    <option value="0">Brusque</option>
                    <option value="1">Progressive</option>
                    <option value="2">Douleur de fond</option>
                </select>
            </div>
        </div>

        <div class="popupButtons">
            <button id="cancelBtn">Annuler</button>
            <button id="validateBtn">Valider</button>
        </div>

    </div>
</div>`,y=new class{async getAll(){return new Promise((e,t)=>{let n=r.getDb().transaction(`symptomes`,`readonly`).objectStore(`symptomes`).getAll();n.onsuccess=()=>{e(n.result)},n.onerror=()=>{t(n.error)}})}async getById(e){return new Promise((t,n)=>{let i=r.getDb().transaction(`symptomes`,`readonly`).objectStore(`symptomes`).get(e);i.onsuccess=()=>{t(i.result)},i.onerror=()=>{n(i.error)}})}},b=`<div class="symptome-picker">
    <div class="symptome-picker-header">
        <div>
            <h2>Choisir les symptomes</h2>
        </div>
    </div>

    <div class="symptome-picker-list" id="symptome-list">
        <!-- Les symptome seront injectées ici -->
    </div>

    <div class="symptome-picker-actions">
        <button type="button" id="symptome-cancel" class="symptome-cancel">
            Annuler
        </button>

        <button type="button" id="symptome-validate" class="symptome-validate">
            Valider
        </button>
    </div>
</div>`;async function x(e){let t=await y.getAll();return new Promise(n=>{let r=document.createElement(`div`);r.className=`symptome-picker-overlay`,r.innerHTML=b,e.appendChild(r);let i=r.querySelector(`#symptome-list`),a=r.querySelector(`#symptome-validate`),o=r.querySelector(`#symptome-cancel`);if(!i||!a||!o){r.remove(),n({confirmed:!1,symptomeIdsList:[]});return}i.innerHTML=t.map(e=>`
                <label class="symptome-picker-item">
                    <input
                        class="symptome-picker-checkbox"
                        type="checkbox"
                        value="${e.id}"
                    >

                    <span class="symptome-picker-check"></span>

                    <span class="symptome-picker-name">
                        ${e.nom}
                    </span>
                </label>
            `).join(``),a.addEventListener(`click`,()=>{let e=r.querySelectorAll(`.symptome-picker-checkbox:checked`),t=Array.from(e).map(e=>Number(e.value));r.remove(),n({confirmed:!0,symptomeIdsList:t})}),o.addEventListener(`click`,()=>{r.remove(),n({confirmed:!1,symptomeIdsList:[]})})})}var S=0;async function C(){let e=document.createElement(`template`);e.innerHTML=v;let t=e.content.firstElementChild,n=t.querySelector(`#dateInput`);n.value=new Date().toISOString().split(`T`)[0];let r=t.querySelector(`#startHourOx`),i=t.querySelector(`#startMinuteOx`),a=t.querySelector(`#durationHourOx`),o=t.querySelector(`#durationMinuteOx`);E(r,0,23,1,`h`),E(i,0,55,5,``),E(a,0,24,1,`h`),E(o,0,55,5,``);let s=new Date;r.value=s.getHours().toString().padStart(2,`0`),i.value=`00`,a.value=`00`,o.value=`00`;let c=t.querySelector(`#startHourCrise`),l=t.querySelector(`#startMinuteCrise`),u=t.querySelector(`#durationHourCrise`),d=t.querySelector(`#durationMinuteCrise`);E(c,0,23,1,`h`),E(l,0,55,5,``),E(u,0,24,1,`h`),E(d,0,55,5,``),c.value=s.getHours().toString().padStart(2,`0`),l.value=`00`,u.value=`00`,d.value=`00`;let f=t.querySelector(`#oxygenCheckbox`),p=t.querySelector(`.oxygenElements`),m=t.querySelector(`#criseCheckbox`),h=t.querySelector(`.criseElements`);D(f,p),D(m,h),f.addEventListener(`change`,()=>{D(f,p),f.checked||O(t)}),m.addEventListener(`change`,()=>{D(m,h),m.checked||k(t)});let g=t.querySelectorAll(`.smiley`);g.forEach(e=>{e.addEventListener(`click`,()=>{g.forEach(e=>{e.classList.remove(`active`),e.classList.remove(`error`)}),e.classList.add(`active`),S=S=Number(e.dataset.value??0)})});let _=t.querySelector(`#cancelBtn`),y=t.querySelector(`#validateBtn`);return document.addEventListener(`openForm`,()=>{w(t)}),_.addEventListener(`click`,()=>{k(t),O(t),D(m,h),D(f,p),M(t),T(t)}),y.addEventListener(`click`,async()=>{let e=j(t);if(console.log(e),e){let{confirmed:e,symptomeIdsList:n}=await x(t.parentElement);if(!e)return;console.log(n),k(t),O(t),D(m,h),D(f,p),M(t),T(t)}}),t.querySelectorAll(`input, select, textarea`).forEach(e=>{e.addEventListener(`input`,()=>{e.classList.remove(`error`)}),e.addEventListener(`change`,()=>{e.classList.remove(`error`)})}),t}function w(e){e.classList.remove(`hidden`)}function T(e){e.classList.add(`hidden`)}function E(e,t,n,r,i){for(let a=t;a<=n;a+=r){let t=a.toString().padStart(2,`0`),n=document.createElement(`option`);n.value=t,n.textContent=i?`${t} ${i}`:t,e.appendChild(n)}}function D(e,t){let n=t.querySelectorAll(`input, select, button`);function r(){n.forEach(t=>{t.disabled=!e.checked}),t.classList.toggle(`disabled`,!e.checked)}r()}function O(e){let t=e.querySelector(`#startHourOx`),n=e.querySelector(`#startMinuteOx`),r=e.querySelector(`#durationHourOx`),i=e.querySelector(`#durationMinuteOx`);t.value=new Date().getHours().toString().padStart(2,`0`),n.value=`00`,r.value=`00`,i.value=`00`;let a=e.querySelector(`#oxygenCheckbox`);a.checked=!1}function k(e){let t=e.querySelector(`#startHourCrise`),n=e.querySelector(`#startMinuteCrise`),r=e.querySelector(`#durationHourCrise`),i=e.querySelector(`#durationMinuteCrise`);t.value=new Date().getHours().toString().padStart(2,`0`),n.value=`00`,r.value=`00`,i.value=`00`,e.querySelectorAll(`.smiley`).forEach(e=>{e.classList.remove(`active`)}),S=0;let a=e.querySelector(`#medecineSelect`);a.value=`0`;let o=e.querySelector(`#progressionDouleur`);o.value=`0`;let s=e.querySelector(`#criseCheckbox`);s.checked=!1}function A(e){if(!e)return!1;let t=new Date(e);return!isNaN(t.getTime())&&t>=new Date(2026,0,1)&&t<=new Date}function j(e){let t=!0;e.querySelectorAll(`.error`).forEach(e=>e.classList.remove(`error`));let n=e.querySelector(`#dateInput`);A(n.value)||(n.classList.add(`error`),t=!1);let r=e.querySelector(`#oxygenCheckbox`),i=e.querySelector(`#criseCheckbox`);if(r.checked&&t){let n=e.querySelector(`#startHourOx`),r=e.querySelector(`#startMinuteOx`),i=e.querySelector(`#durationHourOx`),a=e.querySelector(`#durationMinuteOx`),o=Number(n.value),s=Number(r.value),c=Number(i.value),l=Number(a.value);c===0&&l===0&&(i.classList.add(`error`),a.classList.add(`error`),t=!1);let u=new Date,d=new Date;d.setHours(o,s,0,0),d>u&&(n.classList.add(`error`),r.classList.add(`error`),t=!1)}if(i.checked&&t){let n=e.querySelector(`#startHourCrise`),r=e.querySelector(`#startMinuteCrise`),i=e.querySelector(`#durationHourCrise`),a=e.querySelector(`#durationMinuteCrise`),o=Number(n.value),s=Number(r.value),c=Number(i.value),l=Number(a.value);c===0&&l===0&&(i.classList.add(`error`),a.classList.add(`error`),t=!1);let u=new Date,d=new Date;d.setHours(o,s,0,0),d>u&&(n.classList.add(`error`),r.classList.add(`error`),t=!1),S==0&&e.querySelectorAll(`.smiley`).forEach(e=>{e.classList.add(`error`)})}return t&&(i.checked||r.checked)}function M(e){e.querySelectorAll(`.error`).forEach(e=>{e.classList.remove(`error`)})}async function N(){await r.init();let e=document.getElementById(`app`);e.appendChild(await o()),e.appendChild(await c()),e.appendChild(await p()),e.appendChild(await _()),e.appendChild(await C())}N();