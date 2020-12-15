




// https://mathworld.wolfram.com/LeastSquaresFitting.html
// https://stackoverflow.com/questions/6195335/linear-regression-in-javascript




// coordP.x = (coordMaxAssi.x-origineAssi.x)/scala.x*valP.x + origineAssi.x;
// coordP.y = (coordMaxAssi.y-origineAssi.y)/scala.y*valP.y + origineAssi.y;



var grapher2D = function(arrXused,arrYused) {


	let graph = this;


	// ____ posizioni e dimensioni grafico 

	this.OXY = createVector(window.width / 10, window.height * 9 / 10);

	this.fineX = createVector(window.width * 9 / 10, graph.OXY.y);
	this.fineY = createVector(graph.OXY.x , window.height / 10);

	this.widthGraph = Math.abs(this.fineX.x - this.OXY.x);
	this.heightGraph = Math.abs(this.fineY.y - this.OXY.y);


	// ____ DATI da mostrare 

	this.arrXused = arrXused || []; 	// array di dati (date dei dati)
	this.arrYused = arrYused || [];		// array di dati (valori dei dati) 

	this.maxX = 0;				// valore massimo e minimo delle date
	this.minX = Infinity;		
	this.maxY = 0;				// valore massimo e minimo dei valori
	this.minY = Infinity;

	graph.primoGiornoShow = 0;
	graph.ultimoGiornoShow = Infinity;


	this.dXvalori = graph.maxX - graph.minX; 	// span fra massimo e minimo date
	this.dYvalori = graph.maxY - graph.minY;	// span fra massimo e minimo valore dati

	this.dX = 0;
	this.dY = 0;

	graph.arrRegLin = [[],[]]; 	// array di dati per creazione regressione lineare sul set



	// ____ Titolo

	this.titoloGrafico = "Titolo grafico";
	this.posTitolo = createVector(window.width / 6, window.height / 6);
	this.dimTitolo = 12;



	// ____ tacche assi 

	this.arrValLineX = []; 		// valori singole tacche grafico, una pessima gestione potrebbe risultare in un casino :D
	this.arrValLineY = [];

	this.quantitaTaccheX = max(5,graph.arrValLineX.length); 				// quantità tacche 
	this.quantitaTaccheY = max(5,graph.arrValLineY.length);

	this.spaziaturaTaccheX = this.widthGraph / this.quantitaTaccheX;		// spaziatura fra tacche (forse useless e ridondante)
	this.spaziaturaTaccheY = this.heightGraph / this.quantitaTaccheY;


	// _____ dimensioni particolari (assi, punti...)

	this.spessoreAssi = 2;
	this.spessoreLinee = 4; 	// modifico da pulsantiera

	this.altezzaTacche = 6;
	this.spessoreTacche = 2;

	this.dimBall = 10; 			// modifico da pulsantiera


	// ____ Colori

	this.col1 = color(200,50,50);
	this.col2 = color(50,50,200);

	this.assiCol = color(200,200,200);
	this.taccheCol = color(200,200,200);

	this.colTitolo = color(200,200,50);





	this.opzioniGrafiche = { // potrei sposatre tutte le opzioni grafiche qui dentro maybe 

		// this.spessoreAssi = 2;
		// this.spessoreLinee = 4;

		// this.altezzaTacche = 6;
		// this.spessoreTacche = 2;

		// this.dimBall = 10;

		// this.col1 = color(200,50,50);
		// this.col2 = color(50,50,200);

		// this.assiCol = color(200,200,200);
		// this.taccheCol = color(200,200,200);

	};




	// ____ flags grafici

	this.flagTitolo = true;

	this.flagPunti = true;
	this.flagLinee = true;

	this.flagTacche = true;
	this.flagValTacche = true;
	this.flagValPuntiY = false;
	this.flagValPuntiX = false;

	this.flagLogScale = false;
	this.flagRegLin = false;

	// true: graph.minY (...) vengono forzati || false: graph.minY (...) vengono calcolati in base ai valori degli array
	this.flagForzaGraphMinMax = true; 







	/* 					RICALCOLO DATI 					*/



	this.calcolaMinMaxXY = function(y0,yM,x0,xM) {

		graph.maxX = 0;
		graph.minX = Infinity;
		graph.maxY = 0;
		graph.minY = Infinity;

		// ------ POSSIBLE ISSUE:  non lascio vecchi valori se non dovessero andar cambiati (??) -------
		// ------ POSSIBLE ISSUE:  safety check "||" considera 0 come falsy quindi passare 0 può dare unexpected result -------
		if(graph.flagForzaGraphMinMax) {
			graph.maxX = xM || max(graph.arrXused);
			graph.minX = x0 || min(graph.arrXused); // QUA 
			graph.maxY = yM || max(graph.arrYused);
			graph.minY = y0 || min(graph.arrYused);

		}
		else {
			graph.maxX = max(graph.arrXused);
			graph.minX = min(graph.arrXused);
			graph.maxY = max(graph.arrYused);
			graph.minY = min(graph.arrYused);			
		}

		graph.dXvalori = graph.maxX - graph.minX;
		graph.dYvalori = graph.maxY - graph.minY;

		graph.calcolaDxDy();

	}


	// legati alle dim delle canvas
	this.calcolaDxDy = function() {
		
		graph.widthGraph = Math.abs(graph.fineX.x - graph.OXY.x);
		graph.heightGraph = Math.abs(graph.fineY.y - graph.OXY.y);

		// graph.dX = graph.widthGraph / graph.maxX;
		// graph.dY = graph.heightGraph / graph.maxY;

		graph.dX = graph.widthGraph / graph.dXvalori;
		graph.dY = graph.heightGraph / graph.dYvalori;

	}


	this.calcolaTaccheDaQ = function(qX,qY) {

		graph.quantitaTaccheX = qX || 5;
		graph.quantitaTaccheY = qY || 5;

		graph.arrValLineX = [];
		graph.arrValLineY = [];

		// devo ancora creare gli array
		// diversa procedura per lineare ed esponenziale o log






		graph.spaziaturaTaccheX = graph.dimGraphX / graph.quantitaTaccheX;
		graph.spaziaturaTaccheY = graph.dimGraphY / graph.quantitaTaccheY;




	}


	this.calcolaTaccheDaArr = function(arrSegX,arrSegY) {

		graph.arrValLineX = arrSegX;
		graph.arrValLineY = arrSegY || arrSegX;

		graph.quantitaTaccheX = graph.arrValLineX.length;
		graph.quantitaTaccheY = graph.arrValLineY.length;

		graph.spaziaturaTaccheX = graph.dimGraphX / graph.quantitaTaccheX;
		graph.spaziaturaTaccheY = graph.dimGraphY / graph.quantitaTaccheY;



		
	}



	// trova linea 
	this.calcolaRegressioneLineareLS = function(values_x, values_y) {
	    var sum_x = 0;
	    var sum_y = 0;
	    var sum_xy = 0;
	    var sum_xx = 0;
	    var count = 0;

	    /*
	     * We'll use those variables for faster read/write access.
	     */
	    var x = 0;
	    var y = 0;
	    var values_length = values_x.length;

	    if (values_length != values_y.length) {
	        throw new Error('The parameters values_x and values_y need to have same size!');
	    }

	    /*
	     * Nothing to do.
	     */
	    if (values_length === 0) {
	        return [ [], [] ];
	    }

	    /*
	     * Calculate the sum for each of the parts necessary.
	     */
	    for (var v = 0; v < values_length; v++) {
	        x = values_x[v];
	        y = values_y[v];
	        sum_x += x;
	        sum_y += y;
	        sum_xx += x*x;
	        sum_xy += x*y;
	        count++;
	    }

	    /*
	     * Calculate m and b for the formular:
	     * y = x * m + b
	     */
	    var m = (count*sum_xy - sum_x*sum_y) / (count*sum_xx - sum_x*sum_x);
	    var b = (sum_y/count) - (m*sum_x)/count;

	    /*
	     * We will make the x and y result line now
	     */
	    var result_values_x = [];
	    var result_values_y = [];

	    for (var v = 0; v < values_length; v++) {
	        x = values_x[v];
	        y = x * m + b;
	        result_values_x.push(x);
	        result_values_y.push(y);
	    }

	    if(flagConsoleHard) console.log([result_values_x, result_values_y]);
	    return [result_values_x, result_values_y];
	}




	this.ricalcolaArrUsed = function() {

		graph.arrYused = [];
		graph.arrXused = [];
		for(let i = graph.primoGiornoShow; (i < graph.arrYcompleto.length) && (i < graph.ultimoGiornoShow); i++) {
			graph.arrYused.push(graph.arrYcompleto[i]);
			graph.arrXused.push(graph.arrXcompleto[i]);
		}

	}

	this.ricalcolaTutto = function() {

		graph.ricalcolaArrUsed();
		graph.calcolaMinMaxXY();
		// graph.calcolaTaccheDaQ();
		// graph.calcolaDxDy(); // già fatto in graph.calcolaMinMaxXY();
		graph.arrRegLin = [[],[]];
		graph.arrRegLin = graph.calcolaRegressioneLineareLS(graph.arrXused,graph.arrYused);

	}












	/* 	___________________ CARICAMENTO DATI ___________________*/


	this.nuoviDati = function(arrYcompleto,arrXcompleto) {
		graph.arrYcompleto = arrYcompleto;
		graph.arrXcompleto = arrXcompleto || [];

		// se viene passato un solo array
		if(graph.arrXcompleto.length != graph.arrYcompleto.length) {
			if(flagConsoleErrori) console.error("Array(s) di dati passati hanno dimensioni diverse!!");

			graph.arrXcompleto = [];
			for(let i = 1; i < graph.arrYcompleto.length + 1; i++) graph.arrXcompleto.push(i);
		}

		graph.ricalcolaTutto();
	}



	this.forzaGraphMinMaxVal = function(y0,yM,x0,xM) {
		graph.flagForzaGraphMinMax = true;

		if(y0 == undefined && flagConsoleSoft) console.log("Val y0 non passato!");
		if(yM == undefined && flagConsoleSoft) console.log("Val yM non passato!");
		if(x0 == undefined && flagConsoleSoft) console.log("Val x0 non passato!");
		if(xM == undefined && flagConsoleSoft) console.log("Val xM non passato!");

		graph.calcolaMinMaxXY(y0,yM,x0,xM);

	}
























	/* 					PARTE DI DISEGNO 				*/



	this.disegnaAssi = function() {

		push();
		noFill();
		strokeWeight(graph.spessoreAssi);
		stroke(graph.assiCol);

		// asse X
		line(graph.OXY.x,graph.OXY.y,graph.fineX.x,graph.fineX.y);
		// asse Y 
		line(graph.OXY.x,graph.OXY.y,graph.fineY.x,graph.fineY.y);


		pop();

		this.disegnaTacche();

	}

	this.disegnaTacche = function() {

		push();

		translate(graph.OXY.x, graph.OXY.y);

		noFill();
		strokeWeight(graph.spessoreTacche);
		stroke(graph.taccheCol);

		for(let i = 0; i < graph.quantitaTaccheX; i++) {
			let xSeg = (i+1)*graph.spaziaturaTaccheX;
			line(xSeg,-graph.altezzaTacche/2,xSeg,graph.altezzaTacche/2);
		}

		for(let i = 0; i < graph.quantitaTaccheY; i++) {
			let ySeg = -(i+1)*graph.spaziaturaTaccheY;
			line(-graph.altezzaTacche/2,ySeg,graph.altezzaTacche/2,ySeg);
		}

		pop();

	}




	this.disegnaPallini = function() {

		push();

		translate(graph.OXY.x,graph.OXY.y);

		noStroke();
		fill(graph.col1);

		// if( ! graph.flagForzaGraphMinMax) {
		// 	for (let i = 0; i < graph.arrXused.length; i++) {
		// 		let posX =   graph.arrXused[i] * graph.dX;
		// 		let posY = - graph.arrYused[i] * graph.dY;
		// 		ellipse(posX,posY,graph.dimBall,graph.dimBall);
		// 	}
		// }
		// else {
		// 	for (let i = 0; i < graph.arrXused.length; i++) {
		// 		let posX =   (graph.arrXused[i] - graph.minX) * graph.dX ;
		// 		let posY = - (graph.arrYused[i] - graph.minY) * graph.dY;
		// 		ellipse(posX,posY,graph.dimBall,graph.dimBall);
		// 	}
		// }

		for (let i = 0; i < graph.arrXused.length; i++) {
			// let posX =   (graph.arrXused[i] - graph.minX * graph.flagForzaGraphMinMax) * graph.dX;
			// let posY = - (graph.arrYused[i] - graph.minY * graph.flagForzaGraphMinMax) * graph.dY;
			let posX =   (graph.arrXused[i] - graph.minX) * graph.dX;
			let posY = - (graph.arrYused[i] - graph.minY) * graph.dY;
			ellipse(posX,posY,graph.dimBall,graph.dimBall);
		}

 		

		pop();

	}


	this.disegnaLinee = function() {

		push();

		translate(graph.OXY.x,graph.OXY.y);

		noFill();
		stroke(graph.col1);
		strokeWeight(graph.spessoreLinee);


		for (let i = 0; i < graph.arrXused.length; i++) {
			let ind = max(i-1,0);

			posX_back =   (graph.arrXused[ind] - graph.minX) * graph.dX;
			posY_back = - (graph.arrYused[ind] - graph.minY) * graph.dY;
		
			
			let posX =   (graph.arrXused[i] - graph.minX) * graph.dX;
			let posY = - (graph.arrYused[i] - graph.minY) * graph.dY;

			line(posX_back,posY_back,posX,posY);
		}
 		

		pop();

	}


	this.disegnaLineeRegLin = function() {

		push();

		translate(graph.OXY.x,graph.OXY.y);

		noFill();
		stroke(255);
		strokeWeight(graph.spessoreLinee / 2);


		// line(Graph3r.arrRegLin[0][0],-Graph3r.arrRegLin[1][0],
		// Graph3r.arrRegLin[0][33],-Graph3r.arrRegLin[1][33]);


		for (let i = 0; i < graph.arrRegLin[0].length; i++) {

			// let posX_back = 0;
			// let posY_back = 0;
			let posX_back = graph.minX;
			let posY_back = graph.minY;

			// MAYBE QUESTO INVECE DI QUELLO SOPRA
			// let posX_back = graph.minX * graph.dX;
			// let posY_back = graph.minY * graph.dY;

			if(i != 0) {
				// posX_back =   graph.arrRegLin[0][i-1] * graph.dX;
				// posY_back = - graph.arrRegLin[1][i-1] * graph.dY;
				// posX_back =   (graph.arrRegLin[0][i-1] - graph.minX * graph.flagForzaGraphMinMax) * graph.dX;
				// posY_back = - (graph.arrRegLin[1][i-1] - graph.minY * graph.flagForzaGraphMinMax) * graph.dY;
				posX_back =   (graph.arrRegLin[0][i-1] - graph.minX) * graph.dX;
				posY_back = - (graph.arrRegLin[1][i-1] - graph.minY) * graph.dY;
			}
			
			// let posX = 	 graph.arrRegLin[0][i] * graph.dX;
			// let posY = - graph.arrRegLin[1][i] * graph.dY;

			let posX = 	 (graph.arrRegLin[0][i] - graph.minX) * graph.dX;
			let posY = - (graph.arrRegLin[1][i] - graph.minY) * graph.dY;

			line(posX_back,posY_back,posX,posY);
		}
 		

		pop();

	}



















	this.scriviTitolo = function() {

		push();

			let testoTitoloCompleto = graph.titoloGrafico;

			noStroke();
			fill(graph.colTitolo);
			textSize(18);
			text(graph.titoloGrafico,graph.posTitolo.x,graph.posTitolo.y);

		pop();

	}















	this.disegnaTutto = function() {

		graph.disegnaAssi();

		if(graph.flagPunti) graph.disegnaPallini();
		if(graph.flagLinee) graph.disegnaLinee();
		if(graph.flagRegLin) graph.disegnaLineeRegLin();

		if(graph.flagTitolo) graph.scriviTitolo();
	}












}
