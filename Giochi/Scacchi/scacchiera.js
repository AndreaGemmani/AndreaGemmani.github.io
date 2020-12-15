// Andrea Gemmani 11/3/18

// cose da fare o migliorare:
// posso creare un array con i punti in cui sono i pezzi
// quando sposto un pezzo !filtro la sua vecchia posizione eliminandola e pusho la nuova


// posso togliere controlli nei loop su spostamenti, appoggiandomi ad handler a filter successivi


// aggiungere array che tiene conto delle mosse fatte e func che rifaccia
// tutte le mosse salvate e caricate


class Scacchiera {

	// x va verso dx  da 1 a 8 
	// y va verso giù da 1 a 8

	// bianchi 0, neri 1       => turno true è nero
	// pezzi da 1 a 6:	pedone  alfiere  cavallo  torre  re  regina

	constructor(dim) {
		this.nPezzi = 16;
		this.arrBian = [];
		this.arrNeri = [];

		this.arrCaselle = [];

		this.arrPosNeri = [];
		this.arrPosBian = [];

		this.turno = 0; // a chi tocca muovere 

		this.caselleVerdi = [];
		this.caselleRosse = [];
		this.pezzoAttuale = [];

		this.dim = dim;
		this.dimX = 8;
		this.dimY = 8;



		this.flagMostraPox = false;
		this.mplN = 0;

		// this.loaddaImmagini();
		// if(this.loadFinito == 12)

		this.creaInizio();
		// this.altreMappe(1);

	}

	loaddaImmagini() {

	}




	nuovaPartita(n) {
		this.resetta();
		if(! n) { // n undefined || 0 || false 		etc
			this.creaInizio();
		}
		else {
			this.altreMappe(n);
		}
	}

	resetta() {
		// setup();
		this.arrBian = [];
		this.arrNeri = [];

		this.arrPosNeri = [];
		this.arrPosBian = [];

		this.turno = 0; // a chi tocca muovere 

		this.caselleVerdi = [];
		this.caselleRosse = [];
		this.pezzoAttuale = [];

		// this.nPezzi = 16;

	}

	creaInizio() { // creo una normale partita 
		this.arrBian = [];
		this.arrNeri = [];
		// pedoni
		for(let p = 0; p < 8; p++) {
			this.arrNeri.push(new Pezzo(1,p+1,2,1));
			this.arrBian.push(new Pezzo(1,p+1,7,0));
		}
		// alfieri
		this.arrNeri.push(new Pezzo(2,3,1,1));
		this.arrNeri.push(new Pezzo(2,6,1,1));
		this.arrBian.push(new Pezzo(2,3,8,0));
		this.arrBian.push(new Pezzo(2,6,8,0));
		// cavalli
		this.arrNeri.push(new Pezzo(3,2,1,1));
		this.arrNeri.push(new Pezzo(3,7,1,1));
		this.arrBian.push(new Pezzo(3,2,8,0));
		this.arrBian.push(new Pezzo(3,7,8,0));
		// torri
		this.arrNeri.push(new Pezzo(4,1,1,1));
		this.arrNeri.push(new Pezzo(4,8,1,1));
		this.arrBian.push(new Pezzo(4,1,8,0));
		this.arrBian.push(new Pezzo(4,8,8,0));
		// re e regina 
		this.arrNeri.push(new Pezzo(5,5,1,1));
		this.arrNeri.push(new Pezzo(6,4,1,1));
		this.arrBian.push(new Pezzo(5,5,8,0));
		this.arrBian.push(new Pezzo(6,4,8,0));

		// this.calcolaPosPezzi();
	}

