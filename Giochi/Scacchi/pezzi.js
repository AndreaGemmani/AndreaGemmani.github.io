

class Pezzo {

	constructor(tipo,x,y,colore) {
		this.tipo = tipo;
		this.x = x;
		this.y = y;
		this.colore = colore;

		this.dim = width/8;
		this.dimPezzo = 30;

		this.mossoPrimaVolta = false;

		this.mossePossibili = [];
		this.prossimeCaselle = [];
		this.mangiabili = [];



		this.arrMangiabili = []; 	// arr di pezzi mangiabili
		this.arrMovimenti = [];		// arr vettori di caselle in cui muoversi (e mangiare)
		// this.arrMovEatPedoni = []; 	// arr vettori di caselle in cui mangiare se occupati (pedone mangia in posti in cui non può andare)





		switch(this.tipo) {
			case 1: if(this.colore) {	
						this.img = PN;
						this.nome = "Pedone nero";				
						break;	}
						this.img = PB;
						this.nome = "Pedone Bianco";
						break;
			case 2: if(this.colore) {
						this.img = AN; 
						this.nome = "Alfiere Nero";
						break;	}
						this.img = AB; 
						this.nome = "Alfiere Bianco";
						break;
			case 3: if(this.colore) {
						this.img = CN; 
						this.nome = "Cavallo Nero";
						break;	}
						this.img = CB; 
						this.nome = "Cavallo Bianco";
						break;
			case 4: if(this.colore) {
						this.img = TN; 
						this.nome = "Torre Nera";
						break;	}
						this.img = TB; 
						this.nome = "Torre Bianca";
						break;
			case 5: if(this.colore) {
						this.img = RN; 
						this.nome = "Re Nero";
						break;	}
						this.img = RB; 
						this.nome = "Re Bianco";
						break;
			case 6: if(this.colore) {
						this.img = RgN;
						this.nome = "Regina Nera";
						 break;	}
						this.img = RgB; 
						this.nome = "Regina Bianca";
						break;
		} // switch

		// this.possibili();
	}

	mostra() {
		push();
		fill(this.colore * 255);
		stroke(230,150,50);
		strokeWeight(3);

		// caccio la texture del pezzo  
		image(this.img,this.x*this.dim - this.dim/2 - this.dimPezzo/2,this.y*this.dim - this.dim/2 - this.dimPezzo/2,this.dimPezzo,this.dimPezzo);
		// image(this.img,this.x*this.dim - this.dim*3/4,this.y*this.dim - this.dim*3/4);
		// image(s.PB,50,50,this.dimPezzo,this.dimPezzo);

		// ellipse(this.x*this.dim - this.dim/2,this.y*this.dim -this.dim/2,this.dimPezzo,this.dimPezzo);
		pop();
	}

	// mostraPossibili() {
	// 	console.log("Caselle " + this.nome + " ");
	// 	s.coloraDiVerde(this.prossimeCaselle);
	// 	s.coloraDiRosso(this.mangiabili);
	// 	s.coloraQuesto(this.x,this.y);
	// }

	mostraPossibili() {
		this.controlloMosse();
		console.log("Caselle " + this.nome + " ");
		s.coloraDiVerde(this.arrMovimenti);
		s.coloraDiRosso(this.arrMangiabili);
		s.coloraQuesto(this.x,this.y);
	}

	nemicoQui(xNem,yNem) {
		// for(let i = 0; i < Scacchiera.arrNeri.length; i++) {

		// }
		return s.nemicoQui(xNem,yNem,this.colore);
	}

	amicoQui(xNem,yNem) {
		// for(let i = 0; i < Scacchiera.arrNeri.length; i++) {

		// }
		return s.amicoQui(xNem,yNem,this.colore);
	}


