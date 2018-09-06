import React from 'react';
import { StyleSheet, Text} from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { Ionicons, Entypo } from '@expo/vector-icons';
import {ButtonGroup} from 'react-native-elements';


export default class SeverityButtons extends React.Component {


	constructor () {
	  super()
	  this.state = {
	    selectedIndex: 2 //come back to this
	  }
	  this.updateIndex = this.updateIndex.bind(this)
	}

	updateIndex (selectedIndex) {
	  this.setState({selectedIndex})
	}

	render() {

		const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
		const { selectedIndex } = this.state
    	return (
          <ButtonGroup 
          	containerStyle={styles.containerStyle}
          	buttonStyle={styles.buttonStyle}
          	selectedTextStyle={styles.selectedTextStyle}
          />
    	);
 	}
}



const component1 = () => <Text>1</Text>
const component2 = () => <Text>2</Text>
const component3 = () => <Text>3</Text>

const styles = StyleSheet.create({
	containerStyle: {
		height: 40,
		width: SCREEN_WIDTH * 0.9
	},
	buttonStyle: {
		backgroundColor: 'white'
	},
	selectedTextStyle: {
		color: 'orange',
		fontWeight: '900'
	}
});