	altreMappe(n) {
		switch(n) {
			case(1): // due cavalli a centro mappa 
			this.arrBian.push(new Pezzo(3,5,3,0));
			this.arrNeri.push(new Pezzo(3,4,5,1));
			break;

			case(2): // due cavalli a centro mappa 
			this.arrBian.push(new Pezzo(3,5,3,0));
			this.arrNeri.push(new Pezzo(3,4,5,1));
			break;

			case(3): // torri 
			this.arrBian.push(new Pezzo(4,1,7,0));
			this.arrBian.push(new Pezzo(4,3,3,0));
			this.arrBian.push(new Pezzo(4,4,1,0));
			this.arrBian.push(new Pezzo(4,4,6,0));
			this.arrBian.push(new Pezzo(4,5,3,0));
			this.arrBian.push(new Pezzo(4,5,8,0));
			this.arrBian.push(new Pezzo(4,8,5,0));

			this.arrNeri.push(new Pezzo(4,1,8,1));
			this.arrNeri.push(new Pezzo(4,3,5,1));
			this.arrNeri.push(new Pezzo(4,4,5,1));
			this.arrNeri.push(new Pezzo(4,4,8,1));
			this.arrNeri.push(new Pezzo(4,5,5,1));
			this.arrNeri.push(new Pezzo(4,6,3,1));
			break;

			case(4): // pedoni 
			this.arrBian.push(new Pezzo(1,1,7,0));
			this.arrBian.push(new Pezzo(1,3,3,0));
			this.arrBian.push(new Pezzo(1,4,1,0));
			this.arrBian.push(new Pezzo(1,4,6,0));
			this.arrBian.push(new Pezzo(1,5,3,0));
			this.arrBian.push(new Pezzo(1,5,8,0));
			this.arrBian.push(new Pezzo(1,8,5,0));

			this.arrNeri.push(new Pezzo(1,1,8,1));
			this.arrNeri.push(new Pezzo(1,3,5,1));
			this.arrNeri.push(new Pezzo(1,4,5,1));
			this.arrNeri.push(new Pezzo(1,4,8,1));
			this.arrNeri.push(new Pezzo(1,5,5,1));
			this.arrNeri.push(new Pezzo(1,6,3,1));
			break;

			default: console.log("Nessuna mappa-scacchiera compatibile");
		}
	}




	creaCaselle() { // da modificare se bianco sopra o no
		for(let k = 0; k < this.dimY; k++) {
			for(let j = 0; j < this.dimX; j++) {
				this.arrCaselle.push(new Casella(j,k));
			}
		}
	}

	riempiCaselle() { //
		for(let k = 0; k < this.dimY; k++) {
			for(let j = 0; j < this.dimX; j++) {
				this.arrCaselle[k * this.dimX + j].aggiungi();
			}
		}
	}




	nemicoQui(xCas,yCas,myCol) {
		let flagNemico = false;
		if(myCol) { // nero, nemici bianchi
			for(let i = 0; i < this.arrBian.length; i++) {
				if(this.arrBian[i].x == xCas && this.arrBian[i].y == yCas) {
					flagNemico = true;
					console.log("nemico bianco trovato");
				}
			}
		}
		else { // bianco, nemici neri
			for(let i = 0; i < this.arrNeri.length; i++) {
				if(this.arrNeri[i].x == xCas && this.arrNeri[i].y == yCas) {
					flagNemico = true;
					console.log("nemico nero trovato");
				}
			}
		}
		return flagNemico;
	}

	amicoQui(xCas,yCas,myCol) {
		let flagAmico = false;
		if(! myCol) { // bianco, amici bianchi
			for(let i = 0; i < this.arrBian.length; i++) {
				if(this.arrBian[i].x == xCas && this.arrBian[i].y == yCas) flagAmico = true;
			}
		}
		else { // nero, amici neri
			for(let i = 0; i < this.arrNeri.length; i++) {
				if(this.arrNeri[i].x == xCas && this.arrNeri[i].y == yCas) flagAmico = true;
			}
		}
		return flagAmico;
	}

	chiCeQui(xCas,yCas) { // handla per ora un solo pezzo per casella, 
		let retPez = null;
		for(let i = 0; i < this.arrNeri.length; i++) {
			if(this.arrNeri[i].x == xCas && this.arrNeri[i].y == yCas) retPez = this.arrNeri[i];
		}
		for(let i = 0; i < this.arrBian.length; i++) {
			if(this.arrBian[i].x == xCas && this.arrBian[i].y == yCas) retPez = this.arrBian[i];
		}
		return retPez;
	}

