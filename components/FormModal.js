import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight , AppRegistry, Modal} from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { Ionicons, Entypo } from '@expo/vector-icons';
import {ButtonGroup} from 'react-native-elements';
import {connect} from 'react-redux';
import SeverityButtons from './SeverityButtons';

export default class FormModal extends React.Component {

	state = {
    	formModalVisible: null,
  	}
  	componentDidMount(){
  		this.state.formModalVisible = this.props.visible;
  	}
	setFormModalVisible(visible) {
    	this.setState({formModalVisible: visible});
  	}
	render() {
    	return (
	    	<Modal
	          animationType="slide"
	          transparent={false}
	          visible={this.state.formModalVisible}
	          onRequestClose={() => {
	            this.setFormModalVisible(!this.state.formModalVisible);
	          }}>
	          <View>
	          	<View>
	              <TouchableHighlight
	                onPress={() => {
	                  this.setFormModalVisible(!this.state.formModalVisible);
	                }}>
	                <Text>Hide Modal</Text>
	              </TouchableHighlight>
	              	<Text>Distress Signal</Text>
	              <SeverityButtons />
	         	</View>
	          </View>
	        </Modal>
    	);
 	}
}

const styles = StyleSheet.create({
	row : {flex: 1, flexDirection:'row',justifyContent: 'center', alignItems: 'center', backgroundColor: '#40E0D0'},
	column : {flex: 1, flexDirection:'column',justifyContent: 'center', alignItems: 'center'},
	title : {color: 'white', textAlign: 'center'},
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