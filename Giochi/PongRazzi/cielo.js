class Cielo {
	constructor(ns) {
		this.nStelle = ns || 200;
		this.arrStelle = [];
		this.dimMedia = 2;
		this.n = 1;
	}

	crea() {
		for(let i = 0; i < this.nStelle; i++) {
			this.arrStelle[i] = new Stella();
		}
	}

	mostra() {
		if(this.n) {
			this.crea();
			this.n = 0;
		}
		for(let s = 0; s < this.arrStelle.length; s++) {
			this.arrStelle[s].sposta();
			this.arrStelle[s].mostra();
		}

		// invece di distruggere e creare stelle, sposto quelle fuori 
		// dalla parte opposta dello schermo risparmiando calcolo
		// this.arrStelle = this.arrStelle.filter(x => !x.fuori() ); // elimino quelle fuori
		// if(this.arrStelle.length < 200) this.arrStelle.push(new Stella()); // e ne creo altre
	}


}



class Stella {

	constructor(x,y,dim) {
		this.x = x || round(random(width));
		this.y = y || round(random(height));
		this.dim = dim || random(1,3);
		this.vx = 0;
		this.vy = 0;
		// this.vx = razzo.pos /10;
		// this.vy = 0;
	}

	mostra() {
		noStroke();
		fill(255);
		ellipse(this.x,this.y,this.dim);
	}

	fuori() {
		return (this.x > width || this.x < 0 || this.y > height || this.y < 0);
	}

	sposta() {
    this.x += this.vx;
    this.y += this.vy;
    // if (this.fuori) {
    	// if(this.x < 0) this.x = this.x + width + width/cielo.nStelle;
    	if(this.x < 0) this.x = this.x + width + width/200;
    // }

    // this.alpha -= 5;
    // this.alpha -= random(4,15);
  }


}



