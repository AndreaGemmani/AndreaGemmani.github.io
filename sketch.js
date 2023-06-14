// Andrea Gemmani 2023/06/09
// GitHub Andrea Gemmani  https://github.com/AndreaGemmani 

// https://github.com/processing/p5.js/wiki/Local-server
// python -m http.server 8080

// https://www.flaticon.com/




// TODO:
// - collegare cose dello sketch a veri dati in JSON
// - salvare JSON mofificato
// - aggiungere date
// 		- aggiungere nomi mesi
//		- possibilità di muovere avanti indietro date nei mesi
// 		- calcolo giorni
// - fill con 0 gli habits in base alla data di partenza
// - mettere valori diversi da 1 in base a quanto un habits è stato fatto
// - ingrandire di conseguenza l'icona mostrata
// - 

	




Mindfulness: meditare, GraJo, planning
Attività fisica: camminare, pesi, corpo libero, nuoto
Pulizia: aspirapolvere, straccio, polvere, lavastoviglie, 
Learning: studio uni, Blender, Unity, Chess, Lettura,
Igiene: denti, barba, doccia, 
Health: sveglia, orario nanna,


Mindfulness: 
Attività fisica: corpo libero, nuoto
Pulizia: aspirapolvere, straccio, polvere, lavastoviglie, 
Learning: studio uni, Blender, Unity, Chess, Lettura,
Igiene: denti, barba, doccia, 
Health: sveglia, orario nanna,







	


let arrSimboli = [];

let habits_quantity = 15;
let nGiorni = 31;

let myCanvScaling = 5;
let dimCanv = [297 * myCanvScaling, 210 * myCanvScaling];
// let dimQ = Math.min(dimCanv[0] / nGiorni, dimCanv[1] / habits_quantity) * 0.8;
let scalingRectGiorni = 0.8;
let dimQ = [dimCanv[0] / nGiorni * scalingRectGiorni, dimCanv[1] / habits_quantity * scalingRectGiorni];
let dimTxt = dimQ[0] * 0.45; // dimQ[1] * 0.45; 

let margineSx = 90;
let margineUp = dimQ[1] * 1.2;
let margineUp2 = 0;
let spost = 0
let spostQsimb = 0;

let colore1, colore2, coloreYes;

let currentSimb = 0;
let currentVal = 0;

let dimIcons = Math.min(dimQ[0],dimQ[1]) * 0.6;


let arrHabits = []

function loadDefS(s) {
	switch(s) {
		case 0: return "eat frutta/veggie"
		case 1: return "walk/exercise"
		case 2: return "tidying up"
		case 3: return "reading"
		case 4: return "studying"
		case 5: return "GraJo"
		case 6: return "planner TD/TM"
		case 7: return "Blender/Unity"
		case 8: return "projs"
		case 9: return "wake up"
		case 10: return "sleep"
		case 11: return "shower"
		case 12: return "teeth"
		case 13: return "barba"
		case 14: return "irl social life"
		case 15: return ""
		default: return "3456789ioknjbvcxfdrser657t8yuijnk"
	}
}


function makeHabit(dimSimbArg) {
	let arrS = []
	for(let j = 0; j < dimSimbArg; j++) {
		for(let k = 0; k < dimSimbArg; k++) {
			arrS.push(round(random(1)));
		}
	}
	return arrS;
}

function makeValori(nGiorniArg) {
	let arrS = []
	for(let j = 0; j < nGiorniArg; j++) {
		arrS.push(0);
	}
	return arrS;
}

function cambia(s,v,yn) {
	arrSimboli[s].valori[v] = yn;
}

function batchChange(n) {
	for (let i = 0; i < n; i++) {
		cambia(floor(random(arrSimboli.length)), floor(random(arrSimboli[0].valori.length)), round(random(1)) * 2 - 1 );
	}
}

function azzera() {
	for(let s = 0; s < habits_quantity; s++) {
		arrSimboli[s].valori = makeValori(nGiorni)
	}
}




let habitsTrackerJSONdata;
let images = [];
let arrIndexesOkImgs = []

function preload() {
	let url = 'habitsTrackerJSON_V01.json';
	loadJSON(url, handleData);
}

