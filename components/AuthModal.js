import React from 'react';
import { StyleSheet, Text, View, Modal, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getListofSignals} from '../Actions/modal';

export default class AuthModal extends React.Component{
	
	state = {
		authModalVisible : false,
		dataSource: []
	}

	componentWillMount(){
		var list = getListofSignals(this.props.currentCoordinates);
		var low = [];
		var medium = [];
		var high = [];
		for(var i = 0; i<list.length; i++){
			if(list[i].currentPriority == 1){
				low.push(list[i])
			}else if(list[i].currentPriority == 2){
				medium.push(list[i])
			}else{
				high.push(list[i])
			}
		}
		low.sort(function(a,b){
			if(a.distanceToUser > b.distanceToUser){
				return 1;
			}else if(a.distanceToUser < b.distanceToUser){
				return -1;
			}else{
				return 0;
			}
		})
		medium.sort(function(a,b){
			if(a.distanceToUser > b.distanceToUser){
				return 1;
			}else if(a.distanceToUser < b.distanceToUser){
				return -1;
			}else{
				return 0;
			}
		})
		high.sort(function(a,b){
			if(a.distanceToUser > b.distanceToUser){
				return 1;
			}else if(a.distanceToUser < b.distanceToUser){
				return -1;
			}else{
				return 0;
			}
		})
		this.setState({dataSource: high.concat(medium, low)})
	}

	componentWillReceiveProps(){
		if(this.props.authModalVisible != this.state.authModalVisible){
			this.state.authModalVisible = this.props.authModalVisible;
		}
	}

 	setAuthFormVisible(visible) {
    	this.setState({authModalVisible: visible});
  	}

  	determineBackgroundColor(severity){
  		if(severity ==1){
  			return '#efd915'
  		}else if(severity ==2){
  			return '#ef9014'
  		}else{
  			return '#ed3510'
  		}
  	}

	render(){
		return(
				<Modal
		            animationType="slide"
		            transparent={false}
		            visible={this.state.authModalVisible}
		            onRequestClose={() => {
		              this.set(!this.state.authModalVisible);
		            }}>
		            <View>
		                <View>
		                  <TouchableHighlight
		                    style = {styles.out}
		                    onPress={() => {
		                      this.setAuthFormVisible(!this.state.authModalVisible);
		                    }}>
		                    <Icon name = "close" style = {styles.closeButton}/>
		                  </TouchableHighlight>
		                </View>
		                <View style = {styles.formView}>
		                  <Text style={styles.title}>Signals Near You</Text>
		                  {this.state.dataSource.map((item, index) => (
			                  <TouchableOpacity
						        key = {item.id}
						        style={
						        	padding: 10,
      								marginTop: 3,
								    backgroundColor: '#d9f9b1',
								    alignItems: 'center',
								    backgroundColor: determineBackgroundColor(item.severity)
						        }
							  >
							  	<Text style = {styles.text}>
                        			Severity: {item.severity}
                     			</Text>
                     			<Text style = {styles.text}>
                     				{item.description}
                     			</Text>
							  </TouchableOpacity>
						  ))
		                  }
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
	},
	container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
});