	quiLibero(xCas,yCas) {
		let flagLibero = true;
		for(let i = 0; i < this.arrNeri.length; i++) {
			if(this.arrNeri[i].x == xCas && this.arrNeri[i].y == yCas) flagLibero = false;
		}
		for(let i = 0; i < this.arrBian.length; i++) {
			if(this.arrBian[i].x == xCas && this.arrBian[i].y == yCas) flagLibero = false;
		}
		return flagLibero;
	}

	quiPericoloPerNero(xCas,yCas) {
		let flagPericolo = false;
		for(let i = 0; i < this.arrBian.length; i++) {
			if(this.arrBian[i].stoPuntando(xCas,yCas) ) flagPericolo = true;
		}
		return flagPericolo;
	}

	quiPericoloPerBian(xCas,yCas) {
		let flagPericolo = false;
		for(let i = 0; i < this.arrNeri.length; i++) {
			if( this.arrNeri[i].stoPuntando(xCas,yCas) ) flagPericolo = true;
		}
		return flagPericolo;
	}

		


	// casellaSottoAttacco(xCas,yCas) {
	// 	let flagSottoAttacco = false;
	// 	for(let i = 0; i < )

	// }



	controlloMosse() {
		for(let i = 0; i < this.arrNeri.length; i++) {
			console.log("scacc mosse n");
			this.arrNeri[i].controlloMosse();
		}
		for(let i = 0; i < this.arrBian.length; i++) {
			console.log("scacc mosse b");
			this.arrBian[i].controlloMosse();
		}
	}


	numeroPerMappaAt(xCas,yCas) {
		for(let i = 0; i < this.arrNeri.length; i++) {
			if(this.arrNeri[i].x == xCas && this.arrNeri[i].y == yCas) return this.arrNeri[i].tipo + 10;
		}
		for(let i = 0; i < this.arrBian.length; i++) {
			if(this.arrBian[i].x == xCas && this.arrBian[i].y == yCas) return this.arrBian[i].tipo + 20;
		}
		return "0 "; // space on pourpose o come si scrive
	}

	consoleMe() {
		let nuovaStringa = "";
		nuovaStringa += "\t\tmappa : [ \t";
		for(let k = 1; k <= this.dimY; k++) {
			if(k != 1) nuovaStringa += "\t\t\t\t\t";
			for(let j = 1; j <= this.dimX; j++) {
				nuovaStringa += this.numeroPerMappaAt(j,k);
				nuovaStringa += ",";
			}
			nuovaStringa += "\n";
		}
		nuovaStringa = nuovaStringa.slice(0,nuovaStringa.length - 2); // tolgo ultima virgola e \n
		nuovaStringa += "],";
		console.log(nuovaStringa);
	}












	calcolaPosPezzi() {
		this.arrPosBian = [];
		this.arrPosNeri = [];
		for(let b = 0; b < this.arrBian.length; b++) {
			this.arrPosBian.push({j:this.arrBian[b].x,k:this.arrBian[b].y,n:this.arrBian[b].nome});
		}

		for(let n = 0; n < this.arrNeri.length; n++) {
			this.arrPosNeri.push({j:this.arrNeri[n].x,k:this.arrNeri[n].y,n:this.arrNeri[n].nome});
		}
		// ad ogni spostamento ricontrollo tutte le caselle di mangio e di spostamento, molto pesante
		// e migliorabile controllando solo cose entangled ma difficile da trovare con sicurezzs
		for(let b = 0; b < this.arrBian.length; b++) {
			this.arrBian[b].possibili();
		}
		for(let n = 0; n < this.arrNeri.length; n++) {
			this.arrNeri[n].possibili();
		}
	}

	// this.calcolaPosPezzi();

