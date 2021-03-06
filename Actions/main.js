export const GET_INCIDENTS = 'GET_INCIDENTS';
export const PUSH_IMAGE = 'PUSH_IMAGE';
export const GET_DISTRESS = 'GET_DISTRESS';

export function getIncidents(coordinates){
	var bod = JSON.stringify({
		"coordinates" : {...coordinates, lat : coordinates.latitude, long : coordinates.longitude}
	});
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

export function getDistress(coordinates){
	var bod = JSON.stringify({
		"coordinates" : {...coordinates, lat : coordinates.latitude, long : coordinates.longitude}
	});
	return (dispatch) => {
		console.log('in dispatch')
		fetch("https://abhyanfood.herokuapp.com/range", {
			method: 'POST',
			headers: {
				"Accept": 'application/json',
		   		'Content-Type': 'application/json',
			},
			body: bod
		}).then((response) => {
			return response.json();
		}).then((data) => {
			console.log(data);
			var output = {
				number : data.severityFactor,
				common : data.report.mostCommon
			}
			dispatch({
				type: GET_DISTRESS,
				output
			})
		})
		.catch((error) => {
			console.log(error);
		});
	}
}

export function sendPicture(base64img){
	return (dispatch) => {
		dispatch({
			type: PUSH_IMAGE,
			base64img
		})
	}
}