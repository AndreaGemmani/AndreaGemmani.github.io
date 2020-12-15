var Casella = function(j,k) {

	this.x = j;
	this.y = k;

	this.nome = String.fromCharCode(64 + this.x) + this.y; // dovrebbe venire qualcosa tipo "E4"

	this.colore = 0;
	// this.colore = col(255) * (1); // cose

	this.arrOccupanti = [];
	this.occupata = false;
	this.occupataDaBian = false;
	this.occupataDaNero = false;

	this.pericolosaPerNero = false;
	this.pericolosaPerBian = false;
	// this.qualcunoPuoArrivareQui = false;

	this.tuttoNormale = true;


	this.selezionata = false;


	this.aggiungi = function() {
		this.arrOccupanti = [];
		this.arrOccupanti.push( s.chiCeQui(this.x,this.y) );
		if(this.arrOccupanti.length > 0) {
			this.occupata = true;	
			if(this.arrOccupanti[0].colore) this.occupataDaNero = true;
			else this.occupataDaBian = true;
		}
		else {		
			this.occupata = false;
			this.occupataDaBian = false;
			this.occupataDaNero = false;
		}

	}

	this.controlloOccupantiScacc = function() {

	}

	this.controlloSingoloPezzo = function() {
		this.tuttoNormale = true;


		// return this.tuttoNormale;
	}


}