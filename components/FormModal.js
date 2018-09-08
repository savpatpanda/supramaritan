import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, Button, TouchableOpacity } from 'react-native';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import SeverityButtons from './SeverityButtons';
import SelectButton from './SelectButton';
import { sendServerDistress } from '../Actions/modal';


export default class FormModal extends React.Component{
	state = {
		formModalVisible : false
	}
	componentWillReceiveProps(){
		if(this.props.formModalVisible != this.state.formModalVisible){
			this.state.formModalVisible = this.props.formModalVisible;
		}
	}

 	setFormModalVisible(visible) {
    	this.setState({formModalVisible: visible});
  	}

  	sendDistress(){
  		console.log("Bho is a genius")
		console.log(this.refs.severity)
		sendServerDistress(this.refs.severity,this.refs.selections,this.props.coordinates);
	}

	render(){
		return(
			<Modal
	            animationType="slide"
	            transparent={false}
	            visible={this.state.formModalVisible}
	            onRequestClose={() => {
	              this.setFormModalVisible(!this.state.formModalVisible);
	            }}>
	            <View>
	              <View>
	                <View>
	                  <TouchableHighlight
	                    style = {styles.out}
	                    onPress={() => {
	                      this.setFormModalVisible(!this.state.formModalVisible);
	                    }}>
	                    <FontAwesome name = "close" style = {styles.closeButton}/>
	                  </TouchableHighlight>
	                </View>
	                <View style = {styles.formView}>
	                  <Text style={styles.title}>Distress Signal</Text>
	                  <SeverityButtons ref='severity'/>
	                  <SelectButton ref='selections'/>
	        		   <View
	        		   	style = {styles.submitNest}>
	        		   <TouchableOpacity
	        		   	style = {styles.submitStyle}
	        		   	onPress={() => {
	        		   		this.sendDistress();
	        		   	}}>
	        		   	<Text style = {styles.innerText}>Submit</Text>
	        		   </TouchableOpacity>
	        		   </View>
	                </View>
	              </View>
	            </View>
	        </Modal>	
	    );
    }
}

const styles = StyleSheet.create({
  closeButton: {
    fontSize: 20,
    marginTop: '10%',
    marginRight: '5%',
    alignSelf: 'center'
  },
  out: {
    flex: 0,
    width: '15%',
    marginTop: '5%',
    alignSelf: 'flex-end',
    backgroundColor: '#fff'
  },
  formView: {
    alignItems: 'center',
    marginTop: '5%'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  submitNest:{
  	width: '100%',
  	height: '25%',
  	alignItems: 'center',
  	justifyContent: 'space-between',
  	backgroundColor: '#000'
  },
  submitStyle:{
  	width: '95%',
  	height: '100%',
  	backgroundColor: '#1f9cef',
  	alignItems: 'center',
  	justifyContent: 'center',
  	borderRadius: 10
  },
  innerText:{
  	color: '#fff',
  	fontWeight: 'bold',
  	fontSize: 20
  }
});
