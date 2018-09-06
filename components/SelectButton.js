import React from 'react';
import { StyleSheet, Text, Button} from 'react-native';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import {ButtonGroup} from 'react-native-elements';

export default class SelectButton extends React.Component {

	state = {
	    selected: false
	}

	selectedStatus(status) {
    	this.setState({selected: status});
  	}

	render() {
    	return (
          <Button 
          	onPress={() => {this.selectedStatus(!this.state.selected)}}
          	containerStyle={styles.containerStyle}
          	buttonStyle={{backgroundColor: 'white', opacity: opac(this.state.selected)}}
          	title = {"asdf"}
          >
          	
          </Button>
    	);
 	}
}

function opac (asdf){
	if(asdf == true){
		console.log("50");
		return 50
	} else if(asdf == false){
		console.log("100");
		return 100
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		height: 40,
	}
});