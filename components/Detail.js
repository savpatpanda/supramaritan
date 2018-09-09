import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import NavigationService from '../NavigationService';
import Moment from 'react-moment';

export default class SeverityButtons extends React.Component {
	state = {
		incident : {
			description:null,
			time: "1976-04-19T12:59-0500"
		}
	}
	constructor(props){
		super(props);
		
	}
	componentDidMount(){
		var b = this.props.navigation.getParam('incident')
		this.setState({incident: b});
	}
	render() {
		console.log(this.state.incident)
		var desc = this.state.incident.description
		var z;
		for (var property in desc) {
		    if (desc.hasOwnProperty(property) && desc[property]){
		        z = property;
		    }
		}

    	return (
          <View>
          <Text style={styles.closeButton}> {z} </Text>
          <Moment style = {styles.date} format="YYYY/MM/DD" element={Text}>{this.state.incident.time}</Moment>
		<Image
          style={{width: 100}} //fullscreen, centered
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />
        <Text style={styles.date}>Incident reported with severity {this.state.incident.currentPriority} </Text>        
        </View>
    	);
 	}
}
const styles = StyleSheet.create({
  closeButton: {
    fontSize: 60,
    marginTop: '10%',
    alignSelf: 'flex-start',
    fontWeight : '900'
  },
  date : {
  	marginLeft: '10%',
  	alignSelf : 'flex-start',
  	fontSize : 45,
  	fontWeight : '200'
  }

});

