// Andrea Gemmani 14/03/2020
// GitHub Gimmmy97	https://github.com/Gimmmy97
// last vers 

// CoViD-19 (SARS2-nCov) data analysis 


/*							DATA 								*/

// mappe da opendatadpc arcgis
// http://opendatadpc.maps.arcgis.com/apps/opsdashboard/index.html#/b0c68bce2cce478eaac82fe38d4138b1

// DATI Italia
// Git dati Italia .CSV scaricabili (under Creative Commons)
// 		----> 	https://github.com/pcm-dpc/COVID-19 	<-----


/*				Linear regression on exponential data 			*/

// Stack Exchange on exponential regression
// https://stats.stackexchange.com/questions/324564/how-to-get-exponential-regression-equation-after-performing-linear-regression-on/324810
// un pdf così
// https://www.unm.edu/~marcusj/Regression1.pdf


/* 							GEOJSON 							*/
// geoJSON wiki
// https://it.wikipedia.org/wiki/GeoJSON
// geoJSON sito e tools
// https://geojson.org
// https://tools.ietf.org/html/rfc7946

// online editor di geoJSON (non dovrebbe servire per questo progetto ma ad esempio per navigatore or Plague)
// http://geojson.io/#map=2/20.0/0.0


/* 						DATA ANALYSIS							*/

// Our world in data 
// https://ourworldindata.org/coronavirus


/* 					Libraries for Data Analysis 				*/

// D3 Data-Driver Documents 
// https://d3js.org
// Observable su D3
// https://observablehq.com/@d3/gallery

// Learn JS Data
// http://learnjsdata.com

// Librerie varie per l'analisi dati
// https://www.monterail.com/blog/javascript-libraries-data-visualization


/* 						Altre cose utili 						*/

// tesi triennale in biomatematica, modelli SIR, SIS, SIRS...
// https://amslaurea.unibo.it/3093/1/Andraghetti_Sara_tesi.pdf 
// slide corso (breve) modelli SIR
// https://www1.mat.uniroma1.it/people/pensionati/lamberti/lauree/sir.pdf
// altre tesi credo
// http://www.science.unitn.it/~anal1/biomat/note/epidem_omog.pdf




/* 				Struttura repository dati Italia 				*/

/*
COVID-19/
│
├── andamento-nazionale/
│   ├── dpc-covid19-ita-andamento-nazionale-yyyymmdd.csv
├── aree/
│   ├── geojson
│   │   ├── dpc-covid19-ita-aree.geojson
│   ├── shp
│   │   ├── dpc-covid19-ita-aree.shp
├── dati-province/
│   ├── dpc-covid19-ita-province-yyyymmdd.csv
├── dati-json/
│   ├── dpc-covid19-ita-*.json
├── dati-regioni/
│   ├── dpc-covid19-ita-regioni-yyyymmdd.csv
├── schede-riepilogative/
│   ├── province
│   │   ├── dpc-covid19-ita-scheda-province-yyyymmdd.pdf
│   ├── regioni
│   │   ├── dpc-covid19-ita-scheda-regioni-yyyymmdd.pdf
*/





// ENORMI CAMBIAMENTI dal 20200330: 

/*

Modifica: "totale_attualmente_positivi" rinominato in "totale_positivi" (ricoverati_con_sintomi + terapia_intensiva + isolamento domiciliare) in "dati_regioni" e "dati_andamento_nazionale"
Modifica: "nuovi_attualmente_positivi" rinominato in "variazione_totale_positivi" (totale_attualmente positivi giorno corrente - totale_attualmente positivi giorno precedente) in "dati_regioni" e "dati_andamento_nazionale"
Aggiunta: "nuovi_positivi" (totale_casi giorno corrente - totale_casi giorno precedente) in "dati_regioni" e "dati_andamento_nazionale"
Modifica: Regione "Emilia Romagna" rinominato in "Emilia-Romagna" in "dati-regioni" e "dati-province" ("denominazione_regione")


*/



