import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, Button, ListView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import getListofSignals from '../Actions.modal';
import Row from './renderRow';

export default class AuthModal extends React.Component{
	
	state = {
		authModalVisible : false,
		dataSource: [];
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
		var standardDataSource - new ListView.DataSource({rowHasChnaged: (r1,r2) => r1 != r2});
		this.setState({dataSource :  standardDataSource.cloneWithRows(sortArrayByDistance(list))})
	}

	sortArrayByDistance(array){
		 var output = array.sort(compare);
		 this.setState({dataSource: output})
	}

	compare(a,b){
		if(a.distanceToUser<b.distanceToUser){
			return -1;
		}else if(a.distanceToUser>b.distanceToUser){
			return 1;
		}else{
			return 0;
		}
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
		                  <ListView
					        style={styles.container}
					        dataSource={this.state.dataSource}
					        renderRow={(data) => <Row {...data} />}
						  />
		                </View>
		            </View>
		        </Modal>	
	    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
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
	}
});