	cercaQui(j,k) { // cambiare nome alla func
		let seBreakkare = false;
		if(this.amicoQui(j, k) ) seBreakkare = true;
		else {
			if( this.nemicoQui(j, k) ) { // auto-aggiunta nemici
				this.arrMangiabili.push( s.chiCeQui(j, k) );

				seBreakkare = true;
			}
			else {
				// this.arrMovimenti.push({x:j,y:k});
				this.arrMovimenti.push({j:j,k:k});
			}
		}
		return seBreakkare;
	}









	// eatableCavallo() {
	// 	this.arrMangiabili = [];
	// 	console.log("Sto controllando eat Cavallo");
	// 	if(this.nemicoQui(this.x + 2, this.y + 1)) this.arrMangiabili.push(s.chiCeQui(this.x + 2, this.y + 1));
	// 	if(this.nemicoQui(this.x + 2, this.y - 1)) this.arrMangiabili.push(s.chiCeQui(this.x + 2, this.y - 1));
	// 	if(this.nemicoQui(this.x - 2, this.y + 1)) this.arrMangiabili.push(s.chiCeQui(this.x - 2, this.y + 1));
	// 	if(this.nemicoQui(this.x - 2, this.y - 1)) this.arrMangiabili.push(s.chiCeQui(this.x - 2, this.y - 1));
	// 	if(this.nemicoQui(this.x + 1, this.y + 2)) this.arrMangiabili.push(s.chiCeQui(this.x + 1, this.y + 2));
	// 	if(this.nemicoQui(this.x + 1, this.y - 2)) this.arrMangiabili.push(s.chiCeQui(this.x + 1, this.y - 2));
	// 	if(this.nemicoQui(this.x - 1, this.y + 2)) this.arrMangiabili.push(s.chiCeQui(this.x - 1, this.y + 2));
	// 	if(this.nemicoQui(this.x - 1, this.y - 2)) this.arrMangiabili.push(s.chiCeQui(this.x - 1, this.y - 2));

	// 	this.arrMangiabili = this.arrMangiabili.filter(x => (x != null));
	// }


	eatableCavallo() {
		console.log("Sto controllando eat Cavallo");
		this.cercaQui(this.x + 2, this.y + 1);
		this.cercaQui(this.x - 2, this.y + 1);
		this.cercaQui(this.x + 2, this.y - 1);
		this.cercaQui(this.x - 2, this.y - 1);
		this.cercaQui(this.x + 1, this.y + 2);
		this.cercaQui(this.x - 1, this.y + 2);
		this.cercaQui(this.x + 1, this.y - 2);
		this.cercaQui(this.x - 1, this.y - 2);
	}

	// eatableTorre() {
	// 	this.arrMangiabili = [];
	// 	console.log("Sto controllando eat Torre");
	// 	// let continua = true;
	// 	for(let j = this.x - 1; j > 0; j--) { // orizzontale (x) a sinistra
	// 		if( this.amicoQui(j, this.y) ) {
	// 			console.log("trovato amico sx");
	// 			break;
	// 		}
	// 		if( this.nemicoQui(j, this.y) ) {
	// 			console.log("trovato sx");
	// 			this.arrMangiabili.push( s.chiCeQui(j, this.y) );
	// 			break;
	// 		}
	// 	}
	// 	for(let j = this.x + 1; j <= s.dimX; j++) { // orizzontale (x) a destra
	// 		if( this.amicoQui(j, this.y) ) {
	// 			console.log("trovato amico dx");
	// 			break;
	// 		}
	// 		if( this.nemicoQui(j, this.y) ) {
	// 			console.log("trovato dx");
	// 			this.arrMangiabili.push( s.chiCeQui(j, this.y) );
	// 			break;
	// 		}
	// 	}
	// 	for(let k = this.y - 1; k > 0; k--) { // verticale (y) su
	// 		if( this.amicoQui(this.x, k) ) {
	// 			console.log("trovato amico su");
	// 			break;
	// 		}
	// 		if( this.nemicoQui(this.x, k) ) {
	// 			console.log("trovato su");
	// 			this.arrMangiabili.push( s.chiCeQui(this.x, k) );
	// 			break;
	// 		}
	// 	}
	// 	for(let k = this.y + 1; k <= s.dimY; k++) { // verticale (y) giù
	// 		if( this.amicoQui(this.x, k) ) {
	// 			console.log("trovato amico giu");
	// 			break;
	// 		}
	// 		if( this.nemicoQui(this.x, k) ) {
	// 			console.log("trovato giù");
	// 			this.arrMangiabili.push( s.chiCeQui(this.x, k) );
	// 			break;
	// 		}
	// 	}

