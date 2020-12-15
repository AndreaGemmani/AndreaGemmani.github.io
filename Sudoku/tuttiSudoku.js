var TuttiSudoku = function() {

	this.infoDifficolta =  "0 sperimentale \t1 facile \t2 normale \t3 difficile \t4 impossibile \t5 sbagliato";
	
	// {
	// 	Sudoku.inserisciRiga(0,5,3,0,0,7,0,0,0,0);
	// 	Sudoku.inserisciRiga(1,6,0,0,1,9,5,0,0,0);
	// 	Sudoku.inserisciRiga(2,0,9,8,0,0,0,0,6,0);
	// 	Sudoku.inserisciRiga(3,8,0,0,0,6,0,0,0,3);
	// 	Sudoku.inserisciRiga(4,4,0,0,8,0,3,0,0,1);
	// 	Sudoku.inserisciRiga(5,7,0,0,0,2,0,0,0,6);
	// 	Sudoku.inserisciRiga(6,0,6,0,0,0,0,2,8,0);
	// 	Sudoku.inserisciRiga(7,0,0,0,4,1,9,0,0,5);
	// 	Sudoku.inserisciRiga(8,0,0,0,0,8,0,0,7,9);
	// }


	// this.insSudCas = function(n,z) { // per ora considero dati di this.arrayDiTutti puliti
	// 	let dimensione = z || 9;
	// 	let indexSud = n || round(random(this.arrayDiTutti.length-1));
	// 	for(let i = 0; i < dimensione; i++) {
	// 		let argsS = [];
	// 		for(let k = 0; k < dimensione; k++) {
	// 			let indexCfr = k+i*9;
	// 			argsS.push(this.arrayDiTutti[indexSud][0][indexCfr]);
	// 		}
	// 		Sudoku.inserisciRiga(i,...argsS);
	// 	}
	// 	console.log("Sudoku Inserito: " + indexSud + " (" + this.arrayDiTutti[indexSud][1] + ")");
	// }

	this.insSudCasObj = function(n,z) { // per ora considero dati di this.arrayDiTutti puliti
		let dimensione = z || 9;
		let indexSud = n || round(random(this.arrayDiObj.length-1));
		console.log(indexSud);
		for(let i = 0; i < dimensione; i++) {
			let argsS = [];
			for(let k = 0; k < dimensione; k++) {
				let indexCfr = k+i*9;
				argsS.push(this.arrayDiObj[indexSud].s[indexCfr]);
			}
			Sudoku.inserisciRiga(i,...argsS);
		}
		console.log("Sudoku ObjJSON Inserito: " + indexSud + " (" + this.arrayDiObj[indexSud].dif + ")");
	}

	this.insSudDif = function(diff) { // per ora considero dati di this.arrayDiTutti puliti
		let dimensione = 9;
		this.creaArrDiff();











		// QUA ANCORA DA MODIFICARE















		let indexSud = n || round(random(this.arrayDiObj.length-1));
		console.log(indexSud);
		for(let i = 0; i < dimensione; i++) {
			let argsS = [];
			for(let k = 0; k < dimensione; k++) {
				let indexCfr = k+i*9;
				argsS.push(this.arrayDiObj[indexSud].s[indexCfr]);
			}
			Sudoku.inserisciRiga(i,...argsS);
		}
		console.log("Sudoku ObjJSON Inserito: " + indexSud + " (" + this.arrayDiObj[indexSud].dif + ")");
	}

	this.insSudCasObjSol = function(n,z) { // per ora considero dati di this.arrayDiTutti puliti
		let dimensione = z || 9;
		let indexSud = n || round(random(this.arrayDiObj.length-1));
		console.log(indexSud);
		for(let i = 0; i < dimensione; i++) {
			let argsS = [];
			for(let k = 0; k < dimensione; k++) {
				let indexCfr = k+i*9;
				argsS.push(this.arrayDiObj[indexSud].sol[indexCfr]);
			}
			Sudoku.inserisciRiga(i,...argsS);
		}
		console.log("Sudoku ObjJSONsol Inserito: " + indexSud + " (diff: " + this.arrayDiObj[indexSud].dif + ")");
	}

	this.dammiINummeriiii = function() {
		for(let i = 0; i < this.arrayDiObj.length; i++) {
			let tentiquenti = 0;
			for(let k = 0; k < 81; k++) {
				if(this.arrayDiObj[i].s[k]) tentiquenti++;
			}
			this.arrayDiObj[i].ten = tentiquenti;
		}

	}

	this.sortaPerQuenti = function() { // difficolta è circa 38, 32, 27, 25
		this.dammiINummeriiii();
		this.arrayDiObj.sort((a,b) => b.ten - a.ten);
	}

	this.creaArrDiff = function() {
		this.sortaPerQuenti();
		this.arrSudDif1 = [];
		this.arrSudDif2 = [];
		this.arrSudDif3 = [];
		this.arrSudDif4 = [];
		this.arrSudDif1 = this.arrayDiObj.filter(x => x.dif == 1);
		this.arrSudDif2 = this.arrayDiObj.filter(x => x.dif == 2);
		this.arrSudDif3 = this.arrayDiObj.filter(x => x.dif == 3);
		this.arrSudDif4 = this.arrayDiObj.filter(x => x.dif == 4);
	}

	this.controllaSolSensate = function() {
		for(let i = 0; i < this.arrayDiObj.length; i++) {
			this.controllaSolSensata(i);
		}
	}

	this.controllaSolSensata = function(n) {
		for(let j = 0; j < 81; j++) {
			if(this.arrayDiObj[n].s[j] != 0) {
				if(this.arrayDiObj[n].sol != null && this.arrayDiObj[n].sol.length == 81) {
					if(this.arrayDiObj[n].s[j] != this.arrayDiObj[n].sol[j]) console.log(this.arrayDiObj[n].nS);
				}
			}
		}
	}

	this.arrayDiObj = [ // per essere resi JSON

		{	s: [	5,3,0,0,7,0,0,0,0,
					6,0,0,1,9,5,0,0,0,
					0,9,8,0,0,0,0,6,0,
					8,0,0,0,6,0,0,0,3,
					4,0,0,8,0,3,0,0,1,
					7,0,0,0,2,0,0,0,6,
					0,6,0,0,0,0,2,8,0,
					0,0,0,4,1,9,0,0,5,
					0,0,0,0,8,0,0,7,9	],
			dif: 3,
			nS: 0,
			sol: [	5,3,4,6,7,8,9,1,2,
					6,7,2,1,9,5,3,4,8,
					1,9,8,3,4,2,5,6,7,
					8,5,9,7,6,1,4,2,3,
					4,2,6,8,5,3,7,9,1,
					7,1,3,9,2,4,8,5,6,
					9,6,1,5,3,7,2,8,4,
					2,8,7,4,1,9,6,3,5,
					3,4,5,2,8,6,1,7,9	]
		},

		{	s: [	0,2,0,0,0,0,0,0,3,
					1,0,4,0,0,0,0,0,0,
					0,0,0,5,2,0,4,0,0,
					0,3,0,8,0,0,9,0,1,
					0,0,0,0,0,9,0,2,0,
					2,7,0,0,0,0,0,0,0,
					0,0,6,0,5,0,0,4,2,
					7,0,0,0,0,0,1,0,0,
					0,0,8,0,9,6,0,0,0	], 
			dif: 0,
			nS: 1,
			sol: null
		},

		{	s: [	8,0,0,5,0,1,0,0,6,
					2,0,0,0,0,0,0,0,9,
					0,0,1,2,4,6,5,0,0,
					5,0,4,8,7,2,1,0,3,
					0,0,9,0,0,0,8,0,0,
					0,0,0,0,1,0,0,0,0,
					0,8,2,9,5,7,3,4,0,
					0,7,3,0,0,0,9,2,0,
					0,9,0,0,0,0,0,7,0	], 
			dif: 2,
			nS: 2,
			sol: [	8,4,7,5,9,1,2,3,6,
					2,5,6,7,8,3,4,1,9,
					9,3,1,2,4,6,5,8,7,
					5,6,4,8,7,2,1,9,3,
					7,1,9,4,3,5,8,6,2,
					3,2,8,6,1,9,7,5,4,
					6,8,2,9,5,7,3,4,1,
					4,7,3,1,6,8,9,2,5,
					1,9,5,3,2,4,6,7,8	]
		},

		{	s: [	5,6,4,8,7,0,0,0,1,
					0,0,0,0,1,0,0,0,8,
					0,0,0,0,9,0,0,0,4,
					0,0,0,0,2,0,0,0,5,
					2,1,5,3,4,6,9,8,7,
					6,0,0,0,5,0,0,0,0,
					9,0,0,0,3,0,0,0,0,
					1,0,0,0,6,0,0,0,0,
					4,0,0,0,8,9,5,7,2	],
			dif: 0,
			nS: 3,
			sol: null,
			com: "svaziland"
		},

		{	s: [	0,0,0,0,0,1,0,0,5,
					0,0,0,0,0,0,6,3,1,
					0,0,3,0,8,4,0,0,0,
					0,0,1,0,0,9,0,2,7,
					8,0,0,5,0,0,0,0,0,
					0,0,0,0,0,6,0,0,0,
					0,2,0,7,0,8,0,0,0,
					0,0,0,0,2,0,0,0,0,
					6,7,0,0,0,0,3,0,0	], 
			dif: 0,
			nS: 4,
			sol: null
		},

		{	s: [	8,0,7,5,0,1,0,0,6, 
					2,0,0,0,0,0,0,0,9, 
					0,0,1,2,4,6,5,0,7, 
					5,0,4,8,7,2,1,0,3, 
					0,0,9,0,0,0,8,0,0, 
					0,0,0,6,1,9,0,0,0, 
					0,8,2,9,5,7,3,4,0, 
					0,7,3,0,0,0,9,2,0, 
					0,9,0,0,0,0,0,7,0	], 
			dif: 1,
			nS: 5,
			sol: [	8,4,7,5,9,1,2,3,6,
					2,5,6,7,8,3,4,1,9,
					9,3,1,2,4,6,5,8,7,
					5,6,4,8,7,2,1,9,3,
					7,1,9,4,3,5,8,6,2,
					3,2,8,6,1,9,7,5,4,
					6,8,2,9,5,7,3,4,1,
					4,7,3,1,6,8,9,2,5,
					1,9,5,3,2,4,6,7,8	]
		},

		{	s: [	5,3,0,0,7,0,0,0,0, 
					6,0,0,1,9,5,0,0,0, 
					0,9,8,0,0,0,0,6,0, 
					8,0,0,0,6,0,0,0,3, 
					4,0,0,8,5,3,0,0,1, 
					7,0,3,0,2,0,0,0,6, 
					0,6,0,0,3,7,2,8,4, 
					0,0,0,4,1,9,0,3,5, 
					0,0,0,0,8,0,0,7,9	], 
			dif: 2,
			nS: 6,
			sol: [	5,3,4,6,7,8,9,1,2,
					6,7,2,1,9,5,3,4,8,
					1,9,8,3,4,2,5,6,7,
					8,5,9,7,6,1,4,2,3,
					4,2,6,8,5,3,7,9,1,
					7,1,3,9,2,4,8,5,6,
					9,6,1,5,3,7,2,8,4,
					2,8,7,4,1,9,6,3,5,
					3,4,5,2,8,6,1,7,9	]
		},

		{	s: [	0,1,4,8,0,0,5,0,0, 
					2,5,0,9,0,3,0,0,0, 
					8,6,0,5,0,1,0,0,7, 
					0,2,6,0,8,4,0,0,0, 
					0,8,0,0,1,9,0,2,0, 
					9,0,0,2,0,0,0,0,0, 
					1,0,2,0,3,8,0,5,0, 
					0,0,0,7,0,0,0,8,1, 
					0,9,8,0,5,0,7,3,4	], 
			dif: 2,
			nS: 7,
			sol: [	3,1,4,8,6,7,5,9,2,
					2,5,7,9,4,3,6,1,8,
					8,6,9,5,2,1,3,4,7,
					5,2,6,3,8,4,1,7,9,
					7,8,3,6,1,9,4,2,5,
					9,4,1,2,7,5,8,6,3,
					1,7,2,4,3,8,9,5,6,
					4,3,5,7,9,6,2,8,1,
					6,9,8,1,5,2,7,3,4	]
		},

		{	s: [	0,3,0,0,0,7,2,6,0,
					6,0,0,9,1,0,5,0,0,
					0,8,0,0,0,6,0,9,0,
					0,4,6,1,0,3,8,0,9,
					8,0,0,7,0,5,0,0,4,
					2,0,7,8,0,4,3,6,0,
					0,6,0,0,2,0,0,3,0,
					0,0,1,0,4,9,0,0,2,
					0,0,4,3,8,0,0,5,0	], 
			dif: 1,
			nS: 8,
			sol: [	1,3,9,4,5,7,2,6,8,
					6,7,2,9,1,8,5,7,3,
					4,8,5,2,3,6,4,9,1,
					5,4,6,1,7,3,8,2,9,
					8,9,3,7,6,5,1,4,4,
					2,1,7,8,9,4,3,6,5,
					9,6,8,5,2,1,9,3,7,
					3,5,1,6,4,9,7,8,2,
					7,2,4,3,8,2,6,5,1	]
		},

		{	s: [	0,0,0,0,0,0,0,6,0,
					5,0,0,2,0,0,1,0,3,
					4,7,6,1,0,0,0,0,9,
					0,5,0,0,7,0,0,4,0,
					6,0,7,5,2,3,9,0,8,
					0,3,0,0,6,0,0,5,0,
					2,0,0,0,0,9,4,3,7,
					3,0,4,0,0,2,0,0,1,
					0,1,0,0,0,0,0,0,0	], 
			dif: 2,
			nS: 9,
			sol: [	1,2,3,8,9,7,5,6,4,
					5,9,8,2,4,6,1,7,3,
					4,7,6,1,3,5,2,8,9,
					8,5,2,9,7,1,3,4,6,
					6,4,7,5,2,3,9,1,8,
					9,3,1,4,6,8,7,5,2,
					2,8,5,6,1,9,4,3,7,
					3,6,4,7,5,2,8,9,1,
					7,1,9,3,8,4,6,2,5	]
		},

		{	s: [	8,0,0,1,0,0,0,0,0,
					0,5,0,9,0,7,2,0,0,
					0,1,9,3,0,2,0,0,7,
					1,0,0,0,0,0,0,5,6,
					5,6,0,4,0,8,0,7,9,
					3,7,0,0,0,0,0,0,4,
					7,0,0,5,0,9,4,1,0,
					0,0,5,8,0,1,0,6,0,
					0,0,0,0,0,4,0,0,3	], 
			dif: 2,
			nS: 10,
			sol: [	8,2,7,1,4,6,9,3,5,
					6,5,3,9,8,7,2,4,1,
					4,1,9,3,5,2,6,8,7,
					1,9,4,0,7,3,8,5,6,
					5,6,2,4,1,8,3,7,9,
					3,7,8,6,9,5,1,2,4,
					7,3,6,5,2,9,4,1,8,
					9,4,5,8,3,1,7,6,2,
					2,8,1,7,6,4,5,9,3	]
		},

		{	s: [	0,0,0,0,0,9,1,0,0,
					9,0,0,0,0,2,0,4,0,
					7,8,0,0,3,0,9,0,5,
					0,2,0,0,0,0,0,0,1,
					5,0,0,7,0,1,0,0,6,
					6,0,0,0,0,0,0,5,0,
					2,0,9,0,1,0,0,6,8,
					0,5,0,9,0,0,0,0,2,
					0,0,6,8,0,0,0,0,0	], 
			dif: 4,
			nS: 11,
			sol: [	4,6,2,5,7,9,1,8,3,
					9,3,5,1,8,2,6,4,7,
					7,8,1,4,3,6,9,2,5,
					3,2,4,6,5,8,7,9,1,
					5,9,8,7,4,1,2,3,6,
					6,1,7,2,9,3,8,5,4,
					2,7,9,3,1,4,5,6,8,
					8,5,3,9,6,7,4,1,2,
					1,4,6,8,2,5,3,7,9	]
		},

		{	s: [	0,0,0,0,0,0,2,9,0,
					0,0,8,5,0,9,0,0,0,
					0,0,0,1,0,0,0,8,4,
					0,0,2,4,9,0,6,0,0,
					0,9,7,8,0,5,4,2,0,
					0,0,5,0,3,7,9,0,0,
					7,2,0,0,0,8,0,0,0,
					0,0,0,9,0,4,5,0,0,
					0,5,6,0,0,0,0,0,0	], 
			dif: 3,
			nS: 12,
			sol: [	4,7,1,3,8,6,2,9,5,
					2,3,8,5,4,9,7,6,1,
					5,6,9,1,7,2,3,8,4,
					3,8,2,4,9,1,6,5,7,
					1,9,7,8,6,5,4,2,3,
					6,4,5,2,3,7,9,1,8,
					7,2,4,6,5,8,1,3,9,
					8,1,3,9,2,4,5,7,6,
					9,5,6,7,1,3,8,4,2	]
		},

		{	s: [	0,0,0,0,0,5,4,6,9,
					9,0,0,8,0,6,0,0,0,
					1,0,0,0,7,0,3,8,0,
					0,0,0,2,3,0,0,7,0,
					0,4,0,0,0,0,0,1,0,
					0,9,0,0,5,1,0,0,0,
					0,5,3,0,9,0,0,0,7,
					0,0,0,5,0,3,0,0,6,
					2,8,9,4,0,0,0,0,0	], 
			dif: 3,
			nS: 13,
			sol: [	7,2,8,3,1,5,4,6,9,
					9,3,5,8,4,6,7,2,1,
					1,6,4,9,7,2,3,8,5,
					5,1,6,2,3,4,9,7,8,
					3,4,7,6,8,9,5,1,2,
					8,9,2,7,5,1,6,3,4,
					6,5,3,1,9,8,2,4,7,
					4,7,1,5,2,3,8,9,6,
					2,8,9,4,6,7,1,5,3	]
		},

		{	s: [	7,2,0,0,0,0,0,0,0,
					0,0,0,7,3,5,9,0,0,
					0,8,0,0,0,0,6,7,0,
					9,0,0,0,5,8,0,6,0,
					0,0,0,0,0,0,0,0,0,
					0,6,0,1,9,0,0,0,2,
					0,1,6,0,0,0,0,9,0,
					0,0,4,9,2,1,0,0,0,
					0,0,0,0,0,0,0,3,7	], 
			dif: 4,
			nS: 14,
			sol: [	7,2,3,6,8,9,4,1,5,
					6,4,1,7,3,5,9,2,8,
					5,8,9,2,1,4,6,7,3,
					9,3,2,4,5,8,7,6,1,
					1,5,7,3,6,2,8,4,9,
					4,6,8,1,9,7,3,5,2,
					8,1,6,5,7,3,2,9,4,
					3,7,4,9,2,1,5,8,6,
					2,9,5,8,4,6,1,3,7	]
		},

		{	s: [	6,0,0,1,0,0,3,0,0,
					0,0,0,0,5,0,0,9,0,
					3,0,9,0,7,2,6,0,0,
					0,0,0,0,9,0,7,0,8,
					0,0,0,0,0,0,0,0,0,
					5,0,7,0,2,0,0,0,0,
					0,0,8,5,3,0,9,0,4,
					0,9,0,0,1,0,0,0,0,
					0,0,1,0,0,8,0,0,6	], 
			dif: 4,
			nS: 15,
			sol: [	6,4,5,1,8,9,3,7,2,
					8,7,2,6,5,3,4,9,1,
					3,1,9,4,7,2,6,8,5,
					1,2,6,3,9,5,7,4,8,
					9,8,4,7,6,1,5,2,3,
					5,3,7,8,2,4,1,6,9,
					2,6,8,5,3,7,9,1,4,
					4,9,3,2,1,6,8,5,7,
					7,5,1,9,4,8,2,3,6	]
		},

		{	s: [	0,4,3,0,8,0,0,0,2,
					7,0,0,6,3,0,0,0,0,
					0,0,0,0,5,0,0,3,0,
					1,0,8,2,0,0,0,4,0,
					0,0,9,0,0,0,2,0,0,
					0,7,0,0,0,1,6,0,3,
					0,1,0,0,2,0,0,0,0,
					0,0,0,0,1,5,0,0,4,
					8,0,0,0,9,0,7,5,0	], 
			dif: 4,
			nS: 16,
			sol: [	6,4,3,1,8,9,5,7,2,
					7,5,1,6,3,2,4,9,8,
					9,8,2,4,5,7,1,3,6,
					1,6,8,2,7,3,9,4,5,
					4,3,9,5,6,8,2,1,7,
					2,7,5,9,4,1,6,8,3,
					5,1,7,8,2,4,3,6,9,
					3,9,6,7,1,5,8,2,4,
					8,2,4,3,9,6,7,5,1	]
		},

		{	s: [	0,0,0,0,0,4,0,0,0,
					3,0,0,0,0,0,0,7,0,
					0,0,7,0,0,0,3,0,1,
					4,0,0,3,0,0,0,2,7,
					0,1,0,0,0,0,8,0,0,
					0,5,0,0,8,6,0,0,0,
					1,6,2,8,0,0,0,0,3,
					0,7,9,1,6,0,4,0,2,
					8,0,0,0,9,0,0,0,0	], 
			dif: 4,
			nS: 17,
			sol: [	9,2,1,7,3,4,5,6,8,
					3,4,5,6,1,8,2,7,9,
					6,8,7,9,2,5,3,4,1,
					4,9,8,3,5,1,6,2,7,
					2,1,6,4,7,9,8,3,5,
					7,5,3,2,8,6,1,9,4,
					1,6,2,8,4,7,9,5,3,
					5,7,9,1,6,3,4,8,2,
					8,3,4,5,9,2,7,1,6	]
		},

		{	s: [	0,0,4,0,9,0,6,1,7,
					0,7,0,6,0,0,8,0,0,
					1,0,0,0,0,7,0,0,5,
					0,0,0,0,5,9,0,0,6,
					0,0,0,0,0,0,0,0,0,
					6,0,0,1,3,0,0,0,0,
					7,0,0,2,0,0,0,0,4,
					0,0,2,0,0,4,0,3,0,
					4,5,9,0,8,0,7,0,0	], 
			dif: 4,
			nS: 18,
			sol: [	2,8,4,5,9,3,6,1,7,
					9,7,5,6,1,2,8,4,3,
					1,3,6,8,4,7,2,9,5,
					3,4,8,7,5,9,1,2,6,
					5,9,1,4,2,6,3,7,8,
					6,2,7,1,3,8,4,5,9,
					7,1,3,2,6,5,9,8,4,
					8,6,2,9,7,4,5,3,1,
					4,5,9,3,8,1,7,6,2	]
		},

		{	s: [	4,2,0,0,0,6,3,9,1,
					6,0,0,0,1,0,0,0,5,
					9,1,0,5,0,4,0,6,8,
					0,0,8,1,4,0,5,0,0,
					0,0,0,3,0,5,0,0,0,
					0,0,4,0,8,9,6,0,0,
					3,4,0,6,0,8,0,7,2,
					8,0,0,0,9,0,0,0,3,
					7,9,2,4,0,0,0,5,6	], 
			dif: 1,
			nS: 19,
			sol: [	4,2,5,8,7,6,3,9,1,
					6,8,7,9,1,3,0,2,5,
					9,1,3,5,2,4,7,6,8,
					2,6,8,1,4,7,5,3,9,
					1,7,9,3,6,5,2,8,4,
					5,3,4,2,8,9,6,1,7,
					3,4,1,6,5,8,9,7,2,
					8,5,6,7,9,2,1,4,3,
					7,9,2,4,3,1,8,5,6	]
		},

		{	s: [	6,0,0,2,0,8,0,0,4,
					8,0,0,0,3,5,6,9,0,
					0,9,0,7,0,4,0,0,5,
					0,5,0,0,0,7,9,8,0,
					9,7,2,0,0,0,4,5,3,
					0,6,8,5,0,0,0,2,0,
					5,0,0,9,0,3,0,6,0,
					0,3,6,8,5,0,0,0,9,
					7,0,0,4,0,6,0,0,8	], 
			dif: 1,
			nS: 20,
			sol: [	6,1,5,2,9,8,3,7,4,
					8,4,7,1,3,5,6,9,2,
					2,9,3,7,6,4,8,1,5,
					4,5,1,3,2,7,9,8,6,
					9,7,2,6,8,1,4,5,3,
					3,6,8,5,4,9,1,2,7,
					5,8,4,9,7,3,2,6,1,
					1,3,6,8,5,2,7,4,9,
					7,2,9,4,1,6,5,3,8	]
		},

		{	s: [	1,4,2,9,7,0,0,0,8,
					0,0,7,2,0,4,0,1,0,
					9,0,8,0,0,5,0,0,0,
					8,0,0,0,0,0,0,6,5,
					0,0,0,0,5,0,0,0,0,
					6,2,0,0,0,0,0,0,3,
					0,0,0,7,0,0,5,0,6,
					0,5,0,8,0,6,7,0,0,
					3,0,0,0,1,9,8,2,4	], 
			dif: 2,
			nS: 21,
			sol: [	1,4,2,9,7,3,6,5,8,
					5,6,7,2,8,4,3,1,9,
					9,3,8,1,6,5,2,4,7,
					8,1,4,3,2,7,9,6,5,
					7,9,3,6,5,1,4,8,2,
					6,2,5,4,9,8,1,7,3,
					4,8,1,7,3,2,5,9,6,
					2,5,9,8,4,6,7,3,1,
					3,7,6,5,1,9,8,2,4	]
		},

		{	s: [	5,3,0,9,0,7,1,4,0,
					0,1,0,0,6,0,0,0,5,
					0,0,0,3,0,1,6,0,7,
					0,2,0,5,1,0,3,0,0,
					6,0,0,0,0,0,0,0,1,
					0,0,3,0,4,8,0,6,0,
					3,0,1,8,0,4,0,0,0,
					8,0,0,0,2,0,0,9,0,
					0,9,2,6,0,5,0,1,3	], 
			dif: 4,
			nS: 22,
			sol: [	5,3,6,9,8,7,1,4,2,
					7,1,8,4,6,2,9,3,5,
					2,4,9,3,5,1,6,8,7,
					9,2,4,5,1,6,3,7,8,
					6,8,7,2,3,9,4,5,1,
					1,5,3,7,4,8,2,6,9,
					3,7,1,8,9,4,5,2,6,
					8,6,5,1,2,3,7,9,4,
					4,9,2,6,7,5,8,1,3	]
		},

		{	s: [	0,0,2,0,0,0,0,0,3,
					0,0,0,8,0,0,0,9,6,
					0,7,4,0,3,0,0,0,8,
					0,0,0,0,9,0,4,0,0,
					0,6,0,3,0,2,0,8,0,
					0,0,3,0,1,0,0,0,0,
					4,0,0,0,8,0,1,7,0,
					7,1,0,0,0,9,0,0,0,
					5,0,0,0,0,0,8,0,0	], 
			dif: 4,
			nS: 23,
			sol: [	8,9,2,0,0,0,5,4,3,
					3,5,1,8,2,4,7,9,6,
					6,7,4,9,3,5,2,1,8,
					2,8,0,0,9,0,4,3,1,
					1,6,0,3,4,2,9,8,0,
					9,4,3,0,1,8,6,0,0,
					4,0,0,0,8,0,1,7,0,
					7,1,8,0,0,9,3,0,0,
					5,0,0,0,0,0,8,0,0	]
		},


		{	s: [	0,0,0,0,0,0,0,0,1,
					0,0,0,0,0,0,0,2,3,
					0,0,4,0,0,5,0,0,0,
					0,0,0,1,0,0,0,0,0,
					0,0,0,0,3,0,6,0,0,
					0,0,7,0,0,0,5,8,0,
					0,0,0,0,6,7,0,0,0,
					0,1,0,0,0,4,0,0,0,
					5,2,0,0,0,0,0,0,0	],  
			dif: 4,
			nS: 24,
			// sol: [	8,9,2,0,0,0,5,4,3,
			// 		3,5,1,8,2,4,7,9,6,
			// 		6,7,4,9,3,5,2,1,8,
			// 		2,8,0,0,9,0,4,3,1,
			// 		1,6,0,3,4,2,9,8,0,
			// 		9,4,3,0,1,8,6,0,0,
			// 		4,0,0,0,8,0,1,7,0,
			// 		7,1,8,0,0,9,3,0,0,
			// 		5,0,0,0,0,0,8,0,0	]
			sol: [	0,0,0,0,0,0,0,5,1,
					0,5,1,0,0,0,0,2,3,
					0,0,4,0,1,5,0,0,0,
					0,0,0,1,0,0,0,0,0,
					0,0,0,0,3,0,6,1,0,
					1,3,7,0,0,0,5,8,0,
					0,0,0,0,6,7,1,0,0,
					7,1,0,0,0,4,0,0,0,
					5,2,0,0,0,1,0,0,0	]
		},

		{	s: [	0,0,0,2,1,0,0,0,0,
					0,0,7,3,0,0,0,0,0,
					0,5,8,0,0,0,0,0,0,
					4,3,0,0,0,0,0,0,0,
					2,0,0,0,0,0,0,0,8,
					0,0,0,0,0,0,0,7,6,
					0,0,0,0,0,0,2,5,0,
					0,0,0,0,0,7,3,0,0,
					0,0,0,0,9,8,0,0,0	],   
			dif: 4,
			nS: 25,
			sol: [	6,4,3,2,1,5,8,9,7,
					1,2,7,3,8,9,6,4,5,
					9,5,8,7,6,4,1,2,3,
					4,3,5,8,7,6,9,1,2,
					2,7,6,9,5,1,4,3,8,
					8,9,1,4,3,2,5,7,6,
					7,8,9,6,4,3,2,5,1,
					5,6,4,1,2,7,3,8,9,
					3,1,2,5,9,8,7,6,4	]
		},


		{	s: [	0,0,0,0,4,0,0,0,0,
					1,2,0,0,0,0,0,7,3,
					0,3,0,0,0,8,0,0,0,
					0,0,4,0,0,0,6,0,0,
					0,0,0,2,0,3,0,0,0,
					0,0,5,0,0,0,0,0,0,
					0,0,6,0,9,0,5,0,0,
					0,7,0,0,0,0,0,2,0,
					0,0,0,0,0,0,0,0,0	],    
			dif: 4,
			nS: 26,
			sol: [	6,5,9,3,4,7,2,8,1,
					1,2,8,6,5,9,4,7,3,
					4,3,7,1,2,8,9,5,6,
					3,8,4,9,7,5,6,1,2,
					7,9,1,2,6,3,8,4,5,
					2,6,5,8,1,4,3,9,7,
					8,1,6,7,9,2,5,3,4,
					5,7,3,4,8,6,1,2,9,
					9,4,2,5,3,1,7,6,8	]
		},

		{	s: [	0,0,0,0,0,0,0,0,0,
					1,2,0,0,0,0,0,8,4,
					0,3,0,0,0,0,0,7,0,
					0,0,4,0,0,0,6,0,0,
					0,0,0,2,0,3,0,0,0,
					0,0,5,0,0,0,9,0,0,
					0,0,6,0,9,0,5,0,0,
					0,7,0,0,0,0,0,2,0,
					0,0,0,0,5,0,0,0,0	],     
			dif: 4,
			nS: 27,
			sol: [	4,5,0,0,0,0,0,0,0,
					1,2,0,0,0,0,3,8,4,
					6,3,0,0,0,0,0,7,5,
					0,0,4,0,0,0,6,0,0,
					0,0,0,2,0,3,0,5,0,
					0,0,5,0,0,0,9,0,0,
					0,0,6,0,9,0,5,0,0,
					5,7,0,0,0,0,0,2,0,
					0,0,0,0,5,0,0,0,0	]
		},

		{	s: [	0,6,0,0,1,0,0,3,4,
					7,0,0,0,2,0,0,0,8,
					0,1,0,7,0,5,0,0,0,
					0,9,4,0,0,0,0,0,0,
					1,5,0,0,0,0,0,4,3,
					0,0,0,0,0,0,2,1,0,
					0,0,0,2,0,7,0,8,0,
					4,0,0,0,8,0,0,7,1,
					8,7,0,0,5,0,0,9,0	],     
			dif: 4,
			nS: 28,
			sol: [	5,6,2,8,1,9,7,3,4,
					7,4,9,3,2,6,1,5,8,
					3,1,8,7,4,5,9,2,6,
					2,9,4,1,3,8,5,6,7,
					1,5,7,6,9,2,8,4,3,
					6,8,3,5,7,4,2,1,9,
					9,3,1,2,6,7,4,8,5,
					4,2,5,9,8,3,6,7,1,
					8,7,6,4,5,1,3,9,2	]
		},

		{	s: [	0,5,0,2,0,0,0,1,0,
					0,7,2,6,5,0,0,0,0,
					0,0,0,0,4,9,5,0,0,
					6,0,4,0,0,0,2,0,5,
					0,0,0,0,0,0,0,0,0,
					7,0,5,0,0,0,9,0,3,
					0,0,6,3,1,0,0,0,0,
					0,0,0,0,6,8,4,2,0,
					0,8,0,0,0,5,0,6,0	],     
			dif: 4,
			nS: 29,
			sol: [	4,5,9,2,8,3,6,1,7,
					3,7,2,6,5,1,8,9,4,
					1,6,8,7,4,9,5,3,2,
					6,9,4,1,3,7,2,8,5,
					8,2,3,5,9,4,1,7,6,
					7,1,5,8,2,6,9,4,3,
					9,4,6,3,1,2,7,5,8,
					5,3,7,9,6,8,4,2,1,
					2,8,1,4,7,5,3,6,9	]
		},

		{	s: [	2,0,6,0,0,0,3,0,7,
					9,0,0,0,0,0,0,8,6,
					0,0,8,3,0,0,5,0,9,
					0,0,0,0,3,0,0,2,0,
					0,0,0,6,0,4,0,0,0,
					0,5,0,0,8,0,0,0,0,
					5,0,9,0,0,8,4,0,0,
					7,2,0,0,0,0,0,0,1,
					8,0,1,0,0,0,9,0,5	],     
			dif: 4,
			nS: 30,
			sol: [	2,1,6,8,5,9,3,4,7,
					9,3,5,4,7,1,2,8,6,
					4,7,8,3,2,6,5,1,9,
					6,9,4,5,3,7,1,2,8,
					1,8,2,6,9,4,7,5,3,
					3,5,7,1,8,2,6,9,4,
					5,6,9,7,1,8,4,3,2,
					7,2,3,9,4,5,8,6,1,
					8,4,1,2,6,3,9,7,5	]
		},

		{	s: [	7,0,0,0,2,0,0,5,0,
					4,0,0,6,0,0,0,0,0,
					3,8,0,0,0,0,0,7,2,
					5,0,8,4,0,0,9,0,0,
					0,0,0,0,7,0,0,0,0,
					0,0,9,0,0,3,8,0,7,
					2,6,0,0,0,0,0,8,4,
					0,0,0,0,0,5,0,0,6,
					0,5,0,0,3,0,0,0,1	],     
			dif: 4,
			nS: 31,
			sol: [	7,9,1,3,2,4,6,5,8,
					4,2,5,6,8,7,3,1,9,
					3,8,6,1,5,9,4,7,2,
					5,7,8,4,1,2,9,6,3,
					6,3,2,9,7,8,1,4,5,
					1,4,9,5,6,3,8,2,7,
					2,6,3,7,9,1,5,8,4,
					9,1,7,8,4,5,2,3,6,
					8,5,4,2,3,6,7,9,1	]
		},











	];





}