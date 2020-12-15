// Andrea Gemmani 2020 01 07 
// Github Andrea Gemmani
// json editor v0.0.2

// link quasi importanti
// https://p5js.org/reference/#/p5/select
// https://p5js.org/reference/#/p5/createButton
// https://thisinterestsme.com/change-select-option-javascript/



// link utili importanti
// https://github.com/processing/p5.js/wiki/Beyond-the-canvas
// https://stackoverflow.com/questions/602168/in-css-what-is-the-difference-between-and-when-declaring-a-set-of-styles



// altre cosine carine
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors/Color_picker_tool

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color

// https://www.w3schools.com/Css/css_form.asp
// https://stackoverflow.com/questions/24822659/why-this-css3-transition-is-not-working-when-i-unfocus-an-input-focus/24822854
// https://www.w3schools.com/css/css3_transitions.asp


// selector
// https://p5js.org/reference/#/p5/createSelect
// https://freefrontend.com/css-select-boxes/
// https://www.w3schools.com/tags/tag_select.asp
// https://www.w3schools.com/tags/tag_option.asp

// selector .option(nome,value) prende due argomenti (opzionali), il nome e il value, che 
// alla richiesta di value() restituisce il secondo argomento se presente, altrimenti il nome



// Date
// new Date();
// new Date(value);
// new Date(dateString);
// new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);



// .changed e .input
// https://www.youtube.com/watch?v=HsDVz2_Qgow
// https://www.youtube.com/watch?v=ZEy0_NLhdSE




// 	REGIONI 
// denominazione_regione 	[codice_regione]

// Piemonte 				[1]
// Valle d'Aosta 			[2]
// Lombardia 				[3]
// Trentino Alto Adige 		[4] (ma è diviso in 2 province (Bolzano e Trento), non ha dati regionali)
// Veneto 					[5]
// Friuli Venezia Giulia 	[6]
// Liguria 					[7]
// Emilia-Romagna 			[8]
// Toscana 					[9]
// Umbria 					[10]
// Marche 					[11]
// Lazio 					[12]
// Abruzzo 					[13]
// Molise 					[14]
// Campania 				[15]
// Puglia 					[16]
// Basilicata 				[17]
// Calabria 				[18]
// Sicilia 					[19]
// Sardegna 				[20]


// PROVINCE
// denominazione_provincia (denominazione_regione)		[codice_provincia]

