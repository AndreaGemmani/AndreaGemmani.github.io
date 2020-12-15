var quadrato = function(j,k,valore) {

	this.j = j;
	this.k = k;

	if(this.j < 3) this.j3 = [0,1,2];
	else {
		if(this.j < 6) this.j3 = [3,4,5];
		else this.j3 = [6,7,8];
	}

	if(this.k < 3) this.k3 = [0,1,2];
	else {
		if(this.k < 6) this.k3 = [3,4,5];
		else this.k3 = [6,7,8];
	}

	this.n = j*9+k;
	this.aggiunto = false;
	this.aggiuntoDiRecente = false;
	this.sbagliato = false;
	this.possibili = 9;
	this.sommapos = 45;
	this.valore = [0,1,1,1,1,1,1,1,1,1]; // il primo mi da il valore certo, 0 se incerto
	// gli altri sono bool su (questo numero può andare lì?)

	if( valore != undefined ) {
		if( valore > 0 && valore < 10) {
			this.valore[0] = valore;
			this.possibili = 1;
		}
		else console.log("valore non valido");
	}


	// per draw
	this.dim = width/9 -1;
	this.pos = createVector(height/9 * this.j + this.dim/2,width/9 * this.k + this.dim/2);

	this.mostra = function() {
		push();
		fill(255);
		rectMode(CENTER);
		rect(this.pos.x,this.pos.y,this.dim,this.dim); // disegno quadrato
		textAlign(CENTER,CENTER);
		textSize(35);
		// if(testoStronzo) textSize(35*9/16);
		// if(testoStronzo) textSize(35*11/16);
		if(testoStronzo) textSize(35*2/3);

		if(this.valore[0] != 0) {
			if(this.sbagliato) fill(255,0,0);
			else {
				if(this.aggiunto) fill(0,255,0);
				else fill(0);
			}
			text(this.valore[0],this.pos.x,this.pos.y);
		}
		pop();
	}
	this.mostraTuttiPossibili = function() {
		push();
		fill(0,150,180);
		textAlign(CENTER,CENTER);
		textSize(15);
		// if(testoStronzo) textSize(35*9/16);
		// if(testoStronzo) textSize(35*11/16);
		if(testoStronzo) textSize(15*2/3);

		if(this.valore[0] == 0) {
			for(let j = 0; j < 3; j++) {
				for(let k = 1; k < 4; k++) {
					let i = k + j*3;
					if(this.valore[i] == 1) {
						text(i,this.pos.x + (k-2)*14,this.pos.y + (j-1)*14);
					}
				}
			}

		}
		pop();
	}

this.cambiaVal = function(v) {
	if(v != undefined) {
		if(v > 0 && v < 10) {
			this.aggiunto = false;
			this.sbagliato = false;
			this.valore[0] = v;
			this.possibili = 1;
			this.sommapos = v;
		}
	}
}

this.provaVal = function(v) {
	if(v != undefined) {
		if(v > 0 && v < 10) {
			this.aggiunto = true;
			this.sbagliato = false;
			this.valore[0] = v;
			this.possibili = 1;
			this.sommapos = v;
		}
	}
}

this.clearVal = function() { // resetto il quadrato a vuoto
	this.aggiunto = false;
	this.sbagliato = false;
	this.possibili = 9;
	this.sommapos = 45;
	this.valore = [0,1,1,1,1,1,1,1,1,1]; 
		
}

this.clearValSol = function() { // resetto quad solo se è sol
	if( this.valore[0] != 0 && this.aggiunto ||
		this.valore[0] == 0 && ! this.aggiunto) {
		this.aggiunto = false;
		this.sbagliato = false;
		this.possibili = 9;
		this.sommapos = 45;
		this.valore = [0,1,1,1,1,1,1,1,1,1]; 
	}
}

this.togli = function(n) {
	if(this.valore[n] != 0) {
		this.valore[n] = 0;
		this.possibili--;
		this.sommapos -= n;
		this.valuta();
	}
}

this.azzeraSeVal = function() {
	let n = this.valore[0];
	if(n != 0) {
		for(let i = 1; i < 10; i++) {
			if(i == n) this.valore[i] = 1;
			else this.valore[i] = 0;
		}
	}
}

this.valuta = function() {
	if(this.possibili == 1) {
		this.valore[0] = this.sommapos;
		this.aggiunto = true;
	}
}

this.sonoSicuroCheQuestoSia = function(n) {
	this.valore[0] = n;
	this.aggiunto = true;
	this.sbagliato = false; // (?)
	this.possibili = 1;
	this.sommapos = n;

	this.azzeraSeVal();

	// IN TUTTI GLI ALTRI QUAD DI RIGA, COLONNA O 3x3	Sudoku.quadrati[ ].togli(valore[0]);
}

this.ris = function() {

	this.azzeraSeVal();

	// stessa colonna
	for(var i = 0; i < dimS; i++) { // passo ogni quadrato i per riga
		if(this.valore[0] != 0) break;
		if(i != this.k) { // se è questo salto
			if(Sudoku.quadrati[this.j*9+i].valore[0] != 0) {
				this.togli(Sudoku.quadrati[this.j*9+i].valore[0]);
			}
		}
	}



	// stessa riga
	for(var i = 0; i < dimS; i++) { // passo ogni quadrato i per riga
		if(this.valore[0] != 0) break;
		if(i != this.j) { // se è questo salto
			if(Sudoku.quadrati[i*9+this.k].valore[0] != 0) {
				this.togli(Sudoku.quadrati[i*9+this.k].valore[0]);
			}
		}
	}


	// 3x3
	for(var j = 0; j < dimS2; j++) { // passo quadrati j per riga
		if(this.valore[0] != 0) break;		
		for(var k = 0; k < dimS2; k++) {
			if(j != this.j || k != this.k) { // se non questo, controllo
				if(Sudoku.quadrati[ this.j3[j]*9 + this.k3[k] ].valore[0] != 0) {
					this.togli(Sudoku.quadrati[ this.j3[j]*9 + this.k3[k] ].valore[0]);
				}
			}
		}
	}

	// tanto altro da fare per risolverlo davvero
	// per ora controlla solo riga, colonna e 3x3



	// SECONDA PARTE, posso metterla da enable-are 

	// 3x3 PRIMA PROVA
	// for(var j = 0; j < dimS2; j++) { // passo quadrati j per riga
	// 	if(this.valore[0] != 0) break;		
	// 	for(var k = 0; k < dimS2; k++) {
	// 		if(j != this.j || k != this.k) { // se non questo, controllo
	// 			if(Sudoku.quadrati[ this.j3[j]*9 + this.k3[k] ].valore[0] == 0) {
	// 				if(Sudoku.quadrati[ this.j3[j]*9 + this.k3[k] ].valore[n] == 0) 
	// 				this.togli(Sudoku.quadrati[ this.j3[j]*9 + this.k3[k] ].valore[0]);
	// 			}
	// 		}
	// 	}
	// }


	// SECONDA PROVA, non va comunque atm
/*
	for(var n = 1; n < dimS+1; n++) {
		if(this.valore[0] != 0) break;
		if(this.valore[n] == 1) { // se n qui è possibile 
			var sz = 9; // somma dei possibili di n degli altri q 3x3

			// 3x3
			for(var j = 0; j < dimS2; j++) { // passo tutti i quadrati 
				// if (sz == 0) {	
					for(var k = 0; k < dimS2; k++) {
						if(j != this.j || k != this.k) { // se non questo, controllo
							if(Sudoku.quadrati[ this.j3[j]*9 + this.k3[k] ].valore[0] == 0) {
								if(Sudoku.quadrati[ this.j3[j]*9 + this.k3[k] ].valore[n] == 1) {
									sz--;
									// break;
								}
							}
						}
					}
				// }
			}

			if(sz == 1) this.valore[0] = n;




		}
	}
*/

	// TERZA PROVA

	// for(var n = 1; n < dimS; n++) {
	// 	if(this.valore[0] != 0) break;
	// 	if(this.valore[n] == 1) {
	// 		var sz = 0; // somma dei possibili di n degli altri q 3x3
	// 		for j
	// 			for k
	// 				if(this.valore[n] == 1) break;











	// se va solo qui COLONNA		// TROVARE/CREARE VARIABILE QUANTI NUMERI DIVERSI ESISTONO (9 qui)
	if(this.valore[0] == 0) { // se valore non è già deciso
		for(let n = 1; n < 10; n++) { // per ogni numero n
			if(this.valore[n] == 1) { // se n può andare in questo quad
				for(let i = 0; i < dimS; i++) { // controllo se può andare in altri quad
					if(this.k != i) { // (se è questo salto)
						if(Sudoku.quadrati[this.j*9+i].valore[n] == 1) break; // se può andare anche in altri esco
						
					}
					if(i == 9) { // se fine loop, quindi unico posto in cui mettere n
						// this.togli(Sudoku.quadrati[this.j*9+i].valore[0]);
						this.sonoSicuroCheQuestoSia(n);
					}
				}
			}
		}
	}

	// se va solo qui RIGA		// TROVARE/CREARE VARIABILE QUANTI NUMERI DIVERSI ESISTONO (9 qui)
	if(this.valore[0] == 0) { // se valore non è già deciso
		for(let n = 1; n < 10; n++) { // per ogni numero n
			if(this.valore[n] == 1) { // se n può andare in questo quad
				for(let i = 0; i < dimS; i++) { // controllo se può andare in altri quad
					if(this.j != i) { // (se è questo salto)
						if(Sudoku.quadrati[i*9+this.k].valore[n] == 1) break; // se può andare anche in altri esco
						
					}
					if(i == dimS-1) { // se fine loop, quindi unico posto in cui mettere n
						this.sonoSicuroCheQuestoSia(n);
					}
				}
			}
		}
	}

	// se va solo qui 3x3 		DA RIVEDERE (rivista, funziona ma potrebbe avere ancora falle)
	if(this.valore[0] == 0)	{
		for(let n = 1; n < 10; n++) {
			if(this.valore[n] == 1) {
				let esci = false;
				for(let j = 0; j < dimS2 && !esci; j++) { // passo quadrati j per riga
					for(let k = 0; k < dimS2; k++) {
						// console.log(j + " " + k);
						if(this.j3[j] != this.j || this.k3[k] != this.k) { // se non questo, controllo
							if(Sudoku.quadrati[ this.j3[j]*9 + this.k3[k] ].valore[n] == 1) {
								esci = true;
								// console.log("esco");
								break;
							}
						}
						if(j == dimS2-1 && k == dimS2-1) this.sonoSicuroCheQuestoSia(n);
					}
				}
			}
		}
	}









// if()
// preso un valore possibile di questo quad 	es; [k = 5, j = 1]
// se in una delle caselle a k3 diversi [0,1,2,6,7,8] e j3 diversi [0,2] c'è lo stesso valore
// sicuro 	es: [k = 1, j = 2] ha lo stesso val sicuro di questo possibile
// se tutte le tre caselle a k3 diverso [6,7,8] e j3 diverso [0] sono occupate
// (o se non posso mettere n in quelle caselle)
// allora qui non può andare n
// 


































}


this.contrErr = function() {

	if(this.valore[0] != 0) {

		this.sbagliato = false; // inizializzo e cambio dopo eventuamente

		// stessa colonna
		for(var i = 0; i < dimS; i++) { // passo ogni quadrato i per riga
			if(i != this.k) { // se è questo salto
				if(Sudoku.quadrati[this.j*9+i].valore[0] == this.valore[0]) {
					this.sbagliato = true;
				}
			}
		}



		// stessa riga
		for(var i = 0; i < dimS; i++) { // passo ogni quadrato i per riga
			if(i != this.j) { // se è questo salto
				if(Sudoku.quadrati[i*9+this.k].valore[0] == this.valore[0]) {
					this.sbagliato = true;
				}
			}
		}


		// 3x3
		for(var jz = 0; jz < dimS2; jz++) { // passo quadrati j per riga
			for(var kz = 0; kz < dimS2; kz++) {
				if(this.j3[jz] != this.j || this.k3[kz] != this.k) { // se non questo, controllo
					if(Sudoku.quadrati[ this.j3[jz]*9 + this.k3[kz] ].valore[0] == this.valore[0] ) {
						// console.log(this.j3[jz]*9 + this.k3[kz]);
						this.sbagliato = true;
					}
				}
			}
		}


	}

}


this.cancelErr = function() {

	if(this.valore[0] != 0) {
		this.sbagliato = false;

		// stessa colonna
		for(var i = 0; i < dimS; i++) { // passo ogni quadrato i per riga
			if(i != this.k) { // se è questo salto
				if(Sudoku.quadrati[this.j*9+i].valore[0] == this.valore[0]) {
					this.clearVal();
				}
			}
		}



		// stessa riga
		for(var i = 0; i < dimS; i++) { // passo ogni quadrato i per riga
			if(i != this.j) { // se è questo salto
				if(Sudoku.quadrati[i*9+this.k].valore[0] == this.valore[0]) {
					this.clearVal();
				}
			}
		}


		// 3x3
		for(var jz = 0; jz < dimS2; jz++) { // passo quadrati j per riga
			for(var kz = 0; kz < dimS2; kz++) {
				if(this.j3[jz] != this.j || this.k3[kz] != this.k) { // se non questo, controllo
					if(Sudoku.quadrati[ this.j3[jz]*9 + this.k3[kz] ].valore[0] == this.valore[0] ) {
						// console.log(this.j3[jz]*9 + this.k3[kz]);
						this.clearVal();
					}
				}
			}
		}


	}

}





}