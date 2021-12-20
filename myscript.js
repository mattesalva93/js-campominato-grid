/*
    faccio una select con 3 opzioni
    event listener click per generare la griglia
    genero una casella a ripetizione
    dentro i numeri relativi
    easy 10x10 medium 9x9 hard 7x7
    al click cambia colore delle caselle

*/

//creo una funzione che crei una casella basata sul numero che le inserisco
function creaCasella (livelloDifficolta){
    let campoMinatoBox = "";

    for (i=0; i<livelloDifficolta; i++){
        if (livelloDifficolta == 100){
        campoMinatoBox += `
        <div id="minesweeper-box" class="col- ms_minesweeper-box-100 d-flex justify-content-center align-items-center">
            ${i + 1}          
        </div>
        `;
    }else if (livelloDifficolta == 81){
        campoMinatoBox += `
        <div id="minesweeper-box" class="col- ms_minesweeper-box-81 d-flex justify-content-center align-items-center">
            ${i + 1}          
        </div>
        `;
    }else if (livelloDifficolta == 49){
        campoMinatoBox += `
        <div id="minesweeper-box" class="col- ms_minesweeper-box-49 d-flex justify-content-center align-items-center">
            ${i + 1}          
        </div>
        `;
    }
    }
        
    const creaBox = document.getElementById("minesweeper-grid");
    creaBox.innerHTML = campoMinatoBox;
};

//faccio scegliere all'utente il livello di difficoltà alla quale vuole giocare

let pulsanteScelta = document.getElementById("levelchoice");

pulsanteScelta.addEventListener("click", function(){
    let difficoltaScelta = document.getElementById("difficult");
    let difficolta = difficoltaScelta.value;
    console.log(difficolta);

    creaCasella(difficolta);

    
});