function handleData(jsonData) {
	habitsTrackerJSONdata = jsonData;
	let promises = [];
	
	if (habitsTrackerJSONdata && habitsTrackerJSONdata.habits) {
		for (let i = 0; i < habitsTrackerJSONdata.habits.length; i++) {
			let habit = habitsTrackerJSONdata.habits[i];
			if(habit.URLsimbolo != "") {
				let promise = loadImagePromise("icons/" + habit.URLsimbolo);
				promises.push(promise);
				arrIndexesOkImgs.push(i);
			}
		}
	}

	Promise.all(promises)
		.then(results => {
			for (let i = 0; i < results.length; i++) {
				let habit = habitsTrackerJSONdata.habits[arrIndexesOkImgs[i]];
				habit.image = results[i];
				console.log(habit.image)
			}
		})
		.catch(error => {
			console.error(error);
		});
}

function loadImagePromise(url) {
	return new Promise((resolve, reject) => {
		loadImage(url, resolve, reject);
	});
}

























function setup() {

	createCanvas(dimCanv[0], dimCanv[1]);



	for(let s = 0; s < habits_quantity; s++) {
		arrSimboli.push({
			// simbolo : makeHabit(dimSimb),
			simbolo : loadDefS(s),
			valori : makeValori(nGiorni)
		})
	}

	colorMode(RGB); // Try changing colore2 HSB.
	colore1 = color(255);
	colore2 = color(220);
	coloreYes = color(30,255,40);

	textSize(dimTxt);
	textAlign(CENTER,CENTER);

}

draw = function() {

	background(245);

	// dimQ = min( (height - 2*margineUp) / arrSimboli.length, (width - 2*margineSx) / ( 2* Math.max(...(arrSimboli.map(el => el.length))) ) )

	rectMode(CENTER);

	for(let s = 0; s < arrSimboli.length; s++) {
		let yyy = margineUp + dimQ[1] * (s + 0.5);

		// scrivo nome Habit
		let xxx = width/2 - ( ( (nGiorni-1)/2) + 1 ) * dimQ[0];
		noFill();
		strokeWeight(2);
		stroke(120);
		rect(xxx,yyy,dimQ[0]*8,dimQ[1]);

		noStroke();
		fill(40);
		textSize(dimTxt * 1.2);
		text(arrSimboli[s].simbolo,xxx,yyy);
		
		push();
			translate(margineSx,margineUp2);
			// disegno i quadrati con rosso e verde
			for(let v = 0; v < arrSimboli[s].valori.length; v++) {
				// disegno bordo esterno
				let xxx = width/2 - ( ( (nGiorni-1)/2) - v ) * dimQ[0];
				// noFill();
				strokeWeight(2);
				stroke(120);
				fill(s%2 ? colore1 : colore2 )
				rect(xxx,yyy,dimQ[0],dimQ[1]);

				// disegno SIMBOLI
				if(arrSimboli[s].valori[v] == 1 ) {if (habitsTrackerJSONdata.habits[s].image) {
						image(habitsTrackerJSONdata.habits[s].image, xxx-dimIcons/2,yyy-dimIcons/2, dimIcons,dimIcons);
					}
					else {
						noStroke();
						fill(arrSimboli[s].valori[v]? coloreYes : colore2);  // Display the loaded image
						rect(xxx,yyy,dimQ[0]*0.5,dimQ[1]*0.5);  
					}
				}
			}
			pop();
	}


	// disegno quadrato selezione 
	let xxx = width/2 - ( ( (nGiorni-1)/2) - currentVal ) * dimQ[0];
	let yyy = margineUp + dimQ[1] * (currentSimb + 0.5);
	noFill();
	strokeWeight(4);
	stroke(50);
	push();
		translate(margineSx,margineUp2);
		rect(xxx,yyy,dimQ[0],dimQ[1]);

		textSize(dimTxt);
		textAlign(CENTER,CENTER);

		// scrivo numeri in alto
		yyy = margineUp + dimQ[1] * (- 0.5);

		for(let v = 0; v < arrSimboli[0].valori.length; v++) {
			let xxx = width/2 - ( ( (nGiorni-1)/2) - v ) * dimQ[0];
			fill(40);
			noStroke();
			text(v+1, xxx,yyy);
		}

	pop();

	noLoop();

}





function keyTyped() {
	if (key === 'p') saveCanvas('trackerHabits', 'png');
	if (key === 'r') batchChange(5);
	if (key === 'z') azzera();
	if (key === 'w') currentSimb = mod(--currentSimb,habits_quantity);
	if (key === 's') currentSimb = mod(++currentSimb,habits_quantity);
	if (key === 'a') currentVal = mod(--currentVal,nGiorni);
	if (key === 'd') currentVal = mod(++currentVal,nGiorni);
	if (key === 'y') cambia(currentSimb,currentVal,1);
	if (key === '0') cambia(currentSimb,currentVal,0);
	redraw();
}

function mod(n, m) {
	return ((n % m) + m) % m;
}





