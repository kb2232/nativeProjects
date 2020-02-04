import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import CompS from './src/screens/ComponentScreen';
import ListS from './src/screens/ListScreens';
import ImageList from './src/screens/imageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/colorScreen';
import SquareScreen from './src/screens/squareScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    CompS,
    ListS,
    ImageList,
    CounterScreen,
    ColorScreen,
    SquareScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
