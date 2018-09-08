import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, Button } from 'react-native';
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
		                  <Button 
			        		style={styles.button}
			        		title='Submit'
			        		onPress={() => {
			        			this.sendDistress();
			        		}}
			        	   >
		        		   </Button>
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
  button: {
		width: '40%',
		height: '5%',
		backgroundColor: 'white',
		fontSize: 20,
		color: 'white'
   },
   total: {
   		marginTop: 30,
   		marginRight: 30,
   		marginLeft: 30,
   		marginBottom: 30,
   		borderRadius: 10
   }
});
