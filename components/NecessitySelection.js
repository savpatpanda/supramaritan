import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';

export default class NecessitySelection extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            activeState: [false, false, false]
        };
        this.buttonPressed = this.buttonPressed.bind(this);
    }
	
	buttonPressed(index) {

	}

	render(){
		return(
			<TouchableOpacity 
			       style={this.state.activeClasses[0] ? styles.notSelected : styles.selected} 
			       onPress={() => buttonPressed(0)}>
			       <Text>Food</Text>
			</TouchableOpacity>

			<TouchableOpacity 
			       style={this.state.activeClasses[1] ? styles.notSelected : styles.selected} 
			       onPress={() => buttonPressed(1)}>
			       <Text>Injury</Text>
			</TouchableOpacity>

			<TouchableOpacity 
			       style={this.state.activeClasses[2] ? styles.notSelected : styles.selected} 
			       onPress={() => buttonPressed(2)}>
			       <Text>Other</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	notSelected: {
		opacity: 50
	},
	selected: {
		opacity: 100
	}
});