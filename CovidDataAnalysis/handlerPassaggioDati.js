





// ENORMI CAMBIAMENTI dal 20200330: 

/*

Modifica: "totale_attualmente_positivi" rinominato in "totale_positivi" (ricoverati_con_sintomi + terapia_intensiva + isolamento domiciliare) in "dati_regioni" e "dati_andamento_nazionale"
Modifica: "nuovi_attualmente_positivi" rinominato in "variazione_totale_positivi" (totale_attualmente positivi giorno corrente - totale_attualmente positivi giorno precedente) in "dati_regioni" e "dati_andamento_nazionale"
Aggiunta: "nuovi_positivi" (totale_casi giorno corrente - totale_casi giorno precedente) in "dati_regioni" e "dati_andamento_nazionale"
Modifica: Regione "Emilia Romagna" rinominato in "Emilia-Romagna" in "dati-regioni" e "dati-province" ("denominazione_regione")


*/



	/*				Linear regression on exponential data 			*/

	// Stack Exchange on exponential regression
	// https://stats.stackexchange.com/questions/324564/how-to-get-exponential-regression-equation-after-performing-linear-regression-on/324810
	// un pdf così
	// https://www.unm.edu/~marcusj/Regression1.pdf






	// log e log10 e come trovare la base 
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log




	// vaffanculo Chrome di merda che non sai neanche riordinare un Array
	// https://forum.freecodecamp.org/t/the-sort-method-behaves-different-on-different-browsers/237221



