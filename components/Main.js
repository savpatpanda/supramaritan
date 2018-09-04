import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight } from 'react-native';
import MapView from 'react-native-maps';
import ActionButton from 'react-native-circular-action-menu';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import FormModal from './FormModal';
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';

class Main extends React.Component {

  state = {
    formModalVisible: false,
    authModalVisible: false,
    currentCoordinates : {}
  }
  componentDidMount(){
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          currentCoordinates: {lat : position.coords.latitude, long : position.coords.longitude }
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }
  
  setFormModalVisible(visible) {
    this.setState({formModalVisible: visible});
  }

  setAuthModalVisible(visible) {
    this.setState({authModalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView 
          style={styles.gmap}
          region={{
              latitude: 40.442431,
              longitude: -74.662218,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
          }}
        >

          <MapView.Marker
            coordinate={{
              latitude: this.state.currentCoordinates.lat || 40.442431,
              longitude: this.state.currentCoordinates.long || -74.662218
            }}
            title={'Current location'}
            description={'My current location'}
          />

          <MapView.Marker
            coordinate={{
              latitude: 40.438036,
              longitude: -74.655580
            }}
            title={'Ivans location'}
            description={'Ivans house location'}
          />

        </MapView>

        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => {this.setFormModalVisible(true)}}>
            <Ionicons name="md-document" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {this.setAuthModalVisible(true)}}>
            <Ionicons name="md-warning" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>

        <FormModal visible = {this.state.formModalVisible}/>

        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.formModalVisible}
            onRequestClose={() => {
              this.setFormModalVisible(!this.state.formModalVisible);
            }}>
            <View style={styles.column}>
              <View style={styles.row}>
                <TouchableHighlight
                  onPress={() => {
                    this.setFormModalVisible(!this.state.formModalVisible);
                  }}>
                  <FontAwesome name = "close" style = {styles.closeButton}/>
                </TouchableHighlight>
                <View style = {styles.severityView}>
                </View>
                <View style = {styles.checkBoxView}>
                </View>
              </View>
            </View>
          </Modal>

        
      </View>
    );
  }
}
function mapStateToProps(state) {
  return state;
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  gmap:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  closeButton: {
    fontSize: 20,
    marginTop: '10%',
    marginLeft: '5%',
    
  },
  severityView: {

  },
  checkBoxView: {

  }


});

export default connect(mapStateToProps)(Main);
