import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

class DistressModal extends React.Component{
	state = {
		distressVisible : false
	}
	componentWillReceiveProps(nextProps){
		console.log(nextProps)
		if(nextProps.distressVisible && nextProps.distressVisible.visible != this.state.distressVisible){
			this.setState({distressVisible: nextProps.distressVisible.visible});
		}
	}
	componentWillMount(){
		
	}
 	setDistressVisible(visible) {
 		const {dispatch} = this.props
 		console.log("=============================")
    	this.setState({distressVisible: visible});
    	dispatch({type: "SET_DISTRESS", visible})
  	}

	render(){
		let data = [{
		    "speed": 74,
		    "balance": 29,
		    "explosives": 40,
		    "energy": 40,
		    "flexibility": 30,
		    "agility": 25,
		    "endurance": 44
		  }]

		  let options = {
		    width: 290,
		    height: 290,
		    margin: {
		      top: 20,
		      left: 20,
		      right: 30,
		      bottom: 20
		    },
		    r: 150,
		    max: 100,
		    fill: "#2980B9",
		    stroke: "#2980B9",
		    animate: {
		      type: 'oneByOne',
		      duration: 200
		    },
		    label: {
		      fontFamily: 'Arial',
		      fontSize: 14,
		      fontWeight: true,
		      fill: '#34495E'
		    }
		  }
		return(
			<View>
				<Modal
		            animationType="slide"
		            transparent={false}
		            visible={this.state.distressVisible}
		            onRequestClose={() => {
		              this.setDistressVisible(!this.state.distressVisible);
		            }}>
		            <View>
		                <View>
		                  <TouchableHighlight
		                    style = {styles.out}
		                    onPress={() => {
		                      this.setDistressVisible(!this.state.distressVisible);
		                    }}>
		                    <Icon name = "close" style = {styles.closeButton}/>
		                  </TouchableHighlight>
		                </View>
		                <View>
		                	<Text style={styles.title}>Distress Factor for Local Region</Text>
		                	<Text style={styles.explanation}>The following number (on a scale from 1 to 10) provides information about the danger of your local area.</Text>
		                	<View style={styles.triangle}>

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
    distressVisible : state.loginReducer.distressVisible
  }
}
export default connect(mapStateToProps)(DistressModal);

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
