var CreatoreSudoku = function() { // k colonne, i righe


	this.randomSudokuSeed = round(random(5472730538)); // 5 472 730 538 		5 miliardi

	this.solZero = [	3,5,1,6,8,2,4,9,7,
						4,9,8,7,3,1,6,5,2,
						2,7,6,9,4,5,3,1,8,
						1,2,3,4,5,9,7,8,6,
						7,8,9,3,2,6,5,4,1,
						5,6,4,1,7,8,2,3,9,
						9,3,5,8,6,7,1,2,4,
						6,1,2,5,9,4,8,7,3,
						8,4,7,2,1,3,9,6,5	];


	this.nuovaSol = [	3,5,1,6,8,2,4,9,7,
						4,9,8,7,3,1,6,5,2,
						2,7,6,9,4,5,3,1,8,
						1,2,3,4,5,9,7,8,6,
						7,8,9,3,2,6,5,4,1,
						5,6,4,1,7,8,2,3,9,
						9,3,5,8,6,7,1,2,4,
						6,1,2,5,9,4,8,7,3,
						8,4,7,2,1,3,9,6,5	];
	
	// this.nuovaSol = [];

	// 362880

 // RSS funziona solo se usato su solZero perché poi si sommano le modifiche
 // ed usare lo stesso random seed non porta allo stesso risultato ma alle stesse trasformazioni
 // tipo fare sempre un passo avanti ti porta all stesso punto solo se ogni volta riparti dalla partenza,
 // altrimenti continui ad allontanarti 
 
	this.nuovoRandom = function(RSS) {

		let nuovoRSS = RSS || [];
		if(nuovoRSS)

		if(nuovoRSS[0] == undefined || nuovoRSS[0] == null) {
			for(let i = 0; i < 8; i++) {
				nuovoRSS.push(floor(random(6)));
			}
		}
		

		// fidati, sono un ingegnere 
		// let ran3c = floor(random(6)); // 0,5
		// nuovoRSS.push(ran3c);
		this.swap3Col(0 , floor(nuovoRSS[0] % 3) );
		this.swap3Col(1 , floor(nuovoRSS[0] % 2) );

		// let ran3r = floor(random(6));
		// nuovoRSS.push(ran3r);
		this.swap3Row(0 , floor(nuovoRSS[1] % 3) );
		this.swap3Row(1 , floor(nuovoRSS[1] % 2) );

		// fidati, sono lo stesso ingegnere di prima
		for(let i = 0; i < 3; i++) {	
			// let ranIc = floor(random(6));
			// nuovoRSS.push(ranIc);
			this.swapInCol(i, 0 , floor(nuovoRSS[2+i] % 3) );
			this.swapInCol(i, 1 , floor(nuovoRSS[2+i] % 2) );
		}

		for(let i = 0; i < 3; i++) {
			// let ranIr = floor(random(6));
			// nuovoRSS.push(ranIr);
			this.swapInRow(i, 0 , floor(nuovoRSS[5+i] % 3) );
			this.swapInRow(i, 1 , floor(nuovoRSS[5+i] % 2) );
		}

		// let ranSy = floor(random(362880));

		console.log("RSS usato: ");
		console.log(nuovoRSS.join(""));
		console.log(nuovoRSS);

	}


	this.randomizzaSoluzione = function(RSS) {


		this.nuovoRandom(RSS);

		// this.nuovaSol = [];

		// this.swap3Col(1,2);		// 6 config 
		// this.swapInCol(1,0,2); 	// 6 config * 3 colonne

		// this.swap3Row(1,2);		// 6 config 
		// this.swapInRow(1,0,2);	// 6 config * 3 righe

		this.swapSym(2,5);			// 9! config circa

		// this.ruota(rot);

		this.inserisciNuova();
	}

	this.nuovaSolEsiste = function() {
		return (this.nuovaSol[0] != undefined && this.nuovaSol[0] != null);
	}

	this.controllaValidoN = function(c,vMin,vMax) {
		if(!isNaN(c) && c >= vMin && c <= vMax) return true;
		console.log("Errore valori inseriti (swap probabilmente)");
		return false;
	}

	this.swap3Col = function(c1,c2) { // 0,1,2
		
		if(	this.controllaValidoN(c1,0,2) && 
			this.controllaValidoN(c2,0,2) &&
			this.nuovaSolEsiste() ) {
			for (let i = 0; i < 9; i++) {
				for(let k = 0; k < 3; k++) {
					temp = this.nuovaSol[i*9 + c1*3+k];
					this.nuovaSol[i*9 + c1*3+k] = this.nuovaSol[i*9 + c2*3+k];
					this.nuovaSol[i*9 + c2*3+k] = temp;
				}
			}
		}
	}


	this.swapInCol = function(c,c1,c2) { // 0,1,2

		if(	this.controllaValidoN(c,0,2) 	&& 
			this.controllaValidoN(c1,0,2) && 
			this.controllaValidoN(c2,0,2) &&
			this.nuovaSolEsiste() ) {
			for (let i = 0; i < 9; i++) {
				temp = this.nuovaSol[i*9 + c*3+c1];
				this.nuovaSol[i*9 + c*3+c1] = this.nuovaSol[i*9 + c*3+c2];
				this.nuovaSol[i*9 + c*3+c2] = temp;
			}
		}
		
	}

	
	this.swap3Row = function(r1,r2) { // 0,1,2
		
		if(	this.controllaValidoN(r1,0,2) && 
			this.controllaValidoN(r2,0,2) &&
			this.nuovaSolEsiste() ) {
			for (let i = 0; i < 9; i++) {
				for(let k = 0; k < 3; k++) {
					temp = this.nuovaSol[i + (r1*3+k)*9];
					this.nuovaSol[i + (r1*3+k)*9] = this.nuovaSol[i + (r2*3+k)*9];
					this.nuovaSol[i + (r2*3+k)*9] = temp;
				}
			}
		}
	}


	this.swapInRow = function(r,r1,r2) { // 0,1,2

		if(	this.controllaValidoN(r,0,2) 	&& 
			this.controllaValidoN(r1,0,2) && 
			this.controllaValidoN(r2,0,2) &&
			this.nuovaSolEsiste() ) {
			for (let i = 0; i < 9; i++) {
				temp = this.nuovaSol[i + (r*3+r1)*9];
				this.nuovaSol[i + (r*3+r1)*9] = this.nuovaSol[i + (r*3+r2)*9];
				this.nuovaSol[i + (r*3+r2)*9] = temp;
			}
		}
		
	}


	this.swapSym = function(s1,s2) { // 1-9

		if(	this.controllaValidoN(s1,1,9) && 
			this.controllaValidoN(s2,1,9) &&
			this.nuovaSolEsiste() ) {

			for(let i = 0; i < 9; i++) {
				for(let k = 0; k < 9; k++) {
					if(this.nuovaSol[i*9 + k] == s1) this.nuovaSol[i*9 + k] = s2; 
					else if(this.nuovaSol[i*9 + k] == s2) this.nuovaSol[i*9 + k] = s1;
				}
			}

		}
		
	}


	this.inserisciNuova = function() {
		if(this.nuovaSolEsiste() )
			Sudoku.inserisciSudokuCompletoArray(this.nuovaSol);
		
	}

	this.inserisciSolZero = function() {
		if(this.nuovaSolEsiste() )
			Sudoku.inserisciSudokuCompletoArray(this.solZero);
		
	}








}