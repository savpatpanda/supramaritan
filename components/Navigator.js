import {
  createStackNavigator,
} from 'react-navigation';

const Navigator = createStackNavigator({
  Form: { screen: FormModal },
  Camera: { screen: Camera },
});

export default Navigator;