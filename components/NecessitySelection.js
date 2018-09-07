import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, View} from 'react-native';
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
		var newActiveState = [];
		for(var i = 0; i<3; i++){
			if(i==index){
				newActiveState.push(!this.state.activeState[i])
			}else{
				newActiveState.push(this.state.activeState[i])
			}
		}
		this.setState(this.state.activeState: newActiveState)
	}

	render(){
		return(
			<View>
			<TouchableOpacity 
			       style={this.state.activeState[0] ? styles.notSelected : styles.selected} 
			       onPress={() => this.buttonPressed(0)}>
			       <Text>Food</Text>
			</TouchableOpacity>

			<TouchableOpacity 
			       style={this.state.activeState[1] ? styles.notSelected : styles.selected} 
			       onPress={() => this.buttonPressed(1)}>
			       <Text>Injury</Text>
			</TouchableOpacity>

			<TouchableOpacity 
			       style={this.state.activeState[2] ? styles.notSelected : styles.selected} 
			       onPress={() => this.buttonPressed(2)}>
			       <Text>Other</Text>
			</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	notSelected: {
		opacity: 50,
		alignItems: 'center',
   	 	backgroundColor: '#DDDDDD'
	},
	selected: {
		opacity: 100,
		alignItems: 'center',
   	 	backgroundColor: '#DDDDDD'
	}
});