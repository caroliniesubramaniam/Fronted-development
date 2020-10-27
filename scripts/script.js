// variablen:
//darkmode
var darkmodeKnop = document.querySelector('#darkmode');
var bodyElement = document.querySelector('body');

//globale declaraties
// darkmode functie
function nightmodeKnop(event) {
    bodyElement.classList.toggle('darkmode');
    // darkmodeKnop.textContent = "Change to lightmode";
}

//eventlisteners 
//darkmode
darkmodeKnop.addEventListener('click', nightmodeKnop );
