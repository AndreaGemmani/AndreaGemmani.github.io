// Andrea Gemmani 27/12/2017 
// re: 16/12/2018 - 18/12/2018


// TODO:
// - manca ancora da implementare la parte di risoluzione che toglie fra i possibili
//   quelli che creerebbero situazioni impossibili su altri righe/colonne/3x3,
//   questa parte è già scritta in parte ed in maniera molto poco precisa 
//   in fondo alla func di soluz dei singoli quadratini 
// - aggiungere altri Sudoku da mettere in un Array da cui caricarli per partite random


// KNOWN ISSUES:
// 


// ALTRO:
// - per il resto direi che è quasi perfetto
// - dovrei mettere a posto le posizoni dei pulsanti non ottimali 
//   ed abbellirli magari ma nulla di importante 
// - potrei riscrivere la pusantiera in modo da mettere i pulsanti vicini alle loro func
// - rimettere testoStronzo = 0 in caso di release 
// - togliere log o aggiungere flag debug per abilitare log, rendere log più congruenti 




var Sudoku;

var dimS = 9; 	// numero righe (=> colonne) sudoku
var dimS2 = 3; 	// dimS2 = round(Math.sqrt(dimS)); // quadratini, se dimS = 9 => dimS2 = 3

var testoStronzo = 1;

function setup() {

	createCanvas(450, 450);


	Sudoku = new sudoku(dimS);
	pulsantiera = new PulsantieraSudoku();
	scrivitore = new ScrivitoreSudoku();

}

draw = function() {

	background(0);
	frameRate(10);

	Sudoku.mostra();
	scrivitore.mostra();

}



function touchStarted() {
	// if(scrivitore && scrivitore.controllaClick) 
	scrivitore.controllaClick();
	return false;
}
