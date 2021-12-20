/*
    faccio una select con 3 opzioni
    event listener click per generare la griglia
    genero una casella a ripetizione
    dentro i numeri relativi
    easy 10x10 medium 9x9 hard 7x7
    al click cambia colore delle caselle

*/

//faccio scegliere all'utente il livello di difficoltà alla quale vuole giocare
let pulsanteScelta = document.getElementById("levelchoice");

pulsanteScelta.addEventListener("click", function(){
    let difficoltaScelta = document.getElementById("difficult");
    let difficolta = difficoltaScelta.value;

    let campoMinatoBox = "";

    for (i=0; i<difficolta; i++){
        campoMinatoBox += `
        <div id="minesweeper-box" class="col- ms_minesweeper-box-${difficolta} d-flex justify-content-center align-items-center">
            ${i + 1}          
        </div>
        `;
    }
        
    const creaBox = document.getElementById("minesweeper-grid");
    creaBox.innerHTML = campoMinatoBox;

    let casellaScelta = document.getElementById("minesweeper-box");
    casellaScelta.addEventListener("click", function(){
        casellaScelta.classList.add('ms_select-box');
    })
});



