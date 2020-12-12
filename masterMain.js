


// uso come appoggio al momento per salvare func che forse copierò





	this.creaMinMaxLatLong = function() {
		let objDatiJSON = loadder.dataLoadedObj.dati_json;

		loadder.maxLat = 0;
		loadder.minLat = Infinity;
		loadder.maxLong = 0;
		loadder.minLong = Infinity;
		let arrLat = [];
		let arrLong = [];
		for( let i = 0; i < objDatiJSON.arrProvinceDivise.length; i++) {
			arrLat.push(objDatiJSON.arrProvinceDivise[i][0].lat);
			arrLong.push(objDatiJSON.arrProvinceDivise[i][0].long);
		}
		arrLat = arrLat.filter(x => x > 0);
		arrLong = arrLong.filter(x => x > 0);
		loadder.maxLat = max(arrLat);
		loadder.minLat = min(arrLat);
		loadder.maxLong = max(arrLong);
		loadder.minLong = min(arrLong);

	}





var MasterMain = function() {
	
}