	mostra() {
		this.mostraScacchiera();
		for(let n = 0; n < this.arrNeri.length; n++) {
			this.arrNeri[n].mostra();
			push();
			textAlign(CENTER,CENTER);
			fill(0,255,0);
			stroke(0);
			strokeWeight(4);
			text(n,this.arrNeri[n].x*this.arrNeri[n].dim-this.arrNeri[n].dim/6,this.arrNeri[n].y*this.arrNeri[n].dim-this.arrNeri[n].dim*5/6);
			pop();
		}
		for(let b = 0; b < this.arrBian.length; b++) {
			this.arrBian[b].mostra();
			push();
			textAlign(CENTER,CENTER);
			fill(0,255,255);
			stroke(0);
			strokeWeight(4);
			text(b,this.arrBian[b].x*this.arrBian[b].dim-this.arrBian[b].dim/6,this.arrBian[b].y*this.arrBian[b].dim-this.arrBian[b].dim*5/6);
			pop();
		}
		if(this.flagMostraPox) this.mostraPossibiliLoop();
	}

	mostraPossibiliNero() {
		this.mplN = (this.mplN + 1) % (this.arrNeri.length);
		this.arrNeri[this.mplN].mostraPossibili();
	}

	mostraPossibiliBian() {
		this.mplN = (this.mplN + 1) % (this.arrBian.length);
		this.arrBian[this.mplN].mostraPossibili();
	}


	coloraDiVerde(arr) { // servirebbe instanceof array per avere più controllo 
		if(arr == 0) this.caselleVerdi = [];
		this.caselleVerdi = arr;
	}
	coloraDiRosso(arr) {
		if(arr == 0) this.caselleRosse = [];
		this.caselleRosse = arr;
	}
	coloraQuesto(x,y) {
		this.pezzoAttuale = {x:x,y:y};
	}
	stopMostraPossibili() {
		if (this.caselleVerdi.length != 0 && this.caselleRosse.length != 0) console.log("Nessuna casella da mostrare");
		this.caselleVerdi = [];
		this.caselleRosse = [];
		this.pezzoAttuale = [];
	}

	mostraScacchiera() {
		push();
			stroke(230,150,50); // marrone chiaro
			strokeWeight(3);
			rectMode(CENTER);
			for(let y = 1; y <= 8; y++) {
				for(let x = 1; x <= 8; x++) {
					fill((x+y+1) %2 * 255); // alterno bianco e nero
					if(x == this.pezzoAttuale.x && y == this.pezzoAttuale.y) fill(0,0,100);
					// if(this.coloraDiVerde)
					rect(x*this.dim - this.dim/2,y*this.dim -this.dim/2,this.dim,this.dim);
				}
			}
			// mostro le prossime caselle possibili in verde
			for(let v = 0; v < this.caselleVerdi.length; v++) {
				// fill(0,255,0,90); // la trasparenza potrebbe costare cpu
				fill(0,150,0);
				rect(this.caselleVerdi[v].j*this.dim - this.dim/2,this.caselleVerdi[v].k*this.dim -this.dim/2,this.dim,this.dim);
			}
			for(let r = 0; r < this.caselleRosse.length; r++) {
				// fill(0,255,0,90); // la trasparenza potrebbe costare cpu
				fill(200,0,0);
				rect(this.caselleRosse[r].x*this.dim - this.dim/2,this.caselleRosse[r].y*this.dim -this.dim/2,this.dim,this.dim);
			}

			// // mostro caselle occupate
			// for(let v = 0; v < this.arrPosBian.length; v++) { // metto verde su quelli possibili
			// 	// fill(0,255,0,90); // la trasparenza potrebbe costare cpu
			// 	fill(0,0,150);
			// 	rect(this.arrPosBian[v].j*this.dim - this.dim/2,this.arrPosBian[v].k*this.dim -this.dim/2,this.dim,this.dim);
			// }
			// for(let v = 0; v < this.arrPosNeri.length; v++) { // metto verde su quelli possibili
			// 	// fill(0,255,0,90); // la trasparenza potrebbe costare cpu
			// 	fill(200,200,0);
			// 	rect(this.arrPosNeri[v].j*this.dim - this.dim/2,this.arrPosNeri[v].k*this.dim -this.dim/2,this.dim,this.dim);
			// }
		pop();
	}




}
