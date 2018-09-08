import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, Image } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import ActionButton from 'react-native-circular-action-menu';
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';
import FormModal from './FormModal';
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import {collectPoints} from '../Actions/modal';
import police from '../Images/police.png';
import hospitalImage from '../Images/hospital.png';

//const socket = io('server location');

class Main extends React.Component {

  state = {
    formModalVisible: false,
    authModalVisible: false,
    currentCoordinates : {},
    policeStations : [],
    hospitals: []
  }

  componentDidMount(){
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          currentCoordinates: {lat : position.coords.latitude, long : position.coords.longitude }
        }, () => {
          if(this.state.policeStations.length == 0){
            collectPoints(this.state.currentCoordinates.long,this.state.currentCoordinates.lat,'police').then(set => {  
              this.setState({policeStations: set})
            });
          }
          if(this.state.hospitals.length == 0){
            console.log('here')
            collectPoints(this.state.currentCoordinates.long,this.state.currentCoordinates.lat,'hospital').then(set2 => {  
              this.setState({hospitals: set2})
            });
          }
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
    console.log(this.state.hospitals);
    return (
      <View style={styles.container}>
        <MapView 
          style={styles.gmap}
          region={{
              latitude: this.state.currentCoordinates.lat || 40.442431,
              longitude: this.state.currentCoordinates.long || -74.662218,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
          }}
          provider={PROVIDER_GOOGLE}
          customMapStyle= {[

                {
                  featureType: "poi.school",
                  stylers: [{
                    visibility: "off"
                  }]
                },
                {
                  featureType: "landscape",
                  stylers: [{
                    visibility: "off"
                  }]
                },
                {
                  featureType: "poi.park",
                  stylers: [{
                    visibility: "off"
                  }]
                },
                {
                  featureType: "poi.sports_complex",
                  stylers: [{
                    visibility: "off"
                  }]
                },
                {
                  featureType: "poi.business",
                  stylers: [{
                    visibility: "off"
                  }]
                },
                {
                  featureType: "poi.attraction",
                  stylers: [{
                    visibility: "off"
                  }]
                },
                {
                  featureType: "police",
                  geometry: 'polygon',
                  stylers: [{
                    visibility: "on"
                  }]
                },
                {
                  featureType: "poi.place_of_worship",
                  stylers: [{
                    visibility: "off"
                  }]
                },
          ]} 
        >

          <MapView.Marker
            coordinate={{
              latitude: this.state.currentCoordinates.lat || 40.442431,
              longitude: this.state.currentCoordinates.long || -74.662218
            }}
            title={'Current location'}
            description={'My current location'}
          />

          {this.state.policeStations.map(policeStation => (
            <MapView.Marker 
               coordinate={{
                  latitude: policeStation.lat,
                  longitude: policeStation.long
               }}
               title={'Police Station'}
               description={'Local officials'}
               key={policeStation.key}
            >
              <Image
                source={police}
                style={{width: 50, height:50}}
              />
            </MapView.Marker>
          ))}

          {this.state.hospitals.map(hospital => (
            <MapView.Marker 
               coordinate={{
                  latitude: hospital.lat,
                  longitude: hospital.long
               }}
               title={'Hospital'}
               description={'Medical services'}
               key={hospital.key}
            >
              <Image
                source={hospitalImage}
                style={{width: 39.4897959 , height: 50}}
              />
            </MapView.Marker>
          ))}

        </MapView>

        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => {this.setFormModalVisible(true)}}>
            <Ionicons name="md-document" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {this.setAuthModalVisible(true)}}>
            <Ionicons name="md-warning" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>

        <FormModal 
          coordinates={this.state.currentCoordinates}
          formModalVisible={this.state.formModalVisible}
        />

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
  } 
});

export default connect(mapStateToProps)(Main);
