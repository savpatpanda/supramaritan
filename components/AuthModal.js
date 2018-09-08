import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, Button, SrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AuthModal extends React.Component{
	state = {
		authModalVisible : false,
	}

	componentWillReceiveProps(){
		if(this.props.authModalVisible != this.state.authModalVisible){
			this.state.authModalVisible = this.props.authModalVisible;
		}
	}

 	setAuthFormVisible(visible) {
    	this.setState({authModalVisible: visible});
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
		                  <ScrollView
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