	// 	this.arrMangiabili = this.arrMangiabili.filter(x => (x != null));
	// }


	eatableTorre() {
		console.log("Sto controllando eat Torre");
		// let continua = true;
		for(let j = this.x - 1; j > 0; j--) { // orizzontale (x) a sinistra
			if( this.cercaQui(j, this.y) ) {
				console.log("sx");
				break;
			}
		}
		for(let j = this.x + 1; j <= s.dimX; j++) { // orizzontale (x) a destra
			if( this.cercaQui(j, this.y) ) {
				console.log("dx");
				break;
			}
		}
		for(let k = this.y - 1; k > 0; k--) { // verticale (y) su
			if( this.cercaQui(this.x, k) ) {
				console.log("su");
				break;
			}
		}
		for(let k = this.y + 1; k <= s.dimY; k++) { // verticale (y) giù
			if( this.cercaQui(this.x, k) ) {
				console.log("giu");
				break;
			}
		}
	}


	eatableAlfiere() {
		console.log("Sto controllando eat Alfiere");
		// let continua = true;
		for(let j = this.x - 1, k = this.y - 1; j > 0, k > 0; j--, k--) { // sud ovest
			if( this.cercaQui(j, k) ) {
				console.log("SW");
				break;
			}
		}
		for(let j = this.x + 1, k = this.y + 1; j <= s.dimX, k <= s.dimY; j++, k++) { // sud ovest
			if( this.cercaQui(j, k) ) {
				console.log("NE");
				break;
			}
		}
		for(let j = this.x - 1, k = this.y + 1; j > 0, k <= s.dimY; j--, k++) { // sud ovest
			if( this.cercaQui(j, k) ) {
				console.log("NW");
				break;
			}
		}
		for(let j = this.x + 1, k = this.y - 1; j <= s.dimX, k > 0; j++, k--) { // sud ovest
			if( this.cercaQui(j, k) ) {
				console.log("SE");
				break;
			}
		}
	}


	soloEat(j,k) {
		if( this.nemicoQui(j, k) ) { // auto-aggiunta nemici
			this.arrMangiabili.push( s.chiCeQui(j, k) );
			// return = true;
		}
		// return false;
	}
	soloMov(j,k) {
		if( ! this.amicoQui(j, k) && ! this.nemicoQui(j, k) ) {
			// this.arrMovimenti.push({x:j,y:k});
			this.arrMovimenti.push({j:j,k:k});
		}
	}

	eatablePedone() {
		let dirMov = map(this.colore,0,1,-1,1); // pedone ha direzione

		this.soloMov( this.x,this.y + 1 * dirMov );
		if(! this.mossoPrimaVolta) {
			if( s.quiLibero(this.x,this.y + 1 * dirMov) ) this.soloMov( this.x,this.y + 2 * dirMov );
		}

		this.soloEat( this.x + 1,this.y + 1 * dirMov );
		this.soloEat( this.x - 1,this.y + 1 * dirMov );

		// this.arrMovEatPedoni.push()
	}

	enPassant() {

	}

	arrocco2lavendetta() {	// per ora arrocco solo in scachiera 8x8
		if( ! this.mossoPrimaVolta) {
			if(s.torreQuiNonMossa(this.x,1)) {
				let perOraLiberoArrocco = true;
				for(let i = 2; i < this.x; i++) {
					if(! s.quiLibero(this.x,i) ) perOraLiberoArrocco = false;
				}
				if(perOraLiberoArrocco) this.arrMovimenti.push();
			}
			if(s.torreQuiNonMossa(this.x,s.dimX)) {

			}
		}
	}


