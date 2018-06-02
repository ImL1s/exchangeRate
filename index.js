import { AppRegistry } from 'react-native';
// import App from './App';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/screen/HomeScreen';

// AppRegistry.registerComponent('exchangeRate', () => App);


const App = StackNavigator({
    Home: { screen: HomeScreen }
});

AppRegistry.registerComponent('exchangeRate', () => App);