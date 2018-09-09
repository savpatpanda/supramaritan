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
	    selected6: false,
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
    		
    		

    		<View style = {{width: "100%", alignItems: 'center', marginTop: 20}}>

    			<Text style = {{alignSelf: 'flex-start', fontSize: 15, marginLeft: '3%'}}>Which of the following best describes your situation</Text>
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
		          			borderRadius: 4,
		          			width: '28%',
		          			alignSelf: 'center'
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
		          			borderRadius: 4,
		          			width: '28%',
		          			alignSelf: 'center',
		          			paddingLeft: 0.75,
		          			paddingTop: 2.5,
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
		          			borderRadius: 4,
		          			width: '28%',
		          			alignSelf: 'center'
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
		          			borderRadius: 4,
		          			width: '28%',
		          			alignSelf: 'center',
		          			paddingLeft: 6.5,
		          			paddingTop: 3
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
		          			paddingLeft: 1,
		          			paddingTop: 2.5,
		          			width: 35,
		          			borderColor: opac5(!this.state.selected5),
		          			borderRadius: 4,
		          			width: '28%',
		          			alignSelf: 'center'
		          		}} />
		          </TouchableWithoutFeedback>
		          <Text style={styles.text}>Earthquake</Text>
		      	</View>

		      	<View style={styles.column}>
		          <TouchableWithoutFeedback 
		          	onPress={() => {this.selectedStatus6(!this.state.selected6)}}
		          	containerStyle={styles.containerStyle}
		          	buttonStyle={{backgroundColor: 'white', alignItems: 'center'}}
		          	title = {"asdf"}>
		          	<View>
		          		<Icon3 name="food-apple" style={{
		          			fontSize: 30, 
		          			color: opac6(!this.state.selected6),
		          			borderWidth: 2,
		          			borderColor: opac6(!this.state.selected6),
		          			borderRadius: 4,
		          			width: '28%',
		          			alignSelf: 'center',
		          			paddingLeft: 7
		          		}} /><Text style={styles.text}>Other</Text>
		          	</View>
		          </TouchableWithoutFeedback>
		          
		      	</View>
	          </View>
	        </View>
    	);
 	}
}

function opac1 (asdf){
	if(!asdf){
		return '#123'
	} else{
		return '#a5aeb7'
	}
}

function opac2 (asdf){
	if(!asdf){
		return '#123'
	} else{
		return '#a5aeb7'
	}
}

function opac3 (asdf){
	if(!asdf){
		return '#123'
	} else{
		return '#a5aeb7'
	}
}

function opac4 (asdf){
	if(!asdf){
		return '#123'
	} else{
		return '#a5aeb7'
	}
}

function opac5 (asdf){
	if(!asdf){
		return '#123'
	} else{
		return '#a5aeb7'
	}
}

function opac6 (asdf){
	if(!asdf){
		return '#123'
	} else{
		return '#a5aeb7'
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		height: 20,
		width: 20,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center'
	},
	row:{
		flex: 0,
		width: '100%',		
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 25
	},
	text:{
		alignSelf: 'center'
	},
	column:{
		width: '33%',
	}
});