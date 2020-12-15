class Razzo {

	// nPf = numero nuove particelle per frame 

  constructor(direz,nPf,x,y,dim,rx1,ry1,rx2,ry2,dx,dy) {
    this.direz = direz || 1;
  	this.particles = [];
  	this.nPf = nPf || 2;
    this.x = x || width/2;
    this.y = y || height-100;
    this.dim = dim || 4;
    this.rx1 = rx1 || -5 * this.direz;
    this.rx2 = rx2 || -1 * this.direz;
    this.ry1 = ry1 || 0.2 * this.direz;
    this.ry2 = ry2 || -0.2 * this.direz;
    this.s = this.dim * 2 * this.direz;
    // this.dx = dx || this.dim / 5 * this.direz;  // per creare prospettiva con diverse dim
    this.dx = dx || width / 60 * this.direz;  // per creare prospettiva con diverse dim
    // this.dx = dx || random(1); // per sfalsare
    // this.dx = dx || 1; // tutti uguali
    // this.dx = dx || 0; // tutti fremi
    this.dy = dy || 0;
    this.sparabile = true;
    this.sparato = false;
  }

  fuoco() {  
    // creo 
  	for (let i = 0; i < this.nPf; i++) this.particles.push(  
      new Scintilla(   this.x,this.y,this.dim,this.rx1,this.ry1,this.rx2,this.ry2  ) );
  }

  togli() {
    // elimino tutte le particles buie (lontane)
    this.particles = this.particles.filter(  x => ( ! x.finished() )  );
  }

  spara() {
    if (this.sparabile) {
      this.sparato = true;
      this.sparabile = false;
    }
  }

  fuori() {
    if(this.direz == 1) return(this.x > width * 11/10);
    if(this.direz == -1) return(this.x < (width * (-1/10)) );
  }

  shuttle() {
    rectMode(CENTER);
    fill(200);
    ellipse(this.x + this.s*4, this.y, this.s);
    rect(this.x+this.s*2, this.y, this.s*4, this.s);

  }

  avanza() {
    // this.x = this.x + this.s;
      this.x = this.x + this.dx;
      this.x = this.x + this.dy;
  }

  mostra(x,y) { 
    this.x = x || this.x;
    this.y = y || this.y;
    if(this.sparato) {
      this.avanza();
      this.fuoco();
    	for (let i = this.particles.length - 1; i >= 0; i--) {
      	this.particles[i].update();
      	this.particles[i].mostra();
    	}
    }
    this.shuttle();
  	this.togli();
  }

}