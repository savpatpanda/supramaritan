import React from 'react';
import { StyleSheet, Text, Button} from 'react-native';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import {ButtonGroup} from 'react-native-elements';

export default class SelectButton extends React.Component {

	state = {
	    selected: false;
	}

	render() {
    	return (
          <Button 
          	onPress={() => {this.setState(!this.state.selected)}}
          	containerStyle={styles.containerStyle}
          	buttonStyle={{backgroundColor: 'white', opacity: opac(this.state.selected)}}
          >
          	<FontAwesome name = "close"/>
          </Button>
    	);
 	}
}

function opac (asdf){
	if(asdf == false){
		return 50
	} else if(asdf == true){
		return 100
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		height: 40,
	}
});