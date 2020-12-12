

// innanzitutto cerco di caricare i json su oggetti, array o array di oggetti 


// https://github.com/pcm-dpc/COVID-19



var loadderDataCov = function() {

	let loadder = this;

	this.dataLoadedObj = {}; // oggetto fatto come in descrizione


	// ---------------------------------------------------------------------------
	// HO CAMBIATO COSE QUI PER RENDERLO PIù SNELLO NEL DOWNLOAD DI NUOVI DATI
	// ora posso scaricare solo 3-4 file invece che tutta la cartella del dpc
	// ---------------------------------------------------------------------------


	// OLD
	
	// https://it.wikipedia.org/wiki/Percorso
	// this.dateFileLoad = "20200407";
	// this.pathFolderNoDate = "./COVID-19-master_";
	// this.pathFolderWDate = this.pathFolderNoDate + this.dateFileLoad + "/";

	// this.pathDatiJSON = this.pathFolderWDate + "dati-json/";



	// NEW

	this.dateFileLoad = "20201212";
	this.pathFolderNoDate = "dataCV/";
	this.pathFolderWDate = this.pathFolderNoDate;

	// this.pathDatiJSON = this.pathFolderWDate + "dati-json/";
	this.pathDatiJSON = this.pathFolderWDate;
	// ---------------------------------------------------------------------------

	// this.arrDatePossibili =["20200407","20200503","20200525","20200611","20200626","20201028","20201115","20201212"]



	// this.objNomiCartelle = {
	// 	"datiJson" : "dati-json",
	// 	"dati-regioni" : "dati-regioni",
	// 	"dati-province",
	// 	"dati-andamento-nazionale",
	// 	"aree",
	// 	"metadata",
	// 	"note",
	// 	"schede-riepilogative"};

	// this.arrayDateUtili = [];


	// Object.keys(Cov.dataLoadedObj.dati_json) : 
	// ["andamento_nazionale", "regioni", "province", "arrDatiNazionali", "arrRegioniGiornalieri", "arrRegioniDivise", "arrProvinceGiornalieri", "arrProvinceDivise"]

	// Cov.dataLoadedObj.dati_json.
	// arrDatiNazionali
	// arrRegioniDivise
	// arrProvinceDivise



	this.caricaTuttiDati = function() {
		loadder.caricaDatiJSON();
	}

	this.caricaDatiJSON = function() {

		loadder.dataLoadedObj.dati_json = {};

		loadder.caricaDataAndamentoNazionaleJSON();
		loadder.caricaDataRegioniJSON();
		loadder.caricaDataProvinceJSON();

	}



	this.caricaDataAndamentoNazionaleJSON = function() {

		let objDatiJSON = loadder.dataLoadedObj.dati_json;
		let newIndirizzo = loadder.pathDatiJSON + "dpc-covid19-ita-andamento-nazionale.json";

		objDatiJSON.andamento_nazionale = loadJSON(newIndirizzo,loadder.miglioraDatiNazionaliJSON);

	}

	this.miglioraDatiNazionaliJSON = function() {

		let objDatiJSON = loadder.dataLoadedObj.dati_json;
		objDatiJSON.arrDatiNazionali = [];
		objDatiJSON.arrDatiNazionali = Object.values(objDatiJSON.andamento_nazionale);

	}



	this.caricaDataRegioniJSON = function() {

		let objDatiJSON = loadder.dataLoadedObj.dati_json;
		let newIndirizzo = loadder.pathDatiJSON + "dpc-covid19-ita-regioni.json";

		objDatiJSON.regioni = loadJSON(newIndirizzo,loadder.miglioraRegioniJSON);
		
	}

	this.miglioraRegioniJSON = function() {

		let objDatiJSON = loadder.dataLoadedObj.dati_json;
		objDatiJSON.arrRegioniGiornalieri = [];
		objDatiJSON.arrRegioniGiornalieri = Object.values(objDatiJSON.regioni);
		// objDatiJSON.arrObj
		
		loadder.creaSingoleRegioni();

	}

	this.creaSingoleRegioni = function() { // fare check sul numero totale di dati

		let objDatiJSON = loadder.dataLoadedObj.dati_json;

		objDatiJSON.arrRegioniDivise = [];
		// regioni #1 indexed
		for(let i = 1; i < 21; i++) {
			objDatiJSON.arrRegioniDivise.push(objDatiJSON.arrRegioniGiornalieri.filter(x => x.codice_regione == i));
		}

		Puls.creaSelectorReg();

		console.log("Finite Regioni");

	}



	this.caricaDataProvinceJSON = function() {

		let objDatiJSON = loadder.dataLoadedObj.dati_json;
		let newIndirizzo = loadder.pathDatiJSON + "dpc-covid19-ita-province.json";

		objDatiJSON.province = loadJSON(newIndirizzo,loadder.miglioraProvinceJSON);
		
	}

	this.miglioraProvinceJSON = function() {

		let objDatiJSON = loadder.dataLoadedObj.dati_json;
		objDatiJSON.arrProvinceGiornalieri = [];
		objDatiJSON.arrProvinceGiornalieri = Object.values(objDatiJSON.province);
		// objDatiJSON.arrObj
		
		loadder.creaSingoleProvince();

	}

	this.creaSingoleProvince = function() { // fare check sul numero totale di dati

		let objDatiJSON = loadder.dataLoadedObj.dati_json;

		objDatiJSON.arrProvinceDivise = [];
		// fa mega schifo così ed è lento ma lo tengo così al momento, sarebbe da modificare 
		// mettendo uno ad uno al posto giusto invece che fare array vuoti e poi eliminarli
		// filtrando migliaia di volte
		for(let i = 0; i < 1000; i++) {
			objDatiJSON.arrProvinceDivise.push(objDatiJSON.arrProvinceGiornalieri.filter(x => x.codice_provincia == i));
			objDatiJSON.arrProvinceDivise = objDatiJSON.arrProvinceDivise.filter(x => x.length > 0);
		}

		// aggiungo nuovi_positivi come differenza fra totale_casi di oggi e totale_casi di ieri
		for(let i = 0; i < objDatiJSON.arrProvinceDivise.length; i++) {
			objDatiJSON.arrProvinceDivise[i][0].nuovi_positivi = objDatiJSON.arrProvinceDivise[i][0].totale_casi;
			for(let g = 1; g < objDatiJSON.arrProvinceDivise[i].length; g++) {
				objDatiJSON.arrProvinceDivise[i][g].nuovi_positivi = objDatiJSON.arrProvinceDivise[i][g].totale_casi - objDatiJSON.arrProvinceDivise[i][g-1].totale_casi;
			}
		}

		Puls.creaSelectorProv();

		console.log("Finite Province");

		fineCaricamentoDati = true;
		flagUpdateDraw = true;


	}








	this.caricaTuttiDati();



}
