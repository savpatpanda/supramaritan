export function sendServerDistress(severity, selections,currentCoordinates,image){
	var bod = JSON.stringify({
			"user": '5b930ba168081e9b04c952ff',
			"description": {
				"food": selections.state.selected,
				"injury": selections.state.selected2,
				"fire": selections.state.selected3,
				"flooding": selections.state.selected4,
				"earthquake": selections.state.selected5,
				"other": selections.state.selected6
			},
			"image" : image,
			"coordinates": currentCoordinates,
			"currentPriority": severity,
		});
	fetch('https://abhyanfood.herokuapp.com/storedUsers',{
		method: 'POST',
		headers: {
			"Accept": 'application/json',
	   		'Content-Type': 'application/json',
		},
		body: bod
	}).then((response) => console.log(response))
	.catch((error) => {
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
	}).then((response) => {return response.json()})
	.then(function(data){
		var end = [];
		for(var i=0; i<data.length; i++){
			var distanceToUser = Math.sqrt(Math.pow(i.incident.coordinates.lat-currentCoordinates.lat,2)-Math.pow(i.incident.coordinates.long-currentCoordinates.long,2))
			var incidents = {
				coordinates:i.incident.coordinates, 
				description:i.incident.description, 
				distance:distanceToUser, 
				time:i.incident.time,
				severity:i.incident.currentPriority}
			end.push(incidents)
		}
		return end;
	})
	.catch((error) =>{
		console.error(error);
	});
}

export function resolve(incident){

	var bod = JSON.stringify({
			"_id": incident.object._id
	});
	return fetch('https://abhyanfood.herokuapp.com/resolveIncident',{
		method: 'POST',
		headers: {
			"Accept": 'application/json',
	   		'Content-Type': 'application/json',
		},
		body: bod
	}).then((response) => {return 'Successfully deleted signal'})
	.catch((error) =>{
		console.error(error);
	});
}

export function collectPoints(longitude, latitude, type){

	return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=1000&type=${type}&key=AIzaSyBXneZ3bJ_NNCgtec5UD8V8664aGQ1EWNA`,{
	}).then(function(response) { return response.json(); })

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
		return end.slice(0,5);
	})
	.catch((error) => {
		console.error(error);
	});
}
