var SpostaScacchi = function() {

	this.dimS = 8;
	this.dimS2 = 16;

	this.numeroCorrente = 1;
	this.tipoInserim = 1; // 0 fisso, 1 soluz, 2 possibile

	this.flagMostra = true;
	this.nome = "";

	this.controlloNomeCasella = function() {
		let x = ceil(mouseX / width * this.dimS);
		let y = ceil(mouseY / height * this.dimS);
		this.nome = String.fromCharCode(64 + x) + y;
	}


	this.controllaClick = function() {
		if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
			let nX = floor(mouseX*this.dimS2/width);
			let nY = floor(mouseY*this.dimS2/height);
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
			if((n > 0 && n < this.dimS2 + 1) || n == -1) {
				this.numeroCorrente = n;
			}
		}
	}


	this.mostra = function() {

	// 	push();
	// 		if(this.numeroCorrente == -1) { // CANCELLA 
	// 			textSize(12);
	// 			if(testoStronzo) textSize(8);
	// 			if(this.tipoInserim == 0) {	// fisso
	// 				fill(230,50,120);
	// 				text("Canc fix",mouseX + 10, mouseY + 5);
	// 			}
	// 			else {						// sol
	// 				fill(200,150,40);
	// 				text("Canc sol",mouseX + 10, mouseY + 5);
	// 			}
	// 		}
	// 		else { 							// INSERISCI
	// 			textSize(18);
	// 			if(testoStronzo) textSize(12);
	// 			if(this.tipoInserim == 0) {	// fisso 
	// 				fill(50,50,50);
	// 			}
	// 			else {						// sol
	// 				fill(20,150,40);
	// 			}
	// 			text(this.numeroCorrente,mouseX + 10, mouseY + 5);
	// 		}
	// 	pop();

	// }

		this.controlloNomeCasella();

		push();
			textSize(12);
			if(testoStronzo) textSize(8);
			fill(50,180,100);
			if(this.flagMostra) {
				text(this.nome,mouseX + 10, mouseY + 5);
			}
			
		pop();

	}



}