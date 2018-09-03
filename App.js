import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight } from 'react-native';
import MapView from 'react-native-maps';
import ActionButton from 'react-native-circular-action-menu';
import { Ionicons, Entypo } from '@expo/vector-icons';

export default class App extends React.Component {

  state = {
    formModalVisible: false,
    authModalVisible: false
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

        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => {this.setFormModalVisible(true)}}>
            <Ionicons name="md-document" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {this.setAuthModalVisible(true)}}>
            <Ionicons name="md-warning" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.formModalVisible}
          onRequestClose={() => {
            this.setFormModalVisible(!this.state.formModalVisible);
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setFormModalVisible(!this.state.formModalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.authModalVisible}
          onRequestClose={() => {
            this.setAuthModalVisible(!this.state.authModalVisible);
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setAuthModalVisible(!this.state.authModalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
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
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});