	eatableRe() {
		console.log("Sto controllando eat Re");
		this.cercaQui(this.x - 1, this.y + 1);
		this.cercaQui(this.x - 1, this.y + 0);
		this.cercaQui(this.x - 1, this.y - 1);
		this.cercaQui(this.x + 0, this.y + 1);
		// this.cercaQui(this.x + 0, this.y + 0);
		this.cercaQui(this.x + 0, this.y - 1);
		this.cercaQui(this.x + 1, this.y + 1);
		this.cercaQui(this.x + 1, this.y + 0);
		this.cercaQui(this.x + 1, this.y - 1);

		// this.arrocco2lavendetta();
	}

	eatableRegina() {
		console.log("Sto controllando eat Regina");
		this.eatableAlfiere();
		this.eatableTorre();
	}


	stoPuntando(xCas,yCas) {
		let arrPuntqui = [];
		if(this.tipo == 1) arrPuntqui = this.arrMangiabili.filter(m => (m.j == xCas && m.k == yCas) );
		else this.arrMovimenti.filter(m => (m.j == xCas && m.k == yCas) );
		return arrPuntqui.length > 0;
	}




	controlloPericolo() {
		if(this.tipo == 5) { // se sono il Re
			
			this.arrMovimenti = this.arrMovimenti.filter(x => (x != null)); // placeholder per passare caselle vuote


		}
	}




	controlloMosse() {

		this.arrMangiabili = [];
		this.arrMovimenti = [];




		if(this.tipo == 1) {
			this.eatablePedone();
		}
		if(this.tipo == 2) {
			this.eatableAlfiere();
		}
		if(this.tipo == 3) {
			this.eatableCavallo();
		}
		if(this.tipo == 4) {
			this.eatableTorre();
		}
		if(this.tipo == 5) {
			this.eatableRe();
		}
		if(this.tipo == 6) {
			this.eatableRegina();
		}


		// this.controlloPericolo();


		// this.arrMovimenti = this.arrMovimenti.filter(c => (c.x > 0 && c.x <= s.dimX && c.y > 0 && c.y <= s.dimY)); // placeholder per passare caselle vuote
		this.arrMovimenti = this.arrMovimenti.filter(c => (c.j > 0 && c.j <= s.dimX && c.k > 0 && c.k <= s.dimY)); // placeholder per passare caselle vuote
		this.arrMangiabili = this.arrMangiabili.filter(p => (p != null)); // placeholder per passare caselle vuote


	}


// mostraPossibili














	possibili() {
		this.prossimeCaselle = [];	// azzero gli array per poi refillarli
		this.mangiabili = [];
		// this.daRitC = [];
		if(this.tipo == 1) {
			this.prossimeCaselle = this.movPed(this.x,this.y);
		}
		if(this.tipo == 2) {
			this.prossimeCaselle = this.movAlf(this.x,this.y);
		}
		if(this.tipo == 3) { // !!! no 3
			this.prossimeCaselle = this.movCav(this.x,this.y);
		}
		if(this.tipo == 4) { // !!! no 3
			this.prossimeCaselle = this.movTorre(this.x,this.y);
		}
		if(this.tipo == 5) {
			this.prossimeCaselle = this.movRe(this.x,this.y);
		}
		if(this.tipo == 6) { // regina
			// this.prossimeCaselle = this.movAlf(this.x,this.y);
			// this.prossimeCaselle = this.movTorre(this.x,this.y);	
			this.prossimeCaselle = this.movReg(this.x,this.y);
		}

		// handlo eventuali errori per uscita dalla scacchiera e non-moves
		this.prossimeCaselle = this.prossimeCaselle.filter(z => (z.j > 0 && z.j < 9 && z.k > 0 && z.k < 9));
		this.prossimeCaselle = this.prossimeCaselle.filter(z => (z.j != this.x || z.k != this.y));
	}

