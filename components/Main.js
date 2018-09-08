import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, Image } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import FormModal from './FormModal';
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import {collectPoints} from '../Actions/modal';
import police from '../Images/police.png';
import hospitalImage from '../Images/hospital.png';
import { getIncidents } from '../Actions/main'

const socket = io('http://abhyanfood.herokuapp.com/');

class Main extends React.Component {

  state = {
    formModalVisible: false,
    authModalVisible: false,
    currentCoordinates : {},
    policeStations : [],
    hospitals: [],
    incidents: []
  }

  componentDidMount(){
    const { dispatch } = this.props;
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
            dispatch(getIncidents(position.coords));
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
    let points = [
    {latitude:49.986111, longitude:20.061667, weight: 100},
    {latitude:50.193139, longitude:20.288717, weight: 100},
    {latitude:49.740278, longitude:19.588611, weight: 1},
    {latitude:50.061389, longitude:19.938333, weight: 8},
    {latitude:50.174722, longitude:20.986389, weight: 11},
    {latitude:50.064507, longitude:19.920777, weight: 98},
    {latitude:49.3, longitude:19.95, weight: 41},
    {latitude:49.833333, longitude:19.940556, weight: 66},
    {latitude:49.477778, longitude:20.03, weight: 9},
    {latitude:49.975, longitude:19.828333, weight: 11},
    {latitude:50.357778, longitude:20.0325, weight: 33},
    {latitude:50.0125, longitude:20.988333, weight: 76},
    {latitude:50.067959, longitude:19.91266, weight: 63},
    {latitude:49.418588, longitude:20.323788, weight: 52},
    {latitude:49.62113, longitude:20.710777, weight: 88},
    {latitude:50.039167, longitude:19.220833, weight: 1},
    {latitude:49.970495, longitude:19.837214, weight: 78},
    {latitude:49.701667, longitude:20.425556, weight: 1},
    {latitude:50.078429, longitude:20.050861, weight: 1},
    {latitude:49.895, longitude:21.054167, weight: 1},
    {latitude:50.27722, longitude:19.569658, weight: 65},
    {latitude:49.968889, longitude:20.606389, weight: 1},
    {latitude:49.51232, longitude:19.63755, weight: 1},
    {latitude:50.018077, longitude:20.989849, weight: 35},
    {latitude:50.081698, longitude:19.895629, weight: 22},
    {latitude:49.968889, longitude:20.43, weight: 54},
    {latitude:50.279167, longitude:19.559722, weight: 1},
    {latitude:50.067947, longitude:19.912865, weight: 69},
    {latitude:49.654444, longitude:21.159167, weight: 1},
    {latitude:50.099606, longitude:20.016707, weight: 80},
    {latitude:50.357778, longitude:20.0325, weight: 99},
    {latitude:49.296628, longitude:19.959694, weight: 1},
    {latitude:50.019014, longitude:21.002474, weight: 46},
    {latitude:50.056829, longitude:19.926414, weight: 22},
    {latitude:49.616667, longitude:20.7, weight: 1},
    {latitude:49.883333, longitude:19.5, weight: 33},
    {latitude:50.054217, longitude:19.943289, weight: 1},
    {latitude:50.133333, longitude:19.4, weight: 100}
  ];
    return (
      <View style={styles.container}>
        <MapView 
          style={styles.gmap}
          provider={PROVIDER_GOOGLE}
          region={{
              latitude: 39.951895,
              longitude: -75.191028,
              latitudeDelta: 0.09,
              longitudeDelta: 0.0121
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
          {this.state.incidents.map(marker => (
            <MapView.Marker 
              coordinate={marker.coordinates}
              title={"incident"}
            />
          ))}

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
          <MapView.Heatmap points={points}
                         opacity={1}
                         radius={50}
                         onZoomRadiusChange={{
                             zoom: [0, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                             radius: [10, 10, 15, 20, 30, 60, 80, 100, 120, 150, 180, 200, 250, 250]
                          }}
                         gradient={{
                             colors: ["#79BC6A", "#BBCF4C", "#EEC20B", "#F29305", "#E50000"],
                             values: [0, 0.25, 0.50, 0.75, 1]}}
                         maxIntensity={100}
                         gradientSmoothing={10}
                         heatmapMode={"POINTS_WEIGHT"}/>  
        </MapView>

        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => {this.setFormModalVisible(true)}}>
            <Icon name="md-document" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {this.setAuthModalVisible(true)}}>
            <Icon name="md-warning" style={styles.actionButtonIcon} />
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
  console.log(state.loginReducer)
  return {
    ...state,
    incidents : state.loginReducer.response
  }
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
