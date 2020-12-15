class PowerUp {
	
	constructor(x,y,dim,t) {
		this.x = x || random(width - (p.distFuori + p.dimRazzi * 10)*2.5 ) + ( (p.distFuori + p.dimRazzi * 10)*2.5 / 2 );
		this.y = y || random(height - (p.padH * 2) )  + p.padH ;
		this.dim = dim || 20;	// dimensione powerup
		this.ang = 0;	// angolo iniziale
		this.vr = 1;	// velocità rotazione 
		this.tipo = t || round(random(10));
		this.inUso = false;
		switch(this.tipo) {
			case 0: this.c = color(255,0,0); 				// vita 
					this.texture = loadImage("heart.ico");
			case 1: this.c = color(120); 					// armatura
					this.texture = loadImage("armor.ico");
					break;			
			case 2: this.c = color(255,100,0);				// vel razzi
					this.texture = loadImage("");
					break;	
			case 3: this.c = color(50,155,255);				// cong
					this.texture = loadImage("congel.ico");
					break;	
			case 4: this.c = color(255,255,0);				// pad piccolo
					this.texture = loadImage("downSizePad.ico");
					break;	
			case 5: this.c = color(255,255,0);				// missili gruss
					this.texture = loadImage("missileGrande.ico");
					break;	
			case 6: this.c = color(255,255,0);				// missili potenti
					this.texture = loadImage("esplosione1.ico");
					break;	
			case 7: this.c = color(255,255,0);				// intangibile
					this.texture =loadImage("intangibile.ico");
					break;	
			case 8: this.c = color(255,255,0);				// tripli x3
					this.texture = loadImage("missilix3.ico");
					break;	
			case 9: this.c = color(100,255,100);			// venom
					this.texture = loadImage("poison2.ico");
					break;	
			case 10: this.c = color(255,255,0);				// pad grande avversario
					this.texture = loadImage("padGrande.ico");
					break;	// 
			default: this.c = color(255); 
					this.texture = undefined;
					break;

		}

	}



	mostra(noR) {
		// this.ang = ang || this.ang;
		push();
			rectMode(CENTER);
			angleMode(DEGREES);
			translate(this.x,this.y);
			push();
			if(! noR) rotate(this.ang);
			fill(this.c);
			rect(0,0,this.dim,this.dim);
			pop(); 
			if(this.texture) image(this.texture,-this.dim/2 +2 ,-this.dim/2 +2 ,16,16);
		pop();

		this.ang += this.vr;
		// console.log("yaya"); 
	}









}