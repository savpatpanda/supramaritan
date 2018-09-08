export function sendServerDistress(severity, selections,currentCoordinates){

	fetch('http://abhyanfood.herokuapp.com/storedUsers',{
		method: 'POST',
		headers: {
			Accept: 'application/json',
	   		'Content-Type': 'application/json',
		},
		body: {
			user: '5b930ba168081e9b04c952ff',
			description: {
				food: selections.state.selected,
				injury: selections.state.selected2,
				other: selections.state.selected3
			},
			coordinates: {
				long: currentCoordinates.longitude,
				lat: currentCoordinates.latitude
			},
			currentPriority: severity.state.selectedIndex
		}
	}).then((response) => console.log(response))
	.catch((error) =>{
		console.error(error);
	});
}