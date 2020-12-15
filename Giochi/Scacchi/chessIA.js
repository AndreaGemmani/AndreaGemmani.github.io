class ChessIA {

	constructor(n,b,p) {
		if(n == undefined) this.giocaNero = true;
		else n ? this.giocaNero = true : false;
		this.giocaBian = b || false;

		this.mostraProssime = p || false;

		// this.fR = 1;

		this.arrMosseNero = [];
		this.arrMosseBian = [];
		this.prossimaMossa = 0;

		if(this.giocaNero) console.log("La IA ha preso il controllo del giocatore nero!");
		if(this.giocaBian) console.log("La IA ha preso il controllo del giocatore bianco!");

		this.tuttoCioChePossoFare();
	}

	azzera() {
		this.arrMosseNero = [];
		this.arrMosseBian = [];
		this.prossimaMossa = 0;
	}

	controlla(n,b) { // DA RICONTROLLARE 
		if(n == undefined) {
			this.giocaNero = false;
			this.giocaBian = false;
			console.log("La IA lascia il controllo del giocatore nero!");
			console.log("La IA lascia il controllo del giocatore bianco!");
		}
		else {
			if(n == 0) {
				if(b == 1) {
					this.giocaBian = false;
					console.log("La IA lascia il controllo del giocatore bianco!");

				}
				else {
					;
				}


			}
		}

	}

	// framerate(n) {
	// 	if(n != undefined) {
	// 		if(millis % (1000/n) < 10) 
	// 	}
	// 	else console.log("FrameRate IA: " + this.fR);
	// }

	tuttoCioChePossoFare() {
		let n = 0;
		let m = 0;
		this.arrMosseBian = [];
		this.arrMosseNero = [];
		s.controlloMosse();
		for(let i = 0; i < s.arrBian.length; i++) {
			if(s.arrBian[i].arrMovimenti.length != 0) {
				this.arrMosseBian[n] = [ i, s.arrBian[i].arrMovimenti ];
				n++;
			}
		}
		for(let i = 0; i < s.arrNeri.length; i++) {
			if(s.arrNeri[i].arrMovimenti.length != 0) {
				this.arrMosseNero[m] = [ i, s.arrNeri[i].arrMovimenti ];
				m++;
			}
		}
	}

	gioca() {
		s.controlloMosse();
		if(s.turno && this.giocaNero) {
			this.prossimaMossa = random(this.arrMosseNero);
			let n = round(random(this.prossimaMossa[1].length -1));
			s.arrNeri[this.prossimaMossa[0]].sposta(this.prossimaMossa[1][n].j,this.prossimaMossa[1][n].k);
			if(this.mostraProssime) s.arrNeri[this.prossimaMossa[0]].mostraPossibili();
		}
		else {
			if( (! s.turno) && this.giocaBian ) {
				this.prossimaMossa = random(this.arrMosseBian);
				let m = round(random(this.prossimaMossa[1].length -1));
				s.arrBian[this.prossimaMossa[0]].sposta(this.prossimaMossa[1][m].j,this.prossimaMossa[1][m].k);
				if(this.mostraProssime) s.arrBian[this.prossimaMossa[0]].mostraPossibili();
				// console.log("ye");
			}
		}
		this.tuttoCioChePossoFare();
	}





}


