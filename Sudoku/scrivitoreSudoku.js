var ScrivitoreSudoku = function() {

	this.numeroCorrente = 1;
	this.tipoInserim = 1; // 0 fisso, 1 soluz, 2 possibile



	this.controllaClick = function() {
		if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
			let nX = floor(mouseX*9/width);
			let nY = floor(mouseY*9/height);
			console.log("Click su " + nX + " " + nY);
			// Sudoku.inserisciInput(nX,nY,this.numeroCorrente);
			if(this.numeroCorrente == -1) {
				if(this.tipoInserim == 0) Sudoku.clearQuad(nX,nY);
				else Sudoku.clearQuadSol(nX,nY);
			}
			else {
				if(this.tipoInserim == 0) Sudoku.cambia(nX,nY,this.numeroCorrente);
				else {
					if(this.tipoInserim == 2) Sudoku.togliPoss(nX,nY,this.numeroCorrente);
					else Sudoku.provaSol(nX,nY,this.numeroCorrente);
				}
				
				
			}
		}
	}

	this.cambiaCorrente = function(n) {
		if(typeof n === "number") {
			if((n > 0 && n < 10) || n == -1) {
				this.numeroCorrente = n;
			}
		}
	}


	this.mostra = function() {

		push();
			if(this.numeroCorrente == -1) { // CANCELLA 
				textSize(12);
				if(testoStronzo) textSize(8);
				if(this.tipoInserim == 0) {	// fisso
					fill(230,50,120);
					text("Canc fix",mouseX + 10, mouseY + 5);
				}
				else {						// sol
					fill(200,150,40);
					text("Canc sol",mouseX + 10, mouseY + 5);
				}
			}
			else { 							// INSERISCI
				textSize(18);
				if(testoStronzo) textSize(12);
				if(this.tipoInserim == 0) {	// fisso 
					fill(50,50,50);
				}
				else {						// sol
					fill(20,150,40);
				}
				text(this.numeroCorrente,mouseX + 10, mouseY + 5);
			}
		pop();

	}





}