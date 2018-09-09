import React from 'react';
import { StyleSheet, Text, Button, TouchableHighlight, TouchableWithoutFeedback, View} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


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
          <View style={styles.row}>
          	<View style={styles.column}>
	          <TouchableWithoutFeedback 
	          	onPress={() => {this.selectedStatus(!this.state.selected)}}
	          	containerStyle={styles.containerStyle}
	          	buttonStyle={{backgroundColor: 'white'}}
	          	title = {"asdf"}>
	          <Icon name="food-apple" style={styles.actionButtonIcon} />
	          </TouchableWithoutFeedback>
	      </View>
		  <View style={styles.column}>
	          <TouchableWithoutFeedback 
	          	onPress={() => {this.selectedStatus(!this.state.selected)}}
	          	containerStyle={styles.containerStyle}
	          	buttonStyle={{backgroundColor: 'white'}}
	          	title = {"asdf"}
	          >
		          <View
		          	style = {styles.containerStyle}>
		          	<Text style={{color: opac(this.state.selected)}}>Sugondese</Text>
		          </View>
	          </TouchableWithoutFeedback>
          </View>
	      <View style={styles.column}>
	          <TouchableWithoutFeedback 
	          	onPress={() => {this.selectedStatus(!this.state.selected)}}
	          	containerStyle={styles.containerStyle}
	          	buttonStyle={{backgroundColor: 'white'}}
	          	title = {"asdf"}
	          >
		          <View
		          	style = {styles.containerStyle}>
		          	<Text style={{color: opac(this.state.selected)}}>Balls</Text>
		          </View>
	          </TouchableWithoutFeedback>
          </View>
          </View>
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
	},
	rows:{

	},
	columns:{

	},
	actionButtonIcon: {
		fontSize: 30
	}
});