// Torino (Piemonte) 					[1]
// Vercelli (Piemonte) 					[2]
// Novara (Piemonte) 					[3]
// Cuneo (Piemonte) 					[4]
// Asti (Piemonte) 						[5]
// Alessandria (Piemonte) 				[6]
// Aosta (Valle d'Aosta) 				[7]
// Imperia (Liguria) 					[8]
// Savona (Liguria) 					[9]
// Genova (Liguria) 					[10]
// La Spezia (Liguria)	 				[11]
// Varese (Lombardia) 					[12]
// Como (Lombardia) 					[13]
// Sondrio (Lombardia) 					[14]
// Milano (Lombardia) 					[15]
// Bergamo (Lombardia) 					[16]
// Brescia (Lombardia) 					[17]
// Pavia (Lombardia) 					[18]
// Cremona (Lombardia) 					[19]
// Mantova (Lombardia) 					[20]
// Bolzano (P.A. Bolzano)			 	[21]
// Trento (P.A. Trento) 				[22]
// Verona (Veneto) 						[23]
// Vicenza (Veneto) 					[24]
// Belluno (Veneto) 					[25]
// Treviso (Veneto) 					[26]
// Venezia (Veneto) 					[27]
// Padova (Veneto) 						[28]
// Rovigo (Veneto) 						[29]
// Udine (Friuli Venezia Giulia) 		[30]
// Gorizia (Friuli Venezia Giulia) 		[31]
// Trieste (Friuli Venezia Giulia) 		[32]
// Piacenza (Emilia-Romagna) 			[33]
// Parma (Emilia-Romagna) 				[34]
// Reggio nell'Emilia (Emilia-Romagna) 	[35]
// Modena (Emilia-Romagna) 				[36]
// Bologna (Emilia-Romagna) 			[37]
// Ferrara (Emilia-Romagna) 			[38]
// Ravenna (Emilia-Romagna) 			[39]
// Forlì-Cesena (Emilia-Romagna) 		[40]
// Pesaro e Urbino (Marche) 			[41]
// Ancona (Marche) 						[42]
// Macerata (Marche)					[43]
// Ascoli Piceno (Marche) 				[44]
// Massa Carrara (Toscana) 				[45]
// Lucca (Toscana) 						[46]
// Pistoia (Toscana) 					[47]
// Firenze (Toscana) 					[48]
// Livorno (Toscana) 					[49]
// Pisa (Toscana) 						[50]
// Arezzo (Toscana) 					[51]
// Siena (Toscana) 						[52]
// Grosseto (Toscana) 					[53]
// Perugia (Umbria) 					[54]
// Terni (Umbria) 						[55]
// Viterbo (Lazio) 						[56]
// Rieti (Lazio) 						[57]
// Roma (Lazio) 						[58]
// Latina (Lazio) 						[59]
// Frosinone (Lazio) 					[60]
// Caserta (Campania) 					[61]
// Benevento (Campania) 				[62]
// Napoli (Campania) 					[63]
// Avellino (Campania) 					[64]
// Salerno (Campania) 					[65]
// L'Aquila (Abruzzo) 					[66]
// Teramo (Abruzzo) 					[67]
// Pescara (Abruzzo) 					[68]
// Chieti (Abruzzo) 					[69]
// Campobasso (Molise) 					[70]
// Foggia (Puglia) 						[71]
// Bari (Puglia) 						[72]
// Taranto (Puglia) 					[73]
// Brindisi (Puglia) 					[74]
// Lecce (Puglia) 						[75]
// Potenza (Basilicata) 				[76]
// Matera (Basilicata) 					[77]
// Cosenza (Calabria) 					[78]
// Catanzaro (Calabria) 				[79]
// Reggio di Calabria (Calabria) 		[80]
// Trapani (Sicilia) 					[81]
// Palermo (Sicilia) 					[82]
// Messina (Sicilia) 					[83]
// Agrigento (Sicilia) 					[84]
// Caltanissetta (Sicilia) 				[85]
// Enna (Sicilia) 						[86]
// Catania (Sicilia) 					[87]
// Ragusa (Sicilia) 					[88]
// Siracusa (Sicilia) 					[89]
// Sassari (Sardegna) 					[90]
// Nuoro (Sardegna) 					[91]
// Cagliari (Sardegna) 					[92]
// Pordenone (Friuli Venezia Giulia) 	[93]
// Isernia (Molise) 					[94]
// Oristano (Sardegna) 					[95]
// Biella (Piemonte) 					[96]
// Lecco (Lombardia) 					[97]
// Lodi (Lombardia) 					[98]
// Rimini (Emilia-Romagna) 				[99]
// Prato (Toscana) 						[100]
// Crotone (Calabria) 					[101]
// Vibo Valentia (Calabria) 			[102]
// Verbano-Cusio-Ossola (Piemonte) 		[103]
// Monza e della Brianza (Lombardia) 	[108]
// Fermo (Marche) 						[109]
// Barletta-Andria-Trani (Puglia) 		[110]
// Sud Sardegna (Sardegna) 				[111]
// Fuori Regione / Provincia Autonoma (Abruzzo) 				[879]
// Fuori Regione / Provincia Autonoma (Basilicata)				[880]
// Fuori Regione / Provincia Autonoma (P.A. Bolzano) 			[881]
// Fuori Regione / Provincia Autonoma (Calabria) 				[882]
// Fuori Regione / Provincia Autonoma (Campania) 				[883]
// Fuori Regione / Provincia Autonoma (Emilia-Romagna) 			[884]
// Fuori Regione / Provincia Autonoma (Friuli Venezia Giulia) 	[885]
// Fuori Regione / Provincia Autonoma (Lazio) 					[886]
// Fuori Regione / Provincia Autonoma (Liguria) 				[887]
// Fuori Regione / Provincia Autonoma (Lombardia) 				[888]
// Fuori Regione / Provincia Autonoma (Marche) 					[889]
// Fuori Regione / Provincia Autonoma (Molise) 					[890]
// Fuori Regione / Provincia Autonoma (Piemonte) 				[891]
// Fuori Regione / Provincia Autonoma (Puglia) 					[892]
// Fuori Regione / Provincia Autonoma (Sardegna) 				[893]
// Fuori Regione / Provincia Autonoma (Sicilia) 				[894]
// Fuori Regione / Provincia Autonoma (Toscana) 				[895]
// Fuori Regione / Provincia Autonoma (P.A. Trento) 			[896]
// Fuori Regione / Provincia Autonoma (Umbria) 					[897]
// Fuori Regione / Provincia Autonoma (Valle d'Aosta) 			[898]
// Fuori Regione / Provincia Autonoma (Veneto) 					[899]
// In fase di definizione/aggiornamento (Abruzzo) 				[979]
// In fase di definizione/aggiornamento (Basilicata) 			[980]
// In fase di definizione/aggiornamento (P.A. Bolzano) 			[981]
// In fase di definizione/aggiornamento (Calabria) 				[982]
// In fase di definizione/aggiornamento (Campania) 				[983]
// In fase di definizione/aggiornamento (Emilia-Romagna) 		[984]
// In fase di definizione/aggiornamento (Friuli Venezia Giulia) [985]
// In fase di definizione/aggiornamento (Lazio) 				[986]
// In fase di definizione/aggiornamento (Liguria) 				[987]
// In fase di definizione/aggiornamento (Lombardia) 			[988]
// In fase di definizione/aggiornamento (Marche) 				[989]
// In fase di definizione/aggiornamento (Molise) 				[990]
// In fase di definizione/aggiornamento (Piemonte) 				[991]
// In fase di definizione/aggiornamento (Puglia) 				[992]
// In fase di definizione/aggiornamento (Sardegna) 				[993]
// In fase di definizione/aggiornamento (Sicilia) 				[994]
// In fase di definizione/aggiornamento (Toscana) 				[995]
// In fase di definizione/aggiornamento (P.A. Trento) 			[996]
// In fase di definizione/aggiornamento (Umbria) 				[997]
// In fase di definizione/aggiornamento (Valle d'Aosta) 		[998]
// In fase di definizione/aggiornamento (Veneto) 				[999]










