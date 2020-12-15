var sudoku = function(dimSu) {

this.dimS = dimSu;
this.quadrati = [];
this.risolto = false;
this.nRisolti = 0;
this.mostraTuttiPossibiliFlag = false;

this.valutazioneDifficolta = 0;

this.collectorSudoku = new TuttiSudoku();


this.crea = function() {

	for(var j = 0; j < this.dimS; j++) {
		for(var k = 0; k < this.dimS; k++) {
			this.quadrati[j*9+k] = new quadrato(j,k); // || j+1,k+1
		}
	}

	this.collectorSudoku = new TuttiSudoku();

}

this.cambia = function(j,k,v) {
	if(v != undefined) {
		if(v > 0 && v < 10) {
			this.quadrati[j*9+k].cambiaVal(v);
			// console.log(this.quadrati[j*9+k].valore[0]);
		}
		else console.log("NaN!");
	}
	else console.log("errore, valore indefinito");
}

this.provaSol = function(j,k,v) {
	if(v != undefined) {
		if(v > 0 && v < 10) {
			this.quadrati[j*9+k].provaVal(v);
			// console.log(this.quadrati[j*9+k].valore[0]);
		}
		else console.log("NaN!");
	}
	else console.log("errore, valore indefinito");
}

this.inserisciSudokuCompletoArray = function(arrS) {
	// controlli da implementare !!!
	for(let j = 0; j < 9; j++) {
		for(let k = 0; k < 9; k++) {
			// this.quadrati[j*9 + k].cambiaVal(arrS[j*9 + k]); // come dovrebbe essere 
			this.quadrati[j*9 + k].cambiaVal(arrS[k*9 + j]);
		}
	}
	console.log("Sudoku completo inserito!");
}

this.inserisciCol = function(nR,a,b,c,d,e,f,g,h,i) {
	if(a != undefined) {
		if(a > 0 && a < 10) this.quadrati[nR*9+0].cambiaVal(a);
		else this.clearS(nR,0); }
	if(b != undefined) {
		if(b > 0 && b < 10) this.quadrati[nR*9+1].cambiaVal(b);
		else this.clearS(nR,1); }
	if(c != undefined) {
		if(c > 0 && c < 10) this.quadrati[nR*9+2].cambiaVal(c);
		else this.clearS(nR,2); }
	if(d != undefined) {
		if(d > 0 && d < 10) this.quadrati[nR*9+3].cambiaVal(d);
		else this.clearS(nR,3); }
	if(e != undefined) {
		if(e > 0 && e < 10) this.quadrati[nR*9+4].cambiaVal(e);
		else this.clearS(nR,4); }
	if(f != undefined) {
		if(f > 0 && f < 10) this.quadrati[nR*9+5].cambiaVal(f);
		else this.clearS(nR,5); }
	if(g != undefined) {
		if(g > 0 && g < 10) this.quadrati[nR*9+6].cambiaVal(g);
		else this.clearS(nR,6); }
	if(h != undefined) {
		if(h > 0 && h < 10) this.quadrati[nR*9+7].cambiaVal(h);
		else this.clearS(nR,7); }
	if(i != undefined) {
		if(i > 0 && i < 10) this.quadrati[nR*9+8].cambiaVal(i);
		else this.clearS(nR,8); }
}

this.inserisciRiga = function(nR,a,b,c,d,e,f,g,h,i) {
	if(a != undefined) {
		if(a > 0 && a < 10) this.quadrati[0*9+nR].cambiaVal(a);
		else this.clearS(0,nR); }
	if(b != undefined) {
		if(b > 0 && b < 10) this.quadrati[1*9+nR].cambiaVal(b);
		else this.clearS(1,nR); }
	if(c != undefined) {
		if(c > 0 && c < 10) this.quadrati[2*9+nR].cambiaVal(c);
		else this.clearS(2,nR); }
	if(d != undefined) {
		if(d > 0 && d < 10) this.quadrati[3*9+nR].cambiaVal(d);
		else this.clearS(3,nR); }
	if(e != undefined) {
		if(e > 0 && e < 10) this.quadrati[4*9+nR].cambiaVal(e);
		else this.clearS(4,nR); }
	if(f != undefined) {
		if(f > 0 && f < 10) this.quadrati[5*9+nR].cambiaVal(f);
		else this.clearS(5,nR); }
	if(g != undefined) {
		if(g > 0 && g < 10) this.quadrati[6*9+nR].cambiaVal(g);
		else this.clearS(6,nR); }
	if(h != undefined) {
		if(h > 0 && h < 10) this.quadrati[7*9+nR].cambiaVal(h);
		else this.clearS(7,nR); }
	if(i != undefined) {
		if(i > 0 && i < 10) this.quadrati[8*9+nR].cambiaVal(i);
		else this.clearS(8,nR); }
}

this.clearS = function(jj,kk) {
	if(jj != undefined) {
			this.quadrati[jj*9+kk].clearVal();
			console.log("(" + jj + "," + kk + ") resettato");
	}
	else {
		for(var j = 0; j < this.dimS; j++) {
			for(var k = 0; k < this.dimS; k++) {
				this.quadrati[j*9+k].clearVal(); 
			}
		}
		console.log("Sudoku azzerato");
	}
}

// this.clearSoluzione = function() {

// 	for(var j = 0; j < this.dimS; j++) {
// 		for(var k = 0; k < this.dimS; k++) {
// 			if(this.quadrati[j*9+k].aggiunto) this.quadrati[j*9+k].clearVal(); 
// 		}
// 	}
// } 

this.clearSoluzione = function() {

	for(var j = 0; j < this.dimS; j++) {
		for(var k = 0; k < this.dimS; k++) {
			this.quadrati[j*9+k].clearValSol(); 
		}
	}
} 

this.clearQuadSol = function(jj,kk) {

	if(this.quadrati[jj*9+kk].aggiunto) this.quadrati[jj*9+kk].clearVal(); 
		
} 
this.clearQuad = function(jj,kk) {

	if(! this.quadrati[jj*9+kk].aggiunto) this.quadrati[jj*9+kk].clearVal(); 
	// this.quadrati[jj*9+kk].clearVal(); // senza if()
		
}

this.togliPoss = function(j,k,v) {
	if(v != undefined) {
		if(v > 0 && v < 10) {
			this.quadrati[j*9+k].togli(v);
			// console.log(this.quadrati[j*9+k].valore[0]);
		}
		else console.log("NaN!");
	}
	else console.log("errore, valore indefinito");
}

this.controllaErrori = function() {
	for(var j = 0; j < this.dimS; j++) {
		for(var k = 0; k < this.dimS; k++) {
			this.quadrati[j*9+k].contrErr(); 
		}
	}
		// console.log("Sudoku azzerato"); // mostra numero errori 
}

this.eliminaErrori = function() {
	for(var j = 0; j < this.dimS; j++) {
		for(var k = 0; k < this.dimS; k++) {
			this.quadrati[j*9+k].cancelErr(); 
		}
	}
		// console.log("Sudoku azzerato"); // mostra numero errori 
}

this.consoleSudoku = function() { // VECCHIO, PER INSERIRE IN tuttiSudoku() in Array, deprecated
	var stringaCompleta = "";
	stringaCompleta += "[[";
	for(var j = 0; j < this.dimS; j++) {
		stringaCompleta += "\t";
		for(var k = 0; k < this.dimS; k++) {
			stringaCompleta += this.quadrati[k*9+j].valore[0]; // Attenzione!! Switch indici!!!
			if(k != this.dimS -1 || (j != this.dimS -1) ) {
				stringaCompleta += ",";
			}
		}
		if(j != this.dimS -1) stringaCompleta += "\n";
	}

	stringaCompleta += "\t], 2\t],";
	console.log(stringaCompleta);
}

this.nuovoRandom = function(n) {
	this.clearS(); // elimino sudoku precedenti
	if(! isNaN(n) || n == undefined) {
		this.crea();
		this.collectorSudoku.insSudCasObj(n);
	}
	this.azzeraSeVal();
}
this.nuovoDiff = function(diff) {
	this.clearS(); // elimino sudoku precedenti
	if(! isNaN(n) || n == undefined) {
		this.crea();
		this.collectorSudoku.insSudDif(diff);
	}
	this.azzeraSeVal();
}


this.controllo = function() {

	console.log(this.quadrati);

}


this.mostra = function() {

	for(var j = 0; j < this.dimS; j++) {
		for(var k = 0; k < this.dimS; k++) {
			this.quadrati[j*9+k].mostra(); 
		}
	}

	if(this.mostraTuttiPossibiliFlag) {
		this.mostraTuttiPossibili();
	}

	push();
		stroke(0);
		noFill();
		strokeWeight(4);
		line(width/3,0,width/3,height);
		line(width*2/3,0,width*2/3,height);
		line(0,height/3,width,height/3);
		line(0,height*2/3,width,height*2/3);
		strokeWeight(8);
		rectMode(CORNER);
		rect(0,0,width,height);
	pop();

}


this.mostraTuttiPossibili = function() {
	for(var j = 0; j < this.dimS; j++) {
		for(var k = 0; k < this.dimS; k++) {
			this.quadrati[j*9+k].mostraTuttiPossibili(); 
		}
	}
}

this.randColonna = function(nR) {
	for(var g = 0; g < dimS; g++) {
		this.cambia(nR,g,g);
	}
}
this.randRiga = function(nR) {
	for(var g = 0; g < dimS; g++) {
		this.cambia(g,nR,g);
	}
}
this.randS = function(nR) {
	for(var j = 0; j < this.dimS; j++) {
		for(var k = 0; k < this.dimS; k++) {
			if(random(1) > 0.8) this.cambia(j,k,round(random(1,9))); 
		}
	}
}

this.azzeraSeVal = function() {
	for(var j = 0; j < this.dimS; j++) {
		for(var k = 0; k < this.dimS; k++) {
			this.quadrati[j*9+k].azzeraSeVal();
		}
	}
}

this.risolvi = function() {

	this.risolto = false;
	this.nRisolti = 0;

	this.azzeraSeVal();

	for(var j = 0; j < this.dimS; j++) {
		for(var k = 0; k < this.dimS; k++) {
			this.quadrati[j*9+k].ris(); // || j+1,k+1
			// this.quadrati[j*9+k].colonna();
			if(this.quadrati[j*9+k].valore[0] != 0) this.nRisolti++;
		}
	}

	if(this.nRisolti == this.dimS*this.dimS) {
		this.risolto = true;
		console.log("TADAAA RISOLTO :D");
	}

}



this.crea();
// this.controllo();
// this.mostra();


}



