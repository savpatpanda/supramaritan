import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default class App extends React.Component {
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
              latitude: 40.442431,
              longitude: -74.662218
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
      </View>
    );
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
  }
});