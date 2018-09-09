import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SelectButton from './SelectButton';
import { sendServerDistress } from '../Actions/modal';
import { ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';


class FormModal extends React.Component{
	state = {
		formVisible : false,
		selectedIndex : 2,
		picture: null
	}
	componentWillReceiveProps(nextProps){
		console.log(nextProps)
		if(nextProps.formVisible && nextProps.formVisible.visible != this.state.formVisible){
			this.setState({formVisible: nextProps.formVisible.visible});
		}
		if(nextProps.picture && !this.state.picture){
			this.setState({picture:nextProps.picture});
		}
	}
	updateIndex (selectedIndex) {
	  this.setState({selectedIndex})
	}
 	setFormVisible(visible) {
 		const {dispatch} = this.props
 		console.log("=============================")
    	this.setState({formVisible: visible});
    	dispatch({type: "SET_FORM", visible})
  	}

  	sendDistress(){
  		console.log("Bho is a genius")
		sendServerDistress(this.state.selectedIndex,this.refs.selections,this.props.coordinates, this.state.picture);
	}

	render(){
		const component1 = () => <Text>1</Text>
		const component2 = () => <Text>2</Text>
		const component3 = () => <Text>3</Text>

		const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
		return(
				<View>
				<Modal
		            animationType="slide"
		            transparent={false}
		            visible={this.state.formVisible}
		            onRequestClose={() => {
		              this.setFormVisible(!this.state.formVisible);
		            }}>
		            <View>
		              <View>
		                <View>
		                  <TouchableHighlight
		                    style = {styles.out}
		                    onPress={() => {
		                      this.setFormVisible(!this.state.formVisible);
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
				<Modal
	            animationType="slide"
	            transparent={false}
	            visible={this.state.formVisible}
	            onRequestClose={() => {
	              this.setFormVisible(!this.state.formVisible);
	            }}>
	            <View>
	              <View>
	                <View>
	                  <TouchableHighlight
	                    style = {styles.out}
	                    onPress={() => {
	                      this.setFormVisible(!this.state.formVisible);
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
	        </View>
	    );
    }
}
function mapStateToProps(state) {
	console.log(state);
  return {
    ...state,
    picture : state.loginReducer.base64,
    formVisible : state.loginReducer.formVisible
  }
}
export default connect(mapStateToProps)(FormModal);

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
},
   total: {
   		marginTop: 30,
   		marginRight: 30,
   		marginLeft: 30,
   		marginBottom: 30,
   		borderRadius: 10
   },
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
