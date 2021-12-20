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
        campoMinatoBox += `
        <div class="col- text-center ms_minesweeper-box">
            ${i + 1}          
        </div>
        `;
    }
        
    const creaBox = document.getElementById("minesweeper-grid");
    creaBox.innerHTML = campoMinatoBox;
};




