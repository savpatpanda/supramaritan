export const GET_INCIDENTS = 'GET_INCIDENTS'

export function getIncidents(coordinates){
	var bod = JSON.stringify({
		"coordinates" : {...coordinates, lat : coordinates.latitude, long : coordinates.longitude}
	});
	console.log(bod);
	return (dispatch) => {
		console.log('in dispatch')
		fetch("https://abhyanfood.herokuapp.com/range", {
			method: 'POST',
			headers: {
				"Accept": 'application/json',
		   		'Content-Type': 'application/json',
			},
			body: bod
		}).then((json) => {
			return json.json();
		}).then((response) => {
			console.log(response);
			dispatch({
				type: GET_INCIDENTS,
				response
			})
		})
		.catch((error) => {
			console.log(error);
		});
	}
}