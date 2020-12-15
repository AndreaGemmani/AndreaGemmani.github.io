class Scintilla {

  constructor(x,y,dim,rx1,ry1,rx2,ry2) {
    this.x = x;
    this.y = y;
    this.dim = dim;
    // QUESTO ERROR HANDLER POTREBBE ESSERE INUTILE 
    // non posso usare OR qui perché random senza argomenti ritorna random(0,1)
    // quindi un valore non-undefined, quindi non passo mai l'OR
    if(rx1 != undefined && ry1 != undefined) {  // se li ho entrambi li uso
      if(rx2 != undefined && ry2 != undefined) {
        this.vx = random(rx1,rx2);
        this.vy = random(ry1,ry2);
      } 
      else {  // se ne ho uno metto orizzontale che spinge a dx, modificabile
        // this.vx = random(-0.2*rx1,0.2*rx1);  // verticale
        // this.vy = random(-5*ry1,-ry1);
        this.vx = random(-5*rx1,-rx1);  // orizzontale
        this.vy = random(-0.2*ry1,-0.2*ry1);
      }
    }
      else{ // se non li ho metto orizzontale che spinge a dx, fisso
        this.vx = random(-5,-1);
        this.vy = random(-0.2,-0.2);
      }

    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
    // this.alpha -= random(4,15);
  }

  mostra() {
    noStroke();
    // stroke(255);
    // fill(255, 220-this.alpha,0);	// disonesto R-Y 
     fill(255, this.alpha-50,0);	// complesso Y<R 
    // fill(255, this.alpha,0);		// contorto Y-R 
    // fill(255, this.alpha+50,0);	// insincero Y>R 
    // fill(255, 220-this.alpha,0,this.alpha);	// trasparenza
    ellipse(this.x, this.y, this.dim);
  }

}