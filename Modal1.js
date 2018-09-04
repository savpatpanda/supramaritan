import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight , AppRegistry, Modal} from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { Ionicons, Entypo } from '@expo/vector-icons';

export default class Modal1 extends React.Component {

	state = {
    	formModalVisible: false,
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
	          <View style={styles.column}>
	          	<View style={styles.row}>
	              <TouchableHighlight
	                onPress={() => {
	                  this.setFormModalVisible(!this.state.formModalVisible);
	                }}>
	                <Text>Hide Modal</Text>
	              </TouchableHighlight>
	         	</View>
	          </View>
	        </Modal>
    	);
 	}
}

const styles = StyleSheet.create({
	row : {flex: 1, flexDirection:'row',justifyContent: 'center', alignItems: 'center', backgroundColor: '#40E0D0'},
	column : {flex: 1, flexDirection:'column',justifyContent: 'center', alignItems: 'center'},
	title : {color: 'white', textAlign: 'center'}
});
