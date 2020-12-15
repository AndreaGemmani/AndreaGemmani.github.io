var CollectorMappe = function() {

	this.mappaTipi = [0,11,12,13,14,15,16,21,22,23,24,25,26];
	this.mappaNomi = ["Vuoto","Pedone nero","Alfiere nero","Cavallo nero","Torre nera","Re nero","Regina nera",
					"Pedone bianco","Alfiere bianco","Cavallo bianco","Torre bianca","Re bianco","Regina bianca"];

	// tipo pezzi è set di immagini 

	this.tutteLeMappe = [
	{
		mappa : [	14,13,12,16,15,12,13,14,
					11,11,11,11,11,11,11,11,
					0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,
					0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,
					0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,
					0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,
					21,21,21,21,21,21,21,21,
					24,23,22,26,25,22,23,24],
		descriz : "Scacchiera di base P1",
		enableIA : [1,0,0],
		playerAs : 1,
		difficoltà : 0,
		tipoPezzi : 1,
		altreOpz : []

	},
				
	{
		mappa : [	14,13,12,16,15,12,13,14,
					11,11,11,11,11,11,11,11,
					0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,
					0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,
					0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,
					0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,
					21,21,21,21,21,21,21,21,
					24,23,22,26,25,22,23,24],
		descriz : "Scacchiera di base P2",
		enableIA : [0,0,1],
		playerAs : 2,
		difficoltà : 0,
		tipoPezzi : 1,
		altreOpz : []

	},
				
	{
		mappa : [ 	0 ,13,0 ,16,0 ,12,13,14,
					11,0 ,11,0 ,11,11,0 ,11,
					0 ,0 ,0 ,0 ,12,0 ,11,0 ,
					0 ,11,0 ,11,0 ,0 ,0 ,0 ,
					0 ,0 ,0 ,0 ,0 ,0 ,0 ,21,
					23,0 ,0 ,0 ,21,23,0 ,0 ,
					21,21,21,21,0 ,21,21,0 ,
					24,0 ,22,0 ,26,22,0 ,24],
		descriz : "Scacchiera di base",
		enableIA : [0,0,1],
		playerAs : 2,
		difficoltà : 0,
		tipoPezzi : 1,
		altreOpz : []

	},











	]



}