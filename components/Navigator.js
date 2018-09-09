import {
  createStackNavigator,
} from 'react-navigation';
import FormModal from './FormModal';
import Camera from './Camera'

const Navigator = createStackNavigator({
  Form: FormModal,
  Camera: Camera
},
{
	initialRouteName: 'FormModal'
});

export default Navigator;