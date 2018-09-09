import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { RNCamera } from 'react-native-camera';
import { sendPicture } from '../Actions/main'

class Camera extends React.Component{

	render(){
		return(
			<View style={styles.container}>
        		<RNCamera
            		ref={ref => {
              			this.camera = ref;
            		}}
            		style = {styles.preview}
            		type={RNCamera.Constants.Type.back}
            		flashMode={RNCamera.Constants.FlashMode.on}
            		permissionDialogTitle={'Permission to use camera'}
            		permissionDialogMessage={'We need your permission to use your camera phone'}
        		/>
        		<View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
        			<TouchableOpacity
            			onPress={this.takePicture.bind(this)}
            			style = {styles.capture}>
            			<Text style={{fontSize: 14}}> SNAP </Text>
        			</TouchableOpacity>
        		</View>
      		</View>
			)
	}

	takePicture = async function() {
    	if (this.camera) {
          const { dispatch } = this.props;

      		const options = { quality: 0.5, base64: true };
      		const data = await this.camera.takePictureAsync(options)

          var base64res = data.base64;
          dispatch(sendPicture(base64res)); 
    	}
 	};
	
}


function mapStateToProps(state) {
  return {
    ...state,
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});
export default connect(mapStateToProps)(Camera);