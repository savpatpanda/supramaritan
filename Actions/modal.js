export function sendServerDistress(severity, selections,currentCoordinates){
	console.log('callingDistress');
	console.log(currentCoordinates)
	console.log(JSON.stringify(currentCoordinates));
	var bod = JSON.stringify({
			"user": '5b930ba168081e9b04c952ff',
			"description": {
				"food": selections.state.selected,
				"injury": selections.state.selected2,
				"other": selections.state.selected3
			},
			"coordinates": currentCoordinates,
			"currentPriority": severity
		});
	console.log(bod)
	fetch('https://abhyanfood.herokuapp.com/storedUsers',{
		method: 'POST',
		headers: {
			"Accept": 'application/json',
	   		'Content-Type': 'application/json',
		},
		body: bod
	}).then((response) => console.log(response))
	.catch((error) =>{
		console.error(error);
	});
}

export function getListofSignals(currentCoordinates){
	var bod = JSON.stringify({
			"coordinates": currentCoordinates
	});
	return fetch('https://abhyanfood.herokuapp.com/range',{
		method: 'POST',
		headers: {
			"Accept": 'application/json',
	   		'Content-Type': 'application/json',
		},
		body: bod
	}).then((response) => return response.json(); })
	.then(function(data){
		var end = [];
		for(var i=0; i<data.length; i++){
			var distanceToUser = Math.sqrt(Math.pow((i.incident.coordinates.lat-currentCoordinates.lat),2)-Math.pow((i.incident.coordinates.long-currentCoordinates.long),2))
			var incident = {i.incident.coordinates, i.incident.description, distanceToUser, i.incident.time}
			end.push(incident)
		}
		return end;
	})
	.catch((error) =>{
		console.error(error);
	});
}

export function collectPoints(longitude, latitude, type){

	return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=${type}&key=AIzaSyBXneZ3bJ_NNCgtec5UD8V8664aGQ1EWNA`,{
	}).then(function(response) { console.log(response); return response.json(); })
	.then(function(data){
		var end = [];
		for(var i = 0; i < data.results.length; i++) {
			var coordinate = {
				lat: data.results[i].geometry.location.lat,
				long: data.results[i].geometry.location.lng,
				key: i
			}
			end.push(coordinate)
		}
		return end;
	})
	.catch((error) => {
		console.error(error);
	});
}
