import React from 'react';
import { StyleSheet, Text, Button, TouchableWithoutFeedback, View} from 'react-native';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';

export default class NecessitySelection extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            activeState: {}
        };
    }	

	render(){
		return(
			<View>
			<TouchableWithoutFeedback 
			       style={this.state.activeState[0] ? styles.notSelected : styles.selected} 
			       onPressOut={() => this.buttonPressed(0)}>
			       <Text>Food</Text>
			</TouchableWithoutFeedback>

			<TouchableWithoutFeedback 
			       style={this.state.activeState[1] ? styles.notSelected : styles.selected} 
			       onPressOut={() => this.buttonPressed(1)}>
			       <Text>Injury</Text>
			</TouchableWithoutFeedback>

			<TouchableWithoutFeedback 
			       style={this.state.activeState[2] ? styles.notSelected : styles.selected} 
			       onPressOut={() => this.buttonPressed(2)}>
			       <Text>Other</Text>
			</TouchableWithoutFeedback>
				<TouchableOpacity 
				       style={this.state.activeState.food ? styles.selected : styles.notSelected} 
				       onPress={() => this.setState({ activeState : {...this.state.activeState, food : true }})}>
				       <Text>Food</Text>
				</TouchableOpacity>

				<TouchableOpacity 
				       style={this.state.activeState.injury ? styles.selected : styles.notSelected} 
				       onPress={() => this.setState({ activeState : {...this.state.activeState, injury : true }})}>
				       <Text>Injury</Text>
				</TouchableOpacity>

				<TouchableOpacity 
				       style={this.state.activeState.other ? styles.selected : styles.notSelected} 
				       onPress={() => this.setState({ activeState : {...this.state.activeState, other : true }})}>
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
   	 	backgroundColor: '#000'
	}
});