import React from 'react';
import { StyleSheet, Text, View, Modal, Button, TouchableOpacity, TouchableHighlight, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getListofSignals } from '../Actions/modal';
import { connect } from 'react-redux';

class AuthModal extends React.Component{
	
	state = {
		authModalVisible : false,
		dataSource: []
	}
	passList(list){
		console.log("DECK")
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

	componentWillReceiveProps(nextProps){
		if(nextProps.authModalVisible != this.state.authModalVisible){
			this.setState({authModalVisible : nextProps.authModalVisible});
		}
		if(nextProps.incidents != this.state.incidents){
			this.setState({incidents : nextProps.incidents});
			this.passList(nextProps.incidents.incidents);
		}
	}

 	setAuthFormVisible(visible) {
    	this.setState({authModalVisible: visible});
  	}

  	determineBackgroundColor(severity){
  		if(severity ==1){
  			return '#efb802'
  		}else if(severity ==2){
  			return '#ef8802'
  		}else{
  			return '#ef4102'
  		}
  	}

  	descriptionOfIncident(description){
  		var output = 'The user has indicated that they need '
  		if(description.food){
  			output += 'Food, '
  		}
  		if(description.injury){
  			output += 'Medical Attention, '
  		}
  		if(description.other){
  			output += 'Other'
  		}
  		if(output.substring(output.length-1,output.length)==', '){
  			output = output.substring(0,output.length-1)
  		}else{
  			output += 'N/A'
  		}
  		return output;

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
		                <View>
		                	<Text style={styles.title}>Signals Near You</Text>
		           		</View>
		                <ScrollView>
		                  {this.state.dataSource.map(item => (
			                  <TouchableHighlight
						        style={{
						        	padding: 10,
      								marginTop: 3,
								    backgroundColor: '#d9f9b1',
								    alignItems: 'center',
								    backgroundColor: this.determineBackgroundColor(item.currentPriority)
						        }}
							  >
							  <View>
							  	<Text style = {styles.text}>
                        			Severity: {item.currentPriority}
                     			</Text>
                     			<Text style = {styles.text}>
                     				Description: {this.descriptionOfIncident(item.description)}
                     			</Text>
                     			</View>
							  </TouchableHighlight>
						  ))
		                  }
		                </ScrollView>
		            </View>
		        </Modal>	
	    );
    }
}
function mapStateToProps(state) {

  console.log(state.loginReducer)
  return {
    ...state,
    incidents : state.loginReducer.incidents
  }
  return state;
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
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 7
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
      color: '#000'
   }
});

export default connect(mapStateToProps)(AuthModal);