var handlerPassaggioDati = function() {



	// lineare o logaritmico per ogni asse 
	// (in realtà asse x non dovrebbe diventare logaritmico)



	// contagi totali





	// elimina dati con zero
	// elimina prima n dati, modifica n con slider 
	// elimina dati specifici perché fuori norma (poi che farne?)



	// regressione lineare
	// regressine lineare su dati esponenziali






	let handGra = this;

	this.currReg = 0;

	this.currProv = 0;



	this.mostraLogScale = false;


	this.loopAttivo = false;


	this.valBloccati = [0,300000,0,100]; // minY, maxY, minX, maxX
	// this.valBloccati = [0,10000,0,100]; // minY, maxY, minX, maxX





	/*								CARICAMENTO DATI qui dentro							*/



	this.disegnaRegioni = function() {




	}


	this.disegnaProvinceContagi = function(cP,logOrLin) {

		handGra.loopAttivo = false;

		handGra.currProv = cP || 0;
		handGra.mostraLogScale = !! logOrLin; // to boolean just because

		handGra.creaArrAnalProv(handGra.currProv);

	}


	this.disegnaProvinceContagiLoop = function(logOrLin) {

		handGra.loopAttivo = true;

		handGra.mostraLogScale = !! logOrLin; // to boolean just because

		// if(handGra.currProv == Cov.dataLoadedObj.dati_json.arrProvinceDivise[codProv].length) handGra.currProv = 0;
		handGra.currProv %= Cov.dataLoadedObj.dati_json.arrProvinceDivise.length;

		handGra.creaArrAnalProv(handGra.currProv);

	}


	// this.disegnaProvinceContagiLin = function() {
	// 	handGra.mostraLogScale = false;
	// 	handGra.creaArrAnalProv(handGra.currProv);
	// 	handGra.currProv++;
	// }

	// this.disegnaProvinceContagiLog = function() {
	// 	handGra.mostraLogScale = true;
	// 	handGra.creaArrAnalProv(handGra.currProv);
	// 	handGra.currProv++;
	// }


	this.ricercaProvinciaNumero = function(cP) {

		let smMDjson = Cov.dataLoadedObj.dati_json;

		let codProv = cP || 0;

		for(let i = 0; i < smMDjson.arrProvinceDivise.length; i++) {
			if (codProv == smMDjson.arrProvinceDivise[i][0].codice_provincia) return i;
		}
		return -1;
	}

	this.ricercaRegioneNumero = function(cR) {

		let smMDjson = Cov.dataLoadedObj.dati_json;

		let codReg = cR || 0;

		for(let i = 0; i < smMDjson.arrRegioniDivise.length; i++) {
			if(smMDjson.arrRegioniDivise[i].length) {
				if (codReg == smMDjson.arrRegioniDivise[i][0].codice_regione) return i;
			}
		}
		return -1;
	}


	this.ricercaProvinciaNome = function(str) {

		let smMDjson = Cov.dataLoadedObj.dati_json;

		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Advanced_searching_with_flags_2
		// https://stackoverflow.com/questions/5424488/how-to-search-for-a-string-inside-an-array-of-strings
		
		let stringaSearch = str.toLowerCase() || ""; // per renderlo case insensitive 

		for (let i = 0; i < smMDjson.arrProvinceDivise.length; i++) {
			if (smMDjson.arrProvinceDivise[i][0].denominazione_provincia.toLowerCase().match(stringaSearch)) return i;
		}
		return -1;

	}

	this.ricercaRegioneNome = function(str) {

		let smMDjson = Cov.dataLoadedObj.dati_json;
		
		let stringaSearch = str.toLowerCase() || ""; // per renderlo case insensitive 

		for (let i = 0; i < smMDjson.arrRegioniDivise.length; i++) {
			if (smMDjson.arrRegioniDivise[i][0].denominazione_regione.toLowerCase().match(stringaSearch)) return i;
		}
		return -1;

	}


	this.creaArrAnalNazi = function() {

		let smMDjson = Cov.dataLoadedObj.dati_json;

		let nomeLegenda = "nazionali";

		let arrAnal = [];

		for(let i = 0; i < smMDjson.arrDatiNazionali.length; i++) {
			arrAnal.push(smMDjson.arrDatiNazionali[i].totale_casi);
		}

		console.log("Mostro dati contagi " + nomeLegenda);
		Graph3r.titoloGrafico = "Contagi " + nomeLegenda; // + fino al + lin o log ...

		if(handGra.mostraLogScale) {
			arrAnal = handGra.arrLinToLogE(arrAnal);
		}

		handGra.caricaQuestiDati(arrAnal);
	}


	this.creaArrAnalProv = function(ind) {

		let smMDjson = Cov.dataLoadedObj.dati_json;

		let codProv = ind || 0;
		let nomeProv = smMDjson.arrProvinceDivise[codProv][0].denominazione_provincia;
		let nomeReg = smMDjson.arrProvinceDivise[codProv][0].denominazione_regione;
		let codiceProv = smMDjson.arrProvinceDivise[codProv][0].codice_provincia;

		let nomeLegenda = "" + nomeProv + " (" + nomeReg + ") [" + codiceProv + "]";

		let arrAnal = [];

		for(let i = 0; i < smMDjson.arrProvinceDivise[codProv].length; i++) {
			arrAnal.push(smMDjson.arrProvinceDivise[codProv][i].totale_casi);
			// arrAnal.push(smMDjson.arrProvinceDivise[codProv][i].totale_casi);
		}

		console.log("Mostro dati contagi " + nomeLegenda);
		Graph3r.titoloGrafico = "Contagi " + nomeLegenda; // + fino al + lin o log ...

		if(handGra.mostraLogScale) {
			arrAnal = handGra.arrLinToLogE(arrAnal);
		}

		handGra.caricaQuestiDati(arrAnal);
	}


	this.creaArrAnalReg = function(cR) {

		let smMDjson = Cov.dataLoadedObj.dati_json;

		let codReg = cR || 0;
		let nomeReg = smMDjson.arrRegioniDivise[codReg][0].denominazione_regione;
		let codiceReg = smMDjson.arrRegioniDivise[codReg][0].codice_regione;

		let nomeLegenda = "" + nomeReg + " [" + codiceReg + "]";

		let arrAnal = [];

		for(let i = 0; i < smMDjson.arrRegioniDivise[codReg].length; i++) {
			arrAnal.push(smMDjson.arrRegioniDivise[codReg][i].totale_casi);
		}

		console.log("Mostro dati contagi " + nomeLegenda);
		Graph3r.titoloGrafico = "Contagi " + nomeLegenda; // + fino al + lin o log ...

		if(handGra.mostraLogScale) {
			arrAnal = handGra.arrLinToLogE(arrAnal);
		}

		handGra.caricaQuestiDati(arrAnal);
	}


	this.creaDatiTotCasiProvince = function() {

		let smMDjson = Cov.dataLoadedObj.dati_json;

		let nomeLegenda = "totali, per provincia, ad oggi";

		let arrAnal = [];

		smMDjson.arrProvinceDivise.sort((a,b) => {
			// return a[a.length-1].totale_casi < b[b.length-1].totale_casi;
			return b[b.length-1].totale_casi - a[a.length-1].totale_casi;
		})

		for(let i = 0; i < smMDjson.arrProvinceDivise.length; i++) { 
			arrAnal.push(smMDjson.arrProvinceDivise[i][smMDjson.arrProvinceDivise[i].length-1].totale_casi);
			// console.log(i);
			// tipo aggiungere arrTostoCoiNomi.push(smMDjson.arrProvinceDivise[i][0].denominazione_provincia)
		}

		console.log("Mostro dati contagi " + nomeLegenda);
		Graph3r.titoloGrafico = "Contagi " + nomeLegenda; // + fino al + lin o log ...

		if(handGra.mostraLogScale) {
			arrAnal = handGra.arrLinToLogE(arrAnal);
		}

		handGra.caricaQuestiDati(arrAnal);
	}


	this.creaDatiNewCasiProvince = function() {

		let smMDjson = Cov.dataLoadedObj.dati_json;

		let nomeLegenda = "nuovi, per provincia, oggi";

		let arrAnal = [];

		smMDjson.arrProvinceDivise.sort((a,b) => {
			// return a[a.length-1].nuovi_positivi < b[b.length-1].nuovi_positivi;
			return b[b.length-1].nuovi_positivi - a[a.length-1].nuovi_positivi;
		})

		for(let i = 0; i < smMDjson.arrProvinceDivise.length; i++) { 
			arrAnal.push(smMDjson.arrProvinceDivise[i][smMDjson.arrProvinceDivise[i].length-1].nuovi_positivi);
			// console.log(i);
			// tipo aggiungere arrTostoCoiNomi.push(smMDjson.arrProvinceDivise[i][0].denominazione_provincia)
		}

		console.log("Mostro dati contagi " + nomeLegenda);
		Graph3r.titoloGrafico = "Contagi " + nomeLegenda; // + fino al + lin o log ...

		if(handGra.mostraLogScale) {
			arrAnal = handGra.arrLinToLogE(arrAnal);
		}

		handGra.caricaQuestiDati(arrAnal);
	}

	this.creaDatiTotCasiRegioni = function() {

		let smMDjson = Cov.dataLoadedObj.dati_json;

		let nomeLegenda = "totali, per Regione, ad oggi";

		let arrAnal = [];

		let indBolz = handGra.ricercaProvinciaNome("Bolz");
		let indTrent = handGra.ricercaProvinciaNome("Trento");
		let tdCasiBolzano = smMDjson.arrProvinceDivise[indBolz][smMDjson.arrProvinceDivise[indBolz].length-1].totale_casi;
		let tdCasiTrento = smMDjson.arrProvinceDivise[indTrent][smMDjson.arrProvinceDivise[indTrent].length-1].totale_casi;

		smMDjson.arrRegioniDivise.sort((a,b) => {
			// return a[a.length-1].totale_casi < b[b.length-1].totale_casi;
			// return 	(a[0] ? a[a.length-1].totale_casi : 0) < (b[0] ? b[b.length-1].totale_casi : 0);
			// return 	(a.length ? a[a.length-1].totale_casi : (tdCasiBolzano + tdCasiTrento)) 
			// 	<	(b.length ? b[b.length-1].totale_casi : (tdCasiBolzano + tdCasiTrento));
			return 	(b.length ? b[b.length-1].totale_casi : (tdCasiBolzano + tdCasiTrento)) - 
					(a.length ? a[a.length-1].totale_casi : (tdCasiBolzano + tdCasiTrento));
		})

		for(let i = 0; i < smMDjson.arrRegioniDivise.length; i++) {
			if(smMDjson.arrRegioniDivise[i].length)
				arrAnal.push(smMDjson.arrRegioniDivise[i][smMDjson.arrRegioniDivise[i].length-1].totale_casi);
			else arrAnal.push(tdCasiBolzano + tdCasiTrento);
			// console.log(i);
			// tipo aggiungere arrTostoCoiNomi.push(smMDjson.arrProvinceDivise[i][0].denominazione_provincia)
		}

		console.log("Mostro dati contagi " + nomeLegenda);
		Graph3r.titoloGrafico = "Contagi " + nomeLegenda; // + fino al + lin o log ...

		if(handGra.mostraLogScale) {
			arrAnal = handGra.arrLinToLogE(arrAnal);
		}

		handGra.caricaQuestiDati(arrAnal);
	}










/*										SORTING DATI 										*/



	this.sortProvByID = function() {
		let smMDjson = Cov.dataLoadedObj.dati_json;

		smMDjson.arrProvinceDivise.sort((a,b) => {
			// return a[0].codice_provincia > b[0].codice_provincia;
			return a[0].codice_provincia - b[0].codice_provincia;
		})
	}
	this.sortProvByNome = function() {
		let smMDjson = Cov.dataLoadedObj.dati_json;

		smMDjson.arrProvinceDivise.sort((a,b) => {
			// return a[0].denominazione_provincia > b[0].denominazione_provincia;
			// return a[0].denominazione_provincia - b[0].denominazione_provincia;
			return (a[0].denominazione_provincia > b[0].denominazione_provincia) ? 1 : -1;
		})
	}
	this.sortProvByTotCasiToday = function() {
		let smMDjson = Cov.dataLoadedObj.dati_json;
		// let todayForSort = smMDjson.arrProvinceDivise[0].length - 1;

		// for(let i = 0; i < smMDjson.arrProvinceDivise.length; i++) {
		// 	console.log(smMDjson.arrProvinceDivise[i][smMDjson.arrProvinceDivise[0].length-1].totale_casi);
		// 	console.log(i);
		// }

		// devo calcolare dinamicamente l'ultimo giorno e non posso usare todayForSort perché alcune
		// province hanno molti meno giorni, credo siano partite più tardi o abbiano smesso di aggiornarle

		smMDjson.arrProvinceDivise.sort((a,b) => {
			// return a[a.length-1].totale_casi < b[b.length-1].totale_casi;
			return b[b.length-1].totale_casi - a[a.length-1].totale_casi;
		})

		// for(let i = 0; i < smMDjson.arrProvinceDivise.length; i++) {
		// 	console.log(smMDjson.arrProvinceDivise[i][smMDjson.arrProvinceDivise[i].length-1].totale_casi);
		// 	// console.log(i);
		// }

	}
	this.sortProvByNewCasiToday = function() {
		let smMDjson = Cov.dataLoadedObj.dati_json;

		smMDjson.arrProvinceDivise.sort((a,b) => {
			// return a[a.length-1].nuovi_positivi < b[b.length-1].nuovi_positivi;
			return b[b.length-1].nuovi_positivi - a[a.length-1].nuovi_positivi;
		})
	}
	this.sortProvByRegione = function() {
		let smMDjson = Cov.dataLoadedObj.dati_json;

		smMDjson.arrProvinceDivise.sort((a,b) => {
			if( a[0].denominazione_provincia.includes("In fase") ) return 1;
			if( a[0].denominazione_provincia.includes("Fuori") ) return 1;
			if( a[0].denominazione_regione == b[0].denominazione_regione) return (a[0].denominazione_provincia > b[0].denominazione_provincia) ? 1 : -1;
				// return a[0].denominazione_provincia - b[0].denominazione_provincia;
			// return a[0].denominazione_regione - b[0].denominazione_regione;
			return (a[0].denominazione_regione > b[0].denominazione_regione) ? 1 : -1;
		})
	}




	this.sortRegByID = function() {
		let smMDjson = Cov.dataLoadedObj.dati_json;

		smMDjson.arrRegioniDivise.sort((a,b) => { // modifiche per Trentino [4]
			// return a[0].codice_regione > b[0].codice_regione;
			// return (a[0] ? a[0].codice_regione : 4) > (b[0] ? b[0].codice_regione : 4);
			return (a[0] ? a[0].codice_regione : 4) - (b[0] ? b[0].codice_regione : 4);
		})
	}
	this.sortRegByNome = function() {
		let smMDjson = Cov.dataLoadedObj.dati_json;

		smMDjson.arrRegioniDivise.sort((a,b) => { // modifiche per Trentino
			// return a[0].denominazione_regione > b[0].denominazione_regione;
			// return (a[0] ? a[0].denominazione_regione : "Trentino") > (b[0] ? b[0].denominazione_regione : "Trentino");
			// return (a[0] ? a[0].denominazione_regione : "Trentino") - (b[0] ? b[0].denominazione_regione : "Trentino");
			return ( (a[0] ? a[0].denominazione_regione : "Trentino") > (b[0] ? b[0].denominazione_regione : "Trentino") ) ? 1 : -1;
		})
	}
	this.sortRegByTotCasiToday = function() {
		let smMDjson = Cov.dataLoadedObj.dati_json;

		let indBolz = handGra.ricercaProvinciaNome("Bolz");
		let indTrent = handGra.ricercaProvinciaNome("Trento");
		let tdCasiBolzano = smMDjson.arrProvinceDivise[indBolz][smMDjson.arrProvinceDivise[indBolz].length-1].totale_casi;
		let tdCasiTrento = smMDjson.arrProvinceDivise[indTrent][smMDjson.arrProvinceDivise[indTrent].length-1].totale_casi;

		smMDjson.arrRegioniDivise.sort((a,b) => { // modifiche per Trentino come somma di casi Bolzano e Trento
			// return a[a.length-1].totale_casi < b[b.length-1].totale_casi;
			// return 	(a[0] ? a[a.length-1].totale_casi : 0) < (b[0] ? b[b.length-1].totale_casi : 0);
			return 	(b[0] ? b[b.length-1].totale_casi : tdCasiBolzano + tdCasiTrento) -
					(a[0] ? a[a.length-1].totale_casi : tdCasiBolzano + tdCasiTrento);
		})
	}
	this.sortRegByTotCasiToday = function() {
		let smMDjson = Cov.dataLoadedObj.dati_json;

		let indBolz = handGra.ricercaProvinciaNome("Bolz");
		let indTrent = handGra.ricercaProvinciaNome("Trento");
		let tdCasiBolzano = smMDjson.arrProvinceDivise[indBolz][smMDjson.arrProvinceDivise[indBolz].length-1].totale_casi;
		let tdCasiTrento = smMDjson.arrProvinceDivise[indTrent][smMDjson.arrProvinceDivise[indTrent].length-1].totale_casi;

		smMDjson.arrRegioniDivise.sort((a,b) => { // modifiche per Trentino come somma di casi Bolzano e Trento
			// return a[a.length-1].totale_casi < b[b.length-1].totale_casi;
			// return 	(a[0] ? a[a.length-1].totale_casi : 0) < (b[0] ? b[b.length-1].totale_casi : 0);
			return 	(b[0] ? b[b.length-1].totale_casi : tdCasiBolzano + tdCasiTrento) - 
					(a[0] ? a[a.length-1].totale_casi : tdCasiBolzano + tdCasiTrento);
		})
	}





























	/*							UPDATE DATI 							*/


	this.aggiorna = function() {



		// handGra.disegnaProvinceContagiLin();
		// handGra.disegnaProvinceContagiLog();

		// handGra.disegnaProvinceContagi(0);
		// handGra.disegnaProvinceContagi(1);


		// handGra.disegnaProvinceContagi(0);

		// handGra.disegnaProvinceContagi();

		if(handGra.loopAttivo) {
			handGra.currProv++;
			// if(handGra.mostraLogScale) {
			// 	handGra.disegnaProvinceContagiLoop(1);
			// }
			// else handGra.disegnaProvinceContagiLoop(0);

			handGra.disegnaProvinceContagiLoop(handGra.mostraLogScale);
		}

		// handGra.disegnaProvinceContagiLoop();




	}







	/*							MODIFICA DATI 							*/


	this.arrLinToLog10 = function(arrLin) {
		let arrLog = [];

		for(let i = 0; i < arrLin.length; i++) {
			// log base 10
			let newValLog = Math.log10( arrLin[i] );
			newValLog = newValLog < 0 ? 0 : newValLog;
			arrLog.push( newValLog );
		}

		console.log(arrLin);
		console.log(arrLog);
		return arrLog;

	}

	this.arrLinToLogE = function(arrLin) {
		let arrLog = [];

		for(let i = 0; i < arrLin.length; i++) {
			// log base e
			let newValLog = Math.log( arrLin[i] );			
			newValLog = newValLog < 0 ? 0 : newValLog;
			arrLog.push( newValLog );
		}

		console.log(arrLin);
		console.log(arrLog);
		return arrLog;

	}



	this.calcolaRegressioneLineare = function() {

	}















	/* 						CARICAMENTO DATI su Graph3r						*/


	this.caricaQuestiDati = function(arrFinale) {


		Graph3r.nuoviDati(arrFinale);


		Graph3r.forzaGraphMinMaxVal(handGra.valBloccati[0],
									handGra.valBloccati[1],
									handGra.valBloccati[2],
									handGra.valBloccati[3]);


		flagUpdateDraw = true;

	}






	
}
