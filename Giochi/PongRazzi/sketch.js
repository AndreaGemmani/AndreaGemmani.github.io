// Andrea Gemmani 

// particles = [];
razzi = [];
var cielo;

var daMuovere = -1; // nessuno movibile all'inizio
// var daMuovere = 0; // inizio con uno movibile
var n1 = 1;

nP = 5;

var p;

function setup() {
  // createCanvas(600, 400);
  
  // // il -20 è per evitare che si muova premendo le freccette
  createCanvas(window.innerWidth -20, window.innerHeight -20); 

  // for(let i = 0; i < 5; i++) {
  //   razzi[i] = new Razzo(2,random(width-20)+10,random(height-20)+10,2*(i*3+1));
  // }

  // // questo
  // for(let i = 0; i < 7; i++) {
  //   razzi[i] = new Razzo(2,width*3/4,height/15*pow(i,1.4) +20, 2*(i*2+1), -1, 0.05*pow(i+1,1.3), -2*pow(i,1.1), -0.05*pow(i+1,1.3));
  // }

  // for(let i = 0; i < 7; i++) {
  //   razzi[i] = new Razzo(2,width*3/4,height/10*(i*1.5) +20, 2*(i*2+1), -1, 0.1*(i+0.01), -2*pow(i,1.1), -0.1*(i+0.01));
  // }

  // random pos e dim, non mi convince il fuoco tanto diverso fra i razzi
  // for(let i = 0; i < 7; i++) {
  //   razzi[i] = new Razzo(2,random(width),random(height-50)+25, random(2,8), -1, 0.05*pow(i+1,1.3), -2*pow(i,1.1), -0.05*pow(i+1,1.3));
  // }

  // dim con sqrt 
  // for(let i = 0; i < 7; i++) {
  //   razzi[i] = new Razzo(2,random(width),random(height-50)+25, sqrt(random(2,50)), -1, 0.05*pow(i+1,1.3), -2*pow(i,1.1), -0.05*pow(i+1,1.3));
  // }

  // razzi[0] = new Razzo(2);
  // razzi[1] = new Razzo(2);

  p = new Partita();

  cielo = new Cielo();

  noCursor();
}

function draw() {

  background(0);
// console.log(round(frameRate()));

  cielo.mostra();


  if(mouseIsPressed) {  // cambio razzo scelto e lo sposto 
    if(n1) {
      // daMuovere = (daMuovere+1) % razzi.length; // ne ho sempre uno 
      daMuovere = (daMuovere+1) % (razzi.length + 1) ; // scelgo uno NON esistente
      n1 = 0; // non rientro se rimane premuto
    }
  }
  else n1 = 1;

// ho raggruppato, se premo spazio li sposto a sx
  for(let r = razzi.length-1; r >= 0; r--) {
    if(keyIsDown(32)) {
      razzi[r].mostra(random(100),random(height-50)+25);
    }
    else {
      if(r == daMuovere) razzi[r].mostra(mouseX,mouseY);
      else {
        razzi[r].mostra();
    //  razzi[r].mostra(razzi[r].x+0.4, razzi[r].y); // sposto da qui
      }
    }
  }

  p.mostra();

  // if(keyIsDown(32)) { // prememndo spazio li riporto a sx 
  //   for(let r = razzi.length-1; r >= 0; r--) {
  //     razzi[r].mostra(random(100));
  //   }
  // }
  // for(let r = razzi.length-1; r >= 0; r--) {
  //   if(r == daMuovere) razzi[r].mostra(mouseX,mouseY);
  //   else {
  //     razzi[r].mostra();
  // //  razzi[r].mostra(razzi[r].x+0.4, razzi[r].y); // sposto da qui
  //   }
  // }

}


