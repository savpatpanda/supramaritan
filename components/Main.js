import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, Image, TouchableWithoutFeedback } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import ActionButton from 'react-native-circular-action-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import FormModal from './FormModal';
import AuthModal from './AuthModal';
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import {collectPoints} from '../Actions/modal';
import police from '../Images/police.png';
import hospitalImage from '../Images/hospital.png';
import red_circle from '../Images/red_circle.png';
import orange_circle from '../Images/orange_circle.png';
import yellow_circle from '../Images/yellow_circle.png';
import { getIncidents } from '../Actions/main'
import NavigationService from '../NavigationService';
import io from 'socket.io-client'
const socket = io('https://abhyanfood.herokuapp.com/');



socket.on('connect', () => {
  console.log('connected');
});

socket.on('incedentUpdate', (dbUser) => {
  console.log(dbUser);
  alert("Stuff updated!");
});

class Main extends React.Component {

  state = {
    formModalVisible: false,
    authModalVisible: false,
    distressVisible: false,
    currentCoordinates : {},
    policeStations : [],
    hospitals: [],
    incidents: [],
    showHeatmap:false
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.incidents && nextProps.incidents != this.state.incidents){
      var z = [];
      var num = 0;
      nextProps.incidents.incidents.forEach((incident) => {
        z.push({...incident, key:num, latitude: incident.coordinates.lat, longitude: incident.coordinates.long, weight: 100/3*incident.currentPriority});
        num += 1;
      });
      this.setState({incidents: z});
    }
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({type:'SET_FORM',visible:false})
    dispatch({type:'SET_AUTH',visible:false})
    dispatch({type:'SET_DISTRESS',visible:false})
    console.log('ay')
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          currentCoordinates: {lat : position.coords.latitude, long : position.coords.longitude }
        }, () => {
          if(this.state.policeStations.length == 0){
            collectPoints(this.state.currentCoordinates.long, this.state.currentCoordinates.lat,'police').then(set => {  
              this.setState({policeStations: set})
            });
          }
          if(this.state.hospitals.length == 0){
            collectPoints(this.state.currentCoordinates.long, this.state.currentCoordinates.lat,'hospital').then(set2 => {  
              this.setState({hospitals: set2})
            });
          }
          console.log(position.coords)
          dispatch(getIncidents(position.coords));
        });
      },
      (error) => {
        console.log(error);
        this.setState({ error: error.message })},
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );

  }

  setAuthModalVisible(visible) {
    this.setState({authModalVisible: visible});
  }

  segueToDetailView(index){
    console.log(`${index} pressed`);
    console.log(this.state.incidents[index]);
    NavigationService.navigate('Detail', this.state.incidents[index]);

  }
  onLongPress(){
    this.setState({showHeatmap: !this.state.showHeatmap});
  }


colorChooser(severity){
    console.log(severity)
    if(severity == 1){

        return '#efb802'
      }else if(severity ==2){
        return '#ef8802'
      }else if(severity == 3){
        return '#ef4102'
      }
  }

  render() {
    return (
      <TouchableWithoutFeedback onLongPress={this.onLongPress.bind(this)}>
        <View style={styles.container}>
        <MapView 
          style={styles.gmap}
          provider={PROVIDER_GOOGLE}
          region={{
              latitude: 39.951895,
              longitude: -75.191028,
              latitudeDelta: 0.18,
              longitudeDelta: 0.0242
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
              coordinate={{
                latitude: marker.coordinates.lat,
                longitude: marker.coordinates.long}}
              title={"incident"}
              key={marker.key}
              style = {{height: 10, width: 10}}
              onPress={this.segueToDetailView.bind(this, marker.key)}
            >
            <View>
              <Icon2 name="circle" style={{
                width: 10,
                height: 12,
                color: this.colorChooser(marker.currentPriority)
              }}/>
            </View>
            </MapView.Marker>
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
                style={{width: 25, height:25}}
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
                style={{width: 19.7448979 , height: 25}}
              />
            </MapView.Marker>
          ))}
          {this.state.showHeatmap &&
          <MapView.Heatmap points={this.state.incidents}
           opacity={1}
           radius={30}
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
          }

        </MapView>

        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => {this.props.dispatch({type:'SET_FORM',visible:true})}}>
            <Icon name="md-document" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {this.props.dispatch({type:'SET_AUTH',visible:true})}}>
            <Icon name="md-warning" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Distress" onPress={() => {this.props.dispatch({type:'SET_DISTRESS',visible:true})}}>
            <Icon1 name="exclamation" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>

        <FormModal 
          coordinates={this.state.currentCoordinates}
        />

        <AuthModal
          authModalVisible={this.state.authModalVisible}
        />


      </View>

      </TouchableWithoutFeedback>

    );
  }
}

function mapStateToProps(state) {

  return {
    ...state,
    picture : state.loginReducer.base64,
    incidents : state.loginReducer.incidents,
  }
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
  camIcon:{
    fontSize: 20,
    height: 22,
    color: '#000',
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
