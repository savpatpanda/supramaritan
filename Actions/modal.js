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
			"currentPriority": severity.state.selectedIndex
		});
	console.log(bod)
	fetch('http://abhyanfood.herokuapp.com/storedUsers',{
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

