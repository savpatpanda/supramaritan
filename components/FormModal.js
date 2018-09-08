import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SelectButton from './SelectButton';
import { sendServerDistress } from '../Actions/modal';
import { ButtonGroup } from 'react-native-elements';


export default class FormModal extends React.Component{
	state = {
		formModalVisible : false,
		selectedIndex : 2
	}
	componentWillReceiveProps(){
		if(this.props.formModalVisible != this.state.formModalVisible){
			this.state.formModalVisible = this.props.formModalVisible;
		}
	}
	updateIndex (selectedIndex) {
	  this.setState({selectedIndex})
	}
 	setFormModalVisible(visible) {
    	this.setState({formModalVisible: visible});
  	}

  	sendDistress(){
  		console.log("Bho is a genius")
		sendServerDistress(this.state.selectedIndex,this.refs.selections,this.props.coordinates);
	}

	render(){
		const component1 = () => <Text>1</Text>
		const component2 = () => <Text>2</Text>
		const component3 = () => <Text>3</Text>

		const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
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
	                    <Icon name = "close" style = {styles.closeButton}/>
	                  </TouchableHighlight>
	                </View>
	                <View style = {styles.formView}>
	                  <Text style={styles.title}>Distress Signal</Text>
	                  <ButtonGroup 
			          	onPress={this.updateIndex.bind(this)}
			      		selectedIndex={this.state.selectedIndex}
			      		buttons={buttons}
			          	containerStyle={styles.containerStyle}
			          	buttonStyle={styles.buttonStyle}
			          	selectedTextStyle={styles.selectedTextStyle}
			          	selectedButtonStyle={styles.selectedButtonStyle}
			          	innerBorderStyle={{width: 0, color: 'white'}}
			          />
	                  <SelectButton ref='selections'/>
	                  <Button 
		        		style={styles.button}
		        		title='Submit'
		        		onPress={this.sendDistress.bind(this)}
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
   containerStyle: {
		height: 40,
		borderColor: 'white'
	},
	buttonStyle: {
	    borderWidth: 3,
	    borderColor: 'black',
		backgroundColor: 'white'
	},
	selectedTextStyle: {
		color: 'orange',
		fontWeight: '900'
	},
	selectedButtonStyle: {
		backgroundColor: 'orange'
	}
});
