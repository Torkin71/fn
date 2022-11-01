// ==UserScript==
// @name         FlashNewfag
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Shows directly the seniority on the messages without having to check the profile.
// @author       Kaitor
// @match        https://www.jeuxvideo.com/forums/*
// @icon         https://image.noelshack.com/fichiers/2019/22/4/1559248774-generation-issou.png
// @grant        none
// ==/UserScript==

const doc = document.getElementsByClassName("bloc-message-forum mx-2 mx-lg-0");
console.log("FlashNewfag");
for(let i = 1;i < doc.length;i++) //faire une promesse
{
    console.log("boucle numéro " + i);
    let pseudo = doc[i - 1].getElementsByClassName("xXx bloc-pseudo-msg text-user")[0].textContent;
    const element = document.createElement("h5");
    let requete = new XMLHttpRequest();
    requete.open("GET",`http://www.example.org/example.txt`,true);
    requete.send();
    requete.onreadystatechange = () => {
    if(requete.readyState === 4){
    console.log("Requête terminée ! ");
    }else{
        console.log("pas encore");
    }
}
    doc[i - 1].appendChild(element);
}