// RegExp ricerca parole in array 
// https://stackoverflow.com/questions/20189148/regex-used-in-javascript-array-indexof/20189522
// String.prototype.match()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
// String.prototype.search()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// ripasso RegExp
// https://eloquentjavascript.net/09_regexp.html

// come usare RegExp e funzioni su array o stringhe (?) per cercare e filtrare
// https://levelup.gitconnected.com/use-regex-and-javascript-to-improve-search-results-870932050d08











// altra gente che fa cose con i dati del Covid
// app
// https://github.com/ant9000/COVID19Italia
// database sqlint tipo
// https://gist.github.com/davide83/2299c1aa3d6468bb092d11b460655078
// excel
// https://github.com/hankskorpio/Covid19-ITA-EXCEL








// posti letto per regione (terapia intensiva)
// pdf al 2017
// http://www.salute.gov.it/imgs/C_17_pubblicazioni_2879_allegato.pdf
// csv al 2018
// http://www.dati.salute.gov.it/dati/dettaglioDataset.jsp?menu=dati&idPag=17
// articolo recente
// https://www.agi.it/fact-checking/news/2020-03-06/coronavirus-posti-letto-ospedali-7343251/
// articolo con dati aggionrati al Covid
// https://www.truenumbers.it/coronavirus-terapia-intensiva/



/* 								REGIONI

casi_da_screening: null
casi_da_sospetto_diagnostico: null
casi_testati: null
codice_regione: 8
data: "2020-02-24T18:00:00"
deceduti: 0
denominazione_regione: "Emilia-Romagna"
dimessi_guariti: 0
isolamento_domiciliare: 6
lat: 44.49436681
long: 11.3417208
note: null
nuovi_positivi: 18
ricoverati_con_sintomi: 10
stato: "ITA"
tamponi: 148
terapia_intensiva: 2
totale_casi: 18
totale_ospedalizzati: 12
totale_positivi: 18
variazione_totale_positivi: 0
*/





// Cov.masterMain.dati_json.arrProvinceDivise[14]
// Milano [14-15] data odierna 20200611
// totale_casi 23581
// popolazione provincia 3260000 città 1404239 abitanti

// Bologna [36-37] data odierna 20200611
// totale_casi 5066
// popolazione provincia 1010000 città 391000

// Rimini [98-99] data odierna 20200611
// totale_casi 2167
// popolazione provincia 340000 città 151000





var Cov;
var Graph3r;
var HandlerGraph;
var Puls;


var fineCaricamentoDati = false;

var flagUpdateDraw = true;
var flagConstantRefresh = false;
var refreshFramesCount;


var allowConsole = false;

var flagConsoleErrori = false;
var flagConsoleSoft = true;
var flagConsoleHard = false;

// var cnv;


function setup() {

	// cnv = createCanvas(800, 500);
	createCanvas(800, 500);

	Graph3r = new grapher2D();
	Cov = new loadderDataCov();
	HandlerGraph = new handlerPassaggioDati();
	Puls = new Pulsantiera();






	// frameRate(0.5);
	// frameRate(3);

	refreshFramesCount = 20;	// disegno solo ogni refreshFramesCount frames
	flagUpdateDraw = true;

	background(0);
}

draw = function() {

	if(fineCaricamentoDati) {

		// disegno solo ogni refreshFramesCount frames
		if(	flagUpdateDraw || ( flagConstantRefresh && 
			! ((frameCount + 10) % refreshFramesCount) ) ) {
			updateFunc();

		}

	}

}


updateFunc = function() {

	background(0);
	HandlerGraph.aggiorna();
	Graph3r.disegnaTutto();
	
	if(flagConsoleSoft) console.log("draw updated");
	flagUpdateDraw = false;
}

// function touchStarted() {
// 	return -1;
// }


// https://stackoverflow.com/questions/11019868/stoppropagation-with-tap-event
// https://forum.processing.org/two/discussion/12953/strange-right-click-behavior
// https://p5js.org/reference/#/p5/touchMoved
// https://forum.processing.org/two/discussion/15153/touch-interaction-in-canvas-without-page-scroll
function touchMoved() {
  // prevent default
  // return false;
  return true;
}




