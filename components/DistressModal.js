import React from 'react';
import { Animated, StyleSheet, Text, View, Modal, TouchableHighlight, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import AnimateNumber from 'react-native-animate-number'

class DistressModal extends React.Component{
	state = {
		distressVisible : false,
		slideAnim: new Animated.Value(-100),
		incidents: {
			severityFactor:0,
			incidents:[],
			highest : {
				most : ""
			}
		}
	}
	componentWillReceiveProps(nextProps){
		console.log(nextProps)
		if(nextProps.distressVisible && nextProps.distressVisible.visible != this.state.distressVisible){
			this.setState({distressVisible: nextProps.distressVisible.visible});
		}
		if(nextProps.incidents && nextProps.incidents !== this.state.incidents){
			this.setState({incidents: nextProps.incidents});
			console.log('we have incidents')
		}
	}
	componentDidMount(){
		Animated.timing(                  // Animate over time
      	this.state.slideAnim,            // The animated value to drive
     	{
        	toValue: 0,                   // Animate to opacity: 1 (opaque)
        	duration: 5000,              // Make it take a while
      	}
    	).start();                        // Starts the animation
  }
 	setDistressVisible(visible) {
 		const {dispatch} = this.props
 		console.log("=============================")
    	this.setState({distressVisible: visible});
    	dispatch({type: "SET_DISTRESS", visible})
  	}

	render(){
		let { slideAnim } = this.state;
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
		                	<Animated.View                 // Special animatable View
						        style={{
						          transform: [
						              {
						                translateX: slideAnim
						              }
						            ]        // Bind opacity to animated value
						        }}
						      >
						       <AnimateNumber style={styles.animate} countBy={1} value={this.state.incidents.severityFactor}/>
						       <Text style={styles.severityText}> Severity Level </Text>
						       <AnimateNumber style={styles.animateOne} countBy={3} value={this.state.incidents.incidents.length}/>
						       <Text style={styles.severityText}> Total Incident Count </Text>
						       <Text style={styles.severityShort}> {this.state.incidents.highest.most} </Text>
						       <Text style={styles.severityText}> Incident Type ({this.state.incidents.highest.amount} times)</Text>
						      </Animated.View>

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
    distressVisible : state.loginReducer.distressVisible,
    incidents : state.loginReducer.incidents
  }
}
export default connect(mapStateToProps)(DistressModal);

const styles = StyleSheet.create({
	animate:{
		fontSize: 120,
		fontWeight:'900',
		marginLeft: '5%'
	},
	animateOne:{
		fontSize: 120,
		fontWeight:'900',
		marginLeft: '5%'
	},
	severity:{
		fontSize: 120,
		fontWeight:'900',
	},
	severityText:{
		marginTop:-15,
		fontSize:30,
		fontWeight:'200',
		left:12,
		alignSelf:'center'
	},
	severityShort:{
		fontWeight:'900',
		fontSize:80
	},
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
    alignSelf: 'center'
  },
  explanation:{
  	alignItems: 'center'
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
