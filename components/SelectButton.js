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

	render() {
    	return (
          <TouchableWithoutFeedback 
          	onPress={() => {this.selectedStatus(!this.state.selected)}}
          	containerStyle={styles.containerStyle}
          	buttonStyle={{backgroundColor: 'white'}}
          	title = {"asdf"}
          >
          <View>
          	<Text style={{color: opac(this.state.selected)}}>Ligma</Text>
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

const styles = StyleSheet.create({
	container: {
		marginTop:10,
	    paddingTop:15,
	    paddingBottom:15,
	    marginLeft:30,
	    marginRight:30,
	    backgroundColor:'#00BCD4',
	    borderRadius:10,
	    borderWidth: 1,
	    borderColor: '#fff'
	}
});