var Pulsantiera = function() {
	

	// 
	let graph = Graph3r;

	let handGra = HandlerGraph;

	let carData = Cov;

	let puls = this;



	this.baseXPuls = width / 2;
	// this.baseXPuls = width * 60 / 100;
	this.baseYPuls = height + 30;

	this.xDopoCanvas = width + 25;




	this.constRefreshFunc = function() {
		flagConstantRefresh = puls.constRefreshCheckbox.checked();
	}

	this.manualRefresh = function() {
		flagUpdateDraw = true;
	}

	this.cambiaLoop = function() {

		handGra.loopAttivo = puls.cambiaLoopCheckbox.checked();
		// handGra.loopAttivo = puls.cambiaLoopCheckbox.value();

		flagUpdateDraw = true;
	}

	this.frameRefreshFunc = function() {
		refreshFramesCount = round(60 / puls.sliderFrameRefresh.value()); // ?? 60/ ???

		// flagUpdateDraw = true;
	}

	this.allowConsoleErrFunc = function() {
		flagConsoleErrori = puls.allowConsoleErrCheckbox.checked();
	}
	this.allowConsoleSoftFunc = function() {
		flagConsoleSoft = puls.allowConsoleSoftCheckbox.checked();
	}
	this.allowConsoleHardFunc = function() {
		flagConsoleHard = puls.allowConsoleHardCheckbox.checked();
	}



	// this.cambiaProvCod = function() {

	// 	let ind = handGra.ricercaProvinciaNumero(puls.inpNumeroProv.value());

	// 	if( ind != -1 ) handGra.creaArrAnalProv(ind);
	// 	else console.log("Codice Provincia (" + puls.inpNumeroProv.value() + ") inesistente!");

	// 	flagUpdateDraw = true;
	// }

	this.cercaProv = function() {

		let ind = handGra.ricercaProvinciaNome(puls.inpNomeProv.value());

		if( ind != -1 ) handGra.creaArrAnalProv(ind);
		else {

			ind = handGra.ricercaProvinciaNumero(puls.inpNomeProv.value());

			if( ind != -1 ) handGra.creaArrAnalProv(ind);
			else console.log("Nome/Codice Provincia (" + puls.inpNomeProv.value() + ") inesistente!");
		}

		flagUpdateDraw = true;
	}



	this.mostraDatiRegioni = function() {
		handGra.creaArrAnalReg();
	}

	this.mostraDatiNazionali = function() {
		handGra.creaArrAnalNazi();
	}

	this.mostraDatiTotCasiProv = function() {
		puls.sortProvByTotCasiToday();
		handGra.creaDatiTotCasiProvince();
	}
	this.mostraDatiNewCasiProv = function() {
		puls.sortProvByNewCasiToday();
		handGra.creaDatiNewCasiProvince();
	}
	this.mostraDatiTotCasiReg = function() {
		puls.sortRegByTotCasiToday();
		handGra.creaDatiTotCasiRegioni();
	}








	this.nuoviValAssi = function() {
		Graph3r.forzaGraphMinMaxVal(puls.sliderAsseYmin.value(),puls.sliderAsseYmax.value(),puls.sliderAsseXmin.value(),puls.sliderAsseXmax.value());
				
		handGra.valBloccati[0] = puls.sliderAsseYmin.value();
		handGra.valBloccati[1] = puls.sliderAsseYmax.value();
		handGra.valBloccati[2] = puls.sliderAsseXmin.value();
		handGra.valBloccati[3] = puls.sliderAsseXmax.value();

		flagUpdateDraw = true;
	}

	this.ricalcolaPuntiToShow = function() {
		graph.primoGiornoShow = puls.sliderPrimoGiorno.value();
		graph.ultimoGiornoShow = puls.sliderUltimoGiorno.value();

		puls.sliderUltimoGiorno.elt.min = puls.sliderPrimoGiorno.value() + 2;
		puls.sliderUltimoGiorno.elt.max = 250;
		puls.sliderPrimoGiorno.elt.max = puls.sliderUltimoGiorno.value() - 2;
		puls.sliderPrimoGiorno.elt.min = 0;

		graph.ricalcolaTutto();

		flagUpdateDraw = true;
	}


	this.graphModifiche = function() {
		Graph3r.dimBall = puls.sliderDimBall.value();
		Graph3r.spessoreLinee = puls.sliderDimLinee.value();

		flagUpdateDraw = true;
	}





	// this.sortProvByLat = function() { // TODO maybe
	// 	handGra.sortProvByLat();
	// }

	this.sortProvByID = function() {
		handGra.sortProvByID();
		puls.creaSelectorProv();
	}
	this.sortProvByNome = function() {
		handGra.sortProvByNome();
		puls.creaSelectorProv();
	}
	this.sortProvByRegione = function() {
		handGra.sortProvByRegione();
		puls.creaSelectorProv();
	}
	this.sortProvByTotCasiToday = function() {
		handGra.sortProvByTotCasiToday();
		puls.creaSelectorProv();
	}
	this.sortProvByNewCasiToday = function() {
		handGra.sortProvByNewCasiToday();
		puls.creaSelectorProv();
	}


	this.sortRegByID = function() {
		handGra.sortRegByID();
		puls.creaSelectorReg();
	}
	this.sortRegByNome = function() {
		handGra.sortRegByNome();
		puls.creaSelectorReg();
	}
	this.sortRegByTotCasiToday = function() {
		handGra.sortRegByTotCasiToday();
		puls.creaSelectorReg();
	}


	// this.sortRegByTotMortiToday = function() {
	// 	handGra.sortRegByTotMortiToday();
	// }
	// this.sortRegByTotTerapieToday = function() {
	// 	handGra.sortRegByTotTerapieToday();
	// }










	this.selezionaProvinciaBySelector = function() {

		let ind = handGra.ricercaProvinciaNumero(puls.selectorProv.value());

		if( ind != -1 ) handGra.creaArrAnalProv(ind);
		else console.log("Nome/Codice Provincia (" + puls.inpNomeProv.value() + ") inesistente!");
	}

	this.selezionaRegioneBySelector = function() {

		let ind = handGra.ricercaRegioneNumero(puls.selectorReg.value());

		if( ind != -1 ) handGra.creaArrAnalReg(ind);
		else console.log("Nome/Codice Regione (" + puls.inpNomeProv.value() + ") inesistente!");
	}

	this.creaSelectorProv = function(posX,posY) {
		let posX_ = posX || 20;
		let posY_ = posY || puls.baseYPuls + 25;
		// let posY_ = posY || puls.baseYPuls + 25 + totGraficiAct * 20;
		puls.selectorProv = createSelect().position(posX_,posY_);
		puls.selectorProv.option("-- provincia non selezionata --", null);
		
		let smMDjson = Cov.dataLoadedObj.dati_json;

		// infilare sorting a piacere
		// puls.sortByTotCasiToday();
		// let shshhs = "";

		for(let i = 0; i < smMDjson.arrProvinceDivise.length; i++) {
			// let str = smMDjson.arrProvinceDivise[i][0].denominazione_provincia + " [" + smMDjson.arrProvinceDivise[i][0].codice_provincia + "]";

			let nomeProv = smMDjson.arrProvinceDivise[i][0].denominazione_provincia;
			let nomeReg = smMDjson.arrProvinceDivise[i][0].denominazione_regione;
			let codiceProv = smMDjson.arrProvinceDivise[i][0].codice_provincia;

			let nomeLegenda = "" + nomeProv + " (" + nomeReg + ") [" + codiceProv +"]";
			// shshhs += (nomeLegenda + "\n");


			puls.selectorProv.option(nomeLegenda,codiceProv);
		}
		// console.log(shshhs);
		puls.selectorProv.changed(puls.selezionaProvinciaBySelector);
	}

	this.creaSelectorReg = function(posX,posY) {
		let posX_ = posX || 20;
		let posY_ = posY || puls.baseYPuls + 50;
		// let posY_ = posY || puls.baseYPuls + 25 + totGraficiAct * 20;
		puls.selectorReg = createSelect().position(posX_,posY_);
		puls.selectorReg.option("-- regione non selezionata --", null);
		
		let smMDjson = Cov.dataLoadedObj.dati_json;

		// infilare sorting a piacere
		// puls.sortByTotCasiToday();

		for(let i = 0; i < smMDjson.arrRegioniDivise.length; i++) {
			// praticamente il Trentino non esiste, è diviso in Trento e Bolzano e la regione in sè
			// non ha dati, quindi esplosioni che neanche con try-catch
			if(smMDjson.arrRegioniDivise[i].length) { // controllo se è array non vuoto controllando length
				let nomeReg = smMDjson.arrRegioniDivise[i][0].denominazione_regione || "";
				let codiceReg = smMDjson.arrRegioniDivise[i][0].codice_regione || "";

				let nomeLegenda = "" + nomeReg + " [" + codiceReg +"]";

				puls.selectorReg.option(nomeLegenda,codiceReg);
			}
			else {
				puls.selectorReg.option("Trentino (non esiste, cerca Bolzano [21] o Trento [22] fra province)",null);
			}

		}
		puls.selectorReg.changed(puls.selezionaRegioneBySelector);

	}










	this.sortProvByIDButt = createButton("sortProvByID").position(puls.xDopoCanvas, 20);
	this.sortProvByIDButt.mousePressed(puls.sortProvByID);
	this.sortProvByNomeButt = createButton("sortProvByNome").position(puls.xDopoCanvas, 40);
	this.sortProvByNomeButt.mousePressed(puls.sortProvByNome);
	this.sortProvByRegioneButt = createButton("sortProvByRegione").position(puls.xDopoCanvas, 60);
	this.sortProvByRegioneButt.mousePressed(puls.sortProvByRegione);
	this.sortProvByTotCasiTodayButt = createButton("sortProvByTotCasiToday").position(puls.xDopoCanvas, 80);
	this.sortProvByTotCasiTodayButt.mousePressed(puls.sortProvByTotCasiToday);
	this.sortProvByNewCasiTodayButt = createButton("sortProvByNewCasiToday").position(puls.xDopoCanvas, 100);
	this.sortProvByNewCasiTodayButt.mousePressed(puls.sortProvByNewCasiToday);


	this.sortRegByIDButt = createButton("sortRegByID").position(puls.xDopoCanvas, 170);
	this.sortRegByIDButt.mousePressed(puls.sortRegByID);
	this.sortRegByNomeButt = createButton("sortRegByNome").position(puls.xDopoCanvas, 190);
	this.sortRegByNomeButt.mousePressed(puls.sortRegByNome);
	// this.sortRegByRegioneButt = createButton("sortRegByRegione").position(puls.xDopoCanvas, 160);
	// this.sortRegByRegioneButt.mousePressed(puls.sortRegByRegione);
	this.sortRegByTotCasiTodayButt = createButton("sortRegByTotCasiToday").position(puls.xDopoCanvas, 230);
	this.sortRegByTotCasiTodayButt.mousePressed(puls.sortRegByTotCasiToday);



	this.mostraDatiNazionaliButt = createButton("mostra DatiNazionali").position(puls.xDopoCanvas, 330);
	this.mostraDatiNazionaliButt.mousePressed(puls.mostraDatiNazionali);

	this.mostraRegioniButt = createButton("mostra Regioni").position(puls.xDopoCanvas, 350);
	this.mostraRegioniButt.mousePressed(puls.mostraDatiRegioni);



	this.datiTotCasiProvinceButt = createButton("mostra totCasi Province").position(puls.xDopoCanvas, 370);
	this.datiTotCasiProvinceButt.mousePressed(puls.mostraDatiTotCasiProv);
	this.datiNewCasiProvinceButt = createButton("mostra newCasi Province").position(puls.xDopoCanvas, 390);
	this.datiNewCasiProvinceButt.mousePressed(puls.mostraDatiNewCasiProv);
	this.datiTotCasiRegioniButt = createButton("mostra totCasi Regioni").position(puls.xDopoCanvas, 410);
	this.datiTotCasiRegioniButt.mousePressed(puls.mostraDatiTotCasiReg);




	this.constRefreshCheckbox = createCheckbox("constRefresh",flagConstantRefresh).position(520, this.baseYPuls-10);
	this.constRefreshCheckbox.changed(puls.constRefreshFunc);

	this.manualRefreshButt = createButton("manualRefresh").position(520, this.baseYPuls+10);
	this.manualRefreshButt.mousePressed(puls.manualRefresh);

	this.sliderFrameRefresh = createSlider(0.5,50,2,0.5).position(520, this.baseYPuls+55);
	this.sliderFrameRefresh.class("frameSlider").size(150);
	this.sliderFrameRefresh.input(puls.frameRefreshFunc);

	this.cambiaLoopCheckbox = createCheckbox("Loop",handGra.loopAttivo).position(520, this.baseYPuls+30);
	this.cambiaLoopCheckbox.changed(puls.cambiaLoop);

	this.allowConsoleErrCheckbox = createCheckbox("ConsoleErr",flagConsoleErrori).position(700, this.baseYPuls-10);
	this.allowConsoleErrCheckbox.changed(puls.allowConsoleErrFunc);
	this.allowConsoleSoftCheckbox = createCheckbox("ConsoleSoft",flagConsoleSoft).position(700, this.baseYPuls+10);
	this.allowConsoleSoftCheckbox.changed(puls.allowConsoleSoftFunc);
	this.allowConsoleHardCheckbox = createCheckbox("ConsoleHard",flagConsoleHard).position(700, this.baseYPuls+30);
	this.allowConsoleHardCheckbox.changed(puls.allowConsoleHardFunc);




	// this.inpNumeroProv = createInput('Codice Provincia').size(180).position(20,this.baseYPuls - 2);
	// this.inpNumeroProv.changed(puls.cambiaProvCod);
	// // https://stackoverflow.com/questions/9770354/empty-input-box-onclick-in-jquery


	this.inpNomeProv = createInput('Cerca Nome/Codice Provincia').size(220).position(20, this.baseYPuls - 2);
	this.inpNomeProv.changed(puls.cercaProv);




	// 

	this.sliderAsseYmax = createSlider(0,350000,25000,200).position(width/10-20, height/10);
	this.sliderAsseYmax.class("axisSlider").size(120); 
	this.sliderAsseYmax.style("transform-origin: 0 50% 0;"); // https://editor.p5js.org/allison.parrish/sketches/SkxnOk8bN (altro sito)
	// trasformo solo qui perché è una classe quindi facendolo più volte lo sposta male o FORSE NO 
	this.sliderAsseYmax.style("transform: rotate(" + 90 + "deg);");
	this.sliderAsseYmax.input(puls.nuoviValAssi);

	this.sliderAsseYmin = createSlider(0,30000,0,200).position(width/10-20, height*8/10);
	this.sliderAsseYmin.class("axisSlider").size(120);
	this.sliderAsseYmin.style("transform-origin: 0 50% 0;");
	this.sliderAsseYmin.style("transform: rotate(" + 270 + "deg);");
	this.sliderAsseYmin.input(puls.nuoviValAssi);

	// https://stackoverflow.com/questions/50777290/is-there-a-way-to-style-p5js-sliders-using-pure-javascript-and-without-html-css
	// https://stackoverflow.com/questions/4481485/changing-css-pseudo-element-styles-via-javascript
	// http://danielstern.ca/range.css/?ref=css-tricks#/
	this.sliderAsseXmax = createSlider(0,300,0,1).position(width*8/10, height*9/10+20);
	this.sliderAsseXmax.class("axisSlider").size(120);
	this.sliderAsseXmax.input(puls.nuoviValAssi);

	this.sliderAsseXmin = createSlider(0,300,0,1).position(width/10, height*9/10+20);
	this.sliderAsseXmin.class("axisSlider").size(120);
	this.sliderAsseXmin.input(puls.nuoviValAssi);


	this.sliderDimBall = createSlider(0,10,6,0.2).position(width*9/10-20, height*2/10);
	this.sliderDimBall.class("axisSlider").size(80);
	this.sliderDimBall.style("transform: rotate(" + 270 + "deg);");
	this.sliderDimBall.input(puls.graphModifiche);

	this.sliderDimLinee = createSlider(0,6,2.4,0.1).position(width*9/10-0, height*2/10);
	this.sliderDimLinee.class("axisSlider").size(80);
	this.sliderDimLinee.style("transform: rotate(" + 270 + "deg);");
	this.sliderDimLinee.input(puls.graphModifiche);


	this.sliderPrimoGiorno = createSlider(0,300,0,1).position(width*3/10, height*9/10+20);
	this.sliderPrimoGiorno.class("axisSlider").size(100);
	this.sliderPrimoGiorno.input(puls.ricalcolaPuntiToShow);

	this.sliderUltimoGiorno = createSlider(0,300,300,1).position(width*5/10, height*9/10+20);
	this.sliderUltimoGiorno.class("axisSlider").size(100);
	this.sliderUltimoGiorno.input(puls.ricalcolaPuntiToShow);

	// puls.sliderUltimoGiorno.elt.min = 200;

	// funzioni da eseguire per setting

	puls.nuoviValAssi();
	puls.graphModifiche();


}
