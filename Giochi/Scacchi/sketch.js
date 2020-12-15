// Andrea Gemmani 11/3/2018
// GitHub Gimmmy97	https://github.com/Gimmmy97

// refactor 11/5/2019


// https://it.wikipedia.org/wiki/Notazione_algebrica
// https://it.wikipedia.org/wiki/Arrocco






// COSUCCIE:

// posso mettere frameRate diversi per i diversi mostra cose, 
// basso per i pezzi, alto per quelli del puntatore (?) 			NOPE

// reset partita con IA incula tutto


// riordinare mosse possibili(?)


// validity checks su funzioni dei pezzi che siano usate dai pezzi giusti



var s;
var ia;
var pulsantiera;
var sposta;
var coll;
var tracker;


var testoStronzo = 0;
var enableIAg = false;


function preload() {
	caricatorePezzi();
}

function setup() {

	// createCanvas(600, 600);
	createCanvas(450, 450);
	// createCanvas(400, 400);

	s = new Scacchiera(width/8);
	s.calcolaPosPezzi(); // è necessario farlo qua, fuori dalla libreria perchè ha necessità
	// di usare s. che però ancora non esiste se constructor non è consluso
	// spero di trovare una soluzione più carina prima o poi 

	
	// ia = new ChessIA(0,1,0);
	// ia = new ChessIA(0,0,1);

	ia = new ChessIA(1,1,0);
	pulsantiera = new PulsantieraScacchi();
	sposta = new SpostaScacchi();

	coll = new CollectorMappe();
	tracker = new TracciaMosse();


	// frameRate(0.5);
	// frameRate(30);
	frameRate(5);

}

draw = function() {



	// if(frameCount % 30 == 0) {

		background(0);
		
		if(ia != undefined && enableIAg) {
			ia.gioca();
		}

		s.mostra();

	// }



	sposta.mostra();

}