	// arrocco() {
	// 	if(! this.mossoPrimaVolta && ) {
	// 
	// }
	// }


	movPed(x,y) { // pedone mouve non-simmetrico quindi divido bianchi e neri
		var daRit = [];
		if(this.colore) { // se nero
			if(! this.mossoPrimaVolta) { // prima mossa doppia
				daRit.push({j:x,k:y+2});
			}
			daRit.push({j:x,k:y+1});

			// molto ripetitiva, probabilmente migliorabile.:
			// controllo se nelle caselle di mangio esistono pezzi avversari
			let c = s.arrPosBian.filter(z => (z.j == x+1 && z.k == y+1));
			if(c.length != 0) this.mangiabili.push(s.arrPosBian[ s.arrPosBian.indexOf(c[0]) ] );
			let d = s.arrPosBian.filter(z => (z.j == x-1 && z.k == y+1));
			if(d.length != 0) this.mangiabili.push(s.arrPosBian[ s.arrPosBian.indexOf(d[0]) ] );
		}
		else { // se bianco
			if(! this.mossoPrimaVolta) { // prima mossa doppia
				daRit.push({j:x,k:y-2});
			}
			daRit.push({j:x,k:y-1});

			let c = s.arrPosNeri.filter(z => (z.j == x+1 && z.k == y-1));
			if(c.length != 0) this.mangiabili.push(s.arrPosNeri[ s.arrPosNeri.indexOf(c[0]) ] );
			let d = s.arrPosNeri.filter(z => (z.j == x-1 && z.k == y-1));
			if(d.length != 0) this.mangiabili.push(s.arrPosNeri[ s.arrPosNeri.indexOf(d[0]) ] );
		}
		return daRit;
	}
	movAlf(x,y) { // x + y ? % x+y !!! && x-y
		var daRit = [];
		var diag1 = x + y;
		var diag2 = x - y;
		let contDiag1 = true;
		let contDiag2 = true;

		// TODO: due for diversi per poter uscire dai singoli se una casella diag è occupata
		// || aggiungere un valore che mi faccia uscire se trovo occupata

		for(let k = 1; k <= 8; k++) {
			for(let j = 1; j <= 8; j++) {
				if(j != x && k != y) {
					if(j+k == diag1) { // se non va rimettere:     (!( (j+k) % diag1))
						// if(s.arrPosBian.filter())
						daRit.push({j,k});
					}
					if(j-k == diag2) {
						daRit.push({j,k});
					}
				}
			}
		}
		return daRit;
	}

	ctrlCav(c,m,n) {
		if(c == 1) { // nero
			if(s.arrNeri.filter( z => z.x == m && z.y == n ).length == 0) {
				// for(let z = 0; z < arrBian)
				s.arrBian.filter( (z) => { if(z.x != m || z.y != n) this.daRitC.push({j:m,k:n});
							else this.mangiabili.push(s.arrBian[s.arrBian.indexOf(z)]);
						return (z.x == m && z.y == n); });

				// if(s.arrBian.filter( z => z.x == m && z.y == n ).length == 0) daRit.push({j:m,k:n});
				// else this.mangiabili.push
			}
		}
		else { // bianco
			if(s.arrBian.filter( z => z.x == m && z.y == n ).length == 0) {
				// for(let z = 0; z < arrBian)
				s.arrNeri.filter( (z) => { if(z.x != m || z.y != n) this.daRitC.push({j:m,k:n});
							else this.mangiabili.push(s.arrNeri[s.arrNeri.indexOf(z)]);
						return (z.x == m && z.y == n); });
			}
		}
	}



