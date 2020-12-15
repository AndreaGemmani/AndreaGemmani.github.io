
// necessarieo scrivere func prima che vengano legate ai pulsanti

var PulsantieraScacchi = function() {


// 	this.randomFunction = function() {
// 		Sudoku.nuovoRandom();
// 		// Sudoku.testP(1);
// 	}

// 	this.sudokuVuoto = function() {
// 		Sudoku.nuovoRandom("vuoto");
// 	}

// 	// this.mettiUnoFunction = function() {
// 	// 	Sudoku.testP(6);
// 	// }

// 	this.risolviFunction = function() {
// 		Sudoku.risolvi();
// 	}

// 	this.testoStronzoFunction = function() {
// 		testoStronzo = !testoStronzo;
// 	}

// 	this.clearSolFunction = function() {
// 		Sudoku.clearSoluzione();
// 	}

// 	this.controllaSolFunction = function() {
// 		Sudoku.controllaErrori();
// 	}

// 	this.mostraPossFunction = function() {
// 		Sudoku.mostraTuttiPossibiliFlag = ! Sudoku.mostraTuttiPossibiliFlag;
// 	}



// 	this.scriviUno = function() {
// 		scrivitore.cambiaCorrente(1);
// 	}

// 	this.scriviDue = function() {
// 		scrivitore.cambiaCorrente(2);
// 	}

// 	this.scriviTre = function() {
// 		scrivitore.cambiaCorrente(3);
// 	}

// 	this.scriviQat = function() {
// 		scrivitore.cambiaCorrente(4);

// 	}

// 	this.scriviCin = function() {
// 		scrivitore.cambiaCorrente(5);
// 	}

// 	this.scriviSei = function() {
// 		scrivitore.cambiaCorrente(6);
// 	}

// 	this.scriviSet = function() {
// 		scrivitore.cambiaCorrente(7);
// 	}


	this.nuovaPartita = function() {
		// setup();
		s.nuovaPartita();
		s.calcolaPosPezzi();
		s.controlloMosse();
		// setup();
		ia = new ChessIA(1,1,0);
	}

	this.caricaMappa = function(n) {
		s.nuovaPartita(n);
	}

	this.controlloMosse = function() {
		s.controlloMosse();
		// console.log("puls moss")
	}

	this.enIa = function() {
		enableIAg = ! enableIAg;
	}

	this.nomeCas = function() {
		sposta.flagMostra = ! sposta.flagMostra;
	}

	this.mostraPox = function() {
		s.flagMostraPox = ! s.flagMostraPox;
	}

	this.nextPoxN = function() {
		s.mostraPossibiliNero();
	}

	this.nextPoxB = function() {
		s.mostraPossibiliBian();
	}

	this.consoleThis = function() {
		s.consoleMe();
	}



// 	this.scriviOtt = function() {
// 		scrivitore.cambiaCorrente(8);
// 	}

// 	this.scriviNov = function() {
// 		scrivitore.cambiaCorrente(9);
// 	}

// 	this.scriviN = function(n) {
// 		scrivitore.cambiaCorrente(n);
// 	}

// 	this.scriviCanc = function() {
// 		scrivitore.cambiaCorrente(-1);
// 	}

// 	this.scriviCancPoss = function() {
// 		// scrivitore.cambiaCorrente(-1); // nope, mi serve n
// 		scrivitore.tipoInserim = 2;
// 	}

// 	this.insFisso = function() {
// 		scrivitore.tipoInserim = 0;
// 	}

// 	this.insSoluz = function() {
// 		scrivitore.tipoInserim = 1;
// 	}

// 	this.consoleSudoku = function() {
// 		Sudoku.consoleSudoku();
// 	}

// 	this.randomSolFunc = function() { // da spostare 
// 		let gino = new CreatoreSudoku();
// 		gino.randomizzaSoluzione();
// 		console.log("Spostare creazione CreatoreSudoku da PulsantieraSudoku!")
// 	}

// 	this.modificaDimSudFunc = function() {
// 		if(selfo.dimS == 3) {
// 			dimS = 4;
// 			dimS2 = 4*4;
// 		}
// 		else {
// 			dimS = 3;
// 			dimS2 = 3*3;
// 		}
// 		selfo.togliVecchiPulsanti(); // wow fiko funziona
// 		setup();
// 	}

// 	// (*) a dire il vero vedo che l'elemento esiste ancora in p5 anche se non lo visualizza in canvas,
// 	// ho paura che l'istanza rimanga da qualche parte e che quindi continuare a crearne di nuovi
// 	// senza distruggere realmente i vecchi possa gravare sulla memoria occupata viste le dimensioni
// 	// di un elemento, da rivedere
// 	this.togliVecchiPulsanti = function() { // questo funziona (o forse no, leggi nota sopra (*) )
// 		for(let i = selfo.arrP.length -1; i >= 0; i--) {
// 			selfo.arrP[i].elt.remove();
// 		}
// 		// free real estate (IN REALTà non sono sicuro tolga lunghezza ad arrP, anzi)
// 		// for(let i = 0; i < selfo.arrP.length) {
// 		// 	selfo.arrP[0].elt.remove();
// 		// }
// 	}


	// this.dimS = dimS;
	// this.dimS2 = this.dimS * this.dimS;
	// this.arrP = [];

	// var selfo = this;

	// var spaziaturaDx = 17.5;
	// var spaziaturaOrizz = 450 / this.dimS2; // 50 per 3 (9), preferirei due righe per 4 (16)
	// var spaziaturaVert = 470;
	// // var spaziaturaOrizz = 50;

	// for(let i = 1; i < this.dimS2 + 1; i++) {
	// 	this.arrP.push( createButton(i).position(spaziaturaDx + spaziaturaOrizz * (i-1),spaziaturaVert) );
	// 	// https://thenewstack.io/mastering-javascript-callbacks-bind-apply-call/
	// 	// vorrei aver capito al 100% perché funziona ma magari la volta prossima
	// 	this.arrP[i-1].mousePressed(function() {
	// 		selfo.scriviN(i);
	// 	});
	// }
	// // for(let i = 0; i < this.dimS2; i++) { // prove fallimentari di bindare args a callback di mousePressed
	// 	// this.arrP[i].mousePressed(this.scriviN);
	// 	// this.arrP[i].mousePressed(this.scriviN.bind(i));
	// 	// this.arrP[i].mousePressed(this.scriviN.apply(i));

	// // }


// 	this.canc = createButton("Cancella Inserito").position(spaziaturaDx,spaziaturaVert + 40);
// 	this.canc.mousePressed(this.scriviCanc);

// 	this.canc = createButton("Cancella Possibile").position(spaziaturaDx,spaziaturaVert + 80);
// 	this.canc.mousePressed(this.scriviCancPoss);

// 	this.ins0 = createButton("Fisso").position(spaziaturaDx + 215,spaziaturaVert + 40);
// 	this.ins0.mousePressed(this.insFisso);

// 	this.ins1 = createButton("Soluz").position(spaziaturaDx + 295,spaziaturaVert + 40);
// 	this.ins1.mousePressed(this.insSoluz);



	var selfo = this;

	this.posizioneXPuls = width + 10;
	// this.posizioneXPuls = width - 150; // per schermo Mac con debugger aperto e Sublime aperto di fianco
	this.posizioneYPuls = 30;
	this.spaziaturaY = 40;


	this.nuovaPartitaButton = createButton("Nuova Partita").position(this.posizioneXPuls,this.posizioneYPuls);
	this.nuovaPartitaButton.mousePressed(this.nuovaPartita);

	this.caricaMappaButton = createButton("Carica Mappa 2").position(this.posizioneXPuls,this.posizioneYPuls + this.spaziaturaY);
	this.caricaMappaButton.mousePressed(function() {
		selfo.caricaMappa(2);
	});

	this.caricaMappaButton = createButton("Carica Mappa 4").position(this.posizioneXPuls,this.posizioneYPuls + this.spaziaturaY * 2);
	this.caricaMappaButton.mousePressed(function() {
		selfo.caricaMappa(4);
	});

	this.enIaButton = createButton("IA enabler").position(this.posizioneXPuls,this.posizioneYPuls + this.spaziaturaY * 3);
	this.enIaButton.mousePressed(this.enIa);

	this.nomeCasButt = createButton("Nome Casel").position(this.posizioneXPuls,this.posizioneYPuls + this.spaziaturaY * 4);
	this.nomeCasButt.mousePressed(this.nomeCas);

	this.controlloMosseButton = createButton("Controllo Mosse").position(this.posizioneXPuls,this.posizioneYPuls + this.spaziaturaY * 5);
	this.controlloMosseButton.mousePressed(this.controlloMosse);

	this.mostraPoxButton = createButton("Mostra possibili").position(this.posizioneXPuls,this.posizioneYPuls + this.spaziaturaY * 6);
	this.mostraPoxButton.mousePressed(this.mostraPox);

	this.nextPoxButtonN = createButton("Next poss Nero").position(this.posizioneXPuls,this.posizioneYPuls + this.spaziaturaY * 7);
	this.nextPoxButtonN.mousePressed(this.nextPoxN);

	this.nextPoxButtonB = createButton("Next poss Bian").position(this.posizioneXPuls,this.posizioneYPuls + this.spaziaturaY * 8);
	this.nextPoxButtonB.mousePressed(this.nextPoxB);

	this.consoleScacchieraButton = createButton("Console this").position(this.posizioneXPuls,this.posizioneYPuls + this.spaziaturaY * 9);
	this.consoleScacchieraButton.mousePressed(this.consoleThis);

	// this.randomButton = createButton("Random").position(470,30);
	// this.randomButton.mousePressed(this.randomFunction);

// 	// this.mettiUnoButton = createButton("Predef").position(470,80);
// 	// this.mettiUnoButton.mousePressed(this.mettiUnoFunction);

// 	this.mettiUnoButton = createButton("Svuota").position(470,80);
// 	this.mettiUnoButton.mousePressed(this.sudokuVuoto);

// 	this.testoStronzoButton = createButton("Dim Txt").position(470,130);
// 	this.testoStronzoButton.mousePressed(this.testoStronzoFunction);


// 	this.risolviButton = createButton("Risolvi").position(470,180);
// 	this.risolviButton.mousePressed(this.risolviFunction);

// 	this.mostraPossButton = createButton("MostraPoss").position(470,230);
// 	this.mostraPossButton.mousePressed(this.mostraPossFunction);

// 	this.clearSolButton = createButton("ClearSol").position(470,280);
// 	this.clearSolButton.mousePressed(this.clearSolFunction);

// 	this.controllaSolButton = createButton("ControllaSol").position(470,330);
// 	this.controllaSolButton.mousePressed(this.controllaSolFunction);
// 	// controllaSolButton.mouseOver(controllaSolFunction);

// 	this.scriviConsole = createButton("Console").position(470,380);
// 	this.scriviConsole.mousePressed(this.consoleSudoku);

// 	this.randomSol = createButton("Random Sol").position(470,430);
// 	this.randomSol.mousePressed(this.randomSolFunc);

// 	this.modificaDimSud = createButton("Switch dim").position(500,480);
// 	this.modificaDimSud.mousePressed(this.modificaDimSudFunc);





}