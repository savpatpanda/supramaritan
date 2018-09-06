import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight , AppRegistry, Modal, Dimensions} from 'react-native';
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

	              	
	         	</View>
	         	<Text>Distress Signal</Text>
	            <SeverityButtons />
	          </View>
	        </Modal>
    	);
 	}
}

const SCREEN_WIDTH = Dimensions.get('window').width

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