	movCav(j,k) { // potrei renderlo con x e y come gli altri
		// var daRit = [];
		this.daRitC = [];
		// this.mangiabili = [];

		// var ctrlCav = function(c,m,n) {
		// 	var mang = [];
		// 	if(c == 1) { // nero
		// 		if(s.arrNeri.filter( z => z.x == m && z.y == n ).length == 0) {
		// 			// for(let z = 0; z < arrBian)
		// 			s.arrBian.filter( (z) => { if(z.x != m || z.y != n) daRit.push({j:m,k:n});
		// 						else mang.push(s.arrBian.indexOf(z));
		// 					return (z.x == m && z.y == n); });

		// 			// if(s.arrBian.filter( z => z.x == m && z.y == n ).length == 0) daRit.push({j:m,k:n});
		// 			// else this.mangiabili.push
		// 		}
		// 	}
		// 	else { // bianco
		// 		if(s.arrBian.filter( z => z.x == m && z.y == n ).length == 0) {
		// 			if(s.arrNeri.filter( z => z.x == m && z.y == n ).length == 0) daRit.push({j:m,k:n});
		// 		}	
		// 	}
		// 	return 0;
		// }

		if(this.colore) {
			this.ctrlCav(1,j-2,k+1);
			this.ctrlCav(1,j-2,k-1);
			this.ctrlCav(1,j-1,k+2);
			this.ctrlCav(1,j-1,k-2);
			this.ctrlCav(1,j+1,k+2);
			this.ctrlCav(1,j+1,k-2);
			this.ctrlCav(1,j+2,k+1);
			this.ctrlCav(1,j+2,k-1);
		}
		else {
			this.ctrlCav(0,j-2,k+1);
			this.ctrlCav(0,j-2,k-1);
			this.ctrlCav(0,j-1,k+2);
			this.ctrlCav(0,j-1,k-2);
			this.ctrlCav(0,j+1,k+2);
			this.ctrlCav(0,j+1,k-2);
			this.ctrlCav(0,j+2,k+1);
			this.ctrlCav(0,j+2,k-1);
		}


		// this.mangiabili = mang;

		// s.arrBian.filter( z => z.x == m && z.y == n )

		// (z) => { if(z.x == m && z.y == n) daRit.push({j:m,k:n});
		// 	else this.mangiabili.push(arrBian[indexOf(z)]);
		// 	return (z.x == m && z.y == n); 
		// }









		// if(this.colore) { // nero 
		// 	if(s.arrNeri.filter( z => z.x == j-2 && z.y == k+1 ).length == 0) {
		// 		if(s.arrBian.filter( z => z.x == j-2 && z.y == k+1 ).length == 0) daRit.push({j:j-2,k:k+1});
		// 		// else this.mangiabili.push
		// 	}
		// 	if(s.arrNeri.filter( z => z.x == j-2 && z.y == k-1 ).length == 0) {
		// 		if(s.arrBian.filter( z => z.x == j-2 && z.y == k-1 ).length == 0) daRit.push({j:j-2,k:k-1});
		// 	}
		// 	if(s.arrNeri.filter( z => z.x == j-1 && z.y == k+2 ).length == 0) {
		// 		if(s.arrBian.filter( z => z.x == j-1 && z.y == k+2 ).length == 0) daRit.push({j:j-1,k:k+2});
		// 	}
		// 	if(s.arrNeri.filter( z => z.x == j-1 && z.y == k-2 ).length == 0) {
		// 		if(s.arrBian.filter( z => z.x == j-1 && z.y == k-2 ).length == 0) daRit.push({j:j-1,k:k-2});
		// 	}
		// 	if(s.arrNeri.filter( z => z.x == j+2 && z.y == k+1 ).length == 0) {
		// 		if(s.arrBian.filter( z => z.x == j+2 && z.y == k+1 ).length == 0) daRit.push({j:j+2,k:k+1});
		// 	}
		// 	if(s.arrNeri.filter( z => z.x == j+2 && z.y == k-1 ).length == 0) {
		// 		if(s.arrBian.filter( z => z.x == j+2 && z.y == k-1 ).length == 0) daRit.push({j:j+2,k:k-1});
		// 	}
		// 	if(s.arrNeri.filter( z => z.x == j+1 && z.y == k+2 ).length == 0) {
		// 		if(s.arrBian.filter( z => z.x == j+1 && z.y == k+2 ).length == 0) daRit.push({j:j+1,k:k+2});
		// 	}
		// 	if(s.arrNeri.filter( z => z.x == j+1 && z.y == k-2 ).length == 0) {
		// 		if(s.arrBian.filter( z => z.x == j+1 && z.y == k-2 ).length == 0) daRit.push({j:j+1,k:k-2});
		// 	}
		// }
		// else { // bianco
		// 	if(s.arrBian.filter( z => z.x == j-2 && z.y == k+1 ).length == 0) {
		// 		if(s.arrNeri.filter( z => z.x == j-2 && z.y == k+1 ).length == 0) daRit.push({j:j-2,k:k+1});
		// 		// else this.mangiabili.push
		// 	}
		// 	if(s.arrBian.filter( z => z.x == j-2 && z.y == k-1 ).length == 0) {
		// 		if(s.arrNeri.filter( z => z.x == j-2 && z.y == k-1 ).length == 0) daRit.push({j:j-2,k:k-1});
		// 	}
		// 	if(s.arrBian.filter( z => z.x == j-1 && z.y == k+2 ).length == 0) {
		// 		if(s.arrNeri.filter( z => z.x == j-1 && z.y == k+2 ).length == 0) daRit.push({j:j-1,k:k+2});
		// 	}
		// 	if(s.arrBian.filter( z => z.x == j-1 && z.y == k-2 ).length == 0) {
		// 		if(s.arrNeri.filter( z => z.x == j-1 && z.y == k-2 ).length == 0) daRit.push({j:j-1,k:k-2});
		// 	}
		// 	if(s.arrBian.filter( z => z.x == j+2 && z.y == k+1 ).length == 0) {
		// 		if(s.arrNeri.filter( z => z.x == j+2 && z.y == k+1 ).length == 0) daRit.push({j:j+2,k:k+1});
		// 	}
		// 	if(s.arrBian.filter( z => z.x == j+2 && z.y == k-1 ).length == 0) {
		// 		if(s.arrNeri.filter( z => z.x == j+2 && z.y == k-1 ).length == 0) daRit.push({j:j+2,k:k-1});
		// 	}
		// 	if(s.arrBian.filter( z => z.x == j+1 && z.y == k+2 ).length == 0) {
		// 		if(s.arrNeri.filter( z => z.x == j+1 && z.y == k+2 ).length == 0) daRit.push({j:j+1,k:k+2});
		// 	}
		// 	if(s.arrBian.filter( z => z.x == j+1 && z.y == k-2 ).length == 0) {
		// 		if(s.arrNeri.filter( z => z.x == j+1 && z.y == k-2 ).length == 0) daRit.push({j:j+1,k:k-2});
		// 	}

			// if(s.arrBian.filter( z => z.j == j-2 && z.k == k+1 ).length == 0) {
			// 	if(s.arrNeri.filter( z => z.j == j-2 && z.k == k+1 ).length == 0) daRit.push({j:j-2,k:k+1});
			// 	// else this.mangiabili.push
			// }
			// if(s.arrBian.filter( z => (z.j == j-2) && (z.k == k-1) ).length == 0) daRit.push({j:j-2,k:k-1});
			// if(s.arrBian.filter( z => z.j == j-1 && z.k == k+2 ).length == 0) daRit.push({j:j-1,k:k+2});
			// if(s.arrBian.filter( z => z.j == j-1 && z.k == k-2 ).length == 0) daRit.push({j:j-1,k:k-2});

			// if(s.arrBian.filter( z => z.j == j+2 && z.k == k+1 ).length == 0) daRit.push({j:j+2,k:k+1});
			// if(s.arrBian.filter( z => z.j == j+2 && z.k == k-1 ).length == 0) daRit.push({j:j+2,k:k-1});
			// if(s.arrBian.filter( z => z.j == j+1 && z.k == k+2 ).length == 0) daRit.push({j:j+1,k:k+2});
			// if(s.arrBian.filter( z => z.j == j+1 && z.k == k-2 ).length == 0) daRit.push({j:j+1,k:k-2});

		// }
		return this.daRitC;
	}

