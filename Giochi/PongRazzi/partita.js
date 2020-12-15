class Partita {

	constructor() {
		this.razziB = [];
		this.razziG = [];

		this.powerup = [];
		this.powerB = [];
		this.powerG = [];
		this.maxPowerup = 10;

		this.distFuori = 50;
		this.dimRazzi = 5;

		this.padBx = this.distFuori;
		this.padBy = height/2;
		this.padGx = width - this.distFuori;
		this.padGy = height/2;

		this.padH = 80;
		this.padW = 10;
		this.padVel = 8;

		this.vitaB = 100;
		this.vitaG = 100;
		this.potenzaR = 10;
		this.ricaricaT = 1000; // in secondi per ora ma meglio in frame forse

		this.n = 2;
	}

	creaB() {
		for(let r = 0; r < 1; r++) {
			this.razziB[r] = new Razzo(1,2,this.padBx,this.padBy,this.dimRazzi);
		}
	}
	creaG() {
		for(let r = 0; r < 1; r++) {
			this.razziG[r] = new Razzo(-1,2,this.padGx,this.padGy,this.dimRazzi);
		}
	}
	creaPowerUp() {
		if(this.powerup.length < this.maxPowerup) {
			if(random(1) > 0.995) {
				this.powerup.push(new PowerUp() );
			}
		}
	}

	usaPow() {
		if(keyIsDown(65)) ;
		if(keyIsDown(RIGHT_ARROW)) ;
	}

	mostraPow() {

		push();
		rectMode(CENTER);
		noFill();
		stroke(255);
		strokeWeight(3);
		rect(50, 50, 30, 30);
		rect(width - 50, 50, 30, 30);
		pop();

		for(let p = 0; p < this.powerB.length; p++) {
			this.powerB[p].x = 50 + 50 * p;
			this.powerB[p].y = 50; 
			this.powerB[p].mostra(1);
		}
		for(let p = 0; p < this.powerG.length; p++) {
			this.powerG[p].x = width - 50 - 50 * p;
			this.powerG[p].y = 50; 
			this.powerG[p].mostra(1); // se "1" no rotazione
		}
	}

	colpitoPow() {
		for(let b = 0; b < this.razziB.length ; b++) {

			for(let p = 0; p < this.powerup.length; p++) {
				if(	this.razziB[b].x > this.powerup[p].x - this.powerup[p].dim - this.razziB[b].s *5 &&
					this.razziB[b].x < this.powerup[p].x + this.powerup[p].dim &&
					this.razziB[b].y > this.powerup[p].y - this.powerup[p].dim - this.razziB[b].s &&
					this.razziB[b].y < this.powerup[p].y + this.powerup[p].dim + this.razziB[b].s ) {

					if(this.powerB.length < 10) this.powerB.push(this.powerup[p]);
					this.powerup.splice(p,1);
					// this.vitaG -= this.potenzaR;
					// this.creaB();

					// return 1; // potrei non returnare 
				}
			}
		}

		for(let g = 0; g < this.razziG.length ; g++) {

			for(let p = 0; p < this.powerup.length; p++) {
				if(	this.razziG[g].x < this.powerup[p].x + this.powerup[p].dim - this.razziG[g].s *5 &&
					this.razziG[g].x > this.powerup[p].x - this.powerup[p].dim &&
					this.razziG[g].y > this.powerup[p].y - this.powerup[p].dim + this.razziG[g].s &&
					this.razziG[g].y < this.powerup[p].y + this.powerup[p].dim - this.razziG[g].s ) {

					if(this.powerG.length < 10) this.powerG.push(this.powerup[p]);
					this.powerup.splice(p,1);
					// this.vitaB -= this.potenzaR;
					// this.creaG();

					// return 1; // potrei non returnare 
				}
			}
		}



	}

	colpitoG() {
		for(let b = 0; b < this.razziB.length ; b++) {
			// if(	this.razziB[b].x > this.padGx - this.padW - this.razziB[b].s *5) ; // console.log(11);
			// if( this.razziB[b].x < this.padGx + this.padW) ; // console.log(22);
			// if( this.razziB[b].y > this.padGy - this.padH - this.razziB[b].s) ; // console.log(33);
			// if( this.razziB[b].y < this.padGy + this.padH + this.razziB[b].s ) ; 

			if(	this.razziB[b].x > this.padGx - this.padW - this.razziB[b].s *5 &&
				this.razziB[b].x < this.padGx + this.padW &&
				this.razziB[b].y > this.padGy - this.padH - this.razziB[b].s &&
				this.razziB[b].y < this.padGy + this.padH + this.razziB[b].s ) {

				this.razziB.splice(b,1);
				this.vitaG -= this.potenzaR;
				this.creaB();

				return 1; // potrei non returnare 
			}
		}
	}	

	colpitoB() {
		for(let g = 0; g < this.razziG.length ; g++) {
			// if(	this.razziG[g].x < this.padBx + this.padW - this.razziG[g].s *5)  console.log(1);
			// if( this.razziG[g].x > this.padBx - this.padW)  console.log(2);
			// if( this.razziG[g].y > this.padBy - this.padH - this.razziG[g].s) ;// console.log(3);
			// if( this.razziG[g].y < this.padBy + this.padH + this.razziG[g].s ) ;// console.log(4);
			if(	this.razziG[g].x < this.padBx + this.padW - this.razziG[g].s *5 &&
				this.razziG[g].x > this.padBx - this.padW &&
				this.razziG[g].y > this.padBy - this.padH + this.razziG[g].s &&
				this.razziG[g].y < this.padBy + this.padH - this.razziG[g].s ) {

				this.razziG.splice(g,1);
				this.vitaB -= this.potenzaR;
				this.creaG();

				return 1; // potrei non returnare 
			}
		}
	}

	ricrea() {		
		for(let b = 0; b < this.razziB.length ; b++) {
			if(this.razziB[b].fuori()) {
				this.razziB.splice(b,1);
				this.creaB();
			}
		}	

		for(let g = 0; g < this.razziG.length ; g++) {
			if(this.razziG[g].fuori()) {
				this.razziG.splice(g,1);
				this.creaG();
			}
		}

	}

	mostra() {
		if(this.n) {
			this.creaB();
			this.creaG();
			this.n = 0;
		}

		if( ! this.finePartita() ) {
			this.sposta();
			this.spara();

			this.colpitoPow();

			this.ricrea();
			this.creaPowerUp();
		}

		// disegno
		rectMode(RADIUS);
		fill(0,255,0);
		if(this.colpitoG() ) fill(255,0,0);
		rect(this.padGx,this.padGy,this.padW,this.padH);
		fill(0,0,255);
		if(this.colpitoB() ) fill(255,0,0);
		rect(this.padBx,this.padBy,this.padW,this.padH);

		// mostru razzi blu
		for(let b = 0; b < this.razziB.length ; b++) {
			if(this.razziB[b] != undefined) {
				if(this.razziB[b].sparabile) this.razziB[b].mostra(this.padBx,this.padBy);
				else this.razziB[b].mostra();
			}
		}
		// mostro razzi verdi
		for(let g = 0; g < this.razziG.length ; g++) {
			if(this.razziG[g] != undefined) {
				if(this.razziG[g].sparabile) this.razziG[g].mostra(this.padGx,this.padGy);
				else this.razziG[g].mostra();
			}
		}
		// mostro power uppi
		for(let p = 0; p < this.powerup.length ; p++) {
			this.powerup[p].mostra();
		
		}

		this.mostraPow();

		this.punteggio();


	}


	spara() {
		// aggiungere colpo caricato
		if(keyIsDown(68)) {
			for(let b = 0; b < this.razziB.length ; b++) {
				if(this.razziB[b] != undefined && this.razziB[b].sparabile )
					this.razziB[b].spara(); // prob non serve (1) / (-1)
			}
		}
		if(keyIsDown(LEFT_ARROW)) {
			for(let g = 0; g < this.razziG.length ; g++) {
				if(this.razziG[g] != undefined && this.razziG[g].sparabile )
					this.razziG[g].spara();
			}
		}
	}

	sposta() {
		if(keyIsDown(87)) this.padBy -= this.padVel;
		if(keyIsDown(83)) this.padBy += this.padVel;

		if(keyIsDown(UP_ARROW)) this.padGy -= this.padVel;
		if(keyIsDown(DOWN_ARROW)) this.padGy += this.padVel;

		this.padFuori();
	}

	padFuori() {
		if(this.padGy > height - this.padH) this.padGy = height - this.padH; // troppo giù
		if(this.padBy > height - this.padH) this.padBy = height - this.padH;

		if(this.padGy < this.padH) this.padGy = this.padH; // troppo su
		if(this.padBy < this.padH) this.padBy = this.padH;


		// if(this.pos.y > height-this.dimY) this.pos.y = height-this.dimY;
		// if(this.pos.y < this.dimY) this.pos.y = this.dimY;
	}


	pausa() {

	}


	punteggio() {
		push();

		rectMode(CORNER);
		noStroke();

		fill(0,0,255);
		if(this.vitaB >= 0) rect(width/2-200,10,200 * this.vitaB / 100,20);
		fill(0,255,0);
		if(this.vitaG >= 0) rect(width/2+200,10,-200 * this.vitaG / 100,20);

		rectMode(CENTER);
		stroke(255);
		strokeWeight(5);
		noFill();
		rect(width/2-100,20,200,20);
		rect(width/2+100,20,200,20);


		textAlign(CENTER,CENTER);
		textSize(width/60);
		noStroke();
		fill(0,0,255);
		text(this.vitaB,width/2 - 200,50);
		fill(0,255,0);
		text(this.vitaG,width/2 + 200,50);
		pop();
	}


	finePartita() {
		if(this.vitaB <= 0) {
			textAlign(CENTER,CENTER);
			textSize(width/20);
			text("Mr. Verde vinceh", width/2, height/2);
			return 1;
		}
		if(this.vitaG <= 0) {
			textAlign(CENTER,CENTER);
			textSize(width/20);
			text("Il blu ha vinto vintoss", width/2, height/2);
			return 1;
		}

		// potrei mettere qui un return 1 / 0 / -1 in base a chi ha finito la vita,
		//  e poi usarlo per i text  
	}





}