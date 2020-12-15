
// necessarieo scrivere func prima che vengano legate ai pulsanti

var PulsantieraSudoku = function() {


	this.randomFunction = function() {
		Sudoku.nuovoRandom();
		// Sudoku.testP(1);
	}

	this.sudokuVuoto = function() {
		Sudoku.nuovoRandom("vuoto");
	}

	// this.mettiUnoFunction = function() {
	// 	Sudoku.testP(6);
	// }

	this.risolviFunction = function() {
		Sudoku.risolvi();
	}

	this.testoStronzoFunction = function() {
		testoStronzo = !testoStronzo;
	}

	this.clearSolFunction = function() {
		Sudoku.clearSoluzione();
	}

	this.controllaSolFunction = function() {
		Sudoku.controllaErrori();
	}

	this.mostraPossFunction = function() {
		Sudoku.mostraTuttiPossibiliFlag = ! Sudoku.mostraTuttiPossibiliFlag;
	}



	this.scriviUno = function() {
		scrivitore.cambiaCorrente(1);
	}

	this.scriviDue = function() {
		scrivitore.cambiaCorrente(2);
	}

	this.scriviTre = function() {
		scrivitore.cambiaCorrente(3);
	}

	this.scriviQat = function() {
		scrivitore.cambiaCorrente(4);

	}

	this.scriviCin = function() {
		scrivitore.cambiaCorrente(5);
	}

	this.scriviSei = function() {
		scrivitore.cambiaCorrente(6);
	}

	this.scriviSet = function() {
		scrivitore.cambiaCorrente(7);
	}

	this.scriviOtt = function() {
		scrivitore.cambiaCorrente(8);
	}

	this.scriviNov = function() {
		scrivitore.cambiaCorrente(9);
	}

	this.scriviCanc = function() {
		scrivitore.cambiaCorrente(-1);
	}

	this.scriviCancPoss = function() {
		// scrivitore.cambiaCorrente(-1); // nope, mi serve n
		scrivitore.tipoInserim = 2;
	}

	this.insFisso = function() {
		scrivitore.tipoInserim = 0;
	}

	this.insSoluz = function() {
		scrivitore.tipoInserim = 1;
	}

	this.consoleSudoku = function() {
		Sudoku.consoleSudoku();
	}

	this.randomSolFunc = function() { // da spostare 
		let gino = new CreatoreSudoku();
		gino.randomizzaSoluzione();
		console.log("Spostare creazione CreatoreSudoku da PulsantieraSudoku!")
	}





	var spaziaturaDx = 17.5;
	var spaziaturaOrizz = 50;
	var spaziaturaVert = 470;
	var spaziaturaOrizz = 50;


	this.uno = createButton("1").position(spaziaturaDx,spaziaturaVert);
	this.uno.mousePressed(this.scriviUno);

	this.due = createButton("2").position(spaziaturaDx + spaziaturaOrizz,spaziaturaVert);
	this.due.mousePressed(this.scriviDue);

	this.tre = createButton("3").position(spaziaturaDx + spaziaturaOrizz*2,spaziaturaVert);
	this.tre.mousePressed(this.scriviTre);

	this.qat = createButton("4").position(spaziaturaDx + spaziaturaOrizz*3,spaziaturaVert);
	this.qat.mousePressed(this.scriviQat);

	this.cin = createButton("5").position(spaziaturaDx + spaziaturaOrizz*4,spaziaturaVert);
	this.cin.mousePressed(this.scriviCin);

	this.sei = createButton("6").position(spaziaturaDx + spaziaturaOrizz*5,spaziaturaVert);
	this.sei.mousePressed(this.scriviSei);

	this.set = createButton("7").position(spaziaturaDx + spaziaturaOrizz*6,spaziaturaVert);
	this.set.mousePressed(this.scriviSet);

	this.ott = createButton("8").position(spaziaturaDx + spaziaturaOrizz*7,spaziaturaVert);
	this.ott.mousePressed(this.scriviOtt);

	this.nov = createButton("9").position(spaziaturaDx + spaziaturaOrizz*8,spaziaturaVert);
	this.nov.mousePressed(this.scriviNov);


	this.canc = createButton("Cancella Inserito").position(spaziaturaDx,spaziaturaVert + 40);
	this.canc.mousePressed(this.scriviCanc);

	this.canc = createButton("Cancella Possibile").position(spaziaturaDx,spaziaturaVert + 80);
	this.canc.mousePressed(this.scriviCancPoss);

	this.ins0 = createButton("Fisso").position(spaziaturaDx + 215,spaziaturaVert + 40);
	this.ins0.mousePressed(this.insFisso);

	this.ins1 = createButton("Soluz").position(spaziaturaDx + 295,spaziaturaVert + 40);
	this.ins1.mousePressed(this.insSoluz);







	this.randomButton = createButton("Random").position(470,30);
	this.randomButton.mousePressed(this.randomFunction);

	// this.mettiUnoButton = createButton("Predef").position(470,80);
	// this.mettiUnoButton.mousePressed(this.mettiUnoFunction);

	this.mettiUnoButton = createButton("Svuota").position(470,80);
	this.mettiUnoButton.mousePressed(this.sudokuVuoto);

	this.testoStronzoButton = createButton("DimTxt").position(470,130);
	this.testoStronzoButton.mousePressed(this.testoStronzoFunction);


	this.risolviButton = createButton("Risolvi").position(470,180);
	this.risolviButton.mousePressed(this.risolviFunction);

	this.mostraPossButton = createButton("MostraPoss").position(470,230);
	this.mostraPossButton.mousePressed(this.mostraPossFunction);

	this.clearSolButton = createButton("ClearSol").position(470,280);
	this.clearSolButton.mousePressed(this.clearSolFunction);

	this.controllaSolButton = createButton("ControllaSol").position(470,330);
	this.controllaSolButton.mousePressed(this.controllaSolFunction);
	// controllaSolButton.mouseOver(controllaSolFunction);

	this.scriviConsole = createButton("Console").position(470,380);
	this.scriviConsole.mousePressed(this.consoleSudoku);

	this.randomSol = createButton("Random Sol").position(470,430);
	this.randomSol.mousePressed(this.randomSolFunc);





}