	movTorre(x,y) {
		var daRit = [];
		for(let m = 1; m <= 8; m++) {
			if(m != x) {
				daRit.push({j:m,k:y});
			}
		}
		for(let m = 1; m <= 8; m++) {
			if(m != y) {
				daRit.push({j:x,k:m});
			}
		}
		return daRit;
	}
	movRe(x,y) {
		var daRit = [];
		for(let k = this.y -1; k <= this.y+1; k++) {
			for(let j = this.x -1; j <= this.x+1; j++) {
				daRit.push({j,k});
			}
		}
		return daRit;
	}
	movReg(x,y) { // x + y ? % x+y !!! && x-y
		var daRit = [];
		var diag1 = x + y;
		var diag2 = x - y;

		for(let k = 1; k <= 8; k++) {
			for(let j = 1; j <= 8; j++) {
				if(j != x && k != y) {
					if(j+k == diag1) { // se non va rimettere:     (!( (j+k) % diag1))
						daRit.push({j,k});
					}
					if(j-k == diag2) {
						daRit.push({j,k});
					}
				}
			}
		}
		for(let m = 1; m <= 8; m++) {
			if(m != x) {
				daRit.push({j:m,k:y});
			}
		}
		for(let m = 1; m <= 8; m++) {
			if(m != y) {
				daRit.push({j:x,k:m});
			}
		}
		return daRit;
	}


	// sposta(nX,nY) {
	// 	if(nX > 0 && nX < 9 && nY > 0 && nY < 9) {
	// 		if(s.turno == this.colore) { // controllo turno 
	// 			if(this.prossimeCaselle.filter(x => (x.j == nX && x.k == nY)).length != 0) {
	// 				// sono orgoglioso di questa funzione
	// 				// this.prossimeCaselle.filter(x => this.primoFiltro(x,nX,nY));
	// 				this.x = nX;
	// 				this.y = nY;
	// 				this.mossoPrimaVolta = true;
	// 				s.calcolaPosPezzi();
	// 				// this.possibili(); // c'è già in calcolaPosPezzi()
	// 				s.turno = ! s.turno; // cambio turno dopo ogni mossa 
	// 				console.log(this.nome + ( (this.tipo == 4 || this.tipo == 6) ? " mossa in " : " mosso in " ) + this.x + "," + this.y);
	// 				s.stopMostraPossibili();
	// 			}
	// 			else console.log("Mossa non valida!");
	// 		}
	// 		else console.log("Turno del giocatore " + (s.turno ? "nero" : "bianco") + "!");
	// 	}
	// 	else console.log("Mossa non valida! (OutOfCanvas)");
	// }

	sposta(nX,nY) {
		if(nX > 0 && nX < s.dimX && nY > 0 && nY < s.dimY) {
			if(s.turno == this.colore) { // controllo turno 
				if(this.prossimeCaselle.filter(x => (x.j == nX && x.k == nY)).length != 0) {
					// sono orgoglioso di questa funzione
					// this.prossimeCaselle.filter(x => this.primoFiltro(x,nX,nY));
					this.x = nX;
					this.y = nY;
					this.mossoPrimaVolta = true;
					s.controlloMosse();
					// this.possibili(); // c'è già in calcolaPosPezzi()
					s.turno = ! s.turno; // cambio turno dopo ogni mossa 
					console.log(this.nome + ( (this.tipo == 4 || this.tipo == 6) ? " mossa in " : " mosso in " ) + this.x + "," + this.y);
					s.stopMostraPossibili();
				}
				else console.log("Mossa non valida!");
			}
			else console.log("Turno del giocatore " + (s.turno ? "nero" : "bianco") + "!");
		}
		else console.log("Mossa non valida! (OutOfCanvas)");
	}



}



