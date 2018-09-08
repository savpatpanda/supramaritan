import React from 'react';
import { StyleSheet, Text, Button, View} from 'react-native';

export default class Submit extends React.Component {

	render() {
    	return (
        	<View>
	    		<Button 
	        		style={styles.button}
	        		title='Submit'
	        		//onPress={sendDistress}
	        	>
	        	</Button>
        	</View>
    	);
 	}
}

const styles = StyleSheet.create({
	button: {
		width: '40%',
		height: '5%',
		backgroundColor: 'white',
		fontSize: 20,
		color: 'blue'
	}
});