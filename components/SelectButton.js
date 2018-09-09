import React from 'react';
import { StyleSheet, Text, Button, TouchableHighlight, TouchableWithoutFeedback, View} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/FontAwesome5';

export default class SelectButton extends React.Component {

	state = {
	    selected1: false,
	    selected2: false,
	    selected3: false,
	    selected4: false,
	    selected5: false,
	    selected6: false
	}

	selectedStatus1(status) {
    	this.setState({selected1: status});
  	}
  	selectedStatus2(status) {
    	this.setState({selected2: status});
  	}
  	selectedStatus3(status) {
    	this.setState({selected3: status});
  	}
  	selectedStatus4(status) {
    	this.setState({selected4: status});
  	}
  	selectedStatus5(status) {
    	this.setState({selected5: status});
  	}
  	selectedStatus6(status) {
    	this.setState({selected6: status});
  	}

	render() {
    	return (
    		<View style={styles.column}>
	          <View style={styles.row}>
	          	<View style={styles.column}>
		          <TouchableWithoutFeedback 
		          	onPress={() => {this.selectedStatus1(!this.state.selected1)}}
		          	containerStyle={styles.containerStyle}
		          	buttonStyle={{backgroundColor: 'white'}}
		          	title = {"asdf"}>
		          		<Icon name="food-apple" style={{
		          			fontSize: 30, 
		          			color: opac1(!this.state.selected1),
		          			borderWidth: 2,
		          			borderColor: opac1(!this.state.selected1),
		          			borderRadius: 4
		          		}} />
		          </TouchableWithoutFeedback>
		          <Text style={styles.text}>Food</Text>
		      	</View>
		      	<View style={styles.column}>
		          <TouchableWithoutFeedback 
		          	onPress={() => {this.selectedStatus2(!this.state.selected2)}}
		          	containerStyle={styles.containerStyle}
		          	buttonStyle={{backgroundColor: 'white'}}
		          	title = {"asdf"}>
		          		<Icon name="hospital" style={{
		          			fontSize: 30, 
		          			color: opac2(!this.state.selected2),
		          			borderWidth: 2,
		          			borderColor: opac2(!this.state.selected2),
		          			borderRadius: 4
		          		}} />
		          </TouchableWithoutFeedback>
		          <Text style={styles.text}>Injury</Text>
		      	</View>
		      	<View style={styles.column}>
		          <TouchableWithoutFeedback 
		          	onPress={() => {this.selectedStatus3(!this.state.selected3)}}
		          	containerStyle={styles.containerStyle}
		          	buttonStyle={{backgroundColor: 'white'}}
		          	title = {"asdf"}>
		          		<Icon1 name="fire" style={{
		          			fontSize: 30, 
		          			color: opac3(!this.state.selected3),
		          			borderWidth: 2,
		          			borderColor: opac3(!this.state.selected3),
		          			borderRadius: 4
		          		}} />
		          </TouchableWithoutFeedback>
		          <Text style={styles.text}>Fire</Text>
		      	</View>
		      </View>
			  <View style={styles.row}>
		        <View style={styles.column}>
		          <TouchableWithoutFeedback 
		          	onPress={() => {this.selectedStatus4(!this.state.selected4)}}
		          	containerStyle={styles.containerStyle}
		          	buttonStyle={{backgroundColor: 'white'}}
		          	title = {"asdf"}>
		          		<Icon2 name="ios-water" style={{
		          			fontSize: 30, 
		          			color: opac4(!this.state.selected4),
		          			borderWidth: 2,
		          			borderColor: opac4(!this.state.selected4),
		          			borderRadius: 4
		          		}} />
		          </TouchableWithoutFeedback>
		          <Text style={styles.text}>Flooding</Text>
		      	</View>
		      	<View style={styles.column}>
		          <TouchableWithoutFeedback 
		          	onPress={() => {this.selectedStatus5(!this.state.selected5)}}
		          	containerStyle={styles.containerStyle}
		          	buttonStyle={{backgroundColor: 'white'}}
		          	title = {"asdf"}>
		          		<Icon name="earth" style={{
		          			fontSize: 30, 
		          			color: opac5(!this.state.selected5),
		          			borderWidth: 2,
		          			borderColor: opac5(!this.state.selected5),
		          			borderRadius: 4
		          		}} />
		          </TouchableWithoutFeedback>
		          <Text style={styles.text}>Earthquake</Text>
		      	</View>
		      	<View style={styles.column}>
		          <TouchableWithoutFeedback 
		          	onPress={() => {this.selectedStatus6(!this.state.selected6)}}
		          	containerStyle={styles.containerStyle}
		          	buttonStyle={{backgroundColor: 'white'}}
		          	title = {"asdf"}>
		          		<Icon3 name="food-apple" style={{
		          			fontSize: 30, 
		          			color: opac6(!this.state.selected6),
		          			borderWidth: 2,
		          			borderColor: opac6(!this.state.selected6),
		          			borderRadius: 4
		          		}} />
		          </TouchableWithoutFeedback>
		          <Text style={styles.text}>Other</Text>
		      	</View>
	          </View>
	        </View>
    	);
 	}
}

function opac1 (asdf){
	if(asdf){
		return '#123'
	} else{
		return '#a5aeb7'
	}
}

function opac2 (asdf){
	if(asdf){
		return '#123'
	} else{
		return '#a5aeb7'
	}
}

function opac3 (asdf){
	if(asdf){
		return '#123'
	} else{
		return '#a5aeb7'
	}
}

function opac4 (asdf){
	if(asdf){
		return '#123'
	} else{
		return '#a5aeb7'
	}
}

function opac5 (asdf){
	if(asdf){
		return '#123'
	} else{
		return '#a5aeb7'
	}
}

function opac6 (asdf){
	if(asdf){
		return '#123'
	} else{
		return '#a5aeb7'
	}
}

const styles = StyleSheet.create({
	text: {
		textAlign: 'center'
	},
	containerStyle: {
		height: 20,
		width: 20,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center'
	},
	rows:{
		flexDirection: 'row',
		alignItems: 'center'
	},
	columns:{
		alignItems: 'center'
	}
});