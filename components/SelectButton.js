import React from 'react';
import { StyleSheet, Text, Button, TouchableHighlight, TouchableWithoutFeedback, View} from 'react-native';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import {ButtonGroup} from 'react-native-elements';

export default class SelectButton extends React.Component {

	state = {
	    selected: false,
	    selected2: false,
	    selected3: false,
	}

	selectedStatus(status) {
    	this.setState({selected: status});
  	}
  	selectedStatusTwo(status) {
    	this.setState({selected2: status});
  	}
  	selectedStatusThree(status) {
    	this.setState({selected3: status});
  	}

	render() {
    	return (
          <TouchableWithoutFeedback 
          	onPress={() => {this.selectedStatus(!this.state.selected)}}
          	containerStyle={styles.containerStyle}
          	buttonStyle={{backgroundColor: opac(this.state.selected)}}
          	title = {"asdf"}
          >
          <View
          	style = {styles.containerStyle}>
          	<Text>Ligma</Text>
          </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback 
          	onPress={() => {this.selectedStatus(!this.state.selected2)}}
          	containerStyle={styles.containerStyle}
          	buttonStyle={{backgroundColor: opacTwo(this.state.selected2)}}
          	title = {"asdf"}
          >
          <View
          	style = {styles.containerStyle}>
          	<Text>Balls</Text>
          </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback 
          	onPress={() => {this.selectedStatus(!this.state.selected3)}}
          	containerStyle={styles.containerStyle}
          	buttonStyle={{backgroundColor: opacThree(this.state.selected3)}}
          	title = {"asdf"}
          >
          <View
          	style = {styles.containerStyle}>
          	<Text></Text>
          </View>
          </TouchableWithoutFeedback>
    	);
 	}
}

function opac (asdf){
	if(asdf){
		console.log("50");
		return '#123'
	} else if(asdf == false){
		console.log("100");
		return '#456'
	}
}

function opacTwo (asdf){
	if(asdf){
		console.log("50");
		return '#123'
	} else if(asdf == false){
		console.log("100");
		return '#456'
	}
}

function opacThree (asdf){
	if(asdf){
		console.log("50");
		return '#123'
	} else if(asdf == false){
		console.log("100");
		return '#456'
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		height: 40,
		backgroundColor: '